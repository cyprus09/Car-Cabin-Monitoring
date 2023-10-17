// pages/index.tsx
import React from 'react';
import { CardWithForm } from '@/components/main-card';
import NavBar from '@/components/nav-bar';

export default function Home() {
  return (
    <div>
      <NavBar />
      <CardWithForm />
    </div>
  );
}
