
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/Footer/NavBar/NavBar';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>


            <Toaster />
        </div>
    );
};

export default MainLayout;