import Image from "next/image";
import { CustomLink } from "../CustomLink/CustomLink";

import { HeaderContainer, HeaderOptions } from './Header.styles';
import Link from "next/link";

export const Header = () => {
    return (
        <HeaderContainer>
            <Link href={'/'}>
                <Image src={'/logo.png'} width={202} height={27} alt="Logo" />
            </Link>
            <HeaderOptions>
                <CustomLink headerLink={true} route="/about">OUR COMPANY</CustomLink>
                <CustomLink headerLink={true} route="/locations">LOCATIONS</CustomLink>
                <CustomLink headerLink={true} route="/contact">CONTACT</CustomLink>
            </HeaderOptions>
        </HeaderContainer>
    );
};