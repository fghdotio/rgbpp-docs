"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Book, Code, Terminal, FileText, GitBranch, Layers, Shield, ExternalLink, Activity, Box, Link2, Database, Zap, Copy, CheckCircle, Users, Network } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// RGB++ Logo SVG Component
const RgbppIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_430_320)">
      <g style={{ mixBlendMode: 'screen' as const }}>
        <path fillRule="evenodd" clipRule="evenodd" d="M37.6026 7.13041C38.3735 10.0075 36.6661 12.9648 33.789 13.7357L2.53245 22.1109C-0.344637 22.8818 -3.30193 21.1744 -4.07284 18.2973C-4.84375 15.4202 -3.13636 12.4629 -0.259271 11.692L30.9973 3.31685C33.8744 2.54593 36.8317 4.25332 37.6026 7.13041Z" fill="url(#paint0_linear_430_320)" />
      </g>
      <g style={{ mixBlendMode: 'screen' as const }}>
        <path fillRule="evenodd" clipRule="evenodd" d="M5.7126 35.2364C3.60642 33.1302 3.60642 29.7155 5.7126 27.6093L28.594 4.72788C30.7002 2.62171 34.115 2.6217 36.2211 4.72788C38.3273 6.83405 38.3273 10.2488 36.2211 12.355L13.3397 35.2364C11.2336 37.3426 7.81878 37.3426 5.7126 35.2364Z" fill="url(#paint1_linear_430_320)" />
      </g>
      <g style={{ mixBlendMode: 'screen' as const }}>
        <path fillRule="evenodd" clipRule="evenodd" d="M22.6218 44.9925C19.7447 44.2216 18.0373 41.2643 18.8082 38.3873L27.1834 7.13068C27.9543 4.25359 30.9116 2.5462 33.7887 3.31711C36.6658 4.08802 38.3732 7.04531 37.6023 9.9224L29.2271 41.179C28.4562 44.0561 25.4989 45.7635 22.6218 44.9925Z" fill="url(#paint2_linear_430_320)" />
      </g>
    </g>
    <defs>
      <linearGradient id="paint0_linear_430_320" x1="32.3888" y1="8.51" x2="1.13223" y2="16.8852" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F3674F" />
        <stop offset="1" stopColor="#F3674F" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="paint1_linear_430_320" x1="32.4195" y1="8.55337" x2="9.53808" y2="31.4348" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38E539" />
        <stop offset="1" stopColor="#38E539" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="paint2_linear_430_320" x1="32.4091" y1="8.5309" x2="24.0339" y2="39.7875" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0166FF" />
        <stop offset="1" stopColor="#0166FF" stopOpacity="0" />
      </linearGradient>
      <clipPath id="clip0_430_320">
        <rect width="40" height="40" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default function HomePage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [showAllPartners, setShowAllPartners] = useState(false)

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const steps = [
    {
      title: "UTXO Binding",
      description: "Bitcoin UTXOs are bound to CKB Cells through cryptographic commitments, creating isomorphic asset ownership.",
      icon: Link2,
      technical: "Single-use seals ensure atomic state transitions"
    },
    {
      title: "Commitment Creation",
      description: "A cryptographic commitment links Bitcoin and CKB transactions, ensuring consistency across both chains.",
      icon: Shield,
      technical: "OP_RETURN stores the commitment hash on Bitcoin"
    },
    {
      title: "State Execution",
      description: "Complex programmable logic executes on CKB's Turing-complete VM while Bitcoin provides security.",
      icon: Layers,
      technical: "Asset state stored in CKB Cell data field"
    },
    {
      title: "SPV Verification",
      description: "Bitcoin SPV proofs validate transactions on CKB, ensuring trustless cross-chain verification.",
      icon: Activity,
      technical: "On-chain verification eliminates client-side complexity"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <RgbppIcon className="w-8 h-8" />
              <div>
                <h1 className="text-xl font-bold text-white">RGB++</h1>
                <p className="text-xs text-gray-400">Bitcoin Layer 2 Protocol</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/introduction" className="text-gray-300 hover:text-white transition-colors">
                Documentation
              </Link>
              <Link href="/examples" className="text-gray-300 hover:text-white transition-colors">
                Examples
              </Link>
              <a href="https://github.com/ckb-cell/rgbpp" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1">
                <span>GitHub</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Bitcoin Layer 2 Protocol
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              RGB++ extends Bitcoin with Turing-complete smart contracts through innovative isomorphic binding,
              enabling complex programmable logic while preserving Bitcoin's security model.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Book className="mr-2 h-5 w-5" />
                Read Documentation
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 hover:bg-gray-800">
                <Code className="mr-2 h-5 w-5" />
                View Examples
              </Button>
            </div>
          </div>

          {/* RGB++ Architecture Diagram */}
          <div className="bg-black border border-gray-800 rounded-xl p-8 mb-8">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-white">RGB++ Protocol Architecture</h4>
            </div>

            {/* Architecture Diagram */}
            <div className="flex justify-center">
              <div className="w-full max-w-7xl">
                <img
                  src="/rgb_plus_plus_architecture.svg"
                  alt="RGB++ Protocol Architecture Diagram"
                  className="w-full h-auto rounded-lg shadow-2xl"
                  style={{ background: 'white', padding: '24px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How RGB++ Works */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-6">How Does RGB++ Work?</h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              RGB++ creates isomorphic binding between Bitcoin UTXOs and CKB Cells, enabling programmable Bitcoin assets with Turing-complete smart contracts.
            </p>
          </div>

          {/* Protocol Flow Diagram */}
          <div className="mb-16">
            <div className="bg-black border border-gray-800 rounded-xl p-8">
              <div className="prose prose-invert max-w-none">
                <div className="mermaid-container" style={{ textAlign: 'center' }}>
                  <div dangerouslySetInnerHTML={{
                    __html: `
                      <svg viewBox="0 0 800 500" className="w-full h-auto max-w-4xl mx-auto">
                        <!-- Bitcoin Layer -->
                        <rect x="50" y="50" width="200" height="120" rx="10" fill="#ff9500" stroke="#cc7700" stroke-width="2"/>
                        <text x="150" y="75" text-anchor="middle" fill="white" font-weight="bold" font-size="14">🟠 Bitcoin Layer</text>
                        
                        <rect x="70" y="90" width="50" height="30" rx="5" fill="white" stroke="#ff9500"/>
                        <text x="95" y="105" text-anchor="middle" fill="black" font-size="10">UTXO</text>
                        <text x="95" y="115" text-anchor="middle" fill="black" font-size="8">Seal</text>
                        
                        <rect x="125" y="90" width="50" height="30" rx="5" fill="white" stroke="#ff9500"/>
                        <text x="150" y="105" text-anchor="middle" fill="black" font-size="9">Commit</text>
                        
                        <rect x="180" y="90" width="50" height="30" rx="5" fill="white" stroke="#ff9500"/>
                        <text x="205" y="105" text-anchor="middle" fill="black" font-size="10">New</text>
                        <text x="205" y="115" text-anchor="middle" fill="black" font-size="8">UTXO</text>

                        <!-- CKB Layer -->
                        <rect x="550" y="50" width="200" height="120" rx="10" fill="#3b82f6" stroke="#2563eb" stroke-width="2"/>
                        <text x="650" y="75" text-anchor="middle" fill="white" font-weight="bold" font-size="14">🔵 CKB Layer</text>
                        
                        <rect x="570" y="90" width="50" height="30" rx="5" fill="white" stroke="#3b82f6"/>
                        <text x="595" y="105" text-anchor="middle" fill="black" font-size="10">Cell</text>
                        <text x="595" y="115" text-anchor="middle" fill="black" font-size="8">Input</text>
                        
                        <rect x="625" y="90" width="50" height="30" rx="5" fill="white" stroke="#3b82f6"/>
                        <text x="650" y="105" text-anchor="middle" fill="black" font-size="9">Smart</text>
                        <text x="650" y="115" text-anchor="middle" fill="black" font-size="8">Contract</text>
                        
                        <rect x="680" y="90" width="50" height="30" rx="5" fill="white" stroke="#3b82f6"/>
                        <text x="705" y="105" text-anchor="middle" fill="black" font-size="10">Cell</text>
                        <text x="705" y="115" text-anchor="middle" fill="black" font-size="8">Output</text>

                        <!-- RGB++ Protocol Bridge -->
                        <rect x="300" y="200" width="200" height="80" rx="10" fill="#8b5cf6" stroke="#7c3aed" stroke-width="2"/>
                        <text x="400" y="225" text-anchor="middle" fill="white" font-weight="bold" font-size="14">🔗 RGB++ Protocol</text>
                        <text x="400" y="245" text-anchor="middle" fill="white" font-size="12">Isomorphic Binding</text>
                        <text x="400" y="260" text-anchor="middle" fill="white" font-size="12">SPV Verification</text>

                        <!-- Arrows -->
                        <!-- Bitcoin to RGB++ -->
                        <line x1="150" y1="170" x2="350" y2="200" stroke="#ff9500" stroke-width="2" marker-end="url(#arrowhead)"/>
                        <!-- CKB to RGB++ -->
                        <line x1="650" y1="170" x2="450" y2="200" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrowhead)"/>
                        
                        <!-- Binding lines -->
                        <line x1="95" y1="130" x2="595" y2="130" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="5,5"/>
                        <line x1="205" y1="130" x2="705" y2="130" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="5,5"/>
                        
                        <!-- Arrow marker definition -->
                        <defs>
                          <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                                  refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#666" />
                          </marker>
                        </defs>
                      </svg>
                    `
                  }} />
                </div>
              </div>
            </div>
          </div>

          {/* Core Features Grid */}
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-black border border-gray-800 rounded-lg p-6 hover:border-orange-500/50 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center mr-3">
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm text-gray-400">{index + 1} of {steps.length}</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">{step.title}</h4>
                <p className="text-gray-300 text-sm mb-3">{step.description}</p>
                <p className="text-gray-400 text-xs">{step.technical}</p>
              </div>
            ))}
          </div>

          {/* Learn More CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6">Ready to dive deeper into the technical details?</p>
            <div className="flex justify-center space-x-4">
              <Button asChild className="bg-orange-600 hover:bg-orange-700">
                <Link href="/introduction">
                  <Book className="mr-2 h-4 w-4" />
                  Read Documentation
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-gray-600 hover:bg-gray-800">
                <Link href="/examples">
                  <Code className="mr-2 h-4 w-4" />
                  View Examples
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h3 className="text-3xl font-bold mb-6">Key Features</h3>
              <p className="text-gray-300 mb-8">
                RGB++ provides developers with powerful tools for building Bitcoin-native applications.
              </p>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center mb-3">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <CardTitle className="text-white">Bitcoin Security</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm">
                      Inherits Bitcoin's proven security model through UTXO-based state validation and consensus.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mb-3">
                      <Code className="w-4 h-4 text-white" />
                    </div>
                    <CardTitle className="text-white">Turing Complete</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm">
                      Full programmability through CKB's virtual machine with unlimited computational complexity.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mb-3">
                      <Link2 className="w-4 h-4 text-white" />
                    </div>
                    <CardTitle className="text-white">Cross-Chain Assets</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm">
                      Seamless asset management across Bitcoin and CKB networks with atomic guarantees.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mb-3">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <CardTitle className="text-white">Enhanced UX</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm">
                      Simplified validation through on-chain verification, eliminating complex client-side logic.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protocol Comparison */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">RGB++ vs. Traditional RGB</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              RGB++ simplifies the RGB protocol by moving validation on-chain while maintaining all security guarantees.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-gray-800">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-medium">Feature</th>
                  <th className="px-6 py-4 text-center text-white font-medium">RGB++</th>
                  <th className="px-6 py-4 text-center text-white font-medium">Traditional RGB</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr>
                  <td className="px-6 py-4 text-gray-300">Validation</td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                    <span className="text-sm text-gray-300 block mt-1">On-chain</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-sm text-gray-400">Client-side</span>
                  </td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="px-6 py-4 text-gray-300">Data Availability</td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                    <span className="text-sm text-gray-300 block mt-1">Public on CKB</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-sm text-gray-400">Private/Local</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-300">Usability</td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                    <span className="text-sm text-gray-300 block mt-1">User-friendly</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-sm text-gray-400">Complex</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Ecosystem Partners */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-cyan-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,131,0,0.1),transparent_50%)]"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Ecosystem Partners
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pioneering the future of Bitcoin programmability together
            </p>
          </div>

          {/* Featured Partners */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {[
              { name: "BIT Network", domain: "bit.network", category: "RWA", featured: true, gradient: "from-blue-500 to-purple-600" },
              { name: "Nervape", domain: "nervape.com", category: "Metaverse", featured: true, gradient: "from-purple-500 to-pink-600" },
              { name: "Gate.io", domain: "gate.io", category: "Exchange", featured: true, gradient: "from-green-500 to-blue-600" },
              { name: "Wizz", domain: "wizz.cash", category: "Wallet", featured: true, gradient: "from-orange-500 to-red-600" },
              { name: "DOBBY", domain: "dobby.market", category: "Marketplace", featured: true, gradient: "from-cyan-500 to-blue-600" },
              { name: "SuperEx", domain: "superex.com", category: "Exchange", featured: true, gradient: "from-indigo-500 to-purple-600" }
            ].map((partner, index) => (
              <Card key={index} className="group relative bg-black/40 backdrop-blur-xl border border-white/10 hover:border-orange-400/60 transition-all duration-500 cursor-pointer overflow-hidden transform hover:scale-105 hover:-translate-y-1">
                <div className={`absolute inset-0 bg-gradient-to-br ${partner.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <CardContent className="p-4 relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-8 h-8 bg-gradient-to-br ${partner.gradient} rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-orange-500/25 transition-all duration-500`}>
                      <span className="text-white font-bold text-sm">{partner.name.charAt(0)}</span>
                    </div>
                    <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 px-2 py-0.5 text-xs">
                      {partner.category}
                    </Badge>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                    {partner.name}
                  </h4>
                  <p className="text-gray-400 font-mono text-xs break-all">
                    {partner.domain}
                  </p>
                </CardContent>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Card>
            ))}
          </div>

          {/* Partners Modal */}
          {showAllPartners && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
                onClick={() => setShowAllPartners(false)}
              ></div>

              {/* Modal Content */}
              <div className="relative bg-black/90 backdrop-blur-xl border border-white/20 rounded-3xl max-w-6xl w-full max-h-[80vh] overflow-hidden animate-in zoom-in-95 duration-500">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                      All Ecosystem Partners
                    </h3>
                    <p className="text-gray-400 mt-1">Building the RGB++ ecosystem together</p>
                  </div>
                  <button
                    onClick={() => setShowAllPartners(false)}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200 group"
                  >
                    <ArrowRight className="w-5 h-5 text-white rotate-45 group-hover:rotate-90 transition-transform duration-200" />
                  </button>
                </div>

                {/* Partners Grid */}
                <div className="p-6 overflow-y-auto max-h-[60vh]">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[
                      { name: "Caboroca", domain: "caboroca.xyz", category: "DeFi" },
                      { name: "RGB++T", domain: "rgbppt.xyz", category: "Trading" },
                      { name: "RGB Cat", domain: "rgbcat.io", category: "NFT" },
                      { name: "Haste", domain: "haste.pro", category: "Gaming" },
                      { name: "OpenStamp", domain: "openstamp.io", category: "Identity" },
                      { name: "Rei Wallet", domain: "reiwallet.io", category: "Wallet" },
                      { name: "DOBPad", domain: "dobpad.com", category: "Launchpad" },
                      { name: "Moonbit", domain: "moonbit.network", category: "Infrastructure" },
                      { name: "Jumbo Kuji", domain: "kujinow.com", category: "Gaming" },
                      { name: "Mobit", domain: "mobit.app", category: "Mobile" },
                      { name: "Cellula", domain: "cellula.life", category: "Social" },
                      { name: "CoinEx", domain: "coinex.com", category: "Exchange" },
                      { name: "Seal2Earn", domain: "seal2earn.xyz", category: "GameFi" },
                      { name: "DOBHub", domain: "dobhub.xyz", category: "Hub" },
                      { name: "Element", domain: "element-app.market", category: "Marketplace" },
                      { name: "UTXO Global", domain: "utxo.global", category: "Analytics" },
                      { name: "JoyID", domain: "server.joy.id", category: "Identity" },
                      { name: "Trust BTC", domain: "trust.btc.finance", category: "DeFi" }
                    ].map((partner, index) => (
                      <Card key={index} className="group bg-white/5 hover:bg-white/10 backdrop-blur-lg border border-white/10 hover:border-purple-400/50 transition-all duration-300 cursor-pointer transform hover:scale-105">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <span className="text-white font-bold text-sm">{partner.name.charAt(0)}</span>
                            </div>
                            <Badge variant="outline" className="text-xs border-gray-600 text-gray-400 px-2 py-1">
                              {partner.category}
                            </Badge>
                          </div>
                          <h4 className="font-semibold text-white mb-2 text-sm group-hover:text-purple-400 transition-colors">
                            {partner.name}
                          </h4>
                          <p className="text-xs text-gray-400 font-mono break-all">
                            {partner.domain}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-white/10 bg-black/50">
                  <div className="flex items-center justify-center">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Users className="w-4 h-4 mr-2" />
                      <span>24+ partners and growing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="text-center">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <Button
                onClick={() => setShowAllPartners(!showAllPartners)}
                className="relative bg-gradient-to-r from-orange-500/90 to-purple-600/90 hover:from-orange-500 hover:to-purple-600 text-white px-8 py-4 text-base font-medium rounded-full shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 group border border-white/10 hover:border-white/20 backdrop-blur-sm"
              >
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:tracking-wide transition-all duration-300">Discover All 24+ Partners</span>
                  <div className="flex items-center ml-3">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    <div className="flex ml-2 space-x-1">
                      <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse"></div>
                      <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>

                {/* Ripple Effect */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                </div>
              </Button>
            </div>

            {/* Subtle hint text */}
            <p className="text-gray-400 text-sm mt-4 opacity-70 hover:opacity-100 transition-opacity duration-300">
              Click to explore our growing ecosystem of innovative partners
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <RgbppIcon className="w-8 h-8" />
                <div>
                  <div className="text-white font-bold">RGB++</div>
                  <div className="text-gray-400 text-sm">Protocol</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Bitcoin Layer 2 Protocol for programmable assets and smart contracts.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Documentation</h3>
              <ul className="space-y-2">
                <li><Link href="/introduction" className="text-gray-400 hover:text-white text-sm">Introduction</Link></li>
                <li><Link href="/quickstart" className="text-gray-400 hover:text-white text-sm">Quick Start</Link></li>
                <li><Link href="/concepts" className="text-gray-400 hover:text-white text-sm">Core Concepts</Link></li>
                <li><Link href="/examples" className="text-gray-400 hover:text-white text-sm">Examples</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Tools</h3>
              <ul className="space-y-2">
                <li><a href="https://explorer.rgbpp.io" className="text-gray-400 hover:text-white text-sm">Explorer</a></li>
                <li><a href="https://testnet.rgbpp.io" className="text-gray-400 hover:text-white text-sm">Testnet</a></li>
                <li><a href="https://faucet.rgbpp.io" className="text-gray-400 hover:text-white text-sm">Faucet</a></li>
                <li><a href="https://github.com/ckb-cell/rgbpp" className="text-gray-400 hover:text-white text-sm">GitHub</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Community</h3>
              <ul className="space-y-2">
                <li><a href="https://discord.gg/rgbpp" className="text-gray-400 hover:text-white text-sm">Discord</a></li>
                <li><a href="https://t.me/rgbpp_protocol" className="text-gray-400 hover:text-white text-sm">Telegram</a></li>
                <li><a href="https://twitter.com/rgbpp_protocol" className="text-gray-400 hover:text-white text-sm">Twitter</a></li>
                <li><a href="https://blog.rgbpp.io" className="text-gray-400 hover:text-white text-sm">Blog</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm">
                © 2024 RGB++ Protocol. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
                <a href="#" className="text-gray-400 hover:text-white">Terms</a>
                <a href="#" className="text-gray-400 hover:text-white">Security</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

