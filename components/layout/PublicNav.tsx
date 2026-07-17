"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/shadcn/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/shadcn/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/shadcn/sheet";
import { ScrollArea } from "@/components/ui/shadcn/scroll-area";
import { Separator } from "@/components/ui/shadcn/separator";
import { cn } from "@/lib/utils";

const navigationData = [
  { name: "Who We Are", href: "/who-we-are" },
  { name: "What We Offer", href: "/what-we-offer" },
  { name: "Find a Clinician", href: "/find-a-clinician" },
];

export function PublicNav() {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => setSticky(window.scrollY >= 50), []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-40" style={{ background: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto w-full px-4 py-4 sm:px-6">
        <nav
          className={cn(
            "w-full flex items-center h-fit justify-between gap-3.5 lg:gap-6 transition-all duration-500",
            sticky
              ? "p-2.5 bg-white/85 backdrop-blur-lg border shadow-xl rounded-full"
              : "bg-transparent border-transparent",
          )}
          style={sticky ? { borderColor: "rgba(45,59,44,0.08)" } : undefined}
        >
          <div className="flex items-center justify-center gap-5">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5" aria-label="The Circle">
              <img src="/logo-mark.png" alt="" className="h-9 w-9 object-contain" />
              <span
                className="text-lg"
                style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "var(--color-sage-800)" }}
              >
                The Circle
              </span>
            </Link>

            <Separator
              orientation="vertical"
              className="h-4 data-[orientation=vertical]:self-center max-lg:hidden"
              style={{ background: "rgba(45,59,44,0.15)" }}
            />

            {/* Navigation */}
            <NavigationMenu className="max-lg:hidden">
              <NavigationMenuList className="flex gap-0.5">
                {navigationData.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuLink
                        render={<Link href={item.href} />}
                        className="px-2 lg:px-4 py-1.5 text-base rounded-full transition tracking-normal whitespace-nowrap hover:bg-black/[0.04]"
                        style={{ color: active ? "#1A1A1A" : "rgba(26,26,26,0.68)", fontWeight: active ? 500 : 400 }}
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/sign-in"
              className="h-10 flex items-center px-5 text-sm font-medium rounded-full transition-colors hover:bg-black/[0.04]"
              style={{ color: "#1A1A1A" }}
            >
              Login
            </Link>
            <Button
              render={<Link href="/join" />}
              className="h-10 px-5 rounded-full cursor-pointer"
              style={{ background: "var(--color-sage-800)", color: "#fff" }}
            >
              Join the Circle
            </Button>
          </div>

          {/* Mobile menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border p-2 h-10 w-10 cursor-pointer"
                  />
                }
              >
                <Menu size={20} />
                <span className="sr-only">Toggle menu</span>
              </SheetTrigger>
              <SheetContent showCloseButton={false} side="right" className="min-w-80 p-0">
                <ScrollArea className="h-full">
                  <SheetHeader className="p-4">
                    <SheetTitle className="text-left">
                      <span style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: 20, color: "var(--color-sage-800)" }}>
                        The Circle
                      </span>
                    </SheetTitle>
                    <SheetClose className="absolute top-4 right-4 rounded-full bg-black text-white p-2.5 cursor-pointer">
                      <X size={16} />
                    </SheetClose>
                  </SheetHeader>
                  <div className="px-4 py-2">
                    <div className="flex flex-col gap-1.5">
                      {navigationData.map((item) => {
                        const active = pathname === item.href;
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="text-base rounded-lg px-2 py-1 transition-colors hover:bg-black/5"
                            style={{ color: active ? "var(--color-sage-800)" : "rgba(26,26,26,0.8)", fontWeight: active ? 600 : 400 }}
                          >
                            {item.name}
                          </Link>
                        );
                      })}
                    </div>
                    <div className="mt-4 flex flex-col gap-2">
                      <Link
                        href="/sign-in"
                        onClick={() => setIsOpen(false)}
                        className="text-center py-2.5 rounded-full text-sm border"
                        style={{ borderColor: "rgba(45,59,44,0.2)", color: "#1A1A1A" }}
                      >
                        Login
                      </Link>
                      <Button
                        render={<Link href="/join" onClick={() => setIsOpen(false)} />}
                        className="w-full rounded-full h-10 cursor-pointer"
                        style={{ background: "var(--color-sage-800)", color: "#fff" }}
                      >
                        Join the Circle
                      </Button>
                    </div>
                  </div>
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
