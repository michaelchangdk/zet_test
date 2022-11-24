import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";

// Component imports
import Card from "../components/Card";

// Function imports
import { selectRandomStories } from "../helpers/helpers";

const Home = () => {
  const [stories, setStories] = useState([]);

  // Function for getting story and author information.
  const fetchStoryInformation = (storyIDs) => {
    storyIDs.map(async (id) => {
      // Fetch story information.
      const storyResponse = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );
      const story = await storyResponse.json();
      // Fetch author information.
      const authorResponse = await fetch(
        `https://hacker-news.firebaseio.com/v0/user/${story.by}.json`
      );
      const author = await authorResponse.json();
      // Add story and author information to the stories array.
      setStories((stories) => [...stories, { story, author }]);
    });
  };

  // useEffect hook for fetching stories.
  useEffect(() => {
    // Function for fetching top stories from the Hacker News API.
    const fetchTopStories = async () => {
      // Reset stories array to empty.
      setStories([]);
      // Fetch top stories
      const response = await fetch(
        "https://hacker-news.firebaseio.com/v0/topstories.json"
      );
      const data = await response.json();
      // Fetch story and author information with random stories callback function.
      fetchStoryInformation(selectRandomStories(data));
    };
    fetchTopStories();
  }, []);

  return (
    <Page>
      <Title>Hacker News</Title>
      {stories.length < 10 && <p>Loading...</p>}
      <CardGrid>
        {stories.length === 10 &&
          stories
            .sort((a, b) => {
              return a.story.score - b.story.score;
            })
            .map((story) => (
              <Card
                key={story.story.id}
                title={story.story.title}
                score={story.story.score}
                datetime={story.story.time}
                author={story.author.id}
                karma={story.author.karma}
                url={story.story.url}
              />
            ))}
      </CardGrid>
    </Page>
  );
};

export default Home;

const Page = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
  margin: 1rem 0;
`;

const CardGrid = styled.div`
  display: grid;
  gap: 1rem;
  padding-bottom: 2rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
