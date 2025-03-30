// components/WhatsAppToggle.tsx
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image'; // Import Next.js Image component

interface WhatsAppToggleProps {
  phoneNumber?: string;
  message?: string;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  showPopup?: boolean;
  popupText?: string;
  animationType?: 'ping' | 'pulse' | 'bounce' | 'shake';
  buttonColor?: string;
  buttonHoverColor?: string;
  iconColor?: string;
  className?: string;
  iconImage?: string; // Add new prop for icon image path
}

const WhatsAppToggle: React.FC<WhatsAppToggleProps> = ({
  phoneNumber = '1234567890',
  message = '',
  position = 'bottom-right',
  showPopup = true,
  popupText = 'Need help? Chat with us!',
  animationType = 'ping',
  buttonColor = '#25D366',
  buttonHoverColor = '#128C7E',
  iconColor = 'white',
  className = '',
  iconImage = '/whatsapp.png', // Default image path
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Position classes mapping
  const positionClasses = {
    'bottom-right': 'bottom-8 right-8',
    'bottom-left': 'bottom-8 left-8',
    'top-right': 'top-8 right-8',
    'top-left': 'top-8 left-8',
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleWhatsAppClick = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsAnimating(true);
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}${message ? `?text=${encodedMessage}` : ''}`;
    
    timeoutRef.current = setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 300);
    
    timeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  const handleMouseEnter = () => {
    if (showPopup) {
      setShowTooltip(true);
    }
  };

  const handleMouseLeave = () => {
    if (showPopup) {
      setShowTooltip(false);
    }
  };

  const animationVariants = {
    ping: 'animate-ping scale-110',
    pulse: 'animate-pulse scale-105',
    bounce: 'animate-bounce',
    shake: 'animate-shake',
  };

  return (
    <div 
      className={`fixed z-[9999] transition-all duration-500 ease-out ${positionClasses[position]} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      } ${className}`}
    >
      <div className="relative">
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: position.includes('right') ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: position.includes('right') ? 20 : -20 }}
              transition={{ duration: 0.2 }}
              className={`absolute ${
                position.includes('right') ? 'right-16' : 'left-16'
              } bottom-1/2 transform translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-md whitespace-nowrap shadow-lg`}
            >
              {popupText}
              <div className={`absolute top-1/2 transform -translate-y-1/2 ${
                position.includes('right') ? '-right-1' : '-left-1'
              } w-2 h-2 bg-gray-800 rotate-45`} />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button 
          onClick={handleWhatsAppClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-14 h-14 rounded-full border-none cursor-pointer flex items-center justify-center shadow-lg transition-all duration-300 ${
            isAnimating ? animationVariants[animationType] : ''
          }`}
          style={{
            backgroundColor: isAnimating ? buttonHoverColor : buttonColor,
          }}
          aria-label="Chat on WhatsApp"
        >
          <Image 
            src={iconImage}
            alt="WhatsApp icon"
            width={24}
            height={24}
            className="w-14 h-14 object-contain"
          />
        </motion.button>
      </div>
    </div>
  );
};

export default WhatsAppToggle;
