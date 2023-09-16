import { createContext, useContext, useState } from 'react'

const SidebarContext = createContext(null)

export const useSidebarContext = () => {
  return useContext(SidebarContext)
}

const AppContext = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <>
      <SidebarContext.Provider value={{ sidebarOpen, toggleSidebar }}>
        {children}
      </SidebarContext.Provider>
    </>
  )
}

export default AppContext
