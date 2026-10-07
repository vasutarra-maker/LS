import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 px-6 border-t border-slate-800 relative" style={{"backgroundColor":"#0b1536"}}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 relative z-10">
            
            {/*  Links Column  */}
            <div className="space-y-6">
                <Link to="/" className="flex items-center gap-3 mb-8">
                    <img src="https://logisticsstudio.com/wp-content/uploads/2024/04/Logistics-Studio-logo_hd-1-768x269.png" alt="Logistics Studio" className="h-12 w-auto" />
                </Link>
                <ul className="space-y-4 font-medium text-slate-300">
                    <li><Link to="/" className="hover:text-[#e85d22] transition-colors">Home</Link></li>
                    <li><Link to="/services" className="hover:text-[#e85d22] transition-colors">Services</Link></li>
                    <li><Link to="/quote" className="hover:text-[#e85d22] transition-colors">Get in Touch</Link></li>
                    <li><Link to="/resources" className="hover:text-[#e85d22] transition-colors">Resources</Link></li>
                </ul>
            </div>

            {/*  Phone & Social Column  */}
            <div className="space-y-8">
                <div>
                    <h4 className="text-[#e85d22] text-lg mb-3">Phone:</h4>
                    <p className="text-white text-lg">+1(216) 293 7917</p>
                </div>
                <div>
                    <h4 className="text-[#e85d22] text-lg mb-4">Follow us on social</h4>
                    <div className="flex items-center gap-3">
                        <a href="#" className="w-10 h-10 rounded-md bg-[#eb4a4a] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-md bg-[#eb4a4a] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-md bg-[#eb4a4a] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path></svg>
                        </a>
                    </div>
                </div>
            </div>

            {/*  Email & Location Column  */}
            <div className="space-y-8 md:col-span-2 lg:col-span-1">
                <div>
                    <h4 className="text-[#e85d22] text-lg mb-3">Email:</h4>
                    <a href="mailto:info@logisticsstudio.com" className="text-white text-lg hover:text-[#e85d22] transition-colors">info@logisticsstudio.com</a>
                </div>
                <div>
                    <h4 className="text-[#e85d22] text-lg mb-3">Location:</h4>
                    <p className="text-white text-lg leading-relaxed">
                        609 SW 8th Street 6th Floor<br />Bentonville, AR<br />72712
                    </p>
                </div>
            </div>
            
            {/*  Market Briefing (Kept from previous per instructions to blend)  */}
            <div className="space-y-6 lg:col-span-1">
                <h4 className="text-[#e85d22] text-lg mb-3">Newsletter</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                    Let's stay in touch! Join our Newsletter, so that we can reach out to you with our news and updates.
                </p>
                <form className="flex flex-col gap-3">
                    <input type="email" placeholder="john@mail.com" className="w-full bg-slate-900/50 border border-slate-700 text-white px-4 py-2 rounded-md focus:outline-none focus:border-[#e85d22] transition-colors" />
                    <button type="button" className="bg-[#e85d22] text-white font-bold px-4 py-2 rounded-md hover:bg-orange-700 transition-colors">Subscribe</button>
                </form>
            </div>

        </div>
        
        <div className="max-w-7xl mx-auto border-t border-slate-700/50 pt-8 flex items-center justify-center relative z-10">
            <p className="text-slate-400 text-sm">
                © 2026 Logistics Studio Inc. All rights reserved.
            </p>
        </div>
    </footer>
  );
}

