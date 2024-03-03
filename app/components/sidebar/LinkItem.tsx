 import { Link } from "@nextui-org/react";
 import { useRouter } from "next/navigation";
 import { usePathname } from 'next/navigation'
interface LinkItemProps {
  link: string;
  activeLink: string;
  onClick: (link: string) => void;
  icon?: React.ReactNode;
}
 const LinkItem: React.FC<LinkItemProps> = ({ link, activeLink, onClick, icon }) => {
  const pathname = usePathname()

  const router = useRouter();
  const isActive = activeLink === link || (pathname === "/" && link === "Market");

  return (
    <Link
      href="#"
      className={`flex items-center text-slate-600 font-bold hover:text-gray-900 hover:bg-green-300 rounded-lg px-2 py-3 transition-all my-2 ${isActive ? "active:bg-green-300 active:text-gray-900" : ""}`}
      onClick={() => onClick(link)}
    >
      {icon}
      {link}
    </Link>
  );
};
export default LinkItem