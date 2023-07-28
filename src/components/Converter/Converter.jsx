import React, { useState } from 'react'
import './css/converter.css'

const submitHandler = event => {
    event.preventDefault();
}

const hexToRgb = hex => {
    hex = hex.replace("#", "");

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

const getRGBColor = color => {
    if (color.length >= 7) {
        if (/^#[0-9,a-f,A-F]{6}$/.test(color)) {
            document.body.style = 'background: ' + color;
            return hexToRgb(color);
        } else {
            return 'Ошибка';
        }

    } else {
        return "";
    }
}

const Converter = props => {
    const [colorData, setColorData] = useState('');

    return (
        <div className='main'>
            <form className='color-form' onSubmit={submitHandler}>
                <input className='color-input' type='text' onChange={event => setColorData(getRGBColor(event.target.value))} />
                <label className='color-result'>{colorData}</label>
            </form>
        </div>
    )
}

export default Converter