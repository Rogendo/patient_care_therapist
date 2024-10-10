import React, { useState } from 'react';
import { SigupBanner } from "./SignupBanner";

export const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi, how can I help you?' },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      // Add the user message to the message list
      const newMessages = [...messages, { type: 'user', text: inputMessage }];
      setMessages(newMessages);
      setInputMessage('');

      // Handle sending message to Flowise AI
      // Simulate bot response after a delay (replace this with actual API call)
      setTimeout(() => {
        const botResponse = { type: 'bot', text: "I'm a Flowise AI chatbot!" };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-full w-full max-w-md mx-auto bg-gray-100 border border-gray-300 rounded-lg shadow-lg">
      {/* Chat window */}
    {/* <div className="flex flex-col h-full w-full max-w-md mx-auto bg-gray-100 border border-gray-300 rounded-lg shadow-lg"> */}

      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 p-3 max-w-xs rounded-lg ${
              message.type === 'user'
                ? 'ml-auto bg-blue-500 text-white'
                : 'mr-auto bg-gray-300 text-black'
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>

      {/* Input field */}
      <div className="flex items-center p-2 border-t border-gray-300 bg-white">
        <input
          type="text"
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type a message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

// export default ChatWindow;
