CREATE TABLE Users (
    userID SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(50) NOT NULL UNIQUE,
    password TEXT NOT NULL,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL
);

CREATE TABLE Task (
    taskID SERIAL PRIMARY KEY,
    taskName VARCHAR(100) NOT NULL,
    taskDescription VARCHAR(100) NOT NULL,
    taskStatus VARCHAR(100),
    taskPriority VARCHAR(100),
    taskDueDate VARCHAR(100),
    taskCreatedDate VARCHAR(100) NOT NULL
);

CREATE TABLE Organization (
    organizationID SERIAL PRIMARY KEY,
    orgName VARCHAR(100) NOT NULL
);

CREATE TABLE Roles (
    roleID SERIAL PRIMARY KEY,
    roleName VARCHAR(50) NOT NULL,
    roleManager BOOLEAN
);

CREATE TABLE TaskAssignment (
    taskAssignmentID SERIAL PRIMARY KEY,
    userID INT,
    taskID INT,
    FOREIGN KEY (userID) REFERENCES Users(userID),
    FOREIGN KEY (taskID) REFERENCES Task(taskID)
);

CREATE TABLE UserOrganization (
    userOrganizationID SERIAL PRIMARY KEY,
    userID INT,
    organizationID INT,
    FOREIGN KEY (userID) REFERENCES Users(userID),
    FOREIGN KEY (organizationID) REFERENCES Organization(organizationID)
);

CREATE TABLE UserRoles (
    userRolesID SERIAL PRIMARY KEY,
    userID INT,
    roleID INT,
    organizationID INT,
    FOREIGN KEY (userID) REFERENCES Users(userID),
    FOREIGN KEY (roleID) REFERENCES Roles(roleID),
    FOREIGN KEY (organizationID) REFERENCES Organization(organizationID)
);
