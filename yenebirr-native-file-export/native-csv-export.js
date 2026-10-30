import { Capacitor } from '@capacitor/core';
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';

function downloadInBrowser(csv, filename) {
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export async function exportCsvFile(csv, filename = 'yenebirr-transactions.csv') {
  if (!Capacitor.isNativePlatform()) {
    downloadInBrowser(csv, filename);
    return { mode: 'browser', filename };
  }

  const saved = await Filesystem.writeFile({
    path: filename,
    data: csv,
    directory: Directory.Cache,
    encoding: Encoding.UTF8,
    recursive: true,
  });

  try {
    await Share.share({
      title: 'Yene Birr transactions',
      text: 'Yene Birr CSV export',
      url: saved.uri,
      dialogTitle: 'Save or share CSV export',
    });
  } catch (shareError) {
    // The file is already saved in the app cache even if the share sheet is closed.
    console.warn('CSV share sheet was closed or unavailable', shareError);
  }

  return { mode: 'native', filename, uri: saved.uri };
}
