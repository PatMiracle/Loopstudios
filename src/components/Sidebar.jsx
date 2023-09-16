import Logo from './Logo'
import { useSidebarContext } from '../context/AppContext'
import close from '../assets/images/icon-close.svg'
import { links } from '../utils/data'

const Sidebar = () => {
  const { sidebarOpen, toggleSidebar } = useSidebarContext()

  return (
    <aside
      className={`${
        sidebarOpen ? 'translate-x-0' : 'translate-x-[1000px]'
      } fixed left-0 top-0 w-full min-h-screen z-20 py-8 px-6 bg-black duration-500 md:hidden`}
    >
      <nav className="flex justify-between items-center">
        <Logo />
        <button className="hover:-rotate-90 duration-500">
          <img src={close} alt="close" onClick={toggleSidebar} />
        </button>
      </nav>
      <div className="my-20 grid gap-8">
        {links.map(({ text, url }, i) => {
          return (
            <a
              href={url}
              key={i}
              className="uppercase text-2xl text-white hover:text-darkGray"
              onClick={toggleSidebar}
            >
              {text}
            </a>
          )
        })}
      </div>
    </aside>
  )
}

export default Sidebar
