import React from 'react';
import {Home, LiveTv ,Search , PersonOutline, VideoLibrary ,FlashOn} from '@material-ui/icons';
import './Header.css';
const Header = () => {
    return (
        <div className = "header">
            <div className = "header__icons">
                <div className = "header__icon header__icon--active">
                   <Home/>
                    <p>Home</p>
                </div>

                <div className = "header__icon">
                    <FlashOn/>
                    <p>Trending</p>
                </div>

                <div className = "header__icon">
                    <LiveTv/>
                    <p>Verified</p>
                </div>

                <div className = "header__icon">
                    <VideoLibrary/>
                    <p>Collection</p>
                </div>

                <div className = "header__icon">
                    <PersonOutline/>
                    <p>Account</p>
                </div>


                <div className = "header__icon">
                    <Search/>
                    <p>Search</p>
                </div>
            </div>
            <img src = "https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
            alt = ""/>
        </div>
    );
};
export default Header;