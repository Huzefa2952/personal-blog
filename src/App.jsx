import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";

function App() {
  const posts = [
    {
      id: 1,
      title: "Getting Started with React",
      date: "June 8, 2026",
      preview: "React makes building user interfaces simple and efficient."
    },
    {
      id: 2,
      title: "Understanding Components",
      date: "June 7, 2026",
      preview: "Components help create reusable UI elements."
    }
  ];

  return (
    <div>
      <Header name="Huzefa's Personal Blog" />

      <About
        image="https://via.placeholder.com/150"
        about="Welcome to my blog where I share my thoughts on technology, programming, and learning."
      />

      <ArticleList posts={posts} />
    </div>
  );
}

export default App;