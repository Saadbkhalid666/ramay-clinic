import { useRef } from "react";
import * as THREE from "three";
import useThreeScene from "../hooks/useThreeScene";

/* Floating capsules behind the 24/7 pharmacy banner */
function setup({ scene: sc }) {
  sc.add(new THREE.AmbientLight(0xffffff, 0.7));
  const a = new THREE.PointLight(0x2dd4bf, 1.6, 50);
  a.position.set(5, 6, 8);
  sc.add(a);
  const b = new THREE.PointLight(0xf59e0b, 1, 50);
  b.position.set(-6, -3, 6);
  sc.add(b);

  const cy = new THREE.CylinderGeometry(0.3, 0.3, 0.45, 20),
    sp = new THREE.SphereGeometry(0.3, 20, 20),
    M = [0x14b8a6, 0xf59e0b, 0x2dd4bf].map(
      (c) =>
        new THREE.MeshStandardMaterial({
          color: c,
          metalness: 0.2,
          roughness: 0.3,
        }),
    ),
    W = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.1,
      roughness: 0.35,
    }),
    caps = [];

  for (let i = 0; i < 14; i++) {
    const g = new THREE.Group(),
      m = M[i % 3];
    const c1 = new THREE.Mesh(cy, m),
      s1 = new THREE.Mesh(sp, m),
      c2 = new THREE.Mesh(cy, W),
      s2 = new THREE.Mesh(sp, W);
    c1.position.y = 0.225;
    s1.position.y = 0.45;
    c2.position.y = -0.225;
    s2.position.y = -0.45;
    g.add(c1, s1, c2, s2);
    g.position.set(
      -1 + Math.random() * 9,
      (Math.random() - 0.5) * 7,
      (Math.random() - 0.5) * 6,
    );
    g.rotation.set(Math.random() * 6, Math.random() * 6, Math.random() * 6);
    g.userData = {
      s: 0.2 + Math.random() * 0.5,
      p: Math.random() * 6,
      y: g.position.y,
    };
    g.scale.setScalar(0.8 + Math.random() * 0.7);
    sc.add(g);
    caps.push(g);
  }

  return {
    startVisible: false,
    update(t, { x: mx }) {
      caps.forEach((c) => {
        const d = c.userData;
        c.rotation.x += 0.004 * d.s * 3;
        c.rotation.z += 0.003 * d.s * 3;
        c.position.y = d.y + Math.sin(t * d.s + d.p) * 0.5;
      });
      sc.rotation.y = mx * 0.35;
    },
  };
}

export default function PharmacyScene() {
  const ref = useRef(null);
  useThreeScene(ref, { fov: 40, position: [0, 0, 14] }, setup);
  return <canvas
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full z-[1] pointer-events-none"
    />;
}
