import { createRoot } from 'react-dom/client'
import './loading.css'
import Loading from './loading'
let count = 0

export const showLoading = (tip = '加载中') => {
  if (count === 0) {
    const loadingEl = document.createElement('div')
    loadingEl.setAttribute('id', 'loading')
    document.body.appendChild(loadingEl)
    createRoot(loadingEl).render(<Loading tip={tip} />)
  }
  count++
}

export const hideLoading = () => {
  count--
  if (count === 0) {
    document.body.removeChild(document.getElementById('loading') as HTMLElement)
  }
}
