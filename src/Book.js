import React from 'react'
// Set up default when it not loaded details
export const Book = ({title="No Title Provided", author="No Author", pages=0, release="Unknown", freeBookmark}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>By: {author}</p>
      <p>Pages: {pages} pages</p>
      <p>Release Date: {release}</p>
      <p>Free Bookmark Today: {freeBookmark ? 'Yes!': 'No!'}</p>
    </section>
  )
}
