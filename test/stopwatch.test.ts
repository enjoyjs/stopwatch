import {strict as assert} from 'assert';
import {Stopwatch} from '../src';

const basic = (): void => {
	let mockReturnValue = 0;
	const mockFn = (): number => mockReturnValue;
	const sw = new Stopwatch(mockFn);

	assert(!sw.isRunning());
	assert(sw.getTime() === 0);

	sw.start();

	assert(sw.isRunning());
	assert(sw.getTime() === 0);
	mockReturnValue += 100;
	assert(sw.getTime() === 100);
	mockReturnValue += 150;
	assert(sw.getTime() === 250);
	mockReturnValue += 250;
	assert(sw.getTime() === 500);

	sw.pause();

	assert(!sw.isRunning());
	assert(sw.getTime() === 500);
	mockReturnValue += 150;
	assert(sw.getTime() === 500);

	sw.start();

	assert(sw.isRunning());
	assert(sw.getTime() === 500);
	mockReturnValue += 150;
	assert(sw.getTime() === 650);

	sw.reset();

	assert(sw.getTime() !== 0);

	sw.pause();
	sw.reset();

	assert(!sw.isRunning());
	assert(sw.getTime() === 0);
	mockReturnValue += 100;
	assert(sw.getTime() === 0);
};

const lap = (): void => {
	let mockReturnValue = 0;
	const mockFn = (): number => mockReturnValue;
	const sw = new Stopwatch(mockFn);

	assert(sw.lap() === 0);

	sw.start();

	assert(sw.lap() === 0);
	mockReturnValue += 100;
	assert(sw.lap() === 100);
	mockReturnValue += 200;
	assert(sw.lap() === 200);
	mockReturnValue += 300;

	sw.pause();

	mockReturnValue += 400;

	sw.start();

	mockReturnValue += 500;

	sw.pause();

	mockReturnValue += 600;
	assert(sw.lap() === 800);
	assert(sw.lap() === 0);
	assert(sw.lap() === 0);
	mockReturnValue += 700;

	sw.start();

	assert(sw.lap() === 0);
	mockReturnValue += 800;
	assert(sw.lap() === 800);
	assert(sw.lap() === 0);
	assert(sw.lap() === 0);
	mockReturnValue += 900;
	assert(sw.lap() === 900);
	assert(sw.getLapTimes().length === 5);
	mockReturnValue += 1000;

	sw.pause();
	sw.reset();
	sw.start();

	assert(sw.lap() === 0);
	assert(sw.getLapTimes().length === 0);
};

basic();
lap();
