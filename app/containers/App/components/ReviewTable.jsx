import React from 'react';
import ReviewRow from './ReviewRow';


function ReviewTable({ reviews }) {
    const options = [
        { reviews_limit: '20', value: 20 },
        { reviews_limit: '50', value: 50 },
        { reviews_limit: 'All', value: reviews.length },
    ];

    const [value, setValue] = React.useState(20);

    const handleChange = (event) => {
        setValue(event.target.value)
    };

    const Dropdown = ({ label, value, options, onChange }) => {
        return (
            <label>
            {label}
            <select value={value} onChange={onChange}>
                {options.map((option) => (
                <option value={option.value}>{option.reviews_limit}</option>
                ))}
            </select>
            </label>
        );
    };

    var display_views = [];

    for (let i = 0; i < value; i++) {
        display_views.push(reviews[i]);
    }

    return (
        <div>
            <Dropdown
                label="View by: "
                options={options}
                value={value}
                onChange={handleChange}
                className='view-filter'
            />
            <table className="reviews_list">
                <thead>
                    <tr>
                        <th> Image </th>
                        <th> Title </th>
                        <th> Rating </th>
                        <th> Critics Pick</th>
                        <th> Review Date </th>
                    </tr>
                </thead>
                <tbody>
                    {display_views.map((review, i) => <ReviewRow review={review} key={i} /> )}
                </tbody>
            </table>
        </div>
    )
}

export default ReviewTable;