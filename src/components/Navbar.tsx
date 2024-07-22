import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import {
  Avatar,
  Box,
  Flex,
  Text
} from "@radix-ui/themes";
import { useState } from "react";
import { FaGear,FaBell } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import { TbHash } from "react-icons/tb";
import Notification from "./Notification";
import { LuPenSquare } from "react-icons/lu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShowNotification] = useState(false);
  return (
    <Flex
      className=" relative space-x-8"
      align="center"
      p={{ initial: "3", lg: "4" }}
    >
        <Link to="/">
      <Flex align="center">
        <TbHash className="text-2xl text-white" />
        <h2 className="text-blue-400 text-xl lg-text-4xl">subist</h2>
      </Flex>
      </Link>

      {/* search box and selector */}

      <Flex
        flexGrow="1"
        gap="5"
        display={{ initial: "none", sm: "flex" }}
        align="center"
      >
        
        <select
          defaultValue="#mildlyinteresting"
          className="select-selected bg-black border border-gray-500/50 outline-none h-12 text-white rounded-xl px-4"
          id=""
        >
          <option value="#mildlyinteresting">#mildlyinteresting</option>
          <option value="apple">Apple</option>
          <option value="orange">Orange</option>
          <option value="banana">banana</option>
        </select>
        <div
          className="hidden lg:block relative text-white flex-1 
          "
        >
          <MagnifyingGlassIcon
            className="absolute left-3 bottom-[14px] text-gray-300"
            height="18"
            width="18"
          />

          <input
            type="text"
            className="px-9 bg-transparent border border-gray-500/50 w-full h-12 rounded-xl  outline-none"
            placeholder="Search for anything"
          />
        </div>
      </Flex>
      {/* center */}
      <Flex align="end" justify="end">
        <Flex gap={{ initial: "3", lg: "4" }} align="center">
          <button className="text-nowrap hidden lg:flex items-center gap-1 bg-blue-600 rounded-full p-2 xl:px-4 text-blue-100">
            <LuPenSquare className="text-md " color="white"/>
            New post
          </button>
          <button className=" rounded-lg p-2 bg-gray-500/70">
            <MdEdit className="text-base lg:text-3xl " color="white" />
          </button>

          <button className=" rounded-lg p-2 bg-gray-500/70">
            <Link to="messages">
              <FiMessageSquare className="text-base lg:text-3xl" color="white" />
            </Link>
          </button>
          <div className="relative">
            <button
              className=" rounded-lg p-2 bg-blue-400/90"
              onClick={() => setShowNotification(!show)}
            >
              <FaBell className="text-base lg:text-3xl" color="white" />
              <div className="absolute -top-2 -right-1 bg-white rounded-full text-xs p-[2px] ">
                <Text size='1'>16</Text>
                
              </div>
            </button>
          </div>
          <button className=" rounded-lg p-2 bg-gray-500/70">
          <Link to="settings">
              <FaGear className="text-xl lg:text-3xl" color="white" />
              </Link>
          </button>
        </Flex>
      </Flex>

      <Box maxWidth={{ lg: "240px" }}>
        <Flex align="center" gap="2">
          <Box
            className="text-right"
            display={{ initial: "none", sm: "block" }}
          >
            <Text
              className="text-white"
              size={{ initial: "1", md: "5" }}
              weight={{ lg: "bold" }}
            >
              Teodros
            </Text>
            <Box>
              <Text
                as="div"
                size={{ initial: "1", md: "4" }}
                className="text-white/60 text-nowrap"
              >
                15.3k followers
              </Text>
            </Box>
          </Box>

          <Avatar
            size={{ initial: "2", lg: "4" }}
            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
            radius="medium"
            fallback="T"
          />
        </Flex>
      </Box>

      {show && <Notification />}
    </Flex>
  );
};

export default Navbar;
