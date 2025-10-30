import type React from 'react';

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  level: number; // Percentage from 0 to 100
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}