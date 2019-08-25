import styled from "styled-components";

export const Head = styled.div`
  .head-warp {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    display: flex;
    align-items: center;
    height: 90px;
    border-bottom: 1px solid #f2f2f2;
    .logo {
      margin-right: 28px;
      .logo-img {
        width: 170px;
        height: 46px;
      }
    }
    .nav {
      display: flex;
      flex: 1;
      li {
        margin-right: -5px;
        a {
          display: block;
          padding: 0 20px;
          line-height: 90px;
          height: 90px;
          text-align: center;
          font-size: 18px;
        }
        .head-active {
          background-color: #31c27c;
          color: white;
          :hover {
            color: white;
          }
        }
      }
    }
    .btns {
      height: 100%;
      margin-left: auto;
      display: flex;
      align-items: center;
      .open {
        padding: 0 9px;
        font-size: 13px;
        height: 38px;
        line-height: 38px;
        margin-left: 10px;
      }
      .green {
        background-color: #31c27c;
        color: white;
      }
      .login {
        font-size: 16px;
        width: 38px;
        margin-right: 10px;
      }
    }
  }
`;
