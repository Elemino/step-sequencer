//var synth = new Tone.Synth().toMaster()


const synth = new Tone.synth();
synth.toMaster();


//synth.triggerAttackRelease('C4', '8n')

synth.triggerAttackRelease('c4', '8n')
const notes [
  'c4', 'E4', 'G4',
  'C5', 'E5', 'G5',
];

var index = 0;

Tone.Transport.scheduleRepeat(tine => {
  repeat(time);
}, '8n');
