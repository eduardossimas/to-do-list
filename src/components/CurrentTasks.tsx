import { ChangeEvent, FormEvent, useState } from "react";
import { PlusCircle, ClipboardText } from "@phosphor-icons/react";
import { Task } from "./Task.tsx";

interface Task {
    id: number;
    isDone: boolean;
    content: string;
}

export function CurrentTasks() {

    const [tasks, setTasks] = useState<Task[]>([])
    const [newTask, setNewTask] = useState('')

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();
        const newTaskObject: Task = {
            id: tasks.length + 1,
            isDone: false,
            content: newTask
        };
        setTasks([...tasks, newTaskObject]);
        setNewTask('');
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewTask(event.target.value)
    }

    function deleteTask(taskToDelete: string) {
        const tasksWithoutDeleteOne = tasks.filter(task => {
            return task.content !== taskToDelete;
        })

        setTasks(tasksWithoutDeleteOne)
    }

    function toggleTaskStatus(taskContent: string) {
        const updatedTasks = tasks.map(task => {
            if (task.content === taskContent) {
                return { ...task, isDone: !task.isDone };
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    return (

        <div className='absolute inset-0 mr-96 ml-96 mt-36'>
            <div className='flex items-center justify-center'>
                <form onSubmit={handleCreateNewTask} className="w-full flex gap-3">
                    <input value={newTask} onChange={handleNewTaskChange} className="h-14 bg-gray-800 w-full p-4 text-ls rounded-lg text-gray-200 focus:outline-none focus:ring-1 focus:ring-black placeholder:text-gray-500" type="text" placeholder="Adicione uma nova tarefa" />
                    <button type="submit" className="flex gap-1 items-center justify-center h-14 bg-sky-700 p-4 rounded-lg text-gray-200 hover:bg-sky-800">
                        Criar
                        <PlusCircle size={24} />
                    </button>
                </form>
            </div>

            <div className='mt-12'>
                <div className="flex flex-col gap-6">
                    <div className="flex justify-between">
                        <div className="flex gap-2 items-center justify-center">
                            <span className="text-sky-600 font-bold">Tarefas criadas</span>
                            <span className="pl-2 pr-2 bg-gray-500 text-gray-100 rounded-full">{tasks.length}</span>
                        </div>
                        <div className="flex gap-2 items-center justify-center">
                            <span className="text-indigo-500 font-bold">Concluídas</span>
                            <span className="pl-2 pr-2 bg-gray-500 text-gray-100 rounded-full">{tasks.filter(task => task.isDone == true).length} de {tasks.length}</span>
                        </div>
                    </div>

                    {tasks.length == 0 ? 
                        <div className="w-full flex flex-col items-center gap-4 border-t border-gray-700 pt-16">
                            <ClipboardText color="#4B5563" size={56}></ClipboardText>
                            <div className="text-gray-600">
                                <strong>Você ainda não tem tarefas cadastradas</strong>
                                <p>Crie tarefas e organize seus itens a fazer</p>
                            </div>
                        </div> : 
                        <div></div>
                    }

                    <div className="flex flex-col gap-4">
                        {tasks.map(task => {
                            return <Task key={task.id} isDone={task.isDone} content={task.content} onDeleteTask={deleteTask} onToggleTaskStatus={toggleTaskStatus}></Task>
                        })}
                    </div>
                </div>
            </div>
        </div>




    )
}