import { app } from "../app";
import { setup } from "./setup"

import supertest from "supertest";

setup();

// Testes de caminho feliz
describe('UserController E2E Tests', () => {
  let userId: string;

  it('/POST - Should create a new user', async () => {
    const createUserRequest = {
      "firstName": "Phillip",
      "lastName": "Smith",
      "email": "email@example.com",
      "documentNumber": "12345678909",
      "dateOfBirth": "10-03-2001",
      "address": [
        {
          "street": "a",
          "city": "a",
          "state": "a",
          "zipCode": "06162222"
        }
      ],
      "phoneNumbers": [
        {
          "number": "11111111111",
          "type": "Mobile"
        },
        {
          "number": "1111111111",
          "type": "Home"
        }
      ]
    };

    const res = await supertest(app)
      .post('/api/users')
      .send(createUserRequest);

    expect(res.status).toBe(201);
    expect(res.body.message).toBe("User created successfully");
    expect(res.body.data._id).toBeDefined();

    userId = res.body.data._id;
  });

  it('/GET - Should retrieve one user by ID', async () => {
    const newUserRequest = {
      "firstName": "Tobias",
      "lastName": "Felix",
      "email": "email@x.com",
      "documentNumber": "12345678909",
      "dateOfBirth": "10-03-1999",
      "address": [
        {
          "street": "a",
          "city": "a",
          "state": "a",
          "zipCode": "06162222"
        }
      ],
      "phoneNumbers": [
        {
          "number": "11111111111",
          "type": "Mobile"
        },
        {
          "number": "1111111111",
          "type": "Home"
        }
      ]
    };

    await supertest(app)
      .post('/api/users')
      .send(newUserRequest);

    const res = await supertest(app)
      .get(`api/users/${userId}`);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe("User retrieved successfully");
    expect(res.body.data._id).toBe(userId);
    expect(res.body.data.firstName).toBe("Phillip");
  });

  it('/GET - Should retrieve all users', async () => {
    const res = await supertest(app)
      .get('/api/users');

    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Users retrieved successfully");
    expect(res.body.data).toHaveLength(2);
  });

  it('/PUT - Should update a user', async () => {
    const updateUserRequest = {
      "firstName": "Malcolm",
      "lastName": "Graves",
    }

    const res = await supertest(app)
      .put(`api/users/${userId}`)
      .send(updateUserRequest);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe("User updated successfully");
    expect(res.body.data.firstName).toBe("Malcolm");
  });

  it('/DELETE - Should delete a user', async () => {
    const res = await supertest(app)
      .delete(`api/users/${userId}`);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe("User deleted successfully");

    const getRes = await supertest(app)
      .get(`api/users/${userId}`);

    expect(getRes.status).toBe(404);
    expect(getRes.body.message).toBe("User not found");
  });
})