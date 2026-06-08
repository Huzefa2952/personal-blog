import Article from "./Article";

/**
 * ArticleList Component
 * Renders all blog articles.
 *
 * Parent Component:
 * - App
 *
 * Child Component:
 * - Article
 */

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;