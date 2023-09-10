package com.timumu.springboottimumu.dao;

import com.timumu.springboottimumu.entity.Folder;
import com.timumu.springboottimumu.entity.Task;
import jakarta.persistence.Id;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin("http://localhost:4200")
//@RepositoryRestResource()
public interface TaskRepository extends JpaRepository<Task, Long> {
    public Task findById(Id id);
    public List<Task> findByListIdOrderByCompletedAsc
            (Long id);
    public List<Task> findByListId(Long id);
    public List<Task> findByNameContaining
            (@Param("name") String name);
    public List<Task> findAllByOrderByCompletedAsc();
    public void deleteById(Long id);
    public void deleteByListId(Long id);
    @Query("SELECT t FROM Task t WHERE " +
            "t.list.id = ?1 and t.completed = true ")
    public List<Task> findCompletedTasksInList(Long id);
}
