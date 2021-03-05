class Stopwatch {
	elapsedTime = 0;
	startTime = 0;
	pauseTime = 0;
	paused = false;
	stopped = true;

	start(): this {
		if (this.stopped) {
			this.startTime = Date.now();
			this.pauseTime = 0;
		}

		this.paused = false;
		this.stopped = false;

		return this;
	}

	pause(): this {
		this.update();
		this.paused = true;

		return this;
	}

	stop(): this {
		this.update();
		this.stopped = true;

		return this;
	}

	update(): this {
		if (this.stopped) {
			return this;
		}

		if (this.paused) {
			this.pauseTime = Date.now() - this.startTime - this.elapsedTime;
		} else {
			this.elapsedTime = Date.now() - this.startTime - this.pauseTime;
		}

		return this;
	}
}

export default Stopwatch;
