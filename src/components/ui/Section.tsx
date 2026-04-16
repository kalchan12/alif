import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  containerClassName?: string
}

export function Section({ className, containerClassName, children, ...props }: SectionProps) {
  return (
    <section
      className={cn("w-full py-12 md:py-20 lg:py-32", className)}
      {...props}
    >
      <div className={cn("container mx-auto px-4 md:px-6", containerClassName)}>
        {children}
      </div>
    </section>
  )
}
