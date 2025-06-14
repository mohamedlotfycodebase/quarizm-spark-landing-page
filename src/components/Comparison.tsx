
import { Button } from "@/components/ui/button";

const Comparison = () => {
  return (
    <section className="py-20 px-6 relative" dir="rtl">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            ليش تضيّع وقتك مع منصات محدودة زي سلة وزد؟
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            شوف الفرق بين المتاجر الجاهزة و المتاجر اللي نصممها:
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 mb-12">
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-6 text-white font-semibold">المميزات</th>
                  <th className="py-4 px-6 text-purple-400 font-semibold">كوارزم</th>
                  <th className="py-4 px-6 text-gray-400 font-semibold">سلة وزد</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 text-gray-300">التحكم الكامل</td>
                  <td className="py-4 px-6 text-green-400">✓</td>
                  <td className="py-4 px-6 text-red-400">✗</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 text-gray-300">التخصيص بلا حدود</td>
                  <td className="py-4 px-6 text-green-400">✓</td>
                  <td className="py-4 px-6 text-red-400">✗</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 text-gray-300">ملكية البيانات</td>
                  <td className="py-4 px-6 text-green-400">✓</td>
                  <td className="py-4 px-6 text-red-400">✗</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 text-gray-300">دعم فني 24/7</td>
                  <td className="py-4 px-6 text-green-400">✓</td>
                  <td className="py-4 px-6 text-yellow-400">محدود</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-300">التسليم السريع</td>
                  <td className="py-4 px-6 text-green-400">48 ساعة</td>
                  <td className="py-4 px-6 text-yellow-400">أسابيع</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg font-semibold rounded-full">
            شوف شكل المتجر قبل لا تبدأ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
