import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoListPage from "./todoListPage";
import WeatherPage from "./weatherPage";
const MainPage = (props) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoListPage />} />
        <Route path="/weather" element={<WeatherPage />} />
      </Routes>
    </Router>
  );
};
export default MainPage;
