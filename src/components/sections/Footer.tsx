import { Building2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-[#080B13] border-t dark:border-[var(--color-dark-border)] py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & About */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-full text-white overflow-hidden border border-slate-200 dark:border-slate-800">
                <img src="/logo.png" alt="Alif PLC Logo" className="h-7 w-7 object-cover rounded-full" />
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Alif <span className="text-[var(--color-corporate-blue)]">PLC</span>
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
              Manufacturing excellence powered by modern enterprise technology. Delivering quality products and future-proof digital solutions globally.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Manufacturing</h3>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="#" className="hover:text-[var(--color-corporate-blue)] transition-colors">Soap & Detergents</a></li>
              <li><a href="#" className="hover:text-[var(--color-corporate-blue)] transition-colors">Hygiene Solutions</a></li>
              <li><a href="#" className="hover:text-[var(--color-corporate-blue)] transition-colors">Industrial Cleaning</a></li>
              <li><a href="#" className="hover:text-[var(--color-corporate-blue)] transition-colors">Distribution Network</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Technology</h3>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="#" className="hover:text-[var(--color-corporate-blue)] transition-colors">Custom ERP Systems</a></li>
              <li><a href="#" className="hover:text-[var(--color-corporate-blue)] transition-colors">Mobile Applications</a></li>
              <li><a href="#" className="hover:text-[var(--color-corporate-blue)] transition-colors">Web Web Platforms</a></li>
              <li><a href="#" className="hover:text-[var(--color-corporate-blue)] transition-colors">Cybersecurity (Upcoming)</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="#about" className="hover:text-[var(--color-corporate-blue)] transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-[var(--color-corporate-blue)] transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-[var(--color-corporate-blue)] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[var(--color-corporate-blue)] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t dark:border-[var(--color-dark-border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 dark:text-slate-500 text-sm">
            © {new Date().getFullYear()} Alif PLC. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">Twitter</a>
            <a href="#" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">LinkedIn</a>
            <a href="#" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
