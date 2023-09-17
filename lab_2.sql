CREATE TABLE client(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255)
);

CREATE TABLE service(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(255),
    price INTEGER
);

CREATE TABLE application(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    client_id SERIAL,
    FOREIGN KEY (client_id) REFERENCES client (id),
    service_id SERIAL,
    FOREIGN KEY (service_id) REFERENCES service (id)
);