import React from 'react';
import './InitialPage.css'
import ComputerIcon from '@material-ui/icons/Computer';

const InitialPage = () => {
    return (
        <div className="initial_container">
            <div className="principal">
                <div className="image"></div>
                <div className="p_text">
                    <h1>Mantén tu teléfono conectado</h1>
                    <div className="ps_text">
                    WhatsApp se conecta a tu teléfono para sincronizar los mensajes. Para reducir el consumo de tus datos, conecta tu teléfono a una red Wi-Fi.
                    </div>
                    <div className="pt_text">
                        <div className="line_text"></div>
                        <div className="last">
                            <ComputerIcon className="c_icon"/>
                            <div className="last_div">
                                {"WhatsApp está disponible para Windows. "}
                                <a href="https://www.whatsapp.com/download" target="_blank" rel="noreferrer">Obtenlo aquí</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InitialPage;