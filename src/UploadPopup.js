import React, { useState } from "react";

const UploadPopup = (props) => {

    const { showModal, setShowModal } = props;

    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        // console.log("e ---->", e.target.files[0]);
        setFile(e.target.files[0]);
    }

    const handleFileSave = () => {
        const formData = new FormData();
        formData.append('file', file);
        console.log("file data ---> ", file);

        fetch('http://localhost:3001/saveFile', {
            method: "POST",
            body: formData
        })
            .then(response => {
                response.json();
            })
            .then(result => {
                console.log("result ---> ", result);
            })
            .catch(error => {
                console.log("error ---> ", error);
            })
    }

    return (
        <>
            {showModal ? (
                <div className="modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">

                                <button type="button" className="btn-close" onClick={() => { setShowModal(!showModal) }}></button>
                            </div>
                            <div className="modal-body d-flex align-items-center justify-content-center">
                                <label className="mx-5">File Name</label>
                                <input type={"file"} accept=".csv" onChange={handleFileChange} />
                            </div>
                            <div className="modal-footer d-flex justify-content-around">
                                <button onClick={() => { setShowModal(!showModal) }} className="b-1">Cancel</button>
                                <button className="b-1" onClick={handleFileSave}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (<></>)}

        </>

    );
}

export default UploadPopup;