// pages/index.tsx
import React from 'react';
import { CardWithForm } from '@/components/main-card';
import NavBar from '@/components/nav-bar';
import { PageTopper } from '@/components/top-page';

export default function Home() {
  return (
    <div className='gradient'>
      <PageTopper/>
      <NavBar/>
      <CardWithForm />
    </div>
  );
}
