'use strict';

// ─── SVG ICONS ────────────────────────────────────────────────────────────────
const I = {
    bolt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    grid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
    chart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
    trophy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2"/><rect x="6" y="18" width="12" height="4"/><path d="M6 9a6 6 0 0 0 12 0"/></svg>`,
    clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
    headphones: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>`,
    users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    xcirc: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
    fire: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3z"/></svg>`,
    star: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    arrowL: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
    arrowR: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    play: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
    pause: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`,
    stop: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg>`,
    eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
    refresh: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.41"/></svg>`,
    edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
    sparkles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M12 3L13.5 8.5L19 10L13.5 11.5L12 17L10.5 11.5L5 10L10.5 8.5L12 3Z"/><path d="M5 3L5.8 5.2L8 6L5.8 6.8L5 9L4.2 6.8L2 6L4.2 5.2L5 3Z"/><path d="M19 15L19.5 16.5L21 17L19.5 17.5L19 19L18.5 17.5L17 17L18.5 16.5L19 15Z"/></svg>`,
    rain: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><line x1="16" y1="13" x2="16" y2="21"/><line x1="8" y1="13" x2="8" y2="21"/><line x1="12" y1="15" x2="12" y2="23"/><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/></svg>`,
    coffee: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
    wave: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M2 12c.5-3 2.5-5 5-5s4.5 2 5 5 2.5 5 5 5 4.5-2 5-5"/></svg>`,
    robot: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M12 11V7"/><circle cx="12" cy="5" r="2"/><line x1="8" y1="15" x2="8" y2="15"/><line x1="16" y1="15" x2="16" y2="15"/><path d="M8 19h8"/></svg>`,
    video: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>`,
    plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
    hash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>`,
    x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
    cpu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`,
};

// ─── CONFIG & STATE ────────────────────────────────────────────────────────────
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const ROOMS = [
    { id:'quiet', name:'Silent Zone', desc:'Library-grade focus. Zero tolerance for distraction.', icon:'book', color:'text-cyan-400', bg:'bg-cyan-500/10' },
    { id:'deep-work', name:'Deep Work', desc:'The hardest problems deserve unbroken attention.', icon:'cpu', color:'text-indigo-400', bg:'bg-indigo-500/10' },
    { id:'exam-blitz', name:'Exam Blitz', desc:'High-intensity MCQ grind. Competitive exam mode.', icon:'target', color:'text-red-400', bg:'bg-red-500/10' },
    { id:'revision', name:'Revision Room', desc:'Reinforce what you know. Spaced repetition friendly.', icon:'refresh', color:'text-emerald-400', bg:'bg-emerald-500/10' },
    { id:'code-lab', name:'Code Lab', desc:'For programmers, DSA grinders and CS students.', icon:'cpu', color:'text-amber-400', bg:'bg-amber-500/10' },
    { id:'chill', name:'Chill & Study', desc:'Light material, podcasts, reading. Low pressure mode.', icon:'headphones', color:'text-purple-400', bg:'bg-purple-500/10' },
];

const INTEREST_TAGS = ['Mathematics','Physics','Chemistry','Biology','History','Geography','Economics','Literature','Computer Science','Law','Medicine','Engineering','UPSC','JEE','NEET','GATE','Languages','Business'];

const S = {
    screen: 'landing', // 'landing', 'setup', 'app', 'session', 'accountability'
    activeNav: 'rooms',
    user: null,
    sessions: [],
    leaderboard: [],
    
    setupStep: 0,
    setupData: { name: '', examType: '', studyStyle: '' },

    selectedRoom: null,
    goal: '',
    timer: 25*60,
    timerRunning: false,
    pomPhase: 'work',
    pomCount: 0,
    sessionStart: null,
    customTime: 25,
    timerMode: 'pomodoro',

    joinRoomFilter: '',
    showCreateModal: false,
    createRoomData: { name: '', topic: '', interest: '' },
    activeJoinRoom: null,

    proof: '',
    aiResult: null,
    ambient: null,
    notification: null,
};

let timerIv = null;
let notifTO = null;
let landingScrollTween = null;

// ─── LIQUID PARTICLE CURSOR ──────────────────────────────────────────────────
function initLiquidCursor() {
    const container = document.getElementById('cursor-container');
    const numTrails = 12;
    const trails = [];

    for (let i = 0; i < numTrails; i++) {
        const div = document.createElement('div');
        div.className = 'cursor-trail';
        // Size decreases for trail effect
        const size = 30 - (i * 2);
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        // Opacity mapping
        div.style.opacity = 1 - (i / numTrails);
        container.appendChild(div);
        trails.push(div);
    }

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let pos = [];
    for (let i = 0; i < numTrails; i++) pos.push({ x: mouse.x, y: mouse.y });

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    gsap.ticker.add(() => {
        // Leader follows mouse strictly
        pos[0].x += (mouse.x - pos[0].x) * 0.4;
        pos[0].y += (mouse.y - pos[0].y) * 0.4;
        gsap.set(trails[0], { x: pos[0].x, y: pos[0].y });

        // Followers follow the one ahead of them
        for (let i = 1; i < numTrails; i++) {
            pos[i].x += (pos[i - 1].x - pos[i].x) * 0.35;
            pos[i].y += (pos[i - 1].y - pos[i].y) * 0.35;
            gsap.set(trails[i], { x: pos[i].x, y: pos[i].y });
        }
    });
}
initLiquidCursor();

// ─── AUDIO SYSTEM ─────────────────────────────────────────────────────────────
let audioCtx = null, gainNode = null, sourceNode = null;
function ensureAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        gainNode = audioCtx.createGain();
        gainNode.connect(audioCtx.destination);
        gainNode.gain.value = 0.4;
    }
}
function stopAudio() {
    if (sourceNode) { try { sourceNode.stop(); } catch(e){} sourceNode = null; }
}
function startAudio(type) {
    ensureAudio();
    stopAudio();
    const buf = audioCtx.createBuffer(1, audioCtx.sampleRate * 3, audioCtx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
        if (type === 'rain') data[i] = (Math.random()*2-1) * 0.6 * (Math.random() > 0.98 ? 3 : 1);
        else if (type === 'cafe') data[i] = (Math.random()*2-1) * 0.3 + Math.sin(i*0.001)*0.05;
        else data[i] = (Math.random()*2-1) * 0.5;
    }
    sourceNode = audioCtx.createBufferSource();
    sourceNode.buffer = buf;
    sourceNode.loop = true;
    sourceNode.connect(gainNode);
    sourceNode.start();
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const lsGet = (k) => { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };
const fmt = s => `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;
const getJoinRooms = () => (lsGet('ch_join_rooms') || []).filter(r => Date.now() - r.createdAt < 4 * 60 * 60 * 1000);

function showNotif(msg) {
    S.notification = msg;
    clearTimeout(notifTO);
    let el = document.getElementById('notif-el');
    if (!el) {
        el = document.createElement('div');
        el.id = 'notif-el';
        el.className = 'fixed top-6 right-6 bg-zinc-900 border border-cyan-500/50 rounded-xl px-5 py-3 text-sm shadow-[0_0_20px_rgba(0,212,255,0.2)] z-[10000] flex items-center gap-3 transition-all duration-300 translate-x-0 opacity-100';
        document.body.appendChild(el);
    }
    el.innerHTML = `<span class="text-cyan-400 w-4 h-4">${I.bolt}</span>${msg}`;
    notifTO = setTimeout(() => { 
        if(el) { el.classList.add('opacity-0', 'translate-x-4'); setTimeout(() => el.remove(), 300); }
    }, 4000);
}

// ─── RENDER DISPATCH ──────────────────────────────────────────────────────────
const app = document.getElementById('app');
function render() {
    if (S.screen === 'landing') renderLanding();
    else if (S.screen === 'setup') renderSetup();
    else if (S.screen === 'session') renderSession();
    else if (S.screen === 'accountability') renderAccountability();
    else renderAppShell();
}

// ─── VIEW: LANDING (HORIZONTAL GSAP) ──────────────────────────────────────────
function renderLanding() {
    // Structure similar to UX Studio (horizontal scroll spy)
    app.innerHTML = `
    <nav class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 md:px-16 py-6 text-white mix-blend-difference">
        <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center">${I.bolt}</div>
            <span class="font-bold text-xl tracking-tighter">CORTEX HUB</span>
        </div>
        <ul class="hidden md:flex gap-8 font-medium uppercase text-sm tracking-widest text-white/60">
            <li><a href="#" class="nav-link transition-colors hover:text-white" data-index="0">Focus</a></li>
            <li><a href="#" class="nav-link transition-colors hover:text-white" data-index="1">Prove It</a></li>
            <li><a href="#" class="nav-link transition-colors hover:text-white" data-index="2">Live Rooms</a></li>
            <li><a href="#" class="nav-link transition-colors hover:text-white" data-index="3">Join</a></li>
        </ul>
        <button data-action="start" class="bg-white text-black px-6 py-2 rounded-full font-bold uppercase tracking-wide hover:scale-105 transition-transform">Enter Hub</button>
    </nav>

    <section id="horizontal" class="h-screen overflow-hidden bg-black">
        <div id="scroll-container" class="flex h-screen w-max">
            
            <div class="panel w-screen h-screen shrink-0 bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
                <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.1),transparent_50%)]"></div>
                <h1 class="text-[12vw] font-display leading-none tracking-tight">FOCUS.</h1>
                <p class="mt-4 text-xl md:text-2xl text-white/60 font-light max-w-2xl text-center px-6">The study platform that actually holds you accountable. No shortcuts.</p>
            </div>

            <div class="panel w-screen h-screen shrink-0 bg-zinc-950 text-white flex flex-col items-center justify-center border-l border-white/10 relative">
                <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(108,92,231,0.1),transparent_50%)]"></div>
                <h1 class="text-[12vw] font-display leading-none tracking-tight">PROVE IT.</h1>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl px-6">
                    <div class="glass-panel p-8 text-center"><div class="text-cyan-400 mb-4 flex justify-center">${I.robot}</div><h3 class="font-bold text-xl mb-2">AI Accountability</h3><p class="text-white/60">Every session graded by AI.</p></div>
                    <div class="glass-panel p-8 text-center"><div class="text-indigo-400 mb-4 flex justify-center">${I.clock}</div><h3 class="font-bold text-xl mb-2">Pomodoro Native</h3><p class="text-white/60">Built-in 25+5 focus cycles.</p></div>
                    <div class="glass-panel p-8 text-center"><div class="text-emerald-400 mb-4 flex justify-center">${I.trophy}</div><h3 class="font-bold text-xl mb-2">Live Leaderboard</h3><p class="text-white/60">Compete globally.</p></div>
                </div>
            </div>

            <div class="panel w-screen h-screen shrink-0 bg-neutral-900 text-white flex flex-col items-center justify-center border-l border-white/10">
                <h1 class="text-[12vw] font-display leading-none tracking-tight">LIVE ROOMS</h1>
                <p class="mt-4 text-xl text-white/60">Study live with peers. JEE, NEET, UPSC, & More.</p>
            </div>

            <div class="panel w-screen h-screen shrink-0 bg-white text-black flex flex-col items-center justify-center border-l border-black/10">
                <h1 class="text-[12vw] font-display leading-none tracking-tight">GROW.</h1>
                <button data-action="start" class="mt-8 bg-black text-white px-10 py-4 rounded-full font-bold text-xl hover:scale-105 transition-transform flex items-center gap-3">
                    Launch Cortex Hub ${I.arrowR}
                </button>
            </div>

        </div>
    </section>`;

    // Initialize Horizontal GSAP Scroll
    const container = document.querySelector("#scroll-container");
    const panels = gsap.utils.toArray(".panel");
    const navLinks = gsap.utils.toArray(".nav-link");

    // Clear previous ScrollTriggers if re-rendering
    ScrollTrigger.getAll().forEach(t => t.kill());

    landingScrollTween = gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#horizontal",
            pin: true,
            scrub: 1,
            end: () => "+=" + (container.offsetWidth - window.innerWidth),
            onUpdate: (self) => {
                const currentIndex = Math.round(self.progress * (panels.length - 1));
                navLinks.forEach((link, i) => {
                    if (i === currentIndex) link.classList.add("active");
                    else link.classList.remove("active");
                });
            }
        }
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const index = parseInt(link.getAttribute("data-index"));
            const totalScroll = container.offsetWidth - window.innerWidth;
            const targetPos = landingScrollTween.scrollTrigger.start + (index / (panels.length - 1)) * totalScroll;
            gsap.to(window, { duration: 1, scrollTo: targetPos, ease: "power2.inOut" });
        });
    });
}

