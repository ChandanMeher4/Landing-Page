"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How does GitStory analyze my commit history?",
    answer:
      "GitStory uses advanced AI to parse your git diffs and commit messages, understanding the semantic meaning behind code changes. It identifies patterns, extracts context, and transforms technical changes into human-readable narratives that capture the 'why' behind your work.",
  },
  {
    question: "Is my code secure? Do you store my repository data?",
    answer:
      "Security is our top priority. We only read commit metadata and diffs—never your entire codebase. All data is encrypted in transit and at rest. We process your commits on-demand and don't store your source code. You can revoke access anytime via GitHub settings.",
  },
  {
    question: "Can I customize the generated blog posts?",
    answer:
      "GitStory generates drafts that you can edit before publishing. You can set tone preferences (technical, casual, formal), choose templates, and even train the AI on your writing style. All outputs are fully customizable in our built-in editor.",
  },
  {
    question: "Does GitStory work with private repositories?",
    answer:
      "Yes! GitStory works with both public and private repositories. When you connect via GitHub OAuth, you choose which repositories to grant access to. Private repo data is treated with extra security measures and is never shared or used for training our models.",
  },
]

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-slate-900 border border-slate-700 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-800/50 transition-colors"
          >
            <span className="font-mono font-bold text-white">{faq.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-green-400 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4 text-slate-300 leading-relaxed">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
