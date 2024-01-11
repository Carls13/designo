import { Layout } from "@designo/components/Layout/Layout";
import { LocationsGrid } from "@designo/components/LocationsGrid/LocationsGrid";
import Image from "next/image";

import {
    AboutUsContainer,
    AboutUsInfoColumn,
    AboutUsTitle,
    AboutUsParagraph,
    AboutInfoContainer,
    AboutInfoText,
    AboutInfoTitle
} from './About.styles';

export const AboutView = () => {
    return (
        <Layout showProject>
            <AboutUsContainer>
                <Image className="tablet-image" src={'/about-us-tablet.png'} width={476} height={480} alt="About Us" />
                <AboutUsInfoColumn>
                    <AboutUsTitle>About Us</AboutUsTitle>
                    <AboutUsParagraph>Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</AboutUsParagraph>
                </AboutUsInfoColumn>
                <Image className="desktop-image" src={'/about-us.jpg'} width={476} height={480} alt="About Us" />
            </AboutUsContainer>
            <AboutInfoContainer>
                <Image className="tablet-image" src={'/world-class-tablet.png'} width={476} height={480} alt="About Us" />
                <Image className="desktop-image" src={'/world-class.jpg'} width={576} height={713} alt="World-class" />
                <AboutUsInfoColumn>
                    <AboutInfoTitle>World-class talent</AboutInfoTitle>
                    <AboutInfoText>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms. <br /> <br />
                    
                    Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.</AboutInfoText>
                </AboutUsInfoColumn>
            </AboutInfoContainer>
            <LocationsGrid />
            <AboutInfoContainer>
                <Image className="tablet-image" src={'/the-real-deal.png'} width={476} height={480} alt="About Us" />
                <AboutUsInfoColumn>
                    <AboutInfoTitle>The real deal</AboutInfoTitle>
                    <AboutInfoText>As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success. <br /> <br /> We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</AboutInfoText>
                </AboutUsInfoColumn>
                <Image className="desktop-image" src={'/the-real-deal.png'} width={576} height={713} alt="The real deal" />
            </AboutInfoContainer>
        </Layout>
    );
};