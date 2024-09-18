import './app.scss'
import {Input, InputGroup, InputRightAddon} from '@chakra-ui/react'
import React, {useState} from 'react'

function App() {

    const [addNewTaskText, setAddNewTaskText] = React.useState<string>('')

    const [listOfAllTodos, setListOfAllTodos] = useState([""])

    const addNewTask = () => {
        setListOfAllTodos((prev) => [...prev, addNewTaskText])
        setAddNewTaskText('')
        console.log({addNewTaskText});
    }

    return (
        <div className={"main-wrapper"}>
            <div className={"main-container"}>
                <div className={'header-bar'}>TODO WEB APP</div>
                <br/>
                <div style={{margin: '20px'}}>
                    <InputGroup size='lg'>
                        <Input placeholder='Add a new task' variant={'outlined'}
                               onChange={(e) => setAddNewTaskText(e.target.value)}
                               value={addNewTaskText}
                        />
                        <InputRightAddon onClick={addNewTask}>ADD</InputRightAddon>
                    </InputGroup>
                </div>

                <div style={{margin: '20px'}}>
                    {
                        listOfAllTodos.map((item) => <div>{item}</div>)
                    }
                </div>

            </div>
        </div>
    )
}

export default App
