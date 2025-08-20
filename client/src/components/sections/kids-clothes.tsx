import { useLanguage } from "@/hooks/use-language";
import { t } from "@/lib/translations";
import CrownLogo from "@/components/ui/crown-logo";

export default function KidsClothes() {
  const { language } = useLanguage();

  const kidsClothesImages = [
    "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1586985289906-406988974504?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1582480963985-5a07fb85ddb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1488538018456-d458681db25e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  ];

  return (
    <section id="kids-clothes" className="py-24 bg-gradient-to-br from-blush to-soft-pink">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <CrownLogo size="lg" className="text-royal-gold mb-6" />
          
          <h2 
            className="text-5xl font-bold mb-6 text-charcoal"
            data-testid="kids-clothes-title"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {language === 'ar' ? 'ملابس الأطفال المطرزة' : 'Embroidered Kids Clothes'}
          </h2>
          
          <p 
            className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            data-testid="kids-clothes-subtitle"
            style={{ fontFamily: 'var(--font-arabic)' }}
          >
            {language === 'ar' ? 'ملابس أطفال مطرزة يدوياً بتصاميم فريدة ومميزة' : 'Hand-embroidered children\'s clothing with unique and special designs'}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {kidsClothesImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover-glow"
              data-testid={`kids-clothes-item-${index}`}
            >
              <img
                src={image}
                alt={`Kids clothes ${index + 1}`}
                className="w-full h-64 object-cover"
                data-testid={`kids-clothes-image-${index}`}
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
            {language === 'ar' ? 'اطلب ملابس مطرزة' : 'Order Embroidered Clothes'}
          </a>
        </div>
      </div>
    </section>
  );
}