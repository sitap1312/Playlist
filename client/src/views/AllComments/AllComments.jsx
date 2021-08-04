import React from 'react'
import NewComment from '../FormComment/NewComment'

export default function AllComments() {
  return (
    <div>
      <h3>Comments Section</h3>
      <div className="commFormContainer">
      <NewComment />
      </div>
      <section className="commList" >
      COMMENTS GO HERE
      </section>
    </div>
  )
}
