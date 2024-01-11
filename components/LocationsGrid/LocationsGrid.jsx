import Image from "next/image"
import { LocationCard, LocationTitle, LocationsGridContainer, PeachButton } from "./LocationsGrid.styles"
import { useRouter } from "next/router"

export const LocationsGrid = () => {
    const router = useRouter();

    return (
        <LocationsGridContainer>
            <LocationCard>
                <Image src={'/canada.svg'} width={202} height={202} alt="Canada" />
                <LocationTitle>CANADA</LocationTitle>
                <PeachButton onClick={() => router.push('/locations')}>SEE LOCATION</PeachButton>
            </LocationCard>
            <LocationCard>
                <Image src={'/australia.svg'} width={202} height={202} alt="Australia" />
                <LocationTitle>AUSTRALIA</LocationTitle>
                <PeachButton onClick={() => router.push('/locations')}>SEE LOCATION</PeachButton>
            </LocationCard>
            <LocationCard>
                <Image src={'/united-kingdom.svg'} width={202} height={202} alt="United Kingdom" />
                <LocationTitle>UNITED KINGDOM</LocationTitle>
                <PeachButton onClick={() => router.push('/locations')}>SEE LOCATION</PeachButton>
            </LocationCard>
        </LocationsGridContainer>
    );
};