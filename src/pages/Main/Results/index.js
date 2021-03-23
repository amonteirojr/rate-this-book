import React, { useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings';
import PropTypes from 'prop-types';
import { MdArrowForward } from 'react-icons/md';

import { getBook } from '../../../services/books';

import { Container, Wrapper, Cover, Info, ActionButton } from './styles';
import { Link } from 'react-router-dom';

function Results({ isbn }) {
  const [book, setBook] = useState();

  useEffect(() => {
    const loadBook = async () => {
      const response = await getBook(isbn);
      setBook(response);
    };

    loadBook();
  }, [isbn]);

  return (
    <>
      {book && (
        <Container>
          <Link to={`/book-details/${isbn}`}>
            <Wrapper>
              <Cover src={book.coverUrl} />
              <Info>
                <h4 className="name">{book.name}</h4>
                <div className="book-rating">
                  <StarRatings
                    rating={book.rating}
                    starRatedColor="#f1c40f"
                    starDimension="18"
                    starSpacing="0"
                  />
                  {` (${book.rating})`}
                </div>
                <div className="price">
                  <span className="discount">R$ {book.price}</span> por{' '}
                  <span>R$ {book.promotionalPrice}</span>
                </div>
              </Info>
              <ActionButton>
                <span className="button">
                  <MdArrowForward size={32} color="#fff" />
                </span>
              </ActionButton>
            </Wrapper>
          </Link>
        </Container>
      )}
    </>
  );
}

Results.propTypes = {
  isbn: PropTypes.string.isRequired,
};

export default Results;
