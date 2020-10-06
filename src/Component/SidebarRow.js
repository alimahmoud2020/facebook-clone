import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './SidebarRow.css'

const SidebarRow = ({ src, Icon, title }) => {
    return (
        <div className='sidebarRow'>
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <p>{title}</p> 
        </div>

    )
}

export default SidebarRow