//package com.timumu.springboottimumu.config;
//
//import jakarta.persistence.EntityManager;
//import jakarta.persistence.PersistenceContext;
//import jakarta.persistence.metamodel.EntityType;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.data.repository.support.Repositories;
//import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
//import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Set;
//
//@Configuration
//public class MyDataRestConfig implements RepositoryRestConfigurer {
//    //allowed orgins for data rest repos
//    @Value("https://localhost:4200")
//    private String [] allowedOrigins;
//    @Value("/api")
//    private String basePath;
//
//    @Autowired
//    private Repositories repositories;
//
//    @Override
//    public void configureRepositoryRestConfiguration
//            (RepositoryRestConfiguration config, CorsRegistry cors) {
//        repositories.iterator().forEachRemaining(repository -> {
//            config.exposeIdsFor(repository);
//        });
//        //configure cors
//        cors.addMapping(basePath + "/**").allowedOrigins(allowedOrigins);
//    }
//}
