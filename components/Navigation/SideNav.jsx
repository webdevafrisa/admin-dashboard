import Link from "next/link";

const SideNav = () => {
  return (
    <div className="min-h-screen flex flex-row bg-grey-100 w-full">
      <div className="flex flex-col w-full bg-white shadow-md overflow-hidden">
        <div className="flex items-center justify-center h-20 shadow-md">
          <h1 className="text-3xl uppercase text-indigo-500">Logo</h1>
        </div>
        <ul className="flex flex-col py-4">
          <li>
            <Link
              href="/patients"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-music"></i>
              </span>
              <span className="text-sm font-medium">Patients</span>
            </Link>
          </li>
          <li>
            <Link
              href="/doctors"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-drink"></i>
              </span>
              <span className="text-sm font-medium">Doctors</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
