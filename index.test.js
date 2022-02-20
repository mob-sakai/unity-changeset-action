const { getUnityChangeset } = require('unity-changeset');

test('get changeset (exist)', async () => {
  expect(await getUnityChangeset('2021.2.12f1')).toHaveProperty('changeset', '48b1aa000234');
});

test('get changeset (not exist)', async () => {
  expect(await getUnityChangeset('2021.2.12f2')).toBeUndefined();
});
