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
import { forwardRef } from "react";
import dynamic from "next/dynamic";

const Map = dynamic(
        () => import('@designo/components/Map/Map.jsx'),
        { 
          loading: () => <p>A map is loading</p>,
          ssr: false
        }
      );

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
                <Map location={[43.6440163,-79.3945394]} />
            </LocationRow>
            <LocationRow reverse>
                <Map location={[-30.3293985, 149.7882399]} />
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
                <Map location={[51.7320565,-3.8803538]} />
            </LocationRow>
        </Layout>
    );
};