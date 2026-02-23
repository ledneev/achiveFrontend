import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { completeTask, selectAnswer, selectCompletedTask, selectCurrentTask } from '../../../store/slices/tasksSlice';
import { addBalance } from '../../../store/slices/userSlice';


const TaskList: React.FC = () => {
  const dispatch = useDispatch();
  const currentTask = useSelector(selectCurrentTask);
  const completedTasks = useSelector(selectCompletedTask);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tasks = useSelector((state: any) => state.tasks.items);
  
  const handleAnswerSelect = (answerId: string) => {
    if (currentTask) {
      dispatch(selectAnswer({ taskId: currentTask.id, answerId }));

      const selectedOption = currentTask.options?.find(opt => opt.id === answerId);
      if (selectedOption?.isCorrect) {
        dispatch(addBalance(currentTask.reward));
      }
    }
  };
  
  const handleCompleteTask = (taskId: string, reward: number) => {
    dispatch(completeTask(taskId));
    dispatch(addBalance(reward));
  };
  
  return (
    <div>
      {/* Реализация списка заданий */}
    </div>
  );
};

export default TaskList;