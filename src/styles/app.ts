import { styled } from "@stitches/react";

export const Container = styled('div', {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    overflowX: 'hidden'
})

export const Content = styled('div', {
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

export const Menu = styled('div', {
    width: '100%',
    position: 'absolute',
    top: '0',
    bottom: '0',
    right: '0',
    left: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '5rem',
    background: '#4DD0E1',
    paddingInline: '1.5rem',
    paddingTop: '10rem',
    'button': {
        background: 'none',
        border: 'none',
        'span': {
            color: '#fff',
            fontSize: '1.6rem',
            fontWeight: 'bold'
        }
    },
    variants: {
        isOpened: {
            false: {
                transition: 'transform 0.6s',
                transform: 'translateX(100%)'
            },
            true: {
                display: 'flex',
                transition: 'transform 0.6s',
                transform: 'translateX(0)'
            }
        }
    }
})