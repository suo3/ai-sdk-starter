import dotenvFlow from 'dotenv-flow';
dotenvFlow.config();
import fs from "fs";
import { generateText } from 'ai';
import { google } from '@ai-sdk/google';

// import essay
const essay = fs.readFileSync("app/(1-extraction)/essay.txt", "utf-8");

async function main() {

  const result = await generateText({
    model: google('gemini-3.5-flash'),
    prompt: `Extract all the names mentioned in this eassay. List them by commas.
    Essay:
    ${essay}
    Question: What is the key takeaway of this piece in 50 words?:
    Piece:
    ${essay}`, // Instruction + the actual essay content
  });

  // The AI's response is stored in the result object
  console.log('\n--- AI Response ---');
  console.log(result.text);
  console.log('----------------')
}

main().catch((error) => {
  console.log('X Extraction failed:', error.message);
  console.log('\n& Common issues:');
  console.log(' - Check your .env.local file has valid API keys');
  console.log(' - Verify essay.txt exists at app/(1-extraction)/essay.txt');
  console.log(' - Make sure the Google SDK is installed: pnpm add @ai-sdk/google');
  process.exit(1);
})
