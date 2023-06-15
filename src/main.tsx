import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'normalize.css/normalize.css'
import './index.css'
import { hideLoading } from '@/utils/loading'

hideLoading()
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
