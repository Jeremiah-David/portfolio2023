import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import NavBar from "@/components/Navbar";
import { Nav, Navbar } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Jeremiah David Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Container fluid>
          {" "}
          <Row className="index-row">
            <Col md={6} fluid className="hero-wrapper">
              <HeroSection />
            </Col>
            <Col md={6} fluid className="everything-else-wrapper g-0">
              <Services />
              <Projects />
              <Contact />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
