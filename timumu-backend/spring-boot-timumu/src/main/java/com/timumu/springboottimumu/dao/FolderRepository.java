package com.timumu.springboottimumu.dao;

import com.timumu.springboottimumu.entity.Folder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

public interface FolderRepository extends JpaRepository<Folder, Long> {
    public List<Folder> findByCustomerId
            (@Param("id") Long id);
}
