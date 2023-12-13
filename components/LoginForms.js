'use client'
import { auth } from '@/configs/firebase';
import useAuthStore from '@/context/user';
import { getSingleDocumentFirebase, loginUser, setDocumentFirebase } from '@/services/firebaseApi';
import { Button, Checkbox, FormControl, FormLabel, HStack, Input, Stack } from '@chakra-ui/react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { serverTimestamp } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const LoginForms = (props) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { setUserData } = useAuthStore();

    const handleChange = e => {
        const newObj = {};
        newObj[e.target.id] = e.target.value;
        setData((prev) => ({
            ...prev,
            ...newObj
        }));
    };
    const handleKeyDown = e => {
        if (e.key === "Enter") return handleSubmit();
    };

    const handleSubmit = async () => {
        setLoading(true);
        try {
            let res;
            if (props.login) {
                res = await loginUser(data.email, data.password);
                window.alert('success!')
                router.push("/")
                getSingleDocumentFirebase('users', res.user.uid).then(data => {
                    console.log("this is data::", data)
                    setUserData(data);
                });
            } else if (props.signup) {
                createUserWithEmailAndPassword(auth, data.email, data.password).then(res => {
                    setDocumentFirebase('users', res.user.uid, {
                        name: data.name,
                        email: data.email,
                        createdAt: serverTimestamp()
                    }).then(() => {
                        router.push("/");
                        setUserData(data);
                        window.alert('success!');
                        console.log("adding user to firestore success");
                    }).catch(e => {
                        console.log("error adding user to firestore: ", error)
                    });
                });
            } else if (props.forgot_password) {
                console.log("sending email for resetting password")
                sendPasswordResetEmail(auth, email)
                    .then(() => {
                        window.alert(`Reset password email has been sent to ${data.email}`);
                        router.push("/");
                    })
                    .catch((error) => {
                        const errorMessage = error.message;
                        window.alert(errorMessage);
                    });
            };
            console.log(res);
        } catch (error) {
            console.log(error, "::error login")
            window.alert(error)
        } finally {
            setLoading(false);
        };
    };


    return (
        <>
            <Stack spacing="6">
                <Stack spacing="5">
                    {props.signup ?
                        <FormControl>
                            <FormLabel htmlFor="email">Name</FormLabel>
                            <Input onKeyDown={handleKeyDown} onChange={handleChange} id="name" type="text" />
                        </FormControl>
                        : <></>}
                    <FormControl>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input onKeyDown={handleKeyDown} onChange={handleChange} id="email" type="email" />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input onKeyDown={handleKeyDown} onChange={handleChange} id="password" type="password" />
                    </FormControl>
                </Stack>

                <HStack justify="space-between">
                    <Checkbox defaultChecked>Remember me</Checkbox>
                    <Button onClick={() => router.push('/auth/forgot-password')} variant="link" colorScheme="blue" size="sm">
                        Forgot password?
                    </Button>
                </HStack>
                <Stack spacing="6">
                    <Button
                        isLoading={loading}
                        isDisabled={loading}
                        variant="primary"
                        onClick={handleSubmit}>
                        {props.signup ? "Sign Up" : props.login ? "Sign In" : props.forgot - password ? "Submit" : ""}
                    </Button>
                </Stack>
            </Stack>
        </>
    )
}

export default LoginForms