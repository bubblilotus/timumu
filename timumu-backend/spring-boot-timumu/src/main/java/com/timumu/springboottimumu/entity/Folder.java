package com.timumu.springboottimumu.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Data
@Entity
@Table(name = "folder")
public class Folder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "folder_name")
    private String name;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "folder")
    private Set<List> lists;
}
