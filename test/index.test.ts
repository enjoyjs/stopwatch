import Stopwatch from '../src';

const sw = new Stopwatch();
let i = 0;

sw.start();

const id = setInterval(() => {
	switch (i) {
		case 3:
			sw.pause();
			break;
		case 6:
			sw.start();
			break;
		case 9:
			sw.stop();
			clearInterval(id);
			break;
		default:
			break;
	}

	sw.update();
	console.log(i, sw);
	i++;
}, 100);
