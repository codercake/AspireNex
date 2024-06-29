import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BlogList = () => {
  const blogPosts = [
    { id: 1, title: 'The Future of Startups', summary: 'Exploring trends and predictions for startups.' },
    { id: 2, title: 'Investment Strategies', summary: 'How to attract investors to your startup.' },
    { id: 3, title: 'Building a Strong Team', summary: 'Tips for assembling a talented startup team.' },
  ];

  return (
    <BlogContainer>
      <Title>Blog</Title>
      <Posts>
        {blogPosts.map((post) => (
          <Post key={post.id}>
            <PostTitle>{post.title}</PostTitle>
            <PostSummary>{post.summary}</PostSummary>
            <ReadMore to={`/blog/${post.id}`}>Read More</ReadMore>
          </Post>
        ))}
      </Posts>
    </BlogContainer>
  );
};

const BlogContainer = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Post = styled.div`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: #fff;
`;

const PostTitle = styled.h2`
  margin: 0 0 0.5rem;
`;

const PostSummary = styled.p`
  margin: 0 0 1rem;
`;

const ReadMore = styled(Link)`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default BlogList;
