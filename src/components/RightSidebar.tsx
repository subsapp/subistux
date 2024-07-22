import { Heading, Flex,Text } from "@radix-ui/themes"
import { LuMoreHorizontal } from "react-icons/lu"

const RightSidbar = () => {
  return (
    <div className='p-4'>
        <Heading mb="4" size={{md:'4',lg:'6'}}>Currently Trending</Heading>
        <ul className='space-y-4'>
          <li>
            <Flex align="center" justify='between'>

              <Text color="gray">Trending in the United States</Text>
              <LuMoreHorizontal size={25} />
            </Flex>

            <Heading as="h4" size={{md:'4',lg:'6'}} className='uppercase'>It is finished</Heading>

            <Text color="gray">3,100 posts</Text>

          </li>


          <li>
            <Flex align="center" justify='between'>

              <Text color="gray">Trending in the United States</Text>
              <LuMoreHorizontal size={25} />
            </Flex>

            <Heading size={{md:'4',lg:'6'}} as="h4" className='uppercase'>It is finished</Heading>

            <Text color="gray">3,100 posts</Text>

          </li>
        </ul>
        <Text color="blue" as="div" mt="4">Show More</Text>
      </div>
  )
}

export default RightSidbar
