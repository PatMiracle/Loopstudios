import { links, socialLinks } from '../utils/data'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className="bg-black py-16 px-6 md:p-10 lg:px-20 lg:pt-10 lg:pb-2 flex flex-col items-center lg:flex-row lg:justify-between alata">
      <div>
        <Logo />
        <div className="py-9 lg:py-3 flex flex-col items-center gap-4 lg:flex-row">
          {links.map(({ text, url }, i) => {
            return (
              <a
                href={url}
                key={i}
                className="capitalize text-xl text-white relative after:absolute after:-bottom-[2px] after:w-0 after:left-0 after:h-[2px] after:bg-white hover:after:w-full after:duration-500 ease-in-out"
              >
                {text}
              </a>
            )
          })}
        </div>
      </div>

      <div>
        <div className="flex gap-4 justify-center items-center lg:justify-end">
          {socialLinks.map(({ icon, url }, i) => {
            return (
              <a key={i} href={url}>
                <img src={icon} alt="social" />
              </a>
            )
          })}
        </div>
        <p className="text-veryDarkGray mt-7 lg:mt-5 text-lg">
          &copy; 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
