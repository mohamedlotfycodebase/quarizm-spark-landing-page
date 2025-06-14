
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const Comparison = () => {
  const whatsappNumber = "+966538859677";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}`;

  const comparisonData = [
    {
      feature: "سرعة التسليم",
      traditional: "شهور",
      quarizm: "72 ساعة"
    },
    {
      feature: "التكلفة",
      traditional: "مرتفعة جداً",
      quarizm: "معقولة ومناسبة"
    },
    {
      feature: "التخصيص",
      traditional: "محدود",
      quarizm: "حرية كاملة"
    },
    {
      feature: "الملكية",
      traditional: "مشتركة",
      quarizm: "ملكيتك الكاملة"
    },
    {
      feature: "الدعم الفني",
      traditional: "محدود",
      quarizm: "24/7 مستمر"
    }
  ];

  return (
    <section className="py-20 px-6 relative" dir="rtl" id="comparison">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            ليش تضيّع وقتك مع منصات محدودة زي سلة وزد؟
          </h2>
          <p className="text-xl text-gray-300">
            شوف الفرق بين المتاجر الجاهزة و المتاجر اللي نصممها:
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-right py-4 px-6 text-white font-semibold">المقارنة</th>
                <th className="text-center py-4 px-6 text-red-400 font-semibold">المنصات التقليدية</th>
                <th className="text-center py-4 px-6 text-purple-400 font-semibold">كوارزم</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr key={index} className="border-b border-white/5">
                  <td className="py-4 px-6 text-white font-medium">{item.feature}</td>
                  <td className="py-4 px-6 text-center text-red-300">{item.traditional}</td>
                  <td className="py-4 px-6 text-center text-green-300">{item.quarizm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open(whatsappLink, '_blank')}
          >
            خلنا نرتّب لك كل شيء – كلمنا واتساب!
          </Button>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-8">
            شوف شكل المتجر قبل لا تبدأ
          </h3>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
            onClick={() => window.open(whatsappLink, '_blank')}
          >
            جرب الديمو الآن
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
