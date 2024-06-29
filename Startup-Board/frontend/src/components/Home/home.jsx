import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomePage = () => {
  return (
    <HomeContainer>
      <Header>
        <Logo>StartUpBoard</Logo>
        <Nav>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </Nav>
      </Header>
      <Main>
        <Title>Welcome to StartUpBoard</Title>
        <Description>
          Connecting investors with start-up founders to build the next big thing.
        </Description>
        <CallToAction>
          <Link to="/signup">Get Started</Link>
        </CallToAction>
      </Main>
      <BlogSection>
        <BlogHeader>Latest from Our Blog</BlogHeader>
        <BlogPost>
          <BlogTitle>How to Secure Funding for Your Startup</BlogTitle>
          <BlogContent>
            Tips and strategies for securing investment in the competitive startup landscape.
          </BlogContent>
          <ReadMoreLink to="/blog">Read More</ReadMoreLink>
        </BlogPost>
        <BlogPost>
          <BlogTitle>Startup Success Stories: Learning from the Best</BlogTitle>
          <BlogContent>
            Inspirational stories from successful startups and their journey to success.
          </BlogContent>
          <ReadMoreLink to="/blog">Read More</ReadMoreLink>
        </BlogPost>
      </BlogSection>
      <Footer>
        <FooterText>© 2024 StartUpBoard. All rights reserved.</FooterText>
      </Footer>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f4f4f4;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #007bff;
  color: white;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const CallToAction = styled.div`
  a {
    display: inline-block;
    padding: 1rem 2rem;
    background: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-size: 1.25rem;
    &:hover {
      background: #0056b3;
    }
  }
`;

const BlogSection = styled.section`
  background: #fff;
  padding: 2rem;
  margin: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const BlogHeader = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const BlogPost = styled.article`
  margin-bottom: 2rem;
`;

const BlogTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const BlogContent = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const ReadMoreLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 1rem;
  background: #007bff;
  color: white;
`;

const FooterText = styled.p`
  margin: 0;
`;

export default HomePage;
