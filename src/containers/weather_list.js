import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from "../components/google_map";
class WeatherList extends Component{
    renderWeather(cityData){
        const name = cityData.city.name;
        const temp = cityData.list.map( weather => weather.main.temp);
        const humid = cityData.list.map( weather => weather.main.humidity);
        const press = cityData.list.map( weather => weather.main.pressure);
        const { lon, lat } = cityData.city.coord;
        return(
            <tr key={name}>
                 <td><GoogleMap lon={lon} lat={lat} /></td>
                <td>
                   <Chart data={temp} color="orange" />
                </td>
                <td>
                    <Chart data={humid} color="red" />
                </td>
                <td>
                    <Chart data={press} color="blue" />
                </td>
            </tr>
        );
    }
    render(){
        return(
            <div>
                    <table className=" table table-hover">
                        <thead>
                            <tr>
                                <th> City </th>
                                <th> Temperature </th>
                                <th> Pressure </th>
                                <th> Humidity </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.weather.map(this.renderWeather)}
                        </tbody>
                    </table>
            </div>
        );
    }
}

function mapStateToProps({weather}){
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);