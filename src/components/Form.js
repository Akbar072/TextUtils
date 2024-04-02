import React, { useState } from 'react';


export default function Form(props) {
    const handleUpClick= ()=>{
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleDownClick= ()=>{
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }
    const handleriverseClick= ()=>{
        let newText="",i;
        for(i=text.length-1; i>-1; i--)
        {
            newText+= text[i];
        }
        setText(newText);
        props.showAlert("Text is Reversed", "success");
    }
    const handleXSpace= ()=> {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space has been Removed", "success");
    }
    const handleClearClick= ()=>{
        setText('');
        props.showAlert("Text Cleared", "success");
    }
    const handleOnChange= (event)=>{
        setText(event.target.value);
    }
    
    const handleCopy= () => {
        var text= document.getElementById("Box");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");
    }
    const [text, setText] = useState("");
    // here text is state
    return (
        <>
        <div className='Conatiner' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1 >{props.heading}</h1>

            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="Box" rows="7" style={{backgroundColor:props.mode==='dark'?'#01082e':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-secondary" onClick={handleUpClick}>UpperCase</button>
            <button disabled={text.length===0} className="btn btn-secondary mx-2 my-1" onClick={handleDownClick}>LowerCase</button>
            <button disabled={text.length===0} className="btn btn-secondary mx-1 my-1" onClick={handleriverseClick}>Riverse</button>
            <button disabled={text.length===0} className="btn btn-secondary mx-1 my-1" onClick={handleCopy}>Copy</button>
            <button disabled={text.length===0} className="btn btn-secondary mx-1 my-1" onClick={handleXSpace}>Remove Extra Space</button>
            <button disabled={text.length===0} className="btn btn-secondary mx-1 my-1" onClick={handleClearClick}>Clear</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Summary</h2>
            <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length*0.008} minutes to read this</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview"}</p>

        </div>
        </>
    )
}
