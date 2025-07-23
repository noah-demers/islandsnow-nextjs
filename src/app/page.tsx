'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';
import { Container } from 'react-bootstrap';

import TopMenu from '../components/TopMenu';
import IslandSnowLogo from '../components/IslandSnowLogo';
import MiddleMenu from '../components/MiddleMenu';
import FullWidthImage from '../components/FullWidthImage';
import FooterMenu from '../components/FooterMenu';

export default function Home() {
  return (
    <main>
      <Container fluid>
        <TopMenu />
        <IslandSnowLogo />
        <MiddleMenu />
        <FullWidthImage />
        <FooterMenu />
      </Container>
    </main>
  );
}

