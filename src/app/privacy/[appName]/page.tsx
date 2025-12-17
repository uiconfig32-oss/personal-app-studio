import { notFound } from "next/navigation";
import { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { appData, getAppById } from "@/lib/appData";
import { Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PrivacyPageProps {
    params: Promise<{ appName: string }>;
}

// Generate static paths for all apps
export async function generateStaticParams() {
    return appData.map((app) => ({
        appName: app.id,
    }));
}

// Generate metadata for each app's privacy page
export async function generateMetadata({
    params,
}: PrivacyPageProps): Promise<Metadata> {
    const { appName } = await params;
    const app = getAppById(appName);

    if (!app) {
        return {
            title: "Privacy Policy Not Found",
        };
    }

    return {
        title: `${app.name} Privacy Policy | Hasan Armoush`,
        description: `Privacy Policy for ${app.name} - ${app.tagline}`,
    };
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
    const { appName } = await params;
    const app = getAppById(appName);

    if (!app) {
        notFound();
    }

    const lastUpdated = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="min-h-screen py-24 px-6">
            <div className="max-w-3xl mx-auto">
                {/* Back Link */}
                <AnimatedSection>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
                    >
                        <ArrowLeft size={18} />
                        Back to Home
                    </Link>
                </AnimatedSection>

                {/* Header */}
                <AnimatedSection delay={0.1}>
                    <div className="mb-12">
                        <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Shield size={16} />
                            Privacy Policy
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            {app.name} Privacy Policy
                        </h1>
                        <p className="text-gray-500">Last updated: {lastUpdated}</p>
                    </div>
                </AnimatedSection>

                {/* Privacy Content */}
                <AnimatedSection delay={0.2}>
                    <div className="prose prose-gray max-w-none">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Introduction
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                Welcome to {app.name}. Your privacy is important to us. This
                                Privacy Policy explains how we collect, use, disclose, and
                                safeguard your information when you use our mobile application.
                                Please read this privacy policy carefully.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Information We Collect
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We may collect information about you in a variety of ways. The
                                information we may collect via the Application includes:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>
                                    <strong>Personal Data:</strong> Information you provide when
                                    creating an account, such as your name and email address.
                                </li>
                                <li>
                                    <strong>Usage Data:</strong> Information about how you use the
                                    app, including features accessed and time spent.
                                </li>
                                <li>
                                    <strong>Device Data:</strong> Information about your mobile
                                    device, including device type and operating system version.
                                </li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                How We Use Your Information
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We use the information we collect to:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Provide, operate, and maintain the application</li>
                                <li>Improve, personalize, and expand our services</li>
                                <li>Understand and analyze how you use our application</li>
                                <li>Develop new products, services, and features</li>
                                <li>
                                    Communicate with you for customer service and support
                                </li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Data Storage and Security
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                We use industry-standard security measures to protect your
                                personal information. Your data may be stored using secure cloud
                                services. While we strive to use commercially acceptable means
                                to protect your personal information, we cannot guarantee its
                                absolute security.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Third-Party Services
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                Our application may contain links to third-party websites or
                                services that are not owned or controlled by us. We have no
                                control over, and assume no responsibility for, the content,
                                privacy policies, or practices of any third-party websites or
                                services.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Your Rights
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Depending on your location, you may have the following rights:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Access your personal data</li>
                                <li>Correct inaccurate personal data</li>
                                <li>Request deletion of your personal data</li>
                                <li>Object to processing of your personal data</li>
                                <li>Request data portability</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Contact Us
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                If you have any questions about this Privacy Policy, please
                                contact us through our{" "}
                                <Link
                                    href="/support"
                                    className="text-amber-600 hover:text-amber-700 font-medium"
                                >
                                    Support page
                                </Link>{" "}
                                or email us at{" "}
                                <a
                                    href="mailto:privacy@example.com"
                                    className="text-amber-600 hover:text-amber-700 font-medium"
                                >
                                    privacy@example.com
                                </a>
                                .
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Changes to This Policy
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                We may update our Privacy Policy from time to time. We will
                                notify you of any changes by posting the new Privacy Policy on
                                this page and updating the "Last updated" date.
                            </p>
                        </section>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
}
