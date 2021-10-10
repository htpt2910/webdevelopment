import React, { useState } from "react";
// import "./Profile_manager.css";

const Appi = () => {
    const [imgPreview, setImgPreview] = useState(null);
    const [error, setError] = useState(false);

    const handleImageChange = (e) => {
        setError(false);
        const selected = e.target.files[0];
        const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
        if (selected && ALLOWED_TYPES.includes(selected.type)) {
            let reader = new FileReader();
            reader.onloadend = () => {
                setImgPreview(reader.result);
            };
            reader.readAsDataURL(selected);
        } else {
            setError(true);
        }
    };

    return (
        <>
            <div className="container-nav">
                <div id="branding">
                    <h1>Obstacles Crossed</h1>
                </div>

            </div>

            <div className="userprofile">
                <h1>user profile</h1>
            </div>

            <div className="App">
                <div className="container-image">
                    {error && <p className="errorMsg">File not supported</p>}
                    <div
                        className="imgPreview"
                        style={{
                            background: imgPreview
                                ? `url("${imgPreview}") no-repeat center/cover`
                                : "#131313"
                        }}
                    >
                        {!imgPreview && (
                            <>
                                <p>Add an image</p>
                                <label htmlFor="fileUpload" className="customFileUpload">
                                    Choose file
                                </label>
                                <input type="file" id="fileUpload" onChange={handleImageChange} />
                                <span>(jpg, jpeg or png)</span>
                            </>
                        )}

                        <div className="remove">
                            {imgPreview && (
                                <button onClick={() => setImgPreview(null)}>Remove image</button>
                            )}
                        </div>
                    </div>

                </div>
                <div className="box">

                    <label for="nickname">nickname :</label>
                    <input id="nickname" type="text" name="" value="btn2021" /><br /><br />

                    <label for="mail">mail :</label>
                    <input id="mail" type="Email" name="" value="btn@gmail.com" /><br /><br />

                    <label for="name">name :</label>
                    <input id="name" type="text" name="" value="Best Team Name" /><br /><br />

                    <label for="sex">sex :</label>
                    <select id="sex" name="sex">
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="other">other</option>

                    </select><br /><br />

                    <label for="age">age :</label>
                    <input id="age" type="number" name="" min="6" max="100" /><br /><br />


                    <label for="nationality">nationality :</label>
                    <select id="nationality" name="nationality">
                        <option value="Vietnam">Vietnam</option>
                        <option value="Japan">Japan</option>
                        <option value="South Korea">South Korea</option>
                        <option value="US">US</option>
                        <option value="China">China</option>
                        <option value="other">other</option>
                    </select><br /><br />

                </div>
                <div className="save_cancel">
                    <button id="cancel" name="cancel">cancel</button>

                    <button id="done" name="done">save</button>
                </div>

            </div>
        </>
    );
};

export default Appi;