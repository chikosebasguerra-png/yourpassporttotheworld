import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;

const getClient = (): GoogleGenAI => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found in environment variables");
  }
  return new GoogleGenAI({ apiKey });
};

export const initializeChat = async (): Promise<void> => {
  try {
    const ai = getClient();
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `You are "Athena", the Senior Visa Specialist for Elite Visa Consultants. 
        Your tone is professional, sophisticated, yet accessible and reassuring.
        You assist clients with questions about global visa requirements, immigration procedures, and travel documentation.
        
        Key guidelines:
        - Be concise but thorough.
        - Use professional formatting (bullet points where appropriate).
        - If a user asks for legal advice, clarify that you are an AI consultant and they should book a formal legal consultation for binding advice.
        - Emphasize "Elite Visa Consultants" premium services for complex cases (Golden Visas, US Green Cards, Corporate transfers).
        
        Your goal is to build trust and demonstrate expertise.`,
      },
    });
  } catch (error) {
    console.error("Failed to initialize chat session", error);
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    await initializeChat();
  }
  
  if (!chatSession) {
    return "I'm currently reconnecting to our secure consultation server. Please try again in a moment.";
  }

  try {
    const response = await chatSession.sendMessage({ message });
    return response.text || "I apologize, I could not generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Reset session on error to clear potential bad state
    chatSession = null;
    return "We encountered a temporary connection issue. Please try sending your message again.";
  }
};