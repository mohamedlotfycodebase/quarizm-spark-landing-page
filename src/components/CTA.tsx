
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="mb-8">
          <Sparkles className="w-16 h-16 text-purple-400 mx-auto mb-4 animate-pulse" />
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Learning Experience?
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Join thousands of learners who are already experiencing the future of education. 
            Start your journey with Quarizm today and unlock your full potential.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Get Started Free
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-12 py-6 text-lg font-semibold rounded-full transition-all duration-300">
            Schedule Demo
          </Button>
        </div>
        
        <p className="text-gray-400 mt-6 text-sm">
          No credit card required • Free 14-day trial • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTA;
