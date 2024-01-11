import { Layout } from "@designo/components/Layout/Layout";
import { ServiceCard } from "@designo/components/ServiceCard/ServiceCard";
import { ServicesNavigation } from "@designo/components/ServicesNavigation/ServicesNavigation";
import { ServiceHero, ServiceText, ServiceTitle, ServicesGrid } from "@designo/theme/common.styles";

export const WebDesignView = () => {
    return (
        <Layout showProject>
            <ServiceHero backgroundImageUrl="url('/web-design-hero.png')"> 
                <ServiceTitle>Web Design</ServiceTitle>
                <ServiceText>We build websites that serve as powerful marketing tools <br /> and bring memorable brand experiences.</ServiceText>
            </ServiceHero>
            <ServicesGrid>
                <ServiceCard 
                    serviceTitle={'Express'} 
                    serviceDescription={'A multi-carrier shipping website for ecommerce businesses'} 
                    imagePath={'/express.jpg'} />
                <ServiceCard 
                    serviceTitle={'Transfer'} 
                    serviceDescription={'Site for low-cost money transfers and sending money within seconds'} 
                    imagePath={'/transfer.jpg'} />
                <ServiceCard 
                    serviceTitle={'Photon'} 
                    serviceDescription={'A state-of-the-art music player with high-resolution audio and DSP effects'} 
                    imagePath={'/photon.jpg'} />
                <ServiceCard 
                    serviceTitle={'Builder'} 
                    serviceDescription={'Connects users with local contractors based on their location'} 
                    imagePath={'/builder.jpg'} />
                <ServiceCard 
                    serviceTitle={'Blogr'} 
                    serviceDescription={'Blogr is a platform for creating an online blog or publication'} 
                    imagePath={'/blogr.jpg'} />
                <ServiceCard 
                    serviceTitle={'Camp'} 
                    serviceDescription={'Get expert training in coding, data, design, and digital marketing'} 
                    imagePath={'/camp.jpg'} />
            </ServicesGrid>
            <ServicesNavigation />
        </Layout>
    );
};