import './style.css';

/* ===================== ICON SYSTEM (no emoji) ===================== */
const ICONS = {
  home:'<path d="M4 11.3 12 4.3l8 7"/><path d="M6.2 10v8.4a1 1 0 0 0 1 1h3v-6h3.6v6h3a1 1 0 0 0 1-1V10"/>',
  calendar:'<rect x="4" y="5.3" width="16" height="15" rx="3"/><path d="M8 3.3v4.2M16 3.3v4.2M4.3 9.8h15.4"/>',
  ledger:'<rect x="5.2" y="3.8" width="13.6" height="16.4" rx="2.4"/><path d="M8.3 8.3h7.4M8.3 11.6h7.4M8.3 14.9h4.6"/>',
  chart:'<path d="M5 19V11M11 19V5.5M17 19v-8"/>',
  settings:'<path d="M4 7h16M4 12h16M4 17h16"/><circle cx="9" cy="7" r="1.8" fill="currentColor" stroke="none"/><circle cx="15" cy="12" r="1.8" fill="currentColor" stroke="none"/><circle cx="11" cy="17" r="1.8" fill="currentColor" stroke="none"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  close:'<path d="M6.3 6.3l11.4 11.4M17.7 6.3 6.3 17.7"/>',
  chevL:'<path d="M15 5.5l-6.5 6.5 6.5 6.5"/>',
  chevR:'<path d="M9 5.5l6.5 6.5-6.5 6.5"/>',
  download:'<path d="M12 4v11.5"/><path d="M7.3 11.6 12 16.3l4.7-4.7"/><path d="M5 19.5h14"/>',
  trash:'<path d="M5 7.4h14"/><path d="M9.4 7.4V5.7a1 1 0 0 1 1-1h3.2a1 1 0 0 1 1 1v1.7"/><path d="M6.8 7.4l.8 11.4a1.4 1.4 0 0 0 1.4 1.3h6a1.4 1.4 0 0 0 1.4-1.3l.8-11.4"/>',
  refresh:'<path d="M5 12a7 7 0 0 1 11.7-5.2M19 12a7 7 0 0 1-11.7 5.2"/><path d="M16.2 4.6v3.2h-3.2M7.8 19.4v-3.2H11"/>',
  export:'<path d="M12 4v11.5"/><path d="M7.3 11.6 12 16.3l4.7-4.7"/><path d="M5 19.5h14"/>',
  arrowUp:'<path d="M12 19V6M6.5 11.5 12 6l5.5 5.5"/>',
  arrowDown:'<path d="M12 5v13M17.5 12.5 12 18l-5.5-5.5"/>',
  dot:'<circle cx="12" cy="12" r="4"/>',
  eth:'<path d="M12 4.5v15M4.5 12h15" /><path d="M7.5 7.5l9 9M16.5 7.5l-9 9"/>',
  wallet:'<path d="M4.3 7.8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6.3a2 2 0 0 1-2-2z"/><path d="M15.6 12.3h3.2"/>',
  bank:'<path d="M4 10.3 12 5l8 5.3"/><path d="M5.6 10.3V19M9.4 10.3V19M14.6 10.3V19M18.4 10.3V19"/><path d="M4 19h16"/>',
  cash:'<rect x="3.3" y="7" width="17.4" height="11" rx="2.2"/><circle cx="12" cy="12.5" r="2.4"/>',
  mobile:'<rect x="7.6" y="3.3" width="8.8" height="17.4" rx="2"/><path d="M10.6 17.3h2.8"/>',
  card:'<rect x="3.3" y="6" width="17.4" height="12.5" rx="2.4"/><path d="M3.3 10.2h17.4"/>',
  piggy:'<path d="M5.6 12.8a5.6 4.7 0 0 1 5.9-4.7c2.7.1 4.9 1.8 5.4 4l1.7.15c.4 0 .55.5.25.8l-1.2 1.15v1.6c0 .75-.6 1.35-1.35 1.35h-1v1.4a.8.8 0 0 1-.8.8H13a.8.8 0 0 1-.8-.8v-.5H9.4v.5a.8.8 0 0 1-.8.8H7.2a.8.8 0 0 1-.8-.8v-1.2a3.7 3.7 0 0 1-2.1-3.2c0-.4.05-.65.15-.95"/><circle cx="14.3" cy="11" r=".25" fill="currentColor" stroke="none"/>',
  coin:'<circle cx="12" cy="12" r="7.6"/><path d="M9.5 9.7c.3-1 1.3-1.6 2.5-1.6 1.5 0 2.6.85 2.6 1.95 0 2.35-3.7 1.85-3.7 4.05 0 1.1 1 1.9 2.4 1.9 1.2 0 2.15-.6 2.45-1.6M12 6.6v1.1M12 16.3v1.1"/>',
  food:'<circle cx="12" cy="12" r="7.4"/><path d="M9.1 8v8M8.2 8v3a1 1 0 0 0 1.8 0V8M15.4 8c-1 0-1.7.9-1.7 2.2 0 1 .55 1.8 1.2 2.1V16"/>',
  transport:'<rect x="4.2" y="6.2" width="15.6" height="9.6" rx="2.6"/><path d="M4.2 10.8h15.6"/><circle cx="8" cy="17.6" r="1.3"/><circle cx="16" cy="17.6" r="1.3"/>',
  coffee:'<path d="M5.6 8.6h10v5.8a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4z"/><path d="M15.6 9.6H17a2.2 2.2 0 1 1 0 4.4h-1.1"/><path d="M8.1 5.3c0 .8.9 1-.85 2.2M11.6 5.3c0 .8.9 1-.85 2.2"/>',
  shopping:'<path d="M6.6 9 7.8 5.4A2 2 0 0 1 9.7 4h4.6a2 2 0 0 1 1.9 1.4L17.4 9"/><rect x="4.8" y="9" width="14.4" height="10.7" rx="2.2"/>',
  bills:'<path d="M13.2 3.6 6.7 13.2h4.6L10.8 20.4 17.3 11h-4.6z"/>',
  housing:'<path d="M4.2 11.8 12 5.2l7.8 6.6"/><rect x="9.1" y="12.7" width="5.8" height="6.7" rx="1"/><circle cx="12" cy="16" r=".2" fill="currentColor" stroke="none"/>',
  health:'<path d="M12 19c-4.3-2.6-7.3-5.2-7.3-8.4C4.7 8 6.6 6 9 6c1.25 0 2.4.6 3 1.6C12.6 6.6 13.75 6 15 6c2.4 0 4.3 2 4.3 4.6 0 3.2-3 5.8-7.3 8.4z"/>',
  education:'<path d="M12 5.2 3.5 9l8.5 3.8 8.5-3.8z"/><path d="M7.4 11v4.6c0 1.1 2.1 2 4.6 2s4.6-.9 4.6-2V11"/><path d="M20.2 9.2v4.2"/>',
  entertainment:'<circle cx="12" cy="12" r="7.4"/><path d="M10.3 9.2 15 12l-4.7 2.8z"/>',
  family:'<circle cx="9" cy="8.4" r="2.3"/><circle cx="15.6" cy="9.5" r="2"/><path d="M4.4 19c.4-3 2.2-4.7 4.6-4.7s4.2 1.7 4.6 4.7"/><path d="M13.6 14.5c1.9.25 3.4 1.85 3.8 4.5"/>',
  other:'<path d="M4 8.2 12 4l8 4.2-8 4.2-8-4.2z"/><path d="M4 8.2v7.4L12 19.7l8-4.1V8.2"/><path d="M12 12.5v7.2"/>',
  salary:'<rect x="3.6" y="8" width="16.8" height="10.6" rx="2.2"/><path d="M8.4 8V6.2A1.3 1.3 0 0 1 9.7 5h4.6a1.3 1.3 0 0 1 1.3 1.2V8"/><path d="M3.6 12.6h16.8"/>',
  business:'<path d="M4 16.6 9.6 11l3.3 3.3 6.8-6.8"/><path d="M15.1 7.1h4.8v4.8"/>',
  gift:'<rect x="4.4" y="10" width="15.2" height="9.7" rx="1.6"/><path d="M4.4 13.6h15.2M12 10v9.7"/><path d="M9 10c-1.8-2-1-4.5 1-4.8 1.5-.2 2 2.1 2 4.8M15 10c1.8-2 1-4.5-1-4.8-1.5-.2-2 2.1-2 4.8"/>',
  freelance:'<path d="M7.2 4h7l3 3v13a1 1 0 0 1-1 1H7.2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"/><path d="M14.2 4v3h3"/><path d="M9 12.3h6M9 15.4h6M9 9.2h3"/>'
};
function icon(name, size){
  size = size||20;
  const body = ICONS[name] || ICONS.other;
  return '<svg width="'+size+'" height="'+size+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+body+'</svg>';
}
function hexA(hex,a){
  const h = hex.replace('#','');
  const r = parseInt(h.substring(0,2),16), g = parseInt(h.substring(2,4),16), b = parseInt(h.substring(4,6),16);
  return 'rgba('+r+','+g+','+b+','+a+')';
}
function catTile(cat, size){
  size = size||42;
  const rs = Math.round(size*0.31);
  return '<div class="cat-tile" style="width:'+size+'px;height:'+size+'px;border-radius:'+rs+'px;background:'+hexA(cat.color,0.15)+';color:'+cat.color+'">'+icon(cat.icon, Math.round(size*0.48))+'</div>';
}
function fillIconBtn(id, name, size){ const el=document.getElementById(id); if(el) el.innerHTML = icon(name, size||18); }

const COLOR_PALETTE = ['#C9971A','#4C7CE0','#8B5E34','#C15FC1','#E2703A','#1F6E43','#B0432F','#5CB3B3','#8B2E3C','#8A6BD1','#6E637A','#1F6E43','#4C7CE0','#C15FC1','#5CB3B3','#E0B93D'];
const ICON_KEYS = ['food','transport','coffee','shopping','bills','housing','health','education','family','entertainment','other','salary','business','gift','freelance','coin','wallet','bank','cash','mobile','card','piggy'];
const ACCOUNT_ICON_KEYS = ['bank','cash','mobile','card','piggy','coin'];

