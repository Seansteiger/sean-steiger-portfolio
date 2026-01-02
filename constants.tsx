
import React from 'react';
import { Target, Zap, Layout, BarChart3, Globe, Shield } from 'lucide-react';
import { Project, Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Eco-Friendly Lifestyle Brand",
    category: "Social Strategy",
    image: "https://images.unsplash.com/photo-1523240715630-971c7ed5174c?q=80&w=2070&auto=format&fit=crop",
    description: "Increased organic engagement by 240% through targeted short-form video content."
  },
  {
    id: 2,
    title: "Sandton Luxury Real Estate",
    category: "Performance Marketing",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
    description: "Generated 50+ high-intent leads per month using meta-advertising."
  },
  {
    id: 3,
    title: "Pulse Fitness App",
    category: "Content Creation",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    description: "Designed and executed a viral challenge reaching 1.2M impressions."
  }
];

// Added missing SERVICES export to resolve the error in components/Services.tsx
export const SERVICES: Service[] = [
  {
    title: "Social Architecture",
    description: "Building community-first social strategies that bridge the gap between attention and conversion.",
    icon: <Target className="w-6 h-6 text-indigo-400" />
  },
  {
    title: "Performance Marketing",
    description: "Meta and Google ads optimization designed for maximum ROI and sustainable scale.",
    icon: <Zap className="w-6 h-6 text-indigo-400" />
  },
  {
    title: "Digital Design",
    description: "Conversion-led design for web and social platforms that captures high-end brand aesthetics.",
    icon: <Layout className="w-6 h-6 text-indigo-400" />
  },
  {
    title: "Strategic Consulting",
    description: "High-level marketing roadmaps for luxury brands looking to enter the digital space.",
    icon: <Shield className="w-6 h-6 text-indigo-400" />
  },
  {
    title: "Analytics & Growth",
    description: "Full-funnel attribution and data analysis to identify and exploit growth opportunities.",
    icon: <BarChart3 className="w-6 h-6 text-indigo-400" />
  },
  {
    title: "Content Strategy",
    description: "Developing robust content ecosystems that establish long-term authority and trust.",
    icon: <Globe className="w-6 h-6 text-indigo-400" />
  }
];
