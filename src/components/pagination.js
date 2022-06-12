//components/pagination.js
import React from "react"
import { Link } from "gatsby"
import {Button, ButtonToolbar,ButtonGroup} from 'react-bootstrap';
import "./pagination.scss";

export const Pagination = ({ totalCount }) => {
  const PER_PAGE = 5

  const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i)

  return (
     <ul > 
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
   <li key={index}>
     <Link to={`/information/${number}`}>{number}</Link>
     </li>

      ))}
    </ul>
  )
}
