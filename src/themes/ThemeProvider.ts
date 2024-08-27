import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
    palette: {
        background: {
            default: '#ffffff'
        }
    },

    typography: {
        fontFamily: 'Avenir-Roman, sans-serif',
        h1: {
            fontFamily: 'Avenir-Heavy, sans-serif',
            fontWeight: '700',
            fontSize: '3rem',
            color: '#252525',
            lineHeight: '1.4',
            textShadow: 
                //text stroke
               `-0.6px -0.6px 0 #000,
                0.6px -0.6px 0 #000,
                -0.6px  0.6px 0 #000,
                0.6px  0.6px 0 #000,
                0px 4px 4px rgba(0, 0, 0, 0.4)`// text shadow,
        },
        body1: {
            fontFamily: 'Avenir-Roman, sans-serif',
            fontWeight: '400',
            lineHeight: '1.2',
            fontSize: '1.6rem',
            color: 'rgba(37, 37, 37, 0.8)',
        },
        body2: {
            fontFamily: 'Avenir-Heavy, sans-serif',
            fontWeight: '700',
            fontSize: '3rem',
            color: '#c9c9c9',
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '18px',
                    fontWeight: '300',
                    textTransform: 'none',
                    width: '157px',
                    height:'50px',  
                    padding: '16px 32px', 
                    borderRadius: '16px',
                },
                
                contained: {
                    backgroundColor: '#252525',
                    color: '#ffffff',
                    '&:hover': {
                        backgroundColor: '#353535'
                    },
                },
            }
        }
    }
})

export default Theme;