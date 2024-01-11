import { Layout } from "@designo/components/Layout/Layout";
import { ServiceCard } from "@designo/components/ServiceCard/ServiceCard";
import { ServicesNavigation } from "@designo/components/ServicesNavigation/ServicesNavigation";
import { ServiceHero, ServiceText, ServiceTitle, ServicesGrid } from "@designo/theme/common.styles";

export const AppDesignView = () => {
    return (
        <Layout showProject>
            <ServiceHero backgroundImageUrl="url('/app-design-hero.png')"> 
                <ServiceTitle>App Design</ServiceTitle>
                <ServiceText>Our mobile designs bring intuitive digital solutions <br /> to your customers right at their fingertips.</ServiceText>
            </ServiceHero>
            <ServicesGrid>
                <ServiceCard 
                    serviceTitle={'Airfilter'} 
                    serviceDescription={'Solving the problem of poor indoor air quality by filtering the air'} 
                    imagePath={'/airfilter.jpg'} />
                <ServiceCard 
                    serviceTitle={'Eyecam'} 
                    serviceDescription={'Product that lets you edit your favorite photos and videos at any time'} 
                    imagePath={'/eyecam.jpg'} />
                <ServiceCard 
                    serviceTitle={'Faceit'} 
                    serviceDescription={'Get to meet your favorite internet superstar with the faceit app'} 
                    imagePath={'/faceit.jpg'} />
                <ServiceCard 
                    serviceTitle={'Todo'} 
                    serviceDescription={'A todo app that features cloud sync with light and dark mode'} 
                    imagePath={'/todo.jpg'} />
                <ServiceCard 
                    serviceTitle={'Loopstudios'} 
                    serviceDescription={'A VR experience app made for Loopstudios'} 
                    imagePath={'/loopstudios.jpg'} />
            </ServicesGrid>
            <ServicesNavigation />
        </Layout>
    );
};