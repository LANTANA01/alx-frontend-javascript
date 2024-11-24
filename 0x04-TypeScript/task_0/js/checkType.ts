import { exec } from 'child_process';

exec('tsc', (error, stdout, stderr) => {
  if (stderr) {
    console.error('TypeScript errors found:\n', stderr);
  } else {
    console.log('No type errors found');
  }
});
