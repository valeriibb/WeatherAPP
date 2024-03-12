


import './forecast.css'
function ForItem(props) {
    return (
        <div className='ForItems'>
            <img src={props.img} alt=""/>
            <h3>{props.data}</h3>
            <h3>{props.text}</h3>
        </div>
    );
}

export default function Forecast() {
    return (
        <div className="Forecast">
            <h2>5 Days Forecast:</h2>
            <div className="ForecastItems">
                <ForItem img='./clouds 1.png' data='20°C' text='Friday, 1 Sep'/>
                <ForItem img='./clouds 1.png' data='20°C' text='Friday, 1 Sep'/>
                <ForItem img='./clouds 1.png' data='20°C' text='Friday, 1 Sep'/>
                <ForItem img='./clouds 1.png' data='20°C' text='Friday, 1 Sep'/>
                <ForItem img='./clouds 1.png' data='20°C' text='Friday, 1 Sep'/>
            </div>

        </div>

    );
}
