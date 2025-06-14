
import { Heart } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 px-6 border-t border-white/10" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/59a2afc2-7a5c-41d1-8ee1-9772690d7998.png" 
                alt="كوارزم"
                className="h-8 ml-2"
              />
            </div>
            <p className="text-gray-300 max-w-md leading-relaxed">
              نساعدك في بناء متجرك الإلكتروني الاحترافي خلال 72 ساعة فقط. 
              مع دعم فني مستمر وحلول تقنية متطورة.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">أقسام الموقع</h4>
            <ul className="space-y-2 text-gray-300">
              <li><button onClick={() => scrollToSection('features')} className="hover:text-purple-400 transition-colors text-right">المميزات</button></li>
              <li><button onClick={() => scrollToSection('benefits')} className="hover:text-purple-400 transition-colors text-right">الفوائد</button></li>
              <li><button onClick={() => scrollToSection('who-needs-us')} className="hover:text-purple-400 transition-colors text-right">من يحتاجنا</button></li>
              <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-purple-400 transition-colors text-right">آراء العملاء</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">الشركة</h4>
            <ul className="space-y-2 text-gray-300">
              <li><button onClick={() => scrollToSection('why-choose-us')} className="hover:text-purple-400 transition-colors text-right">لماذا كوارزم</button></li>
              <li><button onClick={() => scrollToSection('what-makes-different')} className="hover:text-purple-400 transition-colors text-right">ما يميزنا</button></li>
              <li><button onClick={() => scrollToSection('cta')} className="hover:text-purple-400 transition-colors text-right">تواصل معنا</button></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">سياسة الخصوصية</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center">
            صُنع بـ <Heart className="w-4 h-4 text-red-400 mx-2" /> لنجاح مشروعك
          </p>
          <p className="text-gray-400 text-sm mt-2">
            © 2024 كوارزم. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

