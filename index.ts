// Tipos para el sistema de Eneagramas

export interface Station {
  id: number;
  slug: string;
  name: string;
  subtitle: string;
  enneatype: number;
  essence: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    accent: string;
    text: string;
  };
  icon: string;
  wings: {
    left: number;
    right: number;
  };
  arrows: {
    integration: number;
    disintegration: number;
  };
  triad: 'mental' | 'emotional' | 'instinctive';
  emotion: string;
  gift: string;
  description: string;
  manifesto: string;
  content: {
    articles: Article[];
    resources: Resource[];
  };
  leadMagnet: {
    title: string;
    description: string;
    type: 'pdf' | 'quiz' | 'audio' | 'video';
  };
  testimonials: Testimonial[];
  products: Product[];
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  image?: string;
  readTime: string;
  tags: string[];
}

export interface Resource {
  id: string;
  title: string;
  type: 'pdf' | 'audio' | 'video' | 'worksheet';
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  enneatype: number;
  role: string;
  content: string;
  rating: number;
  hasVideo?: boolean;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image?: string;
  type: 'course' | 'session' | 'package';
}

export interface Event {
  id: string;
  title: string;
  stationId: number;
  date: string;
  time: string;
  duration: string;
  modality: 'online' | 'presencial';
  price: number;
  spots: number;
  spotsLeft: number;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image?: string;
  author: string;
  date: string;
  readTime: string;
  primaryStation: number;
  secondaryStations: number[];
  triad: 'mental' | 'emotional' | 'instinctive';
  level: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
}

export interface TestQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    stations: number[];
  }[];
}

export interface TestResult {
  primaryStation: number;
  secondaryStation: number;
  description: string;
}
