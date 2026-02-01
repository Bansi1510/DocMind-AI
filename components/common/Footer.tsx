import React from "react"

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6">
        <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">

          {/* Left */}
          <p className="text-sm">
            © {new Date().getFullYear()} DocMind-AI. All rights reserved.
          </p>

          {/* Right */}
          <nav className="flex flex-wrap justify-center gap-4 sm:justify-end text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>

        </div>
      </div>
    </footer>
  )
}

export default Footer
