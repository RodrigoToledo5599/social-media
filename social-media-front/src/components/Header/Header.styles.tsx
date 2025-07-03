import styled from "styled-components"

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100vw;
  border-bottom: 1px solid #e5e7eb;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`

export const HeaderContent = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 1320px;
  height: 64px;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  
  @media (min-width: 768px) {
    padding: 0 24px;
  }
`

export const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: inherit;
`

export const LogoIcon = styled.div`
  height: 48px;
  width: 48px;
  border-radius: 8px;
  background: linear-gradient(135deg, #2563eb 0%, #9333ea 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  
  span {
    color: white;
    font-weight: bold;
    font-size: 26px;
  }
`

export const LogoText = styled.span`
  font-weight: bold;
  font-size: 20px;
  color: #111827;
`

export const DesktopNav = styled.nav`
  display: none;
  align-items: center;
  gap: 32px;

  @media (min-width: 768px) {
    display: flex;
  }
`

export const NavLink = styled.a`
  font-size: 14px;
  font-weight: 500;
  color: #6b7280;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #111827;
  }
`

export const DesktopButtons = styled.div`
  display: none;
  align-items: center;
  gap: 16px;

  @media (min-width: 768px) {
    display: flex;
  }
`

export const Button = styled.button<{ variant?: "ghost" | "primary" }>`
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  ${(props) =>
    props.variant === "ghost"
      ? `
    background: transparent;
    color: #6b7280;
    
    &:hover {
      background: #f3f4f6;
      color: #111827;
    }
  `
      : `
    background: linear-gradient(135deg, #2563eb 0%, #9333ea 100%);
    color: white;
    
    &:hover {
      background: linear-gradient(135deg, #1d4ed8 0%, #7c3aed 100%);
      transform: translateY(-1px);
    }
  `}
`

export const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #6b7280;
  transition: color 0.2s ease;

  &:hover {
    color: #111827;
  }

  @media (min-width: 768px) {
    display: none;
  }
`

export const MobileMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  background: white;
  box-shadow: -4px 0 6px -1px rgba(0, 0, 0, 0.1);
  transform: translateX(${(props) => (props.isOpen ? "0" : "100%")});
  transition: transform 0.3s ease;
  z-index: 60;
  padding: 32px 24px;

  @media (min-width: 400px) {
    width: 400px;
  }
`

export const MobileMenuOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 50;
`

export const MobileMenuHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 24px;
`

export const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`

export const MobileNavLink = styled.a`
  font-size: 18px;
  font-weight: 500;
  color: #6b7280;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #111827;
  }
`

export const MobileButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 24px;
  border-top: 1px solid #e5e7eb;
`

export const MobileButton = styled.button<{ variant?: "outline" | "primary" }>`
  width: 100%;
  padding: 12px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  ${(props) =>
    props.variant === "outline"
      ? `
    background: white;
    color: #111827;
    border: 1px solid #d1d5db;
    
    &:hover {
      background: #f9fafb;
    }
  `
      : `
    background: linear-gradient(135deg, #2563eb 0%, #9333ea 100%);
    color: white;
    border: none;
    
    &:hover {
      background: linear-gradient(135deg, #1d4ed8 0%, #7c3aed 100%);
    }
  `}
`
