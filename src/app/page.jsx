"use client"

import React from "react"
import { Github, Zap, BarChart3, Globe, ArrowRight, Users } from "lucide-react"
// Ensure this path matches where you saved your FAQ component
import { FAQAccordion } from "./components/faq-accordion"

// --- INTERNAL UI COMPONENTS (Replacing missing external files) ---

const Button = ({ children, className, variant = "default", size = "default", ...props }) => {
  const base = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50"
  
  const variants = {
    default: "bg-green-400 text-slate-950 hover:bg-green-300",
    outline: "border border-purple-400/50 text-purple-400 hover:bg-purple-400/10 bg-transparent",
  }
  
  const sizes = {
    default: "h-10 px-4 py-2",
    lg: "h-11 px-8 rounded-md text-base",
  }

  const variantClass = variants[variant] || variants.default
  const sizeClass = sizes[size] || sizes.default
  
  return (
    <button className={`${base} ${variantClass} ${sizeClass} ${className || ""}`} {...props}>
      {children}
    </button>
  )
}

const Card = ({ className, children }) => (
  <div className={`rounded-lg border shadow-sm ${className || ""}`}>{children}</div>
)

const CardHeader = ({ className, children }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className || ""}`}>{children}</div>
)

const CardTitle = ({ className, children }) => (
  <h3 className={`font-semibold leading-none tracking-tight ${className || ""}`}>{children}</h3>
)

const CardDescription = ({ className, children }) => (
  <p className={`text-sm text-slate-400 ${className || ""}`}>{children}</p>
)

const CardContent = ({ className, children }) => (
  <div className={`p-6 pt-0 ${className || ""}`}>{children}</div>
)

// --- MAIN PAGE CONTENT ---

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden cyberpunk-grid">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Background glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-green-400/10 rounded-full blur-3xl opacity-30 pointer-events-none" />

        <div className="relative z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-mono font-bold text-center mb-6 tracking-tight">
            <span className="text-green-400">Turn Commits</span> into <span className="text-purple-400">Content</span>
          </h1>

          <p className="text-center text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8 text-balance">
            Stop writing status updates manually. GitStory turns your raw code diffs into beautiful changelogs and blog
            posts instantly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-green-400 hover:bg-green-300 text-slate-950 font-mono font-bold text-base">
              <Github className="mr-2 h-5 w-5" />
              Connect GitHub
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-400/50 text-purple-400 hover:bg-purple-400/10 font-mono font-bold text-base bg-transparent"
            >
              See Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-y border-slate-900/50 bg-slate-900/20">
        <div className="text-center">
          <p className="text-slate-400 text-sm font-mono mb-6">Trusted by 10,000+ developers at</p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-slate-200 font-mono text-xl font-bold">TechCorp</span>
            <span className="text-slate-200 font-mono text-xl font-bold">DevStudio</span>
            <span className="text-slate-200 font-mono text-xl font-bold">OpenAI</span>
            <span className="text-slate-200 font-mono text-xl font-bold">Vercel</span>
            <span className="text-slate-200 font-mono text-xl font-bold">Stripe</span>
          </div>
        </div>
      </section>

      {/* Visual Demo Section - UPDATED TO SIDE-BY-SIDE ON MD SCREENS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-mono font-bold text-center mb-16 text-purple-400">See the Magic</h2>

        {/* Changed grid-cols-1 lg:grid-cols-2 to md:grid-cols-2 so it is side-by-side on laptops too */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Code Input - VS Code Style */}
          <div className="glass-morphism border border-green-400/30 rounded-lg overflow-hidden shadow-2xl bg-slate-900">
            {/* VS Code Title Bar */}
            <div className="bg-slate-800/80 border-b border-green-400/20 px-4 py-2 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
              </div>
              <span className="text-xs text-slate-400 font-mono ml-4">auth.ts - GitStory</span>
            </div>

            {/* Code Content */}
            <div className="p-6 font-mono text-sm overflow-hidden bg-slate-950/50">
              <div className="text-green-400 mb-4 text-xs opacity-60">// Raw Git Diff</div>
              <div className="space-y-2">
                <div className="text-slate-500">
                  <span className="text-purple-400">1</span> <span className="text-blue-300">const</span>{" "}
                  <span className="text-slate-300">authenticate</span> ={" "}
                  <span className="text-slate-300">(user) =&gt; &#123;</span>
                </div>
                <div className="bg-red-500/10 border-l-2 border-red-400 pl-2">
                  <span className="text-purple-400">2</span> <span className="text-red-400">- const</span>{" "}
                  <span className="text-red-300">oldLogic</span> ={" "}
                  <span className="text-slate-300">user === auth;</span>
                </div>
                <div className="bg-green-500/10 border-l-2 border-green-400 pl-2">
                  <span className="text-purple-400">3</span> <span className="text-green-400">+ return</span>{" "}
                  <span className="text-yellow-300">verify</span>
                  <span className="text-slate-300">(user, auth);</span>
                </div>
                <div className="text-slate-500">
                  <span className="text-purple-400">4</span> <span className="text-slate-300">&#125;;</span>
                </div>
                <div className="mt-4 text-slate-500">
                  <span className="text-purple-400">5</span>
                </div>
                <div className="text-green-400/60 text-xs">
                  <span className="text-purple-400">6</span> // @@ Improved security layer @@
                </div>
              </div>
            </div>
          </div>

          {/* Arrow/Transform - UPDATED to work on MD screens */}
          <div className="hidden md:flex justify-center md:absolute md:left-1/2 md:-translate-x-1/2 md:z-10 md:top-1/2">
            <div className="bg-slate-950 rounded-full p-2 border border-slate-800">
               <ArrowRight className="text-slate-400 w-8 h-8 animate-pulse" />
            </div>
          </div>

          {/* Blog Output */}
          <div className="glass-morphism border border-purple-400/30 rounded-lg p-8 space-y-4 shadow-2xl bg-slate-900/50 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              <span className="text-xs text-purple-400 font-mono">Generated in 2.3s</span>
            </div>
            <h3 className="text-green-400 font-mono font-bold text-2xl">Authentication Layer Improvements</h3>
            <div className="text-xs text-slate-500 font-mono">Published: March 15, 2025</div>
            <p className="text-slate-300 leading-relaxed">
              This week, we significantly enhanced our authentication system by refactoring the core logic to use a
              verification-based approach. The new implementation provides stronger security while maintaining backwards
              compatibility with existing integrations.
            </p>
            <div className="flex gap-2 pt-2">
              <span className="text-xs bg-green-400/20 text-green-300 px-3 py-1 rounded-full font-mono">security</span>
              <span className="text-xs bg-purple-400/20 text-purple-300 px-3 py-1 rounded-full font-mono">auth</span>
              <span className="text-xs bg-blue-400/20 text-blue-300 px-3 py-1 rounded-full font-mono">refactor</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-mono font-bold text-center mb-16 text-green-400">Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <Card className="bg-slate-900 border-green-400/30 hover:border-green-400/60 transition-colors">
            <CardHeader>
              <div className="mb-4 w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-green-400" />
              </div>
              <CardTitle className="text-xl font-mono text-green-400">Semantic Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300">
                Understands the 'why' behind your code changes. AI-powered insights extract meaning from your commits
                automatically.
              </p>
            </CardContent>
          </Card>

          {/* Feature 2 */}
          <Card className="bg-slate-900 border-purple-400/30 hover:border-purple-400/60 transition-colors">
            <CardHeader>
              <div className="mb-4 w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-purple-400" />
              </div>
              <CardTitle className="text-xl font-mono text-purple-400">Manager-Ready Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300">
                Generates stand-up summaries automatically. Share weekly updates in seconds, not hours.
              </p>
            </CardContent>
          </Card>

          {/* Feature 3 */}
          <Card className="bg-slate-900 border-green-400/30 hover:border-green-400/60 transition-colors">
            <CardHeader>
              <div className="mb-4 w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-green-400" />
              </div>
              <CardTitle className="text-xl font-mono text-green-400">Portfolio Sync</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300">
                Auto-updates your personal website. Keep your portfolio and portfolio blog in sync effortlessly.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-mono font-bold text-center mb-16 text-purple-400">
          Loved by Developers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <Card className="bg-slate-900 border-green-400/30">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-green-400" />
                <CardTitle className="text-base font-mono text-green-400">Senior Engineer, TechCorp</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 mb-4">
                "GitStory saved me 5 hours a week on status updates. I just connect my repo and it generates beautiful
                blog posts. Incredible."
              </p>
              <div className="text-sm text-slate-400">— Sarah Chen</div>
            </CardContent>
          </Card>

          {/* Testimonial 2 */}
          <Card className="bg-slate-900 border-purple-400/30">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-purple-400" />
                <CardTitle className="text-base font-mono text-purple-400">Senior Engineer, StartupXYZ</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 mb-4">
                "Finally, a tool that makes documentation effortless. Our changelogs went from boring to actually
                readable. Team loves it."
              </p>
              <div className="text-sm text-slate-400">— Marcus Rodriguez</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-mono font-bold text-center mb-16 text-green-400">Simple Pricing</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Hobbyist Plan */}
          <Card className="bg-slate-900 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl font-mono text-green-400">Hobbyist</CardTitle>
              <div className="text-4xl font-mono font-bold text-white">Free</div>
              <CardDescription className="text-slate-400">Forever free for personal projects</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Button className="w-full bg-green-400 hover:bg-green-300 text-slate-950 font-mono font-bold">
                Get Started
              </Button>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  Up to 5 repos
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  Basic blog generation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  Community support
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* 10x Dev Plan */}
          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-green-400 relative">
            <div className="absolute -top-4 right-4 bg-green-400 text-slate-950 px-3 py-1 rounded-full font-mono text-xs font-bold">
              Popular
            </div>
            <CardHeader>
              <CardTitle className="text-2xl font-mono text-green-400">10x Dev</CardTitle>
              <div className="text-4xl font-mono font-bold text-white">
                $12<span className="text-lg text-slate-400">/mo</span>
              </div>
              <CardDescription className="text-slate-400">For power users and teams</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Button className="w-full bg-green-400 hover:bg-green-300 text-slate-950 font-mono font-bold">
                Start Free Trial
              </Button>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  Unlimited repos
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  AI-powered insights
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  Portfolio sync
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  Priority support
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  Custom templates
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-mono font-bold text-center mb-16 text-purple-400">FAQ</h2>
        <FAQAccordion />
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-green-400 font-mono font-bold text-lg mb-4">GitStory</h3>
              <p className="text-slate-400 text-sm">Turn commits into content, effortlessly.</p>
            </div>
            <div>
              <h4 className="text-white font-mono font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-green-400 transition">Features</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Pricing</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-mono font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-green-400 transition">About</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-mono font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-green-400 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p className="font-mono">© 2025 GitStory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}