const synths = [

  new Tone.Synth(),
  new Tone.Synth(),
  new Tone.Synth(),
];


synths[0].oscillator.type = 'triangle';
synths[1].oscillator.type = 'sine';
synths[2].oscillator.type = 'sawtooth';

const gain = new Tone.gain(0.5);
gain.toMaster();

synths.forEach(synth => synth.connect(gain));

//const $rows = document.body.querySelectorAll('div' > div'),

  notes = ['G5', 'E4', 'C3'];
let index = 0;

Tone.Transport.scheduleRepeat(repeat, '8n');
Tone.Transport.start();

function repeat(time) {
 let step = % 8;
 for (let i = 0; i < $rows.length; i++) {
    let synth = synth[i],
        note = notes[i]
        $row = $rows[i],
        $input =$rows.querySelector(`input:nth-child(${step + 1})`);
        if ($input.checked) synth.triggerAttackRelease(note, '8n', time);
  }
  index++;
}


















//var synth = new Tone.Synth().toMaster()
//const synth = new Tone.synth();
//synth.toMaster();
//synth.triggerAttackRelease('C4', '8n')
//synth.triggerAttackRelease('c4', '8n')
//const notes [
//  'c4', 'E4', 'G4',
//  'C5', 'E5', 'G5',
//];
//var index = 0;
//Tone.Transport.scheduleRepeat(tine => {
//  repeat(time);
//}, '8n');
