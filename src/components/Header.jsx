/**
 * Header Component
 * Displays the blog title.
 *
 * Parent Component:
 * - App
 */

function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;