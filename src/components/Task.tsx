import { Trash, Circle, CheckCircle } from "@phosphor-icons/react";

interface TaskProps {
    content: string;
    isDone: boolean;
    onDeleteTask: (content: string) => void;
    onToggleTaskStatus: (content: string) => void
}

export function Task({content, isDone, onDeleteTask, onToggleTaskStatus}: TaskProps) {
    function handleTaskStatus() {
        onToggleTaskStatus(content);
    }

    function handleDeleteTask() {
        onDeleteTask(content);
    }

    return (
        <div className="container bg-gray-700 w-full rounded-lg flex p-4">
            <div className="flex flex-row items-center justify-between gap-4 w-full">
                <div className="flex flex-row gap-4">
                    <button onClick={handleTaskStatus}>
                        {isDone ? <CheckCircle color="#5E60CE" size={24}></CheckCircle> : <Circle color="#4EA8DE" size={24}></Circle>}
                    </button>
                    {isDone ?
                        <p className="text-gray-400 line-through">{content}</p>
                        :
                        <p className="text-gray-200">{content}</p>}
                </div>
                <button onClick={handleDeleteTask} className="text-gray-200 hover:text-red-600">
                    <Trash size={24}></Trash>
                </button>
            </div>
        </div>
    )
}