import React from 'react';

const Header = () => {
    // const [navbar, setNavbar] = useState(true);

    // const NavbarHandler = (e) => {
    //     e.preventDefault();
    //     setNavbar(false);        
    // }


    return (
        <header className="bg-blue-600 container h-20 shadow-md fixed max-w-sm">
            <div className="h-full">
                <button className="w-20 h-20 bg-yellow-300 float-left" onClick="">B</button>
                <div className="flex h-full justify-around text-center items-center">
                    <div className="w-14 h-14 bg-yellow-300 rounded-full" >1</div>
                    <div className="w-14 h-14 bg-yellow-300 rounded-full" >2</div>
                    <div className="w-14 h-14 bg-yellow-300 rounded-full" >3</div>
                    <div className="w-14 h-14 bg-yellow-300 rounded-full" >4</div>
                </div>
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


