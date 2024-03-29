import './CustomButton.scss';

import classNames from 'classnames';
import React from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

interface Props {
  text?: string;
  isBanner?: boolean;
  isLeft?: boolean;
  isWithoutBorder?: boolean;
  ghost?: boolean;
  dark?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export const CustomButton: React.FC<Props> = ({
  text,
  isBanner,
  isLeft,
  isWithoutBorder,
  ghost,
  dark,
  disabled,
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
      { 'custom-button--ghost': ghost },
      { 'custom-button--dark': dark },
    )}
    onClick={onClick}
    aria-label={!text && !isLeft ? 'стрелка вправо' : 'стрелка влево'}
    disabled={disabled}
  >
    {text ? text : ''} {isLeft ? <BsArrowLeft /> : <BsArrowRight />}
  </button>
);
