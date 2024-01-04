import { useState } from "react";
import React from "react";
import data from "./data.js";
import './styles.css';

export default function Accordian()
{
    const [selected,setSelected] =useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple,setMultiple] = useState([]);
    function handleSingleSelection(getCurrentId)
    {
        console.log(getCurrentId);
        var plus = document.getElementById(`plus${getCurrentId}`);
        var old = document.getElementById(`plus${selected}`);
        if(selected===getCurrentId)
        {
            setSelected(null);
            plus.innerHTML="<h1>+</h1>";
        }
        else
        {
            setSelected(getCurrentId);
            plus.innerHTML="<h1>-</h1>";
            old.innerHTML="<h1>+</h1>";
        }
    }
    function handleMultiSelection(getCurrentId)
    {
        let cpyMultiple =[...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
        
        if(findIndexOfCurrentId === -1)
        {
            cpyMultiple.push(getCurrentId);
        }
        else 
        {cpyMultiple.splice(findIndexOfCurrentId,1);}
        setMultiple(cpyMultiple);
        console.log(findIndexOfCurrentId,multiple);
    }
    return (<div className="wrapper">
        <button className="enable" onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
        <div className="accordian">
            {
                data && data.length>0 ? data.map(dataItem=> 
                <div className="item">
                    <div   className="title" >
                        <h3>{dataItem.question}</h3>
                        <div onClick={!enableMultiSelection ?()=> handleSingleSelection(dataItem.id):()=> handleMultiSelection(dataItem.id)} id={"plus"+dataItem.id}>
                            <h1>+</h1>
                        </div>

                    </div>
                    {
                        (enableMultiSelection) ? (multiple.indexOf(dataItem.id)!== -1 ? (<div className="content">{dataItem.answer}</div>) : null) : ((selected === dataItem.id) ? (<div className="content">{dataItem.answer}</div>) : null)
                                
                    }  
                </div>):
                (<div> No Data Found!!!</div>)
            }
        </div>
    </div>);
}