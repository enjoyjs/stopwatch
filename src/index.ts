export class Stopwatch {
	private startTime: number | undefined;
	private pauseTime: number | undefined;
	private pauseDuration = 0;
	private lapStartTime: number | undefined;
	private lapPauseDuration = 0;
	private readonly lapTimes: number[] = [];

	constructor(private readonly getCurrentTime = Date.now) {}

	start(): this {
		if (this.startTime === undefined) {
			const now = this.getCurrentTime();

			this.startTime = now;
			this.lapStartTime = now;
		} else if (this.pauseTime !== undefined) {
			const pauseDuration = this.getCurrentTime() - this.pauseTime;

			this.pauseDuration += pauseDuration;
			this.lapPauseDuration += pauseDuration;
			this.pauseTime = undefined;
		}

		return this;
	}

	pause(): this {
		if (this.startTime !== undefined && this.pauseTime === undefined) {
			this.pauseTime = this.getCurrentTime();
		}

		return this;
	}

	reset(): this {
		if (this.startTime !== undefined && this.pauseTime !== undefined) {
			this.startTime = undefined;
			this.pauseTime = undefined;
			this.pauseDuration = 0;
			this.lapStartTime = undefined;
			this.lapPauseDuration = 0;
			this.lapTimes.length = 0;
		}

		return this;
	}

	isRunning(): boolean {
		return this.startTime !== undefined && this.pauseTime === undefined;
	}

	getTime(): number {
		if (this.startTime === undefined) {
			return 0;
		}

		const now = this.pauseTime ?? this.getCurrentTime();

		return now - this.startTime - this.pauseDuration;
	}

	lap(): number {
		if (this.lapStartTime === undefined) {
			return 0;
		}

		const now = this.pauseTime ?? this.getCurrentTime();
		const lapTime = now - this.lapStartTime - this.lapPauseDuration;

		if (lapTime > 0) {
			this.lapTimes.push(lapTime);
		}

		this.lapStartTime = now;
		this.lapPauseDuration = 0;

		return lapTime;
	}

	getLapTimes(): number[] {
		return Array.from(this.lapTimes);
	}
}

export default Stopwatch;