/* ===================== ETHIOPIAN CALENDAR MATH ===================== */
const JD_EPOCH = 1723856;
function gregorianToJDN(y,m,d){
  const a = Math.floor((14-m)/12), yy = y+4800-a, mm = m+12*a-3;
  return d + Math.floor((153*mm+2)/5) + 365*yy + Math.floor(yy/4) - Math.floor(yy/100) + Math.floor(yy/400) - 32045;
}
function jdnToGregorian(jdn){
  let a=jdn+32044, b=Math.floor((4*a+3)/146097), c=a-Math.floor((146097*b)/4);
  let d=Math.floor((4*c+3)/1461), e=c-Math.floor((1461*d)/4), m=Math.floor((5*e+2)/153);
  const day=e-Math.floor((153*m+2)/5)+1, month=m+3-12*Math.floor(m/10), year=100*b+d-4800+Math.floor(m/10);
  return {y:year,m:month,d:day};
}
function jdnToEthiopian(jdn){
  const r=(jdn-JD_EPOCH)%1461;
  const n=(r%365)+365*Math.floor(r/1460);
  const year=4*Math.floor((jdn-JD_EPOCH)/1461)+Math.floor(r/365)-Math.floor(r/1460);
  const month=Math.floor(n/30)+1, day=(n%30)+1;
  return {y:year,m:month,d:day};
}
function ethiopianToJDN(y,m,d){ return d + 30*(m-1) + 365*y + Math.floor(y/4) + JD_EPOCH - 1; }
function gregToEth(y,m,d){ return jdnToEthiopian(gregorianToJDN(y,m,d)); }
function ethToGreg(y,m,d){ return jdnToGregorian(ethiopianToJDN(y,m,d)); }
function isEthLeap(y){ return y%4===3; }
function ethMonthLen(y,m){ return m<=12 ? 30 : (isEthLeap(y)?6:5); }
function weekdayOfEth(y,m,d){ const g = ethToGreg(y,m,d); return new Date(Date.UTC(g.y,g.m-1,g.d)).getUTCDay(); }
const ETH_MONTHS = [
  {am:'መስከረም',en:'Meskerem'},{am:'ጥቅምት',en:'Tikimt'},{am:'ኅዳር',en:'Hidar'},{am:'ታኅሳስ',en:'Tahsas'},
  {am:'ጥር',en:'Tir'},{am:'የካቲት',en:'Yekatit'},{am:'መጋቢት',en:'Megabit'},{am:'ሚያዝያ',en:'Miyazya'},
  {am:'ግንቦት',en:'Ginbot'},{am:'ሰኔ',en:'Sene'},{am:'ሐምሌ',en:'Hamle'},{am:'ነሐሴ',en:'Nehase'},{am:'ጳጉሜ',en:'Pagume'}
];
const ETH_WEEKDAYS = ['እ','ሰ','ማ','ረ','ሐ','ዓ','ቅ'];
const ETH_WEEKDAYS_FULL = ['እሁድ','ሰኞ','ማክሰኞ','ረቡዕ','ሐሙስ','አርብ','ቅዳሜ'];
function todayEth(){ const now=new Date(); return gregToEth(now.getFullYear(), now.getMonth()+1, now.getDate()); }
function fmtEthDate(e){ return ETH_MONTHS[e.m-1].am+' '+e.d+', '+e.y; }
function fmtEthShort(e){ return ETH_MONTHS[e.m-1].am+' '+e.d; }

/* ===================== STATE ===================== */
const DEFAULT_CATS = [
  {id:'c1',type:'expense',name:'Food & Drink',icon:'food',color:'#C9971A'},
  {id:'c2',type:'expense',name:'Transport',icon:'transport',color:'#4C7CE0'},
  {id:'c3',type:'expense',name:'Coffee',icon:'coffee',color:'#8B5E34'},
  {id:'c4',type:'expense',name:'Shopping',icon:'shopping',color:'#C15FC1'},
  {id:'c5',type:'expense',name:'Bills',icon:'bills',color:'#E2703A'},
  {id:'c6',type:'expense',name:'Housing',icon:'housing',color:'#1F6E43'},
  {id:'c7',type:'expense',name:'Health',icon:'health',color:'#B0432F'},
  {id:'c8',type:'expense',name:'Education',icon:'education',color:'#5CB3B3'},
  {id:'c9',type:'expense',name:'Family',icon:'family',color:'#8B2E3C'},
  {id:'c10',type:'expense',name:'Entertainment',icon:'entertainment',color:'#8A6BD1'},
  {id:'c11',type:'expense',name:'Other',icon:'other',color:'#6E637A'},
  {id:'c12',type:'income',name:'Salary',icon:'salary',color:'#1F6E43'},
  {id:'c13',type:'income',name:'Business',icon:'business',color:'#4C7CE0'},
  {id:'c14',type:'income',name:'Gift',icon:'gift',color:'#C15FC1'},
  {id:'c15',type:'income',name:'Freelance',icon:'freelance',color:'#5CB3B3'},
  {id:'c16',type:'income',name:'Other',icon:'coin',color:'#E0B93D'},
];
const DEFAULT_ACCOUNTS = [
  {id:'a1',name:'Cash',icon:'cash',color:'#1F6E43',start:0,type:'regular'},
  {id:'a2',name:'CBE Bank',icon:'bank',color:'#4C7CE0',start:0,type:'regular'},
  {id:'a3',name:'Telebirr',icon:'mobile',color:'#C9971A',start:0,type:'regular'},
];
let state = loadState();
state.loans = Array.isArray(state.loans) ? state.loans : [];
function loadState(){
  let s;
  try{ const raw = localStorage.getItem('yenebirr_state_v2'); if(raw) s = JSON.parse(raw); }catch(e){}
  if(!s) s = { theme:'green', showGregorian:false, introSeen:false, accounts:DEFAULT_ACCOUNTS, categories:DEFAULT_CATS, transactions:[], budgets:[], debts:{lent:[], borrowed:[]} };
  if(s.introSeen == null) s.introSeen = (s.transactions||[]).length > 0;
  // Safe migration for 3.1 features
  if(!s.debts) s.debts = {lent:[], borrowed:[]};
  if(!Array.isArray(s.debts.lent)) s.debts.lent = [];
  if(!Array.isArray(s.debts.borrowed)) s.debts.borrowed = [];
  (s.accounts||[]).forEach(a=>{
    if(!a.type) a.type = 'regular';
    if(a.monthlyGoal == null) a.monthlyGoal = 0;
    if(a.yearlyGoal == null) a.yearlyGoal = 0;
  });
  (s.transactions||[]).forEach(t=>{
    if(t.type === 'transfer' && !t.toAccountId) t.toAccountId = null;
  });
  (s.accounts||[]).forEach(a=>{ if(a.dashboard==null) a.dashboard=true; });
  return s;
}
function saveState(){ try{ localStorage.setItem('yenebirr_state_v2', JSON.stringify(state)); }catch(e){} }

/* ===================== HELPERS ===================== */
function fmt(n){ return 'ብር ' + Number(n||0).toLocaleString('en-US',{minimumFractionDigits:0,maximumFractionDigits:2}); }
function catById(id){ return state.categories.find(c=>c.id===id) || {icon:'other',name:'Other',color:'#6E637A'}; }
function accById(id){ return state.accounts.find(a=>a.id===id) || {name:'—',icon:'wallet',color:'#6E637A'}; }
function accBalance(id){
  const acc = accById(id); let bal = acc.start||0;
  state.transactions.forEach(t=>{
    if(t.type === 'transfer'){
      if(t.accountId === id) bal -= t.amount;       // from
      if(t.toAccountId === id) bal += t.amount;     // to
    } else if(t.accountId === id){
      bal += (t.type === 'income' ? t.amount : -t.amount);
    }
  });
  return bal;
}
function totalBalance(dashboardOnly=false){ return state.accounts.reduce((s,a)=>s+((!dashboardOnly||a.dashboard!==false)?accBalance(a.id):0),0); }
function sameMonth(t,y,m){ return t.date.y===y && t.date.m===m; }
function isReportableTransaction(t){ return !t.kind; }
function monthTotals(y,m){
  let inc=0, exp=0;
  state.transactions.forEach(t=>{
    if(!isReportableTransaction(t)||!sameMonth(t,y,m)) return;
    if(t.type==='income') inc+=t.amount;
    else if(t.type==='expense') exp+=t.amount;
    // transfers ignored for income/expense
  });
  return {inc,exp};
}
function prevEthMonth(y,m){ m--; if(m<1){m=13;y--;} return {y,m}; }
function toast(msg){ const el=document.getElementById('toast'); el.textContent=msg; el.classList.add('show'); setTimeout(()=>el.classList.remove('show'),1600); }

/* ===================== NAV ===================== */
let currentScreen='home';
function go(s){
  currentScreen=s;
  document.querySelectorAll('.screen').forEach(el=>el.classList.remove('active'));
  document.getElementById('screen-'+s).classList.add('active');
  document.querySelectorAll('.navbtn').forEach(el=>el.classList.toggle('active', el.dataset.s===s));
  window.scrollTo(0,0);
  render();
}

/* ===================== STATIC ICON FILLS ===================== */
function fillStaticIcons(){
  fillIconBtn('settingsBtn','settings');
  fillIconBtn('calTodayBtn','dot');
  fillIconBtn('calPrev','chevL',18);
  fillIconBtn('calNext','chevR',18);
  fillIconBtn('ledgerAddBtn','plus');
  fillIconBtn('budgetBackBtn','chevL');
  fillIconBtn('catBackBtn','chevL');
  fillIconBtn('categoryDetailBack','chevL');
  fillIconBtn('debtsBackBtn','chevL');
  fillIconBtn('catAddBtn','plus');
  fillIconBtn('addCloseBtn','close',15);
  fillIconBtn('accCloseBtn','close',15);
  fillIconBtn('debtCloseBtn','close',15);
  fillIconBtn('catCloseBtn','close',15);
  fillIconBtn('exportBtn2','download',15);
  fillIconBtn('clearBtn2','refresh',15);
  fillIconBtn('resetBtn2','refresh',15);
  fillIconBtn('analysisPrev','chevL',18);
  fillIconBtn('analysisNext','chevR',18);
  document.getElementById('navHome').insertAdjacentHTML('afterbegin', icon('home',20));
  document.getElementById('navCalendar').insertAdjacentHTML('afterbegin', icon('calendar',20));
  document.getElementById('navLedger').insertAdjacentHTML('afterbegin', icon('ledger',20));
  document.getElementById('navAnalysis').insertAdjacentHTML('afterbegin', icon('chart',20));
  document.getElementById('navFab').innerHTML = icon('plus',24);
  document.getElementById('arrAnalysis').innerHTML = icon('chevR',13);
  document.getElementById('arrLedger').innerHTML = icon('chevR',13);
  document.getElementById('arrPerspective').innerHTML = icon('chevR',13);
  document.getElementById('hpIncome').innerHTML = icon('arrowDown',15);
  document.getElementById('hpExpense').innerHTML = icon('arrowUp',15);
  document.getElementById('moreBudgetIc').style.background = hexA('#C9971A',0.16);
  document.getElementById('moreBudgetIc').style.color = '#C9971A';
  document.getElementById('moreBudgetIc').innerHTML = icon('chart',18);
  document.getElementById('moreCatIc').style.background = hexA('#4C7CE0',0.16);
  document.getElementById('moreCatIc').style.color = '#4C7CE0';
  document.getElementById('moreCatIc').innerHTML = icon('other',18);
  document.getElementById('moreDebtIc').style.background = hexA('#8B5E34',0.16);
  document.getElementById('moreDebtIc').style.color = '#8B5E34';
  document.getElementById('moreDebtIc').innerHTML = icon('wallet',18);
  setIconCircle('setGregIc','calendar','#4C7CE0');
  setIconCircle('setExportIc','download','#1F6E43');
  setIconCircle('setImportIc','refresh','#4C7CE0');
  setIconCircle('setClearIc','refresh','#C9971A');
  setIconCircle('setResetIc','refresh','#B0432F');
}
function setIconCircle(id,ic,color){
  const el=document.getElementById(id);
  el.style.background = hexA(color,0.16); el.style.color = color;
  el.innerHTML = icon(ic,17);
}

