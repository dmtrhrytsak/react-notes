import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="p-4 bg-gray-100 border border-slate-300">
      <div className="container flex justify-between mx-auto">
        <Link to="/" className="font-semibold">
          Notes.js
        </Link>

        <nav>
          <Link to="/archive" className="text-sm sm:text-base hover:underline">
            Archived Notes
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
