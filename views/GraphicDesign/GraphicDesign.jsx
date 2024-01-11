import { Layout } from "@designo/components/Layout/Layout";
import { ServiceCard } from "@designo/components/ServiceCard/ServiceCard";
import { ServicesNavigation } from "@designo/components/ServicesNavigation/ServicesNavigation";
import { ServiceHero, ServiceText, ServiceTitle, ServicesGrid } from "@designo/theme/common.styles";

export const GraphicDesignView = () => {
    return (
        <Layout showProject>
            <ServiceHero backgroundImageUrl="url('/graphic-design-hero.png')"> 
                <ServiceTitle>Graphic Design</ServiceTitle>
                <ServiceText>We deliver eye-catching branding materials that are <br />tailored to meet your business objectives.</ServiceText>
            </ServiceHero>
            <ServicesGrid>
                <ServiceCard 
                    serviceTitle={'TIM BROWN'} 
                    serviceDescription={'A book cover designed for Tim Brown’s new release, ‘Change’'} 
                    imagePath={'/tim-brown.jpg'} />
                <ServiceCard 
                    serviceTitle={'BOXED WATER'} 
                    serviceDescription={'A simple packaging concept made for Boxed Water'} 
                    imagePath={'/boxed-water.jpg'} />
                <ServiceCard 
                    serviceTitle={'SCIENCE!'} 
                    serviceDescription={'A poster made in collaboration with the Federal Art Project'} 
                    imagePath={'/science.jpg'} />
            </ServicesGrid>
            <ServicesNavigation />

        </Layout>
    );
};