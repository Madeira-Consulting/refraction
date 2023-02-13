const getTracklist = async () => {
    const response = await fetch(
        "https://www.1001tracklists.com/tracklist/k543tmk/edm-lab-best-of-today-hashrelease-196-2023-02-10.html"
    );

    const html = await response;
    console.log(html.text);
    return "wuwu";
};

export default getTracklist;
