import getStudentEnrollmentFromJex from './getStudentEnrollmentFromJex';

const mockData = [
  {
    id: 1,
    username: 'user1',
    firstName: 'User',
    preferredName: null,
    lastName: 'One',
    mcadEmail: 'user1@mcad.edu',
    courseCode: 'GWD  6610 20',
    parentCourseCode: 'GWD  6610 20',
    term: 'FA',
    year: '2018',
  },
  {
    id: 1,
    username: 'user1',
    firstName: 'User',
    preferredName: null,
    lastName: 'One',
    mcadEmail: 'user1@mcad.edu',
    courseCode: 'AH   1000 01',
    parentCourseCode: 'AH   1000 01',
    term: 'FA',
    year: '2018',
  },
  {
    id: 2,
    username: 'user2',
    firstName: 'User',
    preferredName: null,
    lastName: 'Two',
    mcadEmail: 'user2@mcad.edu',
    courseCode: 'HS  1000 01',
    parentCourseCode: 'AH   1000 01',
    term: 'FA',
    year: '2028',
  },
];

const jexService = {
  query: jest.fn().mockResolvedValue(mockData),
};

describe('getEnrollmentFromJex', () => {
  let getStudentEnrollment;

  beforeEach(() => {
    getStudentEnrollment = getStudentEnrollmentFromJex(jexService);
  });

  it('returns a function given a jexService', () => {
    expect(typeof getStudentEnrollment).toBe('function');
  });

  it('gets data', async () => {
    const enrollments = await getStudentEnrollment();
    expect(enrollments).toEqual(mockData);
  });
});
