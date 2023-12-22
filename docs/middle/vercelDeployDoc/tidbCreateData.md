Create Table

[字段数据类型](https://www.php.cn/faq/460317.html)

```mysql
CREATE TABLE `bookshop`.`users` (
  `id` bigint,
  `nickname` varchar(100),
  `balance` decimal(15,2)
);
CREATE TABLE `bookshop`.`books` (
  `id` bigint(20) AUTO_RANDOM NOT NULL,
  `title` varchar(100) NOT NULL,
  `type` enum('Magazine', 'Novel', 'Life', 'Arts', 'Comics', 'Education & Reference', 'Humanities & Social Sciences', 'Science & Technology', 'Kids', 'Sports') NOT NULL,
  `published_at` datetime NOT NULL,
  `stock` int(11) DEFAULT '0',
  `price` decimal(15,2) DEFAULT '0.0',
  PRIMARY KEY (`id`) CLUSTERED
) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

CREATE TABLE `questions` (
  `id` INT AUTO_INCREMENT NOT NULL,
  `options` varchar(500),
  `type` bigint(20),
  `answer` varchar(500),
  `analysis` varchar(500),
  `qtype` varchar(10),
  `question` varchar(200),
   PRIMARY KEY (`id`) CLUSTERED
);

CREATE TABLE `test`.`tags` (
  `id` int AUTO_INCREMENT NOT NULL,
  `name` varchar(100),
  `addTime` datetime DEFAULT NOW() ON UPDATE NOW(),
   PRIMARY KEY (`id`) CLUSTERED
);
```

insert Data

```mysql
INSERT INTO `player` (`id`, `coins`, `goods`) VALUES (1, 1000, 1), (2, 230, 2), (3, 300, 5);
ALTER TABLE tags ADD statu int DEFAULT 1
UPDATE tags SET statu = 0 
UPDATE {table} SET {update_column} = {update_value} WHERE {filter_column} = {filter_value}
UPDATE `authors` SET `name` = "Helen Haruki" WHERE `id` = 1;
DELETE FROM `ratings` WHERE `rated_at` >= "2022-04-15 00:00:00" AND `rated_at` <= "2022-04-15 00:15:00
```

queries

```mysql
SELECT id, name FROM authors;

SELECT ANY_VALUE(a.id) AS author_id, ANY_VALUE(a.name) AS author_name, COUNT(ba.book_id) AS books
FROM authors a
JOIN book_authors ba ON a.id = ba.author_id
GROUP BY ba.author_id
ORDER BY books DESC
LIMIT 10;

SELECT b.id AS book_id, ANY_VALUE(b.title) AS book_title, AVG(r.score) AS average_score
FROM books b
LEFT JOIN ratings r ON b.id = r.book_id
GROUP BY b.id
ORDER BY b.published_at DESC
LIMIT 10;
SHOW INDEX FROM `questions`;
```

paginate Results

```mysql
SELECT
    floor((t.row_num - 1) / 1000) + 1 AS page_num,
    min(t.id) AS start_key,
    max(t.id) AS end_key,
    count(*) AS page_size
FROM (
    SELECT id, row_number() OVER (ORDER BY id) AS row_num
    FROM books
) t
GROUP BY page_num
ORDER BY page_num;
```

删除表

```mysql
DROP TABLE `person`
DELETE FROM {table} WHERE {filter}
```

编辑

```
ALTER TABLE t1 ADD c2 INT NOT NULL AFTER c1
ALTER TABLE 'mytable' MODIFY COLUMN 'my_column' INT
ALTER TABLE table_name DROP PRIMARY KEY
ALTER TABLE table_name ADD PRIMARY KEY (column_name)
drop index index_name on table_name
ALTER TABLE `questions` DROP  INDEX `PRIMARY`;
ALTER TABLE 'questions' MODIFY COLUMN 'addTime' INT;
UPDATE `questions` SET `id` = null;

```

