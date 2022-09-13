import React, {Component} from "react";
import * as THREE from "three";

class WelcomeScene extends Component {
    componentDidMount(){
        //scene
        this.scene = new THREE.Scene();

        //renderer
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        this.mount.appendChild(this.renderer.domElement)

        //camera
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        this.camera.position.z=5;

        //create box
        var geometry = new THREE.BoxGeometry(1,1,1);
        // var geometry = new THREE.BoxGeometry(5,5,5);

        var material = new THREE.MeshBasicMaterial({
            color : 0xfffffff
        });
        this.cube = new THREE.Mesh(geometry,material);

        //add to scene
        this.scene.add(this.cube);
        this.animation(this);
        // this.renderer.render(this.scene, this.camera);

        //Event Handelers
        window.addEventListener("resize", this.handelWindowResize);
    }



    animation = ()=>{
        requestAnimationFrame(this.animation.bind(this));
        this.cube.rotation.x += .01;
        this.renderer.render(this.scene, this.camera);
    }

    handelWindowResize = () =>{
        this.camera.aspect = window.innerWidth/ window.innerHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.render(this.scene, this.camera);
    }

    render(){
        console.log("test");
        return (
            <div
            ref={mount => {
                this.mount = mount;
            }}
            />
        )
    }
}

export default WelcomeScene;