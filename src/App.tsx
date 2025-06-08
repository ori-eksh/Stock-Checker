import { Routes, Route, Link } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import StoreSelectionPage from './pages/StoreSelectionPage'
import DealsFeedPage from './pages/DealsFeedPage'
import StoreViewPage from './pages/StoreViewPage'

function App() {
  return (
    <div>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Login</Link>
        <Link to="/stores" style={{ marginRight: '10px' }}>Stores</Link>
        <Link to="/deals" style={{ marginRight: '10px' }}>Deals</Link>
        <Link to="/store">Store View</Link>
      </nav>

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/stores" element={<StoreSelectionPage />} />
        <Route path="/deals" element={<DealsFeedPage />} />
        <Route path="/store" element={<StoreViewPage />} />
      </Routes>
    </div>
  )
}

export default App
