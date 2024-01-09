import { Provider } from "./context/context.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/homePage.jsx"
import FavPage from "./pages/favPage.jsx"

function App() {

  return (
    <Provider>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/fav" element={<FavPage />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App