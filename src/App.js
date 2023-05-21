import './App.css';
import Header from './pages/Header/Header';
import Main from './pages/Main/Main';
import Feature from "./pages/Features/Feature";
import Games from "./pages/Games/Games";
import InTheBox from "./pages/Inthebox/InTheBox";
import Accessories from "./pages/Accessories/Accessories";
import Contacts from "./pages/Contacts/Contacts";
import Footer from "./pages/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Feature/>
            <Games/>
            <InTheBox/>
            <Accessories/>
            <Contacts/>
            <Footer/>

        </div>
    );
}

export default App;
//<Header/>
//<Main/>
//
//             <Games/>
//             <InTheBox/>
//             <Accessories/>
//             <Contacts/>
//