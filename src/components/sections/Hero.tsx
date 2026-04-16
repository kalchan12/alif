"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Section } from "@/components/ui/Section"

export function Hero() {
  return (
    <Section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center min-h-[90vh]">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 bg-slate-50 dark:bg-[var(--color-dark-bg)]" />
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-slate-300/20 dark:bg-slate-800/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm font-medium text-slate-800 dark:text-slate-200 mb-6 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-[var(--color-corporate-blue)]"></span>
            A New Era for Alif PLC
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-8"
        >
          Manufacturing Excellence,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-corporate-blue)] to-blue-400">
            Powered by Technology
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          We are an established industry leader bridging our deep-rooted heritage in premium manufacturing with cutting-edge enterprise software and mobile solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="w-full sm:w-auto h-14 text-base px-8 group">
            Explore Products
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 text-base px-8 group bg-white/50 dark:bg-[#111827]/50 backdrop-blur-sm">
            Our Solutions
            <ChevronRight className="ml-1 h-5 w-5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" />
          </Button>
        </motion.div>
      </div>
    </Section>
  )
}
