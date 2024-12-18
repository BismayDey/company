"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              BD ENTERPRISE
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-foreground/80 hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="text-foreground/80 hover:text-foreground"
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-foreground/80 hover:text-foreground"
            >
              Pricing
            </Link>
            <Button>Get Started</Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="#features"
                className="block px-3 py-2 text-foreground/80 hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#testimonials"
                className="block px-3 py-2 text-foreground/80 hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#pricing"
                className="block px-3 py-2 text-foreground/80 hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
