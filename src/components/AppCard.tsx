"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { AppData } from "@/lib/appData";

interface AppCardProps {
    app: AppData;
    index?: number;
}

export function AppCard({ app, index = 0 }: AppCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="group"
        >
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:border-gray-200 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                    {/* App Icon */}
                    <div className="relative w-32 h-32 rounded-[28px] overflow-hidden shadow-lg mb-5">
                        <Image
                            src={app.appIcon}
                            alt={`${app.name} icon`}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* App Info */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {app.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">{app.tagline}</p>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            {app.description}
                        </p>
                    </div>
                </div>

                {/* App Store Button */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex justify-center">
                    <a
                        href={app.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors group-hover:bg-gray-800"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                        Download on App Store
                        <ExternalLink size={14} className="opacity-60" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
