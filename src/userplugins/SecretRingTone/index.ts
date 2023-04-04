import definePlugin from "@utils/types";

export default definePlugin({
    name: "SecretRingTone",
    description: "Always plays the secret ringtone when you recieve a call!",
    authors: [
        {
            id: 634524618564304916n,
            name: "Dex",
        },
    ],
    // Delete `patches` if you are not using code patches, as it will make
    // your plugin require restarts, and your stop() method will not be
    // invoked at all.  The presence of the key in the object alone is
    // enough to trigger this behavior, even if the value is an empty array.
    patches: [],
    // Delete these two below if you are only using code patches
    start() {},
    stop() {},
});
