generator client {
provider = "prisma-client-js"
}

datasource db {
provider = "postgresql"
url = env("DATABASE_URL")
}

model Issue {
id Int @default(autoincrement()) @id
issueAuthorId Int
roundtableId Int
title String
issueAuthor User @relation(fields: [issueAuthorId], references: [id])
roundtable Roundtable @relation(fields: [roundtableId], references: [id])
questions Question[]
}

model Member {
id Int @default(autoincrement()) @id
roundtableId Int
userId Int
roundtable Roundtable @relation(fields: [roundtableId], references: [id])
user User @relation(fields: [userId], references: [id])
}

model Question {
authorId Int
id Int @default(autoincrement()) @id
prompt String
issueId Int
author User @relation(fields: [authorId], references: [id])
issue Issue @relation(fields: [issueId], references: [id])
responses Response[]
}

model Response {
content String
id Int @default(autoincrement()) @id
questionAuthorId Int
questionId Int
questionAuthor User @relation(fields: [questionAuthorId], references: [id])
question Question @relation(fields: [questionId], references: [id])
}

model Roundtable {
createdAt DateTime @default(now())
description String?
id Int @default(autoincrement()) @id
ownerId Int
roundtablename String
owner User @relation(fields: [ownerId], references: [id])
issues Issue[]
member Member[]
}

model User {
createdAt DateTime @default(now())
email String @unique
id Int @default(autoincrement()) @id
name String?
password String?
issues Issue[]
member Member[]
questions Question[]
responses Response[]
roundtables Roundtable[]
}
