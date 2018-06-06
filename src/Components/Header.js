import React from 'react';
import HeaderIMG from './images/Header-img.png';
import './Header.css';

// class Header extends Component {
//     render(){
//         return (
//             <div>
//                 <h1>HEADER</h1>
//             </div>
//         )
//     }
// }

const Header = () => (
    <div id="header">
        <div className="container">
            <div className="content">
                <img src={HeaderIMG} alt="computer" />
                <div className="right">
                    <h2>
                        <span className="white">powerfully simple</span> with a <br /> <span className="white">squeeky clean</span> design.
                    </h2>
                    <p>
                        Find out how you can offer quick and powerful solutions to your customers now!
                    </p>
                    <button>
                        Learn more
                    </button>
                </div>
            </div>
            <div className="ad">
                <h2>create a <span className="white">powerful</span> solution now!</h2>
                <button>
                    get started
                </button>
            </div>
        </div>
    </div>
)

export default Header;