/* ===================== RENDER: HOME ===================== */
function renderHome(){
  const t = todayEth(); const g = new Date();
  document.getElementById('homeGreeting').innerHTML =
    '<span class="amh">'+greetingAm()+'</span> · '+fmtEthDate(t)+(state.showGregorian? ' <span style="opacity:.7">('+g.toLocaleDateString('en-GB',{day:'numeric',month:'short'})+')</span>':'');
  document.getElementById('heroBalance').textContent = fmt(totalBalance(true));
  const mt = monthTotals(t.y,t.m);
  document.getElementById('heroIncome').textContent = fmt(mt.inc);
  document.getElementById('heroExpense').textContent = fmt(mt.exp);

  document.getElementById('homeQuick').innerHTML = [
    {ic:'arrowDown',c:'#1F6E43',t:'Add Income',fn:"openAdd('income')"},
    {ic:'arrowUp',c:'#B0432F',t:'Add Expense',fn:"openAdd('expense')"},
    {ic:'refresh',c:'#4C7CE0',t:'Transfer',fn:"openAdd('transfer')"},
    {ic:'calendar',c:'#C9971A',t:'Calendar',fn:"go('calendar')"},
  ].map(q=>'<div class="qbtn" onclick="'+q.fn+'"><div class="ic-circle" style="background:'+hexA(q.c,0.15)+';color:'+q.c+'">'+icon(q.ic,17)+'</div><div class="t">'+q.t+'</div></div>').join('');
  const welcome = document.getElementById('homeWelcome');
  if(welcome){
    welcome.style.display = (!state.introSeen && !state.transactions.length) ? '' : 'none';
    welcome.innerHTML = '<div class="welcome-title">Welcome to Yene Birr</div><div class="welcome-sub">A simple way to understand where your money goes.</div><div class="welcome-steps"><div><b>Home</b><span>Your balance and changing spending patterns.</span></div><div><b>+</b><span>Add income, expenses, transfers, or accounts.</span></div><div><b>Analysis</b><span>Compare months, weeks, categories, and trends.</span></div></div><button class="welcome-close" onclick="dismissIntro()">Got it</button>';
  }
  document.getElementById('homePerspective').innerHTML = perspectiveHTML();

  document.getElementById('homeDonutCard').innerHTML = donutBlock(t.y,t.m);

  const recent = [...state.transactions].sort((a,b)=> ethiopianToJDN(b.date.y,b.date.m,b.date.d)-ethiopianToJDN(a.date.y,a.date.m,a.date.d) || (b.id>a.id?1:-1)).slice(0,5);
  document.getElementById('homeRecent').innerHTML = txListHTML(recent, true);
}
function greetingAm(){ const h=new Date().getHours(); if(h<12) return 'እንደምን አደርክ'; if(h<17) return 'እንደምን ዋልክ'; return 'እንደምን አመሸህ'; }
function dismissIntro(){ state.introSeen=true; saveState(); renderHome(); }
function txListHTML(list, showAccount){
  if(!list.length) return '<div class="empty"><div class="ic-circle">'+icon('ledger',22)+'</div>No transactions yet.<br>Tap the + button to add one.</div>';
  return list.map(t=>{
    if(t.type === 'transfer'){
      const from = accById(t.accountId); const to = accById(t.toAccountId);
      return '<div class="tx-row" onclick="openEditTx(\''+t.id+'\')" style="cursor:pointer;">'+
        '<div class="cat-tile" style="width:42px;height:42px;background:rgba(76,124,224,.15);color:#4C7CE0;">'+icon('refresh',20)+'</div>'+
        '<div class="tx-mid"><div class="tx-name">'+(t.note||'Transfer')+'</div>'+
        '<div class="tx-sub">'+from.name+' → '+to.name+' · '+fmtEthShort(t.date)+'</div></div>'+
        '<div class="tx-amt transfer">'+fmt(t.amount)+'</div>'+
      '</div>';
    }
    const c = catById(t.categoryId); const a = accById(t.accountId);
    return '<div class="tx-row" onclick="openEditTx(\''+t.id+'\')" style="cursor:pointer;">'+catTile(c,42)+
      '<div class="tx-mid"><div class="tx-name">'+(t.note||c.name)+'</div>'+
      '<div class="tx-sub">'+c.name+(showAccount?' · '+a.name:'')+' · '+fmtEthShort(t.date)+'</div></div>'+
      '<div class="tx-amt '+(t.type==='income'?'in':'out')+'">'+(t.type==='income'?'+':'−')+fmt(t.amount)+'</div>'+
    '</div>';
  }).join('');
}
const CHART_COLORS = ['#C9971A','#8B2E3C','#1F6E43','#4C7CE0','#C15FC1','#5CB3B3','#E2703A','#8A6BD1'];
function donutBlock(y,m){
  const cats={}; let total=0;
  state.transactions.forEach(t=>{ if(t.type!=='expense') return; if(!sameMonth(t,y,m)) return; cats[t.categoryId]=(cats[t.categoryId]||0)+t.amount; total+=t.amount; });
  return donutBlockFromCats(cats,total);
}
function donutBlockFromCats(cats,total){
  const entries = Object.entries(cats).sort((a,b)=>b[1]-a[1]);
  if(!total) return '<div class="empty"><div class="ic-circle">'+icon('chart',22)+'</div>No expenses recorded yet.</div>';
  let acc=0; const R=46, C=2*Math.PI*R;
  let circles = entries.map((e,i)=>{
    const c = catById(e[0]);
    const frac = e[1]/total, dash = frac*C;
    const seg = '<circle cx="60" cy="60" r="'+R+'" fill="none" stroke="'+c.color+'" stroke-width="14" stroke-dasharray="'+dash+' '+(C-dash)+'" stroke-dashoffset="'+(-acc)+'" stroke-linecap="butt" transform="rotate(-90 60 60)"/>';
    acc += dash; return seg;
  }).join('');
  let legend = entries.slice(0,7).map(e=>{
    const c = catById(e[0]); const pct = Math.round(e[1]/total*100);
    return '<div class="legend-row"><div class="sw" style="background:'+c.color+'"></div><div class="nm">'+c.name+'</div><div class="pct">'+pct+'%</div></div>';
  }).join('');
  return '<div style="display:flex; align-items:center; gap:18px;">'+
    '<svg width="120" height="120" viewBox="0 0 120 120" style="flex-shrink:0;">'+circles+
    '<text x="60" y="57" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)" font-family="Manrope">'+Math.round(total).toLocaleString()+'</text>'+
    '<text x="60" y="71" text-anchor="middle" font-size="8.5" fill="var(--ink-soft)" font-family="Manrope">ETB</text></svg>'+
    '<div class="legend" style="flex:1; min-width:0;">'+legend+'</div></div>';
}

/* ===================== RENDER: CALENDAR ===================== */
let calView = todayEth(); let calSelected = null;
function calShift(dir){ calView.m+=dir; if(calView.m>13){calView.m=1;calView.y++;} if(calView.m<1){calView.m=13;calView.y--;} calSelected=null; renderCalendar(); }
function calToday(){ calView=todayEth(); calSelected={...calView}; renderCalendar(); }
function renderCalendar(){
  const mo = ETH_MONTHS[calView.m-1];
  document.getElementById('calMonthAm').textContent = mo.am+' '+calView.y;
  const gFirst = ethToGreg(calView.y,calView.m,1);
  document.getElementById('calMonthG').textContent = mo.en+' — '+new Date(gFirst.y,gFirst.m-1,gFirst.d).toLocaleDateString('en-GB',{month:'short',year:'numeric'});
  document.getElementById('calWeekdays').innerHTML = ETH_WEEKDAYS.map(w=>'<div class="amh">'+w+'</div>').join('');

  const len = ethMonthLen(calView.y,calView.m);
  const startWd = weekdayOfEth(calView.y,calView.m,1);
  const t = todayEth();
  let cells='';
  for(let i=0;i<startWd;i++) cells += '<div class="day pad"></div>';
  for(let d=1; d<=len; d++){
    const dayTx = state.transactions.filter(x=>x.date.y===calView.y&&x.date.m===calView.m&&x.date.d===d);
    const dayInc = dayTx.filter(x=>x.type==='income').reduce((s,x)=>s+x.amount,0);
    const dayExp = dayTx.filter(x=>x.type==='expense').reduce((s,x)=>s+x.amount,0);
    const dayNet = dayInc-dayExp;
    const hasInc = dayInc>0;
    const hasExp = dayExp>0;
    const dayTotal = dayInc||dayExp ? '<div class="day-total '+(dayNet>=0?'in':'out')+'">'+(dayNet>=0?'+':'−')+Math.round(Math.abs(dayNet)).toLocaleString()+'</div>' : '';
    const isToday = t.y===calView.y&&t.m===calView.m&&t.d===d;
    const isSel = calSelected && calSelected.y===calView.y&&calSelected.m===calView.m&&calSelected.d===d;
    cells += '<div class="day '+(isToday?'today ':'')+(isSel?'sel ':'')+'" onclick="calPick('+d+')"><div class="day-number">'+d+'</div>'+dayTotal+ 
      '<div class="dots">'+(hasInc?'<div class="dot inc"></div>':'')+(hasExp?'<div class="dot exp"></div>':'')+'</div></div>';
  }
  document.getElementById('calGrid').innerHTML = cells;

  if(calSelected && calSelected.m===calView.m && calSelected.y===calView.y){
    const list = state.transactions.filter(x=>x.date.y===calSelected.y&&x.date.m===calSelected.m&&x.date.d===calSelected.d);
    const inc = list.filter(x=>x.type==='income').reduce((s,x)=>s+x.amount,0);
    const exp = list.filter(x=>x.type==='expense').reduce((s,x)=>s+x.amount,0);
    const net = inc-exp;
    document.getElementById('calDayTitle').innerHTML = fmtEthDate(calSelected)+' <span class="calendar-day-total '+(net>=0?'in':'out')+'">'+(net>=0?'+':'−')+fmt(Math.abs(net))+'</span>';
    document.getElementById('calDayList').innerHTML = txListHTML(list, true);
  } else {
    document.getElementById('calDayTitle').textContent = 'Select a day';
    const mt = monthTotals(calView.y,calView.m);
    document.getElementById('calDayList').innerHTML = '<div style="display:flex; justify-content:space-between; align-items:center; padding:4px 2px;"><div style="color:var(--ink-soft); font-size:12px; font-weight:700;">Month total</div><div style="font-size:13px;"><span style="color:var(--good); font-weight:800;">+'+fmt(mt.inc)+'</span> &nbsp; <span style="color:var(--danger); font-weight:800;">−'+fmt(mt.exp)+'</span></div></div>';
  }
}
function calPick(d){ calSelected={y:calView.y,m:calView.m,d}; renderCalendar(); }

