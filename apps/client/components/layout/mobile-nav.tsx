"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  LayoutGrid,
  Star,
  Settings,
  MessageSquare,
  Award,
  HelpCircle,
  Globe,
  LogOut,
  X,
} from "lucide-react";
import { cn } from "@genii/ui/lib/utils";
import { Button } from "@genii/ui/components";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <>
      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 w-64 bg-white z-40 border-r border-border transform transition-transform duration-200 ease-in-out lg:hidden shadow-lg",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Close button inside sidebar */}
        <div className="absolute right-2 top-2">
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            aria-label="Close menu"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Logo */}
        <div className="p-4 border-b border-border">
          <Link href="/" className="flex items-center gap-2" onClick={onClose}>
            <Image
              src="/genii-text-black.svg"
              alt="logo"
              width={100}
              height={30}
              className="dark:invert"
            />
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex-1 py-2 overflow-y-auto">
          <nav className="space-y-0.5 px-2">
            <Link
              href="/dashboard"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-md bg-primary/10 text-primary hover:bg-primary/15"
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link
              href="/courses"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-md text-foreground/80 hover:bg-secondary-foreground/10"
            >
              <LayoutGrid className="h-4 w-4" />
              My courses
            </Link>
            <Link
              href="/favorites"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-md text-foreground/80 hover:bg-secondary-foreground/10"
            >
              <Star className="h-4 w-4" />
              Bookmarks & Notes
            </Link>
            <Link
              href="/settings"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-md text-foreground/80 hover:bg-secondary-foreground/10"
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </nav>
        </div>

        {/* Footer */}
        <div className="p-2 mt-auto border-t border-border">
          <div className="flex flex-col space-y-0.5">
            <Link
              href="/help"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-md text-foreground/80 hover:bg-secondary-foreground/10"
            >
              <HelpCircle className="h-4 w-4" />
              Need help?
            </Link>
            <Link
              href="/language"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-md text-foreground/80 hover:bg-secondary-foreground/10"
            >
              <Globe className="h-4 w-4" />
              Eng
            </Link>
            <div className="border-t border-border my-1"></div>
            <Link
              href="/logout"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-md text-foreground/80 hover:bg-secondary-foreground/10"
            >
              <LogOut className="h-4 w-4" />
              Log out
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-white/10 z-30 lg:hidden backdrop-blur-xs"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
    </>
  );
}
