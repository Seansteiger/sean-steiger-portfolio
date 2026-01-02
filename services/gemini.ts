
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateBio(name: string, age: number, location: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Write a compelling, professional, and slightly edgy one-paragraph bio for a social media marketing professional named ${name}. He is ${age} years old and based in ${location}. Focus on his expertise in viral growth, luxury branding, and data analytics. Keep it under 60 words.`,
      config: {
        temperature: 0.8,
      },
    });
    return response.text || "Social media strategist and marketing expert delivering high-impact results for brands worldwide.";
  } catch (error) {
    console.error("Error generating bio:", error);
    return "Social media strategist and marketing expert delivering high-impact results for brands worldwide.";
  }
}

export async function generateHeadline(): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Generate a catchy, ultra-modern headline for a marketing expert's portfolio. Use words like 'Digital Alchemist', 'Scale', 'Evolve', or 'Impact'. Max 8 words.",
      config: {
        temperature: 0.9,
      },
    });
    return response.text || "Scaling Brands Through Digital Innovation";
  } catch (error) {
    console.error("Error generating headline:", error);
    return "Scaling Brands Through Digital Innovation";
  }
}
