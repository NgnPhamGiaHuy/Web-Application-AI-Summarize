import React from "react";

import './App.css';
import {Hero, Demo} from "./components";

const App = () => {
    return (
        <main>
            <div className="main">
                <div className="gradient"></div>
            </div>

            <div className="app">
                <Hero/>
                <Demo/>
            </div>
        </main>
    )
};

export default App;