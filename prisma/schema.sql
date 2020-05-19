CREATE TABLE "public"."User"(
    id SERIAL PRIMARY KEY NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255),
    "password" VARCHAR(255),
    "createdAt" TIMESTAMP NOT NULL DEFAULT now()
);

CREATE TABLE "public"."Roundtable"(
    id SERIAL PRIMARY KEY NOT NULL,
    roundtableName VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
    "ownerId" INTEGER NOT NULL,
    FOREIGN KEY ("ownerId") REFERENCES "public"."User"(id)
);

CREATE TABLE "public"."Member"(
    id SERIAL PRIMARY KEY NOT NULL,
    "roundtableId" INTEGER NOT NULL,
    FOREIGN KEY ("roundtableId") REFERENCES "public"."Roundtable"(id),
    "userId" INTEGER NOT NULL,
    FOREIGN KEY ("userId") REFERENCES "public"."User"(id)
);

CREATE TABLE "public"."Issue"(
    id SERIAL PRIMARY KEY NOT NULL,
    "roundtableId" INTEGER NOT NULL,
    FOREIGN KEY ("roundtableId") REFERENCES "public"."Roundtable"(id),
    title VARCHAR(255) NOT NULL,
    "issueAuthorId" INTEGER NOT NULL,
    FOREIGN KEY ("issueAuthorId") REFERENCES "public"."User"(id)
);


CREATE TABLE "public"."Question"(
    id SERIAL PRIMARY KEY NOT NULL,
    prompt VARCHAR(255) NOT NULL,
    "issueId" INTEGER NOT NULL,
    FOREIGN KEY ("issueId") REFERENCES "public"."Issue"(id),
    "authorId" INTEGER NOT NULL,
    FOREIGN KEY ("authorId") REFERENCES "public"."User"(id)
);

CREATE TABLE "public"."Response"(
    id SERIAL PRIMARY KEY NOT NULL,
    "questionId" INTEGER NOT NULL,
    FOREIGN KEY ("questionId") REFERENCES "public"."Question"(id),
    content VARCHAR(255) NOT NULL,
    "questionAuthorId" INTEGER NOT NULL,
    FOREIGN KEY ("questionAuthorId") REFERENCES "public"."User"(id)
);

