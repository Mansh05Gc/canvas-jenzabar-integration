import fetch from 'node-fetch';
import getUsers from './getUsersFromCanvas';

jest.mock('node-fetch');

const mockDataFromApi = [
  {
    id: 1,
    name: 'User Lastname',
    sortable_name: 'Lastname, User',
    short_name: 'User',
    sis_user_id: null,
    email: 'test@test.com',
    login_id: 'test-user',
  },
  {
    id: 2,
    name: 'Test WithSISId',
    sortable_name: 'WithSISId, Test',
    short_name: 'Test',
    sis_user_id: '12345',
    login_id: '12345',
    email: '123@compuserve.net',
  },
];

describe('getUser', () => {
  beforeEach(() => {
    fetch.mockResolvedValue({
      json: () => mockDataFromApi,
      headers: {
        get: () => undefined,
      },
    });
  });

  it('should return user data ignoring users with null sis_user_id', async () => {
    const users = await getUsers();
    const expected = mockDataFromApi.filter(u => !!u.sis_user_id);
    expect(users).toEqual(expected);
  });
});
