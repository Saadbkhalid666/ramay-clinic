import { useRef } from "react";
import * as THREE from "three";
import useThreeScene from "../hooks/useThreeScene";

/* Rotating DNA helix + floating medical cross + particles (hero background) */
function setup({ scene: sc }) {
  sc.add(new THREE.AmbientLight(0xffffff, 0.6));
  const l1 = new THREE.PointLight(0x2dd4bf, 1.7, 40);
  l1.position.set(6, 5, 8);
  sc.add(l1);
  const l2 = new THREE.PointLight(0xf59e0b, 1.2, 40);
  l2.position.set(-7, -4, 6);
  sc.add(l2);

  const g = new THREE.Group();
  sc.add(g);

  const N = 28,
    H = 11,
    R = 2.1,
    sp = new THREE.SphereGeometry(0.3, 24, 24),
    cy = new THREE.CylinderGeometry(0.05, 0.05, 1, 8);

  const mT = new THREE.MeshStandardMaterial({
      color: 0x14b8a6,
      metalness: 0.3,
      roughness: 0.25,
      emissive: 0x0d9488,
      emissiveIntensity: 0.4,
    }),
    mA = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.3,
      roughness: 0.25,
      emissive: 0xb45309,
      emissiveIntensity: 0.35,
    }),
    mC = new THREE.MeshStandardMaterial({
      color: 0xcbd5e1,
      transparent: true,
      opacity: 0.45,
    });

  for (let i = 0; i < N; i++) {
    const t = i / (N - 1),
      y = (t - 0.5) * H,
      a = t * Math.PI * 4,
      p1 = new THREE.Vector3(Math.cos(a) * R, y, Math.sin(a) * R),
      p2 = new THREE.Vector3(
        Math.cos(a + Math.PI) * R,
        y,
        Math.sin(a + Math.PI) * R,
      );
    const s1 = new THREE.Mesh(sp, mT),
      s2 = new THREE.Mesh(sp, mA),
      rg = new THREE.Mesh(cy, mC);
    s1.position.copy(p1);
    s2.position.copy(p2);
    rg.position.copy(p1).add(p2).multiplyScalar(0.5);
    rg.scale.y = p1.distanceTo(p2);
    rg.lookAt(p2);
    rg.rotateX(Math.PI / 2);
    g.add(s1, s2, rg);
  }

  const cm = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x2dd4bf,
      emissiveIntensity: 0.55,
      metalness: 0.2,
      roughness: 0.2,
    }),
    cross = new THREE.Group();
  cross.add(
    new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.5, 0.5), cm),
    new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.5, 0.5), cm),
  );
  cross.position.set(3.4, 2.4, 1.5);
  sc.add(cross);

  const pa = new Float32Array(480);
  for (let i = 0; i < 480; i++) pa[i] = (Math.random() - 0.5) * 20;
  const pg = new THREE.BufferGeometry();
  pg.setAttribute("position", new THREE.BufferAttribute(pa, 3));
  const pts = new THREE.Points(
    pg,
    new THREE.PointsMaterial({
      color: 0x5eead4,
      size: 0.07,
      transparent: true,
      opacity: 0.7,
    }),
  );
  sc.add(pts);

  return {
    startVisible: true,
    update(t, { x: mx, y: my }) {
      const s = Math.min(scrollY / innerHeight, 1.5);
      g.rotation.y = t * 0.35 + s * 2.2;
      g.rotation.x = my * 0.5;
      g.rotation.z = 0.35 + mx * 0.4;
      g.position.y = Math.sin(t) * 0.15 - s * 1.2;
      cross.rotation.y = t * 0.8;
      cross.rotation.x = t * 0.4;
      cross.position.y = 2.4 + Math.sin(t * 1.2) * 0.3;
      pts.rotation.y = t * 0.03 + mx * 0.25;
    },
  };
}

export default function HeroScene({ onReady }) {
  const ref = useRef(null);
  useThreeScene(ref, { fov: 40, position: [0, 0, 15] }, setup, onReady);
  return <canvas id="gl" ref={ref} aria-hidden="true" />;
}
