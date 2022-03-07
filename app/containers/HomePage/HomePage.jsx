import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet' // Header Generator
import { compose } from 'redux'
import { connect } from 'react-redux'
import stardust from 'images/Startdust.jpg'
import { Switch, Route, useHistory } from 'react-router-dom'

import { getMovieReviews } from 'resources/reviews/reviews.actions'

export function HomePage(props) {
  const history = useHistory()

  useEffect(() => {
    props.getMovieReviews()
  },[])

  return (
      <main>
        <div className='.App-article'>
         <div className="app-wrapper">
            <div className='homepage'>
              <img src={stardust} className='homepage-img' />
              <h2>"What do stars do? They shine."</h2>
            <p>&mdash; Yvaine, 'Stardust'</p>
            </div>
          </div>
        </div>
      </main>
  )
}

const mapStateToProps = (state, ownProps) => {}

const mapDispatchToProps = dispatch => ({
  getMovieReviews: () => dispatch(getMovieReviews()),
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(HomePage)
