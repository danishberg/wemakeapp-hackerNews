# Hacker News Scraper with Next.js and Tailwind CSS

This project is a web application built with Next.js, TypeScript, and Tailwind CSS that scrapes data from the Hacker News website and displays articles based on different sorting mechanisms.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.


## Requirements

### 1. Next.js and TypeScript:
- Set up a Next.js project configured with TypeScript.
- Use Server Components for server-side operations where appropriate.
- Implement the caching mechanism in Next.js 14 to prevent over-fetching of items on every render. This will optimize performance and resource usage.

### 2. Data Scraping:
- Utilize Cheerio or similar tools to scrape data from the Hacker News website within the Next.js framework.
- Use `axios` for handling HTTP requests if necessary.
- Extract relevant details for each article, such as the title, URL, points, number of comments, and the time of posting.

### 3. Data Display with Shadcn/UI and Tailwind CSS:
- Use Shadcn/UI components to create a modern, responsive, and clean UI.
- Implement a sticky header with three tabs: Top, Trending, and Fresh.
- Ensure error handling is robust, especially for network requests and data parsing.

### 4. Sorting Mechanisms:
- **Top**: Articles should be sorted by the number of points in descending order.
- **Trending**: Articles should be sorted by the number of comments in descending order.
- **Fresh**: Articles should be sorted by the most recent postings.

## Getting Started

First, clone the repository:

```bash
git clone <repository-url>


## Learn More


To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
