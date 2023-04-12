import React, { memo } from 'react';
import { StyledDisplay } from './styles/StyledDisplay';

const Display = ({ gameOver, text }) => (
  <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
);

export default memo(Display);
