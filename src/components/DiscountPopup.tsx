
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const DiscountPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappNumber = "+966538859677";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // Show after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" dir="rtl">
      <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-3xl p-8 max-w-md w-full relative border border-purple-400">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 left-4 text-white hover:text-gray-300 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center">
          <div className="text-4xl mb-4">🎉</div>
          <h3 className="text-2xl font-bold text-white mb-4">عرض خاص</h3>
          <p className="text-lg text-gray-200 mb-6 leading-relaxed">
            خد خصم 20% إذا طلبت الآن! العرض مو دايم يظهر لأي أحد، فإذا طلع لك، استغل الفرصة!
          </p>
          
          <div className="flex flex-col gap-3">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg font-semibold rounded-full w-full"
              onClick={() => {
                window.open(whatsappLink, '_blank');
                setIsVisible(false);
              }}
            >
              احصل على الخصم الآن!
            </Button>
            <Button 
              variant="outline" 
              className="border-gray-400 text-gray-300 hover:bg-gray-700 hover:text-white px-8 py-4 rounded-full w-full"
              onClick={() => setIsVisible(false)}
            >
              ربما لاحقاً
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountPopup;

