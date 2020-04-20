import Layout from '../components/Layout';
import Custom404 from './404';

const CustomError = ({ statusCode }) => {
  return (
    <Layout title="Error!!!">
      <p>
        {statusCode
          ? `Could not load your user data: Status Code ${statusCode}`
          : `Couldn't get that page, sorry!`}
      </p>
    </Layout>
  );
};

export default CustomError;
