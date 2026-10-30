#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const repo = process.cwd();
const packagePath = path.join(repo, 'package.json');
const mainPath = path.join(repo, 'src', 'main.js');
const moduleSource = path.join(__dirname, 'native-csv-export.js');

if (!fs.existsSync(packagePath) || !fs.existsSync(mainPath)) {
  console.error('Run this script from the existing app repository root. Expected package.json and src/main.js.');
  process.exit(1);
}

const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
pkg.dependencies ||= {};
pkg.dependencies['@capacitor/filesystem'] ||= '^6.0.2';
pkg.dependencies['@capacitor/share'] ||= '^6.0.2';
fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2) + '\n');

const destinationModule = path.join(repo, 'src', 'native-csv-export.js');
fs.copyFileSync(moduleSource, destinationModule);

let main = fs.readFileSync(mainPath, 'utf8');
const importLine = "import { exportCsvFile } from './native-csv-export.js';";
if (!main.includes(importLine)) {
  const styleImport = "import './style.css';";
  if (!main.includes(styleImport)) throw new Error('Could not find the style import in src/main.js.');
  main = main.replace(styleImport, styleImport + '\n' + importLine);
}

const start = main.indexOf('async function exportCSV(){');
const end = main.indexOf('\nfunction parseCSV(', start);
if (start < 0 || end < 0) throw new Error('Could not locate the existing exportCSV function. No files were changed after this point.');

const replacement = `async function exportCSV(){
  const rows = [['ID','Date (Ethiopian)','Type','Category','Account','To Account','Amount','Note']];
  [...state.transactions].sort((a,b)=>ethiopianToJDN(a.date.y,a.date.m,a.date.d)-ethiopianToJDN(b.date.y,b.date.m,b.date.d))
    .forEach(t=>{ if(t.type==='transfer'){
      rows.push([t.id,fmtEthDate(t.date), 'transfer', '—', accById(t.accountId).name, accById(t.toAccountId).name, t.amount, t.note||'']);
    } else {
      rows.push([t.id,fmtEthDate(t.date), t.type, t.kind||catById(t.categoryId).name, accById(t.accountId).name, '', t.amount, t.note||'']);
    } });
  const csv = rows.map(r=>r.map(csvEscape).join(',')).join('\\r\\n');
  try{
    const result = await exportCsvFile(csv, 'yenebirr-transactions.csv');
    toast(result.mode === 'native' ? 'CSV ready to save or share' : 'CSV exported');
  }catch(e){
    console.error('CSV export failed', e);
    toast('CSV export failed — please try again');
  }
}`;
main = main.slice(0, start) + replacement + main.slice(end);
fs.writeFileSync(mainPath, main);

console.log('Native CSV export integration applied. Installing Capacitor plugins...');
execFileSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['install'], { cwd: repo, stdio: 'inherit' });
console.log('Done. Run npm run build, then npx cap sync android before building the APK.');
