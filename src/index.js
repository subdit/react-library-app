import React from 'react'
import {render} from 'react-dom'
import Library from './Library'


let bookList = [
  {"title":"Hunger", "author": "Roxane Gay", "pages": 320, "release": 2017},
  {"title":"The Sun Also Rises", "author":"Ernest Hemingway","pages":260, "release": 1926},
  {"title":"White Teeth", "author":"Zadie Smith", "pages": 480, "release": 2001 },
  {"title":"Cat's Cradle", "author":"Kurt Vonnegut", "pages": 304, "release": 1998 },
  ]

render(
      <Library books={bookList} />,

  document.getElementById('root')
)
