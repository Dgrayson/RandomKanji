import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'; 

function Kanji() {

    let allKanji = []
    const [data, setData] = useState({ });
    const [isBusy, setBusy] = useState(true); 
    const [mode, setMode] = useState("All"); 

    useEffect(async () => {
        getKanji(); 
    }, []);

    function changeMode(e){
        const mode = e.target.value; 

        switch (mode) {
            case "All":
                setMode("All");
                break;
            case "Grade 1":
                setMode("Grade 1");
                break;
            case "Grade 2":
                setMode("Grade 2");
                break;
            case "Grade 3":
                setMode("Grade 3");
                break;
            case "Grade 4":
                setMode("Grade 4");
                break;
            case "Grade 5":
                setMode("Grade 5");
                break;
            default: 
                setMode("All"); 
                break; 
        }
    }

    async function getKanji(e){

        setBusy(true); 

        var response;

        switch (mode) {
            case "All":
                response = await Promise.all([axios.get("http://kanjiapi.dev/v1/kanji/all")]);
                break;
            case "Grade 1":
                response = await Promise.all([axios.get("http://kanjiapi.dev/v1/kanji/grade-1")]);
                break;
            case "Grade 2":
                response = await Promise.all([axios.get("http://kanjiapi.dev/v1/kanji/grade-2")]);
                break;
            case "Grade 3":
                response = await Promise.all([axios.get("http://kanjiapi.dev/v1/kanji/grade-3")]);
                break;
            case "Grade 4":
                response = await Promise.all([axios.get("http://kanjiapi.dev/v1/kanji/grade-4")]);
                break;
            case "Grade 5":
                response = await Promise.all([axios.get("http://kanjiapi.dev/v1/kanji/grade-5")]);
                break;
            default: 
                response = [{}]; 
                break; 
        }

        let num = Math.floor(Math.random() * Math.floor(response[0].data.length));

        const kanji = await axios.get("http://kanjiapi.dev/v1/kanji/" + response[0].data[num]);

        setData(
            kanji.data
        );

        setBusy(false); 
    }

    if(isBusy){
        return (<div className="loading">Loading...</div>); 
    }
    else{
        return (
            <div>
                <div>
                    <h2>Definitions</h2>

                    <div className="readings">
                        {data.meanings.map((item) =>
                            <div className="meanings-list">{item}</div>
                        )}
                    </div>
                </div>
                <div className="KanjiData">
                    {data.kanji}
                </div>

                <div className="readings">
                    <div>
                        <h2>Kunyomi Readings:</h2>

                        <ul class="kun-readings">
                            {
                                data.kun_readings != null || data.kun_readings == []
                                    ? data.kun_readings.map((item) => <li className="kun-readings">{item}</li>) 
                                    : "No data found"
                            }
                        </ul>
                    </div>

                    <div>
                        <h2>On-yomi Readings: </h2>
                        <ul class="on-readings">
                            {
                                data.on_readings != null || data.on_readings == []
                                    ? data.on_readings.map((item) =><li>{item}</li>)
                                    : "No data found"
                            }
                        </ul>
                    </div>
                </div>

                <select id="filter" onChange={changeMode}>
                    <option>All</option>
                    <option>Grade 1</option>
                    <option>Grade 2</option>
                    <option>Grade 3</option>
                    <option>Grade 4</option>
                    <option>Grade 5</option>
                </select>
                <button className="randomButton" onClick={getKanji}>Give me another</button>
            </div>
        );
    }
}

export default Kanji;