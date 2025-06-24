"use client"

import { ReactNode } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Network, Book, Zap, Cpu, FileText, Code, Layers, ArrowLeft, Lock, Shield, Server, Hash, Database, Link as LinkIcon } from "lucide-react"

interface DocLayoutProps {
  children: ReactNode
  title: string
  description?: string
}

const navigationItems = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/introduction", icon: Book },
      { title: "Resources", href: "/source-code", icon: Code },
    ]
  },
  {
    title: "Core Concepts",
    items: [
      { title: "Single-Use Seal", href: "/single-use-seal", icon: Lock },
      { title: "State Validation", href: "/state-validation", icon: Shield },
      { title: "Isomorphic Binding", href: "/glossary/isomorphic-binding", icon: LinkIcon },
    ]
  },
  {
    title: "Core Components",
    items: [
      { title: "RGB++ Scripts", href: "/components", icon: Layers },
      { title: "SPV Service", href: "/spv-service", icon: Network },
      { title: "RGB++ SDK", href: "/rgbpp-sdk", icon: Code },
      { title: "btc-assets-api", href: "/btc-assets-api", icon: Server },
    ]
  },
  {
    title: "Hands-on Examples",
    items: [
      { title: "UDT", href: "/quickstart", icon: Zap },
    ]
  },
  {
    title: "Glossary",
    items: [
      { title: "UTXO", href: "/glossary/utxo", icon: Hash },
      { title: "CKB Cell", href: "/glossary/ckb-cell", icon: Database },
      { title: "CKB Script", href: "/glossary/ckb-script", icon: Layers },
      { title: "xUDT Script", href: "/glossary/xudt-script", icon: Shield },
      { title: "SPV", href: "/glossary/spv", icon: Network },
      { title: "MMR", href: "/glossary/mmr", icon: Hash },
      { title: "Merkle Root", href: "/glossary/merkle-root", icon: Hash },
      { title: "OP_RETURN", href: "/glossary/op-return", icon: FileText },
    ]
  }
]

export function DocLayout({ children, title, description }: DocLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Network className="h-8 w-8 text-orange-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">RGB++</h1>
                <p className="text-xs text-gray-400">Documentation</p>
              </div>
            </Link>
            <Link
              href="/"
              className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:scale-105 group"
            >
              <ArrowLeft className="h-4 w-4 inline mr-1 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 h-screen overflow-y-auto bg-gradient-to-b from-black/40 via-black/30 to-black/40 backdrop-blur-xl border-r border-purple-500/20 sticky top-[73px] shadow-2xl shadow-purple-500/10">
          <nav className="p-6">
            {navigationItems.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-8">
                <h3 className="text-xs font-bold text-transparent bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text uppercase tracking-wider mb-4 px-3">
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group relative overflow-hidden",
                          "text-gray-200 hover:text-white",
                          "hover:bg-gradient-to-r hover:from-purple-500/20 hover:via-orange-500/20 hover:to-purple-500/20",
                          "hover:border hover:border-purple-400/30",
                          "hover:shadow-lg hover:shadow-purple-500/20",
                          "hover:scale-105 hover:translate-x-1",
                          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent",
                          "before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
                        )}
                      >
                        <div className="relative z-10 flex items-center space-x-3 w-full">
                          <item.icon className="h-4 w-4 text-orange-400 group-hover:text-purple-300 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                          <span className="group-hover:font-semibold transition-all duration-300">{item.title}</span>
                        </div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-sm"></div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-h-screen">
          <div className="container mx-auto px-8 py-8">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
              <Link href="/" className="hover:text-orange-400 transition-colors duration-300">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">{title}</span>
            </div>

            {/* Page Header */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
              {description && (
                <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
                  {description}
                </p>
              )}
            </div>

            {/* Content */}
            <div className="prose prose-invert max-w-none">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
} 