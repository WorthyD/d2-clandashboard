export const MEMBERS = [];
const names = [
  'Sweeney Herring',
  'Jacquelyn Malone',
  'Wheeler Figueroa',
  'Phillips Mill',
  'Buchanan Cole',
  'Saundra Fitzpatrick',
  'Clara Campos',
  'James Barr',
  'Veronica Pitts',
  'Veronica Pitt3'
];
for (let i = 0; i < 10; i++) {
  MEMBERS.push({
    member: {
      destinyUserInfo: {
        displayName: names[i]
      },
      id: i
    }
  });
}
