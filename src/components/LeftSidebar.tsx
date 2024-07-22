import { Text, Button, Flex } from "@radix-ui/themes";
import { GoGear } from "react-icons/go";
import { BiSolidEdit } from "react-icons/bi";
import { GrHomeRounded } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { CgHashtag, CgProfile } from "react-icons/cg";
import { GoListUnordered } from "react-icons/go";
import { FaRegHand } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { Link } from "react-router-dom";

const links = [
  {
    title: "home",
    icon: GrHomeRounded,
    link: "/",
  },
  {
    title: "Search",
    icon: IoSearch,
    link: "/",
  },
  {
    title: "feeds",
    icon: CgHashtag,
    link: "/feeds",
  },
  {
    title: "Notifications",
    icon: FaRegBell,
    link: "/notifications",
  },
  {
    title: "List",
    icon: GoListUnordered,
    link: "/list",
  },
  {
    title: "Moderation",
    icon: FaRegHand,
    link: "/moderation",
  },
  {
    title: "Profile",
    icon: CgProfile,
    link: "/profile",
  },
  {
    title: "Settings",
    icon: GoGear,
    link: "/settings",
  }
];
const LeftSidebar = () => {
  return (
    <ul className="space-y-8 lg:space-y-10 xl:space-y-16">
      {links.map((link) => (
        <li key={link.title}>
          <Link to={link.link}>
          <Flex align="center" gap="2">
            <Text className="capitalize">
              <link.icon className='lg:text-3xl xl:text-4xl' />
            </Text>
            <Text size={{initial:'2',sm:'3',md:'4'}} weight="bold">{link.title}</Text>
          </Flex>
          </Link>
        </li>
      ))}
      <li key="new post">
        <Button size={{md:'3'}} radius="full">
          <BiSolidEdit className="lg:text-3xl" />
          <Text size={{md:'3',lg:'5'}} wrap='nowrap'>New Post</Text>
          
        </Button>
      </li>
    </ul>
  );
};

export default LeftSidebar;
