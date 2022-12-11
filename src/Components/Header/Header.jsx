import React from 'react'
import '../Header/Header.scss'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import EastIcon from '@mui/icons-material/East';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
// import {useRef, useEffect} from 'react';


function Header() {
    //     const ref = useRef(null);

    //   useEffect(() => {
    //     const closeButton = document.getElementById('closeButton');
    //     const searchArea = document.getElementById('searchArea');

    //     closeButton.click(function(){
    //         searchArea.style.display= "none";
    //     })


    //   }, []);
    return (
        <div>
            <div className="header">
                <div className="logo">
                    <img src="https://barista.qodeinteractive.com/wp-content/uploads/2017/02/logo-2.png" alt="" />
                </div>
                <div className="menu">
                    <ul className='main-menu'>
                        <li>HOME
                            <div className="drop-menu-home drop-menu">
                                <ul>
                                    <li className='home'><Link to="/">MAIN HOME</Link></li>
                                    <li>METRO HOME</li>
                                    <li>DARK HOME</li>
                                    <li>VERTICAL SHOWCASE</li>
                                    <li>SHOP HOME</li>
                                    <li>BOXED HOME</li>
                                    <li>GRID HOME</li>
                                    <li>PARALLAX SHOWCASE</li>
                                    <li>COMING SOON</li>
                                    <li>LANDING PAGE</li>
                                </ul>
                            </div>
                        </li>
                        <li className='menu'>MENU
                            <div className="drop-menu-menu drop-menu">
                                <ul>
                                    <li>OUR MENU</li>
                                    <li>SIMPLE MENU</li>
                                </ul>
                            </div>
                        </li>
                        <li>RESERVATION
                            <div className="drop-menu drop-menu-reservation">
                                <ul>
                                    <li>BOOKING PAGE</li>
                                    <li>RESERVATION</li>
                                </ul>
                            </div>
                        </li>
                        <li>PAGES
                            <div className="drop-menu drop-menu-pages">
                                <ul>
                                    <li>ABOUT ME</li>
                                    <li>WHAT WE OFFER</li>
                                    <li>MEET OUR TEAM</li>
                                    <li>OUR PROCESS</li>
                                    <li>CONTACT US</li>
                                    <li>404 ERROR PAGE</li>
                                    <li className='menu-inside'>GALLERY <EastIcon className='arrow-right' />
                                        <div className="drop-menu-inside inside-pages">
                                            <ul>
                                                <li>STANDARD TWO COLUMNS</li>
                                                <li>STANDARD THREE COLUMNS</li>
                                                <li>STANDARD FOUR COLUMNS</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>BLOG
                            <div className="drop-menu drop-menu-blog">
                                <ul>
                                    <li className='blog'><Link to="/rightsidebar">STANDARD RIGHT SIDEBAR</Link></li>
                                    <li>STANDARD LEFT SIDEBAR</li>
                                    <li>SPLIT COLUMN</li>
                                    <li>MASONRY GRID</li>
                                    <li>MASONRY GRID</li>
                                    <li className='menu-inside'><KeyboardBackspaceIcon className='arrow-left' />POST TYPES
                                        <div className="drop-menu-inside inside-blog">
                                            <ul>
                                                <li>STANDARD TWO COLUMNS</li>
                                                <li>STANDARD THREE COLUMNS</li>
                                                <li>STANDARD FOUR COLUMNS</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>SHOP
                            <div className="drop-menu drop-menu-shop">
                                <ul>
                                    <li>SHOP WITH SIDEBAR</li>
                                    <li>SINGLE PRODUCT</li>
                                    <li className='menu-inside'><KeyboardBackspaceIcon className='arrow-left' />SHOP LIST
                                        <div className="drop-menu-inside inside-blog">
                                            <ul>
                                                <li>SHOP THREE COLUMNS</li>
                                                <li>SHOP FOUR COLUMNS</li>
                                                <li>SHOP FULL WIDTH</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className='menu-inside'><KeyboardBackspaceIcon className='arrow-left' />SHOP PAGES
                                        <div className="drop-menu-inside inside-blog">
                                            <ul>
                                                <li>CART</li>
                                                <li>MY ACCOUNT</li>
                                                <li>CHECKOUT</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className='elements'>ELEMENTS
                            <div className="drop-menu drop-menu-elements">
                                <div>
                                    <ul>
                                        <li className='elements-head'>Classic</li>
                                        <li>Accordions & Toggles</li>
                                        <li>Buttons</li>
                                        <li>Tabs</li>
                                        <li>Separators</li>
                                        <li>Image Gallery</li>
                                        <li>Call To Action</li>
                                        <li>Contact Form 7</li>
                                        <li>Google Maps</li>
                                    </ul>
                                </div>

                                <div>
                                    <ul className="elements-menu">
                                        <li className='elements-head'>Interactive</li>
                                        <li>Project Presentation</li>
                                        <li>Interactive banner</li>
                                        <li>Elements holders</li>
                                        <li>Item Showcase List</li>
                                        <li>Video Button</li>
                                        <li>Testimonials</li>
                                        <li>Blog Posts</li>
                                        <li>Team</li>
                                    </ul>
                                </div>

                                <div>
                                    <ul className="elements-menu">
                                        <li className='elements-head'>Charts and Diagrams</li>
                                        <li>Pie Charts</li>
                                        <li>Pricing Tables</li>
                                        <li>Progress Bars</li>
                                        <li>Process</li>
                                        <li>Counters</li>
                                        <li>Countdown</li>
                                        <li>Icon With Text</li>
                                        <li>Message Boxes</li>
                                    </ul>
                                </div>

                                <div>
                                    <ul className="elements-menu">
                                        <li className='elements-head'>Typography</li>
                                        <li>Headings</li>
                                        <li>Columns</li>
                                        <li>Title With Number</li>
                                        <li>Highlights</li>
                                        <li>Dropcaps</li>
                                        <li>Blockquote</li>
                                        <li>Custom Font</li>
                                        <li>List</li>
                                    </ul>
                                </div>

                            </div>
                        </li>
                        <li>|</li>
                    </ul>

                    <div className="search_side">
                        <div className="shopping-cart">
                            <ShoppingCartIcon className='header_icon cart' />
                            <div className="cart-drop-menu">
                                <h2>No products in the cart.</h2>
                            </div>                            
                        </div>
                        <div className="search-icon">
                            <SearchIcon className='header_icon' />
                        </div>
                        <div className="menu-icon">
                            <MenuIcon className='header_icon' />
                        </div>

                    </div>
                </div>
            
                {/* searchArea failed  */}
                <div id='searchArea' className="search-area">
                    <input type="text" placeholder='Search here...' />
                    <CloseIcon id="closeButton" className='close-button' />
                </div>
            </div>
        </div>
    )
}

export default Header