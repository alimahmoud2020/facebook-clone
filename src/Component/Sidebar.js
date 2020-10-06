import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

/* import { useStateValue } from '../StateProvider' */


const Sidebar = () => {
/* const [{ user }, dispatch] = useStateValue() */
    return (
        <div>
            <SidebarRow src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Mohamed_Salah_2018.jpg" title="AliMahmoud" />
            <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Info Center' />
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
            <SidebarRow Icon={PeopleIcon} title='Friends' />
            <SidebarRow Icon={ChatIcon} title='messenger' />
            <SidebarRow Icon={StorefrontIcon} title='Marketplace' />
            <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title='More' />
        </div>




    )
}
export default Sidebar


