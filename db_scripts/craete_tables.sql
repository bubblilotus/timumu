-- -----------------------------------------------------
-- Schema timumu
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `timumu`;

CREATE SCHEMA `timumu`;
USE `timumu` ;

-- -----------------------------------------------------
-- Table `timumu`.`folder`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `timumu`.`folder` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `folder_name` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE=InnoDB
AUTO_INCREMENT = 1;

CREATE TABLE IF NOT EXISTS `timumu`.`list` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) DEFAULT NULL,
  `folder_id` BIGINT(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_folder` (`folder_id`),
  CONSTRAINT `fk_folder` FOREIGN KEY (`folder_id`) REFERENCES `folder` (`id`)
) 
ENGINE=InnoDB
AUTO_INCREMENT = 1;

CREATE TABLE IF NOT EXISTS `timumu`.`task` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) DEFAULT NULL,
  `completed` BOOLEAN DEFAULT FALSE,
  `list_id` BIGINT(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_list` (`list_id`),
  CONSTRAINT `fk_list` FOREIGN KEY (`list_id`) REFERENCES `list` (`id`)
) 
ENGINE=InnoDB
AUTO_INCREMENT = 1;


-- create folders
INSERT INTO folder(folder_name) VALUES ('Shopping');
INSERT INTO folder(folder_name) VALUES ('Projects');
INSERT INTO folder(folder_name) VALUES ('Recipes');
INSERT INTO folder(folder_name) VALUES ('ToDoLists');

-- insert lists
INSERT INTO list(name, folder_id) VALUES ("Groceries", 1);
INSERT INTO list(name, folder_id) VALUES ("Personal", 1);
INSERT INTO list(name, folder_id) VALUES ("Household", 1);
INSERT INTO list(name, folder_id) VALUES ("Wishlist", 1);

INSERT INTO list(name, folder_id) VALUES ("Programming", 2);
INSERT INTO list(name, folder_id) VALUES ("Sewing", 2);
INSERT INTO list(name, folder_id) VALUES ("Decor", 2);

INSERT INTO list(name, folder_id) VALUES ("Fluffy Pancakes", 3);
INSERT INTO list(name, folder_id) VALUES ("Oatmeal", 3);
INSERT INTO list(name, folder_id) VALUES ("Green Smoothie", 3);
INSERT INTO list(name, folder_id) VALUES ("Korean Toast", 3);

INSERT INTO list(name, folder_id) VALUES ("Daily Todo", 4);
INSERT INTO list(name, folder_id) VALUES ("Weekly Todo", 4);
INSERT INTO list(name, folder_id) VALUES ("Monthly Todo", 4);

-- insert Tasks
INSERT INTO task(name, list_id) VALUES ("flour", 1);
INSERT INTO task(name, list_id, completed) VALUES ("bananas", 1, true);
INSERT INTO task(name, list_id) VALUES ("oranges", 1);
INSERT INTO task(name, list_id) VALUES ("eggs", 1);










