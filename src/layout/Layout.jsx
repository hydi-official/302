// src/components/Layout.js
import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Routers from '../routes/Routers';
import AuthCards from '../pages/AuthCards';

const Layout = () => {
    return (
        <>
            <Header />
            <AuthCards /> {/* Add the AuthCards component here */}
            <main>
                <Routers />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
