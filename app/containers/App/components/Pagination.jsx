import React from 'react';

function Pagination({reviews, reviews_limit,  }) {
    const [pages] = useState(Math.round(reviews.length / reviews_limit))
    const [currentPage, setCurrentPage] = useState(1);

    function nextPage() {
        setCurrentPage((page) => page + 1);
    }

    function previousPage() {
        setCurrentPage((page) => page - 1);
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const reviewsLimit = () => {
        const startIndex = currentPage * reviews_limit - reviews_limit;
        const endIndex = startIndex + reviews_limit;
        return reviews.slice(startIndex, endIndex)
    };

    const pageLimit = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, index) => start + index + 1);
    };

      return (
        <div>
          <div className="review_amount">
            {reviewsLimit().map((d, index) => (
              <RenderComponent key={index} data={d} />
            ))}
          </div>

          <div className="pagination">
            <button
              onClick={previousPage}
              className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
            >
              prev
            </button>

            {pageLimit().map((item, index) => (
              <button
                key={index}
                onClick={changePage}
                className={`paginationItem ${currentPage === item ? 'active' : null}`}
              >
                <span>{item}</span>
              </button>
            ))}

            <button
              onClick={nextPage}
              className={`next ${currentPage === pages ? 'disabled' : ''}`}
            >
              next
            </button>
          </div>
        </div>
      );
}

export default Pagination;