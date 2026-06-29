"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { mainNav, site } from "@/data/site";
import { BrandMark } from "./BrandMark";

export function SiteHeader() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(mainNav[0].label);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const mobileCloseRef = useRef<HTMLButtonElement>(null);

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
      if (event.key === "Escape") {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = mobilePanelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    mobileCloseRef.current?.focus();
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function closeMobileMenu({ restoreFocus = true } = {}) {
    setMobileOpen(false);
    if (restoreFocus) {
      requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  }

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
            ref={menuButtonRef}
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

      {mobileOpen && (
        <div className="mobile-menu is-open" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className="mobile-menu-panel" ref={mobilePanelRef}>
            <div className="mobile-menu-top">
              <BrandMark />
              <button
                ref={mobileCloseRef}
                type="button"
                className="mobile-close"
                onClick={() => closeMobileMenu()}
                aria-label="Close menu"
              >
                <span />
                <span />
              </button>
            </div>
            <nav aria-label="Mobile navigation">
              {mainNav.map((item) => {
                const expanded = mobileSection === item.label;
                return (
                  <div className="mobile-nav-section" key={item.label}>
                    <button
                      type="button"
                      aria-expanded={expanded}
                      aria-controls={`mobile-nav-${item.label.toLowerCase()}`}
                      onClick={() => setMobileSection(expanded ? "" : item.label)}
                    >
                      <span>{item.label}</span>
                      <small>{item.featured}</small>
                      <i aria-hidden="true">{expanded ? "-" : "+"}</i>
                    </button>
                    {expanded && (
                      <div className="mobile-nav-links" id={`mobile-nav-${item.label.toLowerCase()}`}>
                        <Link href={item.href}>{item.label} overview</Link>
                        {item.groups.flatMap((group) =>
                          group.links.map((link) => (
                            <Link href={link.href} key={`${item.label}-${link.href}`}>
                              <span>{link.label}</span>
                              {link.description && <small>{link.description}</small>}
                            </Link>
                          )),
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
            <div className="mobile-menu-actions">
              <Link href="/company/contact" className="button button-primary mobile-menu-cta">Talk to ahens <span aria-hidden="true">↗</span></Link>
              <Link href="/platform" className="button button-ghost mobile-menu-secondary">Explore platform</Link>
            </div>
            <div className="mobile-menu-utility">
              <a href={`mailto:${site.email}`}>{site.email}</a>
              {site.social.map((item) => (
                <a href={item.href} target="_blank" rel="noreferrer" key={item.href}>{item.label}</a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
