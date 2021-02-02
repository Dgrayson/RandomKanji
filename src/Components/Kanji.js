import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'; 

function Kanji() {

    const [data, setData] = useState({ kanji: [] });

    useEffect(async () => {
        /*const result = await axios(

        ); */

        setData({
            "kanji": "丸",
            "grade": 2,
            "stroke_count": 3,
            "meanings": [
                "round",
                "full (month)",
                "perfection",
                "-ship",
                "pills",
                "make round",
                "roll up",
                "curl up",
                "seduce",
                "explain away"
            ],
            "kun_readings": [
                "まる",
                "まる.める",
                "まる.い"
            ],
            "on_readings": [
                "ガン"
            ],
            "name_readings": [
                "ま",
                "わ",
                "わに"
            ],
            "jlpt": 2,
            "unicode": "4e38",
            "heisig_en": "round"
        });
    }, []);

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
                        {data.kun_readings.map((item) =>
                            <li className="kun-readings">{item}</li>
                        )}
                    </ul>
                </div>

                <div>
                    <h2>On-yomi Readings: </h2>
                    <ul>
                        {data.on_readings.map((item) =>
                            <li>{item}</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Kanji;