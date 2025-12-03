// Demo video configurations
const demoNVS = [
    'demo_2025-11-20-08-18-36.mp4',
    'demo_2025-11-20-08-18-42.mp4',
    'demo_2025-11-20-08-18-54.mp4',
    'demo_2025-11-20-08-18-57.mp4',
    'demo_2025-11-20-08-27-03.mp4',
    'demo_2025-11-20-08-27-05.mp4',
    'demo_2025-11-20-08-27-07.mp4',
    'demo_2025-11-20-08-27-09.mp4'
];

const demoNovelObject = [
    'demo_2025-11-20-12-53-33.mp4',
    'demo_2025-11-20-12-53-38.mp4',
    'demo_2025-11-20-12-53-59.mp4',
    'demo_2025-11-20-13-09-52.mp4',
    'demo_2025-11-20-13-10-05.mp4',
    'demo_2025-11-20-13-10-22.mp4',
    'demo_2025-11-20-13-10-26.mp4',
    'demo_2025-11-20-13-10-29.mp4',
    'demo_2025-11-20-20-12-05.mp4',
    'demo_2025-11-20-20-28-43.mp4'
];

// Demo retexture videos configuration
const demoRetexture = [
    'demo_2025-11-21-00-30-12.mp4',
    'demo_2025-11-21-00-30-45.mp4',
    'demo_2025-11-21-00-30-17.mp4',
    'demo_2025-11-21-00-46-49.mp4',
    'demo_2025-11-21-00-30-28.mp4',
    'demo_2025-11-21-00-47-01.mp4',
    'demo_2025-11-21-00-30-34.mp4',
    'demo_2025-11-21-00-47-09.mp4',
];

// Comparison configurations
const comparisonMani4D = {
    methods: ['gt', 'Loom', 'AnchorCrafter', 'UnianimateDiT', 'MimicMotion'],
    methodLabels: {'Loom': 'Loom(ours)'},
    scenes: [
        'forest_mid.forest_mid_2.07.mp4',
        'forest_mid.forest_mid_2.09.mp4',
        'forest_mid.forest_mid_3.00.mp4',
        'forest_mid.forest_mid_3.02.mp4',
        'forest_mid.forest_mid_7.05.mp4',
        'forest_mid.forest_mid_7.06.mp4',
        'forest_mid.forest_mid_7.10.mp4',
        'forest_small.forest_small_2.08.mp4',
        'forest_small.forest_small_3.14.mp4',
        'forest_small.forest_small_4.02.mp4',
        'forest_small.forest_small_4.07.mp4',
        'mcn.mcn_1_4.00.mp4',
        'mcn.mcn_1_4.02.mp4',
        'mcn.mcn_1_5.02.mp4',
        'mcn.mcn_3_4.04.mp4'
    ],
    path: 'comparison-Mani4D'
};

const comparisonNovelHuman = {
    methods: ['Loom', 'AnchorCrafter'],
    methodLabels: {'Loom': 'Loom(ours)'},
    scenes: [
        'forest_mid.forest_mid_2.07.mp4',
        'forest_mid.forest_mid_2.09.mp4',
        'forest_mid.forest_mid_3.00.mp4',
        'forest_mid.forest_mid_3.02.mp4',
        'forest_mid.forest_mid_7.05.mp4',
        'forest_mid.forest_mid_7.06.mp4',
        'forest_mid.forest_mid_7.10.mp4',
        'forest_small.forest_small_2.08.mp4',
        'forest_small.forest_small_3.14.mp4',
        'forest_small.forest_small_4.02.mp4',
        'forest_small.forest_small_4.07.mp4',
        'mcn.mcn_1_4.00.mp4',
        'mcn.mcn_1_4.02.mp4',
        'mcn.mcn_1_5.02.mp4',
        'mcn.mcn_3_4.04.mp4'
    ],
    path: 'comparison-novalHuman'
};

const comparisonAblation = {
    methods: ['gt', 'P+F', 'P+H+F', 'P+H+F(noRCM)', 'P+H+O+F', 'P+O+F'],
    scenes: [
        'forest_mid.forest_mid_2.07.mp4',
        'forest_mid.forest_mid_2.09.mp4',
        'forest_mid.forest_mid_3.00.mp4',
        'forest_mid.forest_mid_3.02.mp4',
        'forest_mid.forest_mid_7.05.mp4',
        'forest_mid.forest_mid_7.06.mp4',
        'forest_mid.forest_mid_7.10.mp4',
        'forest_small.forest_small_2.08.mp4',
        'forest_small.forest_small_3.14.mp4',
        'forest_small.forest_small_4.02.mp4',
        'forest_small.forest_small_4.07.mp4',
        'mcn.mcn_1_4.00.mp4',
        'mcn.mcn_1_4.02.mp4',
        'mcn.mcn_1_5.02.mp4',
        'mcn.mcn_3_4.04.mp4'
    ],
    path: 'comparison-ablation'
};

// Load demo videos
function loadDemoGallery(elementId, videos, basePath) {
    const gallery = document.getElementById(elementId);
    const section = gallery.closest('.video-section');
    const button = section ? section.querySelector('.pause-all-btn') : null;

    videos.forEach(video => {
        const videoElement = document.createElement('video');
        videoElement.src = `videos/${basePath}/${video}`;
        videoElement.controls = true;
        videoElement.loop = false;
        videoElement.muted = true;

        // Add ended event listener
        videoElement.addEventListener('ended', function() {
            const allVideos = Array.from(gallery.querySelectorAll('video'));
            const allEnded = allVideos.every(v => v.ended || v.paused);

            if (allEnded && button) {
                button.classList.add('paused');
                button.textContent = 'Play All';
            }
        });

        gallery.appendChild(videoElement);
    });
}

