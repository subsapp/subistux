import { Heading, Avatar, Box, Text, Flex } from '@radix-ui/themes'
import { LuMoreHorizontal } from "react-icons/lu";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";
import { CgLoadbarSound } from "react-icons/cg";
import { CiBookmark } from "react-icons/ci";
import { MdOutlineFileUpload } from "react-icons/md";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";


const Trending = () => {
  return (
    <div className='grid grid-cols-[80%,20%] px-12'>

      <Flex align="center" gap="4" className='justify-center' >
        <Box>
          <BiSolidUpArrow size={25} />
          <Text className='my-4 block' size="4">123K</Text>
          <BiSolidDownArrow size={25} />
        </Box>
        <Box>
          <img
            src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            alt="Bold typography"
            style={{
              display: 'block',
              objectFit: 'cover',
              width: '100%',
              height: 190,
              borderRadius: "15px",
              backgroundColor: 'var(--gray-5)',
            }}
          />
        </Box>
        <Flex className='py-4' gap="3" direction='column'>
          <Flex justify="between" align='center' className='max-w-[90%]'>
            <Box maxWidth="240px">
              <Flex gap="3" align="center">
                <Avatar
                  size="2"
                  src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                  radius="full"
                  fallback="T"
                />
                <Box>
                  <Text as="div" size="2" color="gray">
                    Engineering
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Text color="blue" size="4">+ Follow</Text>
          </Flex>
          <Box className='max-w-[90%]'>
            <Heading>Lorem ipsum dolor sit amet.</Heading>
            <Text>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</Text>
          </Box>

          <Flex className="border-b-[3px] pb-4 max-w-[90%] " align='center' justify="between">
            <Flex gap="8">
              <Flex gap="2" align='center'>
                <BiSolidMessageRounded fill="gray" size={25} />
                <Text color="gray">12k</Text>
              </Flex>

              <Flex gap="2" align='center'>
                <FaRetweet size={25} color='gray' />
                <Text color="gray">10k</Text>
              </Flex>
              <Flex gap="2" align='center'>
                <GoHeart size={25} />
                <Text color="gray">46k</Text>
              </Flex>
              <Flex gap="2" align='center'>
                <CgLoadbarSound size={35} color='gray' />
                <Text color="gray">9.9M</Text>
              </Flex>
            </Flex>
            <Flex gap="4" align='center'>

              <CiBookmark size={23} />
              <MdOutlineFileUpload size={28} color="gray" />
            </Flex>

          </Flex>
        </Flex>
      </Flex>

      <div className='p-4 rounded-xl border'>
        <Heading mb="4" >Currently Trending</Heading>
        <ul className='space-y-4'>
          <li>
            <Flex align="center" justify='between'>

              <Text color="gray">Trending in the United States</Text>
              <LuMoreHorizontal size={25} />
            </Flex>

            <Heading as="h4" className='uppercase'>It is finished</Heading>

            <Text color="gray">3,100 posts</Text>

          </li>


          <li>
            <Flex align="center" justify='between'>

              <Text color="gray">Trending in the United States</Text>
              <LuMoreHorizontal size={25} />
            </Flex>

            <Heading as="h4" className='uppercase'>It is finished</Heading>

            <Text color="gray">3,100 posts</Text>

          </li>
        </ul>
        <Text color="blue" as="div" mt="4">Show More</Text>
      </div>
    </div>
  )
}

export default Trending
