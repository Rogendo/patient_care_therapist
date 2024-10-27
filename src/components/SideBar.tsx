import { Badge, CustomFlowbiteTheme, Sidebar } from "flowbite-react";
import {  BiSolidChat } from 'react-icons/bi';
import { RiHistoryFill } from 'react-icons/ri';
import { GiSettingsKnobs } from 'react-icons/gi';
import { IoLogInSharp } from 'react-icons/io5';

export function SideBar() {
  // State to manage the visibility of the sidebar
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const [isModalOpen, setModalOpen] = useState(false);
  // const [isNotFoundOpen, setNotFoundOpen] = useState(false);

  // const openNotFound = ()=>{
  //   setNotFoundOpen(true);
  // }

  // const closeNotFound = ()=>{
  //   setNotFoundOpen(false);

  // }
  // const openModal = () => {
  //   setModalOpen(true);
  // };

  // const closeModal = () => {
  //   setModalOpen(false);
  // };
  // Function to toggle the sidebar visibility
  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };


  const customTheme: CustomFlowbiteTheme['sidebar'] = {
    root: {
      base: 'bg-gradient-to-br from-primary-darkGreen to-primary-purple',
      inner: 'bg-gradient-to-br from-primary-darkGreen to-primary-purple '
    }
  } 

  return (
    <div className="relative hidden lg:block">
      {/* Tray Icon to toggle the sidebar - positioned at the top left */}
      {/* <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-full bg-cyan-900 text-white shadow-lg hover:bg-cyan-800"
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
      </button> */}

      {/* Sidebar */}
      <Sidebar
      theme={customTheme}
        aria-label="Patient Care AI Therapist"
        className={`transition-all duration-300 fixed top-0 left-0 h-full overflow-y-auto w-64 overflow-hidden`}
      >
        <div className='w-full flex flex-col items-center my-4'>
        <img src="/logo512.png" alt="patient care logo" className=' flex h-14 flex-col' ></img>
        <h1 className='text-3xl text-white font-bold'>AI Therapist</h1>
        </div>

        <Sidebar.Items>
          <Sidebar.ItemGroup className='flex flex-col gap-5 mx-10'>
            <a href="/" className='flex text-white font-bold text-xl items-center gap-2'>
              <BiSolidChat className='text-3xl'/> Chat 
            </a>
            <a href="/history" className='flex text-white font-bold text-xl items-center gap-2'>
              <RiHistoryFill className='text-3xl'/> History 
            </a>
            <a href="/settings" className='flex text-white font-bold text-xl items-center gap-2'>
              <GiSettingsKnobs className='text-3xl'/> Settings 
            </a>
            <a href="/login" className='flex text-white font-bold text-xl items-center gap-2'>
              <IoLogInSharp className='text-3xl'/> Login 
            </a>


            {/* <Sidebar.Collapse icon={HiViewBoards} label={ "History"}> */}
              {/* Logic to list all available chat history for that specific user */}
            {/* </Sidebar.Collapse> */}

            {/* <Sidebar.Item href="#" onClick={openModal} icon={HiAdjustments}>
                { "Settings"}
            </Sidebar.Item> */}
            {/* <Sidebar.Item href="#" onClick={openNotFound} icon={HiLogin}>
              {"Login"}
            </Sidebar.Item> */}
            {/* 404 noModel component */}
            {/* <NotFoundModal isOpen={isNotFoundOpen} onClose={closeNotFound}>
              
            </NotFoundModal> */}

            <Sidebar.ItemGroup>
            

            {/* Modal Component */}
            {/* <Modal isOpen={isModalOpen} onClose={closeModal}> */}
              
            {/* </Modal> */}
            </Sidebar.ItemGroup>
          </Sidebar.ItemGroup>
        </Sidebar.Items>

        <Sidebar.CTA
          className='mx-4'
        >
          {/* <div className='mb-3 flex items-center bottom-1 '> */}
            <div className=" flex items-center">
              <Badge className='bg-gradient-to-br from-primary-darkGreen to-primary-purple bg-clip-text text-xl'>Beta</Badge>
            </div>
            
              <div className="mb-3 text-sm text-cyan-900 dark:text-gray-400">
                Available 24/7, it provides confidential support to help you maintain well-being or navigate difficult times, fitting seamlessly into your life.
              </div>
            
            
              <a
                className="text-sm text-cyan-900 underline hover:text-cyan-800 dark:text-gray-400 dark:hover:text-gray-300"
                href="#"
              >
                Patient Care
              </a>

          {/* </div> */}
        </Sidebar.CTA>
      </Sidebar>
    </div>
  );
}