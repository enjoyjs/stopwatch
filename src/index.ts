class Stopwatch {
	startTime: number | null = null;
	elapsedTime = 0;
	pauseTime = 0;
	isRunning = false;

	start(): this {
		if (this.startTime === null) {
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
			this.startTime = null;
			this.elapsedTime = 0;
			this.pauseTime = 0;
		}

		return this;
	}

	update(): this {
		if (this.startTime === null) {
			return this;
		}

		if (this.isRunning) {
			this.elapsedTime = Date.now() - this.startTime - this.pauseTime;
		} else {
			this.pauseTime = Date.now() - this.startTime - this.elapsedTime;
		}

		return this;
	}
}

export default Stopwatch;
