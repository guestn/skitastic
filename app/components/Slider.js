import * as THREE from 'three';
import * as WHS from 'whs';
import * as PHYSICS from '../modules/physics-module';

const scaleX = 10;
const scaleZ = 10;

const Slider = () => {
    return new WHS.Sphere({ // Create sphere comonent.
        geometry: {
            radius: 1,
            widthSegments: 16,
            heightSegments: 16
        },
        
        modules: [
            new PHYSICS.SphereModule({
            mass: 10,
            restitution: 0.3,
            friction: 1,
            })
        ],
        
        // material: new THREE.MeshPhongMaterial({
        //   color: UTILS.$colors.mesh
        // }),
        
        
        position: new THREE.Vector3(-1, 0, 0)
    })
};
  

export default Slider;