const fs = require('fs');
const path = require('path');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // We want to replace <a href="/something" ... >...</a> with <Link to="/something" ...>...</Link>
    // This regex matches an <a> tag that has an href starting with a forward slash.
    // It captures the stuff before href, the url, the stuff after href, and the inner content.
    // It won't work well for nested tags if they have <a> inside, but <a> inside <a> is illegal anyway.
    
    // Non-greedy match for everything inside the tag: <a\b([^>]*)href="(\/[^"]*)"([^>]*)>([\s\S]*?)<\/a>
    const linkRegex = /<a\b([^>]*)href="(\/[^"]*)"([^>]*)>([\s\S]*?)<\/a>/g;
    
    content = content.replace(linkRegex, (match, beforeHref, url, afterHref, innerText) => {
        return `<Link ${beforeHref.trim()} to="${url}" ${afterHref.trim()}>${innerText}</Link>`.replace(/\s+/g, ' ').replace('> <', '><');
    });

    // We also have <a href="#"> in some places, we can leave those or change to <Link to="#">. Let's leave them.

    if (content !== originalContent) {
        // Ensure import { Link } is at the top
        if (!content.includes("import { Link }")) {
            content = content.replace(/import React[^;]*;/, "$&\nimport { Link } from 'react-router-dom';");
        }
        fs.writeFileSync(filePath, content, 'utf8');
        console.log("Updated", filePath);
    }
}

function findFiles(dir) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
        const fullPath = path.join(dir, item);
        if (fs.statSync(fullPath).isDirectory()) {
            findFiles(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            processFile(fullPath);
        }
    }
}

findFiles(path.join(__dirname, 'src'));