/* ===================== RENDER: LEDGER ===================== */
let ledgerFilter='all';
function renderLedger(){
  document.getElementById('accScroll').innerHTML = state.accounts.map(a=>{
    const bal = accBalance(a.id);
    const isSav = a.type === 'saving';
    let progress = '';
    if(isSav && ((a.monthlyGoal||0) > 0 || (a.yearlyGoal||0) > 0)){
      const mg = a.monthlyGoal || 0, yg = a.yearlyGoal || 0;
      const mp = mg ? Math.min(100, Math.round(bal/mg*100)) : 0;
      const yp = yg ? Math.min(100, Math.round(bal/yg*100)) : 0;
      progress = '<div class="sav-progress">';
      if(mg) progress += '<div class="sav-bar"><div class="sav-fill" style="width:'+mp+'%"></div></div><div class="sav-lbl">Month '+mp+'% · '+fmt(mg)+'</div>';
      if(yg) progress += '<div class="sav-bar yr"><div class="sav-fill" style="width:'+yp+'%"></div></div><div class="sav-lbl">Year '+yp+'% · '+fmt(yg)+'</div>';
      progress += '</div>';
    }
    return '<div class="acc-card '+(a.dashboard!==false?'dashboard-selected ':'')+(isSav?'saving':'')+'" onclick="openEditAccount(\''+a.id+'\')" style="cursor:pointer;">'+
      catTile({icon:a.icon,color:a.color},36)+
      '<div class="n">'+(isSav?'🎯 ':'')+a.name+'</div>'+
      '<div class="b">'+fmt(bal)+'</div>'+progress+'<div class="acc-dashboard-toggle" onclick="event.stopPropagation();toggleDashboardAccount(\''+a.id+'\')">'+(a.dashboard!==false?'Shown on Home':'Hidden from Home')+'</div>'+
    '</div>';
  }).join('') + '<div class="acc-card add" onclick="openAddAccount()">'+icon('plus',22)+'<div class="n">Add account</div></div>';

  document.getElementById('ledgerChips').innerHTML = '<div class="chip '+(ledgerFilter==='all'?'active':'')+'" onclick="setLedgerFilter(\'all\')">All</div>' +
    state.accounts.map(a=>'<div class="chip '+(ledgerFilter===a.id?'active':'')+'" onclick="setLedgerFilter(\''+a.id+'\')">'+icon(a.icon,14)+a.name+'</div>').join('');

  let list = [...state.transactions];
  if(ledgerFilter!=='all') list = list.filter(t=>t.accountId===ledgerFilter);
  list.sort((a,b)=> ethiopianToJDN(b.date.y,b.date.m,b.date.d)-ethiopianToJDN(a.date.y,a.date.m,a.date.d) || (b.id>a.id?1:-1));

  // Group by Ethiopian day and show day income/expense totals
  const groups = [];
  const map = {};
  list.forEach(t=>{
    const key = t.date.y+'-'+t.date.m+'-'+t.date.d;
    if(!map[key]){ map[key] = {date:t.date, items:[], inc:0, exp:0}; groups.push(map[key]); }
    map[key].items.push(t);
    if(t.type==='income') map[key].inc += t.amount;
    else if(t.type==='expense') map[key].exp += t.amount;
  });

  if(!groups.length){
    document.getElementById('ledgerList').innerHTML = '<div class="empty"><div class="ic-circle">'+icon('ledger',22)+'</div>No transactions yet.<br>Tap the + button to add one.</div>';
    return;
  }

  document.getElementById('ledgerList').innerHTML = groups.map(g=>{
    const wd = ETH_WEEKDAYS_FULL[weekdayOfEth(g.date.y,g.date.m,g.date.d)];
    const net = g.inc - g.exp;
    const netCls = net>=0 ? 'in' : 'out';
    const netStr = (net>=0?'+':'−')+fmt(Math.abs(net));
    const gre = ethToGreg(g.date.y,g.date.m,g.date.d);
    const greLabel = state.showGregorian ? (' · '+gre.d+'/'+gre.m+'/'+gre.y) : '';
    return '<div class="day-group">'+
      '<div class="day-group-head">'+
        '<div class="day-group-title"><span class="amh">'+wd+'</span> · <span class="amh">'+ETH_MONTHS[g.date.m-1].am+'</span> '+g.date.d+' · '+g.date.y+greLabel+'</div>'+
        '<div class="day-group-total '+netCls+'">'+netStr+'</div>'+
      '</div>'+
      '<div class="day-group-body">'+txListHTML(g.items, true)+'</div>'+
    '</div>';
  }).join('');
}
function setLedgerFilter(id){ ledgerFilter=id; renderLedger(); }

/* ===================== RENDER: ANALYSIS ===================== */
let analysisView = null; // {y,m} current month for ranking
let expandedCategoryId = null;
let weeklyOffset = 0;
let categoryDetailId = null;

function analysisShift(dir){
  if(!analysisView) analysisView = todayEth();
  analysisView = {...analysisView};
  analysisView.m += dir;
  while(analysisView.m < 1){ analysisView.m += 13; analysisView.y--; }
  while(analysisView.m > 13){ analysisView.m -= 13; analysisView.y++; }
  renderAnalysis();
}
function weeklyShift(dir){ weeklyOffset += dir; renderAnalysis(); }
function weeklyToday(){ weeklyOffset=0; renderAnalysis(); }
function openCategoryDetails(id){ expandedCategoryId=null; categoryDetailId=id; go('category-detail'); }

function renderAnalysis(){
  if(!analysisView) analysisView = {y: todayEth().y, m: todayEth().m};
  const y = analysisView.y, m = analysisView.m;
  const mo = ETH_MONTHS[m-1];
  document.getElementById('analysisMonthTitle').innerHTML = '<span class="amh">'+mo.am+'</span> '+y;

  const cutoffDay = analysisCutoffDay(y, m);
  const mt = monthTotalsThrough(y, m, cutoffDay);
  const prev = prevEthMonth(y, m);
  const prevCutoffDay = Math.min(cutoffDay, ethMonthLen(prev.y, prev.m));
  const pt = monthTotalsThrough(prev.y, prev.m, prevCutoffDay);
  const net = mt.inc - mt.exp;
  const prevNet = pt.inc - pt.exp;
  function pctChange(cur, prevV){
    if(!prevV && !cur) return {txt:'—', cls:''};
    if(!prevV) return {txt:'new', cls:'in'};
    const p = Math.round((cur - prevV) / Math.abs(prevV) * 100);
    const sign = p > 0 ? '+' : '';
    return {txt: sign + p + '%', cls: p > 0 ? 'in' : (p < 0 ? 'out' : '')};
  }
  const incCh = pctChange(mt.inc, pt.inc);
  const expCh = pctChange(mt.exp, pt.exp);
  const netCh = pctChange(net, prevNet);
  const prevMo = ETH_MONTHS[prev.m-1];
  const methodEl = document.getElementById('analysisMethod');
  if(methodEl) methodEl.innerHTML = 'Comparing '+mo.en+' days 1–'+cutoffDay+' with '+prevMo.en+' days 1–'+prevCutoffDay+' — same number of elapsed dates.';

  const insightEl = document.getElementById('analysisInsights');
  if(insightEl){
    insightEl.innerHTML =
      '<div class="insight-grid">'+
        '<div class="insight-card"><div class="il">Income</div><div class="iv in">'+fmt(mt.inc)+'</div><div class="ich '+incCh.cls+'">'+incCh.txt+' vs '+prevMo.am+'</div></div>'+
        '<div class="insight-card"><div class="il">Expense</div><div class="iv out">'+fmt(mt.exp)+'</div><div class="ich '+expCh.cls+'">'+expCh.txt+' vs '+prevMo.am+'</div></div>'+
        '<div class="insight-card"><div class="il">Net</div><div class="iv '+(net>=0?'in':'out')+'">'+(net>=0?'+':'−')+fmt(Math.abs(net))+'</div><div class="ich '+netCh.cls+'">'+netCh.txt+' vs prev</div></div>'+
      '</div>'+
      '<div class="mom-bar">'+
        '<div class="mom-row"><span>Income</span><div class="mom-track"><div class="mom-fill in" style="width:'+(Math.max(mt.inc,pt.inc)?Math.round(mt.inc/Math.max(mt.inc,pt.inc,1)*100):0)+'%"></div></div><span class="mom-prev">prev '+fmt(pt.inc)+'</span></div>'+
        '<div class="mom-row"><span>Expense</span><div class="mom-track"><div class="mom-fill out" style="width:'+(Math.max(mt.exp,pt.exp)?Math.round(mt.exp/Math.max(mt.exp,pt.exp,1)*100):0)+'%"></div></div><span class="mom-prev">prev '+fmt(pt.exp)+'</span></div>'+
      '</div>';
  }

  // Aggregate expenses for this month
  const cats = {}; let total = 0; const counts = {};
  let txCount = 0, daysWithExp = new Set();
  state.transactions.forEach(tr=>{
    if(!sameMonth(tr, y, m) || tr.date.d > cutoffDay) return;
    if(isReportableTransaction(tr)&&tr.type === 'expense'){
      cats[tr.categoryId] = (cats[tr.categoryId]||0) + tr.amount;
      counts[tr.categoryId] = (counts[tr.categoryId]||0) + 1;
      total += tr.amount;
      daysWithExp.add(tr.date.d);
      txCount++;
    } else if(isReportableTransaction(tr)&&tr.type === 'income') txCount++;
  });

  const entries = Object.entries(cats).sort((a,b)=>b[1]-a[1]);
  document.getElementById('analysisDonut').innerHTML = rankingDonut(entries, total);
  document.getElementById('analysisRanking').innerHTML = rankingList(entries, total, counts);
  document.getElementById('analysisWeekly').innerHTML = weeklySpendingHTML();

  // Extra insights
  const extra = document.getElementById('analysisExtra');
  if(extra){
    const daysInMonth = ethMonthLen(y, m);
    const avgDaily = total && daysWithExp.size ? total / daysWithExp.size : 0;
    const topCat = entries[0] ? catById(entries[0][0]).name + ' ('+fmt(entries[0][1])+')' : '—';
    const savAccs = state.accounts.filter(a=>a.type==='saving');
    let savTotal = savAccs.reduce((s,a)=>s+accBalance(a.id),0);
    let savRate = mt.inc > 0 ? Math.round((mt.inc - mt.exp) / mt.inc * 100) : 0;
    extra.innerHTML =
      '<div class="extra-insights">'+
        '<div class="ei-row"><span>Avg spend / active day</span><strong>'+fmt(avgDaily)+'</strong></div>'+
        '<div class="ei-row"><span>Top category</span><strong>'+topCat+'</strong></div>'+
        '<div class="ei-row"><span>Transactions this month</span><strong>'+txCount+'</strong></div>'+
        '<div class="ei-row"><span>Savings rate (net/income)</span><strong>'+(mt.inc?savRate+'%':'—')+'</strong></div>'+
        (savAccs.length ? '<div class="ei-row"><span>In saving goals</span><strong>'+fmt(savTotal)+'</strong></div>' : '')+
      '</div>';
  }
}