// ─── VIEW: SETUP ──────────────────────────────────────────────────────────────
function renderSetup() {
    ScrollTrigger.getAll().forEach(t => t.kill()); // Kill scroll effects
    window.scrollTo(0,0);

    const d = S.setupData;
    const step = S.setupStep;

    const steps = [
        { title: "What's your name?", ok: d.name.trim().length > 1, 
          body: `<input id="inp-name" value="${d.name}" placeholder="Enter your name..." class="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-lg focus:border-cyan-400 focus:outline-none transition-colors">` },
        { title: 'What are you preparing for?', ok: !!d.examType, 
          body: `<div class="grid grid-cols-2 gap-3">${['JEE','UPSC','NEET','College','GATE','Custom'].map(e => 
            `<button class="p-4 rounded-xl border transition-all ${d.examType===e ? 'bg-cyan-500/20 border-cyan-400 text-cyan-400' : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'}" data-action="exam" data-val="${e}">${e}</button>`).join('')}</div>` },
        { title: 'How do you study best?', ok: !!d.studyStyle, 
          body: `<div class="flex flex-col gap-3">${[
            { id:'visual', icon: I.eye, title:'Visual Learner', desc:'Diagrams & structured notes' },
            { id:'revision', icon: I.refresh, title:'Revision Mode', desc:'Repeat & reinforce concepts' },
            { id:'problem', icon: I.target, title:'Problem Solver', desc:'Practice questions & mocks' }
          ].map(s => 
            `<button class="flex items-center gap-4 p-4 rounded-xl border text-left transition-all ${d.studyStyle===s.id ? 'bg-indigo-500/20 border-indigo-400' : 'bg-white/5 border-white/10 hover:bg-white/10'}" data-action="style" data-val="${s.id}">
                <div class="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${d.studyStyle===s.id ? 'bg-indigo-500/30 text-indigo-400' : 'bg-white/5 text-white/50'}">${s.icon}</div>
                <div><div class="font-bold text-lg">${s.title}</div><div class="text-sm text-white/50">${s.desc}</div></div>
            </button>`).join('')}</div>` }
    ];

    const cur = steps[step];
    app.innerHTML = `
    <div class="min-h-screen bg-black flex items-center justify-center p-6">
        <div class="w-full max-w-md animate-[fadeIn_0.5s_ease]">
            <div class="flex items-center gap-3 mb-10">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center text-white">${I.bolt}</div>
                <span class="font-display text-2xl tracking-wide">CORTEX HUB</span>
            </div>
            <div class="flex gap-2 mb-8">
                ${steps.map((_,i) => `<div class="flex-1 h-1 rounded-full ${i<=step ? 'bg-gradient-to-r from-cyan-400 to-indigo-500' : 'bg-white/10'}"></div>`).join('')}
            </div>
            <h2 class="font-display text-4xl mb-8">${cur.title}</h2>
            ${cur.body}
            <button id="setup-next" data-action="setup-next" ${cur.ok?'':'disabled'} 
                class="w-full mt-8 p-4 rounded-xl font-bold flex justify-center items-center gap-2 transition-all ${cur.ok ? 'bg-white text-black hover:scale-[1.02]' : 'bg-white/10 text-white/30 cursor-not-allowed'}">
                ${step < steps.length-1 ? `Continue ${I.arrowR}` : `${I.bolt} Enter Cortex Hub`}
            </button>
            ${step > 0 ? `<button data-action="setup-back" class="w-full mt-4 p-3 text-sm text-white/50 hover:text-white flex justify-center items-center gap-2">${I.arrowL} Back</button>` : ''}
        </div>
    </div>`;

    const nameInp = document.getElementById('inp-name');
    if(nameInp) {
        nameInp.addEventListener('input', e => {
            S.setupData.name = e.target.value;
            const ok = S.setupData.name.trim().length > 1;
            const btn = document.getElementById('setup-next');
            btn.disabled = !ok;
            btn.className = `w-full mt-8 p-4 rounded-xl font-bold flex justify-center items-center gap-2 transition-all ${ok ? 'bg-white text-black hover:scale-[1.02]' : 'bg-white/10 text-white/30 cursor-not-allowed'}`;
        });
        nameInp.focus();
    }
}

