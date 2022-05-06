import React from 'react';
import { useState } from 'react';
import Star from './Star'

function StarRating() {
    const [selectedStars, setSelectedStars] = useState(0);
    const totalStars = [1, 2, 3, 4, 5];
    return (
        <div>
            {totalStars.map((n, i) => (
                <Star 
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => setSelectedStars(i + 1)}
                />
            ))}
        </div>
    )
}

export default StarRating;
