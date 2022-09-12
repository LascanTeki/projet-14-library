import './modal.css'

import React from 'react';

export function Modal(props) {

    function close(){
        document.getElementById('_2DNvk').style.display= "none";
    }

    return (
        <div id='_2DNvk'>
            <div className='_2PjQe'>
            {props.children}
            <div className='_310Vy' onClick={close}>x</div>
            </div>
        </div>
    )
}

export function open(){
    document.getElementById('_2DNvk').style.display = "flex";
}