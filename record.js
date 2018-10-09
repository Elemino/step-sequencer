const audio = document.querySelector('audio');
const synth = new Tone.Synth();
const obj = Tone.context;

synth.toMaster();

const notes = 'CDEFGAB'. split('').map(n => `${n}4`);
let note = 0;
Tone.Transport.scheduleRepeat(time => {});