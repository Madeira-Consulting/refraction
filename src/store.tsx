import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

export const useStore = create<{
    header: {
        isTransparent: boolean;
    };
    player: {
        player: any;
        isAttached: boolean;
        updateIsAttached: (isAttached: boolean) => void;
        setPlayer: (player: any) => void;
    };
    set: {
        set: any;
    };
    currentTrack: any;
    updateCurrentTrack: (currentTrack: any) => void;
}>((set) => ({
    header: {
        // state
        isTransparent: true,
        // actions
    },
    player: {
        player: null,
        isAttached: false,
        updateIsAttached: (isAttached) =>
            set((state) => ({ player: { ...state.player, isAttached } })),
        setPlayer: (player) =>
            set((state) => ({ player: { ...state.player, player } })),
    },
    set: {
        set: null,
    },
    currentTrack: null,
    updateCurrentTrack: (currentTrack) =>
        set(() => ({ currentTrack: currentTrack })),
}));

if (process.env.NODE_ENV === "development") {
    mountStoreDevtool("Store", useStore);
}
