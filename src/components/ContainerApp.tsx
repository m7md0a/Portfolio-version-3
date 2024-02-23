import React from "react";

export default function ContainerApp({children, className}: {children: React.ReactNode, className?: string | null}) {
    return (
      <section className={`max-w-5xl mx-auto px-8 ${className}`}>{children}</section>
    )
  }