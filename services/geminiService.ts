
import { GoogleGenAI, Type } from "@google/genai";
import { RecommendationRequest } from '../types.ts';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getSmartRecommendation = async (request: RecommendationRequest) => {
  try {
    // Add timeout to prevent hanging
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Request timeout')), 10000)
    );

    const responsePromise = ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: `Recommend Ward Smart Access solution for:
- Door: ${request.doorType}
- Usage: ${request.usageType}
- Connectivity: ${request.connectivityPreference}
- Budget: ${request.budget}

Available: Yale deadbolts, Nuki retrofit locks, Aqara sensors. Addis Ababa market.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendedProductId: { type: Type.STRING },
            reasoning: { type: Type.STRING },
            securityTips: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["recommendedProductId", "reasoning", "securityTips"]
        }
      }
    });

    const response = await Promise.race([responsePromise, timeoutPromise]) as any;

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini API error:", error);
    return {
      recommendedProductId: "ward-retrofit-pro",
      reasoning: "Based on your requirements, we recommend our most popular retrofit solution. Please contact us for a personalized consultation.",
      securityTips: [
        "Ensure your door frame is solid and properly installed",
        "Test all access methods regularly",
        "Keep firmware updated for security patches"
      ]
    };
  }
};

export const analyzeDoorImage = async (base64Image: string) => {
  try {
    const imagePart = {
      inlineData: {
        mimeType: 'image/jpeg',
        data: base64Image
      }
    };

    const textPart = {
      text: "Analyze this door for Ward Smart Access. Is it better for retrofit lock or full replacement? Note any installation challenges."
    };

    // Add timeout for image analysis
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Image analysis timeout')), 15000)
    );

    const responsePromise = ai.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: { parts: [imagePart, textPart] }
    });

    const response = await Promise.race([responsePromise, timeoutPromise]) as any;

    return response.text;
  } catch (error) {
    console.error("Image analysis error:", error);
    return "Unable to analyze the image. Please ensure it's a clear photo of a door and try again. For personalized advice, contact our consultants directly.";
  }
};
