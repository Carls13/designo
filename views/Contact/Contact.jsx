import { Layout } from "@designo/components/Layout/Layout";
import { LocationsGrid } from "@designo/components/LocationsGrid/LocationsGrid";
import { useState } from "react";

import {
    ContactUsContainer,
    ContactInfoColumn,
    ContactUsTitle,
    ContactUsText,
    FormContainer,
    Input,
    TextArea,
    InputContainer,
    SuccessMessage,
} from './Contact.styles';
import { WhiteButton } from "@designo/components/YourProject/YourProject.styles";
import { ErrorMessage } from "@designo/components/ErrorMessage/ErrorMessage";

export const ContactView = () => {
    const [activateErrors, setActivateErrors] = useState(false);
    const [success, setSuccess] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const { name, email, phone, message } = form;

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const onSubmit = () => {
        if (!name || !email || !phone || !message || !/\S+@\S+\.\S+/.test(email)) {
            setActivateErrors(true);
            return;
        }

        setTimeout(() => {
            setSuccess(true);

            setTimeout(() => {
                setSuccess(false);
            }, 2000);
        }, 1500);
    }

    return (
        <Layout>
            <ContactUsContainer>
                <ContactInfoColumn>
                    <ContactUsTitle>Contact Us</ContactUsTitle>
                    <ContactUsText>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</ContactUsText>
                </ContactInfoColumn>
                <FormContainer>
                    <InputContainer>
                        <Input type="text" name="name" value={name} placeholder="Name" onChange={handleChange} />
                        {
                            (!name && activateErrors) && <ErrorMessage errorMessage="Can't be empty" />
                        }
                    </InputContainer>
                    <InputContainer>
                        <Input type="email" name="email" value={email} placeholder="Email Address" onChange={handleChange} />
                        {
                            (!email && activateErrors) && <ErrorMessage errorMessage="Can't be empty" />
                        }
                        {
                            (email && !/\S+@\S+\.\S+/.test(email) && activateErrors) && <ErrorMessage errorMessage="Invalid format" />
                        }
                    </InputContainer>
                    <InputContainer>
                        <Input type="phone" name="phone" value={phone} placeholder="Phone" onChange={handleChange} />
                        {
                            (!phone && activateErrors) && <ErrorMessage errorMessage="Can't be empty" />
                        }
                    </InputContainer>
                    <InputContainer>
                        <TextArea type="message" name="message" value={message} placeholder="Your Message" onChange={handleChange} />
                        {
                            (!message && activateErrors) && <ErrorMessage errorMessage="Can't be empty" />
                        }
                    </InputContainer>
                    <WhiteButton onClick={onSubmit}>SUBMIT</WhiteButton>
                </FormContainer>
            </ContactUsContainer>
            <LocationsGrid />
            {success && <SuccessMessage>Message was sent!</SuccessMessage>}
        </Layout>
    );
}