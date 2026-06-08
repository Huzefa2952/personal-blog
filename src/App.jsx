import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";

function App() {
  const posts = [
    {
      title: "My First Blog Post",
      date: "June 8, 2026",
      preview: "This is my first blog post."
    },
    {
      title: "Learning React",
      date: "June 7, 2026",
      preview: "React makes UI development easier."
    }
  ];

  return (
    <div>
      <Header name="My Personal Blog" />

      <About
        image="https://via.placeholder.com/150"
        about="Welcome to my personal blog."
      />

      <ArticleList posts={posts} />
    </div>
  );
}

export default App;