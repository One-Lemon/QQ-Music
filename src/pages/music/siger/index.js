import React, { Component } from "react";
import { SigerWarp } from '../style';
import { Icon } from 'antd';

export default class MusicSiger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attentionList: [
        { id: 0, src: 'http://y.gtimg.cn/music/photo_new/T001R150x150M000000CK5xN3yZDJt.jpg?max_age=2592000', name: '许嵩' },
        { id: 1, src: 'http://y.gtimg.cn/music/photo_new/T001R150x150M0000045p4Sz0LIwL5.jpg?max_age=2592000', name: 'Ed sheeran' },
        { id: 2, src: 'http://y.gtimg.cn/music/photo_new/T001R150x150M000000LExWa0hMj4m.jpg?max_age=2592000', name: '米津玄师' },
        { id: 3, src: 'http://y.gtimg.cn/music/photo_new/T001R150x150M000004McHvm2L4TD4.jpg?max_age=2592000', name: 'J.Fla' },
        { id: 4, src: 'http://y.gtimg.cn/music/photo_new/T001R150x150M0000042kZuh1dgLre.jpg?max_age=2592000', name: '二珂' },
        { id: 5, src: 'http://y.gtimg.cn/music/photo_new/T001R150x150M000003wBqzB3ZJaB9.jpg?max_age=2592000', name: '六哲' }
      ]
    }
  }
  render() {
    const { attentionList } = this.state;
    return (
      <SigerWarp>
        <div className="attention">
          <div className="inner">
            <div className="title">我关注的歌手</div>
            <div className="singers">
              <span className="singer-icon"><Icon type="left" style={{ color: 'white' }} /></span>
              <ul>
                {
                  attentionList.map(attention => {
                    return (
                      <li key={attention.id}>
                        <img src={attention.src} alt={attention.name} title={attention.name} />
                        <i className="border"></i>
                      </li>
                    )
                  })
                }
              </ul>
              <span className="singer-icon"><Icon type="right" style={{ color: 'white' }} /></span>
            </div>

          </div>
        </div>
      </SigerWarp>
    );
  }
}
