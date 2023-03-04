import pocketbaseEs from "pocketbase";

export const getEvents = async (pb: pocketbaseEs) => {
    const events = await pb
        .collection("events")
        .getFullList(200 /* batch size */, {
            sort: "created",
        });
    if (events.length > 0) {
        console.log("Events found");
    } else {
        console.log("No events found");
    }

    return events;
};
