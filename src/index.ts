require('dotenv').config();

import * as env from 'env-var';
import {generateFauxRepoActivity} from './lib';

(async () => {
  if (env.get('GITHUB_HACTION_ENABLED').asBool()) {
    await generateFauxRepoActivity();
  } else {
    console.log("They'll do nuffink");
  }
})();
