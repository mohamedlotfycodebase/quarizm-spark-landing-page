
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "أحمد محمد",
      business: "متجر الإلكترونيات",
      rating: 5,
      comment: "خدمة ممتازة ومتجر احترافي، زادت مبيعاتي بشكل كبير"
    },
    {
      name: "فاطمة السالم",
      business: "متجر الأزياء",
      rating: 5,
      comment: "التصميم رائع والدعم الفني سريع ومفيد جداً"
    },
    {
      name: "خالد العتيبي",
      business: "شركة التجارة العامة",
      rating: 5,
      comment: "أفضل استثمار قمت به، متجر احترافي بسعر ممتاز"
    }
  ];

  return (
    <section className="py-20 px-6 relative" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            آراء عملائنا
          </h2>
          <p className="text-xl text-gray-300">
            آراء عملائنا توضح لك كل شيء
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-center">
                "{testimonial.comment}"
              </p>
              <div className="text-center">
                <h4 className="text-white font-semibold">{testimonial.name}</h4>
                <p className="text-gray-400 text-sm">{testimonial.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
