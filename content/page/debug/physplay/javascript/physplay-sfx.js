const soundEffectInfo = {
    // Gravity gun
    holdloop: {
        path: "physplay/audio/physcannon_hold_loop.mp3",
        volume: 0.2,
        loop: true,
    },
    select: {
        path: "physplay/audio/physcannon_select.mp3",
        volume: 0.3,
    },
    weaponswitch: {
        path: "physplay/audio/physcannon_return.mp3",
        volume: 0.3,
    },
    pickup: {
        path: "physplay/audio/physcannon_pickup.mp3",
        volume: 0.3,
    },
    open: {
        path: "physplay/audio/physcannon_claws_open.mp3",
        volume: 0.3,
        stops: ["close"],
    },
    close: {
        path: "physplay/audio/physcannon_claws_close.mp3",
        volume: 0.3,
        stops: ["open"],
    },
    drop: {
        path: "physplay/audio/physcannon_drop.mp3",
        volume: 0.3,
    },
    dryfire: {
        path: "physplay/audio/physcannon_dryfire.mp3",
        volume: 0.3,
    },

    // Combine
    pickupthecan: {
        paths: [
            "physplay/audio/pickupthecan1.mp3",
            "physplay/audio/pickupthecan2.mp3",
            "physplay/audio/pickupthecan3.mp3",
        ],
        volume: 0.1,
    },
    putitinthetrash: {
        paths: [
            "physplay/audio/putitinthetrash1.mp3",
            "physplay/audio/putitinthetrash2.mp3",
        ],
        volume: 0.1,
        stops: ["pickupthecan"],
    },
    allrightyoucango: {
        path: "physplay/audio/allrightyoucango.mp3",
        volume: 0.1,
        stops: ["pickupthecan", "putitinthetrash"],
    },
    chuckle: {
        path: "physplay/audio/chuckle.mp3",
        volume: 0.08,
    },
    /** 
    help: {
        path: "physplay/audio/help.mp3",
        volume: 0.22,
        delay: 150, // ms
    },

    // Advisor
    advisor: {
        path: "physplay/audio/AdvisorScreenVx03.mp3",
        volume: 0.2,
    },

    // Zombie
    zombie: {
        path: "physplay/audio/zombie_die2.mp3",
        volume: 0.2,
    },

    // Antlion
    antlion: {
        path: "physplay/audio/antlion_pain1.mp3",
        volume: 0.2,
    },
    */
};

class CSoundEffectState {
    audioBuffers = []; // AudioBuffer[]
    currentAudioSource = null; // AudioSource
    gainNode; // GainNode

    onLoaded = null;
    pendingPlayRequestID = null;
    nextAudioIndex = 0;
    isPlaying = false;
}

class CSoundEffects {
    soundStates = new Map(); // Map<string, CSoundEffectState>
    audioCtx = new window.AudioContext();
    nextPlayRequestID = 1;

    constructor() {
        // Wait for all the other content to load; don't block that just to preload sounds.
        window.addEventListener(
            "load",
            () => {
                this.startLoading();
            },
            { once: true }
        );
    }

    async stopSound(name) {
        if (this.soundStates.size == 0) {
            return;
        }

        const state = this.soundStates.get(name);
        if (!state) {
            console.error("Unknown sound effect:", name);
            return;
        }

        state.currentAudioSource?.stop();
        state.pendingPlayRequestID = null;
    }

    async playSound(name) {
        this.startLoading();

        const state = this.soundStates.get(name);
        if (!state) {
            console.error("Unknown sound effect:", name);
            return;
        }

        const info = soundEffectInfo[name];

        const playRequestID = this.nextPlayRequestID++;
        state.pendingPlayRequestID = playRequestID;
        if (!info.loop) {
            // If it's not a looping sound, don't play this specific sound request
            // if loading takes longer than a few hundred ms.
            setTimeout(
                () => (state.pendingPlayRequestID = null),
                info.delay + 500
            );
        }

        await state.onLoaded; // Wait for the load (instant if loaded)

        if (info.delay > 0) {
            await new Promise((resolve) => setTimeout(resolve, info.delay));
        }

        if (state.pendingPlayRequestID != playRequestID) {
            return;
        }

        this.stopSound(name);
        info.stops.forEach((soundToStop) => this.stopSound(soundToStop));

        state.currentAudioSource = this.audioCtx.createBufferSource();
        state.currentAudioSource.buffer =
            state.audioBuffers[state.nextAudioIndex];
        state.currentAudioSource.loop = info.loop;
        state.currentAudioSource.connect(state.gainNode);
        state.currentAudioSource.onended = () => (state.isPlaying = false);
        state.currentAudioSource.start();

        state.isPlaying = true;
        state.nextAudioIndex = (state.nextAudioIndex + 1) % info.paths.length;
    }

    startLoading() {
        if (this.soundStates.size > 0) {
            return;
        }

        for (const name of Object.keys(soundEffectInfo)) {
            const info = soundEffectInfo[name];
            if (info.hasOwnProperty("path")) {
                info["paths"] = [info.path];
            }
            info.delay = info.delay ?? 0;
            info.stops = info.stops ?? [];

            const state = new CSoundEffectState();

            state.gainNode = this.audioCtx.createGain();
            state.gainNode.gain.value = info.volume;
            state.gainNode.connect(this.audioCtx.destination);

            state.onLoaded = Promise.all(
                info.paths.map(async (path) => {
                    const arrayBuffer = await fetch(path).then((res) =>
                        res.arrayBuffer()
                    );
                    const audioBuffer = await this.audioCtx.decodeAudioData(
                        arrayBuffer
                    );
                    state.audioBuffers.push(audioBuffer);
                })
            );

            this.soundStates.set(name, state);
        }

        this.createDebugUI();
    }

    createDebugUI() {
        const elemContainer = document.querySelector("#sounddebug ul");
        if (!elemContainer) {
            return;
        }

        elemContainer.innerHTML = "";

        for (const name of this.soundStates.keys()) {
            const state = this.soundStates.get(name);
            const info = soundEffectInfo[name];

            const li = document.createElement("li");
            elemContainer.appendChild(li);

            const button = document.createElement("button");
            li.appendChild(button);
            button.innerText = name;
            button.disabled = "disabled";
            state.onLoaded.then(() => (button.disabled = false));
            button.onclick = () => {
                if (info.loop && state.isPlaying) {
                    this.stopSound(name);
                } else {
                    this.playSound(name);
                }
            };
        }
    }
}

window.soundEffects = new CSoundEffects();
