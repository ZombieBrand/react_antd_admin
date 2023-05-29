import ReactDom from 'react-dom/client'
import Loading from './loading'
import { SpinProps } from 'antd'
let count = 0
export const showLoading = (loadingProps?: SpinProps) => {
    if (count === 0) {
        const loading = document.createElement('div')
        loading.setAttribute('id', 'loading')
        document.body.appendChild(loading)
        ReactDom.createRoot(loading).render(<Loading {...loadingProps} />)
    }
    count++
}

export const hideLoading = () => {
    if (count < 0) return
    count--
    if (count === 0) {
        const loading = document.getElementById('loading')
        loading?.remove()
    }
}
