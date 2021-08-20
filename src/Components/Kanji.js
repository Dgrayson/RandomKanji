import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'; 

function Kanji() {

    let allKanji = []
    const [data, setData] = useState({ });
    const [isBusy, setBusy] = useState(true); 
    const [mode, setMode] = useState("all"); 
    const baseUrl = "http://kanjiapi.dev/v1/kanji/"

    useEffect(async () => {
        getKanji(); 
    }, []);

    function changeMode(e){
        const mode = e.target.value; 
        console.log(mode); 
    }

    async function getKanji(e){

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
        console.log(mode);
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



                    <div id="kun-readings">
                        <h2>Kunyomi Readings:</h2>

                        <ul class="kun-readings-list">
                            {
                                data.kun_readings != null || data.kun_readings == []
                                    ? data.kun_readings.map((item) => <li className="kun-entry">{item}</li>) 
                                    : "No data found"
                            }
                        </ul>
                    </div>

                    <div id="on-readings">
                        <h2>On-yomi Readings: </h2>
                        <ul class="on-readings-list">
                            {
                                data.on_readings != null || data.on_readings == []
                                    ? data.on_readings.map((item) =><li>{item}</li>)
                                    : "No data found"
                            }
                        </ul>
                    </div>

                <div id="nav-button">
                    <select id="filter" onChange={changeMode}>
                        <option value="all">All</option>
                        <option value="grade-1">Grade 1</option>
                        <option value="grade-2">Grade 2</option>
                        <option value="grade-3">Grade 3</option>
                        <option value="grade-4">Grade 4</option>
                        <option value="grade-5">Grade 5</option>
                    </select>
                    <button className="randomButton" onClick={getKanji}>Give me another</button>
                </div>
            </div>
        );
    }
}

export default Kanji;