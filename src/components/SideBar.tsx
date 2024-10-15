import { useState } from 'react';
import { Badge, Sidebar } from "flowbite-react";
import { HiLogin, HiAdjustments, HiTable, HiViewBoards } from "react-icons/hi";
import { DarkThemeToggle } from "flowbite-react";
import { HiMenu, HiX } from "react-icons/hi"; // Import icons for toggle
import { Link } from 'react-router-dom';

export function SideBar() {
  // State to manage the visibility of the sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      {/* Tray Icon to toggle the sidebar - positioned at the top left */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-full bg-cyan-900 text-white shadow-lg hover:bg-cyan-800"
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <Sidebar
        aria-label="Patient Care AI Therapist"
        className={`transition-all duration-300 fixed top-9 left-0 h-full overflow-y-auto ${isSidebarOpen ? 'w-64' : 'w-0'} overflow-hidden`}
      >
        <Sidebar.Logo href="/" img="/logo192.png" imgAlt="patient care logo">
          {isSidebarOpen && "AI Therapist"}
        </Sidebar.Logo>

        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/" icon={HiTable}>
              {isSidebarOpen && "Chat"}
            </Sidebar.Item>

            <Sidebar.Collapse icon={HiViewBoards} label={isSidebarOpen ? "History" : ""}>
              {/* Logic to list all available chat history for that specific user */}
            </Sidebar.Collapse>

            <Sidebar.Item href="#" icon={HiLogin}>
              {isSidebarOpen && "Login"}
            </Sidebar.Item>

            <Sidebar.ItemGroup>
              <Sidebar.Item href="/settings" icon={HiAdjustments}>
                {isSidebarOpen && "Settings"}
                {/* <Sidebar.Item as={Link} to="/settings" icon={HiAdjustments}> Link to Settings Page */}
              </Sidebar.Item>
              {isSidebarOpen && <DarkThemeToggle />}
            </Sidebar.ItemGroup>
          </Sidebar.ItemGroup>
        </Sidebar.Items>

        <Sidebar.CTA>
          <div className="mb-3 flex items-center">
            <Badge color="warning">Beta</Badge>
          </div>
          {isSidebarOpen && (
            <div className="mb-3 text-sm text-cyan-900 dark:text-gray-400">
              Preview the new Patient Care lorem ispium lorem isum lorem isium lorem isium  With this, your health data is more comprehensive.
            </div>
          )}
          {isSidebarOpen && (
            <a
              className="text-sm text-cyan-900 underline hover:text-cyan-800 dark:text-gray-400 dark:hover:text-gray-300"
              href="#"
            >
              Patient Care Dashboard
            </a>
          )}
        </Sidebar.CTA>
      </Sidebar>
    </div>
  );
}