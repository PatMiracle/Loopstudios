import { useEffect, useRef } from 'react'

const AnimateIntoView = ({ children, animation }) => {
  const elRef = useRef(null)

  useEffect(() => {
    function addAmination() {
      if (elRef.current.getBoundingClientRect().y < window.innerHeight - 20) {
        elRef.current.classList.add(`animate__${animation}`)
      }
    }
    window.addEventListener('scroll', addAmination)

    return () => window.removeEventListener('scroll', addAmination)
  }, [window.scroll])

  return (
    <div className="animate__animated" ref={elRef}>
      {children}
    </div>
  )
}

export default AnimateIntoView
