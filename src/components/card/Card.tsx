import { Card } from 'antd';
import { CardType } from './types/CardTypes';
import "antd/lib/card/style/index.css";
import "./style/Card.css";
import moment from 'moment';

const NewsCard = ({title, description, url, imgUrl, publishedAt}: CardType) => {
    const date = moment(publishedAt).format('DD MMM, YYYY');
    const { Meta } = Card;
    return(
        <>
            <a href={url} target="_blank">
                <Card 
                    hoverable
                    cover={
                        <img
                          alt={title}
                          src={imgUrl}
                          style={{maxHeight: 150, width: 300, objectFit: 'cover'}}
                        />
                      }
                    title={date}
                    style={
                        { 
                            width: 300,
                            height: 500
                        }}
                >
                    <Meta
                        title={title}
                        description={description}
                    />
                    {/* <h3>{title}</h3>
                    <p>{description}</p>
                    <br/>
                    <h6>Source: {url}</h6> */}
                </Card>
            </a>
        </>
    )
}
export default NewsCard;