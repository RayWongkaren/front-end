import './App.css';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/Footer.jsx';
import Contents from './components/Contents.jsx';
import Navbar from './components/Navbar.jsx';

function App () {
    return(
        <div class="row">
            <Header />
            <Navbar />
            <Sidebar />
            <Contents />
            <Footer />
        </div>
    );
}

export default App;