import { Col, Row } from "antd";
import axios from "axios";
import { useState } from "react";
import NewsCard from "../../components/card/Card";
import SearchBox from "../../components/searchBox/SearchBox";
import SelectBox from "../../components/select/SelectBox";
import { articleType } from "../home/type/homeType";
import { categories } from "./helper/categories";
import { countries } from "./helper/countries";

const Headlines = () => {
    const[article, setArticle] = useState<articleType>();
    const[keyword, setKeyword] = useState<string>("");
    const[country, setCountry] = useState<string>("");
    const[category, setCategory] = useState<string>("");

    const fetchData = async() => {
        await axios
        .get(`/top-headlines`, {
            params: {
                q: keyword,
                country: country,
                category: category
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
        if( keyword !== "" || country !== "" ){
            fetchData();
        }
    }

    const handleCountryChange = (value: string) => {
        setCountry(value);
        if(article!==undefined){
            fetchData();
        }
    }

    const handleCategoryChange = (value: string) => {
        setCategory(value);
        if(article!==undefined){
            fetchData();
        }
    }

    if(article !== undefined){
    return(
        <>  
            {console.log(article)}
            <div className="site-layout-content">
                <div style={{display: 'flex', justifyContent: 'center', marginBottom: '30px'}}>
                    <h1>Top Headline News</h1>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', marginBottom: '30px'}}>
                    <div style={{marginRight: '30px'}}>
                        <SearchBox onChange={onChange} onPressEnter={onSearch} onSearch={onSearch}/>
                    </div>
                    <SelectBox handleChange={handleCountryChange} options={countries} placeholder="Country"/>
                    <SelectBox handleChange={handleCategoryChange} options={categories} placeholder="Category"/>
                </div>
                
                {article.totalResults===0 
                    ?
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '30px'}}>
                            <h1>No Result Available</h1>
                        </div>
                    : 
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
                }
            </div>
        </>
    )
    } else {
        return (
            <>
                <div style={{display: 'flex', justifyContent: 'center', marginBottom: '30px'}}>
                    <h1>Top Headline News</h1>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', marginBottom: '30px'}}>
                    <div style={{marginRight: '30px'}}>
                        <SearchBox onChange={onChange} onPressEnter={onSearch} onSearch={onSearch}/>
                    </div>
                    <SelectBox handleChange={handleCountryChange} options={countries} placeholder="Country"/>
                    <SelectBox handleChange={handleCategoryChange} options={categories} placeholder="Category"/>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '30px'}}>
                    <h1>Please Enter a keyword</h1>
                </div>
            </>
        )
    }
}
export default Headlines;