package com.timumu.springboottimumu.dao;

import com.timumu.springboottimumu.entity.Folder;
import com.timumu.springboottimumu.entity.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

public interface ListRepository extends JpaRepository<List, Long> {
    public java.util.List<List> findByFolderId
            (@Param("id") Long id);
    public void deleteById(Long id);
}
