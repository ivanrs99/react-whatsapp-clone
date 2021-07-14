import React, { useState } from 'react';
import './Container.css'
import ProfileNav from './ProfileNav'
import Notifications from './Notifications'
import InitialPage from './InitialPage'
import Search from './Search'
import Chats from './Chats'
import Chat from './Chat'

const Container = () => {
    const [window, setWindow] = useState(false);

    const changeWindow = () => {
        setWindow(!window)
    }

    return (
        <div className="whatsapp-container">
            <aside className="cont_sidebar">
                <ProfileNav/>
                <Notifications/>
                <Search/>
                <Chats changeWindow={changeWindow}/>
            </aside>
            <main className="cont_main">
                { !window ? 
                    <InitialPage/>
                :
                    <Chat/>
                }
            </main>
        </div>
    )
}

export default Container;