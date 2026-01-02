import React from "react";

import { Instagram, Facebook, mail } from 'lucide-react';

export const Footer = () => (
    <div className="bg-gray-50 w-full flex md:flex-row flex-col justify-center items-center p-2">
        <div className="p-2 text-center">
            <ul>
                <p className="text-stone-800 font-bold text-lg pb-2">
                    Socials
                </p>
                <div className="flex justify-center pb-1 gap-4">
                    <a
                        href="https://www.instagram.com/tj.birdandwildlife"
                        target="_blank"
                        rel="noopener noreferrer"
                       > 
                        <Instagram className="text-base cursor-pointer text-stone-800 hover:text-emerald-800 transition-colors duration-300" />
                    </a>

                    <a
                        href="https://www.facebook.com/profile.php?id=61579183964090"
                        target="_blank"
                        rel="noopener noreferrer"
                       > 
                        <Facebook className="text-base cursor-pointer text-stone-800 hover:text-emerald-800 transition-colors duration-300" />
                    </a>

                    <a
                        href="mailto:tjbawc@gmail.com"
                       > 
                        <mail className="text-base cursor-pointer text-stone-800 hover:text-emerald-800 transition-colors duration-300" />
                    </a>
                </div>
            </ul>
            <div className="mt-4 text-center text-sm text-stone-500">
        Built and maintained with ❤️ by Matthew Bu and Thomas Crosno
    </div>
        </div>
    </div>
);
