package com.timumu.springboottimumu.controller;

import com.timumu.springboottimumu.dao.ListRepository;
import com.timumu.springboottimumu.dao.TaskRepository;
import com.timumu.springboottimumu.entity.List;
import com.timumu.springboottimumu.entity.Task;
import com.timumu.springboottimumu.service.ListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

@RestController
public class ListController {
    @Autowired
    private ListRepository listRepo;
//    @Autowired
//    ListService listService;
////    @GetMapping
////    public java.util.List<List> getAll(){
////
////        return listRepo.findAll();
////    }
    @GetMapping("/lists/{id}")
    public java.util.List<List> lists(@PathVariable Long id){
        java.util.List<List> lists = listRepo.findByFolderId(id);
        if(lists.size() >0){
            return lists;
        }
        else{
            return null;
        }
    }
//    @PostMapping("/search/findByFolderId")
//    public java.util.List<List> findByFolderId(@RequestParam Long id){
//        return listRepo.findByFolderId(id);
//    }
//    @PostMapping
//    public List add(@RequestBody List list){
//        return listRepo.save(list);
//    }
//    @PutMapping
//    public List update(@RequestBody List list){
//        return listService.renameList(list);
//    }
//    @DeleteMapping("/{id}")
//    public void deleteList(@PathVariable Long id){
//        listService.deleteList(id);
//    }
//    @DeleteMapping("/deleteCompletedTasks/{id}")
//    public void deleteCompletedTasks(@PathVariable Long id){
//         listService.deleteCompletedTasks(id);
//    }
}
