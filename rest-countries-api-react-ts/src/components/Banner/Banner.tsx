import React from "react"

const Banner: React.FC = () => {
    return (
        <div className="__banner">
            <h1 className="__title-banner">Where in the world?</h1>
            <div className="theme">
            <img src="./icon/moon-ligth.svg" alt="ligth-moon" />
            <button className="__btn-theme">Ligth Mode</button>
            </div>
        </div>
    )
}

export default Banner