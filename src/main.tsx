import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './App'
import './index.css'
import { FormProvider } from './contexts/FormContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <FormProvider>
    <AppRouter />
  </FormProvider>
)