// ─── VIEW: APP SHELL ──────────────────────────────────────────────────────────
function renderAppShell() {
    ScrollTrigger.getAll().forEach(t => t.kill());
    window.scrollTo(0,0);
    document.body.style.overflow = 'hidden'; // Make app shell full height, scroll inside main

    const navItems = [
        { id:'rooms', icon: I.grid, label:'Rooms' },
        { id:'join-room', icon: I.video, label:'Join Room' },
        { id:'dashboard', icon: I.chart, label:'Dashboard' },
    ];

    let content = '';
    if (S.activeNav === 'rooms' && !S.selectedRoom) content = renderRooms();
    if (S.activeNav === 'goalset' && S.selectedRoom) content = renderGoalSet();
    if (S.activeNav === 'join-room') content = renderJoinRoom();
    if (S.activeNav === 'dashboard') content = renderDashboard();

    app.innerHTML = `
    <div class="flex h-screen bg-[#050505] text-white overflow-hidden">
        <nav class="w-20 md:w-64 border-r border-white/10 flex flex-col p-4 bg-black/50 z-20 shrink-0">
            <div class="flex items-center gap-3 mb-10 md:px-2">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,212,255,0.4)]">${I.bolt}</div>
                <span class="font-display text-2xl hidden md:block">CORTEX</span>
            </div>
            <div class="flex flex-col gap-2">
                ${navItems.map(n => `
                <button class="flex items-center gap-4 p-3 md:px-4 rounded-xl transition-all ${S.activeNav===n.id || (S.activeNav==='goalset'&&n.id==='rooms') ? 'bg-cyan-500/10 text-cyan-400' : 'text-white/60 hover:bg-white/5 hover:text-white'}" data-action="nav" data-nav="${n.id}">
                    <div class="w-6 h-6 shrink-0">${n.icon}</div>
                    <span class="font-medium hidden md:block">${n.label}</span>
                </button>`).join('')}
            </div>
            <div class="mt-auto pt-4 border-t border-white/10 md:px-2 flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-lg shrink-0 border-2 border-indigo-500/30">
                    ${(S.user?.name?.[0]||'U').toUpperCase()}
                </div>
                <div class="hidden md:block truncate text-sm font-medium">${S.user?.name || 'User'}</div>
            </div>
        </nav>

        <main class="flex-1 overflow-y-auto relative" id="mc">
            <div class="max-w-5xl mx-auto p-6 md:p-12 pb-24 animate-[fadeIn_0.3s_ease]">
                ${content}
            </div>
        </main>
    </div>
    ${S.showCreateModal ? renderCreateRoomModal() : ''}`;

    // Rebind inputs
    const filterInp = document.getElementById('jr-filter');
    if (filterInp) filterInp.addEventListener('input', e => { S.joinRoomFilter = e.target.value; renderAppShell(); });
    const rnInput = document.getElementById('cr-name');
    if (rnInput) rnInput.addEventListener('input', e => { S.createRoomData.name = e.target.value; });
}

