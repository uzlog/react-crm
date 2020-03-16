import React from "react";
import PropTypes from "prop-types";
import {
    StyledClientBox,
    StyledAvatar,
    StyledSection
} from "./ClientBox.styled";

export const ClientBox = ({ avatar, name, contact, company }) => {
    const {
        address: { streetAddress, city, state },
        phone,
        email
    } = contact;

    return (
        <StyledClientBox>
            <StyledAvatar>
                <img src={avatar} alt={`${name.firstName} ${name.lastName}`} />
            </StyledAvatar>

            <StyledSection>
                {name.firstName} {name.lastName}
            </StyledSection>
            <StyledSection>{phone}</StyledSection>
            <StyledSection>
                {streetAddress}, {city}, {state}
            </StyledSection>
            <StyledSection>{email}</StyledSection>
            <StyledSection>{company}</StyledSection>
        </StyledClientBox>
    );
};

ClientBox.propTypes = {
    name: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string
    }).isRequired,
    contact: PropTypes.shape({
        address: PropTypes.shape({
            streetAddress: PropTypes.string,
            city: PropTypes.string,
            zipCode: PropTypes.string,
            state: PropTypes.string,
            country: PropTypes.string
        }),
        phone: PropTypes.string,
        email: PropTypes.string
    }).isRequired,
    company: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
};

export default ClientBox;
