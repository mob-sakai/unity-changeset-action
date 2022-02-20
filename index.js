const core = require('@actions/core');
const { getUnityChangeset } = require('unity-changeset');

// most @actions toolkit packages have async methods
async function run() {
  try {
    const unityVersion = core.getInput('unityVersion');
    if (!unityVersion)
      throw Error(`input 'unityVersion' is empty.`);

    const changeset = await getUnityChangeset(unityVersion);
    if (!changeset)
      throw Error(`the version '${unityVersion}' is not found.`);

    core.setOutput('changeset', changeset.changeset);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
