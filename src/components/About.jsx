import man from '../assets/images/mobile/image-interactive.jpg'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <article
      className="pt-16 px-6 md:px-10 lg:px-20 lg:pt-28 lg:grid lg:grid-cols-2"
      id="about"
    >
      <motion.img
        initial={{ x: 50 }}
        whileInView={{ x: 0, transition: { duration: 0.5 } }}
        src={man}
        alt="man-with-VR"
        className="w-full"
      />
      <motion.div
        initial={{ x: -50 }}
        whileInView={{ x: 0, transition: { duration: 0.5 } }}
        className="px-2 pt-10 text-center bg-white lg:mt-24 lg:-ml-20 lg:pt-20 lg:px-20 lg:pb-20 lg:text-left lg:max-w-2xl lg:min-h-[300px]"
      >
        <h2 className="text-3xl lg:text-5xl">THE LEADER IN INTERACTIVE VR</h2>
        <p className="text-darkGray alata pt-5 text-lg">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </motion.div>
    </article>
  )
}

export default About
