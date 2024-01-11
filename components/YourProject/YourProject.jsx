import { useRouter } from 'next/router';
import {
    CallToActionContainer,
    LeftColumn,
    CallTitle,
    CallText,
    WhiteButton
} from './YourProject.styles';

export const YourProject = () => {
    const router = useRouter();

    return (
        <CallToActionContainer>
            <LeftColumn>
                <CallTitle>Let’s talk about your project</CallTitle>
                <CallText>Ready to take it to the next level? Contact us today and find out  <br />  how our expertise can help your business grow.</CallText>
            </LeftColumn>
            <WhiteButton onClick={() => router.push('/contact')}>GET IN TOUCH</WhiteButton>
        </CallToActionContainer>
    );
};