import { MemberProfile } from 'bungie-models';
import { SortByClassPipe } from './sort-by-class.pipe';
const hashes = ['1', '2', '3'];

const member = {
  characters: {
    data: {
      '1': {
        classType: 2
      },
      '2': {
        classType: 1
      },
      '3': {
        classType: 0
      }
    }
  }
} as MemberProfile;

fdescribe('SortByClassPipe', () => {
  it('create an instance', () => {
    const pipe = new SortByClassPipe();
    expect(pipe).toBeTruthy();
  });

  it('should sort by class type', () => {
    const pipe = new SortByClassPipe();
    const result = pipe.transform(hashes, member);
    expect(result).toEqual(['3', '2', '1']);
  });

});
