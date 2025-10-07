import React from 'react';
import type { NavLink, Service, PortfolioItem } from './types';
import { CubeIcon, PencilRulerIcon, CameraIcon } from './components/IconComponents';

export const NAV_LINKS: NavLink[] = [
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES_DATA: Service[] = [
  {
    // FIX: Replaced JSX syntax with React.createElement to resolve parsing errors in a .ts file.
    icon: React.createElement(CubeIcon, { className: "h-12 w-12 text-brand-blue" }),
    title: '3D Modeling',
    description: 'Precision-crafted 3D models for visualization, animation, and manufacturing. We turn concepts into detailed digital assets.'
  },
  {
    // FIX: Replaced JSX syntax with React.createElement to resolve parsing errors in a .ts file.
    icon: React.createElement(PencilRulerIcon, { className: "h-12 w-12 text-brand-blue" }),
    title: 'Industrial Design',
    description: 'Innovative and functional product design solutions that bridge the gap between aesthetics and user experience.'
  },
  {
    // FIX: Replaced JSX syntax with React.createElement to resolve parsing errors in a .ts file.
    icon: React.createElement(CameraIcon, { className: "h-12 w-12 text-brand-blue" }),
    title: 'CGI Services',
    description: 'Photorealistic CGI and rendering services to create stunning visuals for marketing, film, and architectural presentations.'
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  { id: 1, title: 'Project Alpha', category: 'CGI', imageUrl: 'https://picsum.photos/seed/project1/800/600' },
  { id: 2, title: 'Project Beta', category: 'Industrial Design', imageUrl: 'https://picsum.photos/seed/project2/600/800' },
  { id: 3, title: 'Project Gamma', category: '3D Modeling', imageUrl: 'https://picsum.photos/seed/project3/800/600' },
  { id: 4, title: 'Project Delta', category: 'CGI', imageUrl: 'https://picsum.photos/seed/project4/600/800' },
  { id: 5, title: 'Project Epsilon', category: 'Industrial Design', imageUrl: 'https://picsum.photos/seed/project5/800/600' },
  { id: 6, title: 'Project Zeta', category: '3D Modeling', imageUrl: 'https://picsum.photos/seed/project6/800/600' },
];
