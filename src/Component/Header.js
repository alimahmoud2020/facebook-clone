import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IconButton } from '@material-ui/core';
import './Header.css';

const Header = () => {
        return (
            <div class="header">
                <div class="header__left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="facebook_logo" />
                     
                </div>
                <div class="header__input">
                        <SearchIcon />
                        <input placeholder='Search Facebook' type='text' />  
                </div>
                <div className="header__center">
                    <div className="header__option header__option--active">
                        { /* HomeIcon */ }
                        <HomeIcon font-size='large'/>
                    </div>
                    <div className="header__option">
                        { /* FlagIcon */ }
                        <FlagIcon font-size='large'/>
                    </div>
                    <div className="header__option">
                        { /* FlagIcon */ }
                        <SubscriptionsIcon font-size='large'/>
                    </div>
                    <div className="header__option">
                        { /* StorefrontIcon */ }
                        <StorefrontIcon font-size='large'/>
                    </div>
                    <div className="header__option">
                        { /* SupervisedUserCircleIcon */ }
                        <SupervisedUserCircleIcon font-size='large'/>
                    </div>
                </div>
                <div className="header__right">
                    <div className="header__info">
                        <Avatar />
                        <h4>Ali-Mahmoud</h4>
                    </div>
                    <IconButton><AddIcon /></IconButton>
                    <IconButton><ForumIcon /></IconButton>
                    <IconButton><NotificationsActiveIcon /></IconButton>
                    <IconButton><ExpandMoreIcon /></IconButton>
                </div>
            </div>
        )
}
export default Header

