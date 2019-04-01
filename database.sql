CREATE TABLE "user"
(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "categories"
(
    "id" SERIAL PRIMARY KEY,
    "category" VARCHAR (250)
);

INSERT INTO "categories" ("category")
VALUES ('food');

INSERT INTO "categories" ("category")
VALUES('clothing');

INSERT INTO "categories" ("category")
VALUES ('hygiene');

CREATE TABLE "gender"
(
    "id" SERIAL PRIMARY KEY,
    "gender" VARCHAR (20) NOT NULL
);

INSERT INTO "gender" ("gender")
VALUES ('male');

INSERT INTO "gender" ("gender")
VALUES ('female');

CREATE TABLE "products"
(
    "id" SERIAL PRIMARY KEY,
    "product_name" VARCHAR (255) NOT NULL,
    "product_quantity" INT,
    "product_min_quantity" INT,
    "catergory_id" INT REFERENCES "categories"."id",
    "season_id" INT REFERENCES "seasons"."id"
);

CREATE TABLE "seasons"
(
    "id" SERIAL PRIMARY KEY,
    "season" VARCHAR(200)
);

CREATE TABLE "wishlist"
(
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user"."id",
    "bio" VARCHAR(300) NOT NULL,
    "needs" VARCHAR(300) NOT NULL,
    "family_members" INT,
    "kids" VARCHAR(250)
);

