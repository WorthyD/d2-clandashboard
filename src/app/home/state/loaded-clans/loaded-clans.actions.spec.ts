import { addClan } from './loaded-clans.actions';
describe('Loaded Clans Actions', () => {
  it('should create an Add Clan Action', () => {
    const clan = { id: 123, name: 'Clan' };
    const action = addClan({ clan: clan});
    expect(action.type).toEqual('[Loaded Clans] - Add Clan');
    expect(action.clan).toEqual(clan);
  });
});
