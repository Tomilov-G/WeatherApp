import { ref } from "vue";

export const useToggle = () => {
  const initialBooleanState = ref(false);

  const toggleBooleanState = () => {
    initialBooleanState.value = !initialBooleanState.value;
  };
  const resetBooleanState = () => {
    initialBooleanState.value = false;
  };
  return { initialBooleanState, toggleBooleanState, resetBooleanState };
};
