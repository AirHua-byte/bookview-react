import React, { Component } from 'react'
import { NavBar} from 'antd-mobile'
import { Link } from 'react-router-dom'
import '../static/css/type.css'


export default class Type extends Component {
  render() {
    return (
      <div>
        <NavBar mode="dark">分类</NavBar>
        <ul className="types">
          <li className="type">
            <Link to="/list/1">都市</Link>
          </li>
          <li className="type">
            <Link to="/list/2">军事</Link>
          </li>
          <li className="type">
            <Link to="/list/3">科技</Link>
          </li>
          <li className="type">
            <Link to="/list/4">历史</Link>
          </li>
          <li className="type">
            <Link to="/list/5">科技</Link>
          </li>
          <li className="type">
            <Link to="/list/6">科幻</Link>
          </li>
          <li className="type">
            <Link to="/list/7">言情</Link>
          </li>
          <li className="type">
            <Link to="/list/8">运动</Link>
          </li>
          <li className="type">
            <Link to="/list/9">生活</Link>
          </li>
        </ul>
      </div>
    )
  }
}
