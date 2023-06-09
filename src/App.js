import { Container, Stack, TextField, Typography, Button, Box, createTheme, ThemeProvider } from "@mui/material";
import Todo from "./components/Todo";
import { useEffect, useState } from "react";
const theme = createTheme({
  palette: {
    primary: {
      main:'#009688'
    },
  },
});


function App() {
  const [actions, setActions] = useState(null);
  const [value, setValue] = useState("");
  const [edited, setEdited] = useState(null);
  const handleClick = () => {
    if(value!==''){
    if (edited) {
      const newActions = actions.filter((action) => action.id !== edited);
      setActions([...newActions, { value: value, checked: false, id: edited }]);
      setEdited(null);
    } else {
      const time = new Date();
      if (actions) {
        setActions([
          ...actions,
          { value: value, checked: false, id: time.getTime() },
        ]);
      } else {
        setActions([{ value: value, checked: false, id: time.getTime() }]);
      }
    }
    setValue("");
  }
  };
  useEffect(() => {
    if (actions) {
      localStorage.setItem("actions", JSON.stringify(actions));
    } else {
      const items = JSON.parse(localStorage.getItem("actions"));
      if (items) {
        setActions(items);
      }
    }
  }, [actions]);

  return (
    <ThemeProvider theme={theme}>

    <Stack sx={{width: '100vw', height: '100vh', }} justifyContent={'center'} alignItems={'center'}>
      <Stack
        sx={{
          width: { xs: "100%", sm: "500px", md: "800px" },
          padding: {'xs': '40px 20px', 'md': '80px 40px'},
          minHeight: {'xs':'100%', 'sm': "80%"},  
          background: 'rgba(0,0,0,0.3)',
          borderRadius: '10%'
        }}
        spacing={"50px"}
        justifyContent={'center'}
        >
        <Stack alignItems={"center"} spacing={"10px"}>
          <TextField
          InputProps={{
            style: {
              fontSize: '24px', 
              color: 'white'
            },
          }}
          placeholder="Type action..."
          value={value}
          sx={{ width: {'xs': '200px', 'sm': '300px'}, fontSize: '30px' }}
          onChange={(e) => setValue(e.target.value)}
          />
          <Button
            onClick={handleClick}
            variant="contained"
            sx={{ width: {'xs': '200px', 'sm': '300px'}, height: '50px', fontSize: '16px', fontWeight: '600', letterSpacing: '10px' }}
            >
            {edited ? "edit" : "add"}
          </Button>
        </Stack>
        {actions && (
          <Todo
          actions={actions}
          setActions={setActions}
          setValue={setValue}
          setEdited={setEdited}
          />
          )}
      </Stack>
    </Stack>
          </ThemeProvider>
  );
}

export default App;
