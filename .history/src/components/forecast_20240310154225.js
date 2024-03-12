


import { render, state,com } from '@testing-library/react';
import './forecast.css'

class Card extends React.Component {
    // Props: day, key(index)
  
    render() {    
      const ms = this.props.day.dt * 1000;
      const weekdayName = new Date(ms).toLocaleString('ru', {weekday: 'long'});
  
      const imgURL = "owf owf-"+ this.props.day.weather[0].id +" owf-5x icon-style"
  
      // const farenheit = (parseInt(this.props.day.main.temp) - 273.15) * (9/5) + 32
  
  
      return (
        <div className="col-auto">
          <div className="card bg-light">
            <h3 className="card-title">{weekdayName}</h3>
            <i className={imgURL}></i>
            <h2>{Math.round(this.props.day.main.temp)} °C</h2>
            <div className="card-body">
              <button className="btn btn-dark btn-outline-light">{this.props.day.weather[0].description}</button>
            </div>
          </div>
        </div>
      )
    }
  }
  

export default function Forecast() {
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
    
      render() 
      {
        return (
          <div className="">
          <h1 className="display-4 jumbotron">Прогноз погоды на 5 дней</h1>
          <h5 className="display-4 text-muted">Kiev</h5>
            <div className="row justify-content-center">
    
              {this.formatCards()}
    
            </div>
          </div>
        )
      }

}
