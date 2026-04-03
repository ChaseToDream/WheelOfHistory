

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import CelebritySelector from './components/CelebritySelector'
import Timeline from './components/Timeline'
import CelebrityStatus from './components/CelebrityStatus'
import About from './components/About'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <nav className="bg-primary text-white py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <h1 className="text-2xl font-serif font-bold">历史年轮</h1>
            <div className="flex gap-6">
              <Link to="/" className="hover:text-secondary transition-colors">首页</Link>
              <Link to="/about" className="hover:text-secondary transition-colors">关于</Link>
            </div>
          </div>
        </nav>
        
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={
              <>
                <p className="text-center text-lg mb-12">
                  滑动时间线，探索历史名人的生平
                </p>
                <CelebritySelector />
                <Timeline />
                <CelebrityStatus />
              </>
            } />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App