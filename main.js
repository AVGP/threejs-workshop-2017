var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

window.addEventListener('resize', function() {
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Our world

var box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshLambertMaterial({
  map: THREE.ImageUtils.loadTexture('images/bricks-diffuse.png')
}));
box.position.set(-3, 0, -5);
scene.add(box);

var box2 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({
  shininess: 100,
  specular: 0xffffff,
  map: THREE.ImageUtils.loadTexture('images/bricks-diffuse.png')  
}));
box2.position.set(3, 0, -5);
scene.add(box2);


// light
var light = new THREE.PointLight(0xff0000, 1.0, 50);
light.position.set(-5, 0, -2);
scene.add(light);

var light2 = new THREE.PointLight(0x00ff00, 1.0, 50);
light2.position.set(5, 0, -2);
scene.add(light2);

// Start!
document.body.appendChild(renderer.domElement);
render();

// Helpers

function render() {
  requestAnimationFrame(render);
  box.rotation.y += Math.PI / 200;
  box2.rotation.y += Math.PI / 200;
  renderer.render(scene, camera);
}
