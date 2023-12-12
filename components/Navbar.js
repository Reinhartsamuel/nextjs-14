'use client'

import { Flex, HStack, Heading, Link } from '@chakra-ui/react'
import React from 'react'
import { useRouter } from 'next/navigation'


const Navbar = () => {
    const router = useRouter();
    return (
        <>
            <Flex gap={2} justifyContent={'space-between'} mx={10}>
                <Heading>Logo</Heading>
                <HStack>
                    <Link onClick={() => router.push('/')}>Home</Link>
                    <Link onClick={() => router.push('/dashboard')}>Dashboard</Link>
                    <Link onClick={() => router.push('/members')}>Members</Link>
                </HStack>
            </Flex>
        </>
    )
}

export default Navbar