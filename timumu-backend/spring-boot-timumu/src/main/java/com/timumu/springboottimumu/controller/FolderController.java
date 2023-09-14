package com.timumu.springboottimumu.controller;

import com.timumu.springboottimumu.dao.FolderRepository;
import com.timumu.springboottimumu.entity.Customer;
import com.timumu.springboottimumu.entity.Folder;
import com.timumu.springboottimumu.service.FolderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FolderController {
    @Autowired
    private FolderRepository folderRepository;
    @Autowired
    private FolderService folderService;

//    @GetMapping
//    public java.util.List<Folder> getFolders(){
//        return folderRepository.findAll();
//    }
//    @GetMapping("/findById")
//    public Folder findByFolderId(@RequestParam Long id){
//
//        return folderRepository.findById(id).orElseThrow();
//    }
    @PostMapping ("/myFolders")
    public List<Folder> getFolders(@RequestBody Customer customer){
        List<Folder> folders = folderRepository.findByCustomerId(customer.getId());
        if (folders.size() > 0){
            return folders;
        }else{
            return null;
        }
    }
//    @PostMapping
//    public Folder add(@RequestBody Folder folder){
//        return folderRepository.save(folder);
//    }
//    @PutMapping
//    public Folder update(@RequestBody Folder folder){
//        return folderService.renameFolder(folder);
//    }
//    @DeleteMapping("/{id}")
//    public void delete(@PathVariable Long id){
//        folderService.deleteFolder(id);
//    }
}
