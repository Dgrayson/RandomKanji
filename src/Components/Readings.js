import React, { useState, useEffect } from 'react';
import '../App.css'; 

const KunyomiReading = ({data}) =>{
    return (
        <div id="kun-readings">
            <h2>Kunyomi Readings:</h2>

            <ul class="kun-readings-list">
                {
                    data.kun_readings != null || data.kun_readings == []
                        ? data.kun_readings.map((item) => <li className="kun-entry">{item}</li>) 
                        : <li>No data found</li>
                }
            </ul>
        </div>
    )
}

const OnyomiReading = ({data}) =>{
    return (
        <div >
            <h2>On-yomi Readings: </h2>
            <ul class="on-readings-list">
                {
                    data.on_readings != null || data.on_readings == []
                        ? data.on_readings.map((item) =><li>{item}</li>)
                        : <li>No data found</li>
                }
            </ul>
        </div>
    )
}

const Readings = ({data}) =>{

    return (
        <div class="readings">
            <div id="kun-readings">
                <KunyomiReading  data={data} />
            </div>
            
            <div id="on-readings">
                <OnyomiReading data={data} />
            </div>
        </div>
    )
}

export default Readings; 