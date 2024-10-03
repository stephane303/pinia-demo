import { defineStore } from 'pinia'
import { computed, reactive, ComputedRef } from 'vue'

type Zone = { r: string }

export interface State {
     zones: Array<Zone>;
}

export const useSettingsStore = defineStore("settings", () => {
    const state: State = reactive<State>({
        zones: [{ r:'a'}, {r:'b'}]
    });

    const readonlyState = Object.fromEntries(Object.keys(state).map((key) => [key, computed(() => state[key as keyof typeof state])])) as {
        [K in keyof typeof state]: ComputedRef<State[K]>;
    };

    return {
        ...readonlyState,
    };
});