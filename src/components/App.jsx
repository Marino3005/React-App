import '../assets/css/styles.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import UsersList from './UsersList';
import Products from './Products.jsx';
import UltimoUsuario from './UltimoUsuario';
import Category from './category';


function App(){
return (
    <>
       <Header />
        <Products />
        <Category />
       <UsersList />
       <UltimoUsuario />
       <Footer />
    </>

)

}

export default App;
