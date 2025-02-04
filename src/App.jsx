import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Query1 from "./pages/query1";
import Query2 from "./pages/Query2";

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route index element={<Query1></Query1>}></Route>
                <Route path="/query2" element={<Query2></Query2>}></Route>
            </Routes>
        </div>
    );
}

export default App;
