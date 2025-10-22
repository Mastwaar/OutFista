import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Mail, Lock, ArrowRight, Eye, EyeOff, 
  Sparkles, Shield, Zap, Users, Github, 
  Chrome, CheckCircle, Brain, Camera, User as UserIcon
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const stats = [
    { value: "500+", label: "Enterprise Customers", icon: Users },
    { value: "99.9%", label: "Uptime SLA", icon: Shield },
    { value: "50M+", label: "Daily API Calls", icon: Zap }
  ];

  const features = [
    {
      icon: Brain,
      title: "NLP Search",
      description: "Natural language understanding for product discovery"
    },
    {
      icon: Camera,
      title: "Visual Search",
      description: "Advanced image and video recognition technology"
    },
    {
      icon: UserIcon,
      title: "Virtual Try-On",
      description: "2D augmented reality for enhanced shopping experience"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Welcome */}
            <div className="order-2 lg:order-1">
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center space-x-2 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-purple to-brand-blue rounded-lg flex items-center justify-center">
                      <Sparkles className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-4xl font-bold bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                      UPFISTA
                    </span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Welcome Back to the{" "}
                    <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                      Future of AI
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Continue building amazing AI-powered experiences for your customers. Access your dashboard and manage your AI integrations.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-purple to-brand-blue rounded-xl flex items-center justify-center mx-auto mb-3">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-gray-600 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900">Platform Highlights</h3>
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-brand-purple" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">{feature.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Trust Indicators */}
                <Card className="border-2 border-gray-100 bg-gradient-to-br from-green-50 to-emerald-50">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Shield className="w-6 h-6 text-green-600 mr-3" />
                      <h4 className="font-semibold text-green-800">Enterprise Security</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-green-700">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        SOC 2 Type II Certified
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        End-to-end encryption
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        GDPR compliant
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="order-1 lg:order-2">
              <Card className="border-2 border-gray-100 shadow-xl">
                <CardContent className="p-12">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      Sign In to Your Account
                    </h2>
                    <p className="text-gray-600">
                      Access your AI dashboard and continue your journey
                    </p>
                  </div>

                  {/* Social Login */}
                  <div className="space-y-4 mb-8">
                    <Button variant="outline" className="w-full py-3 border-gray-200 hover:border-gray-300">
                      <Chrome className="w-5 h-5 mr-3" />
                      Continue with Google
                    </Button>
                    <Button variant="outline" className="w-full py-3 border-gray-200 hover:border-gray-300">
                      <Github className="w-5 h-5 mr-3" />
                      Continue with GitHub
                    </Button>
                  </div>

                  <div className="relative mb-8">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-gray-500">Or continue with email</span>
                    </div>
                  </div>

                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          type="email"
                          placeholder="your@company.com"
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
                          placeholder="Enter your password"
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
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="remember"
                          checked={formData.rememberMe}
                          onCheckedChange={(checked) => handleInputChange('rememberMe', checked as boolean)}
                        />
                        <label htmlFor="remember" className="text-sm text-gray-600">
                          Remember me for 30 days
                        </label>
                      </div>
                      <a href="#" className="text-sm text-brand-purple hover:underline">
                        Forgot password?
                      </a>
                    </div>

                    <Button 
                      type="submit"
                      size="lg" 
                      className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple-dark hover:to-brand-blue-dark text-white py-4 text-lg"
                    >
                      Sign In to Dashboard
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>

                    <div className="text-center">
                      <p className="text-gray-600">
                        Don't have an account?{" "}
                        <Link to="/signup" className="text-brand-purple hover:underline font-medium">
                          Start free trial
                        </Link>
                      </p>
                    </div>
                  </form>

                  {/* Help */}
                  <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                    <p className="text-sm text-gray-500 mb-4">
                      Need help getting started?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button variant="ghost" size="sm" className="text-brand-purple hover:bg-brand-purple/10">
                        Contact Support
                      </Button>
                      <Button variant="ghost" size="sm" className="text-brand-purple hover:bg-brand-purple/10">
                        View Documentation
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Security Notice */}
              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="text-blue-800 font-medium mb-1">Secure Login</p>
                    <p className="text-blue-700">
                      Your login is protected with enterprise-grade security including two-factor authentication and advanced threat detection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Updates */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Latest Platform Updates</h3>
              <p className="text-gray-600">See what's new in your dashboard</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border border-gray-100 hover:border-brand-purple/30 transition-colors">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-purple to-brand-purple-light rounded-lg flex items-center justify-center mb-4">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Enhanced NLP Engine</h4>
                  <p className="text-gray-600 text-sm mb-3">Improved accuracy and faster processing for natural language queries.</p>
                  <span className="text-xs text-brand-purple font-medium">NEW</span>
                </CardContent>
              </Card>

              <Card className="border border-gray-100 hover:border-brand-purple/30 transition-colors">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-blue-light rounded-lg flex items-center justify-center mb-4">
                    <Camera className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Video Search Beta</h4>
                  <p className="text-gray-600 text-sm mb-3">Now supporting video content analysis and frame-by-frame search.</p>
                  <span className="text-xs text-blue-600 font-medium">BETA</span>
                </CardContent>
              </Card>

              <Card className="border border-gray-100 hover:border-brand-purple/30 transition-colors">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Performance Boost</h4>
                  <p className="text-gray-600 text-sm mb-3">40% faster response times across all API endpoints.</p>
                  <span className="text-xs text-green-600 font-medium">IMPROVED</span>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
