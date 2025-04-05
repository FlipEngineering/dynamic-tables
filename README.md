# Dynamic Tables

A Next.js application demonstrating flexible and dynamic data tables with features like filtering, sorting, inline editing, and more. This project showcases component-based architecture and best practices for React development.

## Project Overview

This project provides a dashboard with different data sections:
- Inventory Management: Track materials, supplies, and stock levels
- Employee Directory: Manage staff information and details
- Product Catalog: Organize and update product information

Key features include:
- Dynamic tables with sorting, filtering, and pagination
- Inline editing of table cells
- Component-based architecture
- Dark mode support
- TypeScript with strict typing
- Input validation with Zod

## Project Structure

- `/app`: Pages and layouts using Next.js App Router
- `/components`: Reusable React components
- `/hooks`: Custom React hooks
- `/lib`: Shared code and utilities
- `/utils`: Utility functions and helpers
- `/types`: TypeScript type definitions
- `/tests`: Test files mirroring the application structure

For detailed information about architecture, coding standards, and more:
- See [PLANNING.md](./PLANNING.md) for project architecture and guidelines
- See [TASK.md](./TASK.md) for current and upcoming tasks

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Development Guidelines

### Testing

Run tests with:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

Tests are written using Jest and React Testing Library, following the structure outlined in PLANNING.md.

### Code Standards

- TypeScript with strict typing is used throughout the project
- JSDoc comments are required for exported functions and types
- Zod schemas are used for data validation
- Files should be kept under 500 lines of code
- Path aliases (@/components/...) should be used for imports

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
