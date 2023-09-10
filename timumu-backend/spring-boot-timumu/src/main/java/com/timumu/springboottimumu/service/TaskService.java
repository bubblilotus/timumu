package com.timumu.springboottimumu.service;

import com.timumu.springboottimumu.dao.TaskRepository;
import com.timumu.springboottimumu.entity.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;
    public void deleteTask(Long id){
        taskRepository.deleteById(id);
    }
    public void deleteTask(Task task){
        taskRepository.delete(task);
    }
    public void deleteTasksInList(Long list_id){
        taskRepository.deleteByListId(list_id);
    }
    public Task updateTask(Task task) {
        Task existingTask = taskRepository.findById(task.getId()).orElseThrow();
        existingTask.setName(task.getName());
        existingTask.setCompleted(task.getCompleted());
        return taskRepository.save(existingTask);
    }
    public void deleteTasks(List<Task> tasks){
        for (Task task:tasks) {
            deleteTask(task);
        }
    }
    public List<Task> findTasksByList(Long list_id){
        return taskRepository.findByListId(list_id);
    }

    public void deleteCompleted(Long list_id) {
        List<Task> tasks =
                taskRepository.findCompletedTasksInList(list_id);
        deleteTasks(tasks);
    }
}
