import React, { Component } from "react";
import { MusicWarp } from "./style";
import { Route, NavLink } from "react-router-dom";
import Index from "./index/index";
import Siger from "./siger/index";
import CardDetails from '../detils/cardDetails';

export default class Music extends Component {
  render() {
    return (
      <MusicWarp>
        <div className="MusicBox">
          <ul className="nav">
            <li><NavLink to={`${this.props.match.path}/index`} activeStyle={{ color: '#31c27c' }}>首页</NavLink></li>
            <li><NavLink to={`${this.props.match.path}/siger`} activeStyle={{ color: '#31c27c' }}>歌手</NavLink></li>
            <li><NavLink to={`${this.props.match.path}/disc`} activeStyle={{ color: '#31c27c' }}>新碟</NavLink></li>
            <li><NavLink to={`${this.props.match.path}/rank`} activeStyle={{ color: '#31c27c' }}>排行榜</NavLink></li>
            <li><NavLink to={`${this.props.match.path}/classification`} activeStyle={{ color: '#31c27c' }}>分类歌单</NavLink></li>
            <li><NavLink to={`${this.props.match.path}/radio`} activeStyle={{ color: '#31c27c' }}>电台</NavLink></li>
            <li><NavLink to={`${this.props.match.path}/mv`} activeStyle={{ color: '#31c27c' }}>MV</NavLink></li>
            <li><NavLink to={`${this.props.match.path}/album`} activeStyle={{ color: '#31c27c' }}>数字专辑</NavLink></li>
            <li><NavLink to={`${this.props.match.path}/ticket`} activeStyle={{ color: '#31c27c' }}>票务</NavLink></li>
          </ul>
          <Route path={`${this.props.match.path}/index`} component={Index} />
          <Route path={`${this.props.match.path}/card`} component={CardDetails} />
          <Route path={`${this.props.match.path}/siger`} component={Siger} />
        </div>
      </MusicWarp>
    );
  }
}
