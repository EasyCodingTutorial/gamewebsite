"use client";
import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

// For React Icons
import { FaBarsStaggered } from "react-icons/fa6";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { FaArrowRightFromBracket } from "react-icons/fa6";

interface types {
    LinkText: string,
    LinkTo: string,
}

const NavLinks: types[] = [
    { LinkText: "Home", LinkTo: "/" },
    { LinkText: "Games", LinkTo: "/" },
    { LinkText: "Community", LinkTo: "/" },
    { LinkText: "Events", LinkTo: "/" },
    { LinkText: "News", LinkTo: "/" },
    { LinkText: "Support", LinkTo: "/" },
    { LinkText: "About Us", LinkTo: "/" },
    { LinkText: "Signup", LinkTo: "/" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    const toggleSlider = () => {
        setIsOpen(!isOpen);
    };

    // Scroll Event Listener
    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <main className={styles.Navbar_Parent}>
            <nav className={`${styles.Navbar} ${scrollPosition > 50 ? styles.Scrolled : ''}`}>
                <Link href={"/"} className={styles.Logo}>
                    <img src="/assets/logo.png" alt="" />
                </Link>

                <div className={styles.NavLinks}>
                    {NavLinks.map((I) => (
                        <div key={I.LinkTo} className={styles.NavLink}>
                            <Link href={I.LinkTo}>{I.LinkText}</Link>
                        </div>
                    ))}
                </div>

                <FaBarsStaggered
                    onClick={toggleSlider}
                    className={styles.MenuIcon}
                />

                <div className={`${styles.Slider} ${isOpen ? styles.Open : ''}`}>
                    <div className={styles.SliderContent}>
                        <MdOutlineCloseFullscreen
                            onClick={toggleSlider}
                            className={styles.CloseIcon}
                        />

                        {NavLinks.map((I) => (
                            <div key={I.LinkTo} className={styles.Slider_NavLink}>
                                <Link href={I.LinkTo}>
                                    <span><FaArrowRightFromBracket /></span>
                                    {I.LinkText}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </nav>
        </main>
    );
};
