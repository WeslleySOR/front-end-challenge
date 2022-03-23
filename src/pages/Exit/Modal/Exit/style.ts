import { styled } from "@stitches/react";
import Modal from 'react-modal';

export const Container = styled(Modal, {
    width: '100%',
    background: 'rgba(255,255,255,255.95)',
    padding: '2.8rem 3rem',
    position: 'relative',
    borderRadius: '0.4rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '2.4rem',
    '.box-info': {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.3rem',
        'span': {
            '&:first-of-type': {
                color: '#4A4A4A',
                fontSize: '1.6rem',
                textAlign: 'center'
            },
            '&:last-of-type': {
                color: '#00BCD4',
                fontSize: '3.8rem',
                textAlign: 'center',
                lineHeight: '4.5rem',
                textTransform: 'uppercase'
            }
        }
    },
    'button': {
        width: '100%'
    },
    '@media (min-width: 768px)':{
        width: '60%',
    }
})