import { ReactNode } from 'react';

export interface IProjectData {
  image: string;
  title: string;
  link: string;
}

export interface INavigationPath {
  title: string;
  path: string;
}

export interface ISocialData {
  title: string;
  link: string;
  icon: ReactNode;
}
