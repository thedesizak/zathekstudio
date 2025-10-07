// FIX: Add import for React to resolve "Cannot find namespace 'React'" error.
import type React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface NavLink {
  name: string;
  href: string;
}
