import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=> {
    
    const [articles, setArticles]= useState([])
    const [page, setPage]= useState(1)
    const [loading, setLoading]= useState(true)
    const [totalResults, settotalResults]= useState(0)

    

    const fetchMoreData = async () => {
        console.log("fetchMoreData called");
        if (articles.length < totalResults) {
            
            setLoading({
              loading:true
            })
            const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            setArticles(articles.concat(parsedData.articles))
            setLoading(
               false
            )
            settotalResults( parsedData.totalResults)
            setPage( page + 1)
            
        } else {
            console.log("No more data to fetch");
        }
    };
useEffect(()=>{
updateNews();
 // eslint-disable-next-line 
},[])
    const  updateNews= async()=> {
      props.setProgress(10);
      // console.log("setprogress called")
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=1&pageSize=${props.pageSize}`;
        setLoading(
          true
       )
        let data = await fetch(url);
        let parsedData = await data.json();
        props.setProgress(30);
        setArticles(parsedData.articles)
            setLoading(
               false
            )
            settotalResults( parsedData.totalResults)
            setPage( 1)
      
        props.setProgress(100);
    }


   
        return (
            <>
                <h1 className="text-center col-my-3" style={{
                  margin:"34px 0px", marginTop:"100px"
                }}>NewsMonkey-Top headlines!</h1>
                
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length <= totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row col-my-3">
                            {articles.map((element, index) => {
                                return (
                                    <div className="col-md-4" key={`${element.url}-${index}`} >
                                        <NewsItem
                                            title={element.title ? element.title.slice(0, 45) : ""}
                                            description={element.description ? element.description.slice(0, 88) : ""}
                                            imageUrl={element.urlToImage}
                                            newsUrl={element.url}
                                            author={element.author ? element.author : "unknown"}
                                            date={element.publishedAt}
                                            source={element.source.name}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                        {/* {loading && <Spinner />} */}
                    </div>
                </InfiniteScroll>
            </>
        );
    }
export default News
News.defaultProps = {
  country: "in",
  pageSize: 5,
  category: "science",
  
};
News.propTypes = {
  country: propTypes.string,
  category: propTypes.string,
  pageSize: propTypes.number,
  setProgress: propTypes.func
};