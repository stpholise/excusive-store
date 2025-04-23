import Image from "next/image";
import { useDispatch } from "react-redux";
import { logout } from "@/app/store/slices/userSlice";
// import { RootState } from '@/app/store';
import { useRouter } from "next/navigation";

interface DropdownList {
  id: number;
  name: string;
  icon: string;
  link: string;
  clickAction?: () => void;
}

const AccountDropdown = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  // const isAuthenticated = useSelector((state:  RootState) => state.user.isAuthenticated)
  const handleLogout = async () => {
    await dispatch(logout());
    router.push("/login");
  };
  const dropdownList: DropdownList[] = [
    {
      id: 1,
      name: "Mange my Account",
      icon: "/icons/light-user.svg",
      link: "/account",
    },
    {
      id: 2,
      name: "My Order",
      icon: "/icons/icon-mallbag.svg",
      link: "/settings",
    },
    {
      id: 3,
      name: "My Cancelations",
      icon: "/icons/icon-cancel.svg",
      link: "/settings",
    },
    {
      id: 4,
      name: "My Reviews",
      icon: "/icons/icon-Reviews.svg",
      link: "/settings",
    },
    {
      id: 5,
      name: "Logout",
      icon: "/icons/icon-logout.svg",
      link: "/login",
      clickAction: handleLogout,
    },
  ];
  return (
    <div className="flex absolute top-0 w-56 right-0 flex-col gap-2 z-40 text-white bg-gradient-to-r  from-gray-400   to-gray-900 dark:bg-gray-50 p-2  shadow-md">
      {dropdownList.map((item) => (
        <a
          key={item.id}
          href={item.link}
          className="flex items-center gap-2 text-sm text-gray-100 hover:text-red-400 p-2  "
          onClick={item.clickAction}
        >
          <Image
            src={item.icon}
            alt={item.name}
            width={20}
            height={20}
            className="dark:invert"
          />
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default AccountDropdown;
