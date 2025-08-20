import { useLanguage } from "@/hooks/use-language";
import { t } from "@/lib/translations";
import CrownLogo from "@/components/ui/crown-logo";

export default function Mugs() {
  const { language } = useLanguage();

  const mugImages = [
    "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1497636577773-f1231844b336?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1504382262948-d3e97d3eac84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1611854779393-1b2da9d400ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  ];

  return (
    <section id="mugs" className="py-24 bg-gradient-to-br from-ivory to-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <CrownLogo size="lg" className="text-royal-gold mb-6" />
          
          <h2 
            className="text-5xl font-bold mb-6 text-charcoal"
            data-testid="mugs-title"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {language === 'ar' ? 'طباعة على الأكواب' : 'Custom Printed Mugs'}
          </h2>
          
          <p 
            className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            data-testid="mugs-subtitle"
            style={{ fontFamily: 'var(--font-arabic)' }}
          >
            {language === 'ar' ? 'أكواب مخصصة بطباعة عالية الجودة لجميع المناسبات' : 'Custom high-quality printed mugs for all occasions'}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {mugImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover-glow"
              data-testid={`mug-item-${index}`}
            >
              <img
                src={image}
                alt={`Custom mug ${index + 1}`}
                className="w-full h-64 object-cover"
                data-testid={`mug-image-${index}`}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <div className="w-8 h-1 bg-royal-gold rounded-full mx-auto"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://wa.me/201234567890"
            className="bg-royal-gold text-white px-12 py-4 rounded-xl font-bold text-xl hover:bg-gold-thread transition-all transform hover:scale-105 shadow-xl inline-block"
          >
            {language === 'ar' ? 'اطلب طباعة مخصصة' : 'Order Custom Printing'}
          </a>
        </div>
      </div>
    </section>
  );
}