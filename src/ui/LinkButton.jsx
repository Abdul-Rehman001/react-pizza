import { Link, useNavigate } from 'react-router-dom';

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className =
    'font-semibold uppercase text-sm text-red-500 hover:text-yellow-600 hover:underline';

  if (to === '-1')
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
