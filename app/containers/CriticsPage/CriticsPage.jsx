import React from 'react';
import CriticsData from '../../public/critics.json';
import CriticsTable from 'components/CriticsTable.jsx';

function CriticsPage({ critics }) {

    return (

        <div>
        <article className='App-article'>
            <h2> Critic Statistics</h2>
            <p> Got a favorite critic? Check their number of reviews written, their top picks, and bio! </p>
            <CriticsTable critics={CriticsData} />
        </article>
        </div>

    )
}

export default CriticsPage;