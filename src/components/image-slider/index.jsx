import React from "react";
import { useState,useEffect } from "react";
import {BsArrowLeftCircle,BsArrowRightCircle, BsLayoutTextWindowReverse} from 'react-icons/bs';
import './styles.css';
export default function ImageSlider({url,limit})
{
    const [images,setImages]=useState([]);
    const [currentSlide,setCurrentSlide]=useState(0);
    const[errorMsg,setErrorMsg]=useState(null);
    const[loading, setLoading] = useState(false);
    async function fetchImages(getUrl,limit){
        try{
            const response = await fetch(`${getUrl}?page=1&limit=${limit}`);
            const data =await response.json();
            if(data)
            {
                setImages(data);
                setLoading(false);
            }
        }
        catch(e)
        {
            setErrorMsg(e.message);
            setLoading(false);

        }
    }
    useEffect(()=>{if (url!=='') fetchImages(url,limit) },[url]);
    if(loading)
    {
        return <div> Loading data please wait</div>;
    }
    if(errorMsg!==null)
    {
        return <div>Error Occured</div>
    }
    function handlePrevious()
    {
        setCurrentSlide(currentSlide === 0? images.length -1 : currentSlide-1);

    }
    function handleNext()
    {
        setCurrentSlide(currentSlide === images.length-1? 0 : currentSlide+1);

    }
    return (<div className="container">
        <BsArrowLeftCircle className="arrow arrow-left" onClick={handlePrevious}/>
        {
            images&& images.length?
            images.map((imageItem,index) => (
                <img
                key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className={currentSlide === index ? "current-image" : "current-image hidecurrent-image"}/>
            ))
            :null}
        <BsArrowRightCircle className="arrow arrow-right" onClick={handleNext}/>
        <span className='circle-indicators'>
            {
                images && images.length ?
                images.map((_,index)=> <button key={index}
                className={currentSlide === index ? "current-indicator" : "current-indicator inactive"} onClick={()=> setCurrentSlide(index)}></button>) : null
            }
        </span>
    </div>)
}