// ─── PARTIAL: ROOMS ───────────────────────────────────────────────────────────
function renderRooms() {
    return `
    <div class="mb-10">
        <h2 class="font-display text-5xl mb-2">FOCUS ARENAS</h2>
        <p class="text-white/60">Choose an environment that matches your cognitive load.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${ROOMS.map(room => `
        <button class="glass-panel p-6 text-left hover:-translate-y-1 transition-all group ${room.bg} border-transparent hover:border-current ${room.color}" data-action="select-room" data-room="${room.id}">
            <div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5 ${room.color}">${I[room.icon]}</div>
            <h3 class="font-bold text-xl text-white mb-2">${room.name}</h3>
            <p class="text-sm text-white/60 mb-6 leading-relaxed">${room.desc}</p>
            <div class="flex items-center gap-2 text-xs text-white/40">
                <span class="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse"></span>
                ${Math.floor(Math.random()*20)+5} studying now
            </div>
        </button>`).join('')}
    </div>`;
}

// ─── PARTIAL: GOAL SET ────────────────────────────────────────────────────────
function renderGoalSet() {
    const room = S.selectedRoom;
    return `
    <div class="max-w-2xl mx-auto">
        <button class="text-white/50 hover:text-white flex items-center gap-2 mb-8 text-sm transition-colors" data-action="back-rooms">${I.arrowL} Back to Arenas</button>
        
        <div class="glass-panel p-6 mb-6 ${room.bg} border-${room.color.split('-')[1]}-500/30 flex items-center gap-5">
            <div class="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center ${room.color} shrink-0">${I[room.icon]}</div>
            <div>
                <h2 class="font-display text-2xl">${room.name}</h2>
                <p class="text-sm text-white/60">${room.desc}</p>
            </div>
        </div>

        <div class="glass-panel p-8 mb-6">
            <div class="flex items-center gap-2 text-xs font-bold tracking-widest text-white/50 uppercase mb-4">${I.target} Set Intent</div>
            <textarea id="goal-inp" rows="3" class="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:border-cyan-400 focus:outline-none resize-none" placeholder="What exactly will you accomplish in this session?"></textarea>
        </div>

        <div class="glass-panel p-8 mb-8">
            <div class="flex items-center gap-2 text-xs font-bold tracking-widest text-white/50 uppercase mb-4">${I.clock} Timer Mode</div>
            <div class="flex gap-4">
                <button class="flex-1 py-3 rounded-xl border flex justify-center items-center gap-2 transition-all ${S.timerMode==='pomodoro'?'bg-cyan-500/20 border-cyan-400 text-cyan-400':'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'}" data-action="timer-mode" data-val="pomodoro">${I.clock} Pomodoro (25m)</button>
                <button class="flex-1 py-3 rounded-xl border flex justify-center items-center gap-2 transition-all ${S.timerMode==='custom'?'bg-cyan-500/20 border-cyan-400 text-cyan-400':'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'}" data-action="timer-mode" data-val="custom">${I.edit} Custom</button>
            </div>
            ${S.timerMode === 'custom' ? `
            <div class="mt-6 flex items-center gap-4 bg-black/40 p-4 rounded-xl border border-white/10 w-max">
                <input type="number" id="custom-time" value="${S.customTime}" min="1" max="180" class="w-16 bg-transparent text-2xl font-bold text-center focus:outline-none">
                <span class="text-white/50">minutes</span>
            </div>` : ''}
        </div>

        <button class="w-full py-4 rounded-xl bg-white text-black font-bold text-lg flex justify-center items-center gap-3 hover:scale-[1.02] transition-transform" id="start-btn" data-action="start-session">
            ${I.play} Start Deep Work
        </button>
    </div>`;
}

