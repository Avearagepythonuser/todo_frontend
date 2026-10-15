import { Button } from "@heroui/react"
import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";0

export function NewTodo({handleAdd}) {
    const [newTask, setNewTask] = useState("")

    const handleSubmit = () => {
        if (!newTask.trim()) return;
        handleAdd(newTask);
        setNewTask("");
    }

    return (
        <div className="flex max-w-md m-auto items-center p-3 gap-3">
            <input type="text" 
                placeholder="Új teendő..."
                value={newTask}
                className="border rounded p-3 flex-1 bg-blue-200 text-black"
                onChange={(e)=> setNewTask(e.target.value)}
            />
            <Button onClick={handleSubmit}>
                <IoMdAddCircle/>
            </Button>
        </div>
    )
}