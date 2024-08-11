import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext } from '../../context/AuthContext';
import { getAuth, signOut } from 'firebase/auth';
function Header() {
  const {user, setUser} = useContext(AuthContext)
  const auth = getAuth();
  const navigate = useNavigate()

  const handleLogout= async()=>{
    try{
      await signOut(auth)
      setUser(null)
      navigate('/')

    }catch(error){
      console.error("Error signing out ", error)
    }
  }
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        {user?(
        <>
        <p>Welcome {user.displayName}</p>
        <button onClick={handleLogout}>Logout</button>
        </>
      ): (<div className="loginPage">
          <span><Link to={'/login'}>Login</Link></span>
          <hr />
        </div>)}
          

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
