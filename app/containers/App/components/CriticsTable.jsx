import React from 'react';
import CriticsRow from './CriticsRow';

function CriticsTable({ critics }) {
    return (
        <table id="critics_list">
            <thead>
                <tr>
                    <th> Critic</th>
                    <th> Reviews Contributions</th>
                    <th> Critics Pick</th>
                    <th> Bio </th>
                </tr>
            </thead>
            <tbody>
                {critics.map((critic, i) => <CriticsRow critic={critic} key={i} /> )}
            </tbody>
            <tfoot>
            </tfoot>
        </table>

    )
}

export default CriticsTable;