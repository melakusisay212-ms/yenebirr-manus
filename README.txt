GITHUB WEB UPLOAD INSTRUCTIONS

Upload the CONTENTS of this folder to the root of the existing GitHub repository.
Do not upload the outer github-web-upload folder itself.

The upload must create these paths:

.github/workflows/build-android-with-native-csv.yml
capacitor-native-file-export/apply.cjs
capacitor-native-file-export/native-csv-export.js
capacitor-native-file-export/README.md

On GitHub:
1. Open the existing repository.
2. Click Add file -> Upload files.
3. Drag the contents of this folder into the upload area, including the .github folder.
4. Commit directly to main/master or create a pull request.
5. Open the Actions tab.
6. Open “Build Android APK with native CSV export”.
7. Download the APK from the workflow artifact when it finishes.

The workflow applies the native export integration only in the GitHub Actions build workspace. It does not delete app data, change the app ID, or change the storage key.
