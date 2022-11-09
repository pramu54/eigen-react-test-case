import { Col, Row } from "antd";
import axios from "axios";
import { useState } from "react";
import NewsCard from "../../components/card/Card";
import SearchBox from "../../components/searchBox/SearchBox";
import "antd/lib/grid/style/index.css";
import { articleType } from "./type/homeType";
import SelectBox from "../../components/select/SelectBox";
import "antd/lib/select/style/index.css";
import "antd/lib/dropdown/style/index.css";

const Home = () => {
    const[article, setArticle] = useState<articleType>();
    const[keyword, setKeyword] = useState<string>("");
    const[sortBy, setSortBy] = useState<string>("relevancy");

    const fetchData = async() => {
        await axios
        .get(`/everything`, {
            params: {
                q: keyword,
                sortBy: sortBy,
            },
            headers : {
                Authorization : "Bearer 9ce0ada1c9a74582943dc0072add55be"
            }})
        .then((res) => {
            const { data } = res;
            setArticle(data);
        })
        .catch((err) => {
            console.log(err.response);
        });
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setKeyword(value);
    }

    const onSearch = () => {
        if(keyword!==""){
            fetchData();
        }
    }

    const handleChange = (value: string) => {
        setSortBy(value);
        if(article!==undefined){
            fetchData();
        }
    }

    const options = [
        {
        value: 'relevancy',
        label: 'Relevancy',
        },
        {
        value: 'popularity',
        label: 'Popularity',
        },
        {
        value: 'publishedAt',
        label: 'Date',
        }
    ]

    if(article !== undefined && keyword !== null){
    return(
        <>  <div className="site-layout-content">
                <div style={{display: 'flex', justifyContent: 'center', marginBottom: '30px'}}>
                    <h1>All News</h1>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', marginBottom: '30px'}}>
                    <div style={{marginRight: '30px'}}>
                        <SearchBox onChange={onChange} onPressEnter={onSearch} onSearch={onSearch}/>
                    </div>
                    <SelectBox handleChange={handleChange} options={options} placeholder="Sort By"/>
                </div>
                
                <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]} style={{padding: '35px'}}>
                    {article?.articles.map((item, index)=>(
                        <Col className="gutter-row" span={6} key={index}>
                            <NewsCard  
                                title={item.title} 
                                description={item.content} 
                                url={item.url}
                                imgUrl={item.urlToImage}
                                publishedAt={item.publishedAt} 
                            />
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    )}
    else {
        return (
            <>
                <div style={{display: 'flex', justifyContent: 'center', marginBottom: '30px'}}>
                    <h1>All News</h1>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', marginBottom: '30px'}}>
                    <div style={{marginRight: '30px'}}>
                        <SearchBox onChange={onChange} onPressEnter={onSearch} onSearch={onSearch}/>
                    </div>
                    <SelectBox handleChange={handleChange} options={options} placeholder="Sort By"/>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '30px'}}>
                    <h1>Please Enter a keyword</h1>
                </div>
            </>
        )
    }
}
export default Home;