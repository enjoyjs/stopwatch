class Stopwatch {
	elapsedTime = 0;
	startTime = 0;
	pauseTime = 0;
	isRunning = false;

	start(): this {
		if (this.elapsedTime === 0) {
			this.startTime = Date.now();
		}

		if (!this.isRunning) {
			this.update();
			this.isRunning = true;
		}

		return this;
	}

	pause(): this {
		if (this.isRunning) {
			this.update();
			this.isRunning = false;
		}

		return this;
	}

	reset(): this {
		if (!this.isRunning) {
			this.elapsedTime = 0;
			this.pauseTime = 0;
		}

		return this;
	}

	update(): this {
		if (this.isRunning) {
			this.elapsedTime = Date.now() - this.startTime - this.pauseTime;
		} else if (this.elapsedTime > 0) {
			this.pauseTime = Date.now() - this.startTime - this.elapsedTime;
		}

		return this;
	}
}

export default Stopwatch;
