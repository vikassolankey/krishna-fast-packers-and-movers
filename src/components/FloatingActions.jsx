import React from 'react';
import { Phone } from 'lucide-react';

const WhatsAppIcon = ({ size = 20, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M.057 24l1.687-6.163A10.948 10.948 0 0 1 0 11.998C0 5.373 5.373 0 11.998 0 18.623 0 24 5.373 24 11.998c0 6.624-5.377 12-12.002 12a11.95 11.95 0 0 1-6.357-1.84L.057 24zm6.597-3.807c1.853 1.1 3.283 1.77 5.95 1.77 5.451 0 9.886-4.435 9.886-9.887S18.055 2.19 12.604 2.19 2.718 6.625 2.718 12.076c0 2.357.905 4.518 2.414 6.194l-.62 2.254 2.142-.331zM7.9 7.507c.133-.296.273-.302.4-.308.104-.004.223-.004.342-.004.118 0 .31-.045.474.227.164.273.56.942.611 1.01.05.068.083.15.016.246-.068.096-.102.15-.2.246-.096.096-.205.216-.294.29-.097.08-.198.166-.085.325.114.158.508.836 1.09 1.353.75.668 1.383.877 1.582.973.2.096.316.083.434-.05.118-.133.5-.584.634-.784.133-.2.268-.167.447-.1.18.068 1.147.542 1.343.641.197.1.328.15.377.232.05.082.05.477-.118.935-.168.459-.988.905-1.37.967-.383.063-.743.09-1.206-.077-.463-.168-1.54-.633-2.206-1.24-.666-.609-1.403-1.422-1.618-2.064-.215-.642-.215-1.187-.15-1.303.065-.118.236-.183.377-.246.142-.064.318-.21.451-.35.133-.142.2-.237.282-.384.082-.146.05-.275.017-.38-.034-.105-.298-.74-.42-1.01-.118-.273-.249-.236-.366-.24-.117-.004-.25-.01-.383-.01-.133 0-.35.05-.534.248-.185.197-.704.687-.704 1.674s.72 1.942.82 2.078z" />
  </svg>
);

export default function FloatingActions() {
  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-3">
      <a
        href="tel:+916397237594"
        aria-label="Call Now"
        className="w-14 h-14 rounded-full bg-[#FF7A00] hover:bg-[#FF8A1A] text-white flex items-center justify-center shadow-xl transition-colors"
      >
        <Phone size={22} />
      </a>
      <a
        href="https://wa.me/916397237594"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#2BD06E] text-white flex items-center justify-center shadow-xl transition-colors"
      >
        <WhatsAppIcon size={22} />
      </a>
    </div>
  );
}
