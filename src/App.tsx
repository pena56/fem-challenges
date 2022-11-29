import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import NewsHomePage from "./NewsHomepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<NewsHomePage />} />
    </Routes>
  );
}

export default App;
