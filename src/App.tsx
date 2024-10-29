import { SideBar } from "./components/SideBar";
import { ChatWindow }  from "./components/ChatWindow";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Settings } from "./pages/Settings"; // Adjust path as necessary

function App() {
  
  return (
   
      <main className="flex min-h-screen items-center justify-center gap-0 dark:bg-gray-800">
        <Router>
         <Routes>
          <Route path="/" element={<ChatWindow />} />  Home route for Chat 
          <Route path="/settings" element={<Settings />} /> Route for Settings
        </Routes>
        </Router>
        <SideBar />

        {/* <ChatWindow /> */}
      </main>
    
  );
}

export default App;