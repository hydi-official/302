import { useEffect, useRef, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';
import { FaUser } from 'react-icons/fa'; // Import profile icon
import { BiMenu } from 'react-icons/bi';
import { authContext } from '../../context/AuthContext';

const navLinks = [
    { path: '/home', display: 'Home' },
    { path: '/doc', display: 'Find a Doctor' },
    { path: '/services', display: 'Services' },
    { path: '/contact', display: 'Contact' },
    { path: '/about', display: 'About' }
];

const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const { user, role, token } = useContext(authContext);

    const handleStickyHeader = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header');
            } else {
                headerRef.current.classList.remove('sticky__header');
            }
        });
    };

    useEffect(() => {
        handleStickyHeader();
        return () => window.removeEventListener('scroll', handleStickyHeader);
    }, []);

    const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

    return (
        <header className="header flex items-center bg-white shadow-md py-4" ref={headerRef}>
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <div>
                    <img src={logo} alt="Company Logo" className="h-12" />
                </div>

                {/* Menu */}
                <div className="navigation flex-1" ref={menuRef} onClick={toggleMenu}>
                    <ul className="menu flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-primaryColor text-lg font-semibold"
                                            : "text-textColor text-lg font-medium"
                                    }
                                >
                                    {link.display}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Nav Right */}
                <div className="flex items-center gap-4">
                    {token && user ? (
                        <Link to={role === 'doctor' ? '/doctors/profile/me' : '/users/profile/me'}>
                            <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
                                <FaUser className="text-primaryColor text-2xl" />
                            </div>
                        </Link>
                    ) : (
                        <Link to="/profile">
                            <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full cursor-pointer">
                                <FaUser className="text-textColor text-2xl" />
                            </div>
                        </Link>
                    )}
                    <span className="md:hidden" onClick={toggleMenu}>
                        <BiMenu className="w-6 h-6 cursor-pointer" />
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;
