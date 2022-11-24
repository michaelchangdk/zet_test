// Function for selecting 10 random stories from an array of 500 stories.
// Comment: Could use some more logic for error-handling the rare occasion that the same story is selected twice.
export const selectRandomStories = (array) => {
  const randomStories = [];
  for (let i = 0; i < 10; i++) {
    const randomStory = array[Math.floor(Math.random() * array.length)];
    randomStories.push(randomStory);
  }
  return randomStories;
};
