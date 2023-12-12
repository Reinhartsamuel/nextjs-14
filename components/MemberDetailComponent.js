'use client'
import { Heading, Text } from '@chakra-ui/react'
import { useRouter } from 'next/navigation';
import React from 'react'

const MemberDetailComponent = ({params}) => {
    const { slug } = params 
    console.log(slug,'xxxx')
    return (
        <>
            <Heading alignSelf={'center'}>id:{slug}</Heading>
            <Text cursor='pointer'></Text>
        </>
    )
}

export default MemberDetailComponent