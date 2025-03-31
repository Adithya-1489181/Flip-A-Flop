import './index.css';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';


function Home() {
    return (
        <div id="Background">
            <div id="Flip-A-Flop">Flip-A-Flop</div>
            <div id="MCMG">Memory Card Matching Game</div>
            <div id="Menu">
                <button className="Level" id="Level1">
                    Level 1
                </button>
                <button className="Level" id="Level2">
                    Level 2
                </button>
                <button id="About">
                    About
                </button>
            </div>
        </div>
    );
}

export default Home;