import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'

// 处理加载报错
window.addEventListener('vite:preloadError', () => {
  window.location.reload()
})

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
