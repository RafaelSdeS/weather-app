import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="h-16 bg-gray-900 flex items-center justify-between px-4 text-white col-span-5">
      <div>
        <span className="text-lg font-bold">Weather App</span>
      </div>
      <ul className="flex space-x-4">
        <li>
          <p className="hover:text-gray-200">
            <Link to="/">Home</Link>
          </p>
        </li>
        <li>
          <p className="hover:text-gray-200">
            <Link to="/about">About</Link>
          </p>
        </li>
        <li>
          <p className="hover:text-gray-200">
            <Link to="/contact">Contact</Link>
          </p>
        </li>
        <li>
          <p className="hover:text-gray-200">
            <Link to="/profile">Profile</Link>
          </p>
        </li>
      </ul>
    </div>
  )
}

export default Header
