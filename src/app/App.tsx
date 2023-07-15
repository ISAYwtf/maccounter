import React, { FC } from 'react'
import './App.css'
import Header from '@components/Header/Header'
import Sidebar from '@components/Sidebar/Sidebar'
import { Provider } from 'react-redux'
import store from '@store/redux-store'
import { BrowserRouter } from 'react-router-dom'
import Modal from '@components/Modal/Modal'
import ContentPage from '@pages/ContentPage/ContentPage'

const App: FC = () => (
    <BrowserRouter>
        <Provider store={store}>
            <div className="app" data-theme="light">
                <Header />
                <section className="app-wrap">
                    <Sidebar />
                    <ContentPage />
                </section>
                <Modal />
            </div>
        </Provider>
    </BrowserRouter>
)

export default App
