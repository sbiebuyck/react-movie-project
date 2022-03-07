import { React } from 'react'
import ReviewData from '../../../public/movie-reviews.json';

function SearchList(props) {
    return (
        <ul>
            {ReviewData.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

export default SearchList;