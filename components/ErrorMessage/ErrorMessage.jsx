import { ErrorContainer } from "@designo/views/Contact/Contact.styles";
import Image from "next/image";

export const ErrorMessage = ({ errorMessage }) => {
    return (
        <ErrorContainer>
            <span>{errorMessage}</span>
            <Image src='/warning.svg' alt="Error" width={20} height={20} />
        </ErrorContainer>
    );
};