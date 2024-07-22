import { Avatar, Flex, Text, Box, Heading, Button } from "@radix-ui/themes";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
const Comments = () => {
  return (
    <>
      <Flex justify="between" align="center">
        <Heading size={{ initial: "4" }}>Comments (32)</Heading>
        <Button size={{ lg: "4" }}>Leave Comment</Button>
      </Flex>
      <Flex gap={{ initial: "2", lg: "5" }} mt="7">
        <Box>
          <BiSolidUpArrow color="gray" size={20} />
          <BiSolidDownArrow color="gray" size={20} />
        </Box>
        <Box>
          <Flex justify={{ lg: "between" }}>
            <Flex gap="3" align="center">
              <Avatar
                size="2"
                src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                radius="full"
                fallback="T"
              />
              <Flex gap="2" align="center">
                <Text
                  as="div"
                  size={{ initial: "2",sm:"3", lg: "4" }}
                  color="orange"
                  weight="bold"
                >
                  Teodros Girmay
                </Text>
                <Text as="div" size={{ initial: "1", lg: "2" }} color="gray">
                  231 points
                </Text>
                <Text as="div" size={{ initial: "1", lg: "2" }} color="gray">
                  1 Day ago
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Text size={{ initial: "3", lg: "5" }} as="div" my="3">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit...
          </Text>
          <Flex gap="4">
            <Text color="gray" size={{ md: "3", lg: "4" }}>
              Reply
            </Text>
            <Text color="gray" size={{ md: "3", lg: "4" }}>
              Share
            </Text>
            <Text color="gray" size={{ md: "3", lg: "4" }}>
              Report
            </Text>
            <Text color="gray" size={{ md: "3", lg: "4" }}>
              Save
            </Text>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Comments;
