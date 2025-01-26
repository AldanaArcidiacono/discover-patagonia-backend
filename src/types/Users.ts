export interface User {
    id: number; // INT NOT NULL AUTO_INCREMENT
    name: string; // VARCHAR(15) NOT NULL
    surname: string; // VARCHAR(20) NOT NULL
    user_name: string; // VARCHAR(20) NOT NULL
    age?: number; // INT NULL
    last_event_attendance?: Date; // DATE NULL
    email: string; // VARCHAR(45) NOT NULL & unique
}

export interface PartialUser {
    id?: number;
    name: string;
    surname: string;
    user_name: string;
    age?: number;
    last_event_attendance?: Date;
    email: string;
}
