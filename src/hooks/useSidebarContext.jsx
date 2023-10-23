import { useContext } from 'react'
import { SidebarContext } from '../context/AppContext'

const useSidebarContext = () => {
  return useContext(SidebarContext)
}

export default useSidebarContext
