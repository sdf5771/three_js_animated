'use strict'
import * as THREE from 'three';
import { OrbitControls } from '@three-ts/orbit-controls';
import GLTFLoader from 'three-gltf-loader';

class AnimateApp{
    constructor(){
        const renderContainer = document.querySelector('#WebGLContainer');
        
        this._renderContainer = renderContainer;

        const renderer = new THREE.webGLRenderer({
            antialias: true
        });

        this._renderer = renderer;

        const scene = new THREE.Scene();
        this._scene = scene;

        this._setupCamera();
        this._setupLight();
        this._setupModel();
        this._setupControls();

        window.onresize = this.resize.bind(this);
        this.resize();

        requestAnimationFrame(this.render.bind(this));
    }

    _setupCamera(){
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            100
        );

        camera.position.z = 2;
        this._camera = camera;
    }
    _setupLight(){

    }
    _setupModel(){
        new GLTFLoader().load('./assets/data-models/character_01_animate_model.gltf', (gltf) => {
            const model = gltf.scene;
            this._scene.add(model);
        })
    }
    _setupControls(){
        new OrbitControls(this._camera, this._renderContainer);
    }
}
function main(){

}

main();