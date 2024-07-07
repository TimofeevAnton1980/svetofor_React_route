import React, {useState} from "react";
import s from "./app.module.css";
import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";
import {Green} from "./Green.jsx";
import {Red} from "./Red.jsx";
import {Yellow} from "./Yellow.jsx";
import {Main} from "./Main.jsx";

function  App() {
  const [red, red_active] = useState(null );
  const [green, green_active] = useState(null);
  const [yellow, yellow_active] = useState(null);

  return (
      <main className={s.main}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main green = {green} green_active = {green_active} />} />
            <Route path="/green" element={<Green green = {green} red = {red} yellow = {yellow} green_active = {green_active} />} />
            <Route path="/red" element={<Red green = {green} red = {red} yellow = {yellow} red_active = {red_active} />} />
            <Route path="/yellow" element={<Yellow green = {green} red = {red} yellow = {yellow} yellow_active = {yellow_active} />} />
          </Routes>
        </BrowserRouter>
      </main>
  )
}
export default App;