import { useLanguage } from "@/hooks/use-language";
import { Globe } from "lucide-react";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 bg-royal-gold text-charcoal px-4 py-2 rounded-lg hover:bg-gold-thread transition-colors lang-toggle"
      data-testid="language-toggle"
    >
      <Globe size={18} />
      <span className="font-semibold">
        {language === 'ar' ? 'EN' : 'عر'}
      </span>
    </button>
  );
}
