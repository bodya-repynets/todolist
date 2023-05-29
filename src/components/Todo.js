import { Stack } from '@mui/material'
import React from 'react'
import TodoItem from './TodoItem'

const Todo = ({actions, setActions, setValue, setEdited}) => {
  return (
    <Stack spacing={2}>
        {actions.map((action)=>{
            return <TodoItem key={action.id} setValue={setValue} actions={actions} setEdited={setEdited} action={action} setActions={setActions}/>
        })}
    </Stack>
  )
}

export default Todo