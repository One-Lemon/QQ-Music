import styled from 'styled-components';

export const CardWarp = styled.div`
    display: flex;
    .card{
        margin: 0 10px;
        border: none;
        .ant-card-cover{
            overflow: hidden;
            img{
                transform: scale(1);
                transition: all .4s linear;
                :hover{
                transform: scale(1.1);
                }
            }
        }
    }
`