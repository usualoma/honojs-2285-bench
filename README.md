```
[ec2-user@ip-10-1-0-53 honojs-2285-bench]$ npm run bun:jit

> honojs-2285-bench@1.0.0 bun:jit
> BUN_JSC_jitPolicyScale=0.0 BUN_JSC_thresholdForOptimizeSoon=0.0 BUN_JSC_thresholdForJITSoon=0.0 bun run bench.mts

cpu: Intel(R) Xeon(R) Platinum 8259CL CPU @ 2.50GHz
runtime: bun 1.0.29 (x64-linux)

benchmark      time (avg)             (min … max)       p75       p99      p999
------------------------------------------------- -----------------------------
noop          233 ps/iter     (135 ps … 2'521 ns)    137 ps    241 ps   4.85 ns !
noop          188 ps/iter     (132 ps … 3'045 ns)    137 ps    225 ps   8.19 ns !
noop          179 ps/iter     (133 ps … 2'633 ns)    139 ps    257 ps   4.73 ns !
noop          222 ps/iter     (133 ps … 2'986 ns)    138 ps    262 ps   4.96 ns !
noop          206 ps/iter     (133 ps … 2'107 ns)    139 ps    236 ps    4.6 ns !
noop          159 ps/iter       (133 ps … 949 ns)    138 ps    235 ps    2.4 ns !
noop          216 ps/iter     (133 ps … 6'326 ns)    138 ps    273 ps   4.69 ns !
noop          166 ps/iter     (133 ps … 2'357 ns)    138 ps    257 ps    310 ps !
noop          162 ps/iter     (133 ps … 2'301 ns)    139 ps    202 ps    283 ps !
noop          159 ps/iter     (133 ps … 1'569 ns)    138 ps    209 ps    292 ps !
noop          173 ps/iter     (133 ps … 3'057 ns)    139 ps    217 ps    293 ps !
noop          163 ps/iter     (133 ps … 2'752 ns)    138 ps    210 ps    320 ps !
noop          161 ps/iter     (133 ps … 1'833 ns)    138 ps    206 ps    295 ps !
noop          193 ps/iter     (133 ps … 2'226 ns)    138 ps    231 ps   1.54 ns !
noop          195 ps/iter     (133 ps … 2'787 ns)    138 ps    250 ps    4.8 ns !

• Startup time
------------------------------------------------- -----------------------------
Old        74'293 ns/iter  (21'358 ns … 7'266 µs) 84'647 ns    354 µs  2'310 µs
New        88'831 ns/iter  (21'651 ns … 3'666 µs)    113 µs    322 µs  1'885 µs

summary for Startup time
  Old
   1.2x faster than New

• Performance
------------------------------------------------- -----------------------------
Old         1'299 ns/iter     (815 ns … 4'822 ns)  1'489 ns  3'831 ns  4'822 ns
New         1'516 ns/iter     (814 ns … 7'996 ns)  1'744 ns  6'773 ns  7'996 ns

summary for Performance
  Old
   1.17x faster than New
[ec2-user@ip-10-1-0-53 honojs-2285-bench]$ npm run bun:jitless

> honojs-2285-bench@1.0.0 bun:jitless
> BUN_JSC_UseJit=0 bun run bench.mts

cpu: Intel(R) Xeon(R) Platinum 8259CL CPU @ 2.50GHz
runtime: bun 1.0.29 (x64-linux)

benchmark      time (avg)             (min … max)       p75       p99      p999
------------------------------------------------- -----------------------------
noop         28.4 ns/iter   (22.72 ns … 1'432 ns)   23.6 ns    115 ns    770 ns
noop         30.2 ns/iter   (22.68 ns … 2'695 ns)  23.53 ns    109 ns  1'554 ns
noop        28.45 ns/iter    (22.7 ns … 2'013 ns)  23.65 ns  83.47 ns    556 ns
noop        28.34 ns/iter   (22.63 ns … 2'519 ns)  23.51 ns    115 ns    697 ns
noop        31.87 ns/iter    (22.6 ns … 2'052 ns)   23.6 ns    148 ns  1'193 ns
noop         29.2 ns/iter   (22.67 ns … 2'140 ns)  23.49 ns    107 ns    703 ns
noop        30.09 ns/iter    (22.7 ns … 2'113 ns)  23.53 ns    118 ns    742 ns
noop        33.96 ns/iter   (22.73 ns … 2'231 ns)  23.61 ns    191 ns  1'194 ns
noop        39.01 ns/iter   (23.17 ns … 3'160 ns)  23.55 ns    351 ns  1'712 ns
noop        40.54 ns/iter   (22.64 ns … 5'309 ns)  23.52 ns    406 ns  2'590 ns
noop         27.8 ns/iter   (22.66 ns … 1'645 ns)   23.5 ns  87.14 ns    589 ns
noop        29.14 ns/iter    (22.5 ns … 2'724 ns)  23.52 ns  99.41 ns    870 ns
noop        28.71 ns/iter   (22.73 ns … 1'821 ns)  23.53 ns  89.29 ns    572 ns
noop        30.41 ns/iter   (22.63 ns … 1'702 ns)  23.53 ns    126 ns    796 ns
noop        29.08 ns/iter   (22.61 ns … 2'335 ns)  23.51 ns    109 ns    886 ns

• Startup time
------------------------------------------------- -----------------------------
Old           317 µs/iter     (177 µs … 9'706 µs)    307 µs  1'549 µs  7'964 µs
New           356 µs/iter    (177 µs … 10'043 µs)    340 µs  2'744 µs  7'562 µs

summary for Startup time
  Old
   1.12x faster than New

• Performance
------------------------------------------------- -----------------------------
Old         5'926 ns/iter  (4'702 ns … 10'548 ns)  6'328 ns 10'412 ns 10'548 ns
New         5'579 ns/iter  (4'644 ns … 11'870 ns)  5'588 ns 10'787 ns 11'870 ns

summary for Performance
  New
   1.06x faster than Old
[ec2-user@ip-10-1-0-53 honojs-2285-bench]$ npm run node:jit

> honojs-2285-bench@1.0.0 node:jit
> esbuild --bundle --platform=node bench.mts | node

cpu: Intel(R) Xeon(R) Platinum 8259CL CPU @ 2.50GHz
runtime: node v21.6.2 (x64-linux)

benchmark      time (avg)             (min … max)       p75       p99      p999
------------------------------------------------- -----------------------------
noop          193 ps/iter     (119 ps … 2'341 ns)    129 ps    236 ps   3.42 ns !
noop          164 ps/iter     (119 ps … 1'824 ns)    125 ps    196 ps   1.03 ns !
noop          176 ps/iter     (119 ps … 1'925 ns)    125 ps    211 ps   1.41 ns !
noop          160 ps/iter     (119 ps … 2'145 ns)    126 ps    238 ps    332 ps !
noop          161 ps/iter     (120 ps … 2'113 ns)    127 ps    244 ps    579 ps !
noop          161 ps/iter     (119 ps … 2'401 ns)    126 ps    176 ps    334 ps !
noop          188 ps/iter     (119 ps … 2'940 ns)    129 ps    211 ps   8.79 ns !
noop          159 ps/iter     (119 ps … 2'675 ns)    125 ps    224 ps    337 ps !
noop          200 ps/iter     (119 ps … 2'027 ns)    129 ps    215 ps   8.08 ns !
noop          186 ps/iter     (119 ps … 3'279 ns)    125 ps    208 ps   1.15 ns !
noop          165 ps/iter     (118 ps … 3'458 ns)    125 ps    173 ps    390 ps !
noop          165 ps/iter     (118 ps … 3'413 ns)    126 ps    240 ps    604 ps !
noop          148 ps/iter     (119 ps … 2'946 ns)    126 ps    164 ps    287 ps !
noop          159 ps/iter     (119 ps … 2'729 ns)    125 ps    179 ps    349 ps !
noop          146 ps/iter     (119 ps … 1'455 ns)    125 ps    167 ps    301 ps !

• Startup time
------------------------------------------------- -----------------------------
Old           131 µs/iter (27'284 ns … 18'286 µs) 81'208 ns  1'826 µs 10'852 µs
New           123 µs/iter (28'185 ns … 20'058 µs) 75'556 ns  1'249 µs 13'956 µs

summary for Startup time
  New
   1.06x faster than Old

• Performance
------------------------------------------------- -----------------------------
Old         1'031 ns/iter     (531 ns … 4'615 ns)  1'197 ns  3'065 ns  4'615 ns
New         1'021 ns/iter     (557 ns … 4'644 ns)  1'048 ns  4'244 ns  4'644 ns

summary for Performance
  New
   1.01x faster than Old
[ec2-user@ip-10-1-0-53 honojs-2285-bench]$ npm run node:jitless

> honojs-2285-bench@1.0.0 node:jitless
> esbuild --bundle --platform=node bench.mts | node --jitless

Warning: disabling flag --expose_wasm due to conflicting flags
cpu: Intel(R) Xeon(R) Platinum 8259CL CPU @ 2.50GHz
runtime: node v21.6.2 (x64-linux)

benchmark      time (avg)             (min … max)       p75       p99      p999
------------------------------------------------- -----------------------------
noop        31.46 ns/iter   (24.96 ns … 2'101 ns)  26.55 ns  86.21 ns  1'147 ns
noop        30.55 ns/iter   (24.66 ns … 2'044 ns)  26.28 ns  83.81 ns    842 ns
noop        39.39 ns/iter    (24.6 ns … 3'940 ns)  26.56 ns    401 ns  1'613 ns
noop        38.47 ns/iter   (25.01 ns … 2'582 ns)   26.9 ns    236 ns  1'372 ns
noop        37.68 ns/iter   (25.04 ns … 3'170 ns)  26.42 ns    204 ns  1'618 ns
noop        31.06 ns/iter   (24.84 ns … 1'763 ns)  26.28 ns  89.42 ns    593 ns
noop        36.46 ns/iter   (24.95 ns … 3'069 ns)  26.37 ns    209 ns  1'956 ns
noop        33.63 ns/iter   (24.79 ns … 2'682 ns)  26.28 ns    127 ns  1'429 ns
noop        35.12 ns/iter   (24.68 ns … 2'840 ns)  26.32 ns    166 ns  1'779 ns
noop        30.75 ns/iter   (24.64 ns … 2'767 ns)  26.25 ns    103 ns    731 ns
noop         42.7 ns/iter   (24.54 ns … 5'503 ns)  26.33 ns    434 ns  2'161 ns
noop        33.39 ns/iter   (24.43 ns … 2'045 ns)  26.35 ns    144 ns    841 ns
noop        38.34 ns/iter   (24.81 ns … 3'897 ns)  26.27 ns    288 ns  1'911 ns
noop        33.62 ns/iter   (24.85 ns … 2'591 ns)  26.39 ns    120 ns  1'203 ns
noop        31.39 ns/iter   (24.65 ns … 2'153 ns)  26.55 ns   98.5 ns    492 ns

• Startup time
------------------------------------------------- -----------------------------
Old           172 µs/iter     (117 µs … 6'234 µs)    157 µs  1'069 µs  3'651 µs
New           196 µs/iter    (123 µs … 10'648 µs)    150 µs  1'042 µs  6'001 µs

summary for Startup time
  Old
   1.14x faster than New

• Performance
------------------------------------------------- -----------------------------
Old         2'613 ns/iter   (1'824 ns … 8'832 ns)  2'703 ns  7'593 ns  8'832 ns
New         2'599 ns/iter   (1'809 ns … 7'363 ns)  2'636 ns  7'296 ns  7'363 ns

summary for Performance
  New
   1.01x faster than Old
```
