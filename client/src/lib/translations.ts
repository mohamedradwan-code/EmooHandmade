type Language = 'ar' | 'en';

const translations = {
  ar: {
    brand: {
      subtitle: 'التطريز الملكي المصري'
    },
    nav: {
      home: 'الرئيسية',
      products: 'المنتجات',
      gallery: 'معرض الأعمال',
      contact: 'التواصل'
    },
    hero: {
      subtitle: 'أجمل التطريز اليدوي المصري لمناديل الأفراح وملابس المواليد والهدايا المميزة',
      cta: 'تصفح المنتجات',
      whatsapp: 'اطلب الآن'
    },
    products: {
      title: 'منتجاتنا المميزة',
      subtitle: 'تطريز يدوي فاخر بأجود الخامات والتصميمات الملكية',
      handkerchiefs: {
        title: 'مناديل الفرح',
        description: 'مناديل مطرزة بالأسماء والتواريخ مع إطارات ذهبية فاخرة'
      },
      baby: {
        title: 'ملابس المواليد',
        description: 'سيتات كاملة للمواليد مطرزة بالأسماء والتيجان'
      },
      frames: {
        title: 'الطارات والبراويز',
        description: 'براويز مطرزة فاخرة للذكريات الجميلة'
      },
      caps: {
        title: 'القبعات المطرزة',
        description: 'قبعات مطرزة بالأسماء والتصميمات الشخصية'
      }
    },
    gallery: {
      title: 'معرض أعمالنا',
      subtitle: 'شاهد جمال التطريز اليدوي في منتجاتنا الحقيقية',
      'baby-set': 'سيت المولود المطرز',
      'wedding-handkerchief': 'منديل الفرح المطرز',
      'embroidered-frame': 'البرواز المطرز',
      'embroidered-cap': 'القبعة المطرزة',
      'traditional-work': 'أعمال تراثية',
      'personalized-embroidery': 'تطريز شخصي'
    },
    contact: {
      title: 'التواصل والتوصيل',
      subtitle: 'نحن هنا لخدمتك في جميع أنحاء جمهورية مصر العربية',
      location: {
        title: 'موقعنا',
        text: 'القاهرة، مصر'
      },
      delivery: {
        title: 'التوصيل المجاني',
        text: 'يوجد ديليفري وتوصيل لكل الجمهورية مجاناً'
      },
      whatsapp: {
        title: 'واتساب',
        subtitle: 'تواصل معنا مباشرة',
        cta: 'ابدأ المحادثة'
      }
    },
    form: {
      title: 'أرسل رسالة',
      'name-label': 'الاسم',
      'phone-label': 'رقم الهاتف',
      'product-label': 'المنتج المطلوب',
      'message-label': 'تفاصيل الطلب',
      submit: 'إرسال الطلب',
      'select-option': 'اختر المنتج',
      error: 'خطأ في النموذج',
      'required-fields': 'يرجى ملء الحقول المطلوبة',
      success: 'تم الإرسال بنجاح',
      redirecting: 'جاري التوجيه إلى واتساب...',
      'new-order': 'طلب جديد من الموقع'
    },
    actions: {
      'order-now': 'اطلب الآن',
      whatsapp: 'واتساب'
    },
    common: {
      'price-request': 'السعر عند الطلب',
      'not-specified': 'غير محدد',
      none: 'لا يوجد'
    },
    whatsapp: {
      handkerchiefs: 'أريد الاستفسار عن مناديل الفرح',
      baby: 'أريد الاستفسار عن ملابس المواليد',
      frames: 'أريد الاستفسار عن الطارات والبراويز',
      caps: 'أريد الاستفسار عن القبعات المطرزة'
    },
    footer: {
      copyright: '© 2024 EmooHandmade. جميع الحقوق محفوظة.'
    }
  },
  en: {
    brand: {
      subtitle: 'Royal Egyptian Embroidery'
    },
    nav: {
      home: 'Home',
      products: 'Products',
      gallery: 'Gallery',
      contact: 'Contact'
    },
    hero: {
      subtitle: 'The finest Egyptian handmade embroidery for wedding handkerchiefs, baby clothes, and special gifts',
      cta: 'Browse Products',
      whatsapp: 'Order Now'
    },
    products: {
      title: 'Our Featured Products',
      subtitle: 'Luxury handmade embroidery with the finest materials and royal designs',
      handkerchiefs: {
        title: 'Wedding Handkerchiefs',
        description: 'Handkerchiefs embroidered with names and dates with luxurious golden frames'
      },
      baby: {
        title: 'Baby Clothes',
        description: 'Complete sets for newborns embroidered with names and crowns'
      },
      frames: {
        title: 'Frames & Hoops',
        description: 'Luxurious embroidered frames for beautiful memories'
      },
      caps: {
        title: 'Embroidered Caps',
        description: 'Caps embroidered with names and personal designs'
      }
    },
    gallery: {
      title: 'Our Work Gallery',
      subtitle: 'See the beauty of handmade embroidery in our real products',
      'baby-set': 'Embroidered Baby Set',
      'wedding-handkerchief': 'Embroidered Wedding Handkerchief',
      'embroidered-frame': 'Embroidered Frame',
      'embroidered-cap': 'Embroidered Cap',
      'traditional-work': 'Traditional Work',
      'personalized-embroidery': 'Personalized Embroidery'
    },
    contact: {
      title: 'Contact & Delivery',
      subtitle: 'We are here to serve you throughout the Arab Republic of Egypt',
      location: {
        title: 'Our Location',
        text: 'Cairo, Egypt'
      },
      delivery: {
        title: 'Delivery',
        text: 'Free delivery and shipping throughout the republic'
      },
      whatsapp: {
        title: 'WhatsApp',
        subtitle: 'Contact us directly',
        cta: 'Start Conversation'
      }
    },
    form: {
      title: 'Send Message',
      'name-label': 'Name',
      'phone-label': 'Phone Number',
      'product-label': 'Required Product',
      'message-label': 'Order Details',
      submit: 'Send Order',
      'select-option': 'Choose Product',
      error: 'Form Error',
      'required-fields': 'Please fill in the required fields',
      success: 'Sent Successfully',
      redirecting: 'Redirecting to WhatsApp...',
      'new-order': 'New order from website'
    },
    actions: {
      'order-now': 'Order Now',
      whatsapp: 'WhatsApp'
    },
    common: {
      'price-request': 'Price Upon Request',
      'not-specified': 'Not specified',
      none: 'None'
    },
    whatsapp: {
      handkerchiefs: 'I would like to inquire about wedding handkerchiefs',
      baby: 'I would like to inquire about baby clothes',
      frames: 'I would like to inquire about frames and hoops',
      caps: 'I would like to inquire about embroidered caps'
    },
    footer: {
      copyright: '© 2024 EmooHandmade. All rights reserved.'
    }
  }
};

export function t(key: string, language: Language): string {
  const keys = key.split('.');
  let value: any = translations[language];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}
