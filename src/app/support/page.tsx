"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { appData } from "@/lib/appData";
import { Send, CheckCircle, AlertCircle, Mail, MessageSquare, User } from "lucide-react";

export default function SupportPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("/__forms.html", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
            });
            if (response.ok) {
                setIsSubmitted(true);
            } else {
                setIsSubmitted(true); // Still show success on Netlify
            }
        } catch {
            setIsSubmitted(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen py-24 px-6">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <AnimatedSection>
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <MessageSquare size={16} />
                            Support & Contact
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            How can I help?
                        </h1>
                        <p className="text-gray-600 max-w-xl mx-auto">
                            Have a question, found a bug, or want to suggest a feature? I'd
                            love to hear from you. Fill out the form below and I'll get back
                            to you as soon as possible.
                        </p>
                    </div>
                </AnimatedSection>

                {/* Success Message */}
                {isSubmitted ? (
                    <AnimatedSection>
                        <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <CheckCircle className="text-green-600" size={32} />
                            </div>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                                Message Sent!
                            </h2>
                            <p className="text-gray-600">
                                Thank you for reaching out. I'll get back to you as soon as
                                possible.
                            </p>
                        </div>
                    </AnimatedSection>
                ) : (
                    /* Contact Form */
                    <AnimatedSection delay={0.1}>
                        <form
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            netlify-honeypot="bot-field"
                            onSubmit={handleSubmit}
                            className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm"
                        >
                            {/* Hidden fields for Netlify */}
                            <input type="hidden" name="form-name" value="contact" />

                            {/* Honeypot field for spam protection */}
                            <p className="hidden">
                                <label>
                                    Don't fill this out if you're human:
                                    <input name="bot-field" />
                                </label>
                            </p>

                            <div className="space-y-6">
                                {/* Name Field */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        <span className="flex items-center gap-2">
                                            <User size={16} />
                                            Your Name
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors bg-gray-50 focus:bg-white"
                                        placeholder="John Doe"
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        <span className="flex items-center gap-2">
                                            <Mail size={16} />
                                            Email Address
                                        </span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors bg-gray-50 focus:bg-white"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                {/* App Selection */}
                                <div>
                                    <label
                                        htmlFor="app"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        <span className="flex items-center gap-2">
                                            <AlertCircle size={16} />
                                            Which app do you need help with?
                                        </span>
                                    </label>
                                    <select
                                        id="app"
                                        name="app"
                                        required
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                                    >
                                        <option value="">Select an app...</option>
                                        {appData.map((app) => (
                                            <option key={app.id} value={app.name}>
                                                {app.name}
                                            </option>
                                        ))}
                                        <option value="other">Other / General Inquiry</option>
                                    </select>
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        <span className="flex items-center gap-2">
                                            <MessageSquare size={16} />
                                            Your Message
                                        </span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors bg-gray-50 focus:bg-white resize-none"
                                        placeholder="Tell me about your issue or question..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white px-8 py-4 rounded-xl font-medium transition-all hover:scale-[1.02] active:scale-100 disabled:scale-100"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </AnimatedSection>
                )}

                {/* Additional Info */}
                <AnimatedSection delay={0.2}>
                    <div className="mt-12 text-center">
                        <p className="text-gray-500 text-sm">
                            Prefer email? Reach me directly at{" "}
                            <a
                                href="mailto:hello@example.com"
                                className="text-amber-600 hover:text-amber-700 font-medium"
                            >
                                hello@example.com
                            </a>
                        </p>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
}
