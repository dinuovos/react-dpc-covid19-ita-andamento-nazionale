import React, { Component } from 'react'
import ListItem from './listItem'
import getData from './getData'

class App extends Component {
  constructor(props) {
    super(props);
    // https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd?page=1&tab=scoredesc#tab-top
    let firstItem = 0;
    let firstData = getData(props.data[firstItem].data);
    let firstShowedData = firstData;
    let lastItem = props.number-1;
    let lastDate = getData(props.data[props.data.length-1].data);
    let lastShowedDate = getData(props.data[props.number-1].data);
    this.state = {
      multiplier: 1,
      data : props.data,
      number : props.number,
      deltaNumber : props.number,
      firstItem,
      lastItem,
      firstData,
      lastDate,
      lastShowedDate,
      firstShowedData
    }
  }
  componentDidUpdate(){
    console.log(performance.now()-window.performanceMeasurement);
    //window.scrollTo(0, document.body.scrollHeight);
  }
  changeFirstDate(e){
    console.log(e.target.value);
    window.performanceMeasurement = performance.now();
    // https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript
    let valueDate = e.target.value
    let lastItem = this.state.lastItem;
    let lastItemNumber = lastItem >= this.state.data.length ? this.state.data.length-1 : lastItem;
    let lastItemDate = this.state.data[lastItemNumber].data.split("T")[0];
    let d1 = new Date(valueDate);
    let d2 = new Date(lastItemDate);
    const diffTime = Math.abs(d2 - d1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    let firstItem= lastItemNumber - (diffDays);
    let firstShowedData = valueDate;
    this.setState({firstItem,firstShowedData,deltaNumber:diffDays+1});
  }
  changeLastDate(e){
    window.performanceMeasurement = performance.now();
    let d1 = new Date(this.state.data[this.state.firstItem].data.split("T")[0]);
    let d2 = new Date(e.target.value);
    const diffTime = Math.abs(d2 - d1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    let number = this.state.firstItem + diffDays;
    let lastItemNumber = number; //number >= this.state.data.length ? this.state.data.length-1 : number;
    let lastShowedDate = getData(this.state.data[lastItemNumber].data);
    this.setState({lastShowedDate,number:number+1,deltaNumber:diffDays+1,lastItem:lastItemNumber});
  }
  changeNumber(e){
    window.performanceMeasurement = performance.now();
    let delta = this.state.firstItem+(+e.target.value);
    let lastItemNumber = delta-1;//delta >= this.state.data.length ? this.state.data.length-1 : delta;
    let lastShowedDate = getData(this.state.data[lastItemNumber].data);
    this.setState({number:delta,deltaNumber:+e.target.value,lastShowedDate,lastItem:lastItemNumber});
  }
  render() {
    return (
      <div className="App">
        <nav>
          <label htmlFor="deltaNumber">Number of items:
            <input type="number" id="deltaNumber" name="deltaNumber"
                   value={this.state.deltaNumber}
                   min="0" max={this.state.data.length}
                   onChange={this.changeNumber.bind(this)}/>
          </label>
          <label htmlFor="start">Start date:
            <input type="date" id="end" name="trip-end"
                   value={this.state.lastShowedDate}
                   min={this.state.lastDate} max={this.state.firstShowedData}
                   onChange={this.changeLastDate.bind(this)}/>
          </label>
          <label htmlFor="end">End date:
            <input type="date" id="start" name="trip-start"
                   value={this.state.firstShowedData}
                   min={this.state.lastShowedDate} max={this.state.firstData}
                   onChange={this.changeFirstDate.bind(this)}/>
          </label>
        </nav>
        <table>
          <thead>
          <tr>
            <th></th>
            <th>ricoverati con sintomi - hospitalized with symptoms</th>
            <th>terapia intensiva - intensive care</th>
            <th>totale ospedalizzati- total hospitalized</th>
            <th>variazione totale positivi - total positive change</th>
            <th>nuovi positivi - new positives</th>
            <th>deceduti - deceased</th>
            <th>totale casi - total cases</th>
            <th>ingressi terapia intensiva - intensive care entrances</th>
          </tr>
          </thead>
          <tbody>
          {
            this.state.data.slice(this.state.firstItem,this.state.number).map((v,i) => {
              return <ListItem key={i} dataItem={v}/>
            })
          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App