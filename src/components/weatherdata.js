import React from "react";
import './weatherdata.css'
function AtmItems(props) {
    return (
        <div className='AtmItems'>
            <img src={props.img} alt=""/>
            <h3>{props.data}</h3>
            <h3>{props.text}</h3>
        </div>
    );
}

export default function Weatherdata() {
    return (
        <div className="Weatherdata">
            <div className="Temp">
                <h1>24°C</h1>
                <h4>Feels like: 22°C </h4>
                <div className="Sunrise">
                    <span>
                        <img src="sunrise-white 1.png" alt=""/>
                    </span>
                    <div className="SunriseDetails">
                        <h3>Sunrise</h3>
                        <h3>06:37 AM</h3>
                    </div>
                </div>
                <div className="Sunrise">
                    <span>
                        <img src="sunrise-white 1.png" alt=""/>
                    </span>
                    <div className="SunriseDetails">
                        <h3>Sunrise</h3>
                        <h3>06:37 AM</h3>
                    </div>
                </div>
            </div>
            <div className="Сonditions">
                <img src="clear 1.png" alt=""  style={{ width: '200px', height: '200px' }} />
                <h2>Sunny</h2>
            </div>
            <div className="Air_Conditions">
                <AtmItems img='humidity 1.png' data='91%' text='text'/>
                <AtmItems img='humidity 1.png' data='91%' text='text'/>
                <AtmItems img='humidity 1.png' data='91%' text='text'/>
                <AtmItems img='humidity 1.png' data='91%' text='text'/>
            </div>
        </div>
    );
}
