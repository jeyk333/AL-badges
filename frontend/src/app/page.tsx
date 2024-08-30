'use client';

import { FC } from 'react';
import { ApolloProvider } from '@apollo/client';

import Header from '@/components/Header';
import { client } from '@/config';
import LastActivities from '@/components/Badges/LastActivities';
import Badges from '@/components/Badges/BadgesContent';
import Footer from '@/components/Footer';

const Home: FC = () => {
  return (
    <ApolloProvider client={client}>
      <main className="bg-elevation-dark-main pb-4">
        <Header />
        <LastActivities />
        <Badges />
        <Footer />
      </main>
    </ApolloProvider>
  );
};

export default Home;
