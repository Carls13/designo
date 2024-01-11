import Image from "next/image"
import { CustomLink } from "../CustomLink/CustomLink"
import { FooterContainer, FooterFirstRow, FooterOptions, FooterInfoGrid, ContactContainer, Info, SocialContainer, SocialRow } from "./Footer.styles"
import { YourProject } from "../YourProject/YourProject"
import Link from "next/link";

export const Footer = ({ showProject = false }) => {
    return (
        <FooterContainer bigPadding={showProject}>
            {showProject && <YourProject/>}
            <FooterFirstRow>
                <Link href={'/'}>
                    <Image src={'/logo-footer.png'} width={202} height={27} alt="Logo" />
                </Link>
                <FooterOptions>
                    <CustomLink route="/about">OUR COMPANY</CustomLink>
                    <CustomLink route="/locations">LOCATIONS</CustomLink>
                    <CustomLink route="/contact">CONTACT</CustomLink>
                </FooterOptions>
            </FooterFirstRow>
            <hr />
            <FooterInfoGrid>
                <ContactContainer>
                    <Info><b>Designo Central Office</b></Info>
                    <Info>3886 Wellington Street</Info>
                    <Info>Toronto, Ontario M9C 3J5</Info>
                </ContactContainer>
                <ContactContainer>
                    <Info><b>Contact Us (Central Office)</b></Info>
                    <Info>P : +1 253-863-8967</Info>
                    <Info>M : contact@designo.co</Info>
                </ContactContainer>
                <SocialContainer>
                    <SocialRow>
                        <a href="https://carlosshb.com" target="_blank">
                            <Image src={'/facebook.svg'} width={24} height={24} alt="Facebook" />
                        </a>
                        <a href="https://carlosshb.com" target="_blank">
                            <Image src={'/youtube.svg'} width={24} height={24} alt="Youtube" />
                        </a>
                        <a href="https://carlosshb.com" target="_blank">
                            <Image src={'/twitter.svg'} width={24} height={24} alt="Twitter" />
                        </a>
                        <a href="https://carlosshb.com" target="_blank">
                            <Image src={'/pinterest.svg'} width={24} height={24} alt="Pinterest" />
                        </a>
                        <a href="https://carlosshb.com" target="_blank">
                            <Image src={'/instagram.svg'} width={24} height={24} alt="Instagram" />
                        </a>
                    </SocialRow>
                </SocialContainer>
            </FooterInfoGrid>
        </FooterContainer>
    )
}