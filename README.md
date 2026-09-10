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

Create a `.env.local` file in the root directory and configure your AI provider API keys. We recommend using Google Gemini for this project, but you can also use OpenAI, Anthropic, or the Vercel AI Gateway.

**For Google Gemini:**
```env
GOOGLE_GENERATIVE_AI_API_KEY=your-gemini-api-key-here
```

**For Vercel AI Gateway (alternative):**
```env
AI_GATEWAY_API_KEY=your-gateway-key-here
```

To verify your configuration, run:
```bash
pnpm tsx env-check.ts
```

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
