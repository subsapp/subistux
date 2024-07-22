import {
  Flex,
  Separator,
  IconButton,
  Button,
  Box,
  Text,
  Badge,
  Avatar,
  TextArea,
  DropdownMenu,
  ScrollArea,
} from "@radix-ui/themes";
import king from "/king.png";
import { useState, useRef, useEffect } from "react";
import EmojiPicker from "emoji-picker-react";
import { FiPhone, FiSend } from "react-icons/fi";
import {
  DotFilledIcon,
  FaceIcon,
  DotsVerticalIcon,
} from "@radix-ui/react-icons";
import Online from "./components/Online";
import { useParams } from "react-router-dom";
import messages from "./data";

const Messagepage = () => {
  const { id } = useParams();
  const currentMessage = messages.filter((m) => m.id == id)[0];
  console.log(currentMessage);
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const endRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    endRef.current?.focus();
  }, []);
  const handleEmojiClick = (e) => {
    setText((prev) => prev + e.emoji);
  };
  return (
    <div className="grid grid-rows-[auto,1fr] max-h-[93vh]">
      <div className="lg:pr-4">
        <Flex className="shadow-md p-4" justify="between">
          <Box maxWidth="240px">
            <Flex gap="3" align="center" justify="between">
              <Avatar
                size={{ initial: "2", md: "5" }}
                radius="full"
                src={currentMessage?.profile_url}
                fallback={currentMessage?.name[0]}
              />
              <Box>
                <Text
                  className="text-nowrap"
                  as="div"
                  size={{ initial: "2", md: "5" }}
                  weight="bold"
                >
                  {currentMessage?.name}
                </Text>
                <Text as="div" size={{ initial: "1", md: "2" }} color="gray">
                  {currentMessage?.handle}
                </Text>
              </Box>
              <Box className="self-start">
                <Badge
                  color="green"
                  size={{ initial: "1", md: "3" }}
                  variant="soft"
                >
                  <DotFilledIcon />
                  Online
                </Badge>
              </Box>
            </Flex>
          </Box>
          <Box
            className="self-baseline"
            display={{ initial: "block", sm: "none" }}
          >
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <DotsVerticalIcon />
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Item>
                  <FiPhone />
                  Call
                </DropdownMenu.Item>

                <DropdownMenu.Item>Archive</DropdownMenu.Item>
                <DropdownMenu.Item>View profile</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </Box>

          <div>
            <Flex
              display={{
                initial: "none",
                sm: "flex",
              }}
              gap="4"
            >
              <Button
                color="purple"
                variant="outline"
                size={{ md: "2", lg: "3" }}
              >
                <FiPhone />
                Call
              </Button>
              <Button
                variant="outline"
                color="gray"
                size={{ md: "2", lg: "3" }}
              >
                Archive
              </Button>
              <Button color="purple" size={{ md: "2", lg: "3" }}>
                View profile
              </Button>
            </Flex>
          </div>
        </Flex>
      </div>

      <div className="p-6 w-full overflow-y-scroll flex flex-col gap-5">
        <Flex className="self-start gap-4 items-center">
          <Online />

          <Box className="max-w-[70%] flex flex-col">
            <Flex justify="between">
              <Text>John Doe</Text>
              <Text as="span" className="block" color="gray">
                1 min ago
              </Text>
            </Flex>
            <Box className="bg-gray-200 rounded-[10px] p-4">
              <Text>
                Lorem ipsum dolor s Lorem ipsum dolor sit amet, qui minim labore
                adipisicing minim sint cillum sint consectetur cupidatat. it
                amet, qui minim labore adipisicing minim sint cillum sint
                consectetur cupidatat.
              </Text>
            </Box>
          </Box>
        </Flex>

        <Box className="max-w-[70%] self-end">
          <Box className="">
            <Flex justify="between">
              <Text>You</Text>
              <Text as="span" color="gray" className="block">
                1 min ago
              </Text>
            </Flex>
            <Box className="bg-purple-600/50 text-white p-4 rounded-[10px] ">
              <Text>Lorem ipsum dolor sit amet, q et culpa duis.</Text>
            </Box>
          </Box>
        </Box>
        <Box>
          <img
            src={king}
            className="w-[40%] h-[300px] rounded-[10px] object-cover"
          />
        </Box>
        <Box className="self-end max-w-[70%]">
          <Box className="flex flex-col ">
            <Flex justify="between">
              <Text>You</Text>
              <Text as="span" color="gray" className="block">
                1 min ago
              </Text>
            </Flex>
            <Box className="bg-purple-600/50 text-white p-4 rounded-[10px]">
              <Text>
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                sint cillum sint consectetur cupidatat.
              </Text>
            </Box>
          </Box>
        </Box>
        <Box>
          <img
            src={king}
            className="w-auto h-[300px] rounded-[10px] object-cover"
          />
        </Box>
        <Flex align="center" gap="2">
          <Separator size="4" />
          <Text>Today</Text>
          <Separator size="4" />
        </Flex>
        <Box className="self-end max-w-[70%]">
          <Box className="flex flex-col">
            <Flex justify="between">
              <Text>You</Text>
              <Text as="span" color="gray" className="block">
                1 min ago
              </Text>
            </Flex>
            <Box className="bg-purple-600/50 text-white p-4 rounded-[10px]">
              <Text>
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                sint cillum sint consectetur cupidatat.
              </Text>
            </Box>
          </Box>
        </Box>
        <Box>
          <img
            src={king}
            className="w-auto h-[300px] rounded-[10px] object-cover"
          />
        </Box>
      </div>

      <div className="flex items-center justify-center gap-4 mb-4 mx-4 bottom-0 left-0 right-0">
        <textarea
          placeholder="send a message"
          className="border rounded-md h-12 lg:h-16 px-2 pt-1 flex-1 outline-none"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Flex align="center" className="flex-2" gap="4">
          <div className="relative">
            <div>
              <IconButton variant="ghost" onClick={() => setOpen(!open)}>
                <FaceIcon height="29" width="29" />
              </IconButton>
            </div>

            <div className="absolute bottom-[3rem] right-0">
              <EmojiPicker open={open} onEmojiClick={handleEmojiClick} />
            </div>
          </div>
          <IconButton variant="ghost">
            <DotsVerticalIcon height="29" width="29" />
          </IconButton>
        </Flex>

        <button className="bg-purple-600/70 rounded-lg p-2">
          <FiSend size={20} color="white" />
        </button>
      </div>
    </div>
  );
};

export default Messagepage;
