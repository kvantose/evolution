import './App.css'
import './index.css'
import bg from "./assets/bg.png"
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Info } from './components/Info/Info'
import { Geolocation } from './components/Map/Map'
import { CircualCarusel } from './components/Advantages/CircualCarusel'
import { Rent } from './components/Rent/Rent'
import { Footer } from "./components/Footer/Footer"
function App() {

  return (
    <>
      <div
        className='min-h-screen app'
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <Header />
        <Main />
        <Info />
        <Geolocation />
      </div>
      <CircualCarusel />
      <Rent />
      <Footer />
    </>
  )
}

export default App
