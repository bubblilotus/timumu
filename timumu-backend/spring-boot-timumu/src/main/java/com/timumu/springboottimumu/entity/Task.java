package com.timumu.springboottimumu.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "task")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "completed", columnDefinition = "boolean default false")
    private boolean completed;
    @ManyToOne
    @JoinColumn(name = "list_id")
    private List list;

    public boolean getCompleted() {
        return completed;
    }
}
