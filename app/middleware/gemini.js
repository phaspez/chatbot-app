"use server";

import dotenv from "dotenv";

const { GoogleGenerativeAI } = require("@google/generative-ai");

const apikey = process.env.API_KEY;

const genAI = new GoogleGenerativeAI(apikey);

export async function runTextPrompt(prompt) {
	// The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
	//const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
	console.log("ENVIRONMENT: ");
	console.log(apikey);

	// The Gemini 1.5 models are versatile and work with most use cases
	const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

	//const prompt = "Write a story about a magic backpack."

	const result = await model.generateContent(prompt);
	const response = await result.response;
	const text = response.text();
	return text;
}
