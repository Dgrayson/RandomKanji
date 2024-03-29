import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'; 
import Readings from './Readings.js'; 
import Navigation from './Navigation.js';

function Kanji() {

    let allKanji = []
    const [data, setData] = useState({ });
    const [isBusy, setBusy] = useState(true); 
    const [mode, setMode] = useState("all");
    const baseUrl = "http://kanjiapi.dev/v1/kanji/"

    useEffect(async () => {
        GetKanji(); 
    }, [mode]);

    async function GetKanji(){

        setBusy(true); 

        var response;

        response = await Promise.all([axios.get(baseUrl + mode)]); 

        let num = Math.floor(Math.random() * Math.floor(response[0].data.length));

        const kanji = await axios.get(baseUrl + response[0].data[num]);

        setData(
            kanji.data
        );

        setBusy(false); 
    }

    if(isBusy){
        return (<div id="container"><div className="loading">Loading...</div></div>); 
    }
    else{
        
        return (
            <div id="container">
                <div className="KanjiData">
                    {data.kanji}
                </div>
                <div id="definitions">
                    <h2>Definitions</h2>

                    <div className="readings">
                        {data.meanings.map((item) =>
                            <div className="meanings-list">{item}</div>
                        )}
                    </div>
                </div>

                <Readings data={data}/>         
                <Navigation SetMode = {setMode} />
            </div>
        );
    }
}

export default Kanji;