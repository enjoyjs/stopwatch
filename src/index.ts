class Stopwatch {
	private startTime: number | null = null;
	private pauseTime: number | null = null;
	private pauseDuration = 0;
	private lapStartTime: number | null = null;
	private lapPauseDuration = 0;

	constructor(private readonly getCurrentTime = Date.now) {}

	start(): this {
		if (this.startTime === null) {
			const now = this.getCurrentTime();

			this.startTime = now;
			this.lapStartTime = now;
		} else if (this.pauseTime !== null) {
			const pauseDuration = this.getCurrentTime() - this.pauseTime;

			this.pauseDuration += pauseDuration;
			this.lapPauseDuration += pauseDuration;
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
			this.lapStartTime = null;
			this.lapPauseDuration = 0;
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

	lap(): number {
		if (this.lapStartTime === null) {
			return 0;
		}

		const now =
			this.pauseTime === null ? this.getCurrentTime() : this.pauseTime;
		const lapTime = now - this.lapStartTime - this.lapPauseDuration;

		this.lapStartTime = now;
		this.lapPauseDuration = 0;

		return lapTime;
	}
}

export default Stopwatch;
