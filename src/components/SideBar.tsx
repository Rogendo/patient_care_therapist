import { Badge, Sidebar } from "flowbite-react";
import { HiLogin, HiAdjustments , HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { DarkThemeToggle } from "flowbite-react";

export function SideBar() {
  return (
    <Sidebar aria-label="Patient Care AI Therapist">
      <Sidebar.Logo href="#" img="/logo192.png" imgAlt="patient care logo">
      AI Therapist
      </Sidebar.Logo>
      
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiTable}>
            Chat
          </Sidebar.Item>
                    
          <Sidebar.Collapse icon={HiViewBoards} label="History">
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Sales</Sidebar.Item>

          </Sidebar.Collapse>

         
          <Sidebar.Item href="#" icon={HiLogin}>
            Login
          </Sidebar.Item>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiAdjustments}>
              Settings
              </Sidebar.Item>
              <DarkThemeToggle />
            </Sidebar.ItemGroup>


        </Sidebar.ItemGroup>
        
      </Sidebar.Items>


      <Sidebar.CTA>
        <div className="mb-3 flex items-center">
          <Badge color="warning">Beta</Badge>
          <button
            aria-label="Close"
            className="-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-gray-100 p-1 text-cyan-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
            type="button"
          >
            <svg
              aria-hidden
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="mb-3 text-sm text-cyan-900 dark:text-gray-400">
          Preview the new Patient Care dashboard for more detailed analytics and statistics on your health! With this, your health data is more comprehensive.
        </div>
        <a
          className="text-sm text-cyan-900 underline hover:text-cyan-800 dark:text-gray-400 dark:hover:text-gray-300"
          href="#"
        >
          Patient Care Dashboard
        </a>
      </Sidebar.CTA>
    </Sidebar>
  );
}