"use client";

import { NotificationDropdown } from "@/components/notification-dropdown";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@genii/ui/components";
import { LayoutGrid, Menu } from "lucide-react";
import Link from "next/link";
import { ReactNode, useState } from "react";

import { MobileNav } from "@/components/layout/mobile-nav";
import { SidebarNav } from "@/components/layout/sidebar-nav";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="flex min-h-screen bg-background">
      <MobileNav isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
      <SidebarNav />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top navigation */}
        <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-sm">
          <div className="flex items-center justify-between px-4 lg:px-6 py-3 max-w-7xl mx-auto">
            {/* Mobile menu button in header */}
            <Button
              onClick={toggleMobileMenu}
              className="lg:hidden z-50 bg-primary text-primary-foreground p-2 rounded-md shadow-md"
              aria-label="Toggle menu"
              size="icon"
            >
              <Menu className="h-5 w-5" />
            </Button>

            <div className="hidden lg:flex lg:items-center lg:gap-2">
              <Link href="/dashboard" className="flex  items-center gap-2 text-foreground/80">
                <LayoutGrid className="h-4 w-4" />
                <span className="font-medium text-sm ">Home page</span>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <NotificationDropdown />
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "h-8 w-8",
                    avatarImage: "h-8 w-8",
                  },
                }}
              />
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto  bg-background">
          <div className="max-w-6xl mx-auto w-full">{children}</div>
        </main>
      </div>
    </div>
  );
}
