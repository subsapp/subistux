import { Box, Flex } from "@radix-ui/themes";
import { Outlet } from 'react-router-dom';
import Comments from "../components/Comments";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Post from "./posts/Post";
export const Homepage = () => {
  return (
    <div className="lg:grid lg:grid-cols-[15%,1fr,20%] h-screen">
      <Flex justify='center' pt='1.5rem' className=" border-r h-[100%]" display={{ initial: "none", md: "flex" }}>
        <LeftSidebar />
      </Flex>

      <Box p={{ initial: "2" }} className="overflow-y-scroll flex w-full h-screen">
        <Box className="">
          <Outlet/>
        </Box>
      </Box>

      <Box display={{ initial: "none", md: "block" }} className="border-l">
        <RightSidebar />
      </Box>
    </div>
  );
};
