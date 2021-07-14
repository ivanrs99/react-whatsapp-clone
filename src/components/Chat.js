import React, { useState, useEffect } from 'react';
import './Chat.css'
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';
import * as data from '../data/convers.json'
import LockIcon from '@material-ui/icons/Lock';
import DoneAllIcon from '@material-ui/icons/DoneAll';

const Chat = () => {
    const [text, setText] = useState("");
    const conver = data;
    var myDiv = document.getElementsByClassName('text-editable')

    useEffect(() => {
        console.log(conver["default"])
        if (window.addEventListener) {
            myDiv[0].addEventListener('DOMSubtreeModified', contentChanged, false);
        } else
            if (window.attachEvent) {
                myDiv[0].attachEvent('DOMSubtreeModified', contentChanged);
            }
    })

    const contentChanged = () => {
        setText(myDiv[0].innerHTML)
    }

    return (
        <div className="chat-container">
            <div className="chat-header">
                <div className="user-header">
                    <img src="./images/xiise.jpg" alt="xiise" />
                    <span>Xiise</span>
                </div>
                <div className="icons-header">
                    <SearchIcon className="icon-header" />
                    <MoreVertIcon className="icon-header" />
                </div>
            </div>
            <div className="chat-conver">
                <div className="cont-conver">
                    <div className="relleno"></div>
                    <div className="cont-p">
                        <div className="cont-fecha">
                            <div className="fecha">
                                <span>04/07/2021</span>
                            </div>
                        </div>
                    </div>
                    <div className="prot-cont">
                        <div className="prot-cont2">
                            <span>
                                <LockIcon className="lock" />
                                <span>Los mensajes están cifrados de extremo a extremo. Nadie fuera de este chat, ni siquiera WhatsApp, puede leerlos ni escucharlos. Haz clic para obtener más información.</span>
                            </span>
                        </div>
                    </div>
                    {conver["default"].map((msg, i) => {
                        return (
                            <>
                                {msg.user === "Xiise" ?
                                    <div className="msg-ella" key={i}>
                                        <div className="msg-cont2">
                                            <span className="pico-ella">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13"><path opacity=".13" fill="#0000000" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path><path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path></svg>
                                            </span>
                                            <div className="msg-cont3-ella">
                                                <div className="msg-text">
                                                    <span>{msg.msg}</span>
                                                    <span className="separator"></span>
                                                </div>
                                                <div className="msg-hour">
                                                    <span>21:50</span>
                                                    <div className="msg-tick">
                                                        <DoneAllIcon className="tick-icon" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className="msg-yo" key={i}>
                                        <div className="msg-cont2">
                                            <span className="pico-yo">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13"><path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path><path fill="currentColor" d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path></svg>
                                            </span>
                                            <div className="msg-cont3">
                                                <div className="msg-text">
                                                    <span>{msg.msg}</span>
                                                    <span className="separator"></span>
                                                </div>
                                                <div className="msg-hour">
                                                    <span>21:50</span>
                                                    <div className="msg-tick">
                                                        <DoneAllIcon className="tick-icon" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </>
                        )
                    })
                    }
                </div>
            </div>
            <div className="chat-bottom">
                <div className="icon-group">
                    <SentimentVerySatisfiedIcon className="icon-bottom" />
                    <AttachFileIcon className="icon-bottom clip" />
                </div>
                <div className="text-bar">
                    <div tabIndex="-1" className="text-line">
                        {text === "" && <div className="text">Escribe un mensaje aquí</div>}
                        <div contentEditable="true" dir="ltr" spellCheck="true" className="text-editable" onChange={setText}></div>
                    </div>
                </div>
                <div>
                    <MicIcon className="micro-icon" />
                </div>
            </div>
        </div>
    )
}

export default Chat;