-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 04-Jul-2023 às 04:55
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `luster`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `aposta`
--

CREATE TABLE `aposta` (
  `id_aposta` int(11) NOT NULL,
  `id_fk_user` int(11) NOT NULL,
  `fk_id_jogo` int(11) NOT NULL,
  `valor_aposta` decimal(10,2) NOT NULL,
  `data_aposta` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `aposta`
--

INSERT INTO `aposta` (`id_aposta`, `id_fk_user`, `fk_id_jogo`, `valor_aposta`, `data_aposta`) VALUES
(1, 1, 1, '10.00', '2023-05-23 01:25:03'),
(2, 1, 2, '20.00', '2023-05-23 01:25:03'),
(3, 2, 1, '15.00', '2023-05-23 01:25:03'),
(4, 3, 3, '25.00', '2023-05-23 01:25:03');

-- --------------------------------------------------------

--
-- Estrutura da tabela `compra`
--

CREATE TABLE `compra` (
  `id_compra` int(11) NOT NULL,
  `id_fk_usuario` int(11) NOT NULL,
  `fk_id_produto` int(11) NOT NULL,
  `data_compra` datetime DEFAULT current_timestamp(),
  `quantidade` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `compra`
--

INSERT INTO `compra` (`id_compra`, `id_fk_usuario`, `fk_id_produto`, `data_compra`, `quantidade`) VALUES
(1, 1, 1, '2023-05-23 01:25:03', 2),
(2, 1, 3, '2023-05-23 01:25:03', 1),
(3, 2, 2, '2023-05-23 01:25:03', 3),
(4, 3, 4, '2023-05-23 01:25:03', 2),
(5, 3, 7, '2023-05-23 01:25:03', 1),
(6, 4, 5, '2023-05-23 01:25:03', 2),
(7, 5, 8, '2023-05-23 01:25:03', 1),
(8, 6, 10, '2023-05-23 01:25:03', 2),
(9, 7, 1, '2023-05-23 01:25:03', 3),
(10, 9, 6, '2023-05-23 01:25:03', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `jogo`
--

CREATE TABLE `jogo` (
  `id_jogo` int(11) NOT NULL,
  `nome_jogo` varchar(100) NOT NULL,
  `data_aposta` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `jogo`
--

INSERT INTO `jogo` (`id_jogo`, `nome_jogo`, `data_aposta`) VALUES
(1, 'Roleta', '2023-05-23 01:25:03'),
(2, 'Mine', '2023-05-23 01:25:03'),
(3, 'Gráfico', '2023-05-23 01:25:03');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produto`
--

CREATE TABLE `produto` (
  `id_produto` int(11) NOT NULL,
  `nome_produto` varchar(100) NOT NULL,
  `preco_produto` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `produto`
--

INSERT INTO `produto` (`id_produto`, `nome_produto`, `preco_produto`) VALUES
(1, 'Gosverni Xernou 9 Pro', '999.99'),
(2, 'Iphone 14', '799.99'),
(3, 'Samsung Galaxy Z Folder 4', '1299.99'),
(4, 'Playstation 5', '1999.99'),
(5, 'X Box Series X', '2999.99'),
(6, 'Notebook Alienware', '2999.99'),
(7, 'PC Gamer', '3999.99'),
(8, 'Headset Astro A50', '49.99'),
(9, 'Nike Air Max Plus', '29.99'),
(10, 'k9', '1.99');

-- --------------------------------------------------------

--
-- Estrutura da tabela `recarga`
--

CREATE TABLE `recarga` (
  `id_recarga` int(11) NOT NULL,
  `fk_id_usuario` int(11) NOT NULL,
  `valor_recarga` decimal(10,2) NOT NULL,
  `data_recarga` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `recarga`
--

INSERT INTO `recarga` (`id_recarga`, `fk_id_usuario`, `valor_recarga`, `data_recarga`) VALUES
(1, 1, '50.00', '2023-05-23 01:22:20'),
(2, 1, '20.00', '2023-05-23 01:22:20'),
(3, 2, '30.00', '2023-05-23 01:22:20'),
(4, 3, '100.00', '2023-05-23 01:22:20'),
(5, 4, '25.00', '2023-05-23 01:22:20'),
(6, 5, '50.00', '2023-05-23 01:22:20'),
(7, 6, '150.00', '2023-05-23 01:22:20'),
(8, 6, '50.00', '2023-05-23 01:22:20'),
(9, 7, '75.00', '2023-05-23 01:22:20'),
(10, 9, '200.00', '2023-05-23 01:22:20');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `email_usuario` varchar(100) NOT NULL,
  `nome_usuario` varchar(50) NOT NULL,
  `senha_usuario` varchar(50) NOT NULL,
  `saldo_usuario` decimal(10,2) NOT NULL DEFAULT 0.00
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `email_usuario`, `nome_usuario`, `senha_usuario`, `saldo_usuario`) VALUES
(1, 'gugu@gmail.com', 'Gugu420', 'euzguri420', '1010.00'),
(2, 'k9@outlook.com', 'UsuárioK9', 'K9zinho', '0.00'),
(3, 'brusk@yahoo.com.br', 'Brusk', 'amominhanamorada', '0.00'),
(4, 'jp@gmail.com', 'Jp', 'clashroyale', '0.00'),
(5, 'golerme@outlook.com', 'golerme', 'podpode', '0.00'),
(6, 'gordin@gmail.com', 'gordinho', 'bololo', '0.00'),
(7, 'manoelgomes@gmail.com', 'caneta', 'azul', '0.00'),
(8, 'maiconkuster@gmail.com', 'maicon', 'kotakaS2', '0.00'),
(9, 'flavio@outlook.com', 'FlavindoPneu', 'robloxdograu', '0.00'),
(10, 'shaolin@gmail.com', 'ShaolinMatadordePorco', 'pandemia123', '0.00');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `aposta`
--
ALTER TABLE `aposta`
  ADD PRIMARY KEY (`id_aposta`),
  ADD KEY `id_fk_user` (`id_fk_user`),
  ADD KEY `fk_id_jogo` (`fk_id_jogo`);

--
-- Índices para tabela `compra`
--
ALTER TABLE `compra`
  ADD PRIMARY KEY (`id_compra`),
  ADD KEY `id_fk_usuario` (`id_fk_usuario`),
  ADD KEY `fk_id_produto` (`fk_id_produto`);

--
-- Índices para tabela `jogo`
--
ALTER TABLE `jogo`
  ADD PRIMARY KEY (`id_jogo`);

--
-- Índices para tabela `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`id_produto`);

--
-- Índices para tabela `recarga`
--
ALTER TABLE `recarga`
  ADD PRIMARY KEY (`id_recarga`),
  ADD KEY `fk_id_usuario` (`fk_id_usuario`);

--
-- Índices para tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `aposta`
--
ALTER TABLE `aposta`
  MODIFY `id_aposta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `compra`
--
ALTER TABLE `compra`
  MODIFY `id_compra` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `jogo`
--
ALTER TABLE `jogo`
  MODIFY `id_jogo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `produto`
--
ALTER TABLE `produto`
  MODIFY `id_produto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `recarga`
--
ALTER TABLE `recarga`
  MODIFY `id_recarga` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `aposta`
--
ALTER TABLE `aposta`
  ADD CONSTRAINT `aposta_ibfk_1` FOREIGN KEY (`id_fk_user`) REFERENCES `usuario` (`id_usuario`),
  ADD CONSTRAINT `aposta_ibfk_2` FOREIGN KEY (`fk_id_jogo`) REFERENCES `jogo` (`id_jogo`);

--
-- Limitadores para a tabela `compra`
--
ALTER TABLE `compra`
  ADD CONSTRAINT `compra_ibfk_1` FOREIGN KEY (`id_fk_usuario`) REFERENCES `usuario` (`id_usuario`),
  ADD CONSTRAINT `compra_ibfk_2` FOREIGN KEY (`fk_id_produto`) REFERENCES `produto` (`id_produto`);

--
-- Limitadores para a tabela `recarga`
--
ALTER TABLE `recarga`
  ADD CONSTRAINT `recarga_ibfk_1` FOREIGN KEY (`fk_id_usuario`) REFERENCES `usuario` (`id_usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
