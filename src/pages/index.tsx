// pages/index.js
import React from 'react';
import Home from './home';
import { NextPage } from 'next';
import { User } from '@/interface/types';

interface ProfileCardsProps {
  users: User[];
}
const HomePage: NextPage<ProfileCardsProps> = ({ users }) => {
  return <Home users={users} />;
};

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/users');
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
};

export default HomePage;
