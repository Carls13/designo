import Image from "next/image";
import { ServiceContainer, ServiceTitle, ServiceDescription  } from './ServiceCard.styles';

export const ServiceCard = ({ imagePath, serviceTitle, serviceDescription }) => {
    return (
        <ServiceContainer>
            <Image src={imagePath} width={350} height={320} alt={serviceTitle} />
            <ServiceTitle>{serviceTitle}</ServiceTitle>
            <ServiceDescription>{serviceDescription}</ServiceDescription>
        </ServiceContainer>
    );
};