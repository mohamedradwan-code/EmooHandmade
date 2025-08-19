import { useLanguage } from "@/hooks/use-language";
import { t } from "@/lib/translations";
import CrownLogo from "@/components/ui/crown-logo";
import handkerchief1 from "@assets/403646959_340302955439392_1421753212864831713_n_1755629410578.jpg";
import handkerchief2 from "@assets/414716106_1047689419858027_7858595889682182232_n_1755629410578.jpg";
import babyClothes1 from "@assets/414739798_7202745026412480_5347988777097993900_n_1755629410578.jpg";
import babyClothes2 from "@assets/414746230_743196054392906_8598672011335302972_n_1755629410579.jpg";
import babyClothes3 from "@assets/414831183_733781671711437_6924286259960538560_n_1755629410580.jpg";
import cap from "@assets/418130538_751698226803743_2472743793392021549_n_1755629410581.jpg";

export default function Products() {
  const { language } = useLanguage();

  const products = [
    {
      id: 'handkerchiefs',
      title: t('products.handkerchiefs.title', language),
      description: t('products.handkerchiefs.description', language),
      images: [handkerchief1, handkerchief2],
      whatsappText: encodeURIComponent(t('whatsapp.handkerchiefs', language))
    },
    {
      id: 'baby-clothes',
      title: t('products.baby.title', language),
      description: t('products.baby.description', language),
      images: [babyClothes1, babyClothes2, babyClothes3],
      whatsappText: encodeURIComponent(t('whatsapp.baby', language))
    },
    {
      id: 'frames',
      title: t('products.frames.title', language),
      description: t('products.frames.description', language),
      images: [handkerchief1],
      whatsappText: encodeURIComponent(t('whatsapp.frames', language))
    },
    {
      id: 'caps',
      title: t('products.caps.title', language),
      description: t('products.caps.description', language),
      images: [cap],
      whatsappText: encodeURIComponent(t('whatsapp.caps', language))
    }
  ];

  return (
    <section id="products" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <CrownLogo size="lg" className="text-royal-gold mb-6" />
          
          <h2 
            className="text-5xl font-bold mb-6 text-charcoal"
            data-testid="products-title"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {t('products.title', language)}
          </h2>
          
          <p 
            className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            data-testid="products-subtitle"
            style={{ fontFamily: 'var(--font-arabic)' }}
          >
            {t('products.subtitle', language)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300"
              data-testid={`product-card-${product.id}`}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  data-testid={`product-image-${product.id}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-8">
                <h3 
                  className="text-3xl font-bold mb-4 text-royal-gold"
                  data-testid={`product-title-${product.id}`}
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {product.title}
                </h3>
                
                <p 
                  className="text-lg text-charcoal mb-6 leading-relaxed"
                  data-testid={`product-description-${product.id}`}
                  style={{ fontFamily: 'var(--font-arabic)' }}
                >
                  {product.description}
                </p>
                
                <div 
                  className="text-2xl font-bold text-deep-brown mb-6 text-center py-3 bg-blush rounded-xl"
                  data-testid={`product-price-${product.id}`}
                  style={{ fontFamily: 'var(--font-arabic)' }}
                >
                  {t('common.price-request', language)}
                </div>
                
                <a
                  href={`https://wa.me/201234567890?text=${product.whatsappText}`}
                  className="w-full bg-royal-gold text-white px-8 py-4 rounded-xl font-bold text-xl hover:bg-gold-thread transition-all transform hover:scale-105 block text-center shadow-lg"
                  data-testid={`product-order-${product.id}`}
                >
                  {t('actions.order-now', language)}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
