import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Upload,
  Camera,
  Brain,
  Eye,
  Play,
  ArrowRight,
  Sparkles,
  Target,
  CheckCircle,
  User,
  Shirt,
  Palette,
  Monitor,
  Smartphone,
  Tablet,
  MousePointer2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";

const LiveDemo = () => {
  const [activeDemo, setActiveDemo] = useState("nlp");
  const [searchQuery, setSearchQuery] = useState("");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const demoModules = [
    {
      id: "nlp",
      title: "NLP Search",
      icon: Brain,
      color: "from-brand-purple to-brand-purple-light",
    },
    {
      id: "visual",
      title: "Visual Search",
      icon: Camera,
      color: "from-brand-blue to-brand-blue-light",
    },
    {
      id: "tryon",
      title: "Virtual Try-On",
      icon: User,
      color: "from-brand-purple to-brand-blue",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-brand-purple/10 to-brand-blue/10 border border-brand-purple/20 rounded-full px-6 py-2 mb-8">
              <Play className="w-4 h-4 text-brand-purple mr-2" />
              <span className="text-sm font-medium text-brand-purple">
                Interactive AI Demo
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Experience{" "}
              <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                Live AI
              </span>{" "}
              in Action
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Try our advanced AI modules right now. See how natural language
              processing, visual search, and virtual try-on transform the
              shopping experience.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple-dark hover:to-brand-blue-dark text-white px-8 py-4 text-lg"
              >
                Start Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white px-8 py-4 text-lg"
              >
                <Monitor className="w-5 h-5 mr-2" />
                Full Screen Mode
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Module Selector */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {demoModules.map((module) => (
              <Button
                key={module.id}
                variant={activeDemo === module.id ? "default" : "outline"}
                className={`px-8 py-4 text-lg ${
                  activeDemo === module.id
                    ? "bg-gradient-to-r from-brand-purple to-brand-blue text-white"
                    : "border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white"
                }`}
                onClick={() => setActiveDemo(module.id)}
              >
                <module.icon className="w-5 h-5 mr-3" />
                {module.title}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Demo */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* NLP Search Demo */}
            {activeDemo === "nlp" && (
              <Card className="border-2 border-brand-purple/20 shadow-xl">
                <CardContent className="p-12">
                  <div className="text-center mb-12">
                    <div className="w-20 h-20 bg-gradient-to-br from-brand-purple to-brand-purple-light rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <Brain className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Natural Language Processing Demo
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                      Type in natural language and watch our AI understand
                      context, style, and intent
                    </p>
                  </div>

                  <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 mb-8">
                      <div className="relative">
                        <Input
                          placeholder="Try: 'I need a casual blue dress for summer' or 'Show me formal shoes for work'"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="text-xl py-8 pl-6 pr-16 border-brand-purple/20 focus:border-brand-purple rounded-xl"
                        />
                        <Button className="absolute right-2 top-2 bg-gradient-to-r from-brand-purple to-brand-blue">
                          <Search className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>

                    {searchQuery && (
                      <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-300">
                        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                          <div className="flex items-center mb-4">
                            <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                            <h3 className="text-lg font-semibold text-green-800">
                              AI Analysis Complete
                            </h3>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div className="bg-white rounded-lg p-4">
                              <span className="font-medium text-green-700">
                                Intent:
                              </span>
                              <p className="text-green-600">
                                Product Discovery
                              </p>
                            </div>
                            <div className="bg-white rounded-lg p-4">
                              <span className="font-medium text-green-700">
                                Style:
                              </span>
                              <p className="text-green-600">Casual, Relaxed</p>
                            </div>
                            <div className="bg-white rounded-lg p-4">
                              <span className="font-medium text-green-700">
                                Context:
                              </span>
                              <p className="text-green-600">Summer Season</p>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <Card
                              key={i}
                              className="hover:shadow-lg transition-shadow cursor-pointer"
                            >
                              <CardContent className="p-4">
                                <div className="w-full h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-3"></div>
                                <h4 className="font-medium text-gray-900 mb-1">
                                  Product {i}
                                </h4>
                                <div className="flex items-center justify-between">
                                  <span className="text-sm text-gray-600">
                                    $89.99
                                  </span>
                                  <Badge className="bg-brand-purple text-white">
                                    98% match
                                  </Badge>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-12 bg-gray-50 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">
                        Try these example searches:
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {[
                          "Elegant evening dress for special occasion",
                          "Comfortable running shoes for daily workout",
                          "Professional blazer for office meetings",
                          "Vintage style denim jacket",
                        ].map((example) => (
                          <Badge
                            key={example}
                            variant="secondary"
                            className="cursor-pointer hover:bg-brand-purple hover:text-white transition-colors px-4 py-2"
                            onClick={() => setSearchQuery(example)}
                          >
                            {example}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Visual Search Demo */}
            {activeDemo === "visual" && (
              <Card className="border-2 border-brand-blue/20 shadow-xl">
                <CardContent className="p-12">
                  <div className="text-center mb-12">
                    <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-brand-blue-light rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <Camera className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Visual Search Demo
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                      Upload any image and find visually similar products
                      instantly
                    </p>
                  </div>

                  <div className="max-w-4xl mx-auto">
                    <div className="border-2 border-dashed border-brand-blue/30 rounded-2xl p-12 text-center hover:border-brand-blue/50 transition-colors mb-8">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="upload-demo"
                      />
                      <label htmlFor="upload-demo" className="cursor-pointer">
                        {uploadedImage ? (
                          <div className="space-y-6">
                            <img
                              src={uploadedImage}
                              alt="Uploaded"
                              className="w-48 h-48 object-cover rounded-xl mx-auto shadow-lg"
                            />
                            <div>
                              <p className="text-lg font-medium text-gray-900">
                                Image uploaded successfully!
                              </p>
                              <p className="text-gray-600">
                                Click to change image or see results below
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-6">
                            <Upload className="w-16 h-16 text-brand-blue mx-auto" />
                            <div>
                              <p className="text-2xl font-medium text-gray-900 mb-2">
                                Drop your image here
                              </p>
                              <p className="text-gray-600">
                                or click to browse files
                              </p>
                              <p className="text-sm text-gray-500 mt-2">
                                Supports JPG, PNG, WebP up to 10MB
                              </p>
                            </div>
                          </div>
                        )}
                      </label>
                    </div>

                    {uploadedImage && (
                      <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-300">
                        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                          <div className="flex items-center mb-4">
                            <Eye className="w-6 h-6 text-blue-600 mr-3" />
                            <h3 className="text-lg font-semibold text-blue-800">
                              Visual Analysis Results
                            </h3>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div className="bg-white rounded-lg p-4">
                              <span className="font-medium text-blue-700">
                                Colors Detected:
                              </span>
                              <div className="flex space-x-2 mt-2">
                                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                                <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
                                <div className="w-6 h-6 bg-white border rounded-full"></div>
                              </div>
                            </div>
                            <div className="bg-white rounded-lg p-4">
                              <span className="font-medium text-blue-700">
                                Category:
                              </span>
                              <p className="text-blue-600">Apparel - Dress</p>
                            </div>
                            <div className="bg-white rounded-lg p-4">
                              <span className="font-medium text-blue-700">
                                Style:
                              </span>
                              <p className="text-blue-600">Casual, Modern</p>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <Card
                              key={i}
                              className="hover:shadow-lg transition-shadow cursor-pointer"
                            >
                              <CardContent className="p-4">
                                <div className="w-full h-32 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg mb-3"></div>
                                <h4 className="font-medium text-gray-900 mb-1">
                                  Similar Item {i}
                                </h4>
                                <div className="flex items-center justify-between">
                                  <span className="text-sm text-gray-600">
                                    $79.99
                                  </span>
                                  <Badge className="bg-brand-blue text-white">
                                    {95 - i}% similar
                                  </Badge>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Virtual Try-On Demo */}
            {activeDemo === "tryon" && (
              <Card className="border-2 border-purple-200 shadow-xl">
                <CardContent className="p-12">
                  <div className="text-center mb-12">
                    <div className="w-20 h-20 bg-gradient-to-br from-brand-purple to-brand-blue rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <User className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Virtual Try-On Demo
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                      See how clothes look on you with our advanced AR
                      technology
                    </p>
                  </div>

                  <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                          Virtual Model
                        </h3>
                        <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-8 text-center">
                          <div className="w-48 h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg mx-auto mb-6 flex items-center justify-center">
                            <User className="w-24 h-24 text-purple-600" />
                          </div>
                          <p className="text-gray-600 mb-4">
                            3D Body Model Ready
                          </p>
                          <Button className="bg-gradient-to-r from-brand-purple to-brand-blue text-white">
                            <Camera className="w-4 h-4 mr-2" />
                            Use My Camera
                          </Button>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">
                          Select Item to Try On
                        </h3>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          {[
                            {
                              name: "Summer Dress",
                              icon: Shirt,
                              color: "bg-blue-500",
                            },
                            {
                              name: "Blazer",
                              icon: Shirt,
                              color: "bg-gray-700",
                            },
                            {
                              name: "T-Shirt",
                              icon: Shirt,
                              color: "bg-green-500",
                            },
                            {
                              name: "Jacket",
                              icon: Shirt,
                              color: "bg-purple-600",
                            },
                          ].map((item, i) => (
                            <Card
                              key={i}
                              className="border-2 border-purple-200 hover:border-purple-400 transition-colors cursor-pointer group"
                            >
                              <CardContent className="p-6 text-center">
                                <div
                                  className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}
                                >
                                  <item.icon className="w-6 h-6 text-white" />
                                </div>
                                <p className="font-medium text-gray-900">
                                  {item.name}
                                </p>
                              </CardContent>
                            </Card>
                          ))}
                        </div>

                        <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6 mb-6">
                          <div className="flex items-center mb-3">
                            <Target className="w-5 h-5 text-purple-600 mr-2" />
                            <span className="font-medium text-purple-800">
                              Try-On Features
                            </span>
                          </div>
                          <ul className="space-y-2 text-sm text-purple-700">
                            <li className="flex items-center">
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Real-time body mapping
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Physics-based garment simulation
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Size recommendation
                            </li>
                          </ul>
                        </div>

                        <Button
                          size="lg"
                          className="w-full bg-gradient-to-r from-brand-purple to-brand-blue text-white"
                        >
                          Start Virtual Try-On
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Demo Results Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              See the{" "}
              <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                Results
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Real performance metrics from businesses using our AI demos
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2 border-gray-100 hover:border-brand-purple/30 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-brand-purple mb-2">
                    85%
                  </div>
                  <div className="text-gray-600">
                    of users complete the demo
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-gray-100 hover:border-brand-purple/30 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-brand-blue mb-2">
                    3.2X
                  </div>
                  <div className="text-gray-600">increase in engagement</div>
                </CardContent>
              </Card>
              <Card className="border-2 border-gray-100 hover:border-brand-purple/30 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-brand-purple mb-2">
                    92%
                  </div>
                  <div className="text-gray-600">request full integration</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-brand-purple via-brand-purple to-brand-blue">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Integrate This Into Your Store?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Get started with our full platform and bring these AI capabilities
              to your customers.
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
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiveDemo;
