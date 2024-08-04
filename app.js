'use strict'
import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';

class AnimateApp{
    constructor(){
        const mainElement = document.querySelector('#mainApp');
        this._mainElement = mainElement;

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

    }
    _setupLight(){

    }
    _setupModel(){

    }
    _setupControls(){
        
    }
}
function main(){
    
}

main();