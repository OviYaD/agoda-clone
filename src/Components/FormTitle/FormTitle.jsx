import React from "react";
import "./FormTitle.css";

function FormTitle({title, para}) {
    return (
        <div className="formTitle">
            <h3>{title}</h3>
            {(para)?<h6>For security, please sign in to access your information</h6>:null}
        </div>
    );
}

export default FormTitle;
