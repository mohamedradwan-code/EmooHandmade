import { useLanguage } from "@/hooks/use-language";
import { t } from "@/lib/translations";
import CrownLogo from "@/components/ui/crown-logo";
import weddingBg from "@assets/393108505_778575217438955_153911832339221113_n_1755629410577.jpg";

export default function Hero() {
  const { language } = useLanguage();

  const scrollToProducts = () => {
    const element = document.querySelector('#products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${weddingBg}') center/cover`
      }}
    >
      <div className="text-center text-white px-4 max-w-4xl">
        <CrownLogo size="xl" className="text-gold-thread mb-8 crown-glow" />
        
        <h1 
          className="text-5xl md:text-7xl font-bold mb-6 text-gold-thread"
          data-testid="hero-title"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          EmooHandmade
        </h1>
        
        <p 
          className="text-2xl md:text-3xl mb-8 leading-relaxed text-ivory"
          data-testid="hero-subtitle"
          style={{ fontFamily: 'var(--font-arabic)' }}
        >
          {t('hero.subtitle', language)}
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <button
            onClick={scrollToProducts}
            className="bg-gold-thread text-charcoal px-10 py-5 text-xl font-bold rounded-xl hover:bg-royal-gold transition-all transform hover:scale-105 shadow-xl"
            data-testid="hero-cta"
          >
            {t('hero.cta', language)}
          </button>
          
          <a
            href="https://wa.me/201234567890"
            className="border-3 border-gold-thread text-gold-thread px-10 py-5 text-xl font-bold rounded-xl hover:bg-gold-thread hover:text-charcoal transition-all transform hover:scale-105 shadow-xl"
            data-testid="hero-whatsapp"
          >
            {t('hero.whatsapp', language)}
          </a>
        </div>
      </div>
    </section>
  );
}
