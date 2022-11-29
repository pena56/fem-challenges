import { Routes, Route } from "react-router-dom";

import NewsHomePage from "./NewsHomepage";

function App() {
  return (
    <Routes>
      <Route path="/news" element={<NewsHomePage />} />
    </Routes>
  );
}

export default App;
