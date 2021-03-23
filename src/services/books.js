import api from './api';

export const validateIsbn = (isbn) => {
  if (isbn.length !== 13 || isbn.substring(0, 3) !== '978') return false;

  const isbnDigit = parseInt(isbn[isbn.length - 1]);

  let multiplier = 0;

  const isbnSum = isbn
    .substring(0, 12)
    .split('')
    .reduce((total, num) => {
      multiplier = multiplier === 1 ? 3 : 1;
      return total + parseInt(num) * multiplier;
    }, 0);

  const validDigit = 10 - (isbnSum % 10);

  return isbnDigit === validDigit;
};

export const calculateScore = (score) => {
  let objScore = {};

  if (score > 4.5) {
    objScore = { color: '#2ECC71', label: 'Excelente', recommended: true };
  } else if (score > 3.5) {
    objScore = { color: '#f1c40f', label: 'Bom', recommended: false };
  } else if (score > 2.5) {
    objScore = { color: '#e67e22', label: 'Razoável', recommended: false };
  } else if (score > 1) {
    objScore = { color: '#d35400', label: 'Ruim', recommended: false };
  } else {
    objScore = { color: '#c0392b', label: 'Péssimo', recommended: false };
  }

  return objScore;
};

export const getBook = async (isbn) => {
  const response = await api.get(`/books/${isbn}`);
  return response.data;
};
