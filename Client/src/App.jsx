import { BrowserRouter, Routes, Route } from 'react-router-dom'
import URLpage from './component/URLpage'
import DemoDownload from './component/DemoDownload'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<URLpage />} />
        <Route path="/download" element={<DemoDownload />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App