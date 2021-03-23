import React from 'react';
import PropTypes from 'prop-types';

import { calculateScore } from '../../../services/books';

import { Container, Score, Value } from './styles';

function Scores({ book }) {
  return (
    <Container>
      {book.scores &&
        book.scores.map((b) => (
          <Score scoreColor={calculateScore(b.value).color}>
            <Value scoreColor={calculateScore(b.value).color}>
              <span className="value">{b.value}</span>
            </Value>
            <span className="label">{b.name}</span>
          </Score>
        ))}
    </Container>
  );
}

Score.propTypes = {
  book: PropTypes.shape({
    scores: PropTypes.array,
  }).isRequired,
};

export default Scores;
