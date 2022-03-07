import React from 'react';
import Reviews from '../../../public/movie-reviews.json'


function CriticsRow({ critic }) {


    var picks_count = 0;

    const display_critic = {
        display_name : critic.display_name ? critic.display_name : "" ,
        bio: critic.hasOwnProperty("bio") ? critic.bio : "No bio",
        hasSrc: critic.multimedia ? true : false,
    }

    var review_count = 0;

    // calculates number of reviews that have matching names, and
    for (let i = 0; i < Reviews.length; i++) {
        if (critic.display_name.toLowerCase() === Reviews[i].byline.toLowerCase()) {
            review_count++

            // if they match names, finds if it was a pick or not.
            if (Reviews[i].critics_pick === 1) {
                picks_count++
            }
        }
    }

    return (
        <tr>
            <td>
                {
                display_critic.hasSrc
                    ? <img src={`${critic.multimedia.resource.src}`} />
                    : ""
                }
                <p>{display_critic.display_name}</p>
            </td>
            <td>{review_count}</td>
            <td>{picks_count}</td>
            <td dangerouslySetInnerHTML={{__html: critic.bio}} />
        </tr>
    )
}

export default CriticsRow;