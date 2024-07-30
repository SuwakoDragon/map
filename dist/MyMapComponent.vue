<template>
    <div id="container" ref="canvasContainer"></div>
    <div id="tooltip" ref="tooltip"></div>
  </template>
   
  <script setup>
      import * as THREE from 'three';
      //OrbitControls 是一个附加组件，必须显式导入
      import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
      //墨卡托投影转换可以把我们经纬度坐标转换成我们对应平面的2d坐标,d3里面自带墨卡托投影转换
      //该引入方式是查阅官网得到的
      import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
      import { onMounted, onUnmounted,ref } from 'vue';
   
      let canvasContainer = ref(null);
      let tooltip = ref(null)
      let scene,camera,renderer,ambientLight,raycaster,mouse;
      let lastPick = null;
   
      //初始化摄像机
      function initCamera(){
          camera = new THREE.PerspectiveCamera(75,canvasContainer.value.offsetWidth / canvasContainer.value.offsetHeight, 0.1, 1000);
          camera.position.set(0,0,120);
          camera.lookAt(scene.position);
      }
      //初始化renderer
      function initRenderer(){
          renderer = new THREE.WebGLRenderer();
          renderer.setSize(canvasContainer.value.offsetWidth,canvasContainer.value.offsetHeight)
      }
      //初始化灯光
      function initLight(){
          ambientLight = new THREE.AmbientLight(0xffffff,20);
      }
      //加载json数据
      function loadJson(){
          const loader = new THREE.FileLoader();
          loader.load('src/assets/china.json',(data)=>{
              const jsondata = JSON.parse(data);
              generateGeometry(jsondata)
              console.log(jsondata);
          })
      }
   
      // 根据JSON数据生成地图几何体
      function generateGeometry(jsondata){
          let map = new THREE.Object3D();
          // 使用d3的地图投影
          const projection = d3.geoMercator().center([104.0,37.5]).translate([0,0]);
           // 遍历每个省份，创建几何体
          jsondata.features.forEach((element)=>{
              let province = new THREE.Object3D();
              const coordinates = element.geometry.coordinates;
              if(Array.isArray(coordinates[0][0][0])){
                  coordinates.forEach((multiPolygon)=>{
                      multiPolygon.forEach((polygon)=>{
                          const shape = new THREE.Shape();
                          const points = [];
                          polygon.forEach((coord,i)=>{
                              const [x,y] = projection(coord);
                              if(i===0) shape.moveTo(x,-y);
                              else shape.lineTo(x,-y);
                              points.push(new THREE.Vector3(x,-y,5));
                          })
                          const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
                          const lineMaterial = new THREE.LineBasicMaterial({ color: 'white' });
                          const line = new THREE.Line(lineGeometry, lineMaterial);
   
                          const extrudeSettings = { depth: 10, bevelEnabled: false };
                          const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
                          const material = new THREE.MeshBasicMaterial({ color: '#2defff', transparent: true, opacity: 0.6 });
                          const material1 = new THREE.MeshBasicMaterial({
                              color: '#3480C4',
                              transparent: true,
                              opacity: 0.5,
                          })
                          const mesh = new THREE.Mesh(geometry, [material,material1]);
                          province.properties = element.properties;
                          province.add(mesh);
                          province.add(line);
                      })
                  })
              }else if(Array.isArray(coordinates[0][0])){
                  coordinates.forEach((polygon)=>{
                      const shape = new THREE.Shape();
                      const points = [];
                      polygon.forEach((coord,i)=>{
                          const [x,y] = projection(coord);
                          if(i===0) shape.moveTo(x,-y);
                          else shape.lineTo(x,-y);
                          points.push(new THREE.Vector3(x,-y,5));
                      })
                      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
                      const lineMaterial = new THREE.LineBasicMaterial({ color: 'white' });
                      const line = new THREE.Line(lineGeometry, lineMaterial);
   
                      const extrudeSettings = { depth: 10, bevelEnabled: false };
                      const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
                      const material = new THREE.MeshBasicMaterial({ color: '#2defff', transparent: true, opacity: 0.6 });
                      const material1 = new THREE.MeshBasicMaterial({
                          color: '#3480C4',
                          transparent: true,
                          opacity: 0.5,
                      })
                      const mesh = new THREE.Mesh(geometry, [material,material1]);
                      province.properties = element.properties;
                      province.add(mesh);
                      province.add(line);
                  })
              }
              map.add(province);
          })
          scene.add(map);
      }
   
      // 设置光线投射器和鼠标位置，用于检测鼠标悬停对象
      function setRaycaster(){
          raycaster = new THREE.Raycaster();
          mouse = new THREE.Vector2();
          const onMouseMove = (event) => {
              mouse.x = (event.clientX / canvasContainer.value.offsetWidth) * 2 - 1
              mouse.y = -(event.clientY / canvasContainer.value.offsetHeight) * 2 + 1
              tooltip.value.style.left = event.clientX + 2 + 'px'
              tooltip.value.style.top = event.clientY + 2 + 'px'
          }
   
      window.addEventListener('mousemove', onMouseMove, false)
      }
   
      // 显示或隐藏工具提示
      function showTip(){
          if(lastPick){
              const properties = lastPick.object.parent.properties;
              tooltip.value.textContent = properties.name;
              tooltip.value.style.visibility = 'visible';
              console.log(tooltip.value.textContent);
          }else{
              tooltip.value.style.visibility = 'hidden';
          }
      }
   
      // 动画循环，用于渲染场景和更新状态
      function animate() {
          requestAnimationFrame(animate);
          raycaster.setFromCamera(mouse,camera);
          const intersects = raycaster.intersectObjects(scene.children,true);
          if (lastPick) {
            lastPick.object.material[0].color.set('#2defff')
            lastPick.object.material[1].color.set('#3480C4')
          }
          lastPick = null
          lastPick = intersects.find(
            (item) => item.object.material && item.object.material.length === 2
          )
          if (lastPick) {
            lastPick.object.material[0].color.set(0xff0000)
            lastPick.object.material[1].color.set(0xff0000)
          }
          showTip();
          renderer.render(scene, camera);
      }
   
      //窗口大小改变时，更新摄像机的宽高比和渲染器的大小
      function handleResize(){
          if(camera && renderer && canvasContainer.value){
            camera.aspect = canvasContainer.value.offsetWidth / canvasContainer.value.offsetHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(canvasContainer.value.offsetWidth, canvasContainer.value.offsetHeight);
          }
      }
   
      // 组件挂载时的初始化逻辑
      onMounted(()=>{
          scene = new THREE.Scene();
          setRaycaster();
          initLight();
          scene.add(ambientLight);
          initCamera();
          loadJson();
          initRenderer();
          canvasContainer.value.appendChild(renderer.domElement);
          new OrbitControls(camera,canvasContainer.value)
          animate();
          window.addEventListener('resize',handleResize)
      })
   
      onUnmounted(()=>{
          window.removeEventListener('resize',handleResize)
      })
  </script>
   
  <style>
      body{
          margin: 0;
          padding: 0;
          overflow: hidden;
      }
      #container{
          /* border: 1px solid black; */
          width: 100vw;
          height: 100vh;
      }
      #tooltip {
          position: absolute;
          z-index: 2;
          background: white;
          padding: 10px;
          border-radius: 5px;
          visibility: hidden;
      }
  </style>