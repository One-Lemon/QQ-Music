import React, { Component } from "react";
import { MIndexWarp } from '../style';
import PlayList from '../../../components/playList';

export default class MusicIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainli: [
        { id: 0, value: '为你推荐' },
        { id: 1, value: '钢琴' },
        { id: 2, value: '古筝' },
        { id: 3, value: '英语' },
        { id: 4, value: '情歌' },
        { id: 5, value: '背景音乐' }],
      isTab: 0
    }
  }
  render() {
    const { mainli, isTab } = this.state;
    return (
      <MIndexWarp>
        <div className="marginBox">
          <h2 className="title">歌 单 推 荐</h2>
          <ul className="mainUl">
            {
              mainli.map(li => (
                <li className={isTab === li.id ? 'active' : ''} key={li.id}>{li.value}</li>
              ))
            }
          </ul>
          <div className="cardList">
            <PlayList />
          </div>
        </div>
      </MIndexWarp>
    );
  }
}
