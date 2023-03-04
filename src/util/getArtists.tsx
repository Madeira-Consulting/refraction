import pocketbaseEs from "pocketbase";

export const getArtists = async (pb: pocketbaseEs) => {
    const artists = await pb
        .collection("artists")
        .getFullList(200 /* batch size */, {
            sort: "created",
        });
    if (artists.length > 0) {
        console.log("Artists found");
    } else {
        console.log("No artists found");
    }
    return artists;
};
