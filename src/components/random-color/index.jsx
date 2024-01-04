import React from 'react';
import { useState } from 'react';
export default function RandomColor()
{
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const[color,setColor]= useState('white');
    function genRandomNo(n)
    {
        return (Math.floor(Math.random()*n));
    }
    function handleCreateRandomHEXColor()
    {
        const hex=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
        let hexColor= '#';
        for(let i=0;i<6;i++)
        {
            // console.log(hex.length);
            hexColor+=hex[genRandomNo(hex.length)];}
        setColor(hexColor);

    }
    function handleCreateRandomRGBColor()
    {
        let rgbColor= 'rgb(';
        for(let i=0;i<3;i++)
        {
            // console.log(hex.length);
            rgbColor+=genRandomNo(255);
            rgbColor+=',';
        }

        rgbColor=rgbColor.slice(0,rgbColor.length-1);
        rgbColor=rgbColor.concat(')')
        setColor(rgbColor);

    }
    return(<div className='container' style={{
        width: "100vw",
        height: "100vh",
        background: color,
    }}>
        <button onClick={()=>setTypeOfColor('hex')}>Create HEX color</button>
        <button onClick={()=>setTypeOfColor('rgb')}>Create RGB color</button>
        <button onClick={typeOfColor==='hex'?handleCreateRandomHEXColor:handleCreateRandomRGBColor}>Generate Random Color</button>

        <p>Current Color Type {typeOfColor}</p>
        <h1>Color {color}</h1>
    </div> );
}