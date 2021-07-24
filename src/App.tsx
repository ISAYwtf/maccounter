import React from 'react'
import './App.css'
import Header from "./components/Header/Header.tsx";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () =>
    <div className="app" data-mode={"light"}>
        <Header />
        <section className={"app-wrap"}>
            {/*<div className={"sidebar"}>*/}
                <Sidebar />
            {/*</div>*/}
            <main>
            </main>
        </section>
    </div>

export default App
