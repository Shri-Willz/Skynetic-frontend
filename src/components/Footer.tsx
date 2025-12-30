import { useRef } from 'react';

const Footer = () => {
  const links = {
    product: [
      { name: 'Engine', href: '#' },
      { name: 'Reverse Job Board', href: '#' },
      { name: 'Interview Prep', href: '#' },
      { name: 'Pricing', href: '#' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    resources: [
      { name: 'Docs', href: '#' },
      { name: 'Success Stories', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Support', href: '#' },
    ],
    legal: [
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
      { name: 'LinkedIn', href: '#' },
    ],
  };

  return (
    <footer className="py-20 border-t border-white/5 bg-background font-poppins">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="/skynetic.png" alt="Skynetic Logo" className="h-8 w-auto" />
              <h3 className="text-2xl font-bold tracking-wider text-white uppercase font-bebas-neue">SKYNETIC</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm poppins-footer">
              A hiring engine built for developers who value signal over noise and outcomes over applications.
            </p>
          </div>

          {/* Product Links */}
          {/* Product Links */}
          <div>
            <h4 className="font-bold text-sm tracking-widest text-white uppercase mb-6 poppins-footer">PRODUCT</h4>
            <ul className="space-y-4">
              {links.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="relative group text-muted-foreground hover:text-white transition-colors text-sm inline-block py-0.5 poppins-footer">
                    {link.name}
                    <span className="absolute bottom-0 left-1/2 w-0 h-[1.5px] bg-cyan-400 -translate-x-1/2 transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-sm tracking-widest text-white uppercase mb-6 poppins-footer">COMPANY</h4>
            <ul className="space-y-4">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="relative group text-muted-foreground hover:text-white transition-colors text-sm inline-block py-0.5 poppins-footer">
                    {link.name}
                    <span className="absolute bottom-0 left-1/2 w-0 h-[1.5px] bg-cyan-400 -translate-x-1/2 transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-bold text-sm tracking-widest text-white uppercase mb-6 poppins-footer">RESOURCES</h4>
            <ul className="space-y-4">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="relative group text-muted-foreground hover:text-white transition-colors text-sm inline-block py-0.5 poppins-footer">
                    {link.name}
                    <span className="absolute bottom-0 left-1/2 w-0 h-[1.5px] bg-cyan-400 -translate-x-1/2 transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="poppins-footer">
            © 2025 Skynetic. All rights reserved.
          </div>

          <div className="font-bold tracking-wider text-white uppercase">
            ZEKA COMPANY
          </div>

          <div className="flex items-center gap-6">
            {links.legal.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative group hover:text-white transition-colors inline-block py-0.5 poppins-footer"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-[1.5px] bg-cyan-400 -translate-x-1/2 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
