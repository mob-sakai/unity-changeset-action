const { getUnityChangeset } = require('unity-changeset');

test('get changeset (exist)', async () => {
  await expect(getUnityChangeset('2021.2.12f1')).resolves.toHaveProperty('changeset', '48b1aa000234');
}, 10000);

test('get changeset (exist, alpha)', async () => {
  await expect(getUnityChangeset('2022.1.0a9')).resolves.toHaveProperty('changeset', '5a1ba9fbc92d');
}, 10000);

test('get changeset (exist, beta)', async () => {
  await expect(getUnityChangeset('2022.1.0b9')).resolves.toHaveProperty('changeset', 'a43aced8177f');
}, 10000);

test('get changeset (not exist)', async () => {
  await expect(getUnityChangeset('2021.2.12f2')).rejects.toThrowError("The given version '2021.2.12f2' was not found.");
}, 10000);