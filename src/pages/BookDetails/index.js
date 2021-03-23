import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import Info from './Info';

import { Container } from './styles';

import { getBook } from '../../services/books';
import GeneralScore from './GeneralScore';
import Scores from './Scores';
import ExtraInfo from './ExtraInfo';
import { MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';

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
          <Link className="go-back" to="/">
            <MdArrowBack size={32} color="#2ecc71" />
          </Link>
          <Info book={book} />
          <GeneralScore book={book} />
          <Scores book={book} />
          <ExtraInfo book={book} />
        </Container>
      )}
    </>
  );
}
