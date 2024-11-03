import React from "react"
import { useAppContext } from "../../hooks/UseContextApp"

const Banner: React.FC = () => {

    const {toggleDarkMode,isDarkMode} = useAppContext();

    // console.log(isDarkMode)

    return (
        <div className="__banner" style={{
            backgroundColor: isDarkMode ? '#2b3642' : '#FFF',
            color: isDarkMode ? '#FFF' : '#000',
          }} >
            <h1 className="__title-banner">Where in the world?</h1>
            <div className="theme">
            <img src={  isDarkMode ? "/icon/moon-ligth.svg" : "/icon/moon-dark.svg"} alt= { isDarkMode ? "Dark Mode" : "Dark Mode" } />
            <button className="__btn-theme" onClick={toggleDarkMode} 
             style={{
                color: isDarkMode ? '#FFF' : '#000',
              }} 
            >{ isDarkMode ? "Ligth Mode" : "Dark Mode" }</button>
            </div> 
        </div>
    )
}

export default Banner