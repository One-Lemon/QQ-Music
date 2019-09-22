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
    align-items: flex-start;
    height: 50px;
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
/**
 * 歌手页面
 */

export const SigerWarp = styled.div`
  .attention{
    background: url('https://y.gtimg.cn/mediastyle/yqq/img/bg_singer.jpg') 50% 0 repeat-x;
    width: 100%;
    height: 376px;
    .inner{
      max-width: 1200px;
      margin: 0 auto;
      position: relative;
      height: 100%;
      .title{
        text-align: center;
        padding: 60px 0 44px;
        line-height: 22px;
        font-size: 18px;
        color: white;
      }
      .singers{
        display: flex;
        justify-content: center;
        ul{
          display: flex;
          width: 750px;
          overflow: hidden;
          li{
            cursor: pointer;
            width: 150px;
            filter: grayscale(1);
            transition: all .3s linear;
            position: relative;
            .border{
              position: absolute;
              top: 0;
              height: 100%;
              width: 100%;
              display: block;
              box-sizing: border-box;
              border: 1px solid rgba(0,0,0,1);
              transition: all .2s linear;
              :hover{
                border: 5px solid #31c27c;
              }
            }
            :hover{
              filter: grayscale(0);
            }
          }
        }
        .singer-icon{
          width: 150px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 56px;
          cursor: pointer;
          svg{
            transition: all .2s linear;
            :hover{
            color: #31c27c;
            }
          }
        }
      }
    }
  }
 `
