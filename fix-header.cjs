const fs = require('fs');

let header = fs.readFileSync('src/components/Header.jsx', 'utf8');
header = header.replace(
    `<button className="flex items-center gap-1 hover:text-brand-accent transition-colors cursor-pointer transform hover:-translate-y-0.5 duration-300" onClick="window.location.href='services.html'">
                        Services <i data-lucide="chevron-down" className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300"></i>
                    </button>`,
    `<Link to="/services" className="flex items-center gap-1 hover:text-brand-accent transition-colors cursor-pointer transform hover:-translate-y-0.5 duration-300">
                        Services <i data-lucide="chevron-down" className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300"></i>
                    </Link>`
);
fs.writeFileSync('src/components/Header.jsx', header, 'utf8');

console.log("Fixed Header Services Link");
