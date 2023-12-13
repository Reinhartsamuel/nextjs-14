import { Container, Heading, Spinner, VStack } from "@chakra-ui/react";

export default function Loading() {
    return <Container justifyContent={'center'} display={'flex'} flexDirection={'column'} height={'100vh'} maxW="5xl">
        <VStack>
            <Spinner color='gray' />
            <Heading color='gray'>Loading, please wait...</Heading>
        </VStack>
    </Container>
}