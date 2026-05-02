import Sidebar from './components/layout/Sidebar'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'

export default function App() {
    return (
        <div className="layout">
            <Sidebar />

            <main className="main">
                <Header />

                <Home />

                <Footer />
            </main>
        </div>
    )
}