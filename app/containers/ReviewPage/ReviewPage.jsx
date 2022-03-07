import React from 'react';
import ReviewTable from 'components/ReviewTable.jsx';
import ReviewData from '../../public/movie-reviews.json';
// import ReviewFilter from 'components/ReviewFilter.jsx';
import ReviewSearch from 'components/ReviewSearch.jsx';
import FilterTable from 'components/FilterTable.jsx';


function ReviewPage({ reviews }) {
    return (

        <article className='App-article'>
            <h2>Conflicted on seeing a movie? Are you easily swayed by others opinions? If yes, check out our reviews below!</h2>
            <h3>(Even if no, you should still take a peek.)</h3>
            <p> Search for a film by its title or filter our reviews by rating, publication date, author, or critic picks!  </p>

            {/* <ReviewFilter reviews={ReviewData}/> */}
            <ReviewSearch data={ReviewData}/>
            <FilterTable reviews={ReviewData}/>
            <ReviewTable reviews={ReviewData}/>



        </article>

    )
}

export default ReviewPage;