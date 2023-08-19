import './CustomButton.scss';

import classNames from 'classnames';
import React from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

interface Props {
  text?: string;
  isBanner?: boolean;
  isLeft?: boolean;
  isWithoutBorder?: boolean;
  onClick?: () => void;
}

export const CustomButton: React.FC<Props> = ({
  text,
  isBanner,
  isLeft,
  isWithoutBorder,
  onClick,
}) => (
  <button
    className={classNames(
      'custom-button',
      {
        'custom-button--with-text': text,
      },
      { 'custom-button--banner': isBanner },
      { 'custom-button--without-border': isWithoutBorder },
    )}
    onClick={onClick}
  >
    {text ? text : ''} {isLeft ? <BsArrowLeft /> : <BsArrowRight />}
  </button>
);
