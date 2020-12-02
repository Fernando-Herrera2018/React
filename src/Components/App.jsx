import React from "react"
import { Router } from '@reach/router'
import Home from '../Pages/Home.jsx'
import Table from '../Pages/Table.jsx'
import Dashboard from '../Pages/Dashboard.jsx'
import Layout from './Layout.jsx'
import Hook from '../Pages/Hook.jsx'
import './styles/background.css'
function App() {
    return (
        <Layout>
            <Router>
                <Home path="/" />
                <Table path="table" />
                <Dashboard path="dashboard" />
                <Hook path = "Hook" />
            </Router>
        </Layout>

    );
}

export default App;