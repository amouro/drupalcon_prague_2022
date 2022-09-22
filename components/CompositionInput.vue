<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  logText: {
    default: '',
  },
})

const inputElement = document.querySelector('input[type="text"]');
const log = document.querySelector('.event-log-contents');
const clearLog = document.querySelector('.clear-log');
clearLog.addEventListener('click', () => {
    log.textContent = '';
});
function handleEvent(event) {
    log.textContent += `${event.type}: ${event.data}\n`;
}
inputElement.addEventListener('compositionstart', handleEvent);
inputElement.addEventListener('compositionupdate', handleEvent);
inputElement.addEventListener('compositionend', handleEvent);

const logText = ref(log.textContent);
</script>

<template>
  <div class="control">
  <label for="example">
    First select textbox, then to open IME:
    <ul>
      <li>on macOS type <kbd>option</kbd> + <kbd>`</kbd></li>
      <li>on Windows type <kbd>windows</kbd> + <kbd>.</kbd></li>
    </ul>
  </label>
  <input type="text" id="example" name="example">
</div>

<div class="event-log">
  <label for="eventLog">Event log:</label>
  <textarea readonly="" class="event-log-contents" rows="8" cols="25" id="eventLog">{{ value }}</textarea>
  <button class="clear-log">Clear</button>
</div>
</template>
