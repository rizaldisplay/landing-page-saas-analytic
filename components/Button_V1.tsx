'use client'

import { Button } from "@/components/ui/button"
import React from "react"

export default function Component() {
  return (
    <div className="flex justify-center my-12">
      <div className="relative group">
        <Button className="group overflow-hidden">
          Try the App
          <span className="ml-2 inline-block transition-transform group-hover:translate-x-2">
            <HandIcon className="h-6 w-6 animate-bounce" />
          </span>
        </Button>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-10 rounded-md transition-all duration-300 scale-0 group-hover:scale-100" />
      </div>
    </div>
  )
}

function HandIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
      <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  )
}
