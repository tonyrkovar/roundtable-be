CREATE TABLE "public"."Users"(
    id SERIAL PRIMARY KEY NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    "password" VARCHAR(255),
    "createdAt" TIMESTAMP NOT NULL DEFAULT now()
);

CREATE TABLE "public"."Roundtables"(
    id SERIAL PRIMARY KEY NOT NULL,
    roundtableName VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
    "owner" INTEGER NOT NULL,
    FOREIGN KEY ("owner") REFERENCES "public"."Users"(id)
);

CREATE TABLE "public"."Members"(
    id SERIAL PRIMARY KEY NOT NULL,
    "roundtableId" INTEGER NOT NULL,
    FOREIGN KEY ("roundtableId") REFERENCES "public"."Roundtables"(id),
    "userId" INTEGER NOT NULL,
    FOREIGN KEY ("userId") REFERENCES "public"."Users"(id)
);

CREATE TABLE "public"."Issues"(
    id SERIAL PRIMARY KEY NOT NULL,
    "roundtableId" INTEGER NOT NULL,
    FOREIGN KEY ("roundtableId") REFERENCES "public"."Roundtables"(id),
    title VARCHAR(255) NOT NULL,
    author INTEGER NOT NULL,
    FOREIGN KEY ("author") REFERENCES "public"."Users"(id)
);


CREATE TABLE "public"."Questions"(
    id SERIAL PRIMARY KEY NOT NULL,
    "issueId" INTEGER NOT NULL,
    FOREIGN KEY ("issueId") REFERENCES "public"."Issues"(id),
    author INTEGER NOT NULL,
    FOREIGN KEY ("author") REFERENCES "public"."Users"(id)
);

CREATE TABLE "public"."Responses"(
    id SERIAL PRIMARY KEY NOT NULL,
    "questionId" INTEGER NOT NULL,
    FOREIGN KEY ("questionId") REFERENCES "public"."Questions"(id),
    content VARCHAR(255) NOT NULL,
    author INTEGER NOT NULL,
    FOREIGN KEY ("author") REFERENCES "public"."Users"(id)
);

