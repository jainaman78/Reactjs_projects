import React, {useState} from 'react'

export default function TextForm(props) {
    const handle =()=>{
        let newtext=text.toUpperCase();
        settext(newtext);

    }
    const Handleonchange =(event)=>{
        settext(event.target.value);

    }
    const [text, settext] = useState("Enter text Here");
    
    return (
        <div>
            <h1>{props.heading}</h1>
            <div class="mb-3">
                <label for="My area" class="form-label">{}</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" value={text} onChange={Handleonchange} rows="10"></textarea>
            </div>
            <button type="button" class="btn btn-dark" onClick={handle}>Uppercase</button>

        </div>
    )
}
