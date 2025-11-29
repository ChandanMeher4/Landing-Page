import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata = {
  title: "GitStory - Turn Commits into Content",
  description: "AI-powered tool that transforms your Git commit history into readable blog posts",
  generator: "v0.app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      {/* Added bg-slate-950 here to ensure the whole page is dark by default */}
      <body className={`${_geistMono.variable} font-mono antialiased bg-slate-950 text-white`}>
        {children}
      </body>
    </html>
  )
}