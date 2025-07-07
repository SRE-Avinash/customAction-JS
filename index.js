import * as core from '@actions/core';

const name = core.getInput('name');
const output_value = `Hello ${name}`;
core.setOutput('greeting', 'output_value');


try {
  // Do stuff
}
catch (err) {
  // setFailed logs the message and sets a failing exit code
  core.setFailed(`Action failed with error ${err}`);
}