import { createContext, useState } from 'react'

export const SidebarContext = createContext(null)

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
