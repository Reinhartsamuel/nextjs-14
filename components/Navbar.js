'use client'

import {
    Button, Flex, HStack, Heading, Link,
} from '@chakra-ui/react'
import React, { useEffect, useLayoutEffect } from 'react'
import { useRouter } from 'next/navigation'
import useAuthStore from '@/context/user'
import MenuComponent from './Menu'
// import Link from 'next/link'


const Navbar = () => {
    const router = useRouter();
    const handleNavigate = () => {
        router.push('/auth/login')
    };
    const { userData } = useAuthStore();

    useLayoutEffect(() => {

    }, [])
    return (
        <>
            <Flex gap={2} justifyContent={'space-between'} mx={10}>
                <Heading onClick={() => console.log(userData)}>Logo</Heading>
                <HStack>
                    {/* Next LINK: */}
                    {/* <Link href="/">Home</Link>
                    <Link href="/dashboard">Dashboard</Link>
                    <Link href="/members">Members</Link> */}


                    {/* Chakra ui LINK : */}
                    <Link onClick={() => router.push('/dashboard')}>Dashboard</Link>
                    <Link onClick={() => router.push('/members')}>Members</Link>
                </HStack>
                {Object.keys(userData).length > 0 ?
                    <MenuComponent />
                    : <Button
                        onClick={handleNavigate}
                        variant="ghost">
                        Sign in
                    </Button>}
            </Flex>
        </>
    )
}

export default Navbar