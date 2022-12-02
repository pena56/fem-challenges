import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import NewsHomePage from "./NewsHomepage";
import NotificationsPage from "./NotificationsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<NewsHomePage />} />
      <Route path="/notifications" element={<NotificationsPage />} />
    </Routes>
  );
}

export default App;
