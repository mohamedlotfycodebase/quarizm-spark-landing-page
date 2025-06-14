
import { Button } from "@/components/ui/button";
import { ArrowLeft, Zap, Users, Trophy } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden px-6 py-20 lg:py-32" dir="rtl">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          {/* Logo/Brand */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              كوارزم
            </h1>
            <p className="text-xl text-purple-200 mt-2 font-light">منصة التجارة الإلكترونية الذكية</p>
          </div>

          {/* Main Headline */}
          <div className="mb-12 animate-fade-in delay-200">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              مستعد تكسر حاجز المبيعات؟
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              إذا كنت تبغى متجرك الإلكتروني اللي يساعدك تزيد مبيعاتك وتوصل لعملاء جدد، إحنا هنا علشان نساعدك!
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8">
              هل تعبت من القيود اللي تفرضها عليك منصات مثل سلة و زد؟ هل كنت تفكر تبدأ من الصفر وتواجه صعوبة في البداية؟
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              مع كوارزم، نقدم لك متجر جاهز، تصميم مميز، ودعم مستمر خلال 48 ساعة فقط. جرب الديمو وتأكد من جودة المتجر قبل ما تبدأ..
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in delay-300">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-4">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-gray-400">متجر نشط</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
                <Zap className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white">48</div>
              <div className="text-gray-400">ساعة للتسليم</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-500/20 rounded-full mb-4">
                <Trophy className="w-8 h-8 text-pink-400" />
              </div>
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-gray-400">دعم فني</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              طلب متجرك الآن وادفع أونلاين
              <ArrowLeft className="mr-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300">
              اكتشف كيف نساعدك أكثر
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
