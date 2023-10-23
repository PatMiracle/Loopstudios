import Header from './components/Header'
import Sidebar from './components/Sidebar'
import About from './components/About'
import Creations from './components/Creations'
import Footer from './components/Footer'
import AppContext from './context/AppContext'

const App = () => {
  return (
    <AppContext>
      <Header />
      <Sidebar />
      <About />
      <Creations />
      <Footer />
    </AppContext>
  )
}

export default App
