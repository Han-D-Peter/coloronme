import { NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect, useState } from 'react';
import { requestInstance } from '../api/client';

const withAuth = (
  WrappedComponent: FunctionComponent<{}> & {
    getInitialProps?(context: NextPageContext): {} | Promise<{}>;
  },
) => {
  // eslint-disable-next-line react/display-name
  return (props: JSX.IntrinsicAttributes) => {
    const router = useRouter();
    const [verified, setVerified] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
      const fetchUser = async () => {
        setIsLoading(true);
        try {
          const responseUser = await requestInstance.get<{ name: string; company: string; email: string }>('myPages');

          const data = responseUser.data;

          if (!data) {
            router.replace('/login');
            return;
          }

          setVerified(true);
          setIsLoading(false);
        } catch (error) {
          router.replace('/login');
        } finally {
          setIsLoading(false);
        }
      };

      fetchUser();
    }, [router]);

    if (isLoading) {
      <></>;
    }

    if (verified) {
      return <WrappedComponent {...props} />;
    }

    return <></>;
  };
};

export default withAuth;
