var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

window.addEventListener('resize', function() {
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Our world

var box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial());
box.position.z = -5;
scene.add(box);

// Start!
document.body.appendChild(renderer.domElement);
render();

// Helpers

function render() {
  requestAnimationFrame(render);
  box.rotation.y += Math.PI / 100;
  renderer.render(scene, camera);
}
