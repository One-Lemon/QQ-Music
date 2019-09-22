import React, { Component } from 'react';
import { Card } from 'antd';
import { CardWarp } from '../style';
import { withRouter } from 'react-router-dom';

const { Meta } = Card;
class PlayList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardList: [
                { id: 0, src: 'https://qpic.y.qq.com/music_cover/UCJDptU3vGgQt6PS5Hn6CxN8ea8RJF64wPFa8lnd4CElkLMTx7mH4w/300?n=1', title: 'QQ Music', context: '听你嘛呢' },
                { id: 1, src: 'http://qpic.y.qq.com/music_cover/N6GhicG06jmQnia2FZRicpvhdcqUXWFuRPIXBYA7c9U6UicO091a0h12IQ/300?n=1', title: 'QQ Music', context: '听你嘛呢' },
                { id: 2, src: 'https://qpic.y.qq.com/music_cover/N6GhicG06jmQnia2FZRicpvhdcqUXWFuRPIzic7uaorQaS4cgtbwKh3xxw/300?n=1', title: 'QQ Music', context: '听你嘛呢' },
                { id: 3, src: 'https://qpic.y.qq.com/music_cover/D7K7C3zWofLYecwwfx0y1pcfhxRnzH50s32PUl5F7loEbLuuKkgXEQ/300?n=1', title: 'QQ Music', context: '听你嘛呢' },
                { id: 4, src: 'https://qpic.y.qq.com/music_cover/D0FUVRO5LI5WPzib0ArnTmicXNUO9XPU9v2lZ4Vf5VDCF92p3ibiaTyWaQ/300?n=1', title: 'QQ Music', context: '听你嘛呢' }
            ]
        }
    }
    onGoCard(id) {
        this.props.history.push(`/music/card?id=${id}`);
    }
    render() {
        const { cardList } = this.state;
        return (
            <CardWarp>
                {
                    cardList.map(card => (
                        <Card
                            onClick={() => { this.onGoCard(card.id) }}
                            hoverable
                            style={{ width: 224 }}
                            bodyStyle={{ height: 58, padding: 0, paddingTop: 15, lineHeight: 1, fontSize: 14, border: 0 }}
                            cover={<img alt="example" src={card.src} style={{ width: 224, height: 224 }} />}
                            key={card.id}
                            className="card"
                        >
                            <Meta title={card.title} description={card.context} />
                        </Card>
                    ))
                }
            </CardWarp>
        )
    }
}

export default withRouter(PlayList);