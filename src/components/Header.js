import React from 'react';

const Header = () => {
    // const [navbar, setNavbar] = useState(true);

    // const NavbarHandler = (e) => {
    //     e.preventDefault();
    //     setNavbar(false);        
    // }


    return (
        <header className="bg-indigo-300 container h-20 shadow-md">
            <div className="flex h-full justify-between text-center items-center">
                <button className="w-20 h-20 bg-green-200" onClick="">B</button>
                <div className="w-16 h-16 bg-blue-200 rounded-full" >1</div>
                <div className="w-16 h-16 bg-red-200 rounded-full" >2</div>
                <div className="w-16 h-16 bg-yellow-200 rounded-full" >3</div>
                <div className="w-16 h-16 bg-purple-200 rounded-full" >4</div>
            </div>
            <ul className="nav-list hidden">
                <li>Start</li>
                <li>About NGO's</li>
                <li>About the app</li>
                <li>AGB</li>
                <li>Impressum</li>
            </ul>
        </header>

    )
}

export default Header;


