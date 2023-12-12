import MemberDetailComponent from '@/components/MemberDetailComponent'
import Navbar from '@/components/Navbar'
import {
    Container, Heading,
} from '@chakra-ui/react'
import React from 'react'

const page = () => {
    return (
        <>
            <Navbar />
            <Container justifyContent={'center'} display={'flex'} flexDirection={'column'} height={'100vh'} maxW="5xl" margin={'auto'}>
             <Heading>Secret</Heading>
            </Container>
        </>
    )
}

export default page