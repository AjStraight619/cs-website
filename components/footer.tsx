import Link from "next/link";
import SearchDialog from "./search/search-dialog";

const Footer = () => {
  return (
    <div className="w-full md:max-w-3xl py-2 px-4 bg-mustard-1 fixed bottom-0 mb-2 left-0 right-0 mx-auto rounded-md">
      <footer className="flex flex-row items-center justify-between">
        <Link className="hover:underline" href="/resources">
          Current Resources
        </Link>
        <SearchDialog />
      </footer>
    </div>
  );
};

export default Footer;
