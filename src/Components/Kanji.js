import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'; 

function Kanji() {

    const [data, setData] = useState({ });
    const [isBusy, setBusy] = useState(true); 

    useEffect(async () => {
        /*const result = await axios(

        ); */

        setData({
            "kanji": "蛍",
            "grade": 8,
            "stroke_count": 11,
            "meanings": [
                "lightning-bug",
                "firefly"
            ],
            "kun_readings": [
                "ほたる"
            ],
            "on_readings": [
                "ケイ"
            ],
            "name_readings": [],
            "jlpt": 1,
            "unicode": "86cd",
            "heisig_en": "lightning-bug"
        });

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
                        <ul>
                            {data.meanings.map((item) =>
                                <li className="meanings-list">{item}</li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="KanjiData">
                    {data.kanji}
                </div>

                <div className="readings">
                    <div>
                        <h2>Kunyomi Readings:</h2>

                        <ul>
                            {
                                data.kun_readings.map((item) =>
                                    <li className="kun-readings">{item}</li>
                                )
                            }
                        </ul>
                    </div>

                    <div>
                        <h2>On-yomi Readings: </h2>
                        <ul>
                            {
                                data.on_readings.map((item) =>
                                    <li>{item}</li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Kanji;