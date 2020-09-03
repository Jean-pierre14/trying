-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 31, 2020 at 04:26 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node`
--

-- --------------------------------------------------------

--
-- Table structure for table `personnelle`
--

CREATE TABLE `personnelle` (
  `id` int(64) NOT NULL,
  `username` varchar(50) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `sexe` varchar(10) NOT NULL,
  `status` varchar(20) NOT NULL,
  `post` varchar(30) NOT NULL,
  `user_level` tinyint(3) UNSIGNED NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `mot_de_passe` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `personnelle`
--

INSERT INTO `personnelle` (`id`, `username`, `fullname`, `email`, `address`, `sexe`, `status`, `post`, `user_level`, `created_at`, `mot_de_passe`) VALUES
(3, 'Grace', 'grace bisimwa', 'sniper@gmail.com', 'ndosho rue 30juin', 'undefined', '', 'Directeur', 0, '2020-08-30 00:16:18', 'undefined'),
(4, 'chiruza', 'solange pokea', 'chiruzabisimwa@gmail.com', 'vinofvion', 'M', '', 'Directeur', 0, '2020-08-30 00:18:29', 'undefined'),
(5, 'chiruza', 'grace bisimwa', 'sniper@gmail.com', 'vinofvion', 'M', '', 'Directeur', 0, '2020-08-30 00:21:04', '12345'),
(6, 'esther', 'esther kolo', 'esther@gmail.com', 'Goma ville', 'F', '', 'Surveillant', 0, '2020-08-30 00:36:26', '12345'),
(9, 'mango', 'mango itaji', 'mango@gmail.com', 'Goma Ndosho', 'M', '', 'Surveillant', 0, '2020-08-31 12:34:05', '12345'),
(12, 'Amani', 'amani uwase', 'amaninuwase@gmail.rw', 'Rwanda Gisenyi', 'M', '', 'Ouvrielle', 0, '2020-08-31 12:45:26', '12345'),
(17, 'Florence up', 'Florence kitumaini', 'florencekitumaini@gmail.com', 'Lubumbashi', 'F', 'Fiance', 'Comptable', 0, '2020-08-31 14:38:26', '12345'),
(18, 'Florence up', 'Florence kitumaini', 'florencekitumaini@gmail.com', 'Lubumbashi', 'F', '--selection--', '--selection--', 0, '2020-08-31 14:41:30', '12345');

-- --------------------------------------------------------

--
-- Table structure for table `request`
--

CREATE TABLE `request` (
  `id` int(64) NOT NULL,
  `email` varchar(100) NOT NULL,
  `message` text NOT NULL,
  `create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `request`
--

INSERT INTO `request` (`id`, `email`, `message`, `create_at`) VALUES
(1, 'chiruzabisimwa@yahoo.fr', 'vous allez bien??', '2020-08-29 07:48:41'),
(2, 'chiruzabisimwa@yahoo.fr', 'gooog choose to make our heart happy', '2020-08-29 21:52:49'),
(3, 'solangepokea@gmail.com', 'efgfnpnf', '2020-08-31 16:11:47'),
(4, 'solangepokea@gmail.com', 'efgfnpnf', '2020-08-31 16:11:47'),
(5, 'juliabutelezi@gmail.com', 'salut les gens', '2020-08-31 16:14:29');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone_no` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone_no`) VALUES
(1, 'grace el Bisimwa', 'graceelbisimwa@gmail.com', '0975848171'),
(2, 'germain  CHIRUZA', 'germainchiruza@gmail.com', '0991747696'),
(3, 'crud mysql', 'awsome-code@gmail.com', '000988989'),
(6, 'Peter blog', 'popaul@gmail.com', '12345567899'),
(7, 'message', 'grace@erc.com', '0975848171'),
(8, 'adolf', 'adolf@gmail.com', '0970868020'),
(9, 'daniel Bisimwa', 'danielchiruza@gmail.com', '0991747696'),
(10, 'graceReactCrud', 'grace@gmail.cd', '099096984'),
(11, 'Grace23', 'grac111e@gmail.cd', '099096984'),
(12, 'solange pokea update', 'solangepokea@gmail.com', '0993777547'),
(13, 'test up', 'testUp@example.com', '0009990011');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `personnelle`
--
ALTER TABLE `personnelle`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `request`
--
ALTER TABLE `request`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `personnelle`
--
ALTER TABLE `personnelle`
  MODIFY `id` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `request`
--
ALTER TABLE `request`
  MODIFY `id` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
