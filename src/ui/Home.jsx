import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';
import PizzaSlider from './PizzaSlider';

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="">
      <div className="my-10 px-4 text-center sm:my-16">
        <h1 className="mb-8  text-xl font-semibold text-red-500 md:text-3xl">
          <span className="text-2xl">THE BEST PIZZA.</span>
          <br />
          <span className="font-bold text-yellow-500">
            Straight out of the oven, straight to you.
          </span>
        </h1>

        {username === '' ? (
          <CreateUser />
        ) : (
          <Button to="/menu" type="primary">
            Continue ordering, {username}
          </Button>
        )}
        <div className="my-10 rounded-xl border-2 border-red-500 p-7 opacity-100">
          <PizzaSlider />
        </div>
      </div>
      <footer className="text-center text-sm opacity-70">
        <p className="text-red-700">🍕 Slice into happiness with every bite</p>
        <p className="text-neutral-800">©React-Pizza-Co.</p>
      </footer>
    </div>
  );
}

export default Home;