function analysisCutoffDay(y,m){ const t=todayEth(); return t.y===y&&t.m===m?t.d:ethMonthLen(y,m); }
function monthTotalsThrough(y,m,throughDay){ let inc=0,exp=0; state.transactions.forEach(t=>{if(!isReportableTransaction(t)||t.date.y!==y||t.date.m!==m||t.date.d>throughDay)return;if(t.type==='income')inc+=t.amount;else if(t.type==='expense')exp+=t.amount;});return {inc,exp}; }
function ethDateOffset(e,offset){ return jdnToEthiopian(ethiopianToJDN(e.y,e.m,e.d)+offset); }
function weekExpenseData(offsetWeeks=weeklyOffset){ const t=todayEth(),weekday=weekdayOfEth(t.y,t.m,t.d),start=ethDateOffset(t,-weekday+offsetWeeks*7),values=Array.from({length:7},(_,i)=>{const day=ethDateOffset(start,i);return {day,value:state.transactions.filter(x=>isReportableTransaction(x)&&x.type==='expense'&&x.date.y===day.y&&x.date.m===day.m&&x.date.d===day.d).reduce((s,x)=>s+x.amount,0)};});return {start,values,total:values.reduce((s,x)=>s+x.value,0)}; }
function comparisonPercent(cur,prev){if(!prev&&!cur)return '0%';if(!prev)return 'new';return (cur>=prev?'+':'')+Math.round((cur-prev)/Math.abs(prev)*100)+'%';}
function weeklySpendingHTML(){ const cur=weekExpenseData(),prev=weekExpenseData(weeklyOffset-1),max=Math.max(1,...cur.values.map(x=>x.value)),names=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];const bars=cur.values.map((x,i)=>'<div class="week-bar-col"><div class="week-bar-value">'+(x.value?Math.round(x.value).toLocaleString():'')+'</div><div class="week-bar-track"><div class="week-bar-fill" style="height:'+Math.max(x.value?8:2,Math.round(x.value/max*100))+'%"></div></div><div class="week-bar-day">'+names[i]+'</div></div>').join('');const label=weeklyOffset===0?'Current week':(weeklyOffset>0?'Future week +'+weeklyOffset:'Previous week '+Math.abs(weeklyOffset));return '<div class="weekly-box"><div class="weekly-nav"><button class="week-nav-btn" onclick="weeklyShift(-1)">'+icon('chevL',16)+'</button><div><div class="weekly-title">Weekly spending</div><div class="weekly-sub">'+label+'</div></div><button class="week-nav-btn" onclick="weeklyShift(1)">'+icon('chevR',16)+'</button></div><div class="weekly-head"><div class="weekly-range">'+fmtEthShort(cur.start)+' – '+fmtEthShort(cur.values[6].day)+'</div><div class="weekly-total">'+fmt(cur.total)+'<span class="weekly-change">'+comparisonPercent(cur.total,prev.total)+' vs prev week</span></div></div><div class="weekly-bars">'+bars+'</div><div class="weekly-foot"><button class="week-today" onclick="weeklyToday()">Back to current week</button><span>Previous: '+fmt(prev.total)+'</span></div></div>'; }
function perspectiveHTML(){ const cur=weekExpenseData(),prev=weekExpenseData(-1),items=[];if(cur.total||prev.total)items.push((cur.total>=prev.total?'Spending is up ':'Spending is down ')+comparisonPercent(cur.total,prev.total).replace('+','')+' versus the same days last week.');const cats={};cur.values.forEach(d=>state.transactions.forEach(t=>{if(isReportableTransaction(t)&&t.type==='expense'&&t.date.y===d.day.y&&t.date.m===d.day.m&&t.date.d===d.day.d)cats[t.categoryId]=(cats[t.categoryId]||0)+t.amount;}));const top=Object.entries(cats).sort((a,b)=>b[1]-a[1])[0];if(top)items.push(catById(top[0]).name+' is your largest category this week at '+fmt(top[1])+'.');return items.length?items.map(x=>'<div class="perspective-insight"><div class="perspective-dot"></div><div>'+x+'</div></div>').join(''):'<div class="perspective-empty">Add a few expenses and Yene Birr will explain what is changing in your spending.</div>';}

function rankingDonut(entries, total){
  if(!total) return '<div class="empty"><div class="ic-circle">'+icon('chart',22)+'</div>No expenses this month.</div>';
  const R=52, C=2*Math.PI*R, CX=70, CY=70;
  let acc=0;
  const circles = entries.map((e,i)=>{
    const c = catById(e[0]);
    const frac = e[1]/total, dash = frac*C;
    const seg = '<circle cx="'+CX+'" cy="'+CY+'" r="'+R+'" fill="none" stroke="'+c.color+'" stroke-width="18" stroke-dasharray="'+dash+' '+(C-dash)+'" stroke-dashoffset="'+(-acc)+'" stroke-linecap="butt" transform="rotate(-90 '+CX+' '+CY+')"/>';
    acc += dash;
    return seg;
  }).join('');
  // percentage labels around the pie for top slices
  acc = 0;
  const labels = entries.map((e,i)=>{
    const frac = e[1]/total;
    const mid = acc + frac/2;
    acc += frac;
    if(frac < 0.04) return ''; // skip tiny slices
    const angle = mid * 2 * Math.PI - Math.PI/2;
    const lr = 38;
    const x = CX + Math.cos(angle)*lr;
    const y = CY + Math.sin(angle)*lr;
    const pct = Math.round(frac*1000)/10;
    return '<text x="'+x+'" y="'+y+'" text-anchor="middle" dominant-baseline="middle" font-size="10" font-weight="800" fill="#fff" font-family="Manrope">'+pct+'%</text>';
  }).join('');
  return '<div class="ranking-pie-wrap">'+
    '<svg width="140" height="140" viewBox="0 0 140 140">'+circles+labels+'</svg>'+
    '<div class="ranking-pie-total"><div class="v">'+fmt(total)+'</div><div class="l">Total spent</div></div>'+
  '</div>';
}

function toggleCategoryDetails(id){ openCategoryDetails(id); }
function renderCategoryDetail(){ const c=catById(categoryDetailId), y=analysisView?analysisView.y:todayEth().y, m=analysisView?analysisView.m:todayEth().m, cutoff=analysisCutoffDay(y,m); document.getElementById('categoryDetailTitle').textContent=c.name+' · '+ETH_MONTHS[m-1].en+' '+y; const rows=state.transactions.filter(t=>isReportableTransaction(t)&&t.type==='expense'&&t.categoryId===categoryDetailId&&sameMonth(t,y,m)&&t.date.d<=cutoff).sort((a,b)=>b.date.d-a.date.d); document.getElementById('categoryDetailList').innerHTML=rows.length?rows.map(t=>'<div class="category-detail-row"><span>'+fmtEthShort(t.date)+' · '+(t.note||'Expense')+'</span><strong>−'+fmt(t.amount)+'</strong></div>').join(''):'<div class="empty">No entries in this category for the selected period.</div>'; }
function categoryDetailsHTML(id){ const y=analysisView.y,m=analysisView.m;const rows=state.transactions.filter(t=>isReportableTransaction(t)&&t.type==='expense'&&t.categoryId===id&&sameMonth(t,y,m)).sort((a,b)=>b.date.d-a.date.d);return '<div class="category-details">'+(rows.length?rows.map(t=>'<div class="category-detail-row"><span>'+fmtEthShort(t.date)+' · '+(t.note||'Expense')+'</span><strong>−'+fmt(t.amount)+'</strong></div>').join(''):'<div class="empty-sm">No entries</div>')+'</div>'; }
function rankingList(entries, total, counts){
  if(!entries.length) return '';
  return entries.map((e,i)=>{
    const c = catById(e[0]);
    const pct = total ? (e[1]/total*100) : 0;
    const pctStr = (Math.round(pct*10)/10)+'%';
    const bills = counts[e[0]]||0;
    const barW = Math.max(2, Math.round(pct));
    return '<div class="rank-row" onclick="openCategoryDetails(\''+e[0]+'\')">'+
      '<div class="rank-left">'+
        '<div class="rank-icon" style="background:'+hexA(c.color,0.15)+';color:'+c.color+'">'+icon(c.icon,20)+'</div>'+
        '<div class="rank-meta">'+
          '<div class="rank-name">'+(i+1)+' '+c.name+'</div>'+
          '<div class="rank-sub">'+pctStr+' · '+bills+' bill'+(bills===1?'':'s')+'</div>'+
          '<div class="rank-bar"><div class="rank-bar-fill" style="width:'+barW+'%;background:'+c.color+'"></div></div>'+
        '</div>'+
      '</div>'+
      '<div class="rank-amt out">−'+fmt(e[1])+'</div>'+
    '</div>';
  }).join('');
}

/* ===================== RENDER: BUDGET ===================== */
function renderBudget(){
  const t = todayEth();
  document.getElementById('budgetMonth').innerHTML = '<span class="amh">'+ETH_MONTHS[t.m-1].am+'</span> '+t.y;
  const mt = {};
  state.transactions.forEach(tr=>{ if(isReportableTransaction(tr)&&tr.type==='expense'&&sameMonth(tr,t.y,t.m)) mt[tr.categoryId]=(mt[tr.categoryId]||0)+tr.amount; });
  const expCats = state.categories.filter(c=>c.type==='expense');
  document.getElementById('budgetList').innerHTML = expCats.map(c=>{
    const b = state.budgets.find(x=>x.categoryId===c.id && x.y===t.y && x.m===t.m);
    const spent = mt[c.id]||0;
    if(!b){
      return '<div class="budg-row"><div class="budg-top">'+catTile(c,38)+'<div class="nm">'+c.name+'</div>'+
        '<div class="amt" style="color:var(--ink);" onclick="promptBudget(\''+c.id+'\')">Set budget</div></div></div>';
    }
    const pct = Math.min(100, Math.round(spent/b.limit*100));
    const cls = pct>=100?'over':pct>=80?'warn':'';
    return '<div class="budg-row"><div class="budg-top">'+catTile(c,38)+'<div class="nm">'+c.name+'</div>'+
      '<div class="amt" onclick="promptBudget(\''+c.id+'\')">'+fmt(spent)+' / '+fmt(b.limit)+'</div></div>'+
      '<div class="bar-bg"><div class="bar-fill '+cls+'" style="width:'+pct+'%"></div></div></div>';
  }).join('');
}
function promptBudget(catId){
  const t = todayEth();
  const existing = state.budgets.find(x=>x.categoryId===catId && x.y===t.y && x.m===t.m);
  const val = prompt('Monthly budget for '+catById(catId).name+' (ETB):', existing?existing.limit:'');
  if(val===null) return;
  const num = parseFloat(val);
  if(isNaN(num) || num<=0){ toast('Enter a valid amount'); return; }
  if(existing) existing.limit=num; else state.budgets.push({categoryId:catId, y:t.y, m:t.m, limit:num});
  saveState(); renderBudget();
}

