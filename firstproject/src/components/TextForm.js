import React, {useState} from 'react'

export default function TextForm(props) {
    const handleupper =()=>{
        let newtext=text.toUpperCase();
        settext(newtext);

    }
    const handlelower =()=>{
        let newtext=text.toLowerCase();
        settext(newtext);

    }
    const Handleonchange =(event)=>{
        settext(event.target.value);

    }
    const cleartext =()=>{
        let newtext=" ";
        settext(newtext);

    }
    const [text, settext] = useState("Enter text Here");
    
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div class="mb-3">
                <label for="My area" class="form-label">{}</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" value={text} onChange={Handleonchange} rows="10"></textarea>
            </div>
            <button type="button" class="btn btn-dark mx-2" onClick={handleupper}>Uppercase</button>
            <button type="button" class="btn btn-dark mx-2" onClick={handlelower}>Lowercase</button>
            <button type="button" class="btn btn-dark mx-2" onClick={cleartext}>ClearText</button>

        </div>
        <div className='container my-3'>
            <h1>Text Summary</h1>
            <p>{text.split(" ").length} Words {text.length} length</p>
            <h1>text Preview</h1>
            <p>{text}</p>
        </div>
        </>
        
    )
}
