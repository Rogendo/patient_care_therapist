import React, { useState } from 'react';
import { SigupBanner } from "./SignupBanner"; // Assuming this is for additional functionality
import query from '../utils/FlowiseAI';

export const ChatWindow = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi, how can I help you?', user: 'Bot', time: new Date().toLocaleTimeString() },
  ]);
  const [loading, setLoading] = useState(false); // To show loading while waiting for the API

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(event.target.value);
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return; // Don't send empty messages

    const userMessage = {
      type: 'user',
      text: inputMessage,
      user: 'User', // User's name
      time: new Date().toLocaleTimeString(), // Current time
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputMessage(''); // Clear the input field

    setLoading(true);

    try {
      const data = { question: inputMessage }; // Prepare the data to be sent in the query
      const apiResponse = await query(data);   // Call the query function

      const botResponse = {
        type: 'bot',
        text: apiResponse.text || "Sorry, I couldn't get a proper response.",
        user: 'Bot',
        time: new Date().toLocaleTimeString(),
      };

      setMessages((prevMessages) => [...prevMessages, botResponse]);
    } catch (error) {
      console.error('Error fetching bot response:', error);
      const errorMessage = {
        type: 'bot',
        text: "Sorry, I couldn't get a response. Try again later.",
        user: 'Bot',
        time: new Date().toLocaleTimeString(),
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  // Handle the Enter key press
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent the default behavior of Enter key (newline)
      handleSendMessage(); // Call the send message function
    }
  };

  return (
    <div className="relative flex flex-col h-[80vh] w-[70vw] mx-auto bg-gray-300 border border-gray-300 rounded-lg shadow-lg">
      {/* Chat window */}
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            {message.type === 'user' ? (
              <div className="flex items-start">
                <div className="p-3 max-w-lg rounded-lg bg-purple-500 text-white">
                  {message.text}
                  <div className="text-xs text-gray-200 mt-1">
                    <span>{message.user} • {message.time}</span>
                  </div>
                </div>
                <img src="therapist.png" alt="User" className="w-8 h-8 rounded-full ml-2" /> {/* User Icon */}
              </div>
            ) : (
              <div className="flex items-start">
                <img src="therapist.jpg" alt="Bot" className="w-8 h-8 rounded-full mr-2" /> {/* Bot Icon */}
                <div className="p-3 max-w-lg rounded-lg bg-gray-300 text-black">
                  {message.text}
                  <div className="text-xs text-gray-500 mt-1">
                    <span>{message.user} • {message.time}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        {loading && (
          <div className="mr-auto mb-2 p-3 max-w-lg rounded-lg bg-gray-300 text-black flex items-start">
            <img src="therapist.jpg" alt="Bot" className="w-8 h-8 rounded-full mr-2" /> {/* Bot Icon */}
            <span>...</span>
          </div>
        )}
      </div>

      {/* Input field */}
      <div className="flex items-center p-2 border-t border-gray-300 bg-white">
        <input
          type="text"
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Type a message..."
          value={inputMessage}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown} // Add keydown event handler
        />
        <button
          className="ml-2 p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 flex items-center justify-center"
          onClick={handleSendMessage}
          disabled={loading}
          title="Send Message"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
            <path d="M1.5 10A1.5 1.5 0 000 11.5v2A1.5 1.5 0 001.5 15h.845L8.172 10.66 1.5 6H1.5z" />
            <path d="M2 10.5V11h7.5L15 16.5 16.5 15l-8-8H2z" />
            <path d="M19.11 1.84a1 1 0 00-1.41 0l-2.34 2.34L16.5 5h.586l-3.16 3.16a1 1 0 00-.15 1.5l2.34 2.34 2.34-2.34a1 1 0 000-1.41L19.11 1.84z" />
          </svg>
        </button>
      </div>

      {/* Footer */}
      <div className="p-4 text-center text-sm bg-gray-200 border-t border-gray-300">
        <span>&copy; 2024 <a href="https://patientcare.care">Patient Care</a>. All rights reserved.</span>
      </div>
    </div>
  );
};
