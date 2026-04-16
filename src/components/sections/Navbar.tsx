"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { ThemeToggle } from "@/components/ui/ThemeToggle"
import { Building2, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/Button"

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20)
  })

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Products", href: "#manufacturing" },
    { name: "Services", href: "#technology" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm dark:bg-[var(--color-dark-bg)]/80 dark:border-b dark:border-[var(--color-dark-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-full text-white group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors overflow-hidden border border-slate-200 dark:border-slate-700">
            <img src="/logo.png" alt="Alif PLC Logo" className="h-9 w-9 object-cover rounded-full" />
          </div>
          <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            Alif <span className="text-[var(--color-corporate-blue)]">PLC</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-[var(--color-corporate-blue)] transition-colors dark:text-slate-300 dark:hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button>Partner With Us</Button>
          </div>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            className="p-2 text-slate-600 dark:text-slate-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-[var(--color-dark-bg)] shadow-lg border-t dark:border-[var(--color-dark-border)] pb-6"
        >
          <ul className="flex flex-col px-4 pt-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-slate-600 hover:text-[var(--color-corporate-blue)] dark:text-slate-300 dark:hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button className="w-full">Partner With Us</Button>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  )
}
