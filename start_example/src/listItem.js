import React, {Component} from 'react'
import numWords from './numWords';

export default class ListItem extends Component {
  render() {
    let {text} = this.props;
    let numW = numWords(+text)
    return <li><b>{text}</b>
      <div><i>{numW}</i></div>
    </li>
  }
}