import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contest from "../Contest";

import Code from "../Code" 
import Profile from "./Profile";
import Sheet from "../Sheet";

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contest/:id" element={<Contest/>} />
            <Route path="/dsa-practice" element={<Sheet/>} />
            <Route path="/code-editor" element={<Code/>} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    </Router>
);

export default App;
   




 