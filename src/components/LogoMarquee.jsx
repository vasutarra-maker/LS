import React from 'react';
import { motion } from 'framer-motion';

export default function LogoMarquee() {
  return (
    <section data-no-fx className="bg-white pt-16 pb-12 border-b border-slate-200">
      <motion.div className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="flex items-end gap-0.5 h-7">
            {[2, 3, 2, 4, 3, 5, 4, 6, 5, 7].map((h, i) => (
              <motion.div key={i} className="w-1.5 rounded-t bg-brand-accent"
                initial={{ height: 0 }}
                whileInView={{ height: `${h * 3.5}px` }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.05, duration: 0.4 }} />
            ))}
          </div>
          <span className="text-brand-accent font-semibold text-sm uppercase tracking-wider">Trusted Network</span>
        </div>
        <h2 className="text-4xl font-display font-bold text-slate-900">
          Our <span className="text-brand-accent">Partners</span>
        </h2>
      </motion.div>
      <div className="overflow-hidden flex relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          className="flex gap-16 md:gap-24 items-center w-max pl-16 md:pl-24"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {[
            'https://logisticsstudio.com/wp-content/uploads/2024/05/echo-icon-removebg-preview-modified-fotor-2024051722614.png',
            'https://logisticsstudio.com/wp-content/uploads/2024/04/JB-Hunt-size-4-1-Kittl.svg',
            'https://logisticsstudio.com/wp-content/uploads/2024/04/Transplace-logo-2-1-Kittl.svg',
            'https://logisticsstudio.com/wp-content/uploads/2024/04/Choptanklogo-1-Kittl.svg',
            'https://logisticsstudio.com/wp-content/uploads/2024/04/Simple-Logo-Schema-1-Kittl.svg',
            'https://logisticsstudio.com/wp-content/uploads/2024/05/pgt-1.png',
          ].concat([
            'https://logisticsstudio.com/wp-content/uploads/2024/05/echo-icon-removebg-preview-modified-fotor-2024051722614.png',
            'https://logisticsstudio.com/wp-content/uploads/2024/04/JB-Hunt-size-4-1-Kittl.svg',
            'https://logisticsstudio.com/wp-content/uploads/2024/04/Transplace-logo-2-1-Kittl.svg',
            'https://logisticsstudio.com/wp-content/uploads/2024/04/Choptanklogo-1-Kittl.svg',
            'https://logisticsstudio.com/wp-content/uploads/2024/04/Simple-Logo-Schema-1-Kittl.svg',
            'https://logisticsstudio.com/wp-content/uploads/2024/05/pgt-1.png',
          ]).concat([
            'https://logisticsstudio.com/wp-content/uploads/2024/05/echo-icon-removebg-preview-modified-fotor-2024051722614.png',
            'https://logisticsstudio.com/wp-content/uploads/2024/04/JB-Hunt-size-4-1-Kittl.svg',
            'https://logisticsstudio.com/wp-content/uploads/2024/04/Transplace-logo-2-1-Kittl.svg',
            'https://logisticsstudio.com/wp-content/uploads/2024/04/Choptanklogo-1-Kittl.svg',
            'https://logisticsstudio.com/wp-content/uploads/2024/04/Simple-Logo-Schema-1-Kittl.svg',
            'https://logisticsstudio.com/wp-content/uploads/2024/05/pgt-1.png',
          ]).concat([
            'https://logisticsstudio.com/wp-content/uploads/2024/05/echo-icon-removebg-preview-modified-fotor-2024051722614.png',
            'https://logisticsstudio.com/wp-content/uploads/2024/04/JB-Hunt-size-4-1-Kittl.svg',
            'https://logisticsstudio.com/wp-content/uploads/2024/04/Transplace-logo-2-1-Kittl.svg',
            'https://logisticsstudio.com/wp-content/uploads/2024/04/Choptanklogo-1-Kittl.svg',
            'https://logisticsstudio.com/wp-content/uploads/2024/04/Simple-Logo-Schema-1-Kittl.svg',
            'https://logisticsstudio.com/wp-content/uploads/2024/05/pgt-1.png',
          ]).map((src, i) => (
            <img key={i} src={src} className="h-12 w-auto object-contain grayscale transition-all duration-300 opacity-60 hover:opacity-100 hover-brand-filter" alt="" />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
