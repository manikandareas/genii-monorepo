import { LogOut } from "lucide-react";
import { Globe } from "lucide-react";
import { HelpCircle, Home, LayoutGrid, Settings, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const SidebarNav = () => {
  return (
    <div className="hidden lg:flex lg:flex-col lg:w-64  lg:h-screen lg:sticky lg:top-0 bg-background border-r border-border">
      {/* Logo */}
      <div className="p-4 border-b border-border">
        <Link href="/" className="flex items-center gap-2">
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
            className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-md bg-primary/10 text-primary hover:bg-primary/15"
          >
            <Home className="h-4 w-4" />
            Dashboard
          </Link>
          <Link
            href="/courses"
            className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-md text-foreground/80 hover:bg-secondary-foreground/10"
          >
            <LayoutGrid className="h-4 w-4" />
            My courses
          </Link>
          <Link
            href="/favorites"
            className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-md text-foreground/80 hover:bg-secondary-foreground/10"
          >
            <Star className="h-4 w-4" />
            Bookmarks & Notes
          </Link>
          <Link
            href="/settings"
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
            className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-md text-foreground/80 hover:bg-secondary-foreground/10"
          >
            <HelpCircle className="h-4 w-4" />
            Need help?
          </Link>
          <Link
            href="/language"
            className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-md text-foreground/80 hover:bg-secondary-foreground/10"
          >
            <Globe className="h-4 w-4" />
            Eng
          </Link>
          <div className="border-t border-border my-1"></div>
          <Link
            href="/logout"
            className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-md text-foreground/80 hover:bg-secondary-foreground/10"
          >
            <LogOut className="h-4 w-4" />
            Log out
          </Link>
        </div>
      </div>
    </div>
  );
};
