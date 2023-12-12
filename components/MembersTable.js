'use client'


import React, { useEffect, useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Text,
} from '@chakra-ui/react';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '@/configs/firebase';
import { useRouter } from 'next/navigation';


const MembersTable = () => {
    const [data, setData] = useState([]);
    const router = useRouter();


    useEffect(() => {
        let arr = [];

        const q = query(collection(db, "members"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                arr.push({ ...doc.data(), id: doc.id });
            });
            setData(arr);
        });

        return () => unsubscribe();


    }, [])
    return (
        <>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>name</Th>
                            <Th>email</Th>
                            <Th>Occupation</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {(data && data?.length > 0) ? data?.map((item, i) => (
                            <Tr
                                onClick={() => {
                                    router.push(`members/${item.id}`)
                                }}
                                _hover={{
                                    bg: 'gray.700'
                                }}
                                _active={{
                                    bg: 'gray.400'
                                }}
                                cursor='pointer'
                                key={i}>
                                <Td>{item.name}</Td>
                                <Td>{item.email}</Td>
                                <Td>{item.occupation}</Td>
                            </Tr>
                        )) : <Text>No data</Text>}

                    </Tbody>

                </Table>
            </TableContainer>
        </>
    )
}

export default MembersTable