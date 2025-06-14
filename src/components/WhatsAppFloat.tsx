
import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const whatsappNumber = "+966538859677";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => window.open(whatsappLink, '_blank')}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse"
        aria-label="تواصل معنا عبر واتساب"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default WhatsAppFloat;
