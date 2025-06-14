
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden" dir="rtl">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="mb-8">
          <MessageCircle className="w-16 h-16 text-purple-400 mx-auto mb-4 animate-pulse" />
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            جاهز للانطلاق؟
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            إذا كنت تبغى تصميم متجر إلكتروني احترافي يساعدك في زيادة مبيعاتك وتنمية عملك، كوارزم هي الخيار المثالي. 
            تواصل معنا الآن علشان نساعدك تبدأ مشروعك الإلكتروني!
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-12 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            تواصل معنا عبر واتساب الآن
            <ArrowLeft className="mr-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
