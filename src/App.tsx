import { SideBar } from "./components/SideBar";
import { SigupBanner } from "./components/SignupBanner";
import { ChatWindow }  from "./components/ChatWindow";

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
      <SideBar />
      <ChatWindow />

      {/* <SigupBanner/> */}
    </main>
  );
}

export default App;
