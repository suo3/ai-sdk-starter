# AI SDK Project

Welcome to the **AI SDK** project! This repository serves as a customized workspace for developing, testing, and deploying AI-powered applications utilizing the Vercel AI SDK.

## Features

This project includes foundational implementations for various AI capabilities:
- **Data Extraction**: Extract structured data efficiently from raw text.
- **Classification**: Automatically categorize and route incoming queries or support requests.
- **Summarization**: Generate concise summaries of long conversations or documents.
- **Conversational AI**: Build interactive, context-aware AI chatbots.

## Getting Started

### Prerequisites
- Node.js v20 or later
- [pnpm](https://pnpm.io/) package manager

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Environment Setup

Create a `.env.local` file in the root directory and configure your AI provider API keys (e.g., OpenAI, Anthropic) or link your project to Vercel to use the Vercel AI Gateway.

### 3. Run the Development Server

Start the local server to explore the interactive AI features:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

## Technologies

- **Framework**: [Next.js 15](https://nextjs.org)
- **AI Library**: [Vercel AI SDK](https://sdk.vercel.ai)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) & [shadcn/ui](https://ui.shadcn.com)
- **Language**: [TypeScript](https://www.typescriptlang.org)
