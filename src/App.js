import React, { useState } from 'react'
import Input from './component/Input'
import Box from './component/Box'
import Item from './component/Item';

const App = () => {

    const [todos, setToDo] = useState([]);

    const removeToDo = (id) => {
        
        const newToDo = todos.filter(
            (d, index) => {
                if (index !== id) {
                    return true;
                }
                else {
                    return false;
                }

            }

        )
        setToDo(newToDo);
    }


    const addToDoHandler = (item) => {
        
        setToDo(
            [
                ...todos,
                {
                    item,
                    time: new Date().toLocaleTimeString()
                }
            ]
        )
    }

    console.log(todos);

    return (
        <div className='bg-black h-screen p-3 '>
            <div className='max-w-[750px]  min-h-[550px] shadow-2xl bg-white mx-auto rounded'>
                
                <Input handler={addToDoHandler} />
                <Box data={todos} removeHandler={removeToDo} />
            </div>
        </div>
    )
}

export default App