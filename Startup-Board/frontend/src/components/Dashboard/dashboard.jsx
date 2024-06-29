import React from 'react';
import styled from 'styled-components';

const DashboardBar = () => {
  return (
    <DashboardContainer>
      <Sidebar>
        <Logo>StartUpBoard</Logo>
        <SidebarMenu>
          <MenuItem active>Dashboard</MenuItem>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Messages</MenuItem>
          <MenuItem>Settings</MenuItem>
        </SidebarMenu>
      </Sidebar>
      <MainContent>
        <WelcomeMessage>Welcome to your Dashboard!</WelcomeMessage>
        <CardContainer>
          <Card>
            <CardTitle>Recent Activity</CardTitle>
            <CardContent>
              <p>No recent activity yet.</p>
            </CardContent>
          </Card>
          <Card>
            <CardTitle>Notifications</CardTitle>
            <CardContent>
              <p>No new notifications.</p>
            </CardContent>
          </Card>
          <Card>
            <CardTitle>Quick Links</CardTitle>
            <CardContent>
              <ul>
                <li><a href="#">Browse Startups</a></li>
                <li><a href="#">Investment Opportunities</a></li>
                <li><a href="#">Post Your Idea</a></li>
              </ul>
            </CardContent>
          </Card>
        </CardContainer>
      </MainContent>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const Sidebar = styled.div`
  width: 250px;
  background: #007bff;
  color: white;
  padding: 2rem 1rem;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const SidebarMenu = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const MenuItem = styled.li`
  padding: 1rem 0;
  cursor: pointer;
  ${(props) => props.active && `font-weight: bold;`}
  &:hover {
    background: #0056b3;
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 2rem;
`;

const WelcomeMessage = styled.h2`
  margin-bottom: 2rem;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

const Card = styled.div`
  background: #fff;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h3`
  margin-bottom: 1rem;
`;

const CardContent = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
    li {
      margin-bottom: 0.5rem;
    }
    a {
      color: #007bff;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default DashboardBar;
