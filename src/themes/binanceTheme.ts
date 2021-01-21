import { createMuiTheme,  responsiveFontSizes  } from "@material-ui/core/styles";
//import grey from "@material-ui/core/colors/grey";



export const lightTheme = responsiveFontSizes(createMuiTheme({
  props: {
    MuiAppBar: {
      position: "sticky",
    },
    MuiCard: {
      elevation: 0,
    },
  },
  palette: {
    type: "light",
    primary: {
      light: '#000',
      main: '#f3ba2f',
      dark: '#fff',
      contrastText: '#000',
    },
    background: {
     
      paper: "#f3ba2f",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        background: "#f3ba2f",
      },
    },
    MuiTextField: {
      root: {      
        overflow: "visible !important",
        color: "#f3ba2f "
      },
    },
    MuiPaper: {
      root: {
        overflow: "visible !important",
        color: "#000"
      },
    },
    MuiTable: {
      root: {
        color: "visible !important",
      },
    },
   MuiMenuItem : {
    root: {
      color: "##f3ba2f  !important",
    },
   },
    MuiLink: {
      root: {
        color: 'linear-gradient(45deg, #ffea00 30%, #f3ba2f  90%)'
      },
    },
    MuiButton: {
      root: {
        color: "#f3ba2f  !important",
      },
    },
    MuiTypography: {
      
      root: {
        
        outlineStyle: "#666",
        color: "#000" ,
      },
    },
  },
}));


export const darkTheme = responsiveFontSizes(createMuiTheme({
  props: {
    MuiAppBar: {
      position: "sticky",
    },
    MuiCard: {
      elevation: 0,
    },
  },
  palette: {
    type: "dark",
    primary: {
      light: '#f3ba2f',
      main: '#f3ba2f',
      dark: '#000',
      contrastText: '#fff',
    },
    background: {
     
      paper: "#f3ba2f",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        background: "#f3ba2f",
      },
    },
    MuiTextField: {
      root: {      
        overflow: "visible !important",
        color: "#f3ba2f "
      },
    },
    MuiPaper: {
      root: {
        overflow: "visible !important",
        color: "#000"
      },
    },
    MuiTable: {
      root: {
        color: "visible !important",
      },
    },
   MuiMenuItem : {
    root: {
      color: "##f3ba2f  !important",
    },
   },
    MuiLink: {
      root: {
        color: 'linear-gradient(45deg, #ffea00 30%, #f3ba2f  90%)'
      },
    },
    MuiButton: {
      root: {
        color: "#f3ba2f  !important",
      },
    },
    MuiTypography: {
      
      root: {
        
        outlineStyle: "#666",
        color: "#fff" ,
      },
    },
  },
}));

export default {
  darkTheme,
  lightTheme,
};
