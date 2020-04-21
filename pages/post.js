import { withRouter } from 'next/router';

import Layout from '../components/Layout';

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p style={{ width: '80vw' }}>
      Lerem ipsum dolor ist amet, consecterutrn adipisicing elit. Lerem ipsum
      dolor ist amet, consecterutrn adipisicing elit. Lerem ipsum dolor ist
      amet, consecterutrn adipisicing elit.
    </p>
  </Layout>
);

export default withRouter(Post);
