const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto  px-10 py-12">
      <div className="flex justify-between items-center gap-20">

        {/* LEFT */}
        <div className="text-[12rem] font-semibold  tracking-tight select-none">
          refokus.
        </div>

        {/* RIGHT */}
        <div className="flex gap-20">

         
          <div>
            <h4 className="mb-4 text-gray-400">Socials</h4>
            <ul className="space-y-2">
              <li className="hover:text-gray-300 cursor-pointer">Instagram</li>
              <li className="hover:text-gray-300 cursor-pointer">Twitter</li>
              <li className="hover:text-gray-300 cursor-pointer">LinkedIn</li>
            </ul>
          </div>

          
          <div>
            <h4 className="mb-4 text-gray-400">Sitemaps</h4>
            <ul className="space-y-2">
              <li className="hover:text-gray-300 cursor-pointer">Home</li>
              <li className="hover:text-gray-300 cursor-pointer">Work</li>
              <li className="hover:text-gray-300 cursor-pointer">Careers</li>
              <li className="hover:text-gray-300 cursor-pointer">Contact</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <p className="mt-10 max-w-md text-gray-400">
        Refokus is pioneering digital agency driven by design and empowered by technology.
      </p>
      <img className="w-24 bg-blue-500 px-4 py-2" src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />


          </div>
      
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;