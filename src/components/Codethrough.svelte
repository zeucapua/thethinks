<script lang="ts">
  import { Trace, TLine } from "trace-svelte";
  export let step : number;
  export let highlights : number[][];
  export let content : string;

  $: lines = content.split("\n");
</script>

<Trace {step} {highlights}>
  {#each lines as line}
  <TLine>{line}</TLine>
  {/each}
</Trace>
