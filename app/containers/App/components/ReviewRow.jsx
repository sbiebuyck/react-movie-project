import React from 'react';


function ReviewRow({ review }) {

    return (
        <tr className='review'>
            <td> <img src={`${review.multimedia.src}`} /> </td>
            <td> {review.display_title} </td>
            <td> {review.mpaa_rating === "" ?  "Unrated" : review.mpaa_rating}</td>
            <td> {review.critics_pick}</td>
            <td> {review.publication_date}</td>
        </tr>
    )
}

export default ReviewRow;