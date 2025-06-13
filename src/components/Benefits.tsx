
import { CheckCircle } from "lucide-react";

const Benefits = () => {
  const benefits = [
    "Improve retention rates by up to 80% with interactive learning",
    "Save time with AI-generated quiz content and automated grading",
    "Access comprehensive analytics to track learning progress",
    "Engage students with gamification and competitive elements",
    "Scale learning programs across teams and organizations",
    "Integrate seamlessly with existing educational platforms"
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Unlock Your Learning
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Potential
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of learners who have transformed their educational journey with Quarizm's 
              innovative platform. Experience the future of learning today.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl p-8 backdrop-blur-lg border border-white/10">
              <div className="text-center">
                <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                  85%
                </div>
                <p className="text-white text-xl font-semibold mb-2">Improvement in Learning Outcomes</p>
                <p className="text-gray-300">Students using Quarizm show significantly better results</p>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
