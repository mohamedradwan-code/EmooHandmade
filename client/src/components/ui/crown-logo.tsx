import { cn } from "@/lib/utils";

interface CrownLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export default function CrownLogo({ size = 'md', className }: CrownLogoProps) {
  const sizeClasses = {
    sm: 'text-3xl',
    md: 'text-5xl',
    lg: 'text-6xl',
    xl: 'text-8xl md:text-10xl'
  };

  return (
    <div 
      className={cn("inline-block", sizeClasses[size], className)}
      data-testid="crown-logo"
    >
      <svg
        viewBox="0 0 120 100"
        className="w-1em h-1em fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Crown Base - Luxurious Band */}
        <rect x="5" y="75" width="110" height="20" rx="8" fill="#D4AF37" stroke="#FFD700" strokeWidth="2" />
        
        {/* Ornate Band Details */}
        <rect x="8" y="78" width="104" height="3" rx="1" fill="#FFD700" />
        <rect x="8" y="85" width="104" height="3" rx="1" fill="#FFD700" />
        <rect x="8" y="92" width="104" height="3" rx="1" fill="#FFD700" />
        
        {/* Crown Gems on Base */}
        <circle cx="20" cy="85" r="4" fill="#40E0D0" stroke="#FFD700" strokeWidth="1" />
        <circle cx="40" cy="85" r="4" fill="#FF6B6B" stroke="#FFD700" strokeWidth="1" />
        <circle cx="60" cy="85" r="4" fill="#4ECDC4" stroke="#FFD700" strokeWidth="1" />
        <circle cx="80" cy="85" r="4" fill="#45B7D1" stroke="#FFD700" strokeWidth="1" />
        <circle cx="100" cy="85" r="4" fill="#FF6B6B" stroke="#FFD700" strokeWidth="1" />
        
        {/* Crown Points - Royal Design */}
        <polygon points="10,75 20,40 30,75" fill="#D4AF37" stroke="#FFD700" strokeWidth="2" />
        <polygon points="25,75 35,25 45,75" fill="#D4AF37" stroke="#FFD700" strokeWidth="2" />
        <polygon points="40,75 60,15 80,75" fill="#D4AF37" stroke="#FFD700" strokeWidth="2" />
        <polygon points="75,75 85,25 95,75" fill="#D4AF37" stroke="#FFD700" strokeWidth="2" />
        <polygon points="90,75 100,40 110,75" fill="#D4AF37" stroke="#FFD700" strokeWidth="2" />
        
        {/* Central Royal Jewel - Large */}
        <circle cx="60" cy="35" r="8" fill="#FFD700" stroke="#D4AF37" strokeWidth="2" />
        <circle cx="60" cy="35" r="5" fill="#FF6B6B" />
        <circle cx="60" cy="35" r="2" fill="#FFFFFF" />
        
        {/* Side Royal Jewels */}
        <circle cx="35" cy="45" r="6" fill="#4ECDC4" stroke="#FFD700" strokeWidth="1" />
        <circle cx="35" cy="45" r="3" fill="#FFFFFF" />
        
        <circle cx="85" cy="45" r="6" fill="#4ECDC4" stroke="#FFD700" strokeWidth="1" />
        <circle cx="85" cy="45" r="3" fill="#FFFFFF" />
        
        {/* Smaller decorative jewels */}
        <circle cx="20" cy="55" r="4" fill="#45B7D1" stroke="#FFD700" strokeWidth="1" />
        <circle cx="100" cy="55" r="4" fill="#45B7D1" stroke="#FFD700" strokeWidth="1" />
        
        {/* Ornate decorative patterns */}
        <path d="M15,75 Q20,65 25,75" stroke="#FFD700" strokeWidth="2" fill="none" />
        <path d="M30,75 Q35,65 40,75" stroke="#FFD700" strokeWidth="2" fill="none" />
        <path d="M45,75 Q50,65 55,75" stroke="#FFD700" strokeWidth="2" fill="none" />
        <path d="M65,75 Q70,65 75,75" stroke="#FFD700" strokeWidth="2" fill="none" />
        <path d="M80,75 Q85,65 90,75" stroke="#FFD700" strokeWidth="2" fill="none" />
        <path d="M95,75 Q100,65 105,75" stroke="#FFD700" strokeWidth="2" fill="none" />
        
        {/* Crown tips ornaments */}
        <circle cx="20" cy="40" r="2" fill="#FFD700" />
        <circle cx="35" cy="25" r="2" fill="#FFD700" />
        <circle cx="60" cy="15" r="3" fill="#FFD700" />
        <circle cx="85" cy="25" r="2" fill="#FFD700" />
        <circle cx="100" cy="40" r="2" fill="#FFD700" />
      </svg>
    </div>
  );
}
