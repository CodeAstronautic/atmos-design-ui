// pages/index.js
import React from 'react';
import Home from './home';

const HomePage = ({ users }: any) => {
  return <Home users={users}/>;
};

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/users');
  const data = await res.json();

  return {
    props: {
      users:data,
    },
  };
};

export default HomePage;
