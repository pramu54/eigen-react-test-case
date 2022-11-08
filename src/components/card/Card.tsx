import { Card } from 'antd';
import { CardType } from './types/CardTypes';
import "antd/lib/card/style/index.css";
import moment from 'moment';

const NewsCard = ({title, description, url, publishedAt}: CardType) => {
    const date = moment(publishedAt).format('DD MMM, YYYY');
    return(
        <>
            <Card 
                title={date} 
                extra={<a href='#'>More</a>} 
                style={{ width: 300 }}
            >
                <h3>{title}</h3>
                <p>{description}</p>
                <br/>
                <h6>Source: <a href={url}>{url}</a></h6>
            </Card>
        </>
    )
}
export default NewsCard;