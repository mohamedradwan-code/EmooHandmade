import { useLanguage } from "@/hooks/use-language";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Products from "@/components/sections/products";
import Gallery from "@/components/sections/gallery";
import Contact from "@/components/sections/contact";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import { useEffect } from "react";

export default function Home() {
  const { language } = useLanguage();

  useEffect(() => {
    // Update document direction and language
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero />
        <Products />
        <Gallery />
        <Contact />
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
