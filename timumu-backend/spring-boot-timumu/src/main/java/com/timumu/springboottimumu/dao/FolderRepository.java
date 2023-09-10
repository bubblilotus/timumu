package com.timumu.springboottimumu.dao;

import com.timumu.springboottimumu.entity.Folder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface FolderRepository extends JpaRepository<Folder, Long> {
}
