package com.timumu.springboottimumu.service;

import com.timumu.springboottimumu.dao.ListRepository;
import com.timumu.springboottimumu.entity.List;
import com.timumu.springboottimumu.entity.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class ListService {
    @Autowired
    ListRepository listRepository;
    @Autowired
    TaskService taskService;
    public void deleteCompletedTasks(Long id){
        taskService.deleteCompleted(id);
    }
    public void deleteList(Long id){
        List list = listRepository.findById(id).orElseThrow();
        java.util.List<Task> tasks = taskService.findTasksByList(id);
        taskService.deleteTasks(tasks);
        listRepository.delete(list);
    }
    public java.util.List<List> findListsByFolderId(Long folderId){
        return listRepository.findByFolderId(folderId);
    }
    public void deleteLists(java.util.List<List> lists){
        for (List list:lists) {
            deleteList(list.getId());
        }
    }
    public List renameList(List list){
        List existingList = listRepository.findById(list.getId()).orElseThrow();
        existingList.setName(list.getName());
        return listRepository.save(existingList);
    }

}
