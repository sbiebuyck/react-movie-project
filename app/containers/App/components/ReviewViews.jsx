import React from 'react';

function ReviewViews({reviews}) {

    const options = [
        { reviews_limit: '20', value: 'twenty' },
        { reviews_limit: '50', value: 'fifty' },
      ];

      const [value, setValue] = React.useState('twenty');

      const handleChange = (event) => {
        setValue(event.target.value)
        setPageLength
      };

      return (
        <div>

        </div>
      );
    };




export default ReviewViews;