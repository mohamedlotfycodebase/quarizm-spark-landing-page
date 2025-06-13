
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, Trophy } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden px-6 py-20 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          {/* Logo/Brand */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              QUARIZM
            </h1>
            <p className="text-xl text-purple-200 mt-2 font-light">The Future of Interactive Learning</p>
          </div>

          {/* Main Headline */}
          <div className="mb-12 animate-fade-in delay-200">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Learning with
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Smart Quizzes
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience the next generation of interactive learning with AI-powered quizzes, 
              real-time analytics, and gamified education that adapts to your learning style.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in delay-300">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-4">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white">10K+</div>
              <div className="text-gray-400">Active Learners</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
                <Zap className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white">1M+</div>
              <div className="text-gray-400">Quizzes Completed</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-500/20 rounded-full mb-4">
                <Trophy className="w-8 h-8 text-pink-400" />
              </div>
              <div className="text-3xl font-bold text-white">95%</div>
              <div className="text-gray-400">Success Rate</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Start Learning Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
