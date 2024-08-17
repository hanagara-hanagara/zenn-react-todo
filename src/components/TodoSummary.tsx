import React from 'react';

type Props = {
    deleteAllCompleted: () => void;
};

const TodoSummary: React.FC<Props> = ({ deleteAllCompleted }) => {
    return (
        <div className="flex justify-end">
            <button
                onClick={deleteAllCompleted}
                className="text-sm text-red-500">
                完了したTodoを削除
            </button>
        </div>
    );
};

export default TodoSummary;
