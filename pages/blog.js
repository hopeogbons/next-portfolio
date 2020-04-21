import Link from 'next/link';

import Layout from '../components/Layout';

const PostLink = ({ title, slug }) => (
  <li>
    <Link as={`/${slug}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

const Blog = () => (
  <Layout title="My Blog">
    <ul>
      <PostLink slug="react-tutorial" title="React Tutorial" />
      <PostLink slug="vue-tutorial" title="Vue Tutorial" />
      <PostLink slug="angular-tutorial" title="Angular Tutorial" />
    </ul>
  </Layout>
);

export default Blog;
