import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import Info from './Info';

import { Container } from './styles';

import { getBook } from '../../services/books';
import GeneralScore from './GeneralScore';
import Scores from './Scores';

export default function BookDetails() {
  const [book, setBook] = useState();

  const { isbn } = useParams();

  useEffect(() => {
    console.log('book');
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
          <Info book={book} />
          <GeneralScore book={book} />
          <Scores book={book} />
        </Container>
      )}
    </>
  );
}
