package com.timumu.springboottimumu.controller;

import com.timumu.springboottimumu.dao.TaskRepository;
import com.timumu.springboottimumu.entity.Task;
import com.timumu.springboottimumu.service.TaskService;
import jakarta.persistence.Id;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/tasks")
public class TaskController {
    @Autowired
    private TaskRepository taskRepository;
    @Autowired
    TaskService taskService;
    @GetMapping
    public List<Task> getTasksOrdered(){
        return taskRepository.findAllByOrderByCompletedAsc();
    }
    @GetMapping("/search/findByListId")
    public List<Task> findTaskByListId(@RequestParam Long id){
        return taskRepository.findByListIdOrderByCompletedAsc(id);
    }
    @PostMapping
    public Task addTask(@RequestBody Task task){
        return taskRepository.save(task);
    }
    @PutMapping
    public Task update(@RequestBody Task task){
        return taskService.updateTask(task);
    }
    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id){
        taskService.deleteTask(id
        );
    }
}
