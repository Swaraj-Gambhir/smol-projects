import React from 'react';
import Accordian from './components/accordian/index.jsx';
import RandomColor from './components/random-color/index.jsx';
import StarRating from './components/star-rating/index.jsx';
import ImageSlider from './components/image-slider/index.jsx';
function App() {
 

  return (
    <>
    {/* <Accordian /> */}
    {/* <RandomColor /> */}
    {/* < StarRating/> */}
    <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"}/>
    </>
  )
}

export default App
