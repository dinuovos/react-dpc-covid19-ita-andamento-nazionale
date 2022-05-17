import React, {Component} from 'react'

export default class ListItem extends Component {
  render() {
    let props = this.props.dataItem;
    return <tr>
      <th>{new Date(props.data).toLocaleDateString()}</th>
      <td>{props.ricoverati_con_sintomi}</td>
      <td>{props.terapia_intensiva}</td>
      <td>{props.totale_ospedalizzati}</td>
      <td>{props.variazione_totale_positivi}</td>
      <td>{props.nuovi_positivi}</td>
      <td>{props.deceduti}</td>
      <td>{props.totale_casi}</td>
      <td>{props.ingressi_terapia_intensiva}</td>
    </tr>
  }
}