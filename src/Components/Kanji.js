import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'; 

function Kanji() {

    let allKanji = []
    const [data, setData] = useState({ });
    const [isBusy, setBusy] = useState(true); 

    useEffect(async () => {

        const response = await Promise.all([axios.get("http://kanjiapi.dev/v1/kanji/all")]); 

        console.log(response); 
        console.log("Data is: " + response[0].data); 

        console.log(response.length); 

        let num = Math.floor(Math.random() * Math.floor(response[0].data.length)); 
        
        console.log(num); 

        const kanji = await axios.get("http://kanjiapi.dev/v1/kanji/" + response[0].data[num]); 

        console.log(kanji.data); 

        setData(
            kanji.data
        );

        setBusy(false); 
    }, []);

    if(isBusy){
        return (<div>Loading...</div>); 
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

                        <ul>
                            {data.kun_readings != null || data.kun_readings == []
                                ? data.kun_readings.map((item) => <li className="kun-readings">{item}</li>) 
                                : "No data found"}
                        </ul>
                    </div>

                    <div>
                        <h2>On-yomi Readings: </h2>
                        <ul>
                            {data.on_readings != null || data.on_readings == []
                                ? data.on_readings.map((item) =><li>{item}</li>)
                                : "No data found"
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Kanji;