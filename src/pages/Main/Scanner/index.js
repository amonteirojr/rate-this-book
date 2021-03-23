import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Quagga from 'quagga';

import { Container, Video, ScanMarker, ScanMarkerContainer } from './styles';
import { validateIsbn } from '../../../services/books';
import Logo from '../../../components/Logo';

function Scanner({ onScan }) {
  let scannerAttempts = 0;

  function onDetected(result) {
    Quagga.offDetected(onDetected);

    const isbn = result.codeResult.code;

    if (validateIsbn(isbn)) {
      onScan(isbn);
    } else {
      if (scannerAttempts >= 5) {
        alert(
          'Não é possível ler o código do livro, por favor, tente novamente.'
        );
      }
    }

    scannerAttempts++;
    Quagga.onDetected(onDetected);

    // alert(isbn);
  }

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      Quagga.init(
        {
          inputStream: {
            name: 'Live',
            type: 'LiveStream',
            target: document.querySelector('#video'),
            constraints: {
              facingMode: 'environment',
            },
          },
          numOfWorkers: 1,
          locate: true,
          decoder: {
            readers: ['ean_reader'],
          },
        },
        (err) => {
          if (err) {
            console.error(err);
            alert(
              'Erro ao abrir câmera do dispositivo. Por favor, dê a permissão de uso.'
            );
            return;
          }

          Quagga.start();
        },

        Quagga.onDetected(onDetected)
      );
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Video id="video" />
      <Container>
        <ScanMarkerContainer>
          <ScanMarker />
          <p className="label">Aponte para o código de barras do livro.</p>
        </ScanMarkerContainer>
        <Logo css={{ marginBottom: '30px' }} />
      </Container>
    </>
  );
}

Scanner.propTypes = {
  onScan: PropTypes.func,
};

export default Scanner;
