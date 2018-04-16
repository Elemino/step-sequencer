const synths = [

  new Tone.Synth(),
  new Tone.Synth(),
  new Tone.Synth(),
];


synths[0].oscillator.type = 'triangle';
synths[1].oscillator.type = 'sine';
synths[2].oscillator.type = 'sawtooth';


synths.forEach(synth => synth.toMaster());

const $rows = document.body.querySelectorAll('div' > div');

Tone.Transport.scheduleRepeat(repeat, '8n');

  let index = 0;

function repeat(time) {

  for (let i = 0; i < $rows.length; i++) {
    let synth = synth[i],
        $row = $rows[]
        ;
  }
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
