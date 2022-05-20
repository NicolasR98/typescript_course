(() => {
    enum AudioLevel {
        min,    // 0
        medium = 2, // 2
        medium2,    // 3 
        max = 10,   // 10
    }

    const currentAudio = AudioLevel.medium;
})()