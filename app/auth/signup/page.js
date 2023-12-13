import LoginForms from '@/components/LoginForms'
import {
    Box,
    Button,
    Container,
    Heading,
    HStack,
    Stack,
    Text,
} from '@chakra-ui/react'
import Link from 'next/link'

export default function page() {
    return (
        <Container
            maxW="lg"
            py={{
                base: '12',
                md: '24',
            }}
            px={{
                base: '0',
                sm: '8',
            }}
        >
            <Stack spacing="8">
                <Stack spacing="6">
                    <Stack
                        spacing={{
                            base: '2',
                            md: '3',
                        }}
                        textAlign="center"
                    >
                        <Heading
                            size={{
                                base: 'xs',
                                md: 'sm',
                            }}
                        >
                            Sign Up
                        </Heading>
                        <HStack justifyContent={'center'}>
                            <Text>Already a user?</Text>
                            <Link href="/auth/login">
                                <Text color='blue'>Sign In</Text>
                            </Link>
                        </HStack>
                    </Stack>
                </Stack>
                <Box
                    py={{
                        base: '0',
                        sm: '8',
                    }}
                    px={{
                        base: '4',
                        sm: '10',
                    }}
                    bg={{
                        base: 'transparent',
                        sm: 'bg-surface',
                    }}
                    boxShadow={{
                        base: 'none',
                        sm: 'md',
                    }}
                    borderRadius={{
                        base: 'none',
                        sm: 'xl',
                    }}
                >
                    <LoginForms signup />
                </Box>
            </Stack>
        </Container>
    )
}