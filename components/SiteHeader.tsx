"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { KeyboardEvent, useEffect, useState } from "react";
import { mainNav } from "@/data/site";
import { BrandMark } from "./BrandMark";

export function SiteHeader() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(mainNav[0].label);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function handleNavKey(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Escape") {
      setActiveMenu(null);
      return;
    }

    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      const currentIndex = mainNav.findIndex((item) => item.label === activeMenu);
      const nextIndex =
        event.key === "ArrowRight"
          ? (currentIndex + 1 + mainNav.length) % mainNav.length
          : (currentIndex - 1 + mainNav.length) % mainNav.length;
      setActiveMenu(mainNav[nextIndex].label);
    }
  }

  const active = mainNav.find((item) => item.label === activeMenu);

  return (
    <header
      className={`site-header ${scrolled ? "is-scrolled" : ""} ${activeMenu ? "has-menu" : ""}`}
      onMouseLeave={() => setActiveMenu(null)}
      onKeyDown={handleNavKey}
    >
      <div className="container header-inner">
        <BrandMark />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {mainNav.map((item) => (
            <div className="nav-item" key={item.label} onMouseEnter={() => setActiveMenu(item.label)}>
              <Link
                href={item.href}
                className={pathname === item.href || pathname.startsWith(`${item.href}/`) ? "active" : ""}
                aria-expanded={activeMenu === item.label}
                onFocus={() => setActiveMenu(item.label)}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>
        <div className="header-actions">
          <Link href="/company/contact" className="button button-small button-primary">Talk to ahens <span aria-hidden="true">↗</span></Link>
          <button
            className="menu-button"
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
          >
            <span /><span />
          </button>
        </div>
      </div>

      <div className={`mega-menu ${active ? "is-open" : ""}`} aria-hidden={!active}>
        {active && (
          <div className="container mega-menu-inner">
            <div className="mega-menu-groups">
              {active.groups.map((group) => (
                <div className="mega-menu-group" key={group.title}>
                  <p>{group.title}</p>
                  {group.links.map((link) => (
                    <Link href={link.href} key={link.href}>
                      <span>{link.label}</span>
                      {link.description && <small>{link.description}</small>}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            <div className="mega-menu-preview" aria-hidden="true">
              <div className="preview-grid" />
              <div className="preview-node preview-node-a" />
              <div className="preview-node preview-node-b" />
              <div className="preview-node preview-node-c" />
              <p>{active.featured}</p>
            </div>
          </div>
        )}
      </div>

      <div className={`mobile-menu ${mobileOpen ? "is-open" : ""}`} aria-hidden={!mobileOpen}>
        <div className="mobile-menu-panel">
          <div className="mobile-menu-top">
            <BrandMark />
            <button type="button" className="mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <span />
              <span />
            </button>
          </div>
          <nav aria-label="Mobile navigation">
            {mainNav.map((item) => {
              const expanded = mobileSection === item.label;
              return (
                <div className="mobile-nav-section" key={item.label}>
                  <button type="button" aria-expanded={expanded} onClick={() => setMobileSection(item.label)}>
                    {item.label}
                    <span>{expanded ? "-" : "+"}</span>
                  </button>
                  <div className="mobile-nav-links">
                    <Link href={item.href}>{item.label} overview</Link>
                    {expanded &&
                      item.groups.flatMap((group) =>
                        group.links.map((link) => (
                          <Link href={link.href} key={`${item.label}-${link.href}`}>{link.label}</Link>
                        )),
                      )}
                  </div>
                </div>
              );
            })}
          </nav>
          <Link href="/company/contact" className="button button-primary mobile-menu-cta">Start a conversation <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </header>
  );
}
