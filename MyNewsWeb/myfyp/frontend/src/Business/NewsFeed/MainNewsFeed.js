import React from 'react';

import NewsFeedList from './NewsFeedList';


const DUMMY_PLACES = [{
    id: 'p1',
    title:'Empire State Building',
    description: 'One of the most famous sky scrapers in the world',
    imageUrl: 'https://buffer.com/library/content/images/size/w1000/library/wp-content/uploads/2018/11/free-images-free-image.png',
    address: 'House 3/Q pechs Block 6',
    creator: 'u1'
},
{
    id: 'p2',
    title:'Empire State Building',
    description: 'One of the most famous sky scrapers in the world',
    imageUrl: 'https://buffer.com/library/content/images/size/w1000/library/wp-content/uploads/2014/05/free-images-burst.png',
    address: 'House 3/Q pechs Block 6',
    creator: 'u2'
}
];
const MainNewsFeed = () => {
  return <NewsFeedList items={DUMMY_PLACES}/>;
};
