import React from 'react';
import { FaStar } from 'react-icons/fa';

const Star = ({ selected = false, onSelect = f => f }) => (
    <FaStar color={selected ? 'gold' : '#d6d6d6'} onClick={onSelect} />
)

export default Star;