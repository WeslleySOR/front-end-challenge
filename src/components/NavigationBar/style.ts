import { styled } from "@stitches/react";

export const Container = styled('nav', {
    display: 'flex',
    width: '100%',
    marginTop: '4rem',
    '> button': {
        flex: '1'
    },
    variants: {
        isVisible: {
            false: {
                display: 'none'
            }
        },
        isOpenedMenu: {
            false: {
                transition: 'transform 0.6s',
                transform: 'translateX(0)'
            },
            true: {
                transition: 'transform 0.6s',
                transform: 'translateX(-100%)'
            }
        }
    }
})