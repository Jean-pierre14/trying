CREATE TABLE `node`.`request` (
    `id` INT(64) NOT NULL AUTO_INCREMENT ,
    `email` VARCHAR(100) NOT NULL ,
    `message` TEXT NOT NULL ,
    `create_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB;
CREATE TABLE `personnelle` (
    `id` INT(64) NOT NULL AUTO_INCREMENT ,
    `username` VARCHAR(50) NOT NULL ,
    `fullname` VARCHAR(100) NOT NULL ,
    `email` VARCHAR(100) NOT NULL ,
    `address` VARCHAR(100) NOT NULL ,
    `sexe` VARCHAR(1) NOT NULL ,
    `status` VARCHAR(20) NOT NULL ,
    `post` VARCHAR(30) NOT NULL ,
    `user_level` TINYINT UNSIGNED NOT NULL ,
    `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    `mot_de_passe` VARCHAR(100) NOT NULL,
PRIMARY KEY (`id`)) ENGINE = InnoDB;

CREATE TABLE orphelin(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100), 
    age INT, 
    provinance  VARCHAR(100), 
    niveau_d_etude VARCHAR(100), 
    personne_qui_l_amene VARCHAR(100), 
    parente VARCHAR(100), 
    nom_du_pere VARCHAR(100),
    Fage INT, 
    phone VARCHAR(100), 
    profession VARCHAR(100), 
    nom_de_la_mere VARCHAR(100),
    Mage INT, 
    phone  VARCHAR(100), 
    profession VARCHAR(100)    
);

