import Logo from './Logo'
import menuBars from '../assets/images/icon-hamburger.svg'
import { useSidebarContext } from '../context/AppContext'
import { links } from '../utils/data'

const Header = () => {
  const { toggleSidebar } = useSidebarContext()

  return (
    <header className="py-8 px-6 md:p-10 lg:px-20 lg:py-16">
      <nav className="flex justify-between items-center">
        <Logo />
        <div className="md:inline-flex hidden gap-8">
          {links.map(({ text, url }, i) => {
            return (
              <a
                href={url}
                key={i}
                className="capitalize text-lg text-white relative after:absolute after:-bottom-[2px] after:w-0 after:left-0 after:h-[2px] after:bg-white hover:after:w-full after:duration-500 ease-in-out"
              >
                {text}
              </a>
            )
          })}
        </div>
        <button
          className="md:hidden inline-block hover:-rotate-90 duration-500"
          onClick={toggleSidebar}
        >
          <img src={menuBars} alt="menu" className="w-7" />
        </button>
      </nav>
      <div className="my-40 lg:my-32 p-5 border-solid border-2 border-white sm:max-w-lg lg:max-w-xl animate__animated animate__fadeInLeft">
        <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl">
          IMMERSIVE EXPERIENCE THAT DELIVER
        </h1>
      </div>
    </header>
  )
}

export default Header
