package com.timumu.springboottimumu.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Data
@Entity
@Table(name = "customer")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customer_id")
    private Long id;
    private String name;
    private String email;
    private String pwd;
    private String role;
    @Column(name = "create_dt")
    private String createDt;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "customer")
    private Set<Folder> folders;
}
