import React from 'react';
import {
  FaFacebookF,
  FaLinkedin,
  FaPinterestP,
  FaTwitter,
} from 'react-icons/fa';

import { INavigationPath, IProjectData, ISocialData } from '../../types';

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

export const projects: IProjectData[] = [
  {
    image: 'images/projects/building_plate_type.jpg',
    title: 'досуговый центр',
    link: '/projects/buildings/plate-type',
  },
  {
    image: 'images/projects/building_art_object.jpg',
    title: 'арт объект',
    link: '/projects/buildings/art-object',
  },
  {
    image: 'images/projects/building_sport.jpg',
    title: 'cпорт',
    link: '/projects/buildings/sport',
  },
  {
    image: 'images/projects/building_home.jpg',
    title: 'жилищный комплекс',
    link: '/projects/buildings/home',
  },
  {
    image: 'images/projects/building_park.jpg',
    title: 'парки',
    link: '/projects/buildings/park',
  },
];
