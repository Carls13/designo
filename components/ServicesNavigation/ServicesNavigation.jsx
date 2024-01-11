import Link from "next/link";

import {
    ServicesContainer,
    ServiceNavigator,
    NavigatorTitle,
    NavigatorText
} from './ServicesNavigation.styles';
import { useRouter } from "next/router";

export const ServicesNavigation = () => {
    const router = useRouter();

    const pathName = router.route;
    const isHome = pathName === '/';
    const isWebDesign = pathName === '/web-design';
    const isAppDesign = pathName === '/app-design';
    const isGraphicDesign = pathName === '/graphic-design';

    return (
        <ServicesContainer id="services">
            {
                !isWebDesign && <ServiceNavigator onClick={() => router.push('/web-design')} bigCard={isHome} backgroundImageUrl="url('/web-design-raw.png')">
                    <NavigatorTitle>WEB DESIGN</NavigatorTitle>
                    <NavigatorText>VIEW PROJECTS</NavigatorText>
                </ServiceNavigator>
            }
            {
                !isAppDesign && <ServiceNavigator onClick={() => router.push('/app-design')} backgroundImageUrl="url('/app-design-raw.png')">
                    <NavigatorTitle>APP DESIGN</NavigatorTitle>
                    <NavigatorText>VIEW PROJECTS</NavigatorText>
                </ServiceNavigator>
            }
            {
                !isGraphicDesign && <ServiceNavigator onClick={() => router.push('/graphic-design')} backgroundImageUrl="url('/graphic-design-raw.png')">
                    <NavigatorTitle>GRAPHIC DESIGN</NavigatorTitle>
                    <NavigatorText>VIEW PROJECTS</NavigatorText>
                </ServiceNavigator>
            }
        </ServicesContainer>
    )
}