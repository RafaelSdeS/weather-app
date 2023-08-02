function SideBar() {
  return (
    <div className="flex flex-col bg-gray-800 h-[75vh] text-white col-span-1 rounded-md max-w-max">
        <div className="h-20 bg-gray-900 flex items-center justify-around flex-col">
          <input
            type="text"
            placeholder="Search"
            className="text-black px-2 py-1 border w-[85%] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      <div className="flex-grow p-4 items-center text-lg">
        <ul className="space-y-2 flex justify-around flex-col h-full">
        <li className="py-2">
            <a href="#" className="block hover:text-gray-200">Actual location</a>
          </li>
          <li className="py-2">
            <a href="#" className="block hover:text-gray-200">Localização 1</a>
          </li>
          <li className="py-2">
            <a href="#" className="block hover:text-gray-200">Localização 2</a>
          </li>
          <li className="py-2">
            <a href="#" className="block hover:text-gray-200">Localização 3</a>
          </li>
          <li className="py-2">
            <a href="#" className="block hover:text-gray-200">Localização 4</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar