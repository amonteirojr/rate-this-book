import React from 'react';

export default function Logo({ css }) {
  return (
    <div style={css}>
      <img
        src="../../../assets/questions.svg"
        alt="Logotipo bookfind"
        width="137"
        height="69"
      />
      <h4
        style={{
          fontFamily: 'sans-serif',
          fontWeight: 'normal',
          fontSize: '18px',
          textAlign: 'center',
        }}
      >
        Rate this book
      </h4>
    </div>
  );
}
