export const httpGet = async (url) => {
    try {
        let res = await fetch(url);
        return res.ok ? await res.json() : null;
    } catch (err) {
        console.log(err);
    }
    return null;
};
