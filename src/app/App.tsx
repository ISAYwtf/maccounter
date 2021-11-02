import React from 'react'
import './App.css'
import Header from '@components/Header/Header'
import Sidebar from '@components/Sidebar/Sidebar'
import ContentPage from '@components/ContentPage/ContentPage'

const App: React.FC = () => (
    <div className="app" data-mode="light">
        <Header />
        <section className="app-wrap">
            <Sidebar />
            <ContentPage />
        </section>
    </div>
)

export default App