// Populate scene dropdown
function populateSceneSelect(selectId, scenes) {
    const select = document.getElementById(selectId);
    scenes.forEach(scene => {
        const option = document.createElement('option');
        option.value = scene;
        option.textContent = scene.replace('.mp4', '');
        select.appendChild(option);
    });
    // Select first scene by default
    if (scenes.length > 0) {
        select.value = scenes[0];
    }
}

// Update comparison videos
function updateComparison(type) {
    let config, selectId, gridId, sectionId;

    if (type === 'mani4d') {
        config = comparisonMani4D;
        selectId = 'scene-select-mani4d';
        gridId = 'comparison-mani4d';
        sectionId = 'section-mani4d';
    } else if (type === 'novelhuman') {
        config = comparisonNovelHuman;
        selectId = 'scene-select-novelhuman';
        gridId = 'comparison-novelhuman';
        sectionId = 'section-novelhuman';
    } else if (type === 'ablation') {
        config = comparisonAblation;
        selectId = 'scene-select-ablation';
        gridId = 'comparison-ablation';
        sectionId = 'section-ablation';
    }

    const selectedScene = document.getElementById(selectId).value;
    if (!selectedScene) return;

    const grid = document.getElementById(gridId);
    grid.innerHTML = '';

    config.methods.forEach(method => {
        const item = document.createElement('div');
        item.className = 'comparison-item';

        const title = document.createElement('h4');
        // Use custom label if available, otherwise use method name
        const displayName = (config.methodLabels && config.methodLabels[method]) || method;
        title.textContent = displayName;

        const video = document.createElement('video');
        video.src = `videos/${config.path}/${method}/${selectedScene}`;
        video.controls = true;
        video.loop = false;
        video.muted = true;

        item.appendChild(title);
        item.appendChild(video);
        grid.appendChild(item);
    });

    // Auto-play videos after they're loaded and update button state
    setTimeout(() => {
        const videos = grid.querySelectorAll('video');
        const section = document.getElementById(sectionId);
        const button = section.querySelector('.pause-all-btn');

        // Add ended event listener to each video
        videos.forEach(video => {
            video.addEventListener('ended', function() {
                // Check if all videos in this grid have ended
                const allVideos = Array.from(grid.querySelectorAll('video'));
                const allEnded = allVideos.every(v => v.ended || v.paused);

                if (allEnded && button) {
                    button.classList.add('paused');
                    button.textContent = 'Play All';
                }
            });

            video.play().catch(err => {
                console.log('Autoplay prevented:', err);
            });
        });

        // Update button state
        if (button) {
            button.classList.remove('paused');
            button.textContent = 'Pause All';
        }
    }, 100);
}

// Toggle pause/play for all videos in a section
function togglePauseAll(sectionId) {
    const section = document.getElementById(sectionId);
    const button = section.querySelector('.pause-all-btn');
    const videos = section.querySelectorAll('video');

    if (button.classList.contains('paused')) {
        // Currently paused, so play all videos
        videos.forEach(video => {
            // If video has ended, restart from beginning
            if (video.ended) {
                video.currentTime = 0;
            }
            video.play().catch(err => {
                console.log('Play prevented:', err);
            });
        });
        button.classList.remove('paused');
        button.textContent = 'Pause All';
    } else {
        // Currently playing, so pause all videos
        videos.forEach(video => {
            video.pause();
        });
        button.classList.add('paused');
        button.textContent = 'Play All';
    }
}

// Intersection Observer for autoplay
function setupAutoplay() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    // Track which sections have been autoplayed
    const autoplayedSections = new Set();

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const videos = entry.target.querySelectorAll('video');
            const button = entry.target.querySelector('.pause-all-btn');
            const sectionId = entry.target.id;

            if (entry.isIntersecting) {
                // Only autoplay if this section hasn't been autoplayed before
                if (!autoplayedSections.has(sectionId)) {
                    autoplayedSections.add(sectionId);

                    // Play all videos in the visible section
                    videos.forEach(video => {
                        video.play().catch(err => {
                            // Autoplay might be blocked by browser, that's ok
                            console.log('Autoplay prevented:', err);
                        });
                    });
                    // Update button state to show "Pause All"
                    if (button) {
                        button.classList.remove('paused');
                        button.textContent = 'Pause All';
                    }
                }
            } else {
                // Pause videos when section is out of view
                videos.forEach(video => {
                    video.pause();
                });
                // Update button state to show "Play All"
                if (button) {
                    button.classList.add('paused');
                    button.textContent = 'Play All';
                }
            }
        });
    }, observerOptions);

    // Observe all video sections
    const videoSections = document.querySelectorAll('.video-section');
    videoSections.forEach(section => {
        observer.observe(section);
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Load demo galleries
    loadDemoGallery('demo-nvs', demoNVS, 'demo-NVS');
    loadDemoGallery('demo-novel-object', demoNovelObject, 'demo-novelObject');
    loadDemoGallery('demo-retexture', demoRetexture, 'demo-retexture');

    // Populate scene selectors
    populateSceneSelect('scene-select-mani4d', comparisonMani4D.scenes);
    populateSceneSelect('scene-select-novelhuman', comparisonNovelHuman.scenes);
    populateSceneSelect('scene-select-ablation', comparisonAblation.scenes);

    // Initialize comparisons with first scene
    updateComparison('mani4d');
    updateComparison('novelhuman');
    updateComparison('ablation');

    // Setup autoplay observer
    setupAutoplay();
});
