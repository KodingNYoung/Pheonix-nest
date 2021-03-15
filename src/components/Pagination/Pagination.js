import React from "react";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Pagination.css"
const Pagination = ({ moveToPrevPage, moveToNextPage }) => {
  return (
    <nav className='pagination'>
      <button className='prev-page' onClick={moveToPrevPage}>
        <FontAwesomeIcon icon={faChevronLeft} />
        <span>previous</span>
      </button>
      <section className='numbers'>
        <button className='active'>1</button>
        <button>2</button>
        <button>3</button>
      </section>
      <button className='next-page' onClick={moveToNextPage}>
        <span>next</span>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </nav>
  );
};

// const PageButton = () => {
//   return 
// }
export default Pagination;