// ─── VIEW: SESSION (TIMER) ────────────────────────────────────────────────────
function renderSession() {
    app.innerHTML = `
    <div class="h-screen w-full flex flex-col items-center justify-center relative p-6">
        <div class="w-full max-w-xl animate-[fadeIn_0.5s_ease]">
            <div class="flex justify-between items-center mb-12">
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center ${S.selectedRoom?.color||'text-cyan-400'}">${I[S.selectedRoom?.icon||'grid']}</div>
                    <div>
                        <h2 class="font-bold text-xl">${S.selectedRoom?.name||'Focus'}</h2>
                        <div class="text-sm text-white/50 flex gap-2"><span id="ph" class="${S.pomPhase==='work'?'text-cyan-400':'text-emerald-400'}">${S.pomPhase==='work'?'Deep Work':'Rest'}</span></div>
                    </div>
                </div>
                <button data-action="end-session" class="px-4 py-2 rounded-lg bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20 transition-colors flex items-center gap-2 text-sm font-bold">
                    ${I.stop} End
                </button>
            </div>

            <div class="flex justify-center mb-12 relative">
                <svg class="timer-svg" width="280" height="280" viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="88" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="6"/>
                    <circle id="tc" cx="100" cy="100" r="88" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" class="${S.pomPhase==='work'?'text-cyan-400':'text-emerald-400'} transition-all duration-1000 ease-linear"/>
                </svg>
                <div class="absolute inset-0 flex flex-col items-center justify-center">
                    <div id="td" class="font-display text-7xl tracking-wider ${S.pomPhase==='work'?'text-cyan-400':'text-emerald-400'} drop-shadow-[0_0_15px_currentColor]">${fmt(S.timer)}</div>
                </div>
            </div>

            <div class="flex justify-center mb-10">
                <button id="play-pause" data-action="toggle-timer" class="px-10 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-all ${S.timerRunning ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-white text-black hover:scale-105'}">
                    ${S.timerRunning ? I.pause : I.play} ${S.timerRunning ? 'Pause' : 'Resume'}
                </button>
            </div>

            <div class="glass-panel p-6 mb-6">
                <div class="text-xs font-bold tracking-widest text-white/50 uppercase mb-2">${I.target} Current Goal</div>
                <div class="text-white/90 font-medium">${S.goal}</div>
            </div>

            <div class="grid grid-cols-2 gap-4">
                <div class="glass-panel p-6">
                    <div class="text-xs font-bold tracking-widest text-white/50 uppercase mb-4 flex items-center gap-2">${I.headphones} Ambient</div>
                    <div class="flex flex-col gap-2">
                        ${[['rain','Rain',I.rain],['cafe','Cafe',I.coffee],['white','White Noise',I.wave]].map(([id,l,icon]) => `
                            <button class="ambient-btn flex items-center gap-3 p-2 rounded-lg text-sm text-left transition-colors ${S.ambient===id?'bg-indigo-500/20 text-indigo-400':'text-white/60 hover:bg-white/10'}" data-action="ambient" data-val="${id}">
                                <div class="w-5 h-5">${icon}</div> ${l} ${S.ambient===id?'●':''}
                            </button>`).join('')}
                    </div>
                </div>
                <div class="glass-panel p-6">
                    <div class="text-xs font-bold tracking-widest text-white/50 uppercase mb-4 flex items-center gap-2">${I.users} Peers</div>
                    <div class="flex -space-x-2 mb-3">
                        ${['A','R','K'].map((l,i) => `<div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 border-black" style="background:hsl(${i*70+200},50%,40%)">${l}</div>`).join('')}
                    </div>
                    <div class="text-xs text-white/50">+8 others</div>
                </div>
            </div>
        </div>
    </div>`;
    updateTimerDOM();
}

function startTimer() {
    clearInterval(timerIv);
    timerIv = setInterval(() => {
        if (!S.timerRunning) return;
        S.timer--;
        updateTimerDOM();
        if (S.timer <= 0) {
            if (S.timerMode === 'pomodoro') {
                S.pomPhase = S.pomPhase === 'work' ? 'break' : 'work';
                if(S.pomPhase === 'break') S.pomCount++;
                S.timer = S.pomPhase === 'work' ? 25*60 : 5*60;
                showNotif(S.pomPhase==='break' ? '🎉 Pomodoro done! Break time.' : '💪 Break over! Focus.');
                renderSession(); // Re-render for color changes
            } else {
                S.timerRunning = false;
                showNotif('⏰ Session complete!');
                S.timer = 0;
            }
        }
    }, 1000);
}

function updateTimerDOM() {
    const td = document.getElementById('td'), tc = document.getElementById('tc');
    if (td) td.textContent = fmt(S.timer);
    if (tc) {
        const total = S.timerMode === 'pomodoro' ? (S.pomPhase === 'work' ? 25*60 : 5*60) : S.customTime*60;
        const prog = Math.min((total - S.timer)/total, 1);
        tc.style.strokeDasharray = 2 * Math.PI * 88;
        tc.style.strokeDashoffset = (2 * Math.PI * 88) * (1 - prog);
    }
}

// ─── VIEW: ACCOUNTABILITY ─────────────────────────────────────────────────────
function renderAccountability() {
    const dur = S.sessionStart ? Math.round((Date.now()-S.sessionStart)/60000) : S.customTime;
    
    app.innerHTML = `
    <div class="min-h-screen flex items-center justify-center p-6 bg-[#050505]">
        <div class="w-full max-w-2xl animate-[fadeIn_0.5s_ease]">
            <div class="text-center mb-10">
                <h1 class="font-display text-6xl mb-4 text-white">PROVE YOUR WORK</h1>
                <p class="text-white/60 text-lg">You studied for <span class="text-white font-bold">${dur} minutes</span>. What did you accomplish?</p>
            </div>
            
            <div class="glass-panel p-6 mb-6">
                <div class="text-xs font-bold tracking-widest text-white/50 uppercase mb-2">Stated Goal</div>
                <div class="p-4 bg-cyan-500/10 border-l-4 border-cyan-400 rounded-r-xl font-medium">${S.goal}</div>
            </div>

            <div class="glass-panel p-8 mb-8">
                <div class="text-xs font-bold tracking-widest text-white/50 uppercase mb-4 flex items-center gap-2">${I.edit} Execution Proof</div>
                <textarea id="proof-inp" rows="5" class="w-full bg-black/40 border border-white/10 rounded-xl p-5 text-white focus:border-cyan-400 focus:outline-none resize-none" placeholder="Be honest. AI will evaluate this. e.g., 'Completed 20 physics problems...'"></textarea>
            </div>

            <button id="submit-btn" data-action="submit-proof" class="w-full py-5 rounded-xl bg-white text-black font-bold text-lg flex justify-center items-center gap-3 hover:scale-[1.02] transition-transform">
                ${I.robot} Submit for AI Review
            </button>
        </div>
    </div>`;
}

// ─── VIEW: DASHBOARD ──────────────────────────────────────────────────────────
function renderDashboard() {
    const sDone = S.sessions.filter(s=>s.status==='completed');
    const hrs = Math.round(sDone.reduce((a,c)=>a+(c.duration||0),0)/60*10)/10;
    
    return `
    <div class="mb-10">
        <h2 class="font-display text-5xl mb-2">DASHBOARD</h2>
        <div class="flex items-center gap-3">
            <span class="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-md text-xs font-bold border border-amber-500/30">🔥 ${S.user?.streak||1} Day Streak</span>
            <span class="text-white/50 text-sm">Cortex Scholar Rank</span>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="glass-panel p-6 border-cyan-500/30">
            <div class="w-10 h-10 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">${I.clock}</div>
            <div class="font-display text-4xl text-cyan-400 mb-1">${hrs}h</div>
            <div class="text-sm text-white/50 font-bold uppercase tracking-wider">Total Focus</div>
        </div>
        <div class="glass-panel p-6 border-emerald-500/30">
            <div class="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">${I.check}</div>
            <div class="font-display text-4xl text-emerald-400 mb-1">${sDone.length}</div>
            <div class="text-sm text-white/50 font-bold uppercase tracking-wider">Sessions</div>
        </div>
        <div class="glass-panel p-6 border-indigo-500/30">
            <div class="w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">${I.robot}</div>
            <div class="font-display text-4xl text-indigo-400 mb-1">92%</div>
            <div class="text-sm text-white/50 font-bold uppercase tracking-wider">AI Avg Score</div>
        </div>
    </div>

    <div class="glass-panel p-8 mb-8">
        <div class="text-xs font-bold tracking-widest text-white/50 uppercase mb-6 flex items-center gap-2">${I.edit} Recent Sessions</div>
        <div class="flex flex-col gap-4">
            ${S.sessions.length===0 ? '<p class="text-white/40 text-center py-8">No sessions yet.</p>' : 
              S.sessions.slice(0,5).map(s => `
                <div class="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                    <div class="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${s.status==='completed'?'bg-emerald-500/20 text-emerald-400':'bg-red-500/20 text-red-400'}">${s.status==='completed'?I.check:I.xcirc}</div>
                    <div class="flex-1 min-w-0">
                        <div class="font-bold truncate">${s.goal}</div>
                        <div class="text-xs text-white/50 mt-1">${s.room} · ${s.duration}m</div>
                    </div>
                    <div class="text-xs text-white/40">${new Date().toLocaleDateString()}</div>
                </div>
              `).join('')}
        </div>
    </div>`;
}

// ─── VIEW: JOIN ROOM ──────────────────────────────────────────────────────────
function renderJoinRoom() {
    const all = getJoinRooms();
    const filter = S.joinRoomFilter.toLowerCase();
    const filtered = filter ? all.filter(r => r.name.toLowerCase().includes(filter) || r.interest.toLowerCase().includes(filter)) : all;

    return `
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
            <h2 class="font-display text-5xl mb-2">LIVE ROOMS</h2>
            <p class="text-white/60">Study live via ZegoCloud.</p>
        </div>
        <button data-action="create-room" class="bg-white text-black px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform">
            ${I.plus} Create Room
        </button>
    </div>

    <div class="relative mb-6">
        <div class="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 w-5 h-5">${I.hash}</div>
        <input id="jr-filter" value="${S.joinRoomFilter}" placeholder="Search topics..." class="w-full bg-glass-panel border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-cyan-400 bg-white/5 backdrop-blur-md outline-none">
    </div>

    <div class="flex flex-wrap gap-2 mb-8">
        <button class="px-4 py-2 rounded-full text-sm font-medium border transition-colors ${S.joinRoomFilter===''?'bg-cyan-500/20 border-cyan-400 text-cyan-400':'bg-transparent border-white/20 text-white/60 hover:border-white/50'}" data-action="jr-filter" data-val="">All</button>
        ${INTEREST_TAGS.map(t => `<button class="px-4 py-2 rounded-full text-sm font-medium border transition-colors ${S.joinRoomFilter===t?'bg-cyan-500/20 border-cyan-400 text-cyan-400':'bg-transparent border-white/20 text-white/60 hover:border-white/50'}" data-action="jr-filter" data-val="${t}">${t}</button>`).join('')}
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${filtered.length === 0 ? `<div class="col-span-full text-center py-20 text-white/40 font-display text-2xl tracking-widest">No rooms active. Create one.</div>` : 
        filtered.map(r => `
            <div class="glass-panel p-6 flex flex-col relative overflow-hidden group">
                <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-bl-full"></div>
                <div class="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold w-max mb-4 border border-white/10">${r.interest}</div>
                <h3 class="font-bold text-xl mb-1">${r.name}</h3>
                <p class="text-sm text-white/50 mb-6 flex-1">${r.topic||'General study'}</p>
                <div class="flex items-center justify-between mb-4">
                    <div class="flex -space-x-2">
                        <div class="w-8 h-8 rounded-full bg-cyan-600 border-2 border-black flex items-center justify-center text-xs font-bold">A</div>
                    </div>
                    <div class="flex items-center gap-2 text-xs text-emerald-400 font-bold tracking-widest uppercase">
                        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Live
                    </div>
                </div>
                <button class="w-full py-3 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-bold flex justify-center items-center gap-2 hover:bg-cyan-500/20 transition-colors" data-action="join-room">
                    ${I.video} Join Call
                </button>
            </div>
        `).join('')}
    </div>`;
}

function renderCreateRoomModal() {
    return `
    <div class="fixed inset-0 bg-black/80 backdrop-blur-sm z-[5000] flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease]">
        <div class="glass-panel w-full max-w-md p-8 bg-zinc-950/90 relative">
            <button data-action="close-modal" class="absolute top-6 right-6 text-white/50 hover:text-white p-2">${I.x}</button>
            <h2 class="font-display text-4xl mb-6">Create Arena</h2>
            
            <div class="mb-5">
                <label class="text-xs font-bold tracking-widest text-white/50 uppercase block mb-2">Room Name</label>
                <input id="cr-name" class="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white focus:border-cyan-400 outline-none" placeholder="e.g. Physics Grind">
            </div>
            
            <div class="mb-8">
                <label class="text-xs font-bold tracking-widest text-white/50 uppercase block mb-2">Interest</label>
                <div class="flex flex-wrap gap-2 max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                    ${INTEREST_TAGS.map(t => `<button class="px-3 py-1 rounded-full text-xs font-medium border ${S.createRoomData.interest===t?'bg-cyan-500/20 border-cyan-400 text-cyan-400':'border-white/10 text-white/60'}" data-action="cr-interest" data-val="${t}">${t}</button>`).join('')}
                </div>
            </div>

            <button data-action="confirm-create-room" class="w-full py-4 rounded-xl bg-white text-black font-bold flex justify-center items-center gap-2 hover:scale-[1.02] transition-transform">
                ${I.plus} Launch Room
            </button>
        </div>
    </div>`;
}

// ─── EVENTS & INTERACTIVITY ───────────────────────────────────────────────────
document.addEventListener('click', async e => {
    const el = e.target.closest('[data-action]');
    if (!el) return;
    const action = el.dataset.action;

    if (action === 'start') {
        const u = lsGet('ch_user');
        if (u) { S.user = u; S.screen = 'app'; S.activeNav = 'rooms'; render(); } 
        else { S.screen = 'setup'; render(); }
    }
    else if (action === 'exam') { S.setupData.examType = el.dataset.val; renderSetup(); }
    else if (action === 'style') { S.setupData.studyStyle = el.dataset.val; renderSetup(); }
    else if (action === 'setup-back') { if(S.setupStep > 0) { S.setupStep--; renderSetup(); } }
    else if (action === 'setup-next') {
        if (S.setupStep < 2) { S.setupStep++; renderSetup(); }
        else {
            S.user = { ...S.setupData, _id: Date.now(), streak: 1 };
            lsSet('ch_user', S.user);
            S.screen = 'app'; S.activeNav = 'rooms'; render();
        }
    }
    else if (action === 'nav') { S.activeNav = el.dataset.nav; S.selectedRoom = null; renderAppShell(); }
    else if (action === 'select-room') { S.selectedRoom = ROOMS.find(r=>r.id===el.dataset.room); S.activeNav = 'goalset'; renderAppShell(); }
    else if (action === 'back-rooms') { S.selectedRoom = null; S.activeNav = 'rooms'; renderAppShell(); }
    else if (action === 'timer-mode') { S.timerMode = el.dataset.val; renderAppShell(); }
    else if (action === 'start-session') {
        const g = document.getElementById('goal-inp');
        if(g) S.goal = g.value;
        if(!S.goal) { showNotif('Please set an intent.'); return; }
        
        S.sessionStart = Date.now();
        S.timerMode === 'custom' ? S.customTime = parseInt(document.getElementById('custom-time').value)||25 : null;
        S.timer = S.timerMode === 'pomodoro' ? 25*60 : S.customTime*60;
        S.timerRunning = true; S.pomPhase = 'work'; S.pomCount = 0;
        S.screen = 'session'; render(); startTimer();
    }
    else if (action === 'toggle-timer') {
        S.timerRunning = !S.timerRunning;
        renderSession(); // Re-render to update button state
        S.timerRunning ? startTimer() : clearInterval(timerIv);
    }
    else if (action === 'ambient') {
        const t = el.dataset.val;
        if (S.ambient === t) { stopAudio(); S.ambient = null; } 
        else { startAudio(t); S.ambient = t; }
        renderSession();
    }
    else if (action === 'end-session') {
        clearInterval(timerIv); S.timerRunning = false; stopAudio(); S.ambient = null;
        S.screen = 'accountability'; render();
    }
    else if (action === 'submit-proof') {
        const p = document.getElementById('proof-inp');
        if(p) S.proof = p.value;
        if(!S.proof) { showNotif('Provide proof.'); return; }
        
        const btn = document.getElementById('submit-btn');
        btn.innerHTML = 'Analyzing...';
        btn.disabled = true;
        
        // Mock AI Evaluation
        setTimeout(() => {
            const passed = S.proof.length > 20;
            S.sessions.unshift({
                room: S.selectedRoom?.name || 'Focus',
                goal: S.goal,
                duration: S.sessionStart ? Math.round((Date.now()-S.sessionStart)/60000) : S.customTime,
                status: passed ? 'completed' : 'failed',
                createdAt: Date.now()
            });
            S.goal = ''; S.proof = ''; S.selectedRoom = null;
            S.screen = 'app'; S.activeNav = 'dashboard';
            render();
            showNotif(passed ? 'Session verified and logged! 🏆' : 'Session recorded, but lack of proof noted.');
        }, 1500);
    }
    else if (action === 'create-room') { S.showCreateModal = true; renderAppShell(); }
    else if (action === 'close-modal') { S.showCreateModal = false; renderAppShell(); }
    else if (action === 'cr-interest') { S.createRoomData.interest = el.dataset.val; renderAppShell(); }
    else if (action === 'confirm-create-room') {
        const rn = document.getElementById('cr-name')?.value;
        if(!rn || !S.createRoomData.interest) { showNotif('Fill all fields'); return; }
        const r = getJoinRooms();
        r.unshift({ roomId: Date.now(), name: rn, interest: S.createRoomData.interest, createdAt: Date.now() });
        lsSet('ch_join_rooms', r);
        S.showCreateModal = false;
        renderAppShell();
        showNotif('Room created successfully!');
    }
    else if (action === 'join-room') {
        showNotif('ZegoCloud Integration required to join call.');
    }
    else if (action === 'jr-filter') {
        S.joinRoomFilter = el.dataset.val;
        renderAppShell();
    }
});

// Boot
render();
