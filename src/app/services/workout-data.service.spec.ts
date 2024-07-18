import { TestBed } from '@angular/core/testing';
import { User } from '../interfaces/user';
import { WorkoutDataService } from './workout-data.service';

describe('WorkoutDataService', () => {
  let service: WorkoutDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutDataService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get user data from local storage if available', () => {
    const mockUserData: User[] = [
      {
        id: 1,
        name: 'John Doe',
        workouts: [
          { type: 'Running', minutes: 30 },
          { type: 'Cycling', minutes: 45 }
        ]
      }
    ];
    localStorage.setItem('user', JSON.stringify(mockUserData));
    service.getUserWorkoutData();
    expect(service.userData).toEqual(mockUserData);
  });

  it('should set user data to local storage', () => {
    const mockUserData: User[] = [
      {
        id: 1,
        name: 'John Doe',
        workouts: [
          { type: 'Running', minutes: 30 },
          { type: 'Cycling', minutes: 45 }
        ]
      }
    ];
    service.setUserWorkoutData(mockUserData);
    const storedUserData = localStorage.getItem('user');
    expect(storedUserData).toEqual(JSON.stringify(mockUserData));
  });

  
});
