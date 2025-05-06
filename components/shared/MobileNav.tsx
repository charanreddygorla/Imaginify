"use client"

<<<<<<< HEAD
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navLinks } from "@/constants"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"

const MobileNav = () => {
    const pathname = usePathname();

    return (
    <header className="header">
        <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
=======
import Link from "next/link"
import Image from "next/image"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navLinks } from "@/constants"
import { usePathname } from "next/navigation"

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 md:py-2">
          <Image
>>>>>>> 44f0a32452804cbd7587b7a0f7014e65dfd660e6
            src="/assets/images/logo-text.svg"
            alt="logo"
            width={180}
            height={28}
<<<<<<< HEAD
        />
        </Link>

        <nav className="flex gap-2">
        <SignedIn>
            <UserButton afterSignOutUrl="/" />

            <Sheet>
            <SheetTrigger>
                <Image 
                    src="/assets/icons/menu.svg"
                    alt="menu"
                    width={32}
                    height={32}
                    className="cursor-pointer"
                />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
                <>
                <Image 
                    src="/assets/images/logo-text.svg"
                    alt="logo"
                    width={152}
                    height={23}
                />

                <ul className="header-nav_elements">
                {navLinks.map((link) => {
                const isActive = link.route === pathname

                return (
                    <li 
                        className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}
                        key={link.route}
                    >
                    <Link className="sidebar-link cursor-pointer" href={link.route}>
                        <Image 
                            src={link.icon}
                            alt="logo"
                            width={24}
                            height={24}
                        />
                        {link.label}
                    </Link>
                    </li>
                )
                })}
                </ul>
                </>
            </SheetContent>
            </Sheet>
        </SignedIn>

        <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
                <Link href="/sign-in">Login</Link>
            </Button>
            </SignedOut>
        </nav>
    </header>
    )
}

export default MobileNav
=======
          />
        </Link>

        {/* Sheet Menu for Mobile */}
        <Sheet>
          <SheetTrigger asChild>
            <Image
              src="/assets/icons/menu.svg"
              alt="menu"
              width={32}
              height={32}
              className="cursor-pointer"
            />
          </SheetTrigger>

          <SheetContent className="sheet-content sm:w-64">
            <div>
              <Image
                src="/assets/images/logo-text.svg"
                alt="logo"
                width={152}
                height={23}
              />

              <ul className="sidebar-nav_elements">
                {navLinks.slice(0, 6).map((link) => {
                  const isActive = link.route === pathname;

                  return (
                    <li
                      key={link.route}
                      className={`${isActive && 'gradient-text'} p-4 flex whitespace-nowrap text-dark-700`}
                    >
                      <Link className="sidebar-link" href={link.route}>
                        <Image
                          src={link.icon}
                          alt="logo"
                          width={24}
                          height={24}
                          className={`${isActive && 'brightness-200'}`}
                        />
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default MobileNav
>>>>>>> 44f0a32452804cbd7587b7a0f7014e65dfd660e6
