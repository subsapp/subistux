import { Box } from "@radix-ui/themes";
import { Outlet, useLocation } from "react-router-dom";
import Messages from "./Messages";

const MessageLayout = () => {
  const {pathname:location} = useLocation()
  console.log(location)
  return (
    <div className=" lg:grid lg:grid-cols-[500px,1fr] overflow-hidden">
      <Box display={{initial:'none',md:'block'}} className=" border-r border-gray">
      {location !== '/messages/:id' && <Messages />}
      </Box>
      <Box display={{initial:'block',md:'none'}} className=" border-r border-gray">
      {location === '/messages/:id'? null : location === 'messages/'? <Messages /> : null}
      </Box>
      <Box display={{initial:'block'}} className="">
        <Outlet />
      </Box>
    </div>
  );
};

export default MessageLayout;
