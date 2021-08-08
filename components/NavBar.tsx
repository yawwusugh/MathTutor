import { useAuth } from "../lib/auth";
import { UserIcon, UserCircleIcon } from "@heroicons/react/solid";
// import { UserCircleIcon } from "@heroicons/react/solid";

function NavBar() {
  const auth = useAuth();
  const handleAuth = () =>
    !auth.user ? auth.signinWithGoogle() : auth.signout();

  return (
    <nav className="flex items-center justify-between p-2 w-full h-12 border-b">
      <img src="/logo.svg" alt="Math Tutor Logo" className="h-10 ml-2" />
      <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-black">
        {!auth.user ? (
          <UserIcon
            onClick={handleAuth}
            className="h-8 pt-2 group-hover:animate-bounce"
          />
        ) : (
          <UserCircleIcon
            onClick={handleAuth}
            className="h-10 pt-2 group-hover:animate-bounce"
          />
        )}
        <p className="tracking-widest opacity-0 group-hover:opacity-100">
          {!auth.user ? "Log In" : "Log Out"}
        </p>
      </div>
    </nav>
  );
}

export default NavBar;
