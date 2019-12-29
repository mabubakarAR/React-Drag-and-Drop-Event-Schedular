import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontFamily: 'Museo-700, sans-serif',
        fontSize: 15,
        color: '#707070',

        h1: {
            fontSize: 45,
            color: '#1a1b46',
            fontFamily: "MuseoSans-700"

        },
        h2: {
            fontSize: 32,
            color: '#1a1b46',
            fontFamily: "MuseoSans-700"

        },
        h3: {
            fontSize: 22,
            color: '#1a1b46',
            fontFamily: "MuseoSans-500"

        },
        h4: {
            fontSize: 20,
            color: '#1a1b46',
            fontFamily: "MuseoSans-500"
        },
        h5: {
            fontSize: 18,
            color: '#1a1b46',
            fontFamily: "MuseoSans-500"

        },
        h6: {
            fontSize: 16,
            color: '#1a1b46',
            fontFamily: "MuseoSans-500"
        },
        subtitle1: {
            fontFamily: 'MuseoSans700-Regular, sans-serif',
            color: '#000000',
            fontWeight: "normal"

        },
        body1: {
            margin: 0,
            padding: 0,
            fontSize: '24',
            fontFamily: 'MuseoSans-300, sans-serif',
            overflow: 'hidden'
        },
        body2: {
            margin: 0,
            padding: 0,
            fontSize: '14px',
            lineHeight: '1.29',
            color: '#707070',
            fontFamily: 'MuseoSans-300'
        }

    },
    palette: {
        primary: {
            main: '#822d8c',
            light: '#b45dbd',
            Dark: '#52005e',
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#bb1e81',
            light: '#f15ab1',
            Dark: '#860054',
            contrastText: '#ffffff'
        },
        shape: {
            borderRadius: 0
        }
    },
    overrides: {
        MuiButton: {
            root: {
                height: '54px',
                width: '180px',
                textDecoration: 'none',
                padding: '16, 35',
                fontSize: "0.875rem",
                lineHeight: '1.75',
                letterSpacing: "0.02857em",
                textTransform: 'uppercase',
                fontFamily: 'MuseoSans-500 , sans-serif',
                boxShadow: '1 2 4 #00000036',
                borderRadius: "unset",
                fontWeight: "700"
            }

        },
        MuiLink: {
            root: {
                letterSpacing: '3px',
                fontFamily: 'MuseoSans-300',
                textDecoration: 'none',
                fontSize: '12px',
                lineHeight: '40px'
            },
            underlineNone: {
                underline: 'none'
            }
        },
        MuiNativeSelect: {
            select: {
                width: '138px',
                '@media (max-width: 400px)': {
                    width: '100px'
                }

            }
        },
        MuiOutlinedInput: {
            root: {
                borderRadius: "unset"
            }

        },
        MuiPaper: {
            elevation6: {
                boxShadow: "unset"
            }
        },
        MuiGrid: {
            "spacing-xs-10": {
                margin: "unset"
            },

            "grid-xs-7": {
                '@media (max-width: 600px)': {
                    flexGrow: 'unset',
                    maxWidth: 'unset',
                    flexBasis: 'unset'
                }

            }
        },
        MuiDivider: {
            vertical: {
                height: '60%',
                width: '1px',
                marginTop: '13px',
                backgroundColor: '#000'
            }
        },
        MuiButtonBase: {
            root: {
                display: 'inline-block'
            },

        },
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: "unset"
            },
            positionFixed: {
                position: "unset"
            }

        },
        MuiInputBase: {
            input: {
                height: "unset",
                padding: '4px 0 0px',
            }

        },
        MuiListItem: {
            root: {
                display: "flex",
                '@media (max-width: 768px)': {
                    display: "block",
                    paddingBottom: '21px'
                }
            },
            gutters: {
                paddingLeft: '82px',
                '@media (max-width: 768px)': {
                    paddingLeft: "unset"
                }
            }
        },
        MuiListItemText: {
            primary: {
                fontSize: '30px',
                fontWeight: '500',
                lineHeight: '1.96',
                fontFamily: 'MuseoSans-500',
                color: '#1a1b46',
                '@media (max-width: 768px)': {
                    fontSize: '21px',
                    lineHeight: '35px'
                }
            },
            secondary: {
                fontSize: "20px",
                lineHeight: '1.45',
                color: '4c4e6e',
                fontFamily: 'MuseoSans-300',
                '@media (max-width: 768px)': {
                    fontSize: '17px',
                    lineHeight: '25px'
                }
            }
        },
        MuiAvatar: {
            root: {
                width: '50px',
                height: '50px',
                bottom: '19px',
                right: '11px'
            }
        }
    }
});

export default theme;