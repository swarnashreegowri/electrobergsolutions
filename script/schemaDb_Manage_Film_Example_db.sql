--
-- Database: `Manage_Film_Example_db`
--
CREATE TABLE users (    
    "id" NUMBER(38,0),
    "username" VARCHAR2(30 BYTE), 
    "password" VARCHAR2(32 BYTE), 
    "mail" VARCHAR2(32 BYTE), 
    "name" VARCHAR2(32 BYTE), 
    "surname" VARCHAR2(32 BYTE)
);

CREATE UNIQUE INDEX "USERS_PK" ON users ("id") ;
ALTER TABLE users MODIFY ("id" NOT NULL ENABLE);
ALTER TABLE users ADD CONSTRAINT "USERS_PK" PRIMARY KEY ("id") ENABLE;

ALTER TABLE users MODIFY MODIFY ("password" varchar(128));

INSERT INTO users ("id", "username", "password", "mail", "name", "surname") VALUES (1, 'admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', '', '', '');

CREATE TABLE roles (	
    "role" VARCHAR2(30 BYTE), 
    "_user" NUMBER(38, 0), 
    "id" NUMBER(38,0)
);

CREATE UNIQUE INDEX "ROLES_PK" ON roles ("id");
ALTER TABLE roles ADD CONSTRAINT "ROLES_PK" PRIMARY KEY ("id");
ALTER TABLE roles MODIFY ("id" NOT NULL ENABLE);
ALTER TABLE roles ADD CONSTRAINT "ROLES_FK1" FOREIGN KEY ("_user")
	  REFERENCES users ("id") ENABLE;

INSERT INTO roles ("role", "_user", "id") VALUES ('ADMIN', '1', 1);


-- ENTITIES

--
-- Struttura della tabella `Actor`
--

    CREATE TABLE Actor (	
        "birthDate" date,
        "name" varchar(130),
        "surname" varchar(130),
        
        -- RELAZIONI
        
        "id" NUMBER(38,0)
    );
    
    
    CREATE UNIQUE INDEX "Actor_PK" ON Actor ("id");
    ALTER TABLE Actor ADD CONSTRAINT "Actor_PK" PRIMARY KEY ("id");
    ALTER TABLE Actor MODIFY ("id" NOT NULL ENABLE);

--
-- Struttura della tabella `Film`
--

    CREATE TABLE Film (	
        "genre" varchar(130),
        "title" varchar(130),
        "year" numeric,
        
        -- RELAZIONI
        "filmMaker" NUMBER(38, 0), 
        
        "id" NUMBER(38,0)
    );
    
    
    CREATE UNIQUE INDEX "Film_PK" ON Film ("id");
    ALTER TABLE Film ADD CONSTRAINT "Film_PK" PRIMARY KEY ("id");
    ALTER TABLE Film MODIFY ("id" NOT NULL ENABLE);

--
-- Struttura della tabella `FilmMaker`
--

    CREATE TABLE FilmMaker (	
        "name" varchar(130),
        "surname" varchar(130),
        
        -- RELAZIONI
        
        "id" NUMBER(38,0)
    );
    
    
    CREATE UNIQUE INDEX "FilmMaker_PK" ON FilmMaker ("id");
    ALTER TABLE FilmMaker ADD CONSTRAINT "FilmMaker_PK" PRIMARY KEY ("id");
    ALTER TABLE FilmMaker MODIFY ("id" NOT NULL ENABLE);

--
-- Struttura della tabella `User`
--

    CREATE TABLE User (	
        "mail" varchar(130),
        "name" varchar(130),
        "password" varchar(130),
        "roles" varchar(130),
        "surname" varchar(130),
        "username" varchar(130),
        
        -- RELAZIONI
        
        "id" NUMBER(38,0)
    );
    
    
    CREATE UNIQUE INDEX "User_PK" ON User ("id");
    ALTER TABLE User ADD CONSTRAINT "User_PK" PRIMARY KEY ("id");
    ALTER TABLE User MODIFY ("id" NOT NULL ENABLE);

--
-- Struttura della tabella `electrobergsolutions`
--

    CREATE TABLE electrobergsolutions (	
        
        -- RELAZIONI
        
        "id" NUMBER(38,0)
    );
    
    
    CREATE UNIQUE INDEX "electrobergsolutions_PK" ON electrobergsolutions ("id");
    ALTER TABLE electrobergsolutions ADD CONSTRAINT "electrobergsolutions_PK" PRIMARY KEY ("id");
    ALTER TABLE electrobergsolutions MODIFY ("id" NOT NULL ENABLE);


-- RELATIONS

    -- RELATIONS TABLE Actor
    
        
        
        
        



    -- RELATIONS TABLE Film
    
        
        -- foreign key filmMaker
        ALTER TABLE Film ADD CONSTRAINT "Film_filmMaker" FOREIGN KEY ("filmMaker")
        	  REFERENCES FilmMaker ("id") ON DELETE SET NULL ENABLE;
        
        
        
        
        -- relation m:m cast Film - Actor
        CREATE TABLE Film_cast (
            "id" NUMBER(38,0),
            "id_Film" NUMBER(38, 0),	
            "id_Actor" NUMBER(38, 0)
        );
        
        
        ALTER TABLE Film_cast ADD CONSTRAINT "reference_Film_cast" FOREIGN KEY ("id_Film")
        	  REFERENCES Film ("id") ON DELETE CASCADE ENABLE;
        	  
        	  
        ALTER TABLE Film_cast ADD CONSTRAINT "reference_Actor_cast" FOREIGN KEY ("id_Actor")
        	  REFERENCES Actor ("id") ON DELETE CASCADE ENABLE;
        



    -- RELATIONS TABLE FilmMaker
    
        
        
        
        



    -- RELATIONS TABLE User
    
        
        
        
        



    -- RELATIONS TABLE electrobergsolutions
    
        
        
        
        



