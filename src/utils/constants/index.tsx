import React from 'react';
import {
  FaFacebookF,
  FaLinkedin,
  FaPinterestP,
  FaTwitter,
} from 'react-icons/fa';

import { INavigationPath, ISocialData } from '../../types';

export const navigationPaths: INavigationPath[] = [
  { title: 'Главная', path: '/' },
  { title: 'Галерея', path: '/gallery' },
  { title: 'Проекты', path: '/projects' },
  { title: 'Сертификаты', path: '/sertificats' },
  { title: 'Контакты', path: '/contacts' },
];

export const socialData: ISocialData[] = [
  {
    title: 'facebook',
    link: 'https://www.facebook.com',
    icon: <FaFacebookF />,
  },
  {
    title: 'twitter',
    link: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    title: 'linkedin',
    link: 'https://www.linkedin.com',
    icon: <FaLinkedin />,
  },
  {
    title: 'pinterest',
    link: 'https://www.pinterest.com',
    icon: <FaPinterestP />,
  },
];
