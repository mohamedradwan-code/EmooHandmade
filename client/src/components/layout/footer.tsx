import { useLanguage } from "@/hooks/use-language";
import { t } from "@/lib/translations";
import CrownLogo from "@/components/ui/crown-logo";

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <CrownLogo size="lg" className="text-royal-gold mb-4" />
          
          <h3 
            className="text-3xl font-bold mb-4"
            data-testid="footer-title"
          >
            EmooHandmade
          </h3>
          
          <p 
            className="text-xl mb-6"
            data-testid="footer-subtitle"
          >
            {t('brand.subtitle', language)}
          </p>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://wa.me/201234567890"
              className="text-green-500 text-3xl hover:text-green-400 transition-colors"
              data-testid="footer-whatsapp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="#"
              className="text-blue-500 text-3xl hover:text-blue-400 transition-colors"
              data-testid="footer-facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="#"
              className="text-pink-500 text-3xl hover:text-pink-400 transition-colors"
              data-testid="footer-instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          
          <p 
            className="text-gray-400"
            data-testid="footer-copyright"
          >
            {t('footer.copyright', language)}
          </p>
        </div>
      </div>
    </footer>
  );
}
