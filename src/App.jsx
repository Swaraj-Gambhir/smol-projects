import React from 'react';
import Accordian from './components/accordian/index.jsx';
import RandomColor from './components/random-color/index.jsx';
import StarRating from './components/star-rating/index.jsx';
import ImageSlider from './components/image-slider/index.jsx';
import LoadMoreData from './components/load-more-data/index.jsx';
import TreeView from './components/tree-view/index.jsx';
import {menus} from './components/tree-view/data.js';
function App() {
 

  return (
    <>
    {/* <Accordian /> */}
    {/* <RandomColor /> */}
    {/* < StarRating/> */}
    {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"}/>
     */}
     {/* <LoadMoreData /> */}
     <TreeView menus={menus}/>
    </>
  )
}

export default App
