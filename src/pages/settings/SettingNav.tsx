import { Text, Flex, Heading } from "@radix-ui/themes";
import {
  FaUser,
  FaPaintBrush,
  FaPalette,
  FaTrash,
  FaBell,
} from "react-icons/fa";
import { IoCard } from "react-icons/io5";
import { BsIncognito, BsShieldFillCheck } from "react-icons/bs";
import { RiUserForbidFill } from "react-icons/ri";
import { RiFileShredFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const links = [
  { name: "general", icon: <FaUser /> ,url:'general'},
  { name: "profile", icon: <FaPaintBrush /> ,url:'profile'},
  { name: "appearance", icon: <FaPalette /> ,url:'appearance'},
  { name: "notifications", icon: <FaBell /> ,url:'notifications'},
  { name: "privacy", icon: <BsIncognito /> ,url:'privacy'},
  { name: "security", icon: <BsShieldFillCheck /> ,url:'security'},
  { name: "subscription", icon: <IoCard /> ,url:'subscription'},
  { name: "blocked users", icon: <RiUserForbidFill /> ,url:'blocked-users'},
  { name: "purge content", icon: <RiFileShredFill /> ,url:'purge-content'},
  { name: "delete account", icon: <FaTrash /> ,url:'delete-account'},
];

const SettingNav = () => {
  return (
    <div>
      <Heading>Account Settings</Heading>
      <ul className="space-y-6 mt-8 pl-4">
        {links.map((link) => (
          <li key={link.name}>
            <Link to={`/settings/${link.url}`}>
              <Flex gap="2" align="center">
                <Text>{link.icon}</Text>
                <Text className="capitalize" size={{ initial: "6" }}>
                  {link.name}
                </Text>
              </Flex>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SettingNav;
