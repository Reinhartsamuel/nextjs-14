'use client'

import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'

export function Providers({ children }) {
    const theme = extendTheme({
        styles: {
            global: {
                // styles for the `body`
                body: {
                    bg: 'white',
                    color:'gray.600'
                },
            },
        },
    })


    return <>
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            {children}
        </ChakraProvider>
    </>
}