BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS `urls` (
	`id`	INTEGER PRIMARY KEY AUTOINCREMENT,
	`url`	TEXT NOT NULL UNIQUE,
	`datetime`TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS `links` (
	`from_url_id`	INTEGER NOT NULL,
	`to_url_id`	INTEGER NOT NULL,
	FOREIGN KEY (from_url_id) REFERENCES urls(id),
    FOREIGN KEY (to_url_id) REFERENCES urls(id),
    PRIMARY KEY (from_url_id, to_url_id)
);
COMMIT;
