import React, { Fragment, useEffect, useState } from "react";
import { JsonEditor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';

export function Editor({ incomingDescriptions }) {

    const [descriptions, setDescription] = useState("");
    const handleChange = (data) => {setDescription(data); };
    useEffect(() => {
        console.log(incomingDescriptions);
        setDescription(incomingDescriptions);
    },[incomingDescriptions]);

    const downloadFile = async () => {
        const fileName = "descripcion_habs";
        const json = JSON.stringify(descriptions);
        const blob = new Blob([json],{type:'application/json'});
        const href = await URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = fileName + ".json";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <Fragment>
            { descriptions !== "" && 
                <>
                <JsonEditor
                    value={descriptions}
                    onChange={handleChange}
                />
                <button
                    onClick={() => downloadFile()}>{"Descargar JSON"}
                </button>
                </>
            }
        </Fragment>
    );
}

