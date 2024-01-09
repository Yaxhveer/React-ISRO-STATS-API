CREATE TABLE IF NOT EXISTS fav_launches(
    "id" serial primary key,
    "UUID" text not null,
    "Name" text not null,
    "SerialNumber" int not null,
    "LaunchDate" date null,
    "LaunchType" text not null,
    "Payload" text,
    "Link" text,
    "MissionStatus" text
);