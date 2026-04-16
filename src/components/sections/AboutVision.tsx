"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Section } from "@/components/ui/Section"

export function AboutVision() {
  return (
    <Section id="about" className="bg-white dark:bg-[var(--color-dark-bg)]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold tracking-widest text-[var(--color-corporate-blue)] uppercase mb-4">
            Our Vision
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-8 leading-tight">
            Bridging the physical and digital divide for a smarter tomorrow.
          </h3>
          
          <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400">
            <p>
              Founded on the principles of reliability and quality, Alif PLC began its journey as a premium manufacturer of daily essential goods. Over the years, we recognized that the key to modern industrial progression lies in the adoption of bleeding-edge technology.
            </p>
            <p>
              Today, we stand at a unique intersection. We leverage our rich heritage in manufacturing to understand the complexities of real-world scale, while our technology division pioneers software solutions that drive efficiency, connectivity, and security.
            </p>
            <p className="font-semibold text-slate-900 dark:text-white mt-8">
              We are not just evolving; we are redefining what a modern enterprise looks like.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
