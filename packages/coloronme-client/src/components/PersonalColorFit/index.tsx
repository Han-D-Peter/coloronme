import { useProducts } from '@/src/query/personal-color-fit/colorFit.queries';
import DefaultLayout from '../Common/Layout/DefaultLayout';
import MainHeader from '../Home/components/MainHeader';
import ProductList from './component/ProductList';

const PersonalColorFitPage = () => {
  const { data } = useProducts();

  return (
    <DefaultLayout header={<MainHeader isToggleActive={false} />}>
      <ProductList />
    </DefaultLayout>
  );
};

export default PersonalColorFitPage;
