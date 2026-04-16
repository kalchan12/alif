"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Droplets, Sparkles, Wind, Box } from "lucide-react"
import { Section } from "@/components/ui/Section"

const products = [
  {
    icon: Sparkles,
    name: "Laundry Detergent",
    category: "Consumer Goods",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: Droplets,
    name: "Liquid Soap",
    category: "Personal Hygiene",
    color: "from-teal-500 to-emerald-400"
  },
  {
    icon: Wind,
    name: "Dishwashing Liquid",
    category: "Household",
    color: "from-yellow-400 to-orange-400"
  },
  {
    icon: Box,
    name: "Industrial Cleaning Product",
    category: "Enterprise Grade",
    color: "from-[var(--color-corporate-navy)] to-slate-600"
  }
]

export function ProductShowcase() {
  return (
    <Section id="manufacturing" className="bg-white dark:bg-[var(--color-dark-bg)]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="max-w-2xl">
          <h2 className="text-sm font-bold tracking-widest text-[var(--color-corporate-blue)] uppercase mb-4">
            Manufacturing Division
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Quality Products for Every Need
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            From household essentials to industrial-grade cleaning solutions, our manufacturing facilities produce globally certified hygiene products.
          </p>
        </div>
        <button className="hidden md:inline-flex items-center justify-center h-11 px-6 rounded-md bg-slate-100 dark:bg-[var(--color-dark-border)] text-slate-900 dark:text-white font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors whitespace-nowrap">
          View Product Catalog
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => {
          const Icon = product.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative bg-slate-50 dark:bg-[var(--color-dark-card)] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Product Image Placeholder Area */}
              <div className={`h-48 w-full bg-gradient-to-br ${product.color} opacity-10 dark:opacity-20 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity flex items-center justify-center p-8`}>
                 <Icon className={`w-20 h-20 opacity-40 text-slate-900 dark:text-white group-hover:scale-110 transition-transform duration-500`} />
              </div>
              
              <div className="p-6 border-t border-slate-100 dark:border-white/5">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
                  {product.category}
                </span>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[var(--color-corporate-blue)] transition-colors">
                  {product.name}
                </h4>
              </div>
            </motion.div>
          )
        })}
      </div>
      
      <div className="mt-10 md:hidden flex justify-center">
        <button className="w-full inline-flex items-center justify-center h-12 px-6 rounded-md bg-slate-100 dark:bg-[var(--color-dark-border)] text-slate-900 dark:text-white font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
          View Product Catalog
        </button>
      </div>
    </Section>
  )
}
