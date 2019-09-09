import React, { Component } from "react";
import { Head } from "./style";
import { NavLink } from "react-router-dom";
import { Input, Button } from "antd";

const { Search } = Input;

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }
  onSearch = e => {
    console.log(e);
  };
  onSchange = e => {
    console.log(e);
  };
  render() {
    return (
      <Head>
        <div className="head-warp">
          <h1 className="logo">
            <NavLink to="/">
              <img src="https://y.gtimg.cn/mediastyle/yqq/img/logo.png?nowebp=1" alt="logo" className="logo-img" />
            </NavLink>
          </h1>
          {/* 导航 */}
          <ul className="nav">
            <li>
              <NavLink to="/music" activeClassName="head-active">
                音乐馆
              </NavLink>
            </li>
            <li>
              <NavLink to="/mine" activeClassName="head-active">
                我的音乐
              </NavLink>
            </li>
            <li>
              <NavLink to="/">客户端</NavLink>
            </li>
            <li>
              <NavLink to="/">音乐号</NavLink>
            </li>
            <li>
              <NavLink to="/">VIP</NavLink>
            </li>
          </ul>
          <Search
            placeholder="搜索音乐、MV、歌单、用户"
            onSearch={this.onSearch}
            onChange={this.onSchange}
            style={{ width: 220, marginRight: 25 }}
          />
          <div className="btns">
            <NavLink className="login" to="login">
              登录
            </NavLink>
            <Button className="open green" href="open">
              开通豪华绿钻
            </Button>
            <Button className="open" href="open">
              开通付费包
            </Button>
          </div>
        </div>
      </Head>
    );
  }
}
