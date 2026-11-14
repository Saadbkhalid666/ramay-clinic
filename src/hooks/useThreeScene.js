import { useEffect } from "react";
import * as THREE from "three";

/* Shared plumbing for the two WebGL canvases:
   - skips entirely for reduced-motion / no WebGL
   - sizes the renderer to the canvas, pauses when off-screen
   - cleans up listeners, animation frame and GPU resources on unmount
   `setup({ THREE, renderer, scene, camera })` builds the scene and returns
   { update(t, pointer), pointerY?: boolean, startVisible?: boolean }. */
export default function useThreeScene(canvasRef, camera, setup, onReady) {
  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv || matchMedia("(prefers-reduced-motion:reduce)").matches) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas: cv,
        antialias: true,
        alpha: true,
      });
    } catch (e) {
      return;
    }
    if (onReady) onReady();

    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(
      camera.fov,
      1,
      0.1,
      100,
    );
    cam.position.set(...camera.position);

    const { update, startVisible = true } = setup({ THREE, scene });

    const pointer = { x: 0, y: 0 };
    let visible = startVisible;
    let raf = 0;

    const onMove = (e) => {
      pointer.x = e.clientX / innerWidth - 0.5;
      pointer.y = e.clientY / innerHeight - 0.5;
    };
    const size = () => {
      const w = cv.clientWidth,
        h = cv.clientHeight;
      if (!w || !h) return;
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      renderer.setSize(w, h, false);
      cam.aspect = w / h;
      cam.updateProjectionMatrix();
    };

    addEventListener("pointermove", onMove);
    addEventListener("resize", size);
    size();

    const io = new IntersectionObserver((e) => {
      visible = e[0].isIntersecting;
      if (visible) size();
    });
    io.observe(cv);

    const clock = new THREE.Clock();
    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (!visible) return;
      update(clock.getElapsedTime(), pointer);
      renderer.render(scene, cam);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      removeEventListener("pointermove", onMove);
      removeEventListener("resize", size);
      scene.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) {
          (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) =>
            m.dispose(),
          );
        }
      });
      renderer.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
