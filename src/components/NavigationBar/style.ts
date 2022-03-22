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
        }
    }
})