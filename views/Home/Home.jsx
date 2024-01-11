import { Layout } from "@designo/components/Layout/Layout";
import { ServicesNavigation } from "@designo/components/ServicesNavigation/ServicesNavigation";
import { WhiteButton } from "@designo/components/YourProject/YourProject.styles";
import { 
    HeroContainer, 
    HeroText, 
    HeroTitle,
    ValuesGrid,
    ValueCard,
    ValueTitle,
    ValueText,
} from "./Home.styles";
import Image from "next/image";

export const HomeView = () => {
    return (
        <Layout showProject>
            <HeroContainer>
                <HeroTitle>Award-winning custom designs and digital branding solutions</HeroTitle>
                <HeroText>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</HeroText>
                <a href="#services"><WhiteButton>LEARN MORE</WhiteButton></a>
            </HeroContainer>
            <ServicesNavigation />
            <ValuesGrid>
                <ValueCard>
                    <Image src={'/passionate.svg'} width={202} height={202} alt="Passionate" />
                    <ValueTitle>PASSIONATE</ValueTitle>
                    <ValueText>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</ValueText>
                </ValueCard>
                <ValueCard>
                    <Image src={'/resourceful.svg'} width={202} height={202} alt="Resourceful" />
                    <ValueTitle>RESOURCEFUL</ValueTitle>
                    <ValueText>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</ValueText>
                </ValueCard>
                <ValueCard>
                    <Image src={'/friendly.svg'} width={202} height={202} alt="Friendly" />
                    <ValueTitle>FRIENDLY</ValueTitle>
                    <ValueText>We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</ValueText>
                </ValueCard>
            </ValuesGrid>
        </Layout>
    );
}