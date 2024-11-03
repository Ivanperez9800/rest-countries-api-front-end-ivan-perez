import React from 'react'
import CountryList from './components/Cards/CountryList'
import { useAppContext } from './hooks/UseContextApp';

const Menu: React.FC = () => {
    const {isDarkMode} = useAppContext();
  return (
    <>
    <div className="container"  style={{
      backgroundColor: isDarkMode ? '#212f36' : '#fafafa',
      minHeight: '100vh',
      overflow: 'hidden',
      }}>
    
    <CountryList/>
    </div>
  </>
  )
}

export default Menu