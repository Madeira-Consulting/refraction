import pocketbaseEs from "pocketbase";

export const getSets = async (pb: pocketbaseEs, artistId?: undefined) => {
    const filter = artistId ? `artist.urlParameter="${artistId}"` : "";

    const sets = await pb.collection("sets").getFullList(200 /* batch size */, {
        filter: filter,
        sort: "created",
        expand: "artist,venue,tracks,event",
    });
    if (sets.length > 0) {
        console.log("Sets found");
    } else {
        console.log("No sets found");
    }
    return sets;
};
