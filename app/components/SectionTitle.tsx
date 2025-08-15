import React from "react";

export const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-stone-800 mb-12">
    {children}
  </h2>
);