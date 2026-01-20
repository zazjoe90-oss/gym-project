
import { GoogleGenAI } from "@google/genai";

export const getFitnessAdvice = async (userPrompt: string) => {
  try {
    // Creating the instance inside the call ensures it picks up the latest environment variable
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: "You are 'STRONG-BOX-AI', the elite digital trainer for 'Strong Box' gym. You are motivating, professional, and concise. You specialize in strength training, high-intensity interval training, and nutrition. Always maintain the brand's high-energy and elite tone.",
        maxOutputTokens: 500,
        temperature: 0.7,
      },
    });

    return response.text || "I'm having trouble connecting to the network. Keep pushing your limits, and I'll be back shortly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Strong Box is currently undergoing maintenance. Stay focused and keep training!";
  }
};
