
import { Button } from "@/components/ui/button";
import { Store, Building, Rocket, ArrowLeft } from "lucide-react";

const WhoNeedsUs = () => {
  const targetAudience = [
    {
      icon: Store,
      title: "أصحاب المشاريع الصغيرة",
      description: "اللي يبغون يزيدون تواجدهم أونلاين"
    },
    {
      icon: Building,
      title: "التجار التقليديين",
      description: "اللي يبغون يتوسعون رقميًا"
    },
    {
      icon: Rocket,
      title: "الشركات الناشئة",
      description: "اللي محتاجة منصة قوية"
    }
  ];

  return (
    <section className="py-20 px-6 relative" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            من يحتاج لخدماتنا؟
          </h2>
          <p className="text-2xl text-purple-400 mb-8">انت من؟</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {targetAudience.map((audience, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                  <audience.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{audience.title}</h3>
              <p className="text-gray-300">{audience.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <p className="text-xl text-gray-300 mb-8">
            إذا كنت منهم، حنا موجودين علشان نساعدك تبيع أكثر وتحقق أرباحك.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-6 text-lg font-semibold rounded-full">
            كلمنا على واتساب!
            <ArrowLeft className="mr-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-6 text-lg font-semibold rounded-full">
            اكتشف كيف ترفع مبيعاتك
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhoNeedsUs;
