
import { GoogleGenAI, Type } from "@google/genai";
import { RecommendationRequest } from '../types.ts';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getSmartRecommendation = async (request: RecommendationRequest) => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `As a senior security consultant for Ward Smart Access & IT Solutions based in Addis Ababa, recommend a premium setup for:
      - Primary Access: ${request.doorType}
      - Context: ${request.usageType}
      - Preferred Connectivity: ${request.connectivityPreference}
      - Budget Profile: ${request.budget}

      Ward provides Yale-standard deadbolts, Nuki-style retrofit locks, and Aqara environmental sensors. Provide a solution that considers the specific infrastructure needs of modern Addis Ababa residences.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          recommendedProductId: { type: Type.STRING, description: 'The Ward Product Combo Name' },
          reasoning: { type: Type.STRING, description: 'Why this is the perfect solution for their lifestyle' },
          securityTips: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: '3 professional security or automation tips'
          }
        },
        required: ["recommendedProductId", "reasoning", "securityTips"]
      }
    }
  });

  try {
    return JSON.parse(response.text);
  } catch (e) {
    console.error("Failed to parse Gemini response", e);
    return null;
  }
};

export const analyzeDoorImage = async (base64Image: string) => {
  const imagePart = {
    inlineData: {
      mimeType: 'image/jpeg',
      data: base64Image
    }
  };

  const textPart = {
    text: "Analyze this door as a consultant for Ward Smart Access. Determine if it is best for a retrofit lock (like Nuki) or a full deadbolt replacement (like Yale). Mention any specific installation challenges you see. Keep the tone professional and helpful."
  };

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: { parts: [imagePart, textPart] }
  });

  return response.text;
};