/* ===================== RENDER: CATEGORIES ===================== */
let catTab='expense';
function setCatTab(tab){ catTab=tab; document.getElementById('catTabExpense').classList.toggle('active',tab==='expense'); document.getElementById('catTabIncome').classList.toggle('active',tab==='income'); renderCategories(); }
function renderCategories(){
  const list = state.categories.filter(c=>c.type===catTab);
  document.getElementById('catManageGrid').innerHTML = list.map(c=>
    '<div class="catcell" onclick="deleteCategory(\''+c.id+'\')">'+catTile(c,40)+'<div class="n">'+c.name+'</div></div>'
  ).join('') + '<div class="catcell" onclick="openAddCategory()"><div class="cat-tile" style="width:40px;height:40px;background:var(--chip-bg);color:var(--ink-soft);">'+icon('plus',18)+'</div><div class="n">Add</div></div>';
}
function deleteCategory(id){ if(!confirm('Remove this category?')) return; state.categories=state.categories.filter(c=>c.id!==id); saveState(); renderCategories(); }
let newCatType='expense', selectedCatIcon='other', selectedCatColor=COLOR_PALETTE[0];
function openAddCategory(){
  newCatType=catTab; setCatType(newCatType);
  document.getElementById('catName').value='';
  selectedCatIcon = ICON_KEYS[0];
  document.getElementById('catIconGrid').innerHTML = ICON_KEYS.map((k,i)=>'<div class="iconcell '+(i===0?'sel':'')+'" onclick="pickCatIcon(this,\''+k+'\')" style="color:var(--ink);">'+icon(k,19)+'</div>').join('');
  selectedCatColor = COLOR_PALETTE[0];
  document.getElementById('catColorGrid').innerHTML = COLOR_PALETTE.slice(0,12).map((c,i)=>'<div class="iconcell '+(i===0?'sel':'')+'" onclick="pickCatColor(this,\''+c+'\')" style="padding:0;"><div style="width:22px;height:22px;border-radius:50%;background:'+c+';margin:auto;"></div></div>').join('');
  document.getElementById('catOverlay').classList.add('show');
}
function pickCatIcon(el,k){ selectedCatIcon=k; document.querySelectorAll('#catIconGrid .iconcell').forEach(c=>c.classList.remove('sel')); el.classList.add('sel'); }
function pickCatColor(el,c){ selectedCatColor=c; document.querySelectorAll('#catColorGrid .iconcell').forEach(x=>x.classList.remove('sel')); el.classList.add('sel'); }
function setCatType(t){ newCatType=t; document.getElementById('catTypeExpense').classList.toggle('active',t==='expense'); document.getElementById('catTypeIncome').classList.toggle('active',t==='income'); }
function saveCategory(){
  const name = document.getElementById('catName').value.trim();
  if(!name){ toast('Enter a category name'); return; }
  state.categories.push({id:'c'+Date.now(), type:newCatType, name, icon:selectedCatIcon, color:selectedCatColor});
  saveState(); closeSheet('catOverlay'); renderCategories(); toast('Category added');
}

/* ===================== ADD / EDIT ACCOUNT ===================== */
let selectedAccIcon='bank';
let editingAccId = null;
let editingAccDashboard = true;

function openAddAccount(){
  editingAccId = null;
  editingAccDashboard = true;
  document.getElementById('accSheetTitle').textContent = 'New account';
  document.getElementById('accSaveBtn').textContent = 'Add account';
  document.getElementById('accDeleteBtn').style.display = 'none';
  document.getElementById('accName').value='';
  document.getElementById('accStart').value='';
  selectedAccIcon = ACCOUNT_ICON_KEYS[0];
  document.getElementById('accIconGrid').innerHTML = ACCOUNT_ICON_KEYS.map((k,i)=>'<div class="iconcell '+(i===0?'sel':'')+'" onclick="pickAccIcon(this,\''+k+'\')" style="color:var(--ink);">'+icon(k,19)+'</div>').join('');
  const savToggle = document.getElementById('accSavingToggle');
  if(savToggle){ savToggle.classList.remove('on'); savToggle.dataset.on='0'; }
  const mg = document.getElementById('accMonthlyGoal'); if(mg) mg.value='';
  const yg = document.getElementById('accYearlyGoal'); if(yg) yg.value='';
  const goals = document.getElementById('accGoalsFields'); if(goals) goals.style.display='none';
  setAccountDashboardSwitch();
  document.getElementById('accOverlay').classList.add('show');
}

function openEditAccount(id){
  const a = state.accounts.find(x=>x.id===id);
  if(!a) return;
  editingAccId = id;
  editingAccDashboard = a.dashboard!==false;
  document.getElementById('accSheetTitle').textContent = 'Edit account';
  document.getElementById('accSaveBtn').textContent = 'Save changes';
  document.getElementById('accDeleteBtn').style.display = 'block';
  document.getElementById('accName').value = a.name;
  document.getElementById('accStart').value = a.start||0;
  selectedAccIcon = a.icon || ACCOUNT_ICON_KEYS[0];
  document.getElementById('accIconGrid').innerHTML = ACCOUNT_ICON_KEYS.map(k=>'<div class="iconcell '+(k===selectedAccIcon?'sel':'')+'" onclick="pickAccIcon(this,\''+k+'\')" style="color:var(--ink);">'+icon(k,19)+'</div>').join('');
  const isSav = a.type === 'saving';
  const savToggle = document.getElementById('accSavingToggle');
  if(savToggle){ savToggle.classList.toggle('on', isSav); savToggle.dataset.on = isSav ? '1' : '0'; }
  const goals = document.getElementById('accGoalsFields'); if(goals) goals.style.display = isSav ? '' : 'none';
  const mg = document.getElementById('accMonthlyGoal'); if(mg) mg.value = a.monthlyGoal || '';
  const yg = document.getElementById('accYearlyGoal'); if(yg) yg.value = a.yearlyGoal || '';
  setAccountDashboardSwitch();
  document.getElementById('accOverlay').classList.add('show');
}

function pickAccIcon(el,k){ selectedAccIcon=k; document.querySelectorAll('#accIconGrid .iconcell').forEach(c=>c.classList.remove('sel')); el.classList.add('sel'); }
function toggleAccSaving(){
  const el = document.getElementById('accSavingToggle');
  const on = el.dataset.on !== '1';
  el.dataset.on = on ? '1' : '0';
  el.classList.toggle('on', on);
  const goals = document.getElementById('accGoalsFields');
  if(goals) goals.style.display = on ? '' : 'none';
}
function setAccountDashboardSwitch(){ const el=document.getElementById('accDashboardSwitch'); if(el) el.classList.toggle('on',editingAccDashboard); }
function toggleAccountDashboard(){ editingAccDashboard=!editingAccDashboard; setAccountDashboardSwitch(); }
function toggleDashboardAccount(id){ const a=state.accounts.find(x=>x.id===id); if(!a)return; a.dashboard=a.dashboard===false; saveState(); renderLedger(); if(currentScreen==='home')renderHome(); toast(a.dashboard?'Account shown on Home':'Account hidden from Home'); }

function saveAccount(){ 
  const name = document.getElementById('accName').value.trim();
  if(!name){ toast('Enter an account name'); return; }
  const startBal = parseFloat(document.getElementById('accStart').value)||0;
  const savToggle = document.getElementById('accSavingToggle');
  const isSav = savToggle && savToggle.dataset.on === '1';
  const monthlyGoal = isSav ? (parseFloat(document.getElementById('accMonthlyGoal')?.value)||0) : 0;
  const yearlyGoal = isSav ? (parseFloat(document.getElementById('accYearlyGoal')?.value)||0) : 0;
  if(editingAccId){
    const a = state.accounts.find(x=>x.id===editingAccId);
    if(a){
      a.name=name; a.icon=selectedAccIcon; a.start=startBal;
      a.type = isSav ? 'saving' : 'regular';
      a.monthlyGoal = monthlyGoal; a.yearlyGoal = yearlyGoal; a.dashboard = editingAccDashboard;
    }
    saveState(); closeSheet('accOverlay'); render(); toast('Account updated');
  } else {
    state.accounts.push({
      id:'a'+Date.now(), name, icon:selectedAccIcon,
      color:COLOR_PALETTE[state.accounts.length%COLOR_PALETTE.length],
      start: startBal, type: isSav ? 'saving' : 'regular',
      monthlyGoal, yearlyGoal, dashboard:editingAccDashboard
    });
    saveState(); closeSheet('accOverlay'); renderLedger(); toast('Account added');
  }
  editingAccId = null;
}

function deleteAccount(){
  if(!editingAccId) return;
  if(!confirm('Delete this account? Transactions stay, but lose this account link.')) return;
  const id = editingAccId;
  state.accounts = state.accounts.filter(a=>a.id!==id);
  state.transactions.forEach(tr=>{ if(tr.accountId===id) tr.accountId = state.accounts[0]?state.accounts[0].id:null; });
  saveState(); closeSheet('accOverlay'); editingAccId=null; render(); toast('Account deleted');
}

/* ===================== ADD / EDIT TRANSACTION ===================== */
let addType='expense', addCatId=null, addAccId=null, addToAccId=null, addAmountStr='';
let editingTxId = null;

function openAdd(type){
  editingTxId = null;
  const titles = {expense:'New expense', income:'New income', transfer:'Transfer between accounts'};
  document.getElementById('addSheetTitle').textContent = titles[type] || 'New transaction';
  document.getElementById('addSaveBtn').textContent = type==='transfer' ? 'Transfer' : 'Save transaction';
  document.getElementById('addDeleteBtn').style.display = 'none';
  setAddType(type); addAmountStr=''; renderAmt();
  document.getElementById('addNote').value='';
  fillDateSelectors(todayEth());
  buildKeypad();
  document.getElementById('addOverlay').classList.add('show');
}

function openEditTx(id){
  const tx = state.transactions.find(x=>x.id===id);
  if(!tx) return;
  editingTxId = id;
  document.getElementById('addSheetTitle').textContent = 'Edit transaction';
  document.getElementById('addSaveBtn').textContent = 'Save changes';
  document.getElementById('addDeleteBtn').style.display = 'block';
  setAddType(tx.type);
  addAmountStr = String(tx.amount);
  renderAmt();
  addCatId = tx.categoryId;
  addAccId = tx.accountId;
  addToAccId = tx.toAccountId || null;
  if(tx.type !== 'transfer'){
    const cats = state.categories.filter(c=>c.type===tx.type);
    document.getElementById('addCatGrid').innerHTML = cats.map(c=>
      '<div class="catcell '+(c.id===addCatId?'sel':'')+'" onclick="pickAddCat(this,\''+c.id+'\')">'+catTile(c,40)+'<div class="n">'+c.name+'</div></div>'
    ).join('');
  }
  document.getElementById('addAccChips').innerHTML = state.accounts.map(a=>
    '<div class="chip '+(a.id===addAccId?'active':'')+'" onclick="pickAddAcc(this,\''+a.id+'\')">'+icon(a.icon,14)+a.name+'</div>'
  ).join('');
  const toChips = document.getElementById('addToAccChips');
  if(toChips) toChips.innerHTML = state.accounts.map(a=>
    '<div class="chip '+(a.id===addToAccId?'active':'')+'" onclick="pickAddToAcc(this,\''+a.id+'\')">'+icon(a.icon,14)+a.name+'</div>'
  ).join('');
  document.getElementById('addNote').value = tx.note || '';
  fillDateSelectors(tx.date);
  buildKeypad();
  document.getElementById('addOverlay').classList.add('show');
}

