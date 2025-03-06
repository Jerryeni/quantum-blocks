"use client";

import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Diamond, Layers, Workflow, Cpu, Brain, ArrowRight, ChevronDown, Github, Twitter, Disc as Discord, Youtube, Linkedin, CheckCircle2, Lock, Circle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activePhase, setActivePhase] = useState(1);

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="gradient-text font-bold text-xl">
                Quantum Blocks
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#" label="Assets" />
              <NavLink href="#" label="Ecosystem" />
              <NavLink href="#" label="Resources" />
              <Button className="gradient-bg text-white ml-4">
                Network
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className=" mx-auto ">
        {/* Hero Section */}
        {/* <div className="pt-32 pb-20">
          <div className="text-left">
            <h2 className="text-xl md:text-2xl mb-4 text-gray-600">
              Unprecedented blockchain throughput
            </h2>
            <h1 className="hero-title font-bold leading-none mb-6 gradient-text">
              1,000,000+ TPS
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 px-4 leading-relaxed">
              Made possible with hardware acceleration technologies like RDMA, InfiniBand and Software-Defined Networking (SDN),
              together with software scaling through a multi-executor model to scale transaction processing.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="gradient-bg text-white w-full sm:w-auto">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Read Documentation
              </Button>
            </div>
          </div>
        </div> */}
        <Hero />

        {/* Stats Section */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-t">
          <Stat label="Total SOL Deposited" value="$0" />
          <Stat label="Total SOL Yield" value="0%" />
          <Stat label="AVSs" value="2" />
          <Stat label="No of users" value="1" />
        </div> */}

        {/* Comparison Section */}
        <div className="relative  bg-cover bg-center rounded-lg p-8 mb-20" style={{ backgroundImage: "url('/quantum5.jpg')" }}>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

          <div className="relative p-8 text-white">
            <div className="pb-20">
              <div className="text-left">
                <h2 className="text-xl md:text-2xl mb-4 text-gray-200">
                  Unprecedented blockchain throughput
                </h2>
                <h1 className="font-medium md:text-8xl leading-none mb-6 text-white">
                  1,000,000+ TPS
                </h1>
                <p className="text-lg md:text-xl text-gray-300 px-4 leading-relaxed">
                  Made possible with hardware acceleration technologies like RDMA, InfiniBand, and Software-Defined Networking (SDN),
                  together with software scaling through a multi-executor model to scale transaction processing.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between mb-8 space-y-4 md:space-y-0">
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                <span>Quantum Blocks</span>
              </div>
              <div className="flex-1 mx-0 md:mx-8 w-full md:w-auto">
                <div className="h-3 bg-gradient-to-r from-purple-500 to-blue-500 w-[50%] rounded-full"></div>
              </div>
              <div className="text-right w-32">1,000,000+ TX/S</div>
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-lg flex items-center">
                Network <span className="ml-2">→</span>
              </button>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between mb-8 space-y-4 md:space-y-0 opacity-50">
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                <span>Solana</span>
              </div>
              <div className="flex-1 mx-0 md:mx-8 w-full md:w-auto">
                <div className="h-3 bg-gray-400 rounded-full w-[10%]"></div>
              </div>
              <div className="text-right w-32">7,229 TX/S</div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 opacity-50">
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                <span>Ethereum</span>
              </div>
              <div className="flex-1 mx-0 md:mx-8 w-full md:w-auto">
                <div className="h-3 bg-gray-400 rounded-full w-[1%]"></div>
              </div>
              <div className="text-right w-32">62 TX/S</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold mb-4 text-center gradient-text">Why Choose Quantum Blocks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20">
            <Feature
              icon={<Diamond className="w-8 h-8 text-gray-400" />}
              title="Innovation Meets Utility"
              description="Unified digital economy combining innovation and practicality."
            />
            <Feature
              icon={<Layers className="w-8 h-8 text-black" />}
              title="Blockchain for Everyday"
              description="A forward-thinking approach to integrating blockchain into everyday applications"
            />
            <Feature
              icon={<Workflow className="w-8 h-8 text-black" />}
              title="Redefining Blockchain"
              description="A vision to redefine how blockchain technology impacts the world."
            />
            <Feature
              icon={<Cpu className="w-8 h-8 text-black" />}
              title="Prepaid Cards"
              description=" Enables seamless crypto-to-fiat transactions worldwide."
            />
            <Feature
              icon={<Brain className="w-8 h-8 text-black" />}
              title="Blockchain Explorer"
              description="The InfiniSVM allows network capacity to handle the next billion users, and the trillions of AI agents that will serve them."
            />
            <Feature
              icon={<Brain className="w-8 h-8 text-black" />}
              title="OTT Platform"
              description="Decentralized hub for on-demand entertainment content."
            />
          </div>
        </div>


        {/* Roadmap Section */}
        <section className="py-20 border-t px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/30 to-white pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <h2 className="text-5xl font-bold mb-4 text-center gradient-text">Roadmap</h2>
            <p className="text-gray-600 text-center mb-16 text-lg">Our journey to revolutionize blockchain technology</p>

            <div className="relative">
              {/* Timeline line */}
              <div className="roadmap-line left-1/2 top-0 h-full -translate-x-1/2" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                {/* Phase 1 */}
                <div
                  className="roadmap-card group"
                  onMouseEnter={() => setActivePhase(1)}
                >
                  <div className="absolute -right-4 top-1/2 roadmap-connector opacity-0 md:group-hover:opacity-100" />
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold gradient-text">Phase 1</h3>
                      <p className="text-sm text-gray-500">Completed</p>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-6 text-gray-800">Platform Development</h4>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4 group/item">
                      <div className="roadmap-bullet mt-2 group-hover/item:scale-125" />
                      <div>
                        <p className="font-medium text-gray-800">Core Blockchain Infrastructure</p>
                        <p className="text-gray-600 mt-1">Completed the design and implementation using Proof of Authority (PoA) consensus.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 group/item">
                      <div className="roadmap-bullet mt-2 group-hover/item:scale-125" />
                      <div>
                        <p className="font-medium text-gray-800">Utility App Development</p>
                        <p className="text-gray-600 mt-1">Launched a functional utility app for seamless payments and bookings.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 group/item">
                      <div className="roadmap-bullet mt-2 group-hover/item:scale-125" />
                      <div>
                        <p className="font-medium text-gray-800">Blockchain Explorer</p>
                        <p className="text-gray-600 mt-1">Developed key components like the blockchain explorer to track transactions.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Phase 2 */}
                <div
                  className="roadmap-card group"
                  onMouseEnter={() => setActivePhase(2)}
                >
                  <div className="absolute -right-4 top-1/2 roadmap-connector opacity-0 md:group-hover:opacity-100" />
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold gradient-text">Phase 2</h3>
                      <p className="text-sm text-gray-500">In Progress</p>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-6 text-gray-800">Ecosystem Launch</h4>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4 group/item">
                      <div className="roadmap-bullet mt-2 group-hover/item:scale-125" />
                      <div>
                        <p className="font-medium text-gray-800">QDMS Launch</p>
                        <p className="text-gray-600 mt-1">Released the Quantum Blocks Data Management System with NFT-based storage solutions.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 group/item">
                      <div className="roadmap-bullet mt-2 group-hover/item:scale-125" />
                      <div>
                        <p className="font-medium text-gray-800">Metaverse Integration</p>
                        <p className="text-gray-600 mt-1">Introduced metaverse gaming and virtual real estate features with QBCX integration.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Future Plans */}
                <div
                  className="roadmap-card group"
                  onMouseEnter={() => setActivePhase(3)}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <Circle className="w-6 h-6 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">Future Plans</h3>
                      <p className="text-sm text-gray-500">Coming Soon</p>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-6 text-gray-800">Expansion of Metaverse</h4>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4 group/item">
                      <div className="w-2 h-2 rounded-full bg-gray-300 mt-2" />
                      <div>
                        <p className="font-medium text-gray-800">Enhanced Gaming Experiences</p>
                        <p className="text-gray-600 mt-1">Incorporate AI-driven dynamics and real-time interaction capabilities.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 group/item">
                      <div className="w-2 h-2 rounded-full bg-gray-300 mt-2" />
                      <div>
                        <p className="font-medium text-gray-800">Virtual Real Estate Projects</p>
                        <p className="text-gray-600 mt-1">Introduce new staking and leasing options for digital properties.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 group/item">
                      <div className="w-2 h-2 rounded-full bg-gray-300 mt-2" />
                      <div>
                        <p className="font-medium text-gray-800">AI-Powered Personalization</p>
                        <p className="text-gray-600 mt-1">Integrate recommendation systems for tailored user experiences.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section className="py-10 md:py-20 px-4 sm:px-6 lg:px-8 border-t">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Latest news</h2>
          <div className="card-grid">
            <NewsCard
              image="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800"
              title="Quantum Blocks $12M seed round"
              source="The Block"
              date="Aug 27, 2024"
            />
            <NewsCard
              image="https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80&w=800"
              title="Quantum Blocks soft-launches"
              source="Blockworks"
              date="May 16, 2024"
            />
            <NewsCard
              image="https://images.unsplash.com/photo-1639762681297-c48dc021b06c?auto=format&fit=crop&q=80&w=800"
              title="Quantum Blocks Standard: Endogenous AVS"
              source="Quantum Labs"
              date="May 31, 2024"
            />
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 md:py-20 border-t">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Join the Quantum Blocks network community</h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12">
              Security shared through the incredibly fast blockchain network to power all decentralized systems.
            </p>
            <div className="button-group mb-8 md:mb-12">
              <Button className="gradient-bg text-white hover:opacity-90 w-full sm:w-auto">
                Contribute on Github <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button className="gradient-bg text-white hover:opacity-90 w-full sm:w-auto">
                Join our team <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button className="gradient-bg text-white hover:opacity-90 w-full sm:w-auto">
                Partner form <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="max-w-md mx-auto">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Subscribe to all things Quantum Blocks</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input placeholder="Enter your email" className="flex-1" />
                <Button className="gradient-bg text-white hover:opacity-90 w-full sm:w-auto">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 px-4 sm:px-6 lg:px-8 md:py-20 border-t">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8 md:mb-12">
            <div className="col-span-1 sm:col-span-2">
              <h3 className="text-xl font-bold mb-4">Quantum Blocks</h3>
              <p className="text-gray-600 mb-6">
                The hardware-accelerated blockchain, infinitely scaling to enable high-throughput, near-zero latency use cases.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  <Discord className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  <Youtube className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">ASSETS</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">qBLK</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">DeFi</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">qUSD</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">ECOSYSTEM</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Integrations</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Community</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">RESOURCES</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Quantum 101</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Blog</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Docs</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t gap-4 sm:gap-0">
            <div className="text-sm text-gray-600 text-center sm:text-left">
              ©2025 Quantum Blocks · All Rights Reserved
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-2">
              <div className="flex items-center gap-2 text-sm text-green-600">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                All services are online
              </div>
              <div className="flex gap-6">
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms & Conditions</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1"
    >
      {label}
      <ChevronDown className="h-4 w-4" />
    </Link>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold gradient-text mb-2">{value}</div>
      <div className="text-gray-600 text-sm">{label}</div>
    </div>
  );
}

function Feature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="p-6 border border-gray-200 hover:border-purple-500 transition-colors">
      <div className="gradient-text mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
}

function NewsCard({ image, title, source, date }: { image: string; title: string; source: string; date: string }) {
  return (
    <Card className="overflow-hidden border border-gray-200 hover:border-purple-500 transition-colors">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div className="flex items-center gap-2 text-gray-600">
          <span>{source}</span>
          <span>•</span>
          <span>{date}</span>
        </div>
      </div>
    </Card>
  );
}