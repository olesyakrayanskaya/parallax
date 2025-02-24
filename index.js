'use strict'
const scene = document.getElementById('scene');
const parallaxInstance = new Parallax(scene, {
    relativeInput: true
});

parallaxInstance.friction(0.2, 0.2);