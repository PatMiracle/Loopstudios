import { creations } from '../utils/data'
import { motion } from 'framer-motion'

const Creations = () => {
  return (
    <section id="creations" className="py-20 px-6 md:px-10 lg:px-20 lg:pb-28">
      <div className="lg:flex lg:justify-between lg:items-center">
        <h2 className="text-3xl text-center lg:text-justify lg:text-5xl">
          OUR CREATIONS
        </h2>
        <button className="lg:inline-block hidden border-2 border-solid border-black hover:bg-black hover:text-white duration-300 py-2 px-10 text-xl alata">
          SEE ALL
        </button>
      </div>
      <div className="grid gap-5 py-7 lg:pt-10 lg:grid-cols-4">
        {creations.map(({ text, images }, i) => {
          return (
            <motion.div
              initial={{ y: 50, opacity: 0.5 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { ease: 'easeInOut', duration: 0.7 },
              }}
              key={i}
              className="relative cursor-pointer creation"
            >
              <h3 className="uppercase absolute text-white z-10 text-2xl sm:text-4xl tracking-wide bottom-4 left-5 text-left max-w-[150px] lg:text-3xl lg:bottom-8 lg:left-8">
                {text}
              </h3>
              <img
                src={images.mobile}
                alt={text}
                className="lg:hidden w-full brightness-75"
              />
              <img
                src={images.desktop}
                alt={text}
                className="hidden lg:block brightness-75 w-full"
              />
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Creations
