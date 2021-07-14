import React from 'react';
import './Notifications.css'
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';

const Notifications = () => {
    return (
        <div className="noti-container">
            <div className="campana">
                <NotificationsOffIcon className="icon-campana" />
            </div>
            <div className="not-text-container">
                <div className="firstText">Recibe notificaciones de mensajes nuevos</div>
                <div className="secondText">
                    <span className="hoverText">Activar notificaciones de escritorio</span>
                    <span>{'>'}</span>
                </div>
            </div>
        </div>
    )
}

export default Notifications;