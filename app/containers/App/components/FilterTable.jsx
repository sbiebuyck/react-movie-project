import React from 'react';

function FilterTable({ }) {


    const handleChange = (event) => {
      //TODO: Apply Filtering
    };


    const Checkbox = ({label, value, onChange}) => {
        return (
          <label>
            <input type="checkbox" checked={value} onChange={onChange} />
            {label}
          </label>
        );
      };

    return (
        <div className='filter-table'>
            <h3> Filter Results</h3>
            <div className='date-filter'>
                <div className='filter-title'>
                    By Publication Date:
                </div>
                <br></br>
                <Checkbox
                    label="Oldest-to-newest"
                    onChange={handleChange}
                />
                <br></br>
                <Checkbox
                    label="Newest-to-oldest"
                    onChange={handleChange}
                />
            </div>
          <div className='rating-filter'>
                <div className='filter-title'>
                    By Rating(s):
                </div>
                <br></br>
                <Checkbox
                  label="R"
                  onChange={handleChange}
                />
                <br></br>
                <Checkbox
                  label="PG-13"
                  onChange={handleChange}
                />
                <br></br>
                <Checkbox
                  label="PG"
                  onChange={handleChange}
                />
                <br></br>
                <Checkbox
                  label="G"
                  onChange={handleChange}
                />
                <br></br>
                <Checkbox
                  label="Unrated"
                  onChange={handleChange}
                />
            </div>
            <div className='pick-filter'>
              <div className='filter-title'>
                  By Critic Pick:
              </div>
              <br></br>
              <Checkbox
                label="Recommended"
                onChange={handleChange}
              />
              <br></br>
              <Checkbox
                label="Maybe Later"
                onChange={handleChange}
              />
            </div>
            <button type="submit">Apply</button>
    </div>
    );
};

export default FilterTable;