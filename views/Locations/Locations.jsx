import { Layout } from "@designo/components/Layout/Layout";
import Image from "next/image";

import { 
    LocationRow,
    LocationInfoContainer,
    LocationTitle,
    LocationDetailsRow,
    LocationDetailsColumn,
    LocationInfo
 } from './Locations.styles';

export const LocationsView = () => {
    return (
        <Layout showProject>
            <LocationRow>
                <LocationInfoContainer>
                    <LocationTitle>Canada</LocationTitle>
                    <LocationDetailsRow>
                        <LocationDetailsColumn>
                            <LocationInfo><b>Designo Central Office</b></LocationInfo>
                            <LocationInfo>3886 Wellington Street</LocationInfo>
                            <LocationInfo>Toronto, Ontario M9C 3J5</LocationInfo>
                        </LocationDetailsColumn>
                        <LocationDetailsColumn>
                            <LocationInfo><b>Contact Us (Central Office)</b></LocationInfo>
                            <LocationInfo>P : +1 253-863-8967</LocationInfo>
                            <LocationInfo>M : contact@designo.co</LocationInfo>
                        </LocationDetailsColumn>
                    </LocationDetailsRow>
                </LocationInfoContainer>
                <Image src={'/canada-map.png'} alt="Canada" width={350} height={326} />
            </LocationRow>
            <LocationRow reverse>
                <Image src={'/australia-map.png'} alt="Australia" width={350} height={326} />
                <LocationInfoContainer>
                    <LocationTitle>Australia</LocationTitle>
                    <LocationDetailsRow>
                        <LocationDetailsColumn>
                            <LocationInfo><b>Designo AU Office</b></LocationInfo>
                            <LocationInfo>19 Balonne Street</LocationInfo>
                            <LocationInfo>New South Wales 2443</LocationInfo>
                        </LocationDetailsColumn>
                        <LocationDetailsColumn>
                            <LocationInfo><b>Contact</b></LocationInfo>
                            <LocationInfo>P : (02) 6720 9092</LocationInfo>
                            <LocationInfo>M : contact@designo.au</LocationInfo>
                        </LocationDetailsColumn>
                    </LocationDetailsRow>
                </LocationInfoContainer>
            </LocationRow>
            <LocationRow>
                <LocationInfoContainer>
                    <LocationTitle>United Kingdom</LocationTitle>
                    <LocationDetailsRow>
                        <LocationDetailsColumn>
                            <LocationInfo><b>Designo UK Office</b></LocationInfo>
                            <LocationInfo>13  Colorado Way</LocationInfo>
                            <LocationInfo>Rhyd-y-fro SA8 9GA</LocationInfo>
                        </LocationDetailsColumn>
                        <LocationDetailsColumn>
                            <LocationInfo><b>Contact </b></LocationInfo>
                            <LocationInfo>P : 078 3115 1400</LocationInfo>
                            <LocationInfo>M : contact@designo.uk</LocationInfo>
                        </LocationDetailsColumn>
                    </LocationDetailsRow>
                </LocationInfoContainer>
                <Image src={'/united-kingdom-map.png'} alt="United Kingdom" width={350} height={326} />
            </LocationRow>
        </Layout>
    );
};