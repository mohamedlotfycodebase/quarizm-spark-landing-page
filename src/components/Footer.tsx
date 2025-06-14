
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              كوارزم
            </h3>
            <p className="text-gray-300 max-w-md leading-relaxed">
              نساعدك في بناء متجرك الإلكتروني الاحترافي خلال 48 ساعة فقط. 
              مع دعم فني مستمر وحلول تقنية متطورة.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">خدماتنا</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-purple-400 transition-colors">تصميم المتاجر</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">الدعم الفني</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">التسويق الرقمي</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">تحليل البيانات</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">الشركة</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-purple-400 transition-colors">من نحن</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">تواصل معنا</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">الشروط والأحكام</a></li>
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
