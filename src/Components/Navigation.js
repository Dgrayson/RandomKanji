import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'; 
import { render } from '@testing-library/react';

function Navigation(){

    const [mode, SetMode] = useState("All"); 
    
    return(
        <div>
            <select>
                <option>All</option>
                <option>Grade 1</option>
                <option>Grade 2</option>
                <option>Grade 3</option>
                <option>Grade 4</option>
                <option>Grade 5</option> 
            </select>
            <button>Give me another</button>
        </div>
    );
}

export default Navigation;