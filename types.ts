import React from 'react';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export enum VisaType {
  TOURIST = 'TOURIST',
  BUSINESS = 'BUSINESS',
  STUDENT = 'STUDENT',
  WORK = 'WORK',
  RESIDENCE = 'RESIDENCE'
}