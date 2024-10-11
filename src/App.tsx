import { SideBar } from "./components/SideBar";
import { SigupBanner } from "./components/SignupBanner";
import { ChatWindow }  from "./components/ChatWindow";

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-0 dark:bg-gray-800">
      <SideBar />
      {/* Stick the PatientCareBanner at the top */}
      <div className="absolute  top-2 left-100  w-900">
        <SigupBanner />
      </div>
      <ChatWindow />
    </main>
  );
}

export default App;
