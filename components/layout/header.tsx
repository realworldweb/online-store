/*react*/
import { useRef, useState, useEffect } from 'react';

/*next*/
import Link from 'next/link';
import { useRouter } from 'next/router';

/*styles*/
import Styles from '../../styles/modules/layouts/components/header.module.css';


function Header() {

	return (
		<>
        {/*Start Header Top*/}
        <div className={Styles.headerTopArea}>
            <div className="container-fluid  p-lr-80">
                <div className="row no-gutters">
                    <div className="col-lg-12">
                        {/*Start Header Top Info*/}
                        <div className="header-top-info position-relative">
                            <div className="header-top-info-left">
                                <div className="header-phone">
                                    <i className="ion-ios-telephone" />
                                    Call Us : <a href="tel://+0123456789">+0123456789</a>
                                </div>
                                <div className="header-email">
                                    <i className="ion-android-drafts" />
                                    Email : <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;tf=1&amp;to=//demo@example.com" target="_blank">demo@example.com</a>
                                </div>
                            </div>
                            <div className="header-top-info-right header-top-info-right--home-4">
                                <div id="header-account">
                                    <select className="child-dropdown" onChange={() => console.log("ran")} style={{display: "none"}}>
                                        <option value="login.html">Log In</option>
                                        <option value="register.html">Sign Up</option>
                                        <option value="my-account.html">Account</option>
                                        <option value="cart.html">Cart</option>
                                        <option value="checkout.html">Checkout</option>
                                        <option value="compare.html">Compare</option>
                                        <option value="wishlist.html">Wishlist</option>
                                    </select><div className="nice-select child-dropdown" tabIndex={0}><span className="current">Log In</span><ul className="list"><li data-value="login.html" className="option selected">Log In</li><li data-value="register.html" className="option">Sign Up</li><li data-value="my-account.html" className="option">Account</li><li data-value="cart.html" className="option">Cart</li><li data-value="checkout.html" className="option">Checkout</li><li data-value="compare.html" className="option">Compare</li><li data-value="wishlist.html" className="option">Wishlist</li></ul></div>
                                </div>
                                <div id="header-currency">
                                    <select className="child-dropdown" onChange={() => console.log("ran")} style={{display: "none"}}>
                                        <option value="usd">USD</option>
                                        <option value="euro">EURO</option>
                                    </select><div className="nice-select child-dropdown" tabIndex={0}><span className="current">USD</span><ul className="list"><li data-value="usd" className="option selected">USD</li><li data-value="euro" className="option">EURO</li></ul></div>
                                </div>
                                <div id="header-lang">
                                    <select className="child-dropdown" onChange={() => console.log("ran")} style={{display: "none"}}>
                                        <option value="english">English</option>
                                        <option value="Banga">Bangla</option>
                                    </select><div className="nice-select child-dropdown" tabIndex={0}><span className="current">English</span><ul className="list"><li data-value="english" className="option selected">English</li><li data-value="Banga" className="option">Bangla</li></ul></div>
                                </div>
                            </div>
                            {/*Start Header Cart*/}
                            <div className="header-cart header-cart--home-4 lightblue-bg ">
                                <button type="button" className="add_cart_open">
                                    <i className="ion-bag" />
                                    <span className="item_total"> 3 Items</span> : $72.01
                                </button>

                                <div className="header-cart-deatils">
                                    <ul className="header-item-add-cart">
                                        <li>
                                            <div className="header-add-cart-img">
                                                <a href="details.html" aria-label='details'><img width="350" height="441" src="assets/img/product-catagory-img-1.webp" alt=""/></a>
                                                <span className="header-product-quantity">1x</span>
                                            </div>
                                            <div className="header-add-cart-img-info">
                                                <a href="details.html"><span className="header-add-cart-product-name">Chair</span></a>
                                                <span className="header-add-cart-product-price">$16.51</span>
                                                <span className="header-add-cart-product-size"><strong>Size:</strong>
                                                    S</span>
                                                <span className="header-add-cart-product-color"><strong>Color:</strong>
                                                    Black</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="header-add-cart-img">
                                                <a href="details.html" aria-label='details'><img width="350" height="441" src="assets/img/product-catagory-img-2.webp" alt=""/></a>
                                                <span className="header-product-quantity">2x</span>
                                            </div>
                                            <div className="header-add-cart-img-info">
                                                <a href="details.html"><span className="header-add-cart-product-name">Sofa</span></a>
                                                <span className="header-add-cart-product-price">$50.00</span>
                                                <span className="header-add-cart-product-size"><strong>Size:</strong>
                                                    S</span>
                                                <span className="header-add-cart-product-color"><strong>Color:</strong>
                                                    Black</span>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="header-cart-infos">
                                        <div className="header-cart-left-info"><span>Subtotal</span></div>
                                        <div className="header-cart-right-info"><span>$66.51</span></div>
                                    </div>
                                    <div className="header-cart-infos">
                                        <div className="header-cart-left-info"><span>Shipping</span></div>
                                        <div className="header-cart-right-info"><span>Free</span></div>
                                    </div>
                                    <div className="header-cart-infos">
                                        <div className="header-cart-left-info"><span>Taxes</span></div>
                                        <div className="header-cart-right-info"><span>$5.50</span></div>
                                    </div>
                                    <div className="header-cart-infos">
                                        <div className="header-cart-left-info"><span>Total</span></div>
                                        <div className="header-cart-right-info"><span>$72.01</span></div>
                                    </div>
                                    <div className="border-separator" />
                                    <a href="checkout.html" className="cart-check-out-btn">Checkout</a>
                                </div>
                            </div> {/*Start Header Cart*/}
                        </div> {/*End Header Top Info*/}

                    </div>
                </div>
            </div>
        </div> {/*Start Header Top*/}

        {/*Start Header Sticky*/}
        <div className="header-sticky-area home--3 d-none d-lg-block">
            <div className="container-fluid p-lr-80">
                <div className="row align-items-center">

                    {/*Start Header Logo*/}
                    <div className="col-lg-2">
                        <div className="row">
                            <div className="col-md-12 col-xl-12 align-self-center">
                                <div className="top-absolute-sticky-logo d-none">
                                    <a href="index.html" aria-label='search'><img width="128" height="33" src="assets/img/logo_footer.webp" alt=""/></a>
                                </div>
                                <div className="header-logo text-center header-logo__color--home-4">
                                    <a href="index.html" aria-label='home'>
                                        <img width="128" height="33" src="assets/img/logo_footer.webp" alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> {/*End Header Logo*/}
                    <div className="col-lg-9 d-lg-block d-none ">
                        <nav className="header-menu position-relative">
                            <ul className="menu-content">
                                <li className="active"><a href="#">Home <i className="fas fa-chevron-down"></i></a>
                                    <ul className="sub-menu">
                                        <li><a href="index.html">Home 01</a></li>
                                        <li><a href="index-2.html">Home 02</a></li>
                                        <li><a href="index-3.html">Home 03</a></li>
                                        <li><a href="index-4.html">Home 04</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Pages <i className="fas fa-chevron-down" /></a>
                                    <ul className="sub-menu">
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="cart.html">cart</a></li>
                                        <li><a href="checkout.html">Checkout</a></li>
                                        <li><a href="compare.html">Compare</a></li>
                                        <li><a href="wishlist.html">Wishlist</a></li>
                                        <li><a href="my-account.html">My Account</a></li>
                                        <li><a href="login.html">Login</a></li>
                                        <li><a href="register.html">Register</a></li>
                                        <li><a href="404.html">404</a></li>
                                    </ul>
                                </li>
                                <li className="position-static"><a href="#">Shop <i className="fas fa-chevron-down" /></a>
                                    <ul className="mega-sub-menu d-flex flex-wrap">
                                        <li>
                                            <a className="menu-title" href="#">Shop Grid</a>
                                            <ul className="submenu-item">
                                                <li><a href="shop.html">Default Shop</a></li>
                                                <li><a href="shop-3-column.html">Grid Column 3</a></li>
                                                <li><a href="shop-4-column.html">Grid Column 4</a></li>
                                                <li><a href="shop-left-sidebar.html">Grid left sidebar</a></li>
                                                <li><a href="shop-right-sidebar.html">Grid Right sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="menu-title" href="#">Shop List</a>
                                            <ul className="submenu-item">
                                                <li><a href="shop-list.html">List</a></li>
                                                <li><a href="shop-list-left-sidebar.html">List Left sidebar</a></li>
                                                <li><a href="shop-list-right-sidebar.html">List Right sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="menu-title" href="#">Shop Single</a>
                                            <ul className="submenu-item">
                                                <li><a href="single-product.html">Single</a></li>
                                                <li><a href="single-product-variable.html">Variable</a></li>

                                                <li><a href="single-product-tabstyle2.html">Tabs 2</a></li>
                                                <li><a href="single-product-tabstyle3.html">Tabs 3</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="menu-title" href="#">Shop Single</a>
                                            <ul className="submenu-item">
                                                <li><a href="single-product-slider.html">Slider</a></li>
                                                <li><a href="single-product-gallery-left.html">Gallery Left sidebar</a>
                                                </li>
                                                <li><a href="single-product-gallery-right.html">Gallery Right
                                                        sidebar</a></li>
                                                <li><a href="single-product-sticky-left.html">Sticky Left sidebar</a>
                                                </li>
                                                <li><a href="single-product-sticky-right.html">Sticky Right sidebar</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="custom-banner">
                                            <a href="shop-4-column.html" aria-label="items"><img width="1770" height="490" src="assets/img/promo-img-wide-1.webp" alt="" className="img-responsive"/></a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="position-static">
                                    <a href="#">Custom Menu <i className="fas fa-chevron-down"></i></a>
                                    <ul className="mega-sub-menu">
                                        <li className="custom-menu">
                                            <div className="row">
                                                <div className="col-lg-4 col-md-12">
                                                    <div className="menu-block">
                                                        <h6 className="custom-title">Women is Clothes &amp; Fashion</h6>
                                                        <p>Shop women is clothing and accessories and get inspired by
                                                            the latest fashion trends.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-12">
                                                    <div className="menu-block">
                                                        <h6 className="custom-title">Simple Style</h6>
                                                        <p>A new flattering style with all the comfort of our linen.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-12">
                                                    <div className="menu-block">
                                                        <h6 className="custom-title">Easy Layers</h6>
                                                        <p>Endless styling possibilities in a collection full of
                                                            versatile pieces.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="custom-banner">
                                                <a href="shop-4-column.html" aria-label='items'><img width="1770" height="490" src="assets/img/promo-img-wide-1.webp" alt="" className="img-responsive" /></a>
                                            </div>
                                        </li>
                                    </ul> 
                                {/*mega sub menu */}
                                </li>
                                <li><a href="#">Blog <i className="fas fa-chevron-down"></i></a>
                                    <ul className="sub-menu">
                                        <li><a href="#">Blog Grid <i className="fas fa-chevron-right"></i></a>
                                            <ul className="sub-menu">
                                                <li><a href="blog-grid-left-sidebar.html">Blog Grid Left Sidebar</a>
                                                </li>
                                                <li><a href="blog-grid-right-sidebar.html">Blog Grid Right Sidebar</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Blog List <i className="fas fa-chevron-right" /></a>
                                            <ul className="sub-menu">
                                                <li><a href="blog-list-left-sidebar.html">Blog List Left Sidebar</a>
                                                </li>
                                                <li><a href="blog-list-right-sidebar.html">Blog List Right Sidebar</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Blog Single <i className="fas fa-chevron-right" /></a>
                                            <ul className="sub-menu">
                                                <li><a href="blog-single-left-sidebar.html">Blog Single Left Sidebar</a>
                                                </li>
                                                <li><a href="blog-single-right-sidebar.html">Blog Single Right
                                                        Sidebar</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    {/*Start Header Search*/}
                    <div className="col-lg-1 d-none d-lg-block text-end">
                        <button id="onclick-toogle-btn" aria-label='search'><i className="ion-ios-search-strong"></i></button>
                        <div className="header-search-form" id="toogle-search">
                            <form action="#" method="post">
                                <input type="search" name="search" className="product-item-search" placeholder="Search our catalog"/>
                                <button type="submit" className="product-item-search-btn" aria-label='search'><i className="ion-ios-search-strong" /></button>
                            </form>
                        </div>
                    </div> {/*End Header Search*/}
                </div>
            </div>
        </div> {/*End Header Sticky*/}

        {/*Start Header Sticky*/}
        <div className="header-mobile-area  home--4 d-block d-lg-none m-b-20">
            <div className="container-fluid p-lr-80">
                <div className="row align-items-center">
                    {/*Start Header Logo*/}
                    <div className="col-12">
                        <div className="row">
                            <div className="col-md-12 col-xl-12 align-self-center">
                                <div className="top-absolute-sticky-logo">
                                    <a href="index.html" aria-label='logo'><img width="128" height="33" src="assets/img/logo_footer.webp" alt="" /></a>
                                </div>
                                <div className="header-logo header-logo__color header-logo__color--home-4">
                                    <a href="index.html" aria-label='logo'>
                                        <img width="128" height="33" src="assets/img/logo_footer.webp" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div> {/*End Header Logo*/}
                </div>
            </div>
        </div> {/*End Header Sticky*/}

        {/*Start Mobile device Menu area*/}
        <div className="header-mobile-menu d-block d-lg-none"><div className="slicknav_menu"><div className="slicknav_brand"><strong>MENU</strong></div><a href="#" aria-haspopup="true" role="button" tabIndex={0} className="slicknav_btn slicknav_collapsed" style={{outline: "none"}}><span className="slicknav_menutxt"><i className="fas fa-list-ul"></i></span><span className="slicknav_icon"><span className="slicknav_icon-bar"></span><span className="slicknav_icon-bar"></span><span className="slicknav_icon-bar"></span></span></a><ul className="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style={{display: "none"}}>
                                    <li className="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabIndex={-1} className="slicknav_item slicknav_row" style={{outline: "none"}}>
                                        <a href="index.html" tabIndex={-1}>Home</a>
                                        <span className="slicknav_arrow"><i className="fas fa-plus-circle"></i></span></a><ul role="menu" className="slicknav_hidden" aria-hidden="true" style={{display: "none"}}>
                                            <li><a href="index.html" role="menuitem" tabIndex={-1}>Home 01</a></li>
                                            <li><a href="index-2.html" role="menuitem" tabIndex={-1}>Home 02</a></li>
                                            <li><a href="index-3.html" role="menuitem" tabIndex={-1}>Home 03</a></li>
                                            <li><a href="index-4.html" role="menuitem" tabIndex={-1}>Home 04</a></li>
                                        </ul>
                                    </li>
                                    <li className="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabIndex={-1} className="slicknav_item slicknav_row" style={{outline: "none"}}>
                                        <a href="#" tabIndex={-1}>Pages</a>
                                        <span className="slicknav_arrow"><i className="fas fa-plus-circle"></i></span></a><ul role="menu" className="slicknav_hidden" aria-hidden="true" style={{display: "none"}}>
                                            <li><a href="about.html" role="menuitem" tabIndex={-1}>About</a></li>
                                            <li><a href="cart.html" role="menuitem" tabIndex={-1}>Cart</a></li>
                                            <li><a href="checkout.html" role="menuitem" tabIndex={-1}>CheckOut</a></li>
                                            <li><a href="compare.html" role="menuitem" tabIndex={-1}>Compare</a></li>
                                            <li><a href="wishlist.html" role="menuitem" tabIndex={-1}>Wishlist</a></li>
                                            <li><a href="my-account.html" role="menuitem" tabIndex={-1}>My Account</a></li>
                                            <li><a href="login.html" role="menuitem" tabIndex={-1}>Login</a></li>
                                            <li><a href="register.html" role="menuitem" tabIndex={-1}>Register</a></li>
                                            <li><a href="404.html" role="menuitem" tabIndex={-1}>404</a></li>
                                        </ul>
                                    </li>
                                    <li className="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabIndex={-1} className="slicknav_item slicknav_row" style={{outline: "none"}}><a href="#" tabIndex={-1}>Shop</a>
                                        <span className="slicknav_arrow"><i className="fas fa-plus-circle"></i></span></a><ul role="menu" className="slicknav_hidden" aria-hidden="true" style={{display: "none"}}>
                                            <li className="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabIndex={-1} className="slicknav_item slicknav_row" style={{outline: "none"}}><a href="shop.html" tabIndex={-1}>Shop Grid</a>
                                                <span className="slicknav_arrow"><i className="fas fa-plus-circle"></i></span></a><ul role="menu" aria-hidden="true" className="slicknav_hidden" style={{display: "none"}}>
                                                    <li><a href="shop.html" role="menuitem" tabIndex={-1}>Default Shop</a></li>
                                                    <li><a href="shop-3-column.html" role="menuitem" tabIndex={-1}>Grid Column 3</a></li>
                                                    <li><a href="shop-4-column.html" role="menuitem" tabIndex={-1}>Grid Column 4</a></li>
                                                    <li><a href="shop-left-sidebar.html" role="menuitem" tabIndex={-1}>Grid Left Sidebar</a></li>
                                                    <li><a href="shop-right-sidebar.html" role="menuitem" tabIndex={-1}>Grid Right Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li className="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabIndex={-1} className="slicknav_item slicknav_row" style={{outline: "none"}}><a href="shop-list.html" tabIndex={-1}>Shop List</a>
                                                <span className="slicknav_arrow"><i className="fas fa-plus-circle"></i></span></a><ul role="menu" aria-hidden="true" className="slicknav_hidden" style={{display: "none"}}>
                                                    <li><a href="shop-list.html" role="menuitem" tabIndex={-1}>Shop List</a></li>
                                                    <li><a href="shop-list-left-sidebar.html" role="menuitem" tabIndex={-1}>List Left Sidebar</a></li>
                                                    <li><a href="shop-list-right-sidebar.html" role="menuitem" tabIndex={-1}>List Right Sidebar</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabIndex={-1} className="slicknav_item slicknav_row" style={{outline: "none"}}><a href="single-product.html" tabIndex={-1}>Shop Single</a>
                                                <span className="slicknav_arrow"><i className="fas fa-plus-circle"></i></span></a><ul role="menu" aria-hidden="true" className="slicknav_hidden" style={{display: "none"}}>
                                                    <li><a href="single-product.html" role="menuitem" tabIndex={-1}>Single</a></li>
                                                    <li><a href="single-product-variable.html" role="menuitem" tabIndex={-1}>Variable</a></li>
                                                    <li><a href="single-product-tabstyle2.html" role="menuitem" tabIndex={-1}>Tab 2</a></li>
                                                    <li><a href="single-product-tabstyle3.html" role="menuitem" tabIndex={-1}>Tab 3</a></li>
                                                </ul>
                                            </li>
                                            <li className="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabIndex={-1} className="slicknav_item slicknav_row" style={{outline: "none"}}><a href="single-product.html" tabIndex={-1}>Shop Single</a>
                                                <span className="slicknav_arrow"><i className="fas fa-plus-circle"></i></span></a><ul role="menu" aria-hidden="true" className="slicknav_hidden" style={{display: "none"}}>
                                                    <li><a href="single-product-slider.html" role="menuitem" tabIndex={-1}>Slider</a></li>
                                                    <li><a href="single-product-gallery-left.html" role="menuitem" tabIndex={-1}>Gallery Left
                                                            Sidebar</a></li>
                                                    <li><a href="single-product-gallery-right.html" role="menuitem" tabIndex={-1}>Gallery Right
                                                            Sidebar</a></li>
                                                    <li><a href="single-product-sticky-left.html" role="menuitem" tabIndex={-1}>Sticky Left
                                                            Sidebar</a></li>
                                                    <li><a href="single-product-sticky-right.html" role="menuitem" tabIndex={-1}>Sticky Right
                                                            Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li className="custom-banner">
                                                <a href="shop-4-column.html" role="menuitem" tabIndex={-1}><img width="1770" height="490" src="assets/img/promo-img-wide-1.webp" alt="" className="img-responsive" /></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabIndex={-1} className="slicknav_item slicknav_row" style={{ outline: "none"}}>
                                        <a href="" tabIndex={-1}>Custom Menu</a>
                                        <span className="slicknav_arrow"><i className="fas fa-plus-circle" /></span></a><ul role="menu" className="slicknav_hidden" aria-hidden="true" style={{display: "none"}}>
                                            <li>
                                                <strong>Women Is Clothes &amp; Fashion</strong>
                                                <p>Shop Women Is Clothing And Accessories And Get Inspired By The Latest
                                                    Fashion Trends.</p>
                                            </li>
                                            <li>
                                                <strong>Simple Style</strong>
                                                <p>A New Flattering Style With All The Comfort Of Our Linen.</p>
                                            </li>
                                            <li>
                                                <strong>Easy Layers</strong>
                                                <p>Endless Styling Possibilities In A Collection Full Of Versatile
                                                    Pieces.</p>
                                            </li>
                                            <li className="custom-banner">
                                                <a href="shop-4-column.html" role="menuitem" tabIndex={-1}><img width="1770" height="490" src="assets/img/promo-img-wide-1.webp" alt="" className="img-responsive" /></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabIndex={-1} className="slicknav_item slicknav_row" style={{outline: "none"}}>
                                        <a href="#" tabIndex={-1}>Blog</a>
                                        <span className="slicknav_arrow"><i className="fas fa-plus-circle" /></span></a><ul role="menu" className="slicknav_hidden" aria-hidden="true" style={{display: "none"}}>
                                            <li className="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabIndex={-1} className="slicknav_item slicknav_row" style={{outline: "none"}}>
                                                <a href="#" tabIndex={-1}>Blog Grid</a>
                                                <span className="slicknav_arrow"><i className="fas fa-plus-circle" /></span></a><ul role="menu" aria-hidden="true" className="slicknav_hidden" style={{display: "none"}}>
                                                    <li><a href="blog-grid-left-sidebar.html" role="menuitem" tabIndex={-1}>Blog Grid Left Sidebar</a>
                                                    </li>
                                                    <li><a href="blog-grid-right-sidebar.html" role="menuitem" tabIndex={-1}>Blog Grid Right
                                                            Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li className="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabIndex={-1} className="slicknav_item slicknav_row" style={{outline: "none"}}>
                                                <a href="#" tabIndex={-1}>Blog List</a>
                                                <span className="slicknav_arrow"><i className="fas fa-plus-circle" /></span></a><ul role="menu" aria-hidden="true" className="slicknav_hidden" style={{display: "none"}}>
                                                    <li><a href="blog-list-left-sidebar.html" role="menuitem" tabIndex={-1}>Blog List Left Sidebar</a>
                                                    </li>
                                                    <li><a href="blog-list-right-sidebar.html" role="menuitem" tabIndex={-1}>Blog List Right
                                                            Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li className="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabIndex={-1} className="slicknav_item slicknav_row" style={{outline: "none"}}>
                                                <a href="#" tabIndex={-1}>Blog Single</a>
                                                <span className="slicknav_arrow"><i className="fas fa-plus-circle" /></span></a><ul role="menu" aria-hidden="true" className="slicknav_hidden" style={{display: "none"}}>
                                                    <li><a href="blog-single-left-sidebar.html" role="menuitem" tabIndex={-1}>Blog Single Left
                                                            Sidebar</a></li>
                                                    <li><a href="blog-single-right-sidebar.html" role="menuitem" tabIndex={-1}>Blog Single Right
                                                            Sidebar</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="about.html" role="menuitem" tabIndex={-1}>About</a></li>
                                    <li><a href="contact.html" role="menuitem" tabIndex={-1}>Contact</a></li>
                                </ul></div>
            <div className="container-fluid p-lr-80">
                <div className="row">
                    <div className="col-12">
                        <div>
                            <nav>
                                <ul className="mobile-menu">
                                    <li>
                                        <a href="index.html">Home</a>
                                        <ul>
                                            <li><a href="index.html">Home 01</a></li>
                                            <li><a href="index-2.html">Home 02</a></li>
                                            <li><a href="index-3.html">Home 03</a></li>
                                            <li><a href="index-4.html">Home 04</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Pages</a>
                                        <ul>
                                            <li><a href="about.html">About</a></li>
                                            <li><a href="cart.html">Cart</a></li>
                                            <li><a href="checkout.html">CheckOut</a></li>
                                            <li><a href="compare.html">Compare</a></li>
                                            <li><a href="wishlist.html">Wishlist</a></li>
                                            <li><a href="my-account.html">My Account</a></li>
                                            <li><a href="login.html">Login</a></li>
                                            <li><a href="register.html">Register</a></li>
                                            <li><a href="404.html">404</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Shop</a>
                                        <ul>
                                            <li><a href="shop.html">Shop Grid</a>
                                                <ul>
                                                    <li><a href="shop.html">Default Shop</a></li>
                                                    <li><a href="shop-3-column.html">Grid Column 3</a></li>
                                                    <li><a href="shop-4-column.html">Grid Column 4</a></li>
                                                    <li><a href="shop-left-sidebar.html">Grid Left Sidebar</a></li>
                                                    <li><a href="shop-right-sidebar.html">Grid Right Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="shop-list.html">Shop List</a>
                                                <ul>
                                                    <li><a href="shop-list.html">Shop List</a></li>
                                                    <li><a href="shop-list-left-sidebar.html">List Left Sidebar</a></li>
                                                    <li><a href="shop-list-right-sidebar.html">List Right Sidebar</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="single-product.html">Shop Single</a>
                                                <ul>
                                                    <li><a href="single-product.html">Single</a></li>
                                                    <li><a href="single-product-variable.html">Variable</a></li>
                                                    <li><a href="single-product-tabstyle2.html">Tab 2</a></li>
                                                    <li><a href="single-product-tabstyle3.html">Tab 3</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="single-product.html">Shop Single</a>
                                                <ul>
                                                    <li><a href="single-product-slider.html">Slider</a></li>
                                                    <li><a href="single-product-gallery-left.html">Gallery Left
                                                            Sidebar</a></li>
                                                    <li><a href="single-product-gallery-right.html">Gallery Right
                                                            Sidebar</a></li>
                                                    <li><a href="single-product-sticky-left.html">Sticky Left
                                                            Sidebar</a></li>
                                                    <li><a href="single-product-sticky-right.html">Sticky Right
                                                            Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li className="custom-banner">
                                                <a href="shop-4-column.html" aria-label="items"><img width="1770" height="490" src="assets/img/promo-img-wide-1.webp" alt="" className="img-responsive" /></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="">Custom Menu</a>
                                        <ul>
                                            <li>
                                                <strong>Women Is Clothes &amp; Fashion</strong>
                                                <p>Shop Women Is Clothing And Accessories And Get Inspired By The Latest
                                                    Fashion Trends.</p>
                                            </li>
                                            <li>
                                                <strong>Simple Style</strong>
                                                <p>A New Flattering Style With All The Comfort Of Our Linen.</p>
                                            </li>
                                            <li>
                                                <strong>Easy Layers</strong>
                                                <p>Endless Styling Possibilities In A Collection Full Of Versatile
                                                    Pieces.</p>
                                            </li>
                                            <li className="custom-banner">
                                                <a href="shop-4-column.html" aria-label="items"><img width="1770" height="490" src="assets/img/promo-img-wide-1.webp" alt="" className="img-responsive" /></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Blog</a>
                                        <ul>
                                            <li>
                                                <a href="#">Blog Grid</a>
                                                <ul>
                                                    <li><a href="blog-grid-left-sidebar.html">Blog Grid Left Sidebar</a>
                                                    </li>
                                                    <li><a href="blog-grid-right-sidebar.html">Blog Grid Right
                                                            Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Blog List</a>
                                                <ul>
                                                    <li><a href="blog-list-left-sidebar.html">Blog List Left Sidebar</a>
                                                    </li>
                                                    <li><a href="blog-list-right-sidebar.html">Blog List Right
                                                            Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Blog Single</a>
                                                <ul>
                                                    <li><a href="blog-single-left-sidebar.html">Blog Single Left
                                                            Sidebar</a></li>
                                                    <li><a href="blog-single-right-sidebar.html">Blog Single Right
                                                            Sidebar</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div> {/* End Mobile device Menu area*/}

        <div className="col-12 d-lg-none d-md-block align-self-center m-tb-20">
            <div className="header-search-form-sm">
                <form action="#" method="post">
                    <input type="search" name="search" className="product-item-search" placeholder="Search our catalog"/>
                    <button type="submit" className="product-item-search-btn" aria-label="search"><i className="ion-ios-search-strong" /></button>
                </form>
            </div>
        </div>

    </>
	);
}

export default Header;
