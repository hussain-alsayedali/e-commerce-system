import Input from '../components/Input.tsx';
import Content from '../components/Content.tsx';


const CheckoutPage = () => {
  

  return (
    <><div className="py-10 px-20">
          <h1 className="text-4xl font-semibold text-purple-900">Checkout</h1>
          <div className="flex justify-between">
      <Input />
      <Content />
          </div>
      </div>
      </>
  );
};

export default CheckoutPage;
