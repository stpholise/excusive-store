# Exclusive Store - E-commerce Platform

## Overview

Exclusive Store is a modern e-commerce platform built with Next.js and Sanity CMS, offering a complete online shopping experience with user authentication, product management, and interactive features.

## Key Features

### User Experience

- **User Authentication**: Login system for both customers and administrators
- **Shopping Cart**: Real-time cart updates and management
- **Wishlist**: Save products for future reference
- **Responsive Design**: Built with Tailwind for all device compatibility

### Admin Capabilities

- **Product Management**: Admin dashboard for adding/editing products via Sanity Studio
- **Role-based Access**: Only admins can modify product listings

### Technical Highlights

- **Next.js App Router**: For optimized routing and performance
- **Sanity CMS**: Headless content management for products
- **State Management**: React Redux for global state
- **Form Handling**: Formik for efficient form management
- **Interactive UI**: Embla Carousel for product showcases

## Getting Started

visit Preview : `https://excusive-store.vercel.app/`

### Prerequisites

- Node.js (v16 or later recommended)
- npm/yarn/pnpm
- Sanity CLI (for CMS development)

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:

- Create `.env.local` file
- Add required Sanity and authentication credentials

### Running Locally

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Visit `http://localhost:3000` in your browser

## Deployment

The project is configured for easy deployment on Vercel:

1. Push your code to a Git repository
2. Import the project in Vercel
3. Configure environment variables
4. Deploy!

## Future Enhancements

- Payment gateway integration
- Product review system
- Advanced search and filtering
- Order tracking system

## Contribution

Feel free to fork and submit pull requests. Please follow the existing code style and add tests for new features.

## License

This project is open-source under the MIT License.
