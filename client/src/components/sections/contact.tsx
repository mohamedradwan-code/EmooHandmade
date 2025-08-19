import { useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import { t } from "@/lib/translations";
import { useToast } from "@/hooks/use-toast";
import CrownLogo from "@/components/ui/crown-logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Contact() {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: t('form.error', language),
        description: t('form.required-fields', language),
        variant: "destructive"
      });
      return;
    }

    // Create WhatsApp message
    const message = `${t('form.new-order', language)}
${t('form.name-label', language)}: ${formData.name}
${t('form.phone-label', language)}: ${formData.phone}
${t('form.product-label', language)}: ${formData.product || t('common.not-specified', language)}
${t('form.message-label', language)}: ${formData.message || t('common.none', language)}`;

    const whatsappUrl = `https://wa.me/201234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: t('form.success', language),
      description: t('form.redirecting', language),
    });

    // Reset form
    setFormData({ name: '', phone: '', product: '', message: '' });
  };

  const products = [
    { value: 'handkerchiefs', label: t('products.handkerchiefs.title', language) },
    { value: 'baby-clothes', label: t('products.baby.title', language) },
    { value: 'frames', label: t('products.frames.title', language) },
    { value: 'caps', label: t('products.caps.title', language) },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <CrownLogo size="lg" className="text-royal-gold mb-4" />
          
          <h2 
            className="text-4xl font-bold mb-4"
            data-testid="contact-title"
          >
            {t('contact.title', language)}
          </h2>
          
          <p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            data-testid="contact-subtitle"
          >
            {t('contact.subtitle', language)}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-royal-gold rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className={`${language === 'ar' ? 'mr-6' : 'ml-6'}`}>
                  <h3 
                    className="text-3xl font-bold text-charcoal mb-2"
                    data-testid="location-title"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {t('contact.location.title', language)}
                  </h3>
                  <p 
                    className="text-xl text-deep-brown font-semibold"
                    data-testid="location-text"
                    style={{ fontFamily: 'var(--font-arabic)' }}
                  >
                    {t('contact.location.text', language)}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-egyptian-turquoise rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
                  <i className="fas fa-truck"></i>
                </div>
                <div className={`${language === 'ar' ? 'mr-6' : 'ml-6'}`}>
                  <h3 
                    className="text-3xl font-bold text-charcoal mb-2"
                    data-testid="delivery-title"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {t('contact.delivery.title', language)}
                  </h3>
                  <p 
                    className="text-xl text-deep-brown font-semibold"
                    data-testid="delivery-text"
                    style={{ fontFamily: 'var(--font-arabic)' }}
                  >
                    {t('contact.delivery.text', language)}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div className={`${language === 'ar' ? 'mr-6' : 'ml-6'}`}>
                  <h3 
                    className="text-3xl font-bold text-charcoal mb-2"
                    data-testid="whatsapp-section-title"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {t('contact.whatsapp.title', language)}
                  </h3>
                  <p 
                    className="text-xl text-deep-brown font-semibold"
                    data-testid="whatsapp-section-subtitle"
                    style={{ fontFamily: 'var(--font-arabic)' }}
                  >
                    {t('contact.whatsapp.subtitle', language)}
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/201234567890"
                className="bg-green-500 text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-green-600 transition-all transform hover:scale-105 inline-block whatsapp-pulse shadow-xl"
                data-testid="whatsapp-cta"
              >
                {t('contact.whatsapp.cta', language)}
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-xl shadow-lg">
            <h3 
              className="text-3xl font-bold mb-6 text-center"
              data-testid="form-title"
            >
              {t('form.title', language)}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label 
                  htmlFor="name"
                  className="block text-lg font-semibold mb-2"
                  data-testid="form-name-label"
                >
                  {t('form.name-label', language)}
                </Label>
                <Input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="form-input"
                  required
                  data-testid="form-name-input"
                />
              </div>

              <div>
                <Label 
                  htmlFor="phone"
                  className="block text-lg font-semibold mb-2"
                  data-testid="form-phone-label"
                >
                  {t('form.phone-label', language)}
                </Label>
                <Input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="form-input"
                  required
                  data-testid="form-phone-input"
                />
              </div>

              <div>
                <Label 
                  htmlFor="product"
                  className="block text-lg font-semibold mb-2"
                  data-testid="form-product-label"
                >
                  {t('form.product-label', language)}
                </Label>
                <Select 
                  value={formData.product} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, product: value }))}
                >
                  <SelectTrigger data-testid="form-product-select">
                    <SelectValue placeholder={t('form.select-option', language)} />
                  </SelectTrigger>
                  <SelectContent>
                    {products.map((product) => (
                      <SelectItem 
                        key={product.value} 
                        value={product.value}
                        data-testid={`form-option-${product.value}`}
                      >
                        {product.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label 
                  htmlFor="message"
                  className="block text-lg font-semibold mb-2"
                  data-testid="form-message-label"
                >
                  {t('form.message-label', language)}
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="form-input"
                  data-testid="form-message-input"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-royal-gold text-charcoal px-8 py-4 text-xl font-semibold rounded-lg hover:bg-gold-thread transition-colors"
                data-testid="form-submit"
              >
                {t('form.submit', language)}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
