"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Section } from "@/components/ui/Section"

export function ContactCTA() {
  return (
    <Section id="contact" className="bg-white dark:bg-[var(--color-dark-bg)] border-t border-slate-100 dark:border-white/5 py-20 lg:py-32">
      <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-corporate-navy)] to-blue-900 pointer-events-none" />
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

        <div className="relative z-10 p-10 md:p-16 lg:p-20 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl text-center md:text-left">
            <motion.h2
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight"
            >
              Let’s Build the Future Together
            </motion.h2>
            <motion.p
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.1 }}
               className="text-blue-100 text-lg mb-8"
            >
              Whether you are looking for premium manufacturing distribution or advanced enterprise technology solutions, Alif PLC is your reliable partner.
            </motion.p>
            
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
            >
              <Button size="lg" className="w-full sm:w-auto bg-white text-[var(--color-corporate-navy)] hover:bg-slate-100 font-semibold h-14 px-8 group">
                <Mail className="mr-2 h-5 w-5 text-slate-400 group-hover:text-[var(--color-corporate-blue)] transition-colors" />
                Contact Sales
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white font-medium h-14 px-8 group dark:border-white/20 dark:text-white dark:hover:bg-white/10 dark:bg-transparent">
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="w-full md:w-auto"
          >
             <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 text-center shadow-2xl">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
                <div className="text-blue-200 font-medium tracking-wide uppercase text-sm">Enterprise Support</div>
                <div className="mt-6 pt-6 border-t border-white/20">
                   <div className="text-xl font-semibold text-white">partner@alifplc.com</div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
