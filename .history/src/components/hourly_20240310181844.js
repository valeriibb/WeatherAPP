

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
    const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&lang=ru&units=metric&APPID=${WEATHER_API_KEY}`;
    const [days, setDays] = useState([]);
  
    const fetchData = async () => {
      try {
        const response = await axios.get(weatherURL);
        const dailyData = response.data.list.filter(reading => reading.dt_txt.includes("12:00:00"));
        setDays(dailyData);
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, [props.city]);
  



    return (
        <div className="Hourly">
            <h2>Погодинний прогноз:</h2>
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
