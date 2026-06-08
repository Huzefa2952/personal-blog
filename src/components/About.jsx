/**
 * About Component
 * Displays blog logo and description.
 *
 * Parent Component:
 * - App
 */

function About({ image, about }) {
  return (
    <aside>
      {/* Blog logo image */}
      <img src={image} alt="blog logo" width="150" />

      {/* Blog description */}
      <p>{about}</p>
    </aside>
  );
}

export default About;