import { Link } from "react-router-dom";

import { Button } from "./ui/button";

export const Header = () => {
  return (
    <nav className="w-full h-[60px] p-3 flex justify-between items-center border-b-2">
      <Link to="/">
        <h2 className="font-bold select-none">WD Compiler</h2>
      </Link>
      <ul className="flex gap-3">
        <li>
          <Link to="/compiler">
            <Button variant="outline">Compiler</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
