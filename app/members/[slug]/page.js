import MemberDetailComponent from '@/components/MemberDetailComponent'
import Navbar from '@/components/Navbar'
import {
    Container,
} from '@chakra-ui/react'

import React from 'react'



const page = ({ params }) => {
    return (
        <>
            <Navbar />
            <Container
                justifyContent={'center'}
                display={'flex'}
                flexDirection={'column'}
                height={'100vh'}
                maxW="5xl"
                margin={'auto'}
            >
                <MemberDetailComponent params={params} />
            </Container>
        </>
    )
}

export default page