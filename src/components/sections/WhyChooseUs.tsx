"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { Section } from "@/components/ui/Section"

const reasons = [
  {
    title: "Manufacturing Expertise",
    description: "Decades of profound experience delivering physical goods at unparalleled scale and uncompromising quality."
  },
  {
    title: "Technology Innovation",
    description: "Transitioning to a modern enterprise through custom software, bringing digital efficiency to physical domains."
  },
  {
    title: "Enterprise Scalability",
    description: "Our solutions are engineered to handle the demands of global supply chains and massive transaction volumes."
  },
  {
    title: "Trusted Support",
    description: "Dedicated account management backed by a team that understands both industrial and digital landscapes."
  },
  {
    title: "Quality Assurance",
    description: "Strict quality control protocols in both our physical manufacturing plants and our software development lifecycles."
  }
]

export function WhyChooseUs() {
  return (
    <Section className="bg-slate-50 dark:bg-[#0B0F19]">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
            Why Partner with Alif PLC?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
            We are not just a manufacturer or a software agency. We are an enterprise that masters both elements, providing a holistic and robust partnership for our clients.
          </p>
          
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-corporate-blue)]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {reason.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative Graphic Side */}
        <div className="hidden lg:flex relative lg:h-[600px] rounded-3xl overflow-hidden bg-[var(--color-corporate-navy)] dark:bg-[var(--color-dark-card)] p-8 items-center justify-center border border-transparent dark:border-[var(--color-dark-border)] shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-corporate-blue)]/20 to-transparent pointer-events-none" />
          
          <div className="relative max-w-sm w-full space-y-6">
            {/* Mock abstract UI representation */}
            <div className="h-24 w-full bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 flex items-center px-6 gap-4">
               <div className="w-10 h-10 rounded-full bg-[var(--color-corporate-blue)]/30" />
               <div className="space-y-2 flex-1">
                 <div className="h-2 w-3/4 bg-white/20 rounded-full" />
                 <div className="h-2 w-1/2 bg-white/10 rounded-full" />
               </div>
            </div>
            
            <div className="h-40 w-full bg-white/5 backdrop-blur-md rounded-2xl border border-white/5 p-6 flex flex-col justify-between ml-8">
               <div className="space-y-3">
                 <div className="h-2 w-full bg-white/20 rounded-full" />
                 <div className="h-2 w-5/6 bg-white/20 rounded-full" />
                 <div className="h-2 w-4/6 bg-white/20 rounded-full" />
               </div>
               <div className="self-end h-8 w-24 bg-[var(--color-corporate-blue)]/50 rounded-lg" />
            </div>

             <div className="h-24 w-10/12 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 flex items-center px-6 gap-4">
               <div className="w-10 h-10 rounded bg-[var(--color-corporate-blue)]/30" />
               <div className="space-y-2 flex-1">
                 <div className="h-2 w-2/3 bg-white/20 rounded-full" />
                 <div className="h-2 w-full bg-white/10 rounded-full" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
