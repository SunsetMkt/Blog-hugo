export default function getSunsetUUID(request) {
    // Get SunsetUUID from Cookie
    const cookie = request.headers.get("Cookie");
    if (cookie) {
        const cookies = cookie.split("; ");
        for (const cookie of cookies) {
            const [name, value] = cookie.split("=");
            if (name === "SunsetUUID") {
                return value;
            }
        }
    }
    return null;
}
