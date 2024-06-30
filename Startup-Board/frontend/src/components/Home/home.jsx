import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LandingPage = () => {
  return (
    <HomeContainer>
      <Header>
        <Logo>LaunchPad Connect</Logo>
        <Nav>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </Nav>
      </Header>
      <HeroSection>
        <HeroContent>
          <Title>Welcome to LaunchPad Connect</Title>
          <Description>
            Where investors and startups thrive together!
          </Description>
          <CallToAction>
            <Link to="/signup">Get Started</Link>
          </CallToAction>
        </HeroContent>
      </HeroSection>
      <Section>
        <SectionTitle>For Startups</SectionTitle>
        <SectionContent>
          Connect with investors, seek advice, and grow your business!
        </SectionContent>
        <ActionButton>
          <Link to="/startups">Explore Startups</Link>
        </ActionButton>
      </Section>
      <FeaturesSection>
        <Feature>
          <FeatureIcon src="/icons/investor.svg" alt="Investor Icon" />
          <FeatureTitle>Investor Network</FeatureTitle>
          <FeatureDescription>
            Connect with a diverse network of investors looking for promising startups.
          </FeatureDescription>
        </Feature>
        <Feature>
          <FeatureIcon src="/icons/startup.svg" alt="Startup Icon" />
          <FeatureTitle>Startup Showcase</FeatureTitle>
          <FeatureDescription>
            Showcase your startup and attract potential investors and partners.
          </FeatureDescription>
        </Feature>
        {/* Add more features as needed */}
      </FeaturesSection>
      <TestimonialsSection>
        <TestimonialsHeader>What People are Saying</TestimonialsHeader>
        <TestimonialsSlider>
          <TestimonialCard>
            <TestimonialText>
              "Startup Board helped us connect with the right investors and scale our business rapidly."
            </TestimonialText>
            <TestimonialAuthor>- John Doe, CEO of Startup X</TestimonialAuthor>
          </TestimonialCard>
          <TestimonialCard>
            <TestimonialText>
              "As an investor, I found Startup Board to be a valuable platform for discovering innovative startups."
            </TestimonialText>
            <TestimonialAuthor>- Jane Smith, Angel Investor</TestimonialAuthor>
          </TestimonialCard>
          <TestimonialCard>
            <TestimonialText>
              "The resources and mentorship provided by Startup Board have been instrumental in our growth journey."
            </TestimonialText>
            <TestimonialAuthor>- Michael Johnson, Co-founder of TechCo</TestimonialAuthor>
          </TestimonialCard>
        </TestimonialsSlider>
      </TestimonialsSection>
      <Footer>
        <FooterText>&copy; 2023 Startup Board. All rights reserved.</FooterText>
        <SocialIcons>
          <SocialLink href="https://twitter.com/example"><SocialIcon src="/icons/twitter.svg" alt="Twitter Icon" /></SocialLink>
          <SocialLink href="https://facebook.com/example"><SocialIcon src="/icons/facebook.svg" alt="Facebook Icon" /></SocialLink>
          <SocialLink href="https://linkedin.com/example"><SocialIcon src="/icons/linkedin.svg" alt="LinkedIn Icon" /></SocialLink>
        </SocialIcons>
      </Footer>
    </HomeContainer>
  );
};

// Styled components and CSS-in-JS styling
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f4f4f4; /* Light mode background */
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #007bff; /* Dark mode background */
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

const HeroSection = styled.section`
  background-image: url('/images/hero-background.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 4rem;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #4CAF50; /* Green */
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #9C27B0; /* Purple */
`;

const CallToAction = styled.div`
  a {
    display: inline-block;
    padding: 1rem 2rem;
    background-color: #E91E63; /* Pink */
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-size: 1.25rem;
    &:hover {
      background-color: #C2185B; /* Darker pink on hover */
    }
  }
`;

const Section = styled.section`
  background-color: #fff; /* White */
  padding: 2rem;
  margin: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #795548; /* Brown */
`;

const SectionContent = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const ActionButton = styled.div`
  a {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: #FF5722; /* Deep Orange */
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-size: 1rem;
    &:hover {
      background-color: #E64A19; /* Darker orange on hover */
    }
  }
`;

const FeaturesSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
`;

const Feature = styled.div`
  text-align: center;
`;

const FeatureIcon = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const TestimonialsSection = styled.section`
  background-color: #f4f4f4; /* Light grey */
  padding: 4rem 2rem;
  margin: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const TestimonialsHeader = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #2196F3; /* Blue */
`;

const TestimonialsSlider = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  margin-bottom: 1rem;
`;

const TestimonialCard = styled.div`
  flex: 0 0 auto;
  width: 80%;
  margin-right: 1rem;
  padding: 1rem;
  background-color: #fff; /* White */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  scroll-snap-align: start;
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const TestimonialAuthor = styled.p`
  font-size: 0.875rem;
  font-style: italic;
  text-align: right;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 1rem;
  background-color: #007bff; /* Dark blue */
  color: white;
`;

const FooterText = styled.p`
  margin: 0;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: white;
`;

const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export default LandingPage;
