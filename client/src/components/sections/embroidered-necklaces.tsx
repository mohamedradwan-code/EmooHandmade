import { useLanguage } from "@/hooks/use-language";
import { t } from "@/lib/translations";
import CrownLogo from "@/components/ui/crown-logo";

export default function EmbroideredNecklaces() {
  const { language } = useLanguage();

  const necklaceImages = [
    "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1589674781759-c21c37956a44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1608987174049-d0fcac7bb66b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  ];

  return (
    <section id="embroidered-necklaces" className="py-24 bg-gradient-to-br from-soft-pink/30 to-royal-gold/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <CrownLogo size="lg" className="text-royal-gold mb-6" />
          
          <h2 
            className="text-5xl font-bold mb-6 text-charcoal"
            data-testid="necklaces-title"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {language === 'ar' ? 'عقود مطرزة' : 'Embroidered Necklaces'}
          </h2>
          
          <p 
            className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            data-testid="necklaces-subtitle"
            style={{ fontFamily: 'var(--font-arabic)' }}
          >
            {language === 'ar' ? 'عقود مطرزة يدوياً بخيوط ذهبية وتصاميم تراثية فاخرة' : 'Hand-embroidered necklaces with golden threads and luxury heritage designs'}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {necklaceImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover-glow"
              data-testid={`necklace-item-${index}`}
            >
              <img
                src={image}
                alt={`Embroidered necklace ${index + 1}`}
                className="w-full h-64 object-cover"
                data-testid={`necklace-image-${index}`}
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
            {language === 'ar' ? 'اطلب عقود مطرزة' : 'Order Embroidered Necklaces'}
          </a>
        </div>
      </div>
    </section>
  );
}