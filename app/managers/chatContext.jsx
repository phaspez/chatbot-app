"use client";

import { useState, useEffect, useContext, createContext } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
	const [chatlog, setChatlog] = useState([]);
	const [inputText, setInputText] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const appendChatlog = (userInput, botInput) => {
		setChatlog((prev) => [
			...prev,
			{
				user: userInput,
				bot: botInput,
			},
		]);
	};

	const context = {
		chatlog,
		setChatlog,
		appendChatlog,
		inputText,
		setInputText,
		isLoading,
		setIsLoading,
	};

	return (
		<ChatContext.Provider value={context}>{children}</ChatContext.Provider>
	);
};

export const useChat = () => {
	const context = useContext(ChatContext);
	if (context === undefined) {
		throw new Error("useChat must be used within a ChatProvider");
	}
	return context;
};
