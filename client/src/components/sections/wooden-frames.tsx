import { useLanguage } from "@/hooks/use-language";
import { t } from "@/lib/translations";
import CrownLogo from "@/components/ui/crown-logo";

export default function WoodenFrames() {
  const { language } = useLanguage();

  const woodenFrameImages = [
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1521133573892-e44906baee46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1525772764200-be829510ca22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  ];

  return (
    <section id="wooden-frames" className="py-24 bg-gradient-to-br from-sage-green/20 to-egyptian-turquoise/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <CrownLogo size="lg" className="text-royal-gold mb-6" />
          
          <h2 
            className="text-5xl font-bold mb-6 text-charcoal"
            data-testid="wooden-frames-title"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {language === 'ar' ? 'إطارات خشبية للأفراح' : 'Wooden Wedding Frames'}
          </h2>
          
          <p 
            className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            data-testid="wooden-frames-subtitle"
            style={{ fontFamily: 'var(--font-arabic)' }}
          >
            {language === 'ar' ? 'إطارات خشبية فاخرة مصنوعة يدوياً لحفلات الزفاف والمناسبات الخاصة' : 'Luxury handcrafted wooden frames for weddings and special occasions'}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {woodenFrameImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover-glow"
              data-testid={`wooden-frame-item-${index}`}
            >
              <img
                src={image}
                alt={`Wooden frame ${index + 1}`}
                className="w-full h-64 object-cover"
                data-testid={`wooden-frame-image-${index}`}
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
            {language === 'ar' ? 'اطلب إطارات مخصصة' : 'Order Custom Frames'}
          </a>
        </div>
      </div>
    </section>
  );
}