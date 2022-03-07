import React, {useState} from 'react';
import ReviewData from '../../../public/movie-reviews.json';

const getRatingAmount = (ratings_count) => `(${ratings_count.toFixed(2)})`;

function ReviewFilter({ reviews }) {

    const [isChecked, setIsChecked] = useState(
        new Array(reviews.length).fill(false)
    );

    const handleOnChange = (position) => {
        const updatedCheckedState = isChecked.map((item, index) =>
          index === position ? !item : item
    );

    const [total, setRatingsTotal] = useState(0);

    const totalRatings = updatedCheckedState.reduce(
        (sum, currentState, index) => {
          if (currentState === true) {
            return sum + reviews[index].ratings_count;
          }
          return sum;
        },
        0
      );

      setRatingsTotal(totalRatings);
    };

    setIsChecked(updatedCheckedState);

    return (
        <div className="App">
          <h3>Select Rating</h3>
          <ul className="reviews-list">
            {reviews.map(({ mpaa_rating }, index) => {
              return (
                <li key={index}>
                    <div className="left-section">
                      <input
                        type="checkbox"
                        id={`custom-checkbox-${index}`}
                        name={mpaa_rating}
                        value={mpaa_rating}
                        checked={isChecked[index]}
                        onChange={() => handleOnChange(index)}
                      />
                      <label htmlFor={`custom-checkbox-${index}`}>{mpaa_rating}</label>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
}

export default ReviewFilter;


    //     <div className='App'>
    //         <h2>Filter</h2>
    //         <ul className= "ratings_filter">
    //             <h3>By Rating(s):</h3>
    //             {ReviewData.map(({mpaa_rating}, index) => )}
    //                 return (
    //                     <div className= "filterable">
    //                         <input
                //     type= "checkbox"
                //     id= "filterable"
                //     name="ratings_filter"
                //     value="R">
                //     checked={isChecked}
                //     onChange={handleOnChange}
                //     <label for ="R">R</label>
                // </input>
    //                 </div>

    //                 );


    //         </ul>








    //         <div className= "ratings_filter" >
    //             By rating(s):
    //             <div className= "filterable">
    //                     <input
    //                         type= "checkbox"
    //                         id= "filterable"
    //                         name="ratings_filter"
    //                         value="R">
    //                         checked={isChecked}
    //                         onChange={handleOnChange}
    //                         <label for ="R">R</label>
    //                         </input>
    //                 </div>

    //                 <div className= "filterable">
    //                     <input
    //                         type= "checkbox"
    //                         id= "filterable"
    //                         name="ratings_filter"
    //                         value="NC-17">
    //                         checked={isChecked}
    //                         onChange={handleOnChange}
    //                         <label for ="NC-17">NC-17</label>
    //                         </input>
    //                 </div>

    //                 <div className= "filterable">
    //                     <input
    //                         type= "checkbox"
    //                         id= "filterable"
    //                         name="ratings_filter"
    //                         value="PG-13">
    //                         checked={isChecked}
    //                         onChange={handleOnChange}
    //                         <label for ="PG-13">PG-13</label>
    //                         </input>
    //                 </div>

    //                 <div className= "filterable">
    //                     <input
    //                         type= "checkbox"
    //                         id= "filterable"
    //                         name="ratings_filter"
    //                         value="PG">
    //                         checked={isChecked}
    //                         onChange={handleOnChange}
    //                         <label for ="PG">PG</label>
    //                         </input>
    //                 </div>

    //                 <div className= "filterable">
    //                     <input
    //                         type= "checkbox"
    //                         id= "filterable"
    //                         name="ratings_filter"
    //                         value="G">
    //                         checked={isChecked}
    //                         onChange={handleOnChange}
    //                         <label for ="G">G</label>
    //                         </input>
    //                 </div>

    //                 <div className= "filterable">
    //                     <input
    //                         type= "checkbox"
    //                         id= "filterable"
    //                         name="ratings_filter"
    //                         value="">
    //                         checked={isChecked}
    //                         onChange={handleOnChange}
    //                         <label for ="">Unrated</label>
    //                         </input>
    //                 </div>

    //             </div>


    //         <div className= "publication_filter" >
    //             By review publication date:
    //             <div className= "filterable">
    //                     <input
    //                         type= "checkbox"
    //                         id= "filterable"
    //                         name="publication_filter"
    //                         value="newest">
    //                         checked={isChecked}
    //                         onChange={handleOnChange}
    //                         <label for ="Newest">Newest-to-Oldest</label>
    //                     </input>
    //                 </div>

    //                 <div className= "filterable">
    //                     <input
    //                         type= "checkbox"
    //                         id= "filterable"
    //                         name="publication_filter"
    //                         value="oldest">
    //                         <label for ="oldest">Oldest-to-Newest</label>
    //                         </input>
    //                 </div>
    //                     </div>

    //         < div className= "pick_filter" >
    //             By critic pick:
    //             <div className= "filterable">
    //                     <input type= "checkbox"
    //                         id= "filterable"
    //                         name="pick_filter"
    //                         value="1">
    //                         checked={isChecked}
    //                         onChange={handleOnChange}
    //                         <label for ="1">Thumbs Up</label>
    //                         </input>
    //                 </div>

    //                 <div className= "filterable">
    //                     <input
    //                         type= "checkbox"
    //                         id= "filterable"
    //                         name="pick_filter"
    //                         value="0">
    //                         <label for ="0">Thumbs Down</label>
    //                         checked={isChecked}
    //                         onChange={handleOnChange}
    //                     </input>

    //                 </div>
    //                     </div>

    //     <button type="submit" value="submit">Submit</button>

    //     Once hit submit, filters results based on isChecked status (make button clicks required?)
    //     );

    //  }
