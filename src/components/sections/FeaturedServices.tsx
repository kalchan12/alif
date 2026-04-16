"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Database, Smartphone, Globe, Code, Shield, Network } from "lucide-react"
import { Section } from "@/components/ui/Section"

const services = [
  {
    icon: Database,
    title: "ERP Solutions",
    description: "Custom enterprise resource planning systems streamlining operations, supply chain, and HR.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps delivering seamless experiences for customers and workforce.",
  },
  {
    icon: Globe,
    title: "Web Platforms",
    description: "Highly scalable web applications built for speed, reliability, and global reach.",
  },
  {
    icon: Code,
    title: "Enterprise Software",
    description: "Bespoke software development tailored for complex business workflows and data compliance.",
  },
  {
    icon: Shield,
    title: "Cybersecurity Services",
    description: "Future-ready penetration testing and robust security consulting to protect enterprise assets.",
  },
  {
    icon: Network,
    title: "Distribution Systems",
    description: "Intelligent inventory and logistics routing platforms to optimize manufacturing distribution.",
  },
]

export function FeaturedServices() {
  return (
    <Section id="technology" className="bg-slate-50 dark:bg-[#0B0F19]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-sm font-bold tracking-widest text-[var(--color-corporate-blue)] uppercase mb-4">
          Technology Division
        </h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
          Digital Solutions for the Modern Enterprise
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          We transform businesses through innovative technology, providing everything from foundational ERP systems to advanced cybersecurity.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-[var(--color-dark-card)] p-8 rounded-2xl border border-slate-200 dark:border-[var(--color-dark-border)] shadow-sm hover:shadow-md dark:shadow-none hover:border-[var(--color-corporate-blue)]/30 dark:hover:border-[var(--color-corporate-blue)]/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[var(--color-corporate-blue)] transition-all duration-300">
                <Icon className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
                {service.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
