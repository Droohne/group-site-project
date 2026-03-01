import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import News from "./pages/News/News"
import GroupList from "./pages/GroupList/GroupList"
import Teachers from "./pages/Teachers/Teachers"
import Schedule from "./pages/Schedule/Schedule"
import Contacts from "./pages/Contacts/Contacts"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<News />} />
            <Route path="/group" element={<GroupList />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
