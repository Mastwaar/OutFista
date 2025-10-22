import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Users,
  TrendingUp,
  ShoppingBag,
  ArrowRight,
  Quote,
  Play,
  CheckCircle,
  BarChart3,
  Target,
  Building,
  Globe,
  Award,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Customers = () => {
  const testimonials = [
    {
      id: 1,
      company: "FashionForward",
      logo: "FF",
      industry: "Fashion Retail",
      size: "500M+ Revenue",
      person: "Sarah Johnson",
      role: "CTO",
      image: "SJ",
      quote:
        "UPFISTA's AI has revolutionized our customer experience. We've seen a 300% increase in search-to-purchase conversions and our customers love the visual search feature.",
      metrics: [
        "300% conversion increase",
        "45% reduction in bounce rate",
        "$12M additional revenue",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      company: "StyleHub",
      logo: "SH",
      industry: "E-commerce",
      size: "10M+ Users",
      person: "Michael Rodriguez",
      role: "Head of Digital",
      image: "MR",
      quote:
        "The virtual try-on feature has been a game-changer. Our return rate dropped by 45% and customer satisfaction scores are at an all-time high.",
      metrics: [
        "45% reduction in returns",
        "92% customer satisfaction",
        "8.5X ROI",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      company: "TrendCo",
      logo: "TC",
      industry: "Fashion Tech",
      size: "100M+ Products",
      person: "Emily Chen",
      role: "VP of Product",
      image: "EC",
      quote:
        "The NLP search understands our customers better than they understand themselves. It's like having a personal shopping assistant for every visitor.",
      metrics: [
        "250% search accuracy",
        "60% increase in AOV",
        "35% higher engagement",
      ],
      color: "from-green-500 to-emerald-500",
    },
  ];

  const caseStudies = [
    {
      company: "Global Fashion Retailer",
      challenge: "Low search conversion rates and high bounce rates on mobile",
      solution:
        "Implemented NLP search and visual discovery across all channels",
      results: [
        "7.1X higher conversion rate",
        "40% increase in average order value",
        "65% reduction in search abandonment",
      ],
      timeframe: "3 months",
      industry: "Fashion & Apparel",
    },
    {
      company: "Luxury Accessories Brand",
      challenge: "Customers struggling to find complementary products",
      solution: "Deployed visual recommendations and style matching AI",
      results: [
        "320% increase in cross-sell",
        "85% improvement in discovery",
        "$8M additional revenue",
      ],
      timeframe: "6 months",
      industry: "Luxury Retail",
    },
    {
      company: "Home Decor Marketplace",
      challenge:
        "Complex product catalog navigation and poor mobile experience",
      solution: "Integrated visual search and room-style matching",
      results: [
        "250% mobile conversion lift",
        "90% faster product discovery",
        "4.5X customer retention",
      ],
      timeframe: "4 months",
      industry: "Home & Garden",
    },
  ];

  const stats = [
    { value: "500+", label: "Enterprise Customers", icon: Building },
    { value: "50B+", label: "Products Analyzed", icon: BarChart3 },
    { value: "2M+", label: "Daily Searches", icon: Target },
    { value: "99.9%", label: "Uptime SLA", icon: Award },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-brand-purple/10 to-brand-blue/10 border border-brand-purple/20 rounded-full px-6 py-2 mb-8">
              <Users className="w-4 h-4 text-brand-purple mr-2" />
              <span className="text-sm font-medium text-brand-purple">
                Trusted by Industry Leaders
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Success Stories from{" "}
              <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                Leading Brands
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover how top retailers and brands are transforming their
              customer experience and driving unprecedented growth with
              UPFISTA's AI platform.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-purple to-brand-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our{" "}
              <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                Customers Say
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Real results and testimonials from businesses transforming their
              customer experience with AI.
            </p>
          </div>

          <div className="space-y-12">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className="border-2 border-gray-100 hover:border-brand-purple/30 transition-all duration-300 hover:shadow-xl max-w-6xl mx-auto"
              >
                <CardContent className="p-12">
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-3 gap-12 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                  >
                    <div
                      className={`lg:col-span-2 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                    >
                      <div className="flex items-center mb-6">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${testimonial.color} rounded-2xl flex items-center justify-center mr-4`}
                        >
                          <span className="text-white font-bold text-lg">
                            {testimonial.logo}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {testimonial.company}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>{testimonial.industry}</span>
                            <span>•</span>
                            <span>{testimonial.size}</span>
                          </div>
                        </div>
                      </div>

                      <Quote className="w-8 h-8 text-brand-purple mb-4" />
                      <blockquote className="text-xl text-gray-700 leading-relaxed mb-8">
                        "{testimonial.quote}"
                      </blockquote>

                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center">
                          <span className="text-gray-700 font-semibold text-sm">
                            {testimonial.image}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            {testimonial.person}
                          </div>
                          <div className="text-gray-600 text-sm">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                      <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-xl p-8">
                        <h4 className="font-semibold text-gray-900 mb-6">
                          Key Results
                        </h4>
                        <div className="space-y-4">
                          {testimonial.metrics.map((metric, metricIndex) => (
                            <div
                              key={metricIndex}
                              className="flex items-center"
                            >
                              <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                              <span className="text-gray-700">{metric}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 pt-6 border-t border-gray-200">
                          <div className="flex items-center justify-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-5 h-5 text-yellow-400 fill-current"
                              />
                            ))}
                          </div>
                          <p className="text-center text-sm text-gray-600 mt-2">
                            5-star customer rating
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Detailed{" "}
              <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                Case Studies
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Deep dive into how our customers achieved remarkable results with
              AI-powered solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-brand-purple/30 transition-all duration-300 hover:shadow-lg group"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <Badge className="bg-gradient-to-r from-brand-purple to-brand-blue text-white">
                      {study.industry}
                    </Badge>
                    <span className="text-sm text-gray-500">
                      {study.timeframe}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {study.company}
                  </h3>

                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Challenge
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Solution
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-3">
                      Results Achieved
                    </h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li
                          key={resultIndex}
                          className="flex items-center text-sm text-green-700"
                        >
                          <TrendingUp className="w-4 h-4 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full mt-6 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white group-hover:bg-brand-purple group-hover:text-white transition-colors"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Logos */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Trusted by Leading Brands Worldwide
            </h2>
            <p className="text-lg text-gray-600">
              Join hundreds of successful companies already using UPFISTA's AI
              platform.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {[
              { name: "TechCorp", color: "from-blue-500 to-blue-600" },
              { name: "StyleCo", color: "from-purple-500 to-purple-600" },
              { name: "FashionX", color: "from-pink-500 to-pink-600" },
              { name: "TrendyB", color: "from-green-500 to-green-600" },
              { name: "ModernR", color: "from-orange-500 to-orange-600" },
              { name: "EliteF", color: "from-red-500 to-red-600" },
              { name: "GlobalS", color: "from-indigo-500 to-indigo-600" },
              { name: "PremiumL", color: "from-teal-500 to-teal-600" },
              { name: "UrbanW", color: "from-yellow-500 to-yellow-600" },
              { name: "ChicB", color: "from-cyan-500 to-cyan-600" },
              { name: "LuxeM", color: "from-violet-500 to-violet-600" },
              { name: "SmartR", color: "from-emerald-500 to-emerald-600" },
            ].map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${brand.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <span className="text-white font-bold text-sm">
                    {brand.name.substring(0, 2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Video{" "}
              <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                Testimonials
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Hear directly from our customers about their experience with
              UPFISTA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "How FashionForward Increased Conversions by 300%",
                company: "FashionForward",
                duration: "3:24",
                views: "12K views",
              },
              {
                title: "StyleHub's Journey to 45% Reduction in Returns",
                company: "StyleHub",
                duration: "4:15",
                views: "8.5K views",
              },
            ].map((video, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-brand-purple/30 transition-all duration-300 hover:shadow-lg group cursor-pointer"
              >
                <CardContent className="p-0">
                  <div className="relative bg-gradient-to-br from-gray-200 to-gray-300 h-64 rounded-t-lg flex items-center justify-center group-hover:from-gray-300 group-hover:to-gray-400 transition-colors">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-brand-purple ml-1" />
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {video.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{video.company}</span>
                      <span>{video.views}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-brand-purple via-brand-purple to-brand-blue">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Success Stories
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Start your transformation today and become our next customer
              success story.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-brand-purple hover:bg-gray-100 px-8 py-4 text-lg"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white bg-white text-brand-purple px-8 py-4 text-lg"
              >
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Customers;
