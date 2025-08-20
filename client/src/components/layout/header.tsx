import { useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import { t } from "@/lib/translations";
import LanguageToggle from "@/components/ui/language-toggle";
import CrownLogo from "@/components/ui/crown-logo";
import { Menu, X } from "lucide-react";

export default function Header() {
  const { language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { id: 'home', label: t('nav.home', language), href: '#home' },
    { id: 'products', label: t('nav.products', language), href: '#products' },
    { id: 'gallery', label: t('nav.gallery', language), href: '#gallery' },
    { id: 'contact', label: t('nav.contact', language), href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed-header">
      <div className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          {/* Language Toggle */}
          <div className="flex-1">
            <LanguageToggle />
          </div>

          {/* Main Logo - Made Much Larger */}
          <div className="text-center flex-2">
            <CrownLogo size="xl" className="text-royal-gold mb-3 crown-glow" />
            <h1 
              className="text-4xl md:text-6xl font-bold text-charcoal mb-2"
              data-testid="main-title"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              EmooHandmade
            </h1>
            <p 
              className="text-lg md:text-xl text-deep-brown font-semibold"
              data-testid="main-subtitle"
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              {t('brand.subtitle', language)}
            </p>
          </div>

          {/* WhatsApp Button */}
          <div className="flex-1 flex justify-end">
            <a
              href="https://wa.me/201234567890"
              className="bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition-all transform hover:scale-105 flex items-center space-x-2 whatsapp-pulse shadow-lg"
              data-testid="header-whatsapp"
            >
              <i className="fab fa-whatsapp text-xl"></i>
              <span className="hidden md:inline font-bold">{t('actions.whatsapp', language)}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-charcoal ml-4"
            data-testid="mobile-menu-toggle"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className={`mt-8 border-t-2 border-royal-gold pt-6 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row justify-center space-y-3 md:space-y-0 md:space-x-12 text-xl">
            {navigation.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="hover:text-royal-gold transition-all transform hover:scale-110 w-full text-left md:text-center font-bold text-charcoal py-2 px-4 rounded-lg hover:bg-blush"
                  data-testid={`nav-${item.id}`}
                  style={{ fontFamily: 'var(--font-arabic)' }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
