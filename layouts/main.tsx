/*react*/
import { FC, ReactNode } from "react";

/*next*/
import dynamic from 'next/dynamic';

/*components*/
import Header from "../components/layout/header";
//const Footer = dynamic(() => import(/* webpackChunkName: "quotes" */ '../components/layout/footer'));

/*styles*/
import Styles from "../styles/modules/layouts/main.module.css";


interface MyProps {
    children: ReactNode;
 }

const headerOnly : FC<MyProps> =  ({children}) => {

    return <div className="d-flex flex-column w-100 position-relative">
        <header className={Styles.header}><Header/></header>
        <div id="content" className={`d-flex flex-column w-100 position-relative ${Styles.content}`}>
            {children}
        </div>
        <div className={`d-flex flex-column w-100 position-relative ${Styles.content}`}></div>
    </div>

  }

  export default headerOnly;