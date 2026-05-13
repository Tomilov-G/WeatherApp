<script setup>
  defineProps(["city"]);
  const emit = defineEmits(["switch"]);
  </script>
  
  <template>
    <li class="dropdownListItem" @click="emit('switch', city)">
      {{ city.city }}
    </li>
  </template>
  
  <style scoped lang="scss">
  .dropdownListItem {
    cursor: pointer;
    color: var(--color-text-default);
    transition: background-color 0.2s ease;
    padding-block: 10px;
  
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  
    &:active {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
  </style>
  