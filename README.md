# Cultural Activities Management Portal

### A platform for organizing and participating in local cultural activities:

- Users can register and create profiles.\
- Administrators can publish events (with categories such as music, art, sports).\
- Users can register for events and receive notifications.\
- Implement a dashboard for administrators where they manage events and attendees.\

### Modelo de datos en SQL

```
TUser:
    id: INT PK NN AI;
    name: VARCHAR(15) NN;
    surname: VARCHAR(20) NN;
    user_name: VARCHAR(20) NN;
    age: INT;
    last_event_attendance: DATE;
    email: VARCHAR(45) NN UQ;
    password: VARCHAR(25) NN;
```

<!-- ### EndPoints

#### User:

- Post - ‘/register’ → Crea un usuario nuevo
- Post - ‘/login’ → Se fija que exista el usuario en la base de datos y le devuelve un token.
- Patch - ‘/update’ → Hay que estar logado y autenticado. Agregará a mis viajes el lugar elegido. -->
