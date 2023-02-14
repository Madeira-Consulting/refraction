import { create } from "zustand";

export const useStore = create<{
    header: {
        isTransparent: boolean;
        setIsTransparent: (isTransparent: boolean) => void;
    };
    player: {
        player: any;
        isAttached: boolean;
        setIsAttached: (isAttached: boolean) => void;
    };
    set: {
        set: any;
    };
    currentTrack: any;
}>((set) => ({
    header: {
        // state
        isTransparent: true,
        // actions
        setIsTransparent: (isTransparent: boolean) => set({ isTransparent }),
    },
    player: {
        player: null,
        isAttached: true,
        setIsAttached: (isAttached: boolean) => set({ isAttached }),
    },
    set: {
        set: null,
    },
    currentTrack: null,
}));
