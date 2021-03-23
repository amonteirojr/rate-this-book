import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function ExtraInfo({ book }) {
  return (
    <Container>
      {book &&
        book.extras.map((e) => (
          <>
            <h3 className="extra-title">{e.title}</h3>
            <p className="extra-text">{e.value}</p>
          </>
        ))}
    </Container>
  );
}

ExtraInfo.propTypes = {
  book: PropTypes.shape({
    extras: PropTypes.array,
  }).isRequired,
};

export default ExtraInfo;
