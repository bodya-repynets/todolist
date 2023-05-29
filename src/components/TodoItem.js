import { IconButton, Stack, Typography, Checkbox } from "@mui/material";
import { useState } from "react";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";

const TodoItem = ({ action, setActions, actions, setValue, setEdited }) => {
  const [checked, setChecked] = useState(false);
  const handleChecked = (idt) => {
    setChecked(!checked);
    const newActions = actions.map((action) => {
      if (idt === action.id) {
        return { ...action, checked: !action.checked };
      } else {
        return action;
      }
    });
    setActions(newActions);
  };
  const deleteItem = (idt) => {
    const newActions = actions.filter((action) => action.id !== idt);
    setActions(newActions);
  };
  const editItem = (idt) => {
    setValue(action.value);
    setEdited(idt);
  };
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Checkbox
        checked={action.checked}
        size="large"
        sx={{
            color: 'primary.main',
          background: "rgba(0,0,0,0.5)",
          "&:hover": { background: "rgba(0,0,0,0.5)" },
          borderRadius: '20%'
        }}
        onChange={() => {
          handleChecked(action.id);
        }}
      />
      <Typography
        sx={{
          textTransform: "capitalize",
          maxWidth: { xs: "150px", sm: "300px" },
          fontSize: { xs: "15px", sm: "20px" },
          fontWeight: '700', 
          color: 'rgba(255,255,255,0.9)',
          background: "rgba(0,0,0,0.5)",
            padding: '10px',
             borderRadius: '10px'
        }}
      >
        {action.value}
      </Typography>
      <Stack direction={"row"} spacing={1}>
        <IconButton
          sx={{ color: "#f0f4c3", background: "rgba(0,0,0,0.5)" , "&:hover": { background: "rgba(0, 150, 136,0.9)"}}}
          onClick={() => editItem(action.id)}
        >
          <Edit sx={{ fontSize: "30px" }} />
        </IconButton>
        <IconButton
          sx={{ color: "#e57373", background: "rgba(0,0,0,0.5)", "&:hover": { background: "rgba(0, 150, 136,0.9)"} }}
          onClick={() => deleteItem(action.id)}
        >
          <Delete sx={{ fontSize: "30px" }} />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default TodoItem;
