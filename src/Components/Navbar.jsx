import { links } from "./data";

const Navbar = () => {
  return (
    <nav className="bg-emerald-100 sticky top-0">
      <div
        className="mx-auto max-w-7xl text-3xl 
      px-7 py-4 flex flex-col sm:flex-row
       sm:gap-x-16 sm:items-center sm:py-8"
      >
        <h2 className="text-3xl font-bold">
          Web <span className="text-emerald-800 text-3xl">Dev</span>
        </h2>
        <div className="flex gap-x-3">
          {links.map((item) => {
            return (
              <a
                key={item.id}
                href={item.href}
                className="capitalize tracking-wide text-lg hover:text-emerald-600 duration-300"
              >
                {item.text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
