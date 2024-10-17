import React, { useState } from 'react';
import { SigupBanner } from "./SignupBanner"; // Assuming this is for additional functionality
import query from '../utils/FlowiseAI';

export const ChatWindow = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi, how can I help you?', user: 'Bot', time: new Date().toLocaleTimeString() },
  ]);
  const [loading, setLoading] = useState(false); // To show loading while waiting for the API
  const [sessionId, setSessionId] = useState(null);  // Initialize sessionId

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(event.target.value);
  };
  // Function to get or generate a session ID
  const getSessionId = () => {
    // Check if sessionId exists in local storage
    let sessionId = localStorage.getItem('sessionId');
  
    // If no sessionId exists, create a new one
    if (!sessionId) {
      sessionId = `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('sessionId', sessionId);
    }
  
    return sessionId;
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
      // Get or generate the session ID
      // const sessionId = getSessionId();
      const sessionId = 'session-1728850958711-zwnvvl0nm'
      console.log("here is the session id:", sessionId)
      const data = { 
        question: inputMessage
        // sessionId: sessionId || undefined // Only send the sessionId if it exists
       }; // Prepare the data to be sent in the query
      // const apiResponse = await query(data, sessionId);   // Call the query function
      // Call the query function and pass the input message along with sessionId
      const apiResponse = await query({
        question: inputMessage,
        sessionId: sessionId,  // Make sure to reuse existing sessionId
      }, sessionId);

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
          className="ml-2 p-2 bg-purple-200 text-white rounded-lg hover:bg-purple-400 flex items-center justify-center"
          onClick={handleSendMessage}
          disabled={loading}
          title="Send Message"
        >
        <svg viewBox="0 0 1024 1024" className="icon w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M633.319 722.634L429 860.298V672.034z" fill="#26a269"></path>
          <path d="M446.662 681.407l388.442 104.557L960 163.702l-159.706 99.826L64 723.667z" fill="#33d17a"></path>
          <path d="M446.662 681.407L960 163.702l-159.706 99.826L64 723.667z" fill="#c061cb"></path>
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
