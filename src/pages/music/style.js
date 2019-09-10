import styled from "styled-components";

export const MusicWarp = styled.div`
  margin: 0 auto;
  .nav {
    display: flex;
    /* height: 51px; */
    align-items: center;
    padding-left: 230px;
    max-width: 1200px;
    width: 1200px;
    margin: 0 auto;
    li{
      font-size: 15px;
      color: #c1c1c1;
      margin-right: 47px;
      align-self: center;
      line-height: 51px;
    }
  }
`;
/**
 * 音乐馆首页歌单推荐央视
 */
export const MIndexWarp = styled.div`
  background: url(https://y.gtimg.cn/mediastyle/yqq/img/bg_detail.jpg)50% 0 repeat-x;
  margin: 0 auto;
  height: 480px;
  .marginBox{  
    margin: 0 auto;
    max-width: 1200px;
    .title{
    position: relative;
    padding-top: 4.16667%;
    padding-bottom: 2%;
    font-size: 26px;
    font-weight: bold;
    width: 196px;
    margin: 0 auto;
    box-sizing: border-box;
    height: 114px;
    text-align: center;
  }
  .mainUl{
    display: flex;
    justify-content: center;
    align-items: center;
    li{
      margin: 0 24px;
      cursor: pointer;
      :hover{
        color: #31c27c;
      }
    }
    .active{
      color: #31c27c;
    }
  }
}
`
