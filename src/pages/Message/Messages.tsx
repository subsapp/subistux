import { Box,Badge, TextField, Avatar, Text, Flex, Heading } from '@radix-ui/themes'
import EllipsText from "./components/EllipsText"
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import messages from './data'
import {Link} from 'react-router-dom'

const MessageNav = () => {
  return (
    <Box display={{initial:'block', md: 'block' }} p='2' maxHeight='89vh'  >
       <Flex align="center"  gap="4" justify='between'>
          <Heading>Messages</Heading>
          <Badge color="purple" size="2">
          {messages.length}
          </Badge>
        </Flex>

      <Box py='3'>
        <TextField.Root placeholder="Search messages" size="3">
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
          <TextField.Slot pr="3"></TextField.Slot>
        </TextField.Root>
      </Box>
<ul className='space-y-4 overflow-y-scroll max-h-[85vh] pb-16'>
        {
    messages.map((message) => <li key={message.id} className='border-b py-3 shadow px-1'>
 <Link to={`/messages/${message.id}`}> 
      <Flex justify="between" align="center" gap="">
        <Flex align="center" gap="2">
          <Box className="bg-purple-500 rounded-full bottom-0 outline-white outline-1 outline right-0" width="10px" height="10px">
          </Box>

          <Box className="relative">

            <Avatar
              size={{ initial: "2", md: "4" }}
              radius="full"
                    src={message.profile_url}
              fallback={message.name[0]}            />
            <Box className="bg-green-500 rounded-full absolute bottom-0 outline-white outline-1 outline right-0" width="10px" height="10px">
            </Box>
          </Box>
          <Box>
            <Text as="div" size={{initial:'2',md:'4'}} weight="bold">
              {message.name}
            </Text>
            <Text as="div" size={{initial:'2',md:'3'}} color="gray">
            {message.handle}
            </Text>
          </Box>
        </Flex>
        <Box className="self-start ">
          <Text color="gray" size={{initial:'1',md:'3'}}>5min ago</Text>
        </Box>
      </Flex>
      <Box px="3" pt='2' className="text-ellipsis text-wrap overflow-hidden">
        <EllipsText>{message.message}</EllipsText>
      </Box>
      </Link>
      </li> ) }
</ul>
    </Box>
  )
}

export default MessageNav
