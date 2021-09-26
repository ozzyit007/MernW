import React from 'react';


import NewsFeedNews from './NewsFeedItems';
import './NewsFeedList.css';


const NewsFeedList = props =>{

  if (props.items.length === 0)     //idea is to output the list of newss so we are cheing that if ew already have newss list data
    {
      return (<div className ="news-list center">
//will provide data soon
        </div>
      );
    }
    else return <ul className="news-list">
        {props.items.map(news=> <newsItem
          key={news.id}
          id={news.id}
          image={news.imageUrl}
          title={news.title}
          description ={news.description}
          address={news.address}
          creatorId={news.creator}
          cordinates= {news.location}/>)}
    </ul>
};


export default NewsFeedList;
