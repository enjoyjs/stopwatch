class Stopwatch {
	private startTime: number | null = null;
	private pauseTime: number | null = null;
	private pauseDuration = 0;

	constructor(private readonly getCurrentTime = Date.now) {}

	start(): this {
		if (this.startTime === null) {
			this.startTime = this.getCurrentTime();
		} else if (this.pauseTime !== null) {
			this.pauseDuration += this.getCurrentTime() - this.pauseTime;
			this.pauseTime = null;
		}

		return this;
	}

	pause(): this {
		if (this.startTime !== null && this.pauseTime === null) {
			this.pauseTime = this.getCurrentTime();
		}

		return this;
	}

	reset(): this {
		if (this.startTime !== null && this.pauseTime !== null) {
			this.startTime = null;
			this.pauseTime = null;
			this.pauseDuration = 0;
		}

		return this;
	}

	isRunning(): boolean {
		return this.startTime !== null && this.pauseTime === null;
	}

	getTime(): number {
		if (this.startTime === null) {
			return 0;
		}

		const now =
			this.pauseTime === null ? this.getCurrentTime() : this.pauseTime;

		return now - this.startTime - this.pauseDuration;
	}
}

export default Stopwatch;
