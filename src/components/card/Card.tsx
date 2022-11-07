import { Card } from 'antd';
import { CardType } from './types/CardTypes';
import "antd/lib/card/style/index.css";

const NewsCard = ({author, title, description, imgUrl, url, publishedAt}: CardType) => {
    const { Meta } = Card;

    return(
        <>
            <Card 
                cover={
                    <img
                        alt={imgUrl}
                        src={imgUrl}
                    />
                }
                title={author} 
                extra={<a href='#'>More</a>} 
                style={{ width: 300 }}
            >
                {/* <Meta
                    title={author}
                    description={title}
                /> */}
                <h3>{title}</h3>
                <p>{description}</p>
                <br/>
                <h6>Source: <a href={url}>{url}</a></h6>
            </Card>
        </>
    )
}
export default NewsCard;