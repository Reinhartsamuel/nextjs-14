'use client'

import { addDocumentFirebase } from '@/services/firebaseApi';
import { Box, Button, Center, FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
import React, { useState } from 'react'

const AddMemberComponent = () => {
    const [input, setInput] = useState({});
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        console.log(input);
        setLoading(true);

        try {
            const result = await addDocumentFirebase('members', input, "123");
            console.log(result, 'result')
        } catch (error) {
            console.log(error.message, ":::error adding member")
        } finally {
            setLoading(false);
        };
    };

    const handleData = (e) => {
        let newData = {};
        newData[e.target.id] = e.target.value;
        setInput((prev) => ({
            ...prev,
            ...newData
        }))
    };



    return (
        <Box p={10}>
            <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input onChange={handleData} type='text' id='name' />
            </FormControl>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input onChange={handleData} type='email' id='email' />
                <FormHelperText>We&apos;ll never share your email.</FormHelperText>
            </FormControl>

            <FormControl>
                <FormLabel>Occupation / Job</FormLabel>
                <Input onChange={handleData} type='text' id='occupation' />
                <FormHelperText>Please explain the job.</FormHelperText>
            </FormControl>
            <Center>
                <Button
                    w='full'
                    onClick={handleSubmit}
                    isLoading={loading}
                    isDisabled={loading}
                >Save</Button>
            </Center>
        </Box>
    )
}

export default AddMemberComponent