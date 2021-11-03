import React from 'react'
import './App.css'
import Header from '@components/Header/Header'
import Sidebar from '@components/Sidebar/Sidebar'
import ContentPage from '@components/ContentPage/ContentPage'
import { Provider } from 'react-redux'
import store from '@store/redux-store'

const App: React.FC = () => (
    <Provider store={store}>
        <div className="app" data-mode="light">
            <Header />
            <section className="app-wrap">
                <Sidebar />
                <ContentPage />
            </section>
        </div>
    </Provider>
)

export default App
