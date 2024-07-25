import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CssModules } from './assets/components/CssModules.tsx'
import StyledTsx from './assets/components/Styled.tsx'
import StyledComponents from './assets/components/StyledComponents.tsx'
import Emotion from './assets/components/Emotion.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <CssModules />
    <StyledTsx />
    <StyledComponents />
    <Emotion />
  </React.StrictMode>,
)
