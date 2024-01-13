import Image from "next/image";
import { CustomLink } from "../CustomLink/CustomLink";

import { HeaderContainer, HeaderOptions } from './Header.styles';
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
    const [menuOpen, setIsOpen] = useState(false);

    return (
        <HeaderContainer>
            <Link href={'/'}>
                <Image src={'/logo.png'} width={202} height={27} alt="Logo" />
            </Link>
            <HeaderOptions isOpen={menuOpen}>
                <CustomLink headerLink={true} route="/about">OUR COMPANY</CustomLink>
                <CustomLink headerLink={true} route="/locations">LOCATIONS</CustomLink>
                <CustomLink headerLink={true} route="/contact">CONTACT</CustomLink>
            </HeaderOptions>
            <Image onClick={() => setIsOpen(!menuOpen)} id="burger" src={menuOpen ? '/close.svg': '/burger.svg'} width={24} height={20} alt="Menu" />
        </HeaderContainer>
    );
};