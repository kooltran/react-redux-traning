import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Sparklines } from 'react-sparklines';

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    console.log(temps);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          {/**<Sparklines height={120} width={180} data={temps}>
            <SparklinesLine color="red" />
          </Sparklines>**/}
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProp(state) {
  return {
    weather: state.weather
  };
}

export default connect(mapStateToProp)(WeatherList);
