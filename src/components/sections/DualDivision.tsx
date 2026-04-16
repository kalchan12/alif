"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Factory, Laptop, ArrowRight } from "lucide-react"
import { Section } from "@/components/ui/Section"

export function DualDivision() {
  return (
    <Section className="bg-white dark:bg-[var(--color-dark-bg)] -mt-10 relative z-20" containerClassName="max-w-6xl">
      <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
        
        {/* Manufacturing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="group relative bg-slate-50 dark:bg-[var(--color-dark-card)] rounded-3xl p-8 lg:p-12 border border-slate-200 dark:border-[var(--color-dark-border)] shadow-sm hover:shadow-xl dark:shadow-none hover:border-[var(--color-corporate-blue)]/50 dark:hover:border-[var(--color-corporate-blue)]/50 transition-all duration-300 overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
            <Factory className="w-48 h-48 text-[var(--color-corporate-navy)] dark:text-white" />
          </div>

          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-slate-200/50 dark:bg-slate-800 flex items-center justify-center mb-8">
              <Factory className="w-7 h-7 text-slate-700 dark:text-slate-300" />
            </div>
            
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Manufacturing Division
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Decades of excellence in producing high-quality consumer and industrial goods designed to meet global standards.
            </p>
            
            <ul className="space-y-3 mb-10">
              {['Premium Soap Manufacturing', 'Industrial Detergents', 'Hygiene Solutions', 'Advanced Cleaning Products'].map((item, i) => (
                <li key={i} className="flex items-center text-slate-700 dark:text-slate-300 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-corporate-blue)] mr-3" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="text-[var(--color-corporate-blue)] dark:text-blue-400 font-semibold inline-flex items-center group-hover:underline underline-offset-4">
              View Manufacturing Details
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Technology Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group relative bg-[var(--color-corporate-navy)] dark:bg-[var(--color-dark-card)] rounded-3xl p-8 lg:p-12 border border-transparent dark:border-[var(--color-dark-border)] shadow-lg hover:shadow-xl dark:shadow-none hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
        >
          {/* subtle gradient glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
            <Laptop className="w-48 h-48 text-white" />
          </div>

          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-white/10 dark:bg-white/5 flex items-center justify-center mb-8 backdrop-blur-sm">
              <Laptop className="w-7 h-7 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-4">
              Technology Division
            </h2>
            <p className="text-slate-300 dark:text-slate-400 mb-8 leading-relaxed">
              Driving digital transformation through scalable enterprise software, mobile experiences, and secure platforms.
            </p>
            
            <ul className="space-y-3 mb-10">
              {['Enterprise ERP Systems', 'Mobile & Web Applications', 'Business Software Solutions', 'Cybersecurity Services (Future)'].map((item, i) => (
                <li key={i} className="flex items-center text-slate-200 dark:text-slate-300 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="text-blue-400 font-semibold inline-flex items-center group-hover:text-white transition-colors group-hover:underline underline-offset-4">
              Explore Tech Solutions
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

      </div>
    </Section>
  )
}
