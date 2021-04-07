import {strict as assert} from 'assert';
import Stopwatch from '../src';

let mockReturnValue = 0;
const mockFn = (): number => mockReturnValue;

const test = (): void => {
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

test();
