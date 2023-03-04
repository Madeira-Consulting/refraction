import pocketbaseEs from "pocketbase";

export const getEvent = async (pb: pocketbaseEs, eventId: any) => {
    const event = await pb
        .collection("events")
        .getFirstListItem(`urlParameter="${eventId}"`, {
            expand: "events",
        });
    if (event) {
        console.log("Event found");
    } else {
        console.log("Event not found");
    }
    return event;
};
