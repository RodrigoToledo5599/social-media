"use client"

import type React from "react"
import { useState } from "react"
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  LogoIcon,
  LogoText,
  DesktopNav,
  NavLink,
  DesktopButtons,
  Button,
  MobileMenuButton,
  MobileMenu,
  MobileMenuOverlay,
  MobileMenuHeader,
  MobileNav,
  MobileNavLink,
  MobileButtons,
  MobileButton,
} from "./Header.styles"

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <Logo href="/">
            <LogoIcon>
              <span>S</span>
            </LogoIcon>
          </Logo>

          <DesktopNav>
            {navigation.map((item) => (
              <NavLink key={item.name} href={item.href}>
                {item.name}
              </NavLink>
            ))}
          </DesktopNav>

          <DesktopButtons>
            <Button variant="ghost">Login</Button>
            <Button variant="ghost">Sign In</Button>
            <Button variant="primary">Get Started</Button>
          </DesktopButtons>

          <MobileMenuButton onClick={toggleMenu}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </MobileMenuButton>
        </HeaderContent>
      </HeaderContainer>

      <MobileMenuOverlay isOpen={isMenuOpen} onClick={closeMenu} />

      <MobileMenu isOpen={isMenuOpen}>
        <MobileMenuHeader>
          <LogoIcon>
            <span>S</span>
          </LogoIcon>
        </MobileMenuHeader>

        <MobileNav>
          {navigation.map((item) => (
            <MobileNavLink key={item.name} href={item.href} onClick={closeMenu}>
              {item.name}
            </MobileNavLink>
          ))}
        </MobileNav>

        <MobileButtons>
          <MobileButton variant="outline">Login</MobileButton>
          <MobileButton variant="outline">Sign In</MobileButton>
          <MobileButton variant="primary">Get Started</MobileButton>
        </MobileButtons>
      </MobileMenu>
    </>
  )
}

export default Header
