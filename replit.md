# Overview

EmooHandmade is a full-stack e-commerce website for an Egyptian embroidery business specializing in handcrafted wedding handkerchiefs, baby clothes, embroidery frames, custom caps, and printing services. The application is built as a bilingual (Arabic/English) platform with RTL support, featuring a modern Egyptian-themed design with luxury color palette and responsive user interface.

The project implements a complete showcase website with product galleries, contact forms, WhatsApp integration for orders, and a sophisticated design system based on Egyptian royal aesthetics. The application emphasizes visual appeal, cultural authenticity, and seamless user experience across devices.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom Egyptian color palette and design tokens
- **Component Library**: Radix UI primitives with shadcn/ui components for consistent, accessible UI
- **Internationalization**: Custom language context system supporting Arabic (RTL) and English (LTR)
- **State Management**: React Query (TanStack Query) for server state and React Context for global state
- **Forms**: React Hook Form with Zod validation for robust form handling

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API
- **Language**: TypeScript for full-stack type safety
- **Development**: Vite for fast development server and hot module replacement
- **Production Build**: ESBuild for optimized production bundles

## Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **ORM**: Drizzle for type-safe database operations with schema definitions
- **Migrations**: Drizzle Kit for database schema management
- **Development Storage**: In-memory storage implementation for development/testing

## Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)
- **User Schema**: Basic user model with username/password authentication
- **Security**: Prepared for secure authentication implementation

## Design System and Theming
- **Color Palette**: Custom Egyptian-inspired colors (Ivory, Blush, Nile Blue, Royal Gold, etc.)
- **Typography**: Multi-font system supporting Arabic (Amiri, Cairo, Tajawal) and English (Poppins, Playfair Display)
- **Components**: Comprehensive UI component library with consistent theming
- **Responsive Design**: Mobile-first approach with RTL/LTR layout support

## Performance Optimizations
- **Bundle Optimization**: Vite for efficient bundling and tree-shaking
- **Image Handling**: Lazy loading and responsive image support
- **Development Tools**: Hot module replacement and error overlay for development
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

# External Dependencies

## Database Services
- **Neon Database**: PostgreSQL hosting service (@neondatabase/serverless)
- **Connection Management**: Optimized for serverless environments

## UI and Component Libraries
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Utility for creating variant-based component APIs
- **Tailwind Merge**: Intelligent Tailwind class merging utility

## Form and Validation
- **React Hook Form**: Performant forms with easy validation
- **Zod**: TypeScript-first schema validation library
- **Hookform Resolvers**: Integration between React Hook Form and Zod

## Development and Build Tools
- **Vite**: Next-generation frontend tooling for development and building
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer
- **TSX**: TypeScript execution environment for development

## Communication Services
- **WhatsApp Business API**: Direct integration for customer communication and order management
- **Font Services**: Google Fonts for Arabic and English typography

## Styling and Animation
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **CSS Variables**: Dynamic theming support
- **Font Awesome**: Icon library for social media and communication icons

## Development Environment
- **Replit Integration**: Specialized plugins for Replit development environment
- **TypeScript**: Full-stack type safety and developer experience
- **Wouter**: Minimalist routing library for single-page applications