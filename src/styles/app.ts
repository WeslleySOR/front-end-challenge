import { styled } from "@stitches/react";

export const Container = styled('div', {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    maxHeight: '100vh',
    overflowX: 'hidden'
})

export const Content = styled('div', {
    '@media (min-width: 768px)':{
        alignSelf: 'center',
        width: '75%'
    },
})

export const Main = styled('main', {
    width: '100%',
    variants: {
        isOpenedMenu: {
            false: {
                transition: 'transform 0.6s',
                transform: 'translateX(0)',
            },
            true: {
                transition: 'transform 0.6s',
                transform: 'translateX(-100%)'
            }
        }
    }
})