function closeAdd(){ closeSheet('addOverlay'); editingTxId=null; }
function closeSheet(id){ document.getElementById(id).classList.remove('show'); }
function setAddType(type){
  addType=type;
  const isTransfer = type === 'transfer';
  document.getElementById('typeExpense').classList.toggle('active', type==='expense');
  document.getElementById('typeIncome').classList.toggle('active', type==='income');
  const typeTransfer = document.getElementById('typeTransfer');
  if(typeTransfer) typeTransfer.classList.toggle('active', isTransfer);

  const catField = document.getElementById('addCatField');
  const toAccField = document.getElementById('addToAccField');
  const fromLabel = document.getElementById('addFromLabel');
  if(catField) catField.style.display = isTransfer ? 'none' : '';
  if(toAccField) toAccField.style.display = isTransfer ? '' : 'none';
  if(fromLabel) fromLabel.textContent = isTransfer ? 'From account' : 'Account';

  if(!isTransfer){
    const cats = state.categories.filter(c=>c.type===type);
    addCatId = cats[0] ? cats[0].id : null;
    document.getElementById('addCatGrid').innerHTML = cats.map(c=>
      '<div class="catcell '+(c.id===addCatId?'sel':'')+'" onclick="pickAddCat(this,\''+c.id+'\')">'+catTile(c,40)+'<div class="n">'+c.name+'</div></div>'
    ).join('');
  } else {
    addCatId = null;
  }
  addAccId = state.accounts[0] ? state.accounts[0].id : null;
  addToAccId = state.accounts[1] ? state.accounts[1].id : (state.accounts[0] ? state.accounts[0].id : null);
  document.getElementById('addAccChips').innerHTML = state.accounts.map(a=>
    '<div class="chip '+(a.id===addAccId?'active':'')+'" onclick="pickAddAcc(this,\''+a.id+'\')">'+icon(a.icon,14)+a.name+'</div>'
  ).join('');
  const toChips = document.getElementById('addToAccChips');
  if(toChips) toChips.innerHTML = state.accounts.map(a=>
    '<div class="chip '+(a.id===addToAccId?'active':'')+'" onclick="pickAddToAcc(this,\''+a.id+'\')">'+icon(a.icon,14)+a.name+'</div>'
  ).join('');
}

function pickAddCat(el,id){ addCatId=id; document.querySelectorAll('#addCatGrid .catcell').forEach(c=>c.classList.remove('sel')); el.classList.add('sel'); }
function pickAddAcc(el,id){ addAccId=id; document.querySelectorAll('#addAccChips .chip').forEach(c=>c.classList.remove('active')); el.classList.add('active'); }
function pickAddToAcc(el,id){ addToAccId=id; document.querySelectorAll('#addToAccChips .chip').forEach(c=>c.classList.remove('active')); el.classList.add('active'); }
function setAmt(n){ addAmountStr=String(n); renderAmt(); }
function renderAmt(){ document.getElementById('addAmountDisplay').textContent = addAmountStr || '0'; }
function buildKeypad(){
  const keys = ['1','2','3','4','5','6','7','8','9','.','0','⌫'];
  document.getElementById('keypad').innerHTML = keys.map(k=>{
    if(k==='⌫') return '<div class="key" onclick="kpBack()">'+icon('close',16)+'</div>';
    return '<div class="key" onclick="kpPress(\''+k+'\')">'+k+'</div>';
  }).join('');
}
function kpPress(v){
  if(v==='.' && addAmountStr.includes('.')) return;
  if(addAmountStr.replace('.','').length>=9) return;
  addAmountStr += v; renderAmt();
}
function kpBack(){ addAmountStr = addAmountStr.slice(0,-1); renderAmt(); }
function fillDateSelectors(e){
  const moSel = document.getElementById('addDateMonth');
  moSel.innerHTML = ETH_MONTHS.map((mo,i)=>'<option value="'+(i+1)+'">'+mo.am+'</option>').join('');
  moSel.value = e.m;
  const len = ethMonthLen(e.y, e.m);
  const daySel = document.getElementById('addDateDay');
  daySel.innerHTML = Array.from({length:len},(_,i)=>i+1).map(d=>'<option value="'+d+'">'+d+'</option>').join('');
  daySel.value = e.d;
  document.getElementById('addDateYear').value = e.y;
  document.getElementById('addDateLabel').textContent = fmtEthDate(e);
  moSel.onchange = ()=>{ const y=parseInt(document.getElementById('addDateYear').value); const len2=ethMonthLen(y, parseInt(moSel.value)); daySel.innerHTML = Array.from({length:len2},(_,i)=>i+1).map(d=>'<option value="'+d+'">'+d+'</option>').join(''); };
}
function saveTransaction(){
  const amount = parseFloat(addAmountStr);
  if(!amount || amount<=0){ toast('Enter a valid amount'); return; }
  if(addType === 'transfer'){
    if(!addAccId || !addToAccId){ toast('Pick from and to accounts'); return; }
    if(addAccId === addToAccId){ toast('Choose different accounts'); return; }
  } else {
    if(!addCatId){ toast('Pick a category'); return; }
    if(!addAccId){ toast('Pick an account'); return; }
  }
  const y = parseInt(document.getElementById('addDateYear').value);
  const m = parseInt(document.getElementById('addDateMonth').value);
  const d = parseInt(document.getElementById('addDateDay').value);
  const note = document.getElementById('addNote').value.trim();
  if(editingTxId){
    const tx = state.transactions.find(x=>x.id===editingTxId);
    if(tx){
      tx.type=addType;
      tx.categoryId = addType==='transfer' ? null : addCatId;
      tx.accountId=addAccId;
      tx.toAccountId = addType==='transfer' ? addToAccId : null;
      tx.amount=amount; tx.note=note; tx.date={y,m,d};
    }
    saveState(); closeAdd(); toast('Transaction updated'); render();
  } else {
    const obj = {id:'t'+Date.now(), type:addType, accountId:addAccId, amount, note, date:{y,m,d}};
    if(addType === 'transfer'){
      obj.toAccountId = addToAccId;
      obj.categoryId = null;
    } else {
      obj.categoryId = addCatId;
    }
    state.transactions.push(obj);
    saveState(); closeAdd();
    const labels = {income:'Income', expense:'Expense', transfer:'Transfer'};
    toast((labels[addType]||'Transaction')+' added'); render();
  }
  editingTxId = null;
}

function deleteTransaction(){
  if(!editingTxId) return;
  if(!confirm('Delete this transaction?')) return;
  state.transactions = state.transactions.filter(x=>x.id!==editingTxId);
  saveState(); closeAdd(); editingTxId=null; toast('Transaction deleted'); render();
}

/* ===================== SETTINGS ===================== */
const THEMES = [ {id:'green', name:'Green', c1:'#F2F8F4', c2:'#1F8A4C'}, {id:'gold', name:'Meskel Gold', c1:'#FAF8F1', c2:'#C9971A'}, {id:'coffee', name:'Coffee', c1:'#241712', c2:'#D4A24C'}, {id:'indigo', name:'Indigo', c1:'#171A33', c2:'#E0B93D'}, {id:'sky', name:'Sky Blue', c1:'#E8F4FC', c2:'#2B8ECF'}, {id:'noir', name:'Noir', c1:'#0B0D12', c2:'#5B8CFF'} ];
function renderSettings(){
  document.getElementById('themeRow').innerHTML = THEMES.map(th=>
    '<button class="theme-sw '+(state.theme===th.id?'sel':'')+'" onclick="setTheme(\''+th.id+'\')" aria-label="Use '+th.name+' theme"><div class="swatch" style="background:linear-gradient(135deg,'+th.c1+' 50%,'+th.c2+' 50%)"></div><div class="lbl">'+th.name+'</div></button>'
  ).join('');
  document.getElementById('swGreg').classList.toggle('on', state.showGregorian);
  renderDebts();
}
function renderDebts(){
  const lentEl = document.getElementById('debtLentList');
  const borEl = document.getElementById('debtBorrowedList');
  if(!lentEl || !borEl) return;
  const lent = state.debts.lent || [];
  const bor = state.debts.borrowed || [];
  lentEl.innerHTML = lent.length ? lent.map(d=>
    '<div class="debt-row '+(d.settled?'settled':'')+'">'+
      '<div class="debt-mid"><div class="debt-name">'+d.person+'</div>'+
      '<div class="debt-sub">'+(d.note||'')+' · '+fmtEthShort(d.date)+(d.settled?' · settled':'')+'</div></div>'+
      '<div class="debt-amt out">'+fmt(d.amount)+'</div>'+
      '<div class="debt-acts"><button class="debt-btn" onclick="toggleDebtSettled(\'lent\',\''+d.id+'\')">'+(d.settled?'↺':'✓')+'</button>'+
      '<button class="debt-btn danger" onclick="deleteDebt(\'lent\',\''+d.id+'\')">×</button></div>'+
    '</div>'
  ).join('') : '<div class="empty-sm">No money lent yet</div>';
  borEl.innerHTML = bor.length ? bor.map(d=>
    '<div class="debt-row '+(d.settled?'settled':'')+'">'+
      '<div class="debt-mid"><div class="debt-name">'+d.person+'</div>'+
      '<div class="debt-sub">'+(d.note||'')+' · '+fmtEthShort(d.date)+(d.settled?' · settled':'')+'</div></div>'+
      '<div class="debt-amt in">'+fmt(d.amount)+'</div>'+
      '<div class="debt-acts"><button class="debt-btn" onclick="toggleDebtSettled(\'borrowed\',\''+d.id+'\')">'+(d.settled?'↺':'✓')+'</button>'+
      '<button class="debt-btn danger" onclick="deleteDebt(\'borrowed\',\''+d.id+'\')">×</button></div>'+
    '</div>'
  ).join('') : '<div class="empty-sm">No money borrowed yet</div>';
  const lentOpen = lent.filter(d=>!d.settled).reduce((s,d)=>s+d.amount,0);
  const borOpen = bor.filter(d=>!d.settled).reduce((s,d)=>s+d.amount,0);
  const sumL = document.getElementById('debtLentSum');
  const sumB = document.getElementById('debtBorrowedSum');
  if(sumL) sumL.textContent = fmt(lentOpen);
  if(sumB) sumB.textContent = fmt(borOpen);
}
let debtAccountId=null;
function renderDebtAccounts(){ document.getElementById('debtAccChips').innerHTML=state.accounts.map(a=>'<div class="chip '+(a.id===debtAccountId?'active':'')+'" onclick="pickDebtAccount(\''+a.id+'\')">'+icon(a.icon,14)+a.name+'</div>').join(''); }
function pickDebtAccount(id){ debtAccountId=id; renderDebtAccounts(); }
function openAddDebt(kind){
  document.getElementById('debtKind').value = kind;
  document.getElementById('debtSheetTitle').textContent = kind==='lent' ? 'ያበደርኩት · Money I lent' : 'የተበደርኩት · Money I borrowed';
  document.getElementById('debtPerson').value = '';
  document.getElementById('debtAmount').value = '';
  document.getElementById('debtNote').value = '';
  const t = todayEth();
  document.getElementById('debtDate').value = t.y+'-'+t.m+'-'+t.d;
  debtAccountId=state.accounts[0]?state.accounts[0].id:null; renderDebtAccounts();
  document.getElementById('debtOverlay').classList.add('show');
}
function saveDebt(){
  const kind = document.getElementById('debtKind').value;
  const person = document.getElementById('debtPerson').value.trim();
  const amount = parseFloat(document.getElementById('debtAmount').value);
  if(!person){ toast('Enter person name'); return; }
  if(!amount || amount<=0){ toast('Enter amount'); return; }
  if(!debtAccountId){ toast('Choose an account'); return; }
  const note = document.getElementById('debtNote').value.trim();
  const dateStr = document.getElementById('debtDate').value || '';
  let y,m,d;
  if(dateStr.includes('-')){
    const p = dateStr.split('-').map(Number);
    y=p[0]; m=p[1]; d=p[2];
  } else {
    const t = todayEth(); y=t.y; m=t.m; d=t.d;
  }
  const id='d'+Date.now();
  state.debts[kind].push({id, person, amount, note, date:{y,m,d}, settled:false, accountId:debtAccountId});
  state.transactions.push({id:'debt-t'+Date.now(),kind:'debt',debtId:id,debtKind:kind,type:kind==='lent'?'expense':'income',categoryId:null,accountId:debtAccountId,amount,note:(kind==='lent'?'Lent to ':'Borrowed from ')+person,date:{y,m,d}});
  saveState(); closeSheet('debtOverlay'); renderDebts(); toast('Saved');
}
function toggleDebtSettled(kind, id){
  const d = state.debts[kind].find(x=>x.id===id);
  if(d){ d.settled = !d.settled; const settlementId='debt-s'+id; state.transactions=state.transactions.filter(t=>t.id!==settlementId); if(d.settled) state.transactions.push({id:settlementId,kind:'debt-settlement',debtId:id,type:kind==='lent'?'income':'expense',categoryId:null,accountId:d.accountId||state.accounts[0]?.id,amount:d.amount,note:(kind==='lent'?'Received from ':'Repaid to ')+d.person,date:todayEth()}); saveState(); renderDebts(); render(); }
}
function deleteDebt(kind, id){
  if(!confirm('Remove this record?')) return;
  state.debts[kind] = state.debts[kind].filter(x=>x.id!==id); state.transactions=state.transactions.filter(t=>t.debtId!==id);
  saveState(); renderDebts(); toast('Removed');
}

