import Link from 'next/link';

import Layout from '../components/Layout';

const Blog = () => (
  <Layout title="My Blog">
    <ul>
      <li>
        <Link href="/post?title=React">
          <a>React Post</a>
        </Link>
      </li>
    </ul>
  </Layout>
);

export default Blog;
