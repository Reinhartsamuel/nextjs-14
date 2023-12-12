import AddMemberComponent from '@/components/AddMemberComponent'
import MembersTable from '@/components/MembersTable'
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
                <Heading alignSelf={'center'}>Add new member</Heading>
                <AddMemberComponent />
                <MembersTable />


            </Container>
        </>
    )
}

export default page