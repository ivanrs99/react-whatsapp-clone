import React from 'react';
import './Chats.css'
import * as data from '../data/users.json'

const Chats = (props) => {
    const users = data;

    return (
        <div className="chats-container">
            <div>
                { users["default"].map((user, i) => {
                    return (
                        <div className="chat-cont" key={i} onClick={props.changeWindow}>
                            <div className="img-cont">
                                <img src={user.img} alt={user.name} className="img-chat" />
                            </div>
                            <div className="body-chat">
                                <div className="body-title">
                                    <span>{user.name}</span>
                                    <div>11:16</div>
                                </div>
                                <div className="body-text">Holaaaaaaaaa</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Chats;