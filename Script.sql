create table celda (
       id  serial not null,
        capacidad int8,
        status varchar(1),
        id_pabellon int4,
        id_guardia int8,
        primary key (id)
    ); 

    create table pabellon (
       id  serial not null,
        cant_celdas int8 not null,
        status varchar(1),
        id_vigilante int8,
        primary key (id)
    ); 

    create table recluso (
       id  serial not null,
        cargo varchar(20),
        cedula varchar(20),
        edad int8,
        sentencia int8,
        status varchar(1),
        id_celda int4,
        primary key (id)
    ); 

    create table roles (
       id  serial not null,
        name varchar(20),
        primary key (id)
    ); 

    create table user_roles (
       user_id int8 not null,
        role_id int4 not null,
        primary key (user_id, role_id)
    ); 

    create table users (
       id  bigserial not null,
        email varchar(50),
        firstname varchar(100),
        lastname varchar(100),
        password varchar(120),
        status varchar(1),
        username varchar(20),
        primary key (id)
    ); 

    alter table users
       drop constraint UKr43af9ap4edm43mmtq01oddj6;

    alter table users
       add constraint UKr43af9ap4edm43mmtq01oddj6 unique (username); 

    alter table users
       drop constraint UK6dotkott2kjsp8vw4d0m25fb7;

    alter table users
       add constraint UK6dotkott2kjsp8vw4d0m25fb7 unique (email); 

    alter table celda
       add constraint FKfsx0l0ugagjtpqog8myr624nt
       foreign key (id_pabellon)
       references pabellon;

    alter table celda
       add constraint FKpeasstlc105ua1b5gnllw8372
       foreign key (id_guardia)
       references users; 

    alter table pabellon
       add constraint FKsa102avnkpf7558iaji1566pv
       foreign key (id_vigilante)
       references users;

    alter table recluso
       add constraint FK7415pg8rr4jofsi006n7f7qv8
       foreign key (id_celda)
       references celda;

    alter table user_roles
       add constraint FKh8ciramu9cc9q3qcqiv4ue8a6
       foreign key (role_id)
       references roles; 

    alter table user_roles
       add constraint FKhfh9dx7w3ubf1co1vdev94g3f
       foreign key (user_id)
       references users


INSERT INTO roles(name) VALUES('ROLE_GUARDIA');
INSERT INTO roles(name) VALUES('ROLE_VIGILANTE');
INSERT INTO roles(name) VALUES('ROLE_ADMIN');


INSERT INTO users(username, email, password, firstname, lastname, status) VALUES('Chustin', 'oswayon9@hotmail.com', '$2a$10$dzCwuVSsYgCx.bpqyeZ4GOCagJp9nCvZZ.7rEPu/YHhObAInWa3ti', 'Josthin', 'Ayon', 'A');
INSERT INTO users(username, email, password, firstname, lastname, status) VALUES('guard', 'guard@example.com', '$2a$10$dzCwuVSsYgCx.bpqyeZ4GOCagJp9nCvZZ.7rEPu/YHhObAInWa3ti', 'Guard', 'User', 'A');
INSERT INTO users(username, email, password, firstname, lastname, status) VALUES('watch', 'watch@example.com', '$2a$10$dzCwuVSsYgCx.bpqyeZ4GOCagJp9nCvZZ.7rEPu/YHhObAInWa3ti', 'Watch', 'User', 'A');


INSERT INTO user_roles(user_id, role_id) VALUES(4,6);
INSERT INTO user_roles(user_id, role_id) VALUES(5,4);
INSERT INTO user_roles(user_id, role_id) VALUES(6,5);


INSERT INTO pabellon(status, cant_celdas, id_vigilante) VALUES('A', 40, 6);
INSERT INTO pabellon(status, cant_celdas, id_vigilante) VALUES('A', 40, 6);
INSERT INTO pabellon(status, cant_celdas, id_vigilante) VALUES('A', 40, 6);

INSERT INTO celda(status, capacidad, id_pabellon, id_guardia) VALUES('A', 10, 1, 5);
INSERT INTO celda(status, capacidad, id_pabellon, id_guardia) VALUES('A', 10, 2, 5);
INSERT INTO celda(status, capacidad, id_pabellon, id_guardia) VALUES('A', 10, 3, 5);