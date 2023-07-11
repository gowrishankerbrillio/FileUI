import React, { useRef, useState } from "react";
import UploadPopup from "./UploadPopup";

const FileStorage = () => {
    const input = useRef();
    const output = useRef();
    const inputVal = () =>{
        let val = input.current.value
        output.current.value = val;
        input.current.value = '';
    }
    const clearVal = () =>{
        output.current.value = '';
    }

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(!showModal);
    }
    return (
        <>
        <div style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
            <div className="h3">Verizon-5G</div>

            <div style={{display: "flex", justifyContent: "space-between"}}>
                <button className="buttonBorder" onClick={openModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"/></svg>
                </button>
                <UploadPopup setShowModal={setShowModal} showModal={showModal}/> &nbsp;
                <button className="buttonBorder">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z"/></svg>
                </button>
            </div>
        </div>
        <div style={{display:'flex',justifyContent:'space-evenly',padding:'80px'}}>
            <textarea ref={input} id="input" maxLength="60000" style={{border:'1px solid black',resize:'none',padding:'20px',borderRadius:'50px',height:'50vh',width:'20%'}} type="text" placeholder={`Input Box ${"\n \n"}User should able to enter an XML message in the box(set max_length allowed to 60000)`} />
            
            {/* </div> */}
            <div style={{display:'block',marginTop:'10%'}}>
            <div>
                <button onClick={inputVal} style={{padding:'5px 15px'}} className="b-1">send</button>
            </div><br />
            <div>
                <button onClick={clearVal} style={{padding:'5px 15px'}}  className="b-1">clear</button>
            </div>
            </div>
            <textarea ref={output} id="output" disabled maxLength="60000" style={{border:'1px solid black',resize:'none',padding:'20px',borderRadius:'50px',height:'50vh',width:'20%'}} type="text" placeholder={`Output Box ${"\n \n"}Make the box here non-editable`} />
                
            {/* </div> */}



        </div>
        </>
    );
}

export default FileStorage;