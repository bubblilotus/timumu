package com.timumu.springboottimumu.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MyAppConfig implements WebMvcConfigurer {
    @Value("https://localhost:4200")
    private String [] allowedOrigins;
    @Value("/api")
    private String basePath;
    @Override
    public void addCorsMappings(CorsRegistry cors) {
        cors.addMapping(basePath + "/**")
                .allowedOrigins("https://localhost:4200")
                .allowedMethods("GET", "POST","PUT", "DELETE");
    }

}
