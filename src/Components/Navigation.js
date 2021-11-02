import React, { useState, useEffect } from 'react';
import '../App.css'; 

const Navigation = (props) => {

    const [navMode, SetMode] = useState("all"); 

    function changeMode(e){
        const mode = e.target.value; 
        SetMode(mode); 
        console.log(mode);
    }
    
    return(

        <div id="nav-button">
            <select id="filter" onChange={changeMode} value={navMode}>
                <option value="all">All</option>
                <option value="grade-1">Grade 1</option>
                <option value="grade-2">Grade 2</option>
                <option value="grade-3">Grade 3</option>
                <option value="grade-4">Grade 4</option>
                <option value="grade-5">Grade 5</option>
                <option value="grade-6">Grade 6</option>
            </select>
            <button className="randomButton" onClick={props.SetMode(navMode)}>Give me another</button>
        </div>
    );
}

export default Navigation;