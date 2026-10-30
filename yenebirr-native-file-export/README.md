# Capacitor native CSV export drop-in

This folder upgrades the existing Yene Birr CSV export from a browser-only Blob download to Capacitor native file handling.

## Apply it to the existing repository

Copy this entire folder into the existing repository, then run these commands from the repository root:

```bash
node capacitor-native-file-export/apply.cjs
npm run build
npx cap sync android
```

Then commit the changed files and push them to GitHub. The existing GitHub Actions workflow will install the new Capacitor plugins and build the APK.

## Files changed by the installer

The installer only:

- Adds `@capacitor/filesystem` and `@capacitor/share` to `package.json` and updates the lockfile.
- Copies `native-csv-export.js` into `src/`.
- Updates the existing `exportCSV()` function in `src/main.js`.
- Does not replace the app, change the app ID, change the storage key, or touch transaction data.

The script is safe to run again; it does not duplicate the import or dependency entries.

## Android behavior after installation

On Android, the app writes `yenebirr-transactions.csv` to the Capacitor cache and opens the native Android share sheet. Choose Files, Drive, email, or another destination from that sheet. If the share sheet is closed, the app reports that the CSV is ready to save/share rather than claiming it was permanently downloaded.

When opened in Chrome, the same module keeps the browser download behavior.

## Important limitation

Uploading a folder by itself cannot modify code that is already in the repository. The one command above is required once so the folder can apply the integration to the existing app. After that, only the changed files need to be committed; the whole project does not need to be re-uploaded manually.
