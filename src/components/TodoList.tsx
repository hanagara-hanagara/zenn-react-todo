import { Trash2 } from 'lucide-react';
import { Todo } from '../types/todo';

type Props = {
    todoList: Todo[];
    changeCompleted: (id: number) => void;
    deleteTodo: (id: number) => void;
};

const TodoList: React.FC<Props> = ({ todoList, changeCompleted, deleteTodo }) => {
    return (
        <div className="space-y-3">
            {todoList.map(todo => (
                <div
                    key={todo.id}
                    className="flex items-center gap-3 rounded bg-white p-2">
                    <label className="flex grow items-center gap-3 hover:cursor-pointer">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="size-5"
                                checked={todo.completed}
                                onChange={() => changeCompleted(todo.id)}
                            />
                        </div>
                        <span className={todo.completed ? 'text-gray-400 line-through' : ''}>{todo.title}</span>
                    </label>
                    <button
                        type="button"
                        className="rounded bg-gray-200 p-2 transition-colors hover:bg-gray-300"
                        onClick={() => deleteTodo(todo.id)}>
                        <Trash2 className="size-5 text-gray-500" />
                    </button>
                </div>
            ))}
            {todoList.length === 0 && <p className="text-center text-sm">Todoがありません</p>}
        </div>
    );
};

export default TodoList;
