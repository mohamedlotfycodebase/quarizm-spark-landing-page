
import { Clock, Shield, Zap, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "وفر وقتك وأموالك",
      description: "لما تختار متجر جاهز، تبدأ تبيع من اليوم وتوفر وقت وجهد اللي تضيعه إذا بنيت كل شيء من البداية."
    },
    {
      icon: Settings,
      title: "حرية كاملة في التخصيص",
      description: "مع متجرك الجاهز من كوارزم، ما في قيود. أنت صاحب القرار في كل شيء، من الشكل للمحتوى والوظائف."
    },
    {
      icon: Shield,
      title: "أمان وحماية بياناتك",
      description: "منصات مثل سلة وزد وغيرها قد تكون عرضة للتسريبات أو الاختراقات، لكن مع كوارزم، بياناتك محفوظة، وانت المتحكم بالكامل."
    },
    {
      icon: Zap,
      title: "المرونة في التطوير",
      description: "إذا كنت محتاج تضيف شيء جديد أو تطور متجرك، مع كوارزم تقدر تعمل كذا بسهولة من دون أي قيود!"
    }
  ];

  return (
    <section className="py-20 px-6 relative" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            ليش تختار المتجر الجاهز وما تبدأ من الصفر؟
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
              <CardContent className="p-6 text-right">
                <div className="mb-4 flex justify-end">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-2xl font-bold text-white mb-6">
            خلنا نرتّب لك كل شيء – كلمنا واتساب!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
