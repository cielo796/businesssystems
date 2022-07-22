//components/pagination.js
import React from "react"
import { Link } from "gatsby"
import {Pagination} from 'react-bootstrap';
import "./pagination.scss";

export const PaginationNews = ({ totalCount }) => {
  const PER_PAGE = 15

  const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <div class="listnumber">
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
          <Link to={`/informationnews/${number}`}>{number}</Link>
      ))}
    </div>
  )
}