import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Search,
  Sparkles,
  Eye,
  Target,
  Zap,
  BarChart3,
  Users,
  ArrowRight,
  Brain,
  Camera,
  Video,
  User,
  MessageSquare,
  Palette,
  Scan,
  MousePointer2,
  FileImage,
  FileVideo,
  ShirtIcon,
  Upload,
  Play,
  Star,
  TrendingUp,
  Globe,
  Shield,
  Clock,
  Cpu,
  Database,
  ChartBar,
  Settings,
  CheckCircle,
  Layers,
  Workflow,
  PieChart,
  LineChart,
  Monitor,
  Smartphone,
  Tablet,
  Code,
 
  Webhook,
  Lock,
  Key,
  Gauge,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Features() {
  const coreFeatures = [
    {
      category: "NLP Search Engine",
      icon: Brain,
      color: "from-brand-purple to-brand-purple-light",
      features: [
        {
          title: "Contextual Understanding",
          description:
            "AI understands natural language queries with 98.7% accuracy",
          metric: "98.7%",
          details: [
            "Semantic search capabilities",
            "Intent recognition",
            "Multi-language support",
            "Contextual product matching",
          ],
        },
        {
          title: "Style Intelligence",
          description:
            "Advanced fashion and style understanding from text descriptions",
          metric: "50M+",
          details: [
            "Style taxonomy recognition",
            "Trend analysis",
            "Seasonal adaptation",
            "Brand-specific terminology",
          ],
        },
        {
          title: "Query Expansion",
          description:
            "Automatically expands and enhances user queries for better results",
          metric: "3.2X",
          details: [
            "Synonym detection",
            "Related concept mapping",
            "Auto-correction",
            "Search suggestion engine",
          ],
        },
      ],
    },
    {
      category: "Visual Search Engine",
      icon: Camera,
      color: "from-brand-blue to-brand-blue-light",
      features: [
        {
          title: "Advanced Computer Vision",
          description:
            "State-of-the-art image recognition with deep learning models",
          metric: "99.3%",
          details: [
            "Object detection",
            "Feature extraction",
            "Color analysis",
            "Pattern recognition",
          ],
        },
        {
          title: "Video Intelligence",
          description:
            "Frame-by-frame analysis of video content for product discovery",
          metric: "30 FPS",
          details: [
            "Real-time processing",
            "Motion analysis",
            "Scene understanding",
            "Temporal consistency",
          ],
        },
        {
          title: "Multi-Modal Search",
          description:
            "Combine text, image, and video inputs for enhanced search accuracy",
          metric: "95%+",
          details: [
            "Cross-modal understanding",
            "Fusion algorithms",
            "Relevance scoring",
            "Multi-input processing",
          ],
        },
      ],
    },
    {
      category: "2D Virtual Try-On",
      icon: User,
      color: "from-brand-purple to-brand-blue",
      features: [
        {
          title: "Body Pose Estimation",
          description:
            "Accurate human pose detection and body mapping technology",
          metric: "17 Points",
          details: [
            "Skeletal tracking",
            "Joint detection",
            "Pose normalization",
            "3D estimation",
          ],
        },
        {
          title: "Garment Simulation",
          description:
            "Physics-based clothing simulation with realistic draping",
          metric: "<2s",
          details: [
            "Fabric physics",
            "Collision detection",
            "Deformation modeling",
            "Real-time rendering",
          ],
        },
        {
          title: "Size Prediction",
          description:
            "AI-powered size recommendation based on body measurements",
          metric: "94%",
          details: [
            "Body measurement extraction",
            "Size mapping",
            "Fit prediction",
            "Return rate reduction",
          ],
        },
      ],
    },
  ];

  const advancedCapabilities = [
    {
      icon: Database,
      title: "Deep Learning Infrastructure",
      description:
        "Powered by cutting-edge neural networks and machine learning models",
      specs: [
        "TensorFlow & PyTorch",
        "GPU-accelerated processing",
        "Distributed computing",
        "Model versioning",
      ],
    },
    {
      icon: Gauge,
      title: "Real-Time Performance",
      description: "Lightning-fast processing with sub-second response times",
      specs: [
        "<200ms response time",
        "99.9% uptime SLA",
        "Auto-scaling",
        "Global CDN",
      ],
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with comprehensive data protection",
      specs: [
        "SOC 2 Type II",
        "GDPR compliant",
        "End-to-end encryption",
        "Access controls",
      ],
    },
    {
      icon: Globe,
      title: "Global Scalability",
      description: "Scale to millions of users with worldwide infrastructure",
      specs: [
        "Multi-region deployment",
        "Load balancing",
        "CDN optimization",
        "Auto-scaling",
      ],
    },
  ];

  const platformFeatures = [
    {
      category: "Analytics & Insights",
      icon: ChartBar,
      items: [
        "Real-time search analytics",
        "Customer behavior insights",
        "Conversion tracking",
        "Performance metrics",
        "A/B testing capabilities",
        "Custom dashboards",
      ],
    },
    {
      category: "Integration & APIs",
      icon: Code,
      items: [
        "RESTful API endpoints",
        "GraphQL support",
        "Webhook integrations",
        "SDK libraries",
        "Plugin ecosystem",
        "Third-party connectors",
      ],
    },
    {
      category: "Customization",
      icon: Settings,
      items: [
        "White-label solutions",
        "Custom branding",
        "Configurable UI",
        "Business rule engine",
        "Custom training",
        "Flexible deployment",
      ],
    },
  ];

  const performanceMetrics = [
    { label: "Search Accuracy", value: 98.7, color: "bg-brand-purple" },
    { label: "Visual Match Precision", value: 99.3, color: "bg-brand-blue" },
    { label: "Processing Speed", value: 95.2, color: "bg-green-500" },
    { label: "Customer Satisfaction", value: 96.8, color: "bg-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-brand-purple/10 to-brand-blue/10 border border-brand-purple/20 rounded-full px-6 py-2 mb-8">
              <Star className="w-4 h-4 text-brand-purple mr-2" />
              <span className="text-sm font-medium text-brand-purple">
                Best-in-Class AI Features
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Discover Our{" "}
              <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                Advanced AI
              </span>{" "}
              Capabilities
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Explore the cutting-edge features that make UPFISTA the most
              advanced AI-powered visual discovery platform for modern
              ecommerce.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {performanceMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <svg className="transform -rotate-90 w-20 h-20">
                      <circle
                        cx="40"
                        cy="40"
                        r="30"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="transparent"
                        className="text-gray-200"
                      />
                      <circle
                        cx="40"
                        cy="40"
                        r="30"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="transparent"
                        strokeDasharray={`${2 * Math.PI * 30}`}
                        strokeDashoffset={`${2 * Math.PI * 30 * (1 - metric.value / 100)}`}
                        className={metric.color.replace("bg-", "text-")}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-900">
                        {metric.value}%
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="core-features" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Core AI{" "}
              <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Deep dive into the advanced capabilities that power our three AI
              modules.
            </p>
          </div>

          <div className="space-y-24">
            {coreFeatures.map((category, categoryIndex) => (
              <div key={categoryIndex} className="max-w-7xl mx-auto">
                <div className="flex items-center justify-center mb-12">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mr-4`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    {category.category}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {category.features.map((feature, featureIndex) => (
                    <Card
                      key={featureIndex}
                      className="border-2 border-gray-100 hover:border-brand-purple/30 transition-all duration-300 hover:shadow-lg group"
                    >
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xl font-semibold text-gray-900">
                            {feature.title}
                          </h4>
                          <Badge
                            className={`bg-gradient-to-r ${category.color} text-white border-0`}
                          >
                            {feature.metric}
                          </Badge>
                        </div>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {feature.description}
                        </p>

                        <div className="space-y-2">
                          {feature.details.map((detail, detailIndex) => (
                            <div
                              key={detailIndex}
                              className="flex items-center text-sm text-gray-500"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {detail}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Capabilities */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced{" "}
              <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                Capabilities
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Enterprise-grade infrastructure and capabilities that power our AI
              platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {advancedCapabilities.map((capability, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-brand-purple/30 transition-all duration-300 hover:shadow-xl group"
              >
                <CardContent className="p-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-purple to-brand-blue rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <capability.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {capability.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    {capability.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {capability.specs.map((spec, specIndex) => (
                      <div
                        key={specIndex}
                        className="bg-gray-50 rounded-lg p-4 text-center group-hover:bg-brand-purple/5 transition-colors"
                      >
                        <p className="text-sm font-medium text-gray-700">
                          {spec}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section id="platform" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Platform{" "}
              <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive tools and integrations for seamless implementation
              and management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {platformFeatures.map((category, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-brand-purple/30 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-purple to-brand-blue rounded-xl flex items-center justify-center mr-4">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {category.category}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section
        id="performance"
        className="py-24 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Performance{" "}
              <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                Metrics
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Real-world results and benchmarks that demonstrate our AI
              capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                metric: "Response Time",
                value: "<200ms",
                icon: Clock,
                color: "from-green-500 to-green-600",
              },
              {
                metric: "Accuracy Rate",
                value: "98.7%",
                icon: Target,
                color: "from-brand-purple to-brand-purple-light",
              },
              {
                metric: "Uptime SLA",
                value: "99.9%",
                icon: Shield,
                color: "from-blue-500 to-blue-600",
              },
              {
                metric: "Processed Daily",
                value: "50M+",
                icon: BarChart3,
                color: "from-brand-blue to-brand-blue-light",
              },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center border-2 border-gray-100 hover:border-brand-purple/30 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.metric}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-4xl mx-auto border-2 border-gray-100">
            <CardContent className="p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Benchmark Comparison
              </h3>
              <div className="space-y-6">
                {[
                  {
                    feature: "Image Recognition Accuracy",
                    upfista: 99.3,
                    industry: 87.2,
                  },
                  {
                    feature: "NLP Understanding",
                    upfista: 98.7,
                    industry: 82.5,
                  },
                  {
                    feature: "Processing Speed",
                    upfista: 95.2,
                    industry: 71.8,
                  },
                  { feature: "Scalability", upfista: 97.5, industry: 75.3 },
                ].map((benchmark, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">
                        {benchmark.feature}
                      </span>
                      <div className="flex space-x-4 text-sm">
                        <span className="text-brand-purple font-semibold">
                          UPFISTA: {benchmark.upfista}%
                        </span>
                        <span className="text-gray-500">
                          Industry Avg: {benchmark.industry}%
                        </span>
                      </div>
                    </div>
                    <div className="relative">
                      <Progress
                        value={benchmark.industry}
                        className="h-3 bg-gray-200"
                      />
                      <Progress
                        value={benchmark.upfista}
                        className="h-3 absolute top-0 bg-gradient-to-r from-brand-purple to-brand-blue"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-brand-purple via-brand-purple to-brand-blue">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Get hands-on with our advanced AI capabilities. Start your free
              trial today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-brand-purple hover:bg-gray-100 px-8 py-4 text-lg"
              >
                Try All Features
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white bg-white text-brand-purple px-8 py-4 text-lg"
              >
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
