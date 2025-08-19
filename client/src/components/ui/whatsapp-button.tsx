import { useLanguage } from "@/hooks/use-language";
import { t } from "@/lib/translations";

export default function WhatsAppButton() {
  const { language } = useLanguage();

  return (
    <a
      href="https://wa.me/201234567890"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-40 whatsapp-pulse"
      data-testid="floating-whatsapp"
      title={t('actions.whatsapp', language)}
    >
      <i className="fab fa-whatsapp text-2xl"></i>
    </a>
  );
}
