// API service for UPFISTA integration
// Updated to match FastAPI backend routes

export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  description?: string;
  brand?: string;
  size?: string[];
  color?: string;
  productLink?: string;
  score?: number;
}

export interface NlpSearchRequest {
  query: string;
}

export interface NlpSearchResponse {
  results: Product[];
  totalResults: number;
}

export interface VisualSearchRequest {
  file: File;
}

export interface VisualSearchResponse {
  results: Product[];
  totalResults: number;
}

export interface ProductsResponse {
  results: Product[];
  totalResults: number;
}

export interface AdminUploadRequest {
  file: File;
}

export interface AdminUploadResponse {
  success: boolean;
  message: string;
  uploaded_count?: number;
}

class ApiService {
  private baseUrl: string;
  private isDemoMode: boolean;

  constructor(baseUrl: string = "http://127.0.0.1:8000") {
    this.baseUrl = baseUrl;
    this.isDemoMode =
      window.location.hostname !== "127.0.0.1" &&
      window.location.hostname !== "localhost";
  }

  private async makeRequest<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const defaultHeaders: Record<string, string> = {};

    if (!(options.body instanceof FormData)) {
      defaultHeaders["Content-Type"] = "application/json";
    }

    const response = await fetch(url, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(
        `API request failed: ${response.status} ${response.statusText}`
      );
    }

    return response.json();
  }

  // ✅ Matches FastAPI GET products endpoint
  async getAllProducts(): Promise<ProductsResponse> {
    if (this.isDemoMode) return this.getMockProducts();
    return this.makeRequest<ProductsResponse>(
      "/internal/text/products/",
      { method: "GET" }
    );
  }

  // ✅ Matches FastAPI POST text search
  async nlpSearch(request: NlpSearchRequest): Promise<NlpSearchResponse> {
    if (this.isDemoMode) return this.getMockSearchResults(request.query);
    const response = await this.makeRequest<any[]>(
      "/internal/text/search/",
      {
        method: "POST",
        body: JSON.stringify(request),
      }
    );
    return {
      results: this.transformBackendResults(response),
      totalResults: response.length,
    };
  }

  // ✅ Matches FastAPI POST image search
  async visualSearch(
    request: VisualSearchRequest
  ): Promise<VisualSearchResponse> {
    if (this.isDemoMode) return this.getMockVisualResults();
    const formData = new FormData();
    formData.append("file", request.file);
    const response = await this.makeRequest<any[]>(
      "/internal/visual/search/image/",
      {
        method: "POST",
        body: formData,
      }
    );
    return {
      results: this.transformBackendResults(response),
      totalResults: response.length,
    };
  }

  // ✅ Matches FastAPI admin CSV upload
  async adminUploadCsv(
    request: AdminUploadRequest
  ): Promise<AdminUploadResponse> {
    if (this.isDemoMode) return this.getMockUploadResponse();
    const formData = new FormData();
    formData.append("file", request.file);
    return this.makeRequest<AdminUploadResponse>(
      "/admin/upload-csv/",
      {
        method: "POST",
        body: formData,
      }
    );
  }

  // ----- Helpers -----
  private transformBackendResults(data: any[]): Product[] {
    return data.map((item, index) => ({
      id: item.id?.toString() || `${index}`,
      title: item.Title || "Unknown Product",
      price: parseFloat(item.Price?.replace("$", "") || "0"),
      image: item.Pictures?.split(",")[0]?.trim() || "/placeholder.svg",
      category: item.Category || "Unknown",
      color: item.Color,
      size: item.Size?.split(",").map((s: string) => s.trim()),
      productLink: item["Product Link"],
      score: item.score,
    }));
  }

  private getMockProducts(): ProductsResponse {
    return {
      results: [
        { id: "1", title: "Mock Jacket", price: 89.99, image: "/placeholder.svg", category: "Outerwear" },
        { id: "2", title: "Mock Dress", price: 149.99, image: "/placeholder.svg", category: "Dresses" },
      ],
      totalResults: 2,
    };
  }

  private getMockSearchResults(query: string): NlpSearchResponse {
    return {
      results: [
        { id: "s1", title: `${query} Item 1`, price: 79.99, image: "/placeholder.svg", category: "Fashion" },
      ],
      totalResults: 1,
    };
  }

  private getMockVisualResults(): VisualSearchResponse {
    return {
      results: [
        { id: "v1", title: "Mock Visual Result", price: 94.99, image: "/placeholder.svg", category: "Similar" },
      ],
      totalResults: 1,
    };
  }

  private getMockUploadResponse(): Promise<AdminUploadResponse> {
    return Promise.resolve({
      success: true,
      message: "CSV uploaded (demo mode)",
      uploaded_count: 42,
    });
  }
}

export const apiService = new ApiService();
export { ApiService };
