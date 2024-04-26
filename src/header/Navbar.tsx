"use client"

import React, { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import SearchBox from "./SearchBox";
import LocalSwitcher from "./local-switcher";
import Theme from "./Theme";
import Link from "next/link";

type Props = {
    home: string;
    observatory: string;
    statistics: string;
    articles: string;
    publications: string;
    reports: string;
    missions: string;
    contact: string;
    search: string;
    locale: string
}


const Navbar = (props: Props) => {

    const { articles, contact, home, locale, missions, statistics, observatory, publications, reports,search } = props

    const links = [
        { id: 1, text: home, url: `/${locale}` },
        { id: 4, text: articles, url: `/${locale}/articles` },
        { id: 5, text: publications, url: `/${locale}/publications` },
        { id: 3, text: statistics, url: `/${locale}/statistics` },
        { id: 2, text: observatory, url: `/${locale}/observatory` },
        // { id: 6, text: reports, url: "/" },
        { id: 7, text: missions, url: `/${locale}/missions` },
    ];

    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef<HTMLDivElement | null>(null);
    const linksRef = useRef<HTMLUListElement | null>(null);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    useEffect(() => {
        if (linksRef.current && linksContainerRef.current) {
            const linksHeight = linksRef.current.getBoundingClientRect().height;
            if (showLinks) {
                linksContainerRef.current.style.height = `${linksHeight}px`;
            } else {
                linksContainerRef.current.style.height = '0px';
            }
        }
    }, [showLinks]);

    return (
        <nav className="bg-myBlue">
            {/* flex flex-col-reverse lg:flex-row */}
            <div className={`nav-center body-container `}>

                <div className='links-container' ref={linksContainerRef}>
                    <ul className={`links`} ref={linksRef}>
                        {/* <li className="md:hidden">
                            <SearchBox locale={locale} />
                        </li> */}
                        {links.map((link: any) => {
                            const { id, url, text } = link;
                            return (
                                <li key={id}>
                                    <Link href={url}>{text}</Link>
                                </li>
                            );
                        })}

                    </ul>
                </div>


                <div className='nav-header'>
                    <div className={`flex md:flex-row-reverse space-x-2 items-center `}>
                        <div className="mx-2 mt-2">
                            <Theme />
                        </div>
                        <LocalSwitcher />
                        {/* hidden lg:inline */}
                        <div className="">
                            <SearchBox locale={locale} search={search} />
                        </div>
                    </div>
                    {/* here img */}
                    <button className='nav-toggle' onClick={toggleLinks}>
                        <FaBars />
                    </button>
                </div>



            </div>
        </nav>
    )
};

export default Navbar;