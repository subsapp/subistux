import { Box, Button, Flex, Input, Text, useToast } from "@radix-ui/themes"
import { useEffect, useState } from "react"
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom"
import useUserStore, { User } from "../../state-management/user"
type FormData = {
    password: string
}

const Complete = () => {
    const login = useUserStore(s => s.login)
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('emailForSignIn') !== null)
            return setEmail(localStorage.getItem('emailForSignIn')!)
        navigate('/register')
    }, [])

    const { register, formState: { errors }, handleSubmit } = useForm<FormData>()
    const toast = useToast()

    const onSubmit = handleSubmit(async (data) => {
        try {
            const result = await signInWithEmailLink(auth, email, window.location.href)
            if (result.user.emailVerified) {
                window.localStorage.removeItem('emailForSignIn')
                const user = auth.currentUser!
                if (user !== null) {
                    await updatePassword(user, data.password)
                    const token = await user.getIdToken()
                    createOrUpdateUser(token!).then((data: User) => {
                        login({ ...data, token })
                        // login(user)
                    })
                }
            }
            navigate('/')

        } catch (error) {
            if (error instanceof FirebaseError)
                toast({
                    title: 'Error',
                    description: error.message,
                    status: 'error',
                    duration: 4000,
                    position: 'top',
                    isClosable: true,
                })
        }


    })
    return (
        <Flex justifyContent='center' alignItems='center' >
            <Box>
                <form className="space-y-4" onSubmit={onSubmit}>
                    <Text className="text-2xl font-bold">Set new Password</Text>
                    <Input value={email} disabled />

                    <Input type="password" {...register('password', { required: "Please provide a password", minLength: { value: 8, message: 'Password must be at least 8 characters long' } })} placeholder='Password'
                        autoFocus
                    />
                    <Box>

                        {errors.password?.type === 'required' && <Text color='red.400'>{errors.password?.message}</Text>}
                        {errors.password?.type === 'minLength' && <Text color='red.400'>{errors.password.message}</Text>}
                    </Box>
                    <Button type="submit" colorScheme="blue">Complete Registration</Button>
                </form>
            </Box>
        </Flex>
    )
}

export default Complete
