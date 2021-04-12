# stopwatch

A stopwatch utility

## Install

```bash
npm i @enjoyjs/stopwatch
```

Then import this:

```ts
import Stopwatch from '@enjoyjs/stopwatch';
```

## API

### class: Stopwatch

```ts
const stopwatch = new Stopwatch();
```

Alternatively, you can use the current high resolution millisecond timestamp:

```ts
import { performance } from 'perf_hooks';

const stopwatch = new Stopwatch(performance.now);
```

#### stopwatch.start()

#### stopwatch.pause()

#### stopwatch.reset()

#### stopwatch.isRunning()

#### stopwatch.getTime()

#### stopwatch.lap()

#### stopwatch.getLapTimes()

## License

This package is licensed under the [MIT License](LICENSE).
