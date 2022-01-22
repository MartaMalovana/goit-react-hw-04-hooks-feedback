import React from "react";
import PropTypes from 'prop-types';
import {TextMessage} from './Notification.styled';

export default function Notification ({message}) {
        return <TextMessage>{message}</TextMessage>;
};

Notification.propTypes = {
    message: PropTypes.string,
}