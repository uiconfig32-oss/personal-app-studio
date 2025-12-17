import { AnimatedSection } from "@/components/AnimatedSection";
import { AppCard } from "@/components/AppCard";
import { appData } from "@/lib/appData";
import { ArrowDown, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Sparkles size={16} />
              App Creator
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-6">
              Engineer by Trade,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                Creator by Choice.
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Building high-quality apps for everyday life. Crafting
              experiences that feel natural, beautiful, and genuinely useful.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <a
              href="#apps"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105 active:scale-100"
            >
              View My Apps
              <ArrowDown size={18} />
            </a>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={24} />
        </div>
      </section>

      {/* App Showcase Section */}
      <section id="apps" className="py-24 px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                My Apps
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Thoughtfully designed apps that solve real problems and bring
                joy to everyday tasks.
              </p>
            </div>
          </AnimatedSection>

          {/* Apps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {appData.map((app, index) => (
              <AppCard key={app.id} app={app} index={index} />
            ))}

            {/* Placeholder for future apps - only show if we have odd number */}
            {appData.length % 2 !== 0 && (
              <AnimatedSection
                delay={appData.length * 0.1}
                className="flex items-center justify-center"
              >
                <div className="bg-white/50 border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center w-full h-full min-h-[200px] flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
                    <Sparkles className="text-gray-400" size={28} />
                  </div>
                  <p className="text-gray-500 font-medium">More apps coming soon...</p>
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Photo */}
            <AnimatedSection>
              <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-200 rounded-3xl transform rotate-3" />
                <div className="relative rounded-3xl w-full h-full overflow-hidden shadow-xl">
                  <Image
                    src="/images/burak-savkli.jpg"
                    alt="Burak Savkli"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Bio */}
            <AnimatedSection delay={0.2}>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  About Me
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Hi! I'm <span className="font-semibold text-gray-900">Burak Savkli</span>,
                    an Energy Systems Engineer who discovered a passion for
                    creating digital products that make a difference in
                    people's daily lives.
                  </p>
                  <p>
                    My engineering background taught me to think systematically,
                    analyze complex problems, and find elegant solutions. I
                    bring that same rigor to app development—combining technical
                    precision with thoughtful design.
                  </p>
                  <p>
                    When I'm not coding, you'll find me reading (hence
                    Readnest!), exploring new technologies, or thinking about
                    how software can solve everyday problems in creative ways.
                  </p>
                  <p className="text-gray-500 italic">
                    I believe the best apps are the ones that feel invisible—they
                    enhance your life without getting in the way.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Have a question or feedback?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              I'd love to hear from you. Whether it's a bug report, feature
              request, or just saying hello—my inbox is open.
            </p>
            <a
              href="/support"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-medium transition-all hover:scale-105 active:scale-100"
            >
              Get in Touch
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
