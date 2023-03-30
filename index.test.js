const { getUnityChangeset } = require('unity-changeset');

test('get changeset (exist)', async () => {
  expect(await getUnityChangeset('2021.2.12f1')).toHaveProperty('changeset', '48b1aa000234');
}, 10000);

test('get changeset (exist, alpha)', async () => {
  expect(await getUnityChangeset('2022.1.0a9')).toHaveProperty('changeset', '5a1ba9fbc92d');
}, 10000);

test('get changeset (exist, beta)', async () => {
  expect(await getUnityChangeset('2022.1.0b9')).toHaveProperty('changeset', 'a43aced8177f');
}, 10000);

test('get changeset (not exist)', async () => {
  expect(await getUnityChangeset('2021.2.12f2')).toBeUndefined();
}, 10000);