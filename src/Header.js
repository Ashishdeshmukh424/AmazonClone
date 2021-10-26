import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';

function Header() {
    return (
        <div className='header'>
            <img className="header_logo" 
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
            />
            <div className="header_search" >
                <input className="header_searchInput"
                type="text" />
                <SearchIcon className="header_searchIcon"/>
                {/* Logo */}

            </div>

            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Hello ashish
                    </span>
                    <span className="header_optionLineTwo">
                        Sing In
                    </span>
                </div>
                <div className="header_option">
                <span className="header_optionLineOne">
                        Return
                    </span>
                    <span className="header_optionLineTwo">
                        & Orders
                    </span>
                </div>
                <div className="header_option">
                <span className="header_optionLineOne">
                        Your
                    </span>
                    <span className="header_optionLineTwo">
                        Prime
                    </span>
                </div>
                <div className="header_optionBasket">
                    <LocalMallIcon />
                    <span className="header_optionLineTwo heder_basketCount">
                        0
                    </span>

                </div>
                
            </div>
            
        </div>
    )
}

export default Header
