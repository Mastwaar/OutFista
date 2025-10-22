import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code,
  Terminal,
  Book,
  Zap,
  Shield,
  Globe,
  ArrowRight,
  CheckCircle,
  Copy,
  Download,
  Sparkles,
  Brain,
  Camera,
  User,
  Key,
  Database,
  Clock,
  BarChart3,
  Webhook,
  Code2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";

const API = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const endpoints = [
    {
      method: "POST",
      path: "/api/v3/nlp-search",
      description: "Natural language product search with AI understanding",
      icon: Brain,
      color: "from-brand-purple to-brand-purple-light",
    },
    {
      method: "POST",
      path: "/api/v3/visual-search",
      description: "Image and video-based product discovery",
      icon: Camera,
      color: "from-brand-blue to-brand-blue-light",
    },
    {
      method: "POST",
      path: "/api/v3/virtual-tryon",
      description: "2D virtual try-on and AR visualization",
      icon: User,
      color: "from-brand-purple to-brand-blue",
    },
    {
      method: "GET",
      path: "/api/v3/recommendations",
      description: "AI-powered product recommendations",
      icon: Sparkles,
      color: "from-green-500 to-emerald-500",
    },
  ];

  const sdks = [
    {
      name: "JavaScript",
      version: "v3.2.1",
      downloads: "50K+",
      color: "bg-yellow-500",
    },
    {
      name: "Python",
      version: "v3.1.8",
      downloads: "35K+",
      color: "bg-blue-500",
    },
    {
      name: "PHP",
      version: "v3.0.5",
      downloads: "25K+",
      color: "bg-purple-500",
    },
    {
      name: "Java",
      version: "v3.1.2",
      downloads: "20K+",
      color: "bg-orange-500",
    },
    {
      name: ".NET",
      version: "v3.0.9",
      downloads: "15K+",
      color: "bg-indigo-500",
    },
    { name: "Go", version: "v3.0.3", downloads: "10K+", color: "bg-cyan-500" },
  ];

  const codeExamples = {
    javascript: `// Initialize UPFISTA SDK
import { UpfistaAPI } from '@upfista/sdk';

const upfista = new UpfistaAPI({
  apiKey: 'your-api-key',
  baseURL: 'https://api.upfista.ai/v3'
});

// NLP Search
const nlpResults = await upfista.nlpSearch({
  query: "casual blue summer dress",
  filters: {
    category: "apparel",
    size: ["M", "L"],
    priceRange: { min: 50, max: 200 }
  },
  limit: 20
});

// Visual Search
const visualResults = await upfista.visualSearch({
  image: imageFile, // File or base64 string
  similarity: 0.85,
  includeMetadata: true
});

// Virtual Try-On
const tryonResult = await upfista.virtualTryon({
  userId: "user123",
  productId: "dress456",
  bodyMetrics: {
    height: 170,
    size: "M",
    measurements: { chest: 86, waist: 70, hips: 95 }
  }
});`,
    python: `# Install: pip install upfista-sdk
from upfista import UpfistaAPI

# Initialize client
upfista = UpfistaAPI(
    api_key="your-api-key",
    base_url="https://api.upfista.ai/v3"
)

# NLP Search
nlp_results = upfista.nlp_search(
    query="elegant evening dress for special occasion",
    filters={
        "category": "dresses",
        "occasion": "formal",
        "color": ["black", "navy", "burgundy"]
    },
    limit=25
)

# Visual Search with image upload
with open("product_image.jpg", "rb") as image_file:
    visual_results = upfista.visual_search(
        image=image_file,
        similarity_threshold=0.9,
        include_colors=True,
        include_attributes=True
    )

# Get recommendations
recommendations = upfista.get_recommendations(
    user_id="user123",
    context="product_view",
    product_id="item456",
    limit=10
)`,
    curl: `# NLP Search
curl -X POST https://api.upfista.ai/v3/nlp-search \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "query": "comfortable running shoes for daily workout",
    "filters": {
      "category": "shoes",
      "brand": ["nike", "adidas"],
      "size": ["9", "9.5", "10"]
    },
    "limit": 15
  }'

# Visual Search
curl -X POST https://api.upfista.ai/v3/visual-search \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "image=@product_image.jpg" \\
  -F "similarity=0.85" \\
  -F "includeMetadata=true"

# Virtual Try-On
curl -X POST https://api.upfista.ai/v3/virtual-tryon \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "userId": "customer123",
    "productId": "shirt789",
    "bodyMetrics": {
      "height": 175,
      "size": "L",
      "measurements": {
        "chest": 100,
        "waist": 85,
        "shoulders": 45
      }
    }
  }'`,
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-brand-purple/10 to-brand-blue/10 border border-brand-purple/20 rounded-full px-6 py-2 mb-8">
              <Code2 className="w-4 h-4 text-brand-purple mr-2" />
              <span className="text-sm font-medium text-brand-purple">
                Developer-First Platform
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Powerful{" "}
              <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                AI APIs
              </span>{" "}
              for Developers
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Integrate advanced AI capabilities into your applications with our
              comprehensive REST APIs, SDKs, and developer tools.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple-dark hover:to-brand-blue-dark text-white px-8 py-4 text-lg"
              >
                Get API Key
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white px-8 py-4 text-lg"
              >
                <Book className="w-5 h-5 mr-2" />
                View Documentation
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-purple mb-2">
                  99.9%
                </div>
                <div className="text-gray-600 text-sm">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue mb-2">
                  &lt;200ms
                </div>
                <div className="text-gray-600 text-sm">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-purple mb-2">
                  50M+
                </div>
                <div className="text-gray-600 text-sm">Daily Requests</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue mb-2">6</div>
                <div className="text-gray-600 text-sm">SDK Languages</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Core{" "}
              <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                API Endpoints
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive REST APIs for all AI modules with detailed
              documentation and examples.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {endpoints.map((endpoint, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-brand-purple/30 transition-all duration-300 hover:shadow-lg group"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${endpoint.color} rounded-xl flex items-center justify-center mr-4`}
                    >
                      <endpoint.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <Badge
                        className={`mb-2 ${endpoint.method === "GET" ? "bg-green-500" : "bg-blue-500"} text-white`}
                      >
                        {endpoint.method}
                      </Badge>
                      <h3 className="font-mono text-sm text-gray-700">
                        {endpoint.path}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {endpoint.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full mt-6 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white group-hover:bg-brand-purple group-hover:text-white transition-colors"
                  >
                    View Documentation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Code{" "}
              <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                Examples
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Get started quickly with comprehensive code examples in your
              preferred language.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="javascript" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
                <TabsTrigger value="curl">cURL</TabsTrigger>
              </TabsList>

              {Object.entries(codeExamples).map(([language, code]) => (
                <TabsContent key={language} value={language}>
                  <Card className="border-2 border-gray-200">
                    <CardContent className="p-0">
                      <div className="flex items-center justify-between bg-gray-900 text-white px-6 py-4 rounded-t-lg">
                        <div className="flex items-center space-x-4">
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          </div>
                          <span className="text-sm text-gray-300">
                            {language === "javascript"
                              ? "main.js"
                              : language === "python"
                                ? "main.py"
                                : "terminal"}
                          </span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-300 hover:text-white hover:bg-gray-800"
                          onClick={() => copyToClipboard(code, language)}
                        >
                          {copiedCode === language ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                      <pre className="bg-gray-900 text-green-400 p-6 overflow-x-auto text-sm leading-relaxed rounded-b-lg">
                        <code>{code}</code>
                      </pre>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Official{" "}
              <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                SDKs
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Native libraries and packages for seamless integration in your
              favorite programming language.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sdks.map((sdk, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-brand-purple/30 transition-all duration-300 hover:shadow-lg group"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 ${sdk.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {sdk.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{sdk.version}</p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-6">
                    <span>{sdk.downloads}</span>
                    <span>•</span>
                    <span>Downloads</span>
                  </div>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Install
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full text-gray-600 hover:text-brand-purple"
                    >
                      <Book className="w-4 h-4 mr-2" />
                      Documentation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Platform{" "}
              <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Enterprise-grade features and capabilities for production
              applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Enterprise Security",
                description:
                  "SOC 2 Type II compliance, end-to-end encryption, and comprehensive access controls.",
                features: [
                  "API key authentication",
                  "Rate limiting",
                  "IP whitelisting",
                  "HTTPS only",
                ],
              },
              {
                icon: Zap,
                title: "High Performance",
                description:
                  "Sub-200ms response times with global CDN and auto-scaling infrastructure.",
                features: [
                  "Global edge network",
                  "Auto-scaling",
                  "Load balancing",
                  "99.9% uptime",
                ],
              },
              {
                icon: BarChart3,
                title: "Analytics & Monitoring",
                description:
                  "Real-time API analytics, usage metrics, and performance monitoring.",
                features: [
                  "Usage dashboards",
                  "Error tracking",
                  "Performance metrics",
                  "Custom alerts",
                ],
              },
              {
                icon: Webhook,
                title: "Webhooks & Events",
                description:
                  "Real-time notifications and event-driven integrations for your applications.",
                features: [
                  "Event streaming",
                  "Custom webhooks",
                  "Retry logic",
                  "Event filtering",
                ],
              },
              {
                icon: Database,
                title: "Data Management",
                description:
                  "Comprehensive data tools for managing your product catalogs and user data.",
                features: [
                  "Bulk uploads",
                  "Data validation",
                  "Schema management",
                  "Export tools",
                ],
              },
              {
                icon: Globe,
                title: "Global Infrastructure",
                description:
                  "Worldwide availability with regional data centers and edge computing.",
                features: [
                  "Multi-region",
                  "Edge caching",
                  "Data residency",
                  "Disaster recovery",
                ],
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-brand-purple/30 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-purple to-brand-blue rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
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

      {/* Getting Started */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get Started in{" "}
              <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                Minutes
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Follow these simple steps to start integrating UPFISTA's AI
              capabilities into your application.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  step: "1",
                  title: "Get API Key",
                  description:
                    "Sign up and get your free API key with generous usage limits for testing and development.",
                },
                {
                  step: "2",
                  title: "Install SDK",
                  description:
                    "Install our official SDK for your preferred language or use our REST API directly.",
                },
                {
                  step: "3",
                  title: "Make First Call",
                  description:
                    "Start with our interactive examples and comprehensive documentation to build your first integration.",
                },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-purple to-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple-dark hover:to-brand-blue-dark text-white px-8 py-4 text-lg"
              >
                Start Building
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white px-8 py-4 text-lg"
              >
                <Terminal className="w-5 h-5 mr-2" />
                Interactive Tutorial
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-brand-purple via-brand-purple to-brand-blue">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build with AI?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Join thousands of developers already building amazing experiences
              with our APIs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-brand-purple hover:bg-gray-100 px-8 py-4 text-lg"
              >
                Get Free API Key
                <Key className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white bg-white text-brand-purple px-8 py-4 text-lg"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default API;
