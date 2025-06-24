"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Book, Code, Cpu, FileText, Zap, Network, Bitcoin, Layers, Shield, Globe, ExternalLink, Activity, Users, Box, Link2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function HomePage() {
  const [showAllPartners, setShowAllPartners] = useState(false)
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/30 backdrop-blur-xl sticky top-0 z-50 relative">
        {/* Subtle top border accent */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent"></div>

        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                {/* <Network className="h-10 w-10 text-orange-400 group-hover:text-orange-300 transition-colors duration-200" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40" className="w-10 h-10">
                  <g clipPath="url(#logo_svg__a)">
                    <path
                      fill="url(#logo_svg__b)"
                      fillRule="evenodd"
                      d="M37.603 7.13a5.393 5.393 0 0 1-3.814 6.606L2.532 22.11A5.393 5.393 0 0 1-.259 11.692l31.256-8.375a5.393 5.393 0 0 1 6.606 3.813"
                      clipRule="evenodd"
                      style={{ mixBlendMode: "screen" }}
                    />
                    <path
                      fill="url(#logo_svg__c)"
                      fillRule="evenodd"
                      d="M5.713 35.236a5.393 5.393 0 0 1 0-7.627L28.594 4.728a5.393 5.393 0 1 1 7.627 7.627L13.34 35.236a5.393 5.393 0 0 1-7.627 0"
                      clipRule="evenodd"
                      style={{ mixBlendMode: "screen" }}
                    />
                    <path
                      fill="url(#logo_svg__d)"
                      fillRule="evenodd"
                      d="M22.622 44.993a5.393 5.393 0 0 1-3.814-6.606l8.375-31.256a5.393 5.393 0 0 1 10.42 2.791L29.226 41.18a5.393 5.393 0 0 1-6.605 3.813"
                      clipRule="evenodd"
                      style={{ mixBlendMode: "screen" }}
                    />
                  </g>
                  <defs>
                    <linearGradient id="logo_svg__b" x1="32.389" x2="1.132" y1="8.51" y2="16.885" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F3674F" />
                      <stop offset="1" stopColor="#F3674F" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="logo_svg__c" x1="32.419" x2="9.538" y1="8.553" y2="31.435" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#38E539" />
                      <stop offset="1" stopColor="#38E539" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="logo_svg__d" x1="32.409" x2="24.034" y1="8.531" y2="39.788" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#0166FF" />
                      <stop offset="1" stopColor="#0166FF" stopOpacity="0" />
                    </linearGradient>
                    <clipPath id="logo_svg__a">
                      <path fill="#fff" d="M0 0h40v40H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-200">
                  RGB++
                </h1>
                <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-200">
                  Bitcoin Layer 2 Protocol
                </p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-2">
              {[
                { name: "Documentation", href: "/introduction" },
                { name: "GitHub", href: "https://github.com/ckb-cell/rgbpp", external: true }
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                  className="relative group text-gray-400 hover:text-white transition-all duration-200 flex items-center space-x-1.5 px-6 py-3 rounded-lg hover:bg-white/5"
                >
                  <span className="relative text-base font-medium">
                    {item.name}
                    {/* Elegant underline aligned with text */}
                    <div className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-purple-400 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></div>
                  </span>
                  {item.external && <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity duration-200" />}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-gray-400 hover:text-white transition-colors duration-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with Stats */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900"></div>

        {/* Enhanced Floating Particles */}
        <div className="absolute inset-0">
          {/* Animated Particles */}
          <div className="absolute top-20 left-10 w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-bounce opacity-70 shadow-lg shadow-orange-400/50"></div>
          <div className="absolute top-40 right-20 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-ping opacity-60 shadow-lg shadow-purple-400/50"></div>
          <div className="absolute bottom-32 left-1/4 w-2.5 h-2.5 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-pulse opacity-80 shadow-lg shadow-blue-400/50"></div>
          <div className="absolute top-60 right-1/3 w-1.5 h-1.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-ping opacity-50 shadow-lg shadow-green-400/50"></div>
          <div className="absolute bottom-20 right-10 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce opacity-70 shadow-lg shadow-cyan-400/50"></div>

          {/* Floating Orbs */}
          <div className="absolute top-32 left-1/3 w-4 h-4 bg-gradient-to-br from-orange-400/30 to-purple-400/30 rounded-full animate-pulse blur-sm"></div>
          <div className="absolute bottom-40 right-1/4 w-6 h-6 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full animate-pulse blur-md"></div>
          <div className="absolute top-1/2 left-20 w-5 h-5 bg-gradient-to-br from-blue-400/25 to-cyan-400/25 rounded-full animate-pulse blur-sm"></div>
        </div>

        {/* Radial Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,131,0,0.15),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(120,119,198,0.15),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_50%)]"></div>

        <div className="container mx-auto relative z-10">
          {/* Main Description */}
          <div className="text-center max-w-5xl mx-auto mb-16">
            {/* Animated Title */}
            <div className="mb-8">
              <h2 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400 mb-4 animate-in slide-in-from-bottom-4 duration-1000">
                Bitcoin Meets
              </h2>
              <h2 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 animate-in slide-in-from-bottom-4 duration-1000 delay-300">
                Programmability
              </h2>

              {/* Glowing Underline */}
              <div className="mt-6 mx-auto w-32 h-1 bg-gradient-to-r from-orange-400 to-purple-600 rounded-full animate-in slide-in-from-left duration-1000 delay-700">
                <div className="w-full h-full bg-gradient-to-r from-orange-400 to-purple-600 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Enhanced Description */}
            <div className="relative">
              <p className="text-2xl text-gray-200 leading-relaxed mb-12 max-w-4xl mx-auto font-light animate-in fade-in duration-1000 delay-500">
                RGB++ Protocol bridges Bitcoin's <span className="text-orange-400 font-semibold">unmatched security</span> with CKB's
                <span className="text-purple-400 font-semibold"> Turing-complete programmability</span> through innovative
                <span className="text-blue-400 font-semibold"> isomorphic binding</span>, enabling sophisticated smart contracts
                and cross-chain asset management directly on Bitcoin.
              </p>

              {/* Floating Keywords */}
              <div className="absolute -top-4 -left-4 opacity-20">
                <div className="text-xs text-orange-400 font-mono animate-bounce">UTXO</div>
              </div>
              <div className="absolute top-8 -right-8 opacity-20">
                <div className="text-xs text-purple-400 font-mono animate-bounce" style={{ animationDelay: '1s' }}>CKB</div>
              </div>
              <div className="absolute -bottom-2 left-1/4 opacity-20">
                <div className="text-xs text-blue-400 font-mono animate-bounce" style={{ animationDelay: '2s' }}>SPV</div>
              </div>
            </div>

            {/* Ultra Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in slide-in-from-bottom-4 duration-1000 delay-1000">
              <div className="relative group">
                {/* Multi-layer Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 rounded-full blur-xl opacity-60 group-hover:opacity-100 animate-pulse transition duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full blur opacity-80 group-hover:opacity-100 transition duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-600/20 rounded-full animate-pulse"></div>

                <Button size="lg" className="relative bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 hover:from-orange-600 hover:via-red-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-bold rounded-full transform hover:scale-110 hover:-translate-y-1 transition-all duration-500 shadow-2xl shadow-orange-500/50 overflow-hidden">
                  {/* Button Inner Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  <Book className="mr-3 h-6 w-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 relative z-10" />
                  <span className="relative z-10">Get Started</span>
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300 relative z-10" />
                </Button>
              </div>

              <div className="relative group">
                {/* Cyberpunk Border Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full blur-xl opacity-40 group-hover:opacity-80 animate-pulse transition duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300"></div>

                <Button size="lg" variant="outline" className="relative border-2 border-blue-400/60 bg-black/20 text-blue-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20 px-8 py-4 text-lg font-bold rounded-full backdrop-blur-md transform hover:scale-110 hover:-translate-y-1 transition-all duration-500 shadow-2xl shadow-blue-500/30 overflow-hidden">
                  {/* Scanning Line Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 via-cyan-400/20 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <ExternalLink className="mr-3 h-6 w-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 relative z-10" />
                  <span className="relative z-10">Explore RGB++ Explorer</span>
                </Button>
              </div>
            </div>

            {/* Cyberpunk Tech Stack Bridge */}
            <div className="mt-16 flex justify-center items-center opacity-80 animate-in fade-in duration-1000 delay-1200">
              <div className="relative flex items-center space-x-6">
                {/* Bitcoin Node */}
                <div className="relative group">
                  <div className="absolute -inset-2 bg-orange-400/20 rounded-full blur-md animate-pulse"></div>
                  <div className="flex items-center space-x-2 text-orange-400 bg-gradient-to-r from-orange-400/20 to-red-400/20 px-4 py-2 rounded-full border border-orange-400/40 backdrop-blur-sm group-hover:border-orange-400/80 group-hover:shadow-lg group-hover:shadow-orange-400/30 transition-all duration-300">
                    <Bitcoin className="w-5 h-5 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                    <span className="text-sm font-mono font-bold group-hover:text-orange-300 transition-colors duration-300">Bitcoin</span>
                  </div>
                </div>

                {/* Animated Connection Bridge */}
                <div className="flex items-center space-x-3">
                  {/* Left Connection Line */}
                  <div className="relative">
                    <div className="w-16 h-px bg-gradient-to-r from-orange-400 to-purple-400 animate-pulse"></div>
                    <div className="absolute inset-0 w-16 h-px bg-gradient-to-r from-orange-400/50 to-purple-400/50 blur-sm animate-pulse"></div>
                    {/* Data Flow Animation */}
                    <div className="absolute top-0 left-0 w-2 h-px bg-white animate-ping"></div>
                  </div>

                  {/* RGB++ Bridge Node */}
                  <div className="relative group">
                    {/* Multi-layer Glow */}
                    <div className="absolute -inset-3 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30 rounded-full blur-lg animate-pulse"></div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-400/40 to-blue-400/40 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>

                    <div className="flex items-center space-x-2 text-purple-400 bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-blue-400/30 px-4 py-2 rounded-full border-2 border-purple-400/50 relative z-10 group-hover:scale-110 group-hover:border-purple-400/80 transition-all duration-300 backdrop-blur-md">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bridge group-hover:rotate-12 transition-transform duration-300" aria-hidden="true">
                        <path d="M12 2v20"></path>
                        <path d="M8 6h8"></path>
                        <path d="M6 10h12"></path>
                        <path d="M4 14h16"></path>
                        <path d="M2 18h20"></path>
                      </svg>
                      <span className="text-sm font-mono font-black bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent group-hover:from-purple-200 group-hover:via-pink-200 group-hover:to-blue-200 transition-all duration-300">
                        RGB++
                      </span>
                    </div>

                    {/* Floating Label */}
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-xs font-bold text-purple-300 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap bg-black/50 px-2 py-1 rounded backdrop-blur-sm border border-purple-400/30">
                      🌉 Bridge Protocol
                    </div>
                  </div>

                  {/* Right Connection Line */}
                  <div className="relative">
                    <div className="w-16 h-px bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse"></div>
                    <div className="absolute inset-0 w-16 h-px bg-gradient-to-r from-purple-400/50 to-blue-400/50 blur-sm animate-pulse"></div>
                    {/* Data Flow Animation */}
                    <div className="absolute top-0 right-0 w-2 h-px bg-white animate-ping"></div>
                  </div>
                </div>

                {/* CKB Node */}
                <div className="relative group">
                  <div className="absolute -inset-2 bg-blue-400/20 rounded-full blur-md animate-pulse"></div>
                  <div className="flex items-center space-x-2 text-blue-400 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 px-4 py-2 rounded-full border border-blue-400/40 backdrop-blur-sm group-hover:border-blue-400/80 group-hover:shadow-lg group-hover:shadow-blue-400/30 transition-all duration-300">
                    <Layers className="w-5 h-5 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                    <span className="text-sm font-mono font-bold group-hover:text-blue-300 transition-colors duration-300">CKB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
      </section>

      {/* Protocol Features & Applications */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,131,0,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(120,119,198,0.08),transparent_50%)]"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Bitcoin Layer 2 Innovation
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              RGB++ extends Bitcoin with Turing-complete smart contracts through innovative isomorphic binding,
              unlocking programmability while preserving Bitcoin's security and decentralization.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Key Features */}
            <div className="space-y-8">
              <div className="group">
                <div className="flex items-start space-x-4 p-6 bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-orange-400/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                      Bitcoin-Native Security
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Leverages Bitcoin UTXOs as single-use seals, inheriting Bitcoin's proven security model while enabling complex programmable logic through CKB's Turing-complete scripts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start space-x-4 p-6 bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-purple-400/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Link2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      Isomorphic Binding
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Creates one-to-one mapping between Bitcoin UTXOs and CKB Cells, enabling seamless asset ownership synchronization across both networks with atomic transaction guarantees.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start space-x-4 p-6 bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-green-400/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                      Enhanced Validation
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Replaces complex client-side validation with transparent on-chain verification through CKB's SPV service, simplifying user experience while maintaining security.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Applications */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Cpu className="w-6 h-6 text-orange-400 mr-3" />
                  Application Scenarios
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="text-white font-medium mb-1">Decentralized Finance (DeFi)</h5>
                      <p className="text-gray-400 text-sm">IDO platforms, liquid staking pools, and advanced trading mechanisms directly on Bitcoin</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="text-white font-medium mb-1">Digital Assets & NFTs</h5>
                      <p className="text-gray-400 text-sm">Fungible and non-fungible token issuance with Bitcoin-level security guarantees</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="text-white font-medium mb-1">Cross-Chain Infrastructure</h5>
                      <p className="text-gray-400 text-sm">Seamless asset bridging between Bitcoin L1 and programmable L2 environments</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="text-white font-medium mb-1">Enterprise Solutions</h5>
                      <p className="text-gray-400 text-sm">Real-world asset tokenization, supply chain tracking, and institutional-grade applications</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-6 p-6 bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-blue-500/20 border border-orange-400/30 rounded-2xl backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <Book className="w-6 h-6 text-orange-400" />
                <span className="text-white font-medium">Ready to build on RGB++?</span>
              </div>
              <div className="flex space-x-4">
                <Link href="/introduction">
                  <Button className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white px-6 py-2 rounded-full transition-all duration-300">
                    Read Documentation
                  </Button>
                </Link>
                <Link href="/quickstart">
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-6 py-2 rounded-full transition-all duration-300 bg-transparent">
                    Quick Start
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network Overview */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20">
        <div className="container mx-auto">
          <div className="text-left mb-16">
            <h3 className="text-4xl font-bold text-white mb-6">Network at a Glance</h3>
            <p className="text-xl text-gray-300 max-w-3xl">
              Monitor the pulse of the RGB++ ecosystem with live metrics showcasing protocol adoption and network health.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Primary Metrics */}
            <div className="space-y-6">
              <div className="flex items-center justify-between p-8 bg-gradient-to-r from-orange-500/10 to-red-500/10 border-l-4 border-orange-400 rounded-r-xl">
                <div>
                  <div className="flex items-center mb-2">
                    <Activity className="h-6 w-6 text-orange-400 mr-3" />
                    <span className="text-sm font-medium text-orange-300 uppercase tracking-wider">Network Status</span>
                  </div>
                  <div className="text-3xl font-bold text-white">Active</div>
                </div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>

              <div className="flex items-center justify-between p-8 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-l-4 border-blue-400 rounded-r-xl">
                <div>
                  <div className="flex items-center mb-2">
                    <Box className="h-6 w-6 text-blue-400 mr-3" />
                    <span className="text-sm font-medium text-blue-300 uppercase tracking-wider">RGB++ Assets</span>
                  </div>
                  <div className="text-3xl font-bold text-white">1,200+</div>
                </div>
                <div className="text-blue-400 text-right">
                  <div className="text-sm">Growing</div>
                </div>
              </div>
            </div>

            {/* Secondary Metrics */}
            <div className="space-y-6">
              <div className="flex items-center justify-between p-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-l-4 border-green-400 rounded-r-xl">
                <div>
                  <div className="flex items-center mb-2">
                    <Users className="h-6 w-6 text-green-400 mr-3" />
                    <span className="text-sm font-medium text-green-300 uppercase tracking-wider">Total Holders</span>
                  </div>
                  <div className="text-3xl font-bold text-white">15K+</div>
                </div>
                <div className="text-green-400 text-right">
                  <div className="text-sm">+12%</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-l-4 border-purple-400 rounded-r-xl">
                <div>
                  <div className="flex items-center mb-2">
                    <Zap className="h-6 w-6 text-purple-400 mr-3" />
                    <span className="text-sm font-medium text-purple-300 uppercase tracking-wider">Total Transactions</span>
                  </div>
                  <div className="text-3xl font-bold text-white">85K+</div>
                </div>
                <div className="text-purple-400 text-right">
                  <div className="text-sm">Daily: 450</div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Stats */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Network className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300">Network Uptime</div>
              </div>

              <div className="text-center">
                <Activity className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">2.3K</div>
                <div className="text-gray-300">Daily Active Users</div>
              </div>

              <div className="text-center">
                <Globe className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">Live</div>
                <div className="text-gray-300">Real-time Updates</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg">
              <a href="https://explorer.rgbpp.io/en/charts" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                Explore Full Analytics
              </a>
            </Button>
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
      <footer className="border-t border-white/10 bg-black/40">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <Network className="h-8 w-8 text-orange-400" />
                <div>
                  <div className="text-white font-bold text-lg">RGB++</div>
                  <div className="text-gray-400 text-sm">Protocol</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-6 max-w-sm">
                Extending Bitcoin with Turing-complete smart contracts and advanced programmability through innovative layer 2 solutions.
              </p>
              <div className="flex space-x-4">
                <a href="https://twitter.com/rgbpp_protocol" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="https://github.com/RGBPlusPlus" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="https://discord.gg/rgbpp" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z" />
                  </svg>
                </a>
                <a href="https://t.me/rgbpp_protocol" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.306.037.42.12.302.144.502.288.6.588.084.3-.084.42-.288.522-.586.12-.3.024-1.794 1.14-5.088 3.342-5.208 3.42.12.6.72.9.12.12 3.222-2.94 3.348-3.06 3.42-3.18 3.54.024.024.024.144.024.024.024z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><Link href="/introduction" className="text-gray-400 hover:text-white transition-colors text-sm">Documentation</Link></li>
                <li><Link href="/quickstart" className="text-gray-400 hover:text-white transition-colors text-sm">Quick Start</Link></li>
                <li><Link href="/examples" className="text-gray-400 hover:text-white transition-colors text-sm">Examples</Link></li>
                <li><Link href="/concepts" className="text-gray-400 hover:text-white transition-colors text-sm">Core Concepts</Link></li>
                <li><a href="https://github.com/RGBPlusPlus" className="text-gray-400 hover:text-white transition-colors text-sm">GitHub</a></li>
              </ul>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-white font-semibold mb-4">Tools</h3>
              <ul className="space-y-3">
                <li><a href="https://explorer.rgbpp.io" className="text-gray-400 hover:text-white transition-colors text-sm">Explorer</a></li>
                <li><a href="https://testnet.rgbpp.io" className="text-gray-400 hover:text-white transition-colors text-sm">Testnet</a></li>
                <li><a href="https://faucet.rgbpp.io" className="text-gray-400 hover:text-white transition-colors text-sm">Faucet</a></li>
                <li><a href="https://api.rgbpp.io" className="text-gray-400 hover:text-white transition-colors text-sm">API</a></li>
                <li><a href="https://sdk.rgbpp.io" className="text-gray-400 hover:text-white transition-colors text-sm">SDK</a></li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="text-white font-semibold mb-4">Community</h3>
              <ul className="space-y-3">
                <li><a href="https://discord.gg/rgbpp" className="text-gray-400 hover:text-white transition-colors text-sm">Discord</a></li>
                <li><a href="https://t.me/rgbpp_protocol" className="text-gray-400 hover:text-white transition-colors text-sm">Telegram</a></li>
                <li><a href="https://twitter.com/rgbpp_protocol" className="text-gray-400 hover:text-white transition-colors text-sm">Twitter</a></li>
                <li><a href="https://blog.rgbpp.io" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</a></li>
                <li><a href="https://forum.rgbpp.io" className="text-gray-400 hover:text-white transition-colors text-sm">Forum</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2024 RGB++ Protocol. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
                <Link href="/security" className="text-gray-400 hover:text-white transition-colors">Security</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

