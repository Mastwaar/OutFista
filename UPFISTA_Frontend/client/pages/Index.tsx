import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Search,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  Eye,
  Target,
  Zap,
  BarChart3,
  Users,
  ArrowRight,
  Play,
  Star,
  Upload,
  Camera,
  Video,
  Shirt,
  MessageSquare,
  Brain,
  Palette,
  Scan,
  MousePointer2,
  FileImage,
  FileVideo,
  User,
  ShirtIcon,
  Moon,
  Sun,
  Grid,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  apiService,
  type NlpSearchResponse,
  type VisualSearchResponse,
  type ProductsResponse,
  type Product,
} from "../services/api";
import Header from "../components/Header";

export default function Index() {
  const [activeModule, setActiveModule] = useState("nlp");
  const [nlpQuery, setNlpQuery] = useState("");
  const [nlpResults, setNlpResults] = useState<NlpSearchResponse | null>(null);
  const [nlpLoading, setNlpLoading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [visualResults, setVisualResults] =
    useState<VisualSearchResponse | null>(null);
  const [visualLoading, setVisualLoading] = useState(false);
  const [visualSearchType, setVisualSearchType] = useState<
    "image" | "video" | null
  >(null);
  const [showVisualModal, setShowVisualModal] = useState(false);
  const [allProducts, setAllProducts] = useState<ProductsResponse | null>(null);
  const [showProductsModal, setShowProductsModal] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [isDemoMode, setIsDemoMode] = useState(false);

  useEffect(() => {
    // Auto-detect demo mode based on hostname
    const isDemo =
      window.location.hostname !== "127.0.0.1" &&
      window.location.hostname !== "localhost";
    setIsDemoMode(isDemo);
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await apiService.getAllProducts();
      setAllProducts(response);
      setShowProductsModal(true);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  const handleNlpSearch = async () => {
    if (nlpQuery.trim()) {
      setNlpLoading(true);
      try {
        const response = await apiService.nlpSearch({
          query: nlpQuery,
        });
        setNlpResults(response);
      } catch (error) {
        console.error("NLP search failed:", error);
        // Handle error appropriately
      } finally {
        setNlpLoading(false);
      }
    }
  };

  const handleCsvUpload = async () => {
    if (!csvFile) return;

    setUploadLoading(true);
    try {
      await apiService.adminUploadCsv({ file: csvFile });
      setCsvFile(null);
      alert("CSV uploaded successfully!");
    } catch (error) {
      console.error("CSV upload failed:", error);
      alert("CSV upload failed. Please try again.");
    } finally {
      setUploadLoading(false);
    }
  };

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file && visualSearchType === "image") {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);

      // Perform visual search
      setVisualLoading(true);
      try {
        const response = await apiService.visualSearch({ file });
        setVisualResults(response);
      } catch (error) {
        console.error("Visual search failed:", error);
        // Handle error appropriately
      } finally {
        setVisualLoading(false);
      }
    }
  };

  const modules = [
    {
      id: "nlp",
      title: "NLP Search",
      subtitle: "Natural Language Understanding",
      description:
        "Type naturally - our AI understands context, intent, and style preferences",
      icon: Brain,
      color: "from-brand-purple to-brand-purple-light",
      features: [
        "Contextual Understanding",
        "Style Intelligence",
        "Intent Recognition",
        "Semantic Search",
      ],
    },
    {
      id: "visual",
      title: "Visual Search",
      subtitle: "Image & Video Recognition",
      description:
        "Upload any image or video to find similar products instantly",
      icon: Camera,
      color: "from-brand-blue to-brand-blue-light",
      features: [
        "Image Recognition",
        "Video Analysis",
        "Color Matching",
        "Style Detection",
      ],
    },
    {
      id: "vton",
      title: "2D Virtual Try-On",
      subtitle: "Augmented Reality Preview",
      description:
        "See how products look on you with our advanced AR technology",
      icon: User,
      color: "from-brand-purple to-brand-blue",
      features: [
        "Body Mapping",
        "Real-time Fitting",
        "Size Prediction",
        "Style Visualization",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header
        onAdminToggle={() => setShowAdminPanel(!showAdminPanel)}
        onProductsFetch={fetchProducts}
      />

      {/* Demo Mode Banner */}
      {isDemoMode && (
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-b border-yellow-200 dark:border-yellow-800 px-6 py-3">
          <div className="container mx-auto">
            <div className="flex items-center justify-center text-yellow-800 dark:text-yellow-200 text-sm">
              <span className="mr-2">⚠️</span>
              <span>
                <strong>Demo Mode:</strong> Backend not connected. Showing mock
                data for demonstration purposes.
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-20 pb-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 via-transparent to-brand-blue/5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-brand-purple/10 to-brand-blue/10 border border-brand-purple/20 rounded-full px-6 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-brand-purple mr-2" />
              <span className="text-sm font-medium text-brand-purple">
                Next-Generation AI Visual Commerce
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              The Future of{" "}
              <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                AI-Powered
              </span>{" "}
              Product Discovery
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your ecommerce with three revolutionary AI modules:
              Natural Language Processing, Advanced Visual Search, and 2D
              Virtual Try-On technology.
            </p>

            {/* Three Core Modules Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {modules.map((module) => (
                <Card
                  key={module.id}
                  className="border-2 border-gray-100 hover:border-brand-purple/30 transition-all duration-300 hover:shadow-lg group cursor-pointer"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${module.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <module.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {module.title}
                    </h3>
                    <p className="text-sm text-brand-purple font-medium mb-3">
                      {module.subtitle}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {module.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple-dark hover:to-brand-blue-dark text-white px-8 py-4 text-lg"
              >
                Experience All Modules
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white px-8 py-4 text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch AI Demo
              </Button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-purple mb-2">
                  12X
                </div>
                <div className="text-gray-600 text-sm">
                  Faster Product Discovery
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-blue mb-2">
                  95%
                </div>
                <div className="text-gray-600 text-sm">
                  Visual Match Accuracy
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-purple mb-2">
                  60%
                </div>
                <div className="text-gray-600 text-sm">
                  Increase in Engagement
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-blue mb-2">
                  3.2X
                </div>
                <div className="text-gray-600 text-sm">ROI Improvement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive AI Modules Demo */}
      <section id="modules" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Experience Our{" "}
              <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                AI Modules
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Try each module live and see how they transform the shopping
              experience for your customers.
            </p>
          </div>

          {/* Module Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {modules.map((module) => (
              <Button
                key={module.id}
                variant={activeModule === module.id ? "default" : "outline"}
                className={`px-6 py-3 ${
                  activeModule === module.id
                    ? "bg-gradient-to-r from-brand-purple to-brand-blue text-white"
                    : "border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white"
                }`}
                onClick={() => setActiveModule(module.id)}
              >
                <module.icon className="w-4 h-4 mr-2" />
                {module.title}
              </Button>
            ))}
          </div>

          {/* Active Module Demo */}
          <div className="max-w-6xl mx-auto">
            {activeModule === "nlp" && (
              <Card className="border-2 border-brand-purple/20">
                <CardContent className="p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-6">
                        Natural Language Processing
                      </h3>
                      <p className="text-gray-600 mb-8 leading-relaxed">
                        Our advanced NLP engine understands natural language
                        queries, context, and intent. Customers can search using
                        everyday language and find exactly what they're looking
                        for.
                      </p>

                      <div className="space-y-4 mb-8">
                        <div className="flex items-center space-x-3">
                          <Brain className="w-5 h-5 text-brand-purple" />
                          <span className="text-gray-700">
                            Contextual understanding of style preferences
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MessageSquare className="w-5 h-5 text-brand-purple" />
                          <span className="text-gray-700">
                            Intent recognition from natural language
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Palette className="w-5 h-5 text-brand-purple" />
                          <span className="text-gray-700">
                            Color, pattern, and texture understanding
                          </span>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 mb-4">
                          Try Example Searches:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Casual blue summer dress",
                            "Formal black shoes for work",
                            "Vintage denim jacket",
                            "Cozy winter sweater",
                          ].map((query) => (
                            <Badge
                              key={query}
                              variant="secondary"
                              className="cursor-pointer hover:bg-brand-purple hover:text-white transition-colors"
                              onClick={() => setNlpQuery(query)}
                            >
                              {query}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
                      <h4 className="font-semibold text-gray-900 mb-6">
                        Interactive NLP Search
                      </h4>
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <Input
                            placeholder="Type your search in natural language..."
                            value={nlpQuery}
                            onChange={(e) => setNlpQuery(e.target.value)}
                            className="text-lg py-6 border-brand-purple/20 focus:border-brand-purple"
                            onKeyPress={(e) => {
                              if (e.key === "Enter") {
                                handleNlpSearch();
                              }
                            }}
                          />
                          <Button
                            onClick={handleNlpSearch}
                            disabled={!nlpQuery.trim() || nlpLoading}
                            className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple-dark hover:to-brand-blue-dark text-white py-3"
                          >
                            <Search className="w-4 h-4 mr-2" />
                            {nlpLoading ? "Searching..." : "Search Products"}
                          </Button>
                        </div>

                        {nlpResults && (
                          <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-300">
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                              <div className="flex items-center space-x-2 mb-2">
                                <Brain className="w-4 h-4 text-green-600" />
                                <span className="text-sm font-medium text-green-800">
                                  Search Results
                                </span>
                              </div>
                              <p className="text-green-700 text-sm">
                                Found {nlpResults.totalResults} products
                                matching "{nlpQuery}"
                              </p>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                              {nlpResults.results.slice(0, 4).map((result) => (
                                <div
                                  key={result.id}
                                  className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow"
                                >
                                  {result.image ? (
                                    <img
                                      src={result.image}
                                      alt={result.title}
                                      className="w-full h-24 object-cover rounded-lg mb-2"
                                      onError={(e) => {
                                        (e.target as HTMLImageElement).src =
                                          "/placeholder.svg";
                                      }}
                                    />
                                  ) : (
                                    <div className="w-full h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-2 flex items-center justify-center">
                                      <ShoppingBag className="w-8 h-8 text-gray-400" />
                                    </div>
                                  )}
                                  <p className="text-xs text-gray-600 truncate font-medium">
                                    {result.title}
                                  </p>
                                  <p className="text-sm font-bold text-gray-900">
                                    ${result.price}
                                  </p>
                                  {result.color && (
                                    <p className="text-xs text-gray-500">
                                      Color: {result.color}
                                    </p>
                                  )}
                                  {result.size &&
                                    Array.isArray(result.size) &&
                                    result.size.length > 0 && (
                                      <p className="text-xs text-gray-500">
                                        Size: {result.size.join(", ")}
                                      </p>
                                    )}
                                  <div className="flex items-center justify-between mt-1">
                                    <Badge
                                      variant="secondary"
                                      className="text-xs"
                                    >
                                      {result.category}
                                    </Badge>
                                    {result.score && (
                                      <span className="text-xs text-gray-400">
                                        Score: {result.score.toFixed(2)}
                                      </span>
                                    )}
                                  </div>
                                  {result.productLink && (
                                    <a
                                      href={result.productLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-xs text-brand-purple hover:text-brand-purple-dark mt-1 block truncate"
                                    >
                                      View Product →
                                    </a>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeModule === "visual" && (
              <Card className="border-2 border-brand-blue/20">
                <CardContent className="p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-6">
                        Visual Search Engine
                      </h3>
                      <p className="text-gray-600 mb-8 leading-relaxed">
                        Upload any image or video to find visually similar
                        products. Our AI analyzes colors, patterns, styles, and
                        textures to deliver precise matches.
                      </p>

                      <div className="space-y-4 mb-8">
                        <div className="flex items-center space-x-3">
                          <Camera className="w-5 h-5 text-brand-blue" />
                          <span className="text-gray-700">
                            Advanced image recognition technology
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Video className="w-5 h-5 text-brand-blue" />
                          <span className="text-gray-700">
                            Video frame analysis and extraction
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Palette className="w-5 h-5 text-brand-blue" />
                          <span className="text-gray-700">
                            Color matching and style detection
                          </span>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 mb-4">
                          Supported Formats:
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center space-x-2">
                            <FileImage className="w-4 h-4 text-brand-blue" />
                            <span className="text-sm text-gray-700">
                              JPG, PNG, WebP
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <FileVideo className="w-4 h-4 text-brand-blue" />
                            <span className="text-sm text-gray-700">
                              MP4, WebM, MOV
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
                      <h4 className="font-semibold text-gray-900 mb-6">
                        Visual Search
                      </h4>

                      <div className="space-y-6">
                        {!visualSearchType ? (
                          <Dialog
                            open={showVisualModal}
                            onOpenChange={setShowVisualModal}
                          >
                            <DialogTrigger asChild>
                              <div className="border-2 border-dashed border-brand-blue/30 rounded-xl p-8 text-center hover:border-brand-blue/50 transition-colors cursor-pointer">
                                <div className="space-y-4">
                                  <Upload className="w-12 h-12 text-brand-blue mx-auto" />
                                  <div>
                                    <p className="text-lg font-medium text-gray-900">
                                      Start Visual Search
                                    </p>
                                    <p className="text-sm text-gray-600">
                                      Choose image or video search
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md">
                              <DialogHeader>
                                <DialogTitle>
                                  Choose Visual Search Type
                                </DialogTitle>
                              </DialogHeader>
                              <div className="grid grid-cols-2 gap-4 py-4">
                                <Button
                                  variant="outline"
                                  className="h-32 flex-col space-y-4 border-brand-blue/30 hover:border-brand-blue hover:bg-brand-blue/5"
                                  onClick={() => {
                                    setVisualSearchType("image");
                                    setShowVisualModal(false);
                                  }}
                                >
                                  <Camera className="w-8 h-8 text-brand-blue" />
                                  <div className="text-center">
                                    <p className="font-medium">Image Search</p>
                                    <p className="text-sm text-gray-600">
                                      Upload photos
                                    </p>
                                  </div>
                                </Button>
                                <Button
                                  variant="outline"
                                  className="h-32 flex-col space-y-4 border-brand-blue/30 hover:border-brand-blue hover:bg-brand-blue/5"
                                  onClick={() => {
                                    setVisualSearchType("video");
                                    setShowVisualModal(false);
                                  }}
                                >
                                  <Video className="w-8 h-8 text-brand-blue" />
                                  <div className="text-center">
                                    <p className="font-medium">Video Search</p>
                                    <p className="text-sm text-gray-600">
                                      Upload videos
                                    </p>
                                  </div>
                                </Button>
                              </div>
                            </DialogContent>
                          </Dialog>
                        ) : (
                          <div className="border-2 border-dashed border-brand-blue/30 rounded-xl p-8 text-center hover:border-brand-blue/50 transition-colors">
                            <input
                              type="file"
                              accept={
                                visualSearchType === "image"
                                  ? "image/*"
                                  : "video/*"
                              }
                              onChange={handleImageUpload}
                              className="hidden"
                              id="upload-visual"
                            />
                            <label
                              htmlFor="upload-visual"
                              className="cursor-pointer"
                            >
                              {uploadedImage ? (
                                <div className="space-y-4">
                                  <img
                                    src={uploadedImage}
                                    alt="Uploaded"
                                    className="w-32 h-32 object-cover rounded-lg mx-auto"
                                  />
                                  <p className="text-sm text-gray-600">
                                    Click to change {visualSearchType}
                                  </p>
                                </div>
                              ) : (
                                <div className="space-y-4">
                                  {visualSearchType === "image" ? (
                                    <Camera className="w-12 h-12 text-brand-blue mx-auto" />
                                  ) : (
                                    <Video className="w-12 h-12 text-brand-blue mx-auto" />
                                  )}
                                  <div>
                                    <p className="text-lg font-medium text-gray-900">
                                      Drop your {visualSearchType} here
                                    </p>
                                    <p className="text-sm text-gray-600">
                                      or click to browse
                                    </p>
                                  </div>
                                </div>
                              )}
                            </label>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => {
                                setVisualSearchType(null);
                                setUploadedImage(null);
                              }}
                              className="mt-4 text-gray-500 hover:text-gray-700"
                            >
                              Change search type
                            </Button>
                          </div>
                        )}

                        {visualLoading && (
                          <div className="text-center py-8">
                            <div className="text-brand-blue">
                              Analyzing {visualSearchType}...
                            </div>
                          </div>
                        )}

                        {visualResults && (
                          <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-300">
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                              <div className="flex items-center space-x-2 mb-2">
                                <Eye className="w-4 h-4 text-blue-600" />
                                <span className="text-sm font-medium text-blue-800">
                                  Visual Search Results
                                </span>
                              </div>
                              <p className="text-blue-700 text-sm">
                                Found {visualResults.totalResults} similar
                                products
                              </p>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                              {visualResults.results
                                .slice(0, 4)
                                .map((result) => (
                                  <div
                                    key={result.id}
                                    className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow"
                                  >
                                    {result.image ? (
                                      <img
                                        src={result.image}
                                        alt={result.title}
                                        className="w-full h-24 object-cover rounded-lg mb-2"
                                        onError={(e) => {
                                          (e.target as HTMLImageElement).src =
                                            "/placeholder.svg";
                                        }}
                                      />
                                    ) : (
                                      <div className="w-full h-24 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg mb-2 flex items-center justify-center">
                                        <ShoppingBag className="w-8 h-8 text-gray-400" />
                                      </div>
                                    )}
                                    <p className="text-xs text-gray-600 truncate font-medium">
                                      {result.title}
                                    </p>
                                    <p className="text-sm font-bold text-gray-900">
                                      ${result.price}
                                    </p>
                                    {result.color && (
                                      <p className="text-xs text-gray-500">
                                        Color: {result.color}
                                      </p>
                                    )}
                                    {result.size &&
                                      Array.isArray(result.size) &&
                                      result.size.length > 0 && (
                                        <p className="text-xs text-gray-500">
                                          Size: {result.size.join(", ")}
                                        </p>
                                      )}
                                    <div className="flex items-center justify-between mt-1">
                                      <Badge
                                        variant="secondary"
                                        className="text-xs"
                                      >
                                        {result.category}
                                      </Badge>
                                      {result.score && (
                                        <span className="text-xs text-gray-400">
                                          Score: {result.score.toFixed(2)}
                                        </span>
                                      )}
                                    </div>
                                    {result.productLink && (
                                      <a
                                        href={result.productLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-brand-purple hover:text-brand-purple-dark mt-1 block truncate"
                                      >
                                        View Product →
                                      </a>
                                    )}
                                  </div>
                                ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeModule === "vton" && (
              <Card className="border-2 border-purple-200">
                <CardContent className="p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-6">
                        2D Virtual Try-On
                      </h3>
                      <p className="text-gray-600 mb-8 leading-relaxed">
                        Revolutionary AR technology that lets customers
                        virtually try on clothing items. See how products fit
                        and look before purchasing.
                      </p>

                      <div className="space-y-4 mb-8">
                        <div className="flex items-center space-x-3">
                          <User className="w-5 h-5 text-purple-600" />
                          <span className="text-gray-700">
                            Advanced body mapping and pose estimation
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Scan className="w-5 h-5 text-purple-600" />
                          <span className="text-gray-700">
                            Real-time garment fitting simulation
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Palette className="w-5 h-5 text-purple-600" />
                          <span className="text-gray-700">
                            Size prediction and style visualization
                          </span>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 mb-4">
                          Features:
                        </h4>
                        <div className="grid grid-cols-1 gap-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">
                              Accuracy
                            </span>
                            <span className="text-sm font-medium text-purple-600">
                              98.5%
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">
                              Processing Time
                            </span>
                            <span className="text-sm font-medium text-purple-600">
                              &lt; 2 seconds
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">
                              Supported Items
                            </span>
                            <span className="text-sm font-medium text-purple-600">
                              Tops, Dresses, Jackets
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
                      <h4 className="font-semibold text-gray-900 mb-6">
                        Virtual Try-On Demo
                      </h4>

                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-8 text-center">
                          <div className="w-32 h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                            <User className="w-16 h-16 text-purple-600" />
                          </div>
                          <p className="text-sm text-gray-600 mb-4">
                            AI-generated model preview
                          </p>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-brand-purple to-brand-blue text-white"
                          >
                            <Camera className="w-4 h-4 mr-2" />
                            Start Camera
                          </Button>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                          {["T-Shirt", "Dress", "Jacket"].map((item, i) => (
                            <div key={item} className="text-center">
                              <div className="bg-white border-2 border-purple-200 rounded-lg p-3 hover:border-purple-400 transition-colors cursor-pointer">
                                <ShirtIcon className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                                <p className="text-xs text-gray-600">{item}</p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Scan className="w-4 h-4 text-purple-600" />
                            <span className="text-sm font-medium text-purple-800">
                              Try-On Ready
                            </span>
                          </div>
                          <p className="text-purple-700 text-sm">
                            Select a garment above to see virtual try-on in
                            action
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Advanced Features Grid */}
      <section
        id="features"
        className="py-24 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced AI{" "}
              <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                Capabilities
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Powered by cutting-edge machine learning and computer vision
              technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Deep Learning Models",
                description:
                  "State-of-the-art neural networks trained on millions of product images",
                color: "from-brand-purple to-brand-purple-light",
              },
              {
                icon: Eye,
                title: "Computer Vision",
                description:
                  "Advanced image analysis for texture, pattern, and style recognition",
                color: "from-brand-blue to-brand-blue-light",
              },
              {
                icon: Target,
                title: "Precision Matching",
                description:
                  "99.3% accuracy in product similarity and visual matching",
                color: "from-brand-purple to-brand-blue",
              },
              {
                icon: Zap,
                title: "Real-time Processing",
                description:
                  "Lightning-fast results with sub-second response times",
                color: "from-brand-blue to-brand-purple",
              },
              {
                icon: BarChart3,
                title: "Analytics & Insights",
                description:
                  "Deep analytics on customer behavior and search patterns",
                color: "from-brand-purple-light to-brand-blue",
              },
              {
                icon: Sparkles,
                title: "Continuous Learning",
                description:
                  "AI models that improve and adapt based on user interactions",
                color: "from-brand-blue-light to-brand-purple",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border border-gray-200 hover:border-brand-purple/30 transition-all duration-300 hover:shadow-lg group"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* API Integration Section */}
      <section id="api" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Developer-First{" "}
                <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                  API Platform
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Integrate our AI modules seamlessly with comprehensive APIs and
                SDKs.
              </p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-sm">api.upfista.ai/v3</span>
              </div>
              <pre className="text-green-400 text-sm overflow-x-auto">
                {`// NLP Search API
const response = await fetch('/api/v3/nlp-search', {
  method: 'POST',
  headers: { 'Authorization': 'Bearer YOUR_API_KEY' },
  body: JSON.stringify({
    query: "casual blue summer dress",
    filters: { category: "apparel", size: "M" }
  })
});

// Visual Search API  
const visualSearch = await fetch('/api/v3/visual-search', {
  method: 'POST',
  body: formData // Contains uploaded image
});

// Virtual Try-On API
const tryOn = await fetch('/api/v3/virtual-tryon', {
  method: 'POST',
  body: JSON.stringify({
    userId: "user123",
    productId: "dress456",
    bodyMetrics: { height: 170, size: "M" }
  })
});`}
              </pre>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-purple to-brand-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  RESTful APIs
                </h3>
                <p className="text-gray-600 text-sm">
                  Complete API coverage for all AI modules
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">5</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  SDKs Available
                </h3>
                <p className="text-gray-600 text-sm">
                  JavaScript, Python, PHP, Java, .NET
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-purple to-brand-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">∞</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Scalable</h3>
                <p className="text-gray-600 text-sm">
                  Handle millions of requests per day
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="customers"
        className="py-24 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
              Trusted by Industry{" "}
              <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                Leaders
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                    "The NLP search has revolutionized how our customers find
                    products. We've seen a 300% increase in search-to-purchase
                    conversions."
                  </blockquote>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-brand-purple to-brand-blue rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        SJ
                      </span>
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-gray-900">
                        Sarah Johnson
                      </div>
                      <div className="text-gray-600 text-sm">
                        CTO, FashionForward
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                    "The virtual try-on feature reduced our return rate by 45%.
                    Customers love seeing how clothes look before buying."
                  </blockquote>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-purple rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        MR
                      </span>
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-gray-900">
                        Michael Rodriguez
                      </div>
                      <div className="text-gray-600 text-sm">
                        Head of E-commerce, StyleHub
                      </div>
                    </div>
                  </div>
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
              Ready to Experience the Future?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Try all three AI modules free for 14 days. No credit card
              required.
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
                className="border-white text-white hover:bg-gray-100 bg-white text-brand-purple px-8 py-4 text-lg"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-brand-purple to-brand-blue rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold">UPFISTA</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Advanced AI-powered visual discovery platform with NLP search,
                visual search, and virtual try-on capabilities for the future of
                ecommerce.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">AI Modules</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    NLP Search
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Visual Search
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Virtual Try-On
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API Platform
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Developers</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API Docs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    SDKs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © 2025 UPFISTA AI. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Products Gallery Modal */}
      {showProductsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-2xl p-8 max-w-6xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">All Products</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowProductsModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {allProducts && (
              <div>
                <p className="text-gray-600 mb-6">
                  Showing {allProducts.results.length} of{" "}
                  {allProducts.totalResults} products
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {allProducts.results.map((product) => (
                    <Card
                      key={product.id}
                      className="hover:shadow-lg transition-shadow"
                    >
                      <CardContent className="p-4">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-48 object-cover rounded-lg mb-3"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src =
                                "/placeholder.svg";
                            }}
                          />
                        ) : (
                          <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-3 flex items-center justify-center">
                            <ShoppingBag className="w-12 h-12 text-gray-400" />
                          </div>
                        )}
                        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                          {product.title}
                        </h3>
                        <p className="text-lg font-bold text-brand-purple mb-2">
                          ${product.price}
                        </p>
                        <Badge variant="secondary" className="text-xs">
                          {product.category}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Admin Panel */}
      {showAdminPanel && (
        <div className="fixed top-20 right-4 z-40 bg-white border border-gray-200 rounded-xl shadow-xl p-6 w-80">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Admin Panel</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowAdminPanel(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Product CSV
              </label>
              <input
                type="file"
                accept=".csv"
                onChange={(e) => setCsvFile(e.target.files?.[0] || null)}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-brand-purple/10 file:text-brand-purple hover:file:bg-brand-purple/20"
              />
            </div>

            {csvFile && (
              <div className="text-sm text-gray-600">
                Selected: {csvFile.name}
              </div>
            )}

            <Button
              onClick={handleCsvUpload}
              disabled={!csvFile || uploadLoading}
              className="w-full bg-gradient-to-r from-brand-purple to-brand-blue text-white"
            >
              {uploadLoading ? "Uploading..." : "Upload CSV"}
            </Button>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                Upload CSV files with product data. Ensure your CSV has the
                required columns: title, price, category, image_url.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
