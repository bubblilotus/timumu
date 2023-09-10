package com.timumu.springboottimumu.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;
@Data
@Entity
@Table(name = "list")
public class List {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "name")
    private String name;
    @ManyToOne
    @JoinColumn(name = "folder_id")
    private Folder folder;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "list")
    private Set<Task> tasks;
}
