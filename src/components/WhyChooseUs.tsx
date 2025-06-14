
import { Smartphone, Clock, Headphones, CreditCard, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Smartphone,
      title: "متجرك متوافق مع كل الأجهزة",
      description: "موقعك بيشتغل بسهولة على الموبايل، الكمبيوتر، والتابلت، يعني كل عميل عنده فرصة يتسوق منك."
    },
    {
      icon: Clock,
      title: "تصميمك جاهز خلال 48 ساعة",
      description: "48 ساعة فقط والموقع جاهز للبيع!"
    },
    {
      icon: Headphones,
      title: "دعم فني مستمر 24/7",
      description: "لو واجهتك أي مشكلة، فريقنا موجود طول الوقت لحل أي مشكلة تواجهها."
    },
    {
      icon: CreditCard,
      title: "طرق دفع آمنة وسهلة",
      description: "نوفّر لك أنظمة دفع آمنة لراحة عملائك."
    }
  ];

  return (
    <section className="py-20 px-6 relative" dir="rtl">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            ليه تختار كوارزم؟
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            4 أسباب تخلّك تختارنا لبناء متجرك الإلكتروني
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                    <reason.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-right">
                  <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg font-semibold rounded-full">
            خلنا نبدأ مشروعك الآن!
            <ArrowLeft className="mr-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
