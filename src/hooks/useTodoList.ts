import { useEffect, useState } from 'react';
import { Todo } from '../types/todo';

export const useTodoList = () => {
    const [todoList, setTodoList] = useState<Todo[]>(() => {
        const localStorageTodoList = localStorage.getItem('todoList');
        return JSON.parse(localStorageTodoList ?? '[]');
    });

    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }, [todoList]);

    const changeCompleted = (id: number) => {
        setTodoList(prev => prev.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    };

    const addTodo = (title: string) => {
        setTodoList(prev => {
            const newTodo = {
                id: Date.now(),
                title,
                completed: false,
            };

            return [newTodo, ...prev];
        });
    };

    const deleteTodo = (id: number) => {
        setTodoList(prev => prev.filter(todo => todo.id !== id));
    };

    const deleteAllCompleted = () => {
        setTodoList(prev => prev.filter(todo => !todo.completed));
    };

    return { todoList, changeCompleted, addTodo, deleteTodo, deleteAllCompleted };
};
