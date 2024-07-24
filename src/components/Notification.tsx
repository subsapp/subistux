import { Box, Flex, Text, Heading,Separator } from "@radix-ui/themes";
import { GoGear } from "react-icons/go";
import { IoReturnUpBack } from "react-icons/io5";
import { LuMoreHorizontal } from "react-icons/lu";
import Online from "../pages/Message/components/Online";
import EllipsText from "../pages/Message/components/EllipsText";
const notifications = [1,2,3,4,5,6,7,8,9]
const Notification = () => {
  return (
    <Box className="absolute z-10 right-0 top-24 border rounded mx-2 bg-white shadow-lg p-2">
      <Flex justify="end"  className=" mb-4" gap="3" align="center">
        <Text weight="bold" size={{initial:'2',lg:'4'}}>Mark all as read</Text>
        <Separator orientation="vertical" />
        <GoGear size={22} />
      </Flex>
<ul className='max-h-[500px] overflow-y-scroll '>      
        {notifications.map((noti) => <li className="p-4 border-b" key={noti}>
        <Flex gap="2">
        <div>
        <Online />
        </div>
        <Box maxWidth='500px'>
          <Flex gap='4' justify='between'>
            <div className='flex'>
            <Heading wrap='wrap' className="inline text-wrap" size={{initial:"3",md:"5"}} >
                u/ScaryPollution845 replied to your comment in r/onewheel
                
            </Heading>
            
            </div>
            <LuMoreHorizontal size={25} />
          </Flex>
          <Flex direction="column" align="center">
            <Text size="2">
              <EllipsText maxChars={80}>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
              </EllipsText>
            </Text>
            <button className="flex justify-center text-white items-center gap-2 bg-gray-400 border rounded-xl w-[70%] px-8 py-2 ">
              <IoReturnUpBack size={25} />
              Reply back
            </button>
          </Flex>
        </Box>
      </Flex>
      </li>)}
</ul>
      
    </Box>
  );
};

export default Notification;
