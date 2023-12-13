'use client'
import { auth } from '@/configs/firebase'
import useAuthStore from '@/context/user'
import { Heading, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'


const MenuComponent = () => {
    const { userData, resetUser } = useAuthStore();
    const router = useRouter();
    const logout = async () => {
        auth.signOut();
        resetUser();
        router.push('/auth/login');
    };
    return (
        <Menu>
            <MenuButton>
                <Heading size='sm'>{userData.name || JSON.stringify(userData)}</Heading>
            </MenuButton>
            <MenuList>
                <MenuItem><Link href='/profile'>Profile</Link></MenuItem>
                <MenuItem onClick={logout}>Sign Out</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default MenuComponent