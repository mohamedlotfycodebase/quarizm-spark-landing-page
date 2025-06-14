
import { Clock, CreditCard, Headphones } from "lucide-react";

const WhatMakesUsDifferent = () => {
  const features = [
    {
      icon: Clock,
      title: "تصميم جاهز في 48 ساعة",
      description: "متجرك الجاهز خلال يومين، تقدر تبدأ فيه بيع منتجاتك بدون تأخير."
    },
    {
      icon: CreditCard,
      title: "الدفع الإلكتروني بسهولة",
      description: "نوفّر لك أنظمة دفع آمنة عشان عمليات الشراء تصير أسهل وأسرع."
    },
    {
      icon: Headphones,
      title: "دعم فني مستمر",
      description: "لو صار أي شيء، دعمنا الفني موجود يضمن لك استمرار العمل بأعلى كفاءة."
    }
  ];

  return (
    <section className="py-20 px-6 relative" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            وش يميزك مع كوارزم؟
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;
