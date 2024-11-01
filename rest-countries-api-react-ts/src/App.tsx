import Banner from "./components/Banner/Banner"
import './app.css'
import CountryList from "./components/Cards/CountryList"
// import InputSearch from "./components/Input/InputSearch"



function App() {

  
  return (
    <>
      <Banner />
      <div className="container">
      
      <CountryList/>
      </div>
    </>
  )
}

export default App
