

import './hourly.css'
function HorItem(props) {

    return (
        <div className='HorItems'>
            <h3>{props.time}</h3>
            <img style={{height: '80px', width: '80px'}} src={props.icon} alt=""/>
            <h3>{props.temperature}</h3>
            <img style={{height: '55px', width: '55px'}} src={props.direction} alt=""/>
            <h3>{props.speed}</h3>
        </div>
    );
}

export default function Hourly() {
    return (
        <div className="Hourly">
            <h2>H:</h2>
            <div className="HourlyItems">
                <HorItem time={'33'} icon='./clear 1.png' temperature='26°C' direction='./navigation 1.png' speed='3km/h' />
                <HorItem time={'33'} icon='./clear 1.png' temperature='26°C' direction='./navigation 1.png' speed='3km/h' />
                <HorItem time={'33'} icon='./clear 1.png' temperature='26°C' direction='./navigation 1.png' speed='3km/h' />
                <HorItem time={'33'} icon='./clear 1.png' temperature='26°C' direction='./navigation 1.png' speed='3km/h' />
                <HorItem time={'33'} icon='./clear 1.png' temperature='26°C' direction='./navigation 1.png' speed='3km/h' />
            </div>

        </div>

    );
}
