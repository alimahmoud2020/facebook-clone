import React from 'react'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

const Feed = () => {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />


            <Post 
                progilePic=''
                message='here you write iam Ali mahmoud developer'
                imgName='imgName'
                username='Frankie'
            />
               {/*  {postsData.map(entry => (
                    <Post 
                        profilepic={isElementOfType.avatar}
                        message={entry.text}
                        timestamp={entry.timestamp}
                        imgName={entry.imgName}
                        username={entry.user}
                        />
                ))
                    
                    } */}
             
        </div>
    )
}

export default Feed
