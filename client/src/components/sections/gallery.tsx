import { useLanguage } from "@/hooks/use-language";
import { t } from "@/lib/translations";
import CrownLogo from "@/components/ui/crown-logo";
import handkerchief1 from "@assets/403646959_340302955439392_1421753212864831713_n_1755629410578.jpg";
import handkerchief2 from "@assets/414716106_1047689419858027_7858595889682182232_n_1755629410578.jpg";
import handkerchief3 from "@assets/414862307_285320244550651_1184984087451517235_n_1755629410580.jpg";
import handkerchief4 from "@assets/417318347_1065610114681270_400931503613574064_n_1755629410581.jpg";
import babyClothes1 from "@assets/414739798_7202745026412480_5347988777097993900_n_1755629410578.jpg";
import babyClothes2 from "@assets/414746230_743196054392906_8598672011335302972_n_1755629410579.jpg";
import babyClothes3 from "@assets/414748598_1399908187280818_5726781184509296558_n_1755629410579.jpg";
import babyClothes4 from "@assets/414791708_901944668316886_467831080823301417_n_1755629410579.jpg";
import babyClothes5 from "@assets/414831183_733781671711437_6924286259960538560_n_1755629410580.jpg";
import babyClothes6 from "@assets/417677973_351615324275830_7708183616916098727_n_1755629410581.jpg";
import cap from "@assets/418130538_751698226803743_2472743793392021549_n_1755629410581.jpg";
import frame from "@assets/403647780_1843141529458172_4553711002177212471_n_1755629410578.jpg";

export default function Gallery() {
  const { language } = useLanguage();

  const galleryItems = [
    {
      id: 'handkerchief-1',
      title: t('gallery.wedding-handkerchief', language),
      image: handkerchief1,
      category: 'handkerchiefs'
    },
    {
      id: 'handkerchief-2',
      title: t('gallery.wedding-handkerchief', language),
      image: handkerchief2,
      category: 'handkerchiefs'
    },
    {
      id: 'handkerchief-3',
      title: t('gallery.wedding-handkerchief', language),
      image: handkerchief3,
      category: 'handkerchiefs'
    },
    {
      id: 'handkerchief-4',
      title: t('gallery.wedding-handkerchief', language),
      image: handkerchief4,
      category: 'handkerchiefs'
    },
    {
      id: 'baby-set-1',
      title: t('gallery.baby-set', language),
      image: babyClothes1,
      category: 'baby'
    },
    {
      id: 'baby-set-2',
      title: t('gallery.baby-set', language),
      image: babyClothes2,
      category: 'baby'
    },
    {
      id: 'baby-set-3',
      title: t('gallery.baby-set', language),
      image: babyClothes3,
      category: 'baby'
    },
    {
      id: 'baby-set-4',
      title: t('gallery.baby-set', language),
      image: babyClothes4,
      category: 'baby'
    },
    {
      id: 'baby-set-5',
      title: t('gallery.baby-set', language),
      image: babyClothes5,
      category: 'baby'
    },
    {
      id: 'baby-set-6',
      title: t('gallery.baby-set', language),
      image: babyClothes6,
      category: 'baby'
    },
    {
      id: 'cap-1',
      title: t('gallery.embroidered-cap', language),
      image: cap,
      category: 'caps'
    },
    {
      id: 'frame-1',
      title: t('gallery.embroidered-frame', language),
      image: frame,
      category: 'frames'
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <CrownLogo size="lg" className="text-royal-gold mb-6" />
          
          <h2 
            className="text-5xl font-bold mb-6 text-charcoal"
            data-testid="gallery-title"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {t('gallery.title', language)}
          </h2>
          
          <p 
            className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            data-testid="gallery-subtitle"
            style={{ fontFamily: 'var(--font-arabic)' }}
          >
            {t('gallery.subtitle', language)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="gallery-item group relative shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden transform hover:scale-105"
              data-testid={`gallery-item-${item.id}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover"
                data-testid={`gallery-image-${item.id}`}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <p 
                    className="text-white text-lg font-bold mb-2"
                    data-testid={`gallery-title-${item.id}`}
                    style={{ fontFamily: 'var(--font-arabic)' }}
                  >
                    {item.title}
                  </p>
                  <div className="w-12 h-1 bg-royal-gold rounded-full"></div>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4 bg-royal-gold text-white px-3 py-1 rounded-full text-sm font-bold">
                {item.category === 'handkerchiefs' && (language === 'ar' ? 'مناديل' : 'Handkerchiefs')}
                {item.category === 'baby' && (language === 'ar' ? 'مواليد' : 'Baby')}
                {item.category === 'caps' && (language === 'ar' ? 'قبعات' : 'Caps')}
                {item.category === 'frames' && (language === 'ar' ? 'إطارات' : 'Frames')}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="https://wa.me/201234567890"
            className="bg-royal-gold text-white px-12 py-4 rounded-xl font-bold text-xl hover:bg-gold-thread transition-all transform hover:scale-105 shadow-xl inline-block"
          >
            {language === 'ar' ? 'اطلب تصميمك الخاص' : 'Order Your Custom Design'}
          </a>
        </div>
      </div>
    </section>
  );
}
