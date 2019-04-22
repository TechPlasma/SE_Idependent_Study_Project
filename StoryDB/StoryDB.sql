-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.15 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             10.1.0.5464
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for storydb
CREATE DATABASE IF NOT EXISTS `storydb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `storydb`;

-- Dumping structure for table storydb.stories
CREATE TABLE IF NOT EXISTS `stories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(128) NOT NULL,
  `author` varchar(64) NOT NULL,
  `createdDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `summary` text NOT NULL,
  `tags` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table storydb.stories: ~2 rows (approximately)
/*!40000 ALTER TABLE `stories` DISABLE KEYS */;
INSERT INTO `stories` (`id`, `title`, `author`, `createdDate`, `summary`, `tags`) VALUES
	(1, 'The Way of Kings', 'Brandon Sanderson', '2019-04-18 19:57:02', 'A story about Kaladin Stormblessed.', 'adventure,fantasy,long'),
	(2, 'Words of Radiance', 'Brandon Sanderson', '2019-04-18 21:45:29', 'Continuation of The Way of Kings', 'adventure,high fantasy,very long');
/*!40000 ALTER TABLE `stories` ENABLE KEYS */;

-- Dumping structure for table storydb.story_text
CREATE TABLE IF NOT EXISTS `story_text` (
  `id` int(11) NOT NULL,
  `story_text` longtext NOT NULL,
  KEY `Foriegn` (`id`),
  CONSTRAINT `FK_Story_Text_stories` FOREIGN KEY (`id`) REFERENCES `stories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table storydb.story_text: ~0 rows (approximately)
/*!40000 ALTER TABLE `story_text` DISABLE KEYS */;
/*!40000 ALTER TABLE `story_text` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
