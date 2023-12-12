import Navbar from '@/components/Navbar'
import { Center, Container, Heading } from '@chakra-ui/react'
import React from 'react'

const page = () => {
  return (
   <>
   <Navbar />
   <Container justifyContent={'center'} display={'flex'} flexDirection={'column'} height={'100vh'} maxW="5xl">
    <Center>
        <Heading>This is dashboard page</Heading>
    </Center>
   </Container>
   </>
  )
}

export default page