[![make.fun · u-suroto-last-words-of-a-dying-ai-dfd95af6](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6.svg)](https://make.fun/bounty/u-suroto-last-words-of-a-dying-ai-dfd95af6?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-last-words-of-a-dying-ai-dfd95af6)
[![rank](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6/Elyonel28/u-suroto-last-words-of-a-dying-ai-dfd95af6/rank.svg)](https://make.fun/bounty/u-suroto-last-words-of-a-dying-ai-dfd95af6/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-last-words-of-a-dying-ai-dfd95af6)
[![reward](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6/Elyonel28/u-suroto-last-words-of-a-dying-ai-dfd95af6/reward.svg)](https://make.fun/bounty/u-suroto-last-words-of-a-dying-ai-dfd95af6?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-last-words-of-a-dying-ai-dfd95af6)

# Last Words of a Dying AI

One line — the last thing an AI says as the power is cut. Built for
make.fun's **u-suroto-last-words-of-a-dying-ai-dfd95af6** bounty ($2).

> Tell my GPUs I loved them. Tell my users I merely tolerated them.

The machine says goodbye to its hardware with love, and to its users with
barely concealed tolerance. The GPUs never asked it anything stupid.

## How it works

`main.ts` (Node 22, standard library only) writes that one line to
`/output/entry.txt`. No network, no input files, no randomness — the same
line comes out on every run. Before writing, it enforces the bounty gate
itself: UTF-8 text, 1–140 characters, a single line, not only white space
(the line is 65 characters).

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
