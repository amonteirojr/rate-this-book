import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
`;

export const Video = styled.div`
  video {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
  }

  canvas {
    display: none;
  }
`;

export const ScanMarkerContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .label {
    color: #fff;
    font-size: 14px;
    font-style: italic;
    margin-top: 20px;
  }
`;

export const ScanMarker = styled.div`
  width: 260px;
  height: 260px;
  border: 4px solid #ffffff;
`;
