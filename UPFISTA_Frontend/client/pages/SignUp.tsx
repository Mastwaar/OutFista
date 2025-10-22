import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  User, Mail, Lock, Building, Globe, ArrowRight, 
  CheckCircle, Sparkles, Shield, Zap, Brain, 
  Camera, Target, Star, Eye, EyeOff
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    company: "",
    website: "",
    agreeToTerms: false,
    subscribeToUpdates: true
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const features = [
    {
      icon: Brain,
      title: "NLP Search Engine",
      description: "Advanced natural language processing for product discovery"
    },
    {
      icon: Camera,
      title: "Visual Search AI",
      description: "Image and video recognition with 99.3% accuracy"
    },
    {
      icon: User,
      title: "Virtual Try-On",
      description: "2D augmented reality for enhanced customer experience"
    }
  ];

  const benefits = [
    "14-day free trial with full access",
    "No credit card required to start",
    "Dedicated customer success manager",
    "99.9% uptime SLA guarantee",
    "Enterprise-grade security",
    "24/7 technical support"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Form */}
            <div className="order-2 lg:order-1">
              <Card className="border-2 border-gray-100 shadow-xl">
                <CardContent className="p-12">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center space-x-2 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-brand-purple to-brand-blue rounded-lg flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-3xl font-bold bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                        UPFISTA
                      </span>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      Start Your AI Journey
                    </h1>
                    <p className="text-gray-600">
                      Join thousands of businesses transforming their customer experience with AI
                    </p>
                  </div>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            type="text"
                            placeholder="John"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            className="pl-12 py-3 border-gray-200 focus:border-brand-purple"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            type="text"
                            placeholder="Doe"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            className="pl-12 py-3 border-gray-200 focus:border-brand-purple"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Work Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="pl-12 py-3 border-gray-200 focus:border-brand-purple"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a strong password"
                          value={formData.password}
                          onChange={(e) => handleInputChange('password', e.target.value)}
                          className="pl-12 pr-12 py-3 border-gray-200 focus:border-brand-purple"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Must be at least 8 characters with uppercase, lowercase, and numbers
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            type="text"
                            placeholder="Your Company"
                            value={formData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                            className="pl-12 py-3 border-gray-200 focus:border-brand-purple"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Website (Optional)
                        </label>
                        <div className="relative">
                          <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            type="url"
                            placeholder="https://yoursite.com"
                            value={formData.website}
                            onChange={(e) => handleInputChange('website', e.target.value)}
                            className="pl-12 py-3 border-gray-200 focus:border-brand-purple"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Checkbox 
                          id="terms"
                          checked={formData.agreeToTerms}
                          onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked as boolean)}
                          className="mt-1"
                        />
                        <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                          I agree to the{" "}
                          <a href="#" className="text-brand-purple hover:underline">Terms of Service</a>
                          {" "}and{" "}
                          <a href="#" className="text-brand-purple hover:underline">Privacy Policy</a>
                        </label>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Checkbox 
                          id="updates"
                          checked={formData.subscribeToUpdates}
                          onCheckedChange={(checked) => handleInputChange('subscribeToUpdates', checked as boolean)}
                          className="mt-1"
                        />
                        <label htmlFor="updates" className="text-sm text-gray-600">
                          Subscribe to product updates and AI industry insights
                        </label>
                      </div>
                    </div>

                    <Button 
                      type="submit"
                      size="lg" 
                      className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple-dark hover:to-brand-blue-dark text-white py-4 text-lg"
                      disabled={!formData.agreeToTerms}
                    >
                      Start Free Trial
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>

                    <div className="text-center">
                      <p className="text-gray-600">
                        Already have an account?{" "}
                        <Link to="/login" className="text-brand-purple hover:underline font-medium">
                          Sign in here
                        </Link>
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Right Side - Benefits */}
            <div className="order-1 lg:order-2">
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center bg-gradient-to-r from-brand-purple/10 to-brand-blue/10 border border-brand-purple/20 rounded-full px-4 py-2 mb-6">
                    <Star className="w-4 h-4 text-brand-purple mr-2" />
                    <span className="text-sm font-medium text-brand-purple">Trusted by 500+ Companies</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Transform Your{" "}
                    <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                      Customer Experience
                    </span>
                  </h2>
                  
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Join the AI revolution with our comprehensive visual discovery platform. Get started with a full-featured free trial.
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-purple to-brand-blue rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Benefits */}
                <Card className="border-2 border-gray-100 bg-gradient-to-br from-gray-50 to-white">
                  <CardContent className="p-8">
                    <h3 className="font-semibold text-gray-900 mb-6">What's Included in Your Free Trial</h3>
                    <ul className="space-y-3">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-4">
                  <Card className="border border-gray-100 text-center">
                    <CardContent className="p-4">
                      <Shield className="w-8 h-8 text-brand-purple mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-700">SOC 2</p>
                      <p className="text-xs text-gray-500">Certified</p>
                    </CardContent>
                  </Card>
                  <Card className="border border-gray-100 text-center">
                    <CardContent className="p-4">
                      <Zap className="w-8 h-8 text-brand-blue mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-700">99.9%</p>
                      <p className="text-xs text-gray-500">Uptime</p>
                    </CardContent>
                  </Card>
                  <Card className="border border-gray-100 text-center">
                    <CardContent className="p-4">
                      <Target className="w-8 h-8 text-brand-purple mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-700">98.7%</p>
                      <p className="text-xs text-gray-500">Accuracy</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 mb-8">Trusted by leading brands worldwide</p>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 opacity-60">
              {[
                { name: "TechCorp", color: "from-blue-500 to-blue-600" },
                { name: "StyleCo", color: "from-purple-500 to-purple-600" },
                { name: "FashionX", color: "from-pink-500 to-pink-600" },
                { name: "TrendyB", color: "from-green-500 to-green-600" },
                { name: "ModernR", color: "from-orange-500 to-orange-600" },
                { name: "EliteF", color: "from-red-500 to-red-600" }
              ].map((brand, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className={`w-10 h-10 bg-gradient-to-br ${brand.color} rounded-lg flex items-center justify-center`}>
                    <span className="text-white font-bold text-sm">{brand.name.substring(0, 2)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