function setTheme(id){ state.theme=id; document.body.setAttribute('data-theme', id); saveState(); renderIcons(); renderSettings(); }
function toggleGregorian(){ state.showGregorian=!state.showGregorian; saveState(); renderSettings(); if(currentScreen==='home') renderHome(); }
function clearAllTransactions(){
  const removed = state.transactions.length;
  state.transactions = [];
  state.accounts.forEach(a => { if(['a1','a2','a3'].includes(a.id)) a.start = 0; });
  saveState();
  toast(removed ? ('Cleared '+removed+' transactions') : 'No transactions to clear');
  render();
}
function resetApp(){
  if(!confirm('This erases all your data. Continue?')) return;
  localStorage.removeItem('yenebirr_state_v2'); state = loadState();
  document.body.setAttribute('data-theme', state.theme); renderIcons(); go('home');
}

/* ===================== EXPORT CSV ===================== */
function csvEscape(value){ const text=String(value??''); return /[",\n\r]/.test(text)?'"'+text.replace(/"/g,'""')+'"':text; }
async function exportCSV(){
  const rows = [['ID','Date (Ethiopian)','Type','Category','Account','To Account','Amount','Note']];
  [...state.transactions].sort((a,b)=>ethiopianToJDN(a.date.y,a.date.m,a.date.d)-ethiopianToJDN(b.date.y,b.date.m,b.date.d))
    .forEach(t=>{ if(t.type==='transfer'){
      rows.push([t.id,fmtEthDate(t.date), 'transfer', '—', accById(t.accountId).name, accById(t.toAccountId).name, t.amount, t.note||'']);
    } else {
      rows.push([t.id,fmtEthDate(t.date), t.type, t.kind||catById(t.categoryId).name, accById(t.accountId).name, '', t.amount, t.note||'']);
    } });
  const csv = rows.map(r=>r.map(csvEscape).join(',')).join('\r\n');
  try{
    const blob = new Blob([csv], {type:'text/csv'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href=url; a.download='yenebirr-transactions.csv';
    document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
    toast('CSV exported');
  }catch(e){ toast('Export not available here'); }
}
function parseCSV(text){const rows=[];let row=[],cell='',quoted=false;for(let i=0;i<text.length;i++){const ch=text[i],n=text[i+1];if(ch==='"'&&quoted&&n==='"'){cell+='"';i++;continue;}if(ch==='"'){quoted=!quoted;continue;}if(ch===','&&!quoted){row.push(cell);cell='';continue;}if((ch==='\n'||ch==='\r')&&!quoted){if(ch==='\r'&&n==='\n')i++;row.push(cell);if(row.some(v=>v!==''))rows.push(row);row=[];cell='';continue;}cell+=ch;}if(cell!==''||row.length){row.push(cell);rows.push(row);}return rows;}
function parseImportedEthDate(value){const m=String(value||'').trim().match(/^(.+?)\s+(\d+),\s*(\d+)$/);if(!m)return null;const month=ETH_MONTHS.findIndex(x=>x.am===m[1]||x.en.toLowerCase()===m[1].toLowerCase())+1;const d=Number(m[2]),y=Number(m[3]);return month>0&&d>=1&&d<=ethMonthLen(y,month)?{y,m:month,d}:null;}
async function importCSV(event){const file=event.target.files&&event.target.files[0];event.target.value='';if(!file)return;try{const rows=parseCSV(await file.text());if(!rows.length)throw Error('empty');const h=rows[0].map(x=>x.toLowerCase().trim()),idx=n=>h.indexOf(n),di=idx('date (ethiopian)'),ti=idx('type'),ci=idx('category'),ai=idx('account'),tai=idx('to account'),mi=idx('amount'),ni=idx('note'),idi=idx('id');if(di<0||ti<0||ai<0||mi<0)throw Error('format');let ok=0,skip=0;rows.slice(1).forEach((r,n)=>{const date=parseImportedEthDate(r[di]),type=(r[ti]||'').toLowerCase().trim(),amount=Number(String(r[mi]||'').replace(/,/g,'')),id=String(idi>=0?r[idi]||'':'').trim()||'t'+Date.now()+'_'+n;if(!date||!['income','expense','transfer'].includes(type)||!Number.isFinite(amount)||amount<=0||state.transactions.some(t=>t.id===id)){skip++;return;}const accountName=String(r[ai]||'').replace(/\s*→\s*.*/, '').trim()||'Imported account';let acc=state.accounts.find(a=>a.name.toLowerCase()===accountName.toLowerCase());if(!acc){acc={id:'a'+Date.now()+n,name:accountName,icon:'wallet',color:COLOR_PALETTE[state.accounts.length%COLOR_PALETTE.length],start:0,type:'regular',dashboard:true};state.accounts.push(acc);}if(type==='transfer'){const toName=String(tai>=0?r[tai]||'': '').trim();if(!toName){skip++;return;}let to=state.accounts.find(a=>a.name.toLowerCase()===toName.toLowerCase());if(!to){to={id:'a'+Date.now()+'to'+n,name:toName,icon:'wallet',color:COLOR_PALETTE[state.accounts.length%COLOR_PALETTE.length],start:0,type:'regular',dashboard:true};state.accounts.push(to);}state.transactions.push({id,type,accountId:acc.id,toAccountId:to.id,amount,note:ni>=0?r[ni]||'':'',date});ok++;return;}const typeCat=type==='income'?'income':'expense',catName=String(ci>=0?r[ci]||'Other':'Other').trim()||'Other';let cat=state.categories.find(c=>c.type===typeCat&&c.name.toLowerCase()===catName.toLowerCase());if(!cat){cat={id:'c'+Date.now()+n,type:typeCat,name:catName,icon:typeCat==='income'?'coin':'other',color:typeCat==='income'?'#1F6E43':'#6E637A'};state.categories.push(cat);}state.transactions.push({id,type,categoryId:cat.id,accountId:acc.id,amount,note:ni>=0?r[ni]||'':'',date});ok++;});saveState();render();toast('Imported '+ok+' transaction'+(ok===1?'':'s')+(skip?' · skipped '+skip:''));}catch(e){toast('CSV import failed: use a Yene Birr export file');}}

/* ===================== APP ICON (SVG) ===================== */
function iconSVG(){
  return '<svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">'+
    '<defs><linearGradient id="ibg" x1="0" y1="0" x2="1" y2="1">'+
    '<stop offset="0" stop-color="#2A1B3D"/><stop offset="0.55" stop-color="#4A2A55"/><stop offset="1" stop-color="#C9971A"/></linearGradient></defs>'+
    '<rect width="100" height="100" fill="url(#ibg)"/>'+
    '<g transform="translate(50,50)">'+
      [0,90,180,270].map(a=>'<path transform="rotate('+a+')" d="M0,0 L0,-34 A17,17 0 0 1 17,-17 Z" fill="#F3E9DD" opacity="0.95"/>').join('')+
      '<circle r="9" fill="#E0B93D"/></g></svg>';
}
function renderIcons(){ document.getElementById('homeIcon').innerHTML=iconSVG(); document.getElementById('bigIcon').innerHTML=iconSVG(); }

/* ===================== MASTER RENDER ===================== */
function render(){
  if(currentScreen==='home') renderHome();
  else if(currentScreen==='calendar') renderCalendar();
  else if(currentScreen==='ledger') renderLedger();
  else if(currentScreen==='analysis') renderAnalysis();
  else if(currentScreen==='more') renderSettings();
  else if(currentScreen==='budget') renderBudget();
  else if(currentScreen==='categories') renderCategories();
  else if(currentScreen==='category-detail') renderCategoryDetail();
  else if(currentScreen==='debts') renderDebts();
}

/* ===================== INIT ===================== */
document.body.setAttribute('data-theme', state.theme || 'green');
calSelected = todayEth();
fillStaticIcons();
renderIcons();
render();

// Green splash with developer credit
setTimeout(function(){
  const sp = document.getElementById('splash');
  if(sp) sp.classList.add('hide');
}, 1600);

/* ===================== EXPOSE TO WINDOW (for inline onclick handlers) ===================== */
Object.assign(window, {
  go, openAdd, closeAdd, closeSheet, exportCSV, importCSV,
  calToday, calShift, calPick,
  openAddAccount, openEditAccount, pickAccIcon, saveAccount, deleteAccount, toggleAccSaving, toggleAccountDashboard, toggleDashboardAccount,
  setLedgerFilter,
  openAddCategory, pickCatIcon, pickCatColor, setCatType, saveCategory, deleteCategory, setCatTab,
  promptBudget,
  setAddType, pickAddCat, pickAddAcc, pickAddToAcc, setAmt, kpPress, kpBack, saveTransaction,
  openEditTx, deleteTransaction,
  setTheme, toggleGregorian, clearAllTransactions, resetApp, dismissIntro, analysisShift, weeklyShift, weeklyToday, toggleCategoryDetails, openCategoryDetails,
  openAddDebt, saveDebt, toggleDebtSettled, deleteDebt, pickDebtAccount
});
