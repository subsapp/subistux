import { Box, Avatar, Text, Flex } from '@radix-ui/themes'
import EllipsText from "./components/EllipsText"
const MessageNav = () => {
  return (
  <Box maxWidth="440px">
      <Flex justify="between" align="center" gap="">
        <Flex align="center" gap="2">
          <Box className="bg-purple-500 rounded-full bottom-0 outline-white outline-1 outline right-0" width="10px" height="10px">
          </Box>

          <Box className="relative">

            <Avatar
              size={{ initial: "2", md: "3" }}
              src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
              radius="full"
              fallback="T"
            />
            <Box className="bg-green-500 rounded-full absolute bottom-0 outline-white outline-1 outline right-0" width="10px" height="10px">
            </Box>
          </Box>
          <Box>
            <Text as="div" size="2" weight="bold">
              Phoenix Baker
            </Text>
            <Text as="div" size="2" color="gray">
              @phoenix
                                    </Text>
          </Box>
        </Flex>
        <Box className="self-start justify-self-end">
          <Text color="gray">5min ago</Text>
        </Box>
      </Flex>
      <Box px="3" className="text-ellipsis text-wrap overflow-hidden">
        <EllipsText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla urna turpis, vehicula at consectetur eu, sollicitudin at urna. Vivamus odio velit, lacinia sit amet semper qui</EllipsText>
      </Box>

    </Box>
  )
}

export default MessageNav
