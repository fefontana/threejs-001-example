import * as THREE from "./threejs/three.module.js";
console.log(THREE.REVISION);

// 1. Escena
const scene = new THREE.Scene();

// 2. Cámara
const camera = new THREE.PerspectiveCamera(
    75,                              // campo de visión
    window.innerWidth / window.innerHeight,
    0.1,                             // plano cercano
    1000                             // plano lejano
);

// 3. Renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 4. Objeto (cubo)
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 5. Posición de la cámara
camera.position.z = 2;

// 6. Bucle de animación
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();