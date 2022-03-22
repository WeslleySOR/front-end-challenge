import { styled } from "@stitches/react";

export const Container = styled('header', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingInline: '0.8rem',
    background: '#4DD0E1',
    minHeight: '6rem',
    'img.avatar-logo': {
        width: '4rem',
        height: '3rem',
        zIndex: '999999'
    }
})

export const MenuButton = styled('button', {
    border: 'none',
    background: 'none',
    display: 'flex',
    flexDirection: 'column',
    zIndex: '999999',
    variants: {
        isOpened: {
            true: {
                gap: '0',
                '>img': {
                    '&.first-shape': {
                        transition: 'transform 0.4s',
                        transform: 'translateY(0.3rem) rotate(-45deg)'
                    },
                    '&.second-shape': {
                        transition: 'transform 0.4s',
                        transform: 'rotate(-45deg)'
                    },
                    '&.third-shape': {
                        transition: 'transform 0.4s',
                        transform: 'translateY(-0.3rem) rotate(45deg)'
                    },
                }
            },
            false: {
                transition: 'gap 0.5s',
                gap: '0.831rem',
                '>img': {
                    '&.first-shape': {
                        transition: 'transform 0.4s',
                        transform: 'rotate(0deg) translateY(0rem)'
                    },
                    '&.second-shape': {
                        transition: 'transform 0.4s',
                        transform: 'rotate(0)'
                    },
                    '&.third-shape': {
                        transition: 'transform 0.4s',
                        transform: 'rotate(0deg) translateY(0rem)'
                    }
                }
            }
        }
    }
})