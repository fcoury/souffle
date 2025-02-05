#!/bin/bash

set -euo pipefail

ergogen .
killall pcbnew || true
sleep 1
open output/pcbs/sofle_v2_wireless.kicad_pcb

fswatch -o config.yaml | while read f; do
  echo "Generating PCB..."
  ergogen .
  killall pcbnew || true
  sleep 1
  open output/pcbs/sofle_v2_wireless.kicad_pcb
done
# watchexec --exts yaml -- 'ergogen . && open output/pcbs/left.kicad_pcb'

