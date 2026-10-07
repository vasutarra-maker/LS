const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const sourceDir = path.join(__dirname, '..');
const pagesDir = path.join(__dirname, 'src', 'pages');
const componentsDir = path.join(__dirname, 'src', 'components');

function htmlToJsx(html) {
    if (!html) return '';
    return html
        // self closing tags
        .replace(/<img(.*?)>/g, (m, p) => p.endsWith('/') ? m : `<img${p} />`)
        .replace(/<input(.*?)>/g, (m, p) => p.endsWith('/') ? m : `<input${p} />`)
        .replace(/<br(.*?)>/g, (m, p) => p.endsWith('/') ? m : `<br${p} />`)
        .replace(/<hr(.*?)>/g, (m, p) => p.endsWith('/') ? m : `<hr${p} />`)
        // attributes
        .replace(/\sclass=/g, ' className=')
        .replace(/\sfor=/g, ' htmlFor=')
        .replace(/\sonclick=/gi, ' onClick=')
        .replace(/\sonchange=/gi, ' onChange=')
        .replace(/\sonblur=/gi, ' onBlur=')
        .replace(/\sstyle="([^"]*)"/g, (match, styleString) => {
            // Very naive style to object converter, but mostly handles simple things
            const styleObj = {};
            styleString.split(';').forEach(rule => {
                if (!rule.trim()) return;
                const [key, value] = rule.split(':');
                if (key && value) {
                    const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
                    styleObj[camelKey] = value.trim();
                }
            });
            return ` style={${JSON.stringify(styleObj)}}`;
        })
        .replace(/<!--[\s\S]*?-->/g, (match) => {
             // comment convert
             return `{/* ${match.replace(/<!--/g, '').replace(/-->/g, '')} */}`;
        });
}

// Read index.html to get Header and Footer and extract exact Home content
const indexHtml = fs.readFileSync(path.join(sourceDir, 'index.html'), 'utf-8');
const dom = new JSDOM(indexHtml);
const document = dom.window.document;

// Header
const headerEl = document.querySelector('header');
let headerJSX = htmlToJsx(headerEl.outerHTML);
headerJSX = headerJSX.replace(/<a href="([^"]+)\.html"/g, '<a href="/$1"').replace(/<a href="index\.html"/g, '<a href="/"');

const headerComponent = `import React from 'react';\n\nexport default function Header() {\n  return (\n    ${headerJSX}\n  );\n}`;
fs.writeFileSync(path.join(componentsDir, 'Header.jsx'), headerComponent);

// Footer
const footerEl = document.querySelector('footer');
let footerJSX = htmlToJsx(footerEl.outerHTML);
footerJSX = footerJSX.replace(/<a href="([^"]+)\.html"/g, '<a href="/$1"').replace(/<a href="index\.html"/g, '<a href="/"');
const footerComponent = `import React from 'react';\n\nexport default function Footer() {\n  return (\n    ${footerJSX}\n  );\n}`;
fs.writeFileSync(path.join(componentsDir, 'Footer.jsx'), footerComponent);

// Get all html files
const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.html'));

let routeImports = '';
let routeComponents = '';

files.forEach(file => {
    const pageName = file.replace('.html', '');
    let componentName = pageName === 'index' ? 'Home' : pageName.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
    // handle case where componentName might not be a valid react name, e.g. "404"
    if (/^\d/.test(componentName)) {
        componentName = 'Page' + componentName;
    }
    
    console.log(`Processing ${file} -> ${componentName}`);
    
    const content = fs.readFileSync(path.join(sourceDir, file), 'utf-8');
    const pageDom = new JSDOM(content);
    const bodyChildren = Array.from(pageDom.window.document.body.children);
    
    let pageJSX = '';
    bodyChildren.forEach(el => {
        if (el.nodeName !== 'SCRIPT' && el.nodeName !== 'STYLE' && el.nodeName !== 'HEADER' && el.nodeName !== 'FOOTER') {
            pageJSX += el.outerHTML + '\n';
        }
    });
    
    pageJSX = htmlToJsx(pageJSX);
    
    // Fix links
    pageJSX = pageJSX.replace(/<a href="([^"]+)\.html(#?[^"]*)"/g, '<a href="/$1$2"').replace(/<a href="index\.html"/g, '<a href="/"');
    
    // Check if it has scroll-animate fragments
    let useEffectHook = '';
    if (pageJSX.includes('scroll-animate') && !pageJSX.includes('fragment-box')) {
        useEffectHook = `
  React.useEffect(() => {
    const cards = document.querySelectorAll('.fretrix-card.scroll-animate');
    cards.forEach(card => {
        const imgContainer = card.querySelector('.h-48.relative');
        if(!imgContainer) return;
        const img = imgContainer.querySelector('img');
        if(!img) return;
        
        const src = img.src;
        img.style.opacity = '0'; // Hide original
        
        // Remove existing grid container if any (React strict mode duplicate call fix)
        const existing = imgContainer.querySelector('.fragment-grid-container');
        if(existing) existing.remove();

        const gridContainer = document.createElement('div');
        gridContainer.className = 'fragment-grid-container absolute inset-0 z-0 grid w-full h-full transition-transform duration-700 group-hover:scale-110';
        gridContainer.style.gridTemplateColumns = 'repeat(5, 1fr)';
        gridContainer.style.gridTemplateRows = 'repeat(4, 1fr)';
        
        for(let row=0; row<4; row++) {
            for(let col=0; col<5; col++) {
                const box = document.createElement('div');
                box.style.backgroundImage = \`url(\${src})\`;
                box.style.backgroundSize = '500% 400%';
                box.style.backgroundPosition = \`\${(col / 4) * 100}% \${(row / 3) * 100}%\`;
                
                // Initial scattered state
                const transX = (Math.random() - 0.5) * 300;
                const transY = (Math.random() - 0.5) * 300 - 150;
                const rot = (Math.random() - 0.5) * 180;
                
                box.style.transform = \`translate(\${transX}px, \${transY}px) rotate(\${rot}deg) scale(0)\`;
                box.style.opacity = '0';
                box.style.transition = \`all 1s cubic-bezier(0.16, 1, 0.3, 1) \${Math.random() * 0.4}s\`;
                
                box.classList.add('fragment-box');
                gridContainer.appendChild(box);
            }
        }
        imgContainer.appendChild(gridContainer);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                
                // Trigger fragment assembly
                const fragments = entry.target.querySelectorAll('.fragment-box');
                fragments.forEach(f => {
                    f.style.transform = 'translate(0, 0) rotate(0) scale(1)';
                    f.style.opacity = '1';
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
    
    return () => {
        observer.disconnect();
    };
  }, []);
`;
    }

    const componentCode = `import React from 'react';\n\nexport default function ${componentName}() {\n${useEffectHook}\n  return (\n    <>\n${pageJSX}\n    </>\n  );\n}`;
    
    fs.writeFileSync(path.join(pagesDir, `${componentName}.jsx`), componentCode);
    
    const routePath = pageName === 'index' ? '/' : `/${pageName}`;
    routeImports += `import ${componentName} from './pages/${componentName}';\n`;
    routeComponents += `          <Route path="${routePath}" element={<${componentName} />} />\n`;
});

// Write App.jsx
const appCode = `import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
${routeImports}
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
${routeComponents}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
`;
fs.writeFileSync(path.join(__dirname, 'src', 'App.jsx'), appCode);

console.log("Migration completed!");
