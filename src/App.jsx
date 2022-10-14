import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Seat from "./pages/Seats";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/view:id" element={<Seat />} />
            </Routes>
        </Router>
    );
};

export default App;
