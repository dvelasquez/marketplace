create schema if not exists marketplace collate utf8_general_ci;

use marketplace;

create table ACL
(
  id            int auto_increment
    primary key,
  model         varchar(512) null,
  property      varchar(512) null,
  accessType    varchar(512) null,
  permission    varchar(512) null,
  principalType varchar(512) null,
  principalId   varchar(512) null
);

create table AccessToken
(
  id      varchar(255) not null
    primary key,
  ttl     int          null,
  scopes  text         null,
  created datetime     null,
  userId  int          null
);

create table Account
(
  id                int auto_increment
    primary key,
  realm             varchar(512) null,
  username          varchar(512) null,
  password          varchar(512) not null,
  email             varchar(512) not null,
  emailVerified     tinyint(1)   null,
  verificationToken varchar(512) null
);

create table Category
(
  id               int auto_increment
    primary key,
  name             varchar(512) not null,
  parentCategoryId int          null
);

create table `Lead`
(
  id        int auto_increment
    primary key,
  createdAt datetime null,
  adId      int      null,
  buyerId   int      null,
  constraint buyerId
    foreign key (buyerId) references Account (id)
);

create index adId
  on `Lead` (adId);

create table Region
(
  id      int          not null
    primary key,
  name    varchar(512) not null,
  siiCode varchar(512) not null
);

create table Commune
(
  id       int auto_increment
    primary key,
  name     varchar(512) not null,
  siiCode  varchar(512) not null,
  regionId int          null,
  constraint Commune_Region_id_fk
    foreign key (regionId) references Region (id)
);

create table Ad
(
  id          int auto_increment
    primary key,
  title       varchar(512) not null,
  createdAt   datetime     null,
  description varchar(512) not null,
  updatedAt   datetime     null,
  categoryId  int          null,
  communeId   int          null,
  sellerId    int          null,
  constraint categoryId
    foreign key (categoryId) references Category (id),
  constraint communeId
    foreign key (communeId) references Commune (id),
  constraint sellerId
    foreign key (sellerId) references Account (id)
);

create table AdImage
(
  id   int auto_increment
    primary key,
  adId int          null,
  url  varchar(522) null,
  constraint images_Ad_id_fk
    foreign key (adId) references Ad (id)
);

create table Role
(
  id          int auto_increment
    primary key,
  name        varchar(512) not null,
  description varchar(512) null,
  created     datetime     null,
  modified    datetime     null
);

create table RoleMapping
(
  id            int auto_increment
    primary key,
  principalType varchar(512) null,
  principalId   varchar(255) null,
  roleId        int          null
);

create index principalId
  on RoleMapping (principalId);

create table User
(
  id                int auto_increment
    primary key,
  realm             varchar(512) null,
  username          varchar(512) null,
  password          varchar(512) not null,
  email             varchar(512) not null,
  emailVerified     tinyint(1)   null,
  verificationToken varchar(512) null
);

