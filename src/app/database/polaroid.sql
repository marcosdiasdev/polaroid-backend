-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema polaroid
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema polaroid
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `polaroid`;
CREATE SCHEMA IF NOT EXISTS `polaroid` DEFAULT CHARACTER SET utf8 ;
USE `polaroid` ;

-- -----------------------------------------------------
-- Table `polaroid`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `polaroid`.`user` ;

CREATE TABLE IF NOT EXISTS `polaroid`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(60) NULL,
  `birth` DATE NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NULL,
  `created_at` DATETIME NOT NULL DEFAULT NOW(),
  PRIMARY KEY (`id`),
  UNIQUE(`email`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `polaroid`.`photo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `polaroid`.`photo` ;

CREATE TABLE IF NOT EXISTS `polaroid`.`photo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `description` TEXT NULL,
  `user_id` INT NOT NULL,
  `path` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT NOW(),
  PRIMARY KEY (`id`),
  INDEX `fk_photo_user_idx` (`user_id` ASC),
  CONSTRAINT `fk_photo_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `polaroid`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `polaroid`.`user`
-- -----------------------------------------------------
START TRANSACTION;
USE `polaroid`;
INSERT INTO `polaroid`.`user` (`id`, `name`, `lastname`, `birth`, `email`, `password`, `created_at`) VALUES (DEFAULT, 'Wade', 'Winston Wilson', '1980-03-01', 'deadpool@marvel.com', '$2b$10$OPfnydWgBkKfbvwYahG9F.PPaZsqK.4906OcZnKsMGE5gAJjHNiJu', '2021-01-14 23:49:00');

COMMIT;