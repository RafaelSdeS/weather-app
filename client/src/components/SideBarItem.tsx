import { Link } from 'react-router-dom'

interface SideBarItemProps {
  location: string
}

const SideBarItem: React.FC<SideBarItemProps> = ({ location }) => {
  return (
    <li className="py-2">
      <Link
        to={`/?cityName=${encodeURIComponent(location)}`}
        className="block hover:text-gray-200"
      >
        {location}
      </Link>
    </li>
  )
}

export default SideBarItem
