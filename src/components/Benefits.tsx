
import { TrendingUp, Users, Settings, Zap } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "يزيد مبيعاتك بشكل ملحوظ",
      description: "متجرك الإلكتروني بيزيد فرص البيع وتعرض منتجاتك للعميل في كل وقت، 24/7."
    },
    {
      icon: Users,
      title: "يفهمك جمهورك أكثر",
      description: "تقدر تحلل سلوك الزوار وتطور استراتيجياتك علشان تجذب عملاء جدد."
    },
    {
      icon: Settings,
      title: "تسهل عليك الإدارة",
      description: "مع لوحة تحكم بسيطة، تقدر تدير المنتجات، المبيعات، كل شيء في مكان واحد."
    },
    {
      icon: Zap,
      title: "التسويق مستمر طوال اليوم",
      description: "متجرك دايمًا موجود في محركات البحث ودايمًا بيجيب لك عملاء جدد."
    }
  ];

  return (
    <section className="py-20 px-6 relative" dir="rtl" id="benefits">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            ليش لازم يكون عندك موقع أو متجر إلكتروني خاص فيك؟
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            4 أسباب قوية تخلّك تبدأ من اليوم:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-right">
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

