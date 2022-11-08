import axios from "axios";
import { useEffect, useState } from "react";
import NewsCard from "../../components/card/Card";
import SearchBox from "../../components/searchBox/SearchBox";
import "./style/home.css";
import { articleType } from "./type/homeType";

const Home = () => {
    const[article, setArticle] = useState<articleType>();
    const[keyword, setKeyword] = useState<string>("Indonesia");

    const fetchData = async() => {
        await axios
        .get(`/everything`, {
            params: {
                q: keyword
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

    // useEffect(() => {
    //     fetchData();
    // }, [keyword]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setKeyword(value);
    }

    const onPressEnter = () => {
        fetchData();
    }

    if(article !== null){
    return(
        <>
            <SearchBox onChange={onChange} onPressEnter={onPressEnter}/>
            {article?.articles.map((item, index)=>(
                <NewsCard 
                    key={index} 
                    title={item.title} 
                    description={item.description} 
                    url={item.url} 
                    publishedAt={item.publishedAt} 
                />
            ))}
        </>
    )}
    else {
        return <>Fill in Keyword</>
    }
}
export default Home;