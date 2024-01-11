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
} from './Contact.styles';
import { WhiteButton } from "@designo/components/YourProject/YourProject.styles";

export const ContactView = () => {
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

    return (
        <Layout>
            <ContactUsContainer>
                <ContactInfoColumn>
                    <ContactUsTitle>Contact Us</ContactUsTitle>
                    <ContactUsText>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</ContactUsText>
                </ContactInfoColumn>
                <FormContainer>
                    <Input type="text" name="name" value={name} placeholder="Name" onChange={handleChange} />
                    <Input type="email" name="email" value={email} placeholder="Email Address" onChange={handleChange} />
                    <Input type="phone" name="phone" value={phone} placeholder="Phone" onChange={handleChange} />
                    <TextArea type="message" name="message" value={message} placeholder="Your Message" onChange={handleChange} />
                    <WhiteButton>SUBMIT</WhiteButton>
                </FormContainer>
            </ContactUsContainer>
            <LocationsGrid />
        </Layout>
    );
}