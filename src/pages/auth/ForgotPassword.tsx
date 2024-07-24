// import { useEffect } from "react"
// import { useForm } from 'react-hook-form'
// import { useNavigate } from "react-router-dom"
// import { auth } from '../../firebase'
// import useUserStore from "../../state-management/user"
// type FormData = {
//     register: string
// }
// const ForgotPassword = () => {
//     const login = useUserStore(s => s.login)
//     // const navigate = useNavigate()
//     const { register, formState: { errors }, reset, handleSubmit } = useForm<FormData>()
//     const toast = useToast()
//     const onSubmit = handleSubmit(async (data) => {
//         const config = {
//             url: 'http://localhost:5173/login',
//             handleCodeInApp: true
//         }
//         await sendPasswordResetEmail(auth, data.register, config).then(() => {
//             toast({
//                 title: 'Email sent to ' + data.register,
//                 description: "Click your email for password reset link",
//                 status: 'success',
//                 duration: 4000,
//                 position: 'top',
//                 isClosable: true,
//             })
//         })
//             .catch((error) => {

//                 if (error instanceof FirebaseError)
//                     toast({
//                         title: 'Something went wrong',
//                         description: error.message,
//                         status: 'error',
//                         duration: 4000,
//                         position: 'top',
//                         isClosable: true,
//                     })
//             })
//         reset()
//     })
//     return (
//         <Flex className='flex justify-center  h-screen' >
//             <Box>

//                 <form className="space-y-4" onSubmit={onSubmit}>
//                     <Text className="text-2xl font-bold">Reset Password</Text>
//                     <Input {...register('register', { required: "Email is required", pattern: { value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'Please enter a valid email' } })} placeholder='Email'
//                         autoFocus
//                     />
//                     <Box>

//                         {errors.register?.type === 'required' && <Text color='red.400'>{errors.register?.message}</Text>}
//                         {errors.register?.type === 'pattern' && <Text color='red.400'>{errors.register.message}</Text>}
//                     </Box>
//                     <Button type="submit" colorScheme="blue">Send Reset Link</Button>
//                 </form>
//             </Box>
//         </Flex>
//     )
// }

// export default ForgotPassword
