import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import CounterStore from './redux-with-reactjs/app/store.js'
import PostStore from './react-redux-toolkit/app/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={PostStore}> {/* {CounterStore} for redux-with-reactjs */}
      <App />
    </Provider>
  </StrictMode>,
)
