


import { render } from '@testing-library/react';
import './forecast.css'
function ForItem(props) {
    render()
     {

        const ms = this.props.day.dt * 1000;
        const weekdayName = new Date(ms).toLocaleString('ru', {weekday: 'long'});
    
        const imgURL = "owf owf-"+ this.props.day.weather[0].id +" owf-5x icon-style"
    }
    return (
        <div className='ForItems'>
            <img src={props.img} alt=""/>
            <h3>{props.data}</h3>
            <h3>{props.text}</h3>
        </div>
    );



}

export default function Forecast() {
    render()
    {
        state = {
            days: []
          }
        
          componentDidMount = () => {
            fetch(weatherURL)
            .then(res => res.json())
            .then(data => {
              const dailyData = data.list.filter(reading => reading.dt_txt.includes("12:00:00"))
              this.setState({days: dailyData})
            })
          }

          formatCards = () => {
            return this.state.days.map((day, index) => <Card day={day} key={index}/>)
          }

    }

    return (
        <div className="Forecast">
            <h2>5 Days Forecast:</h2>
            <div className="ForecastItems">
            </div>

        </div>

    );
}
