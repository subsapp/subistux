import { Separator, Avatar, Flex, Box, Text, Inset, Strong } from '@radix-ui/themes'
import { DotsVerticalIcon } from '@radix-ui/react-icons'
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";
import { CgLoadbarSound } from "react-icons/cg";
import Comments from '../components/Comments'
//import { CiBookmark } from "react-icons/ci";
//import { MdOutlineFileUpload } from "react-icons/md";
import { useState } from 'react';
import posts from './data'

const Post = () => {
  const [comment, showComment] = useState(false)
  return (
    <ul className="mb-20 h-full y-4 self-center max-w-[900px]">
      {
        posts?.map((post) =>
          <li className="w-full ">
            <Box className='p-2 mb-2 rounded'>

              <Flex mb='2' gap="3" align="start" direction='column'>
                <Flex gap='2' align='center' className='w-full'>
                  <Avatar
                    size={{ initial: "3", md: "4" }}
                    src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                    radius="full"
                    fallback="T"
                  />
                  <Flex justify='between' align='center' gap='1' className='w-full'>
                    <Flex align='center' gap='2'>
                      <Text size={{ initial: '2', md: '5' }} wrap='nowrap'>{post.name}</Text>
                      <Text color='gray' size={{ initial: '2', md: '3' }}>{post.handle}</Text>
                      <Separator orientation='vertical' />
                      <Text color='gray' size={{ initial: '1', md: '3' }}>2h</Text>
                    </Flex>
                    <Box className='justify-end'>

                      <DotsVerticalIcon />
                    </Box>
                  </Flex>
                </Flex>
                <Text as="p" size={{ initial: "3", md: '5' }}>
                  {post.content}
                  {post.tags?.length > 0 && post.tags?.map((tag) => <Text as='span' color='blue'> #{tag} </Text>)}
                </Text>

              </Flex>

              {post.image.length > 0 &&
                <Inset clip="padding-box" side="top" pb="current">
                  <img
                    className='h-[160px] w-full max-w-[477px] block lg:h-[400px] rounded'
                    src={post.image[0]}
                    alt="Bold typography"
                    style={{

                      objectFit: 'cover',
                      backgroundColor: 'var(--gray-5)',
                    }}
                  />
                </Inset>
              }
              <Flex className="pt-4" align='center' justify="between">
                <Flex gap={{ initial: '4', md: "8" }}>
                  <Flex gap="2" align='center'>
                    <BiSolidMessageRounded onClick={() => showComment(!comment)} fill="gray" className='text-xl lg:text-3xl'/>
                    <Text color="gray">{post.comments}</Text>
                  </Flex>

                  <Flex gap="2" align='center'>
                    <FaRetweet color='gray' className='text-xl lg:text-3xl'/>
                    <Text color="gray">{post.retweets}</Text>
                  </Flex>
                  <Flex gap="2" align='center'>
                    <GoHeart className='text-xl lg:text-3xl'/>
                    <Text color="gray">{post.likes}</Text>
                  </Flex>
                  <Flex gap="2" align='center'>
                    <CgLoadbarSound color='gray' className='text-xl lg:text-3xl' />
                    <Text color="gray">{post.num_views}</Text>
                  </Flex>
                </Flex>
                {/*  <Flex gap="4" align='center'>

              <CiBookmark />
              <MdOutlineFileUpload color="gray" />
            </Flex>*/}

              </Flex>
              {comment && <Comments />}
            </Box>
          </li>
        )
      }
    </ul>
  )
}

export default Post
