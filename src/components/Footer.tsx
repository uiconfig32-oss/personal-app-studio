import Link from "next/link";
import { Twitter } from "lucide-react";
import { appData } from "@/lib/appData";

const socialLinks = [
    { href: "https://x.com/Burak_Svl", icon: Twitter, label: "Twitter" },
];

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 border-t border-gray-100">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Burak Savkli
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Building high-quality apps for everyday life. Engineer by
                            trade, creator by choice.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/support"
                                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                                >
                                    Support
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Privacy Policies */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                            Legal
                        </h4>
                        <ul className="space-y-2">
                            {appData.map((app) => (
                                <li key={app.id}>
                                    <Link
                                        href={app.privacyPolicyUrl}
                                        className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                                    >
                                        {app.name} Privacy Policy
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} Burak Savkli. All rights reserved.
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                                aria-label={social.label}
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
