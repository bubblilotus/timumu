package com.timumu.springboottimumu.service;

import com.timumu.springboottimumu.dao.FolderRepository;
import com.timumu.springboottimumu.dao.ListRepository;
import com.timumu.springboottimumu.dao.TaskRepository;
import com.timumu.springboottimumu.entity.Folder;
import com.timumu.springboottimumu.entity.List;
import com.timumu.springboottimumu.entity.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;
@Service
public class FolderService{
    @Autowired
    private FolderRepository folderRepository;
    @Autowired
    private ListService listService;

    public void deleteFolder(Long id) {
        Folder folder = folderRepository.findById(id).orElseThrow();
        java.util.List<List> lists = listService.findListsByFolderId(id);
        listService.deleteLists(lists);
        folderRepository.deleteById(id);
    }
    public Folder renameFolder(Folder folder){
        Folder existingFolder = folderRepository.findById(folder.getId()).orElseThrow();
        existingFolder.setName(folder.getName());
        return folderRepository.save(existingFolder);
    }
}
