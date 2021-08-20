import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'; 
import { render } from '@testing-library/react';

function Navigation(){

    const [mode, SetMode] = useState("All"); 

    function changeMode(e){
        const mode = e.target.value; 
        console.log(mode); 
    }
    
    return(
        <div id="nav-button">
        <select id="filter" onChange={changeMode}>
            <option value="all">All</option>
            <option value="grade-1">Grade 1</option>
            <option value="grade-2">Grade 2</option>
            <option value="grade-3">Grade 3</option>
            <option value="grade-4">Grade 4</option>
            <option value="grade-5">Grade 5</option>
        </select>
        <button className="randomButton" /*onClick={getKanji}*/>Give me another</button>
    </div>
    );
}

export default Navigation;