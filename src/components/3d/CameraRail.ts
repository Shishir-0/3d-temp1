import * as THREE from "three";

export interface CameraKeyframe {
  progress: number;
  position: THREE.Vector3;
  target: THREE.Vector3;
  lightIntensity: number;
  sunPosition: THREE.Vector3;
  ambientColor: number;
  fogDensity: number;
}

export class CameraRail {
  public keyframes: CameraKeyframe[] = [
    // 01 HERO — Entrance Plinth & Monoliths
    {
      progress: 0.0,
      position: new THREE.Vector3(9.5, 4.2, 11.5),
      target: new THREE.Vector3(0, 0.4, 0),
      lightIntensity: 2.8,
      sunPosition: new THREE.Vector3(14, 20, 11),
      ambientColor: 0xfffaf2,
      fogDensity: 0.024,
    },
    // 02 STUDIO — Interior Light Court & Atrium
    {
      progress: 0.14,
      position: new THREE.Vector3(2.5, 2.8, 6.5),
      target: new THREE.Vector3(-1.0, 1.2, -1.0),
      lightIntensity: 2.4,
      sunPosition: new THREE.Vector3(10, 18, 8),
      ambientColor: 0xfff6eb,
      fogDensity: 0.026,
    },
    // 03 SELECTED PROJECTS — Project Pavilion 01 & 02
    {
      progress: 0.30,
      position: new THREE.Vector3(-4.5, 2.2, 3.5),
      target: new THREE.Vector3(-6.5, 1.0, -1.5),
      lightIntensity: 2.2,
      sunPosition: new THREE.Vector3(8, 16, 5),
      ambientColor: 0xf5eedf,
      fogDensity: 0.028,
    },
    // 04 FEATURED PROJECT — Flagship Spatial Installation
    {
      progress: 0.45,
      position: new THREE.Vector3(-1.5, 3.5, -4.0),
      target: new THREE.Vector3(2.0, 1.8, -8.0),
      lightIntensity: 2.0,
      sunPosition: new THREE.Vector3(6, 14, 2),
      ambientColor: 0xede4d5,
      fogDensity: 0.030,
    },
    // 05 MATERIAL ARCHIVE — Workshop Slabs & Pedestals
    {
      progress: 0.60,
      position: new THREE.Vector3(5.5, 2.0, -9.5),
      target: new THREE.Vector3(8.0, 0.8, -13.0),
      lightIntensity: 2.3,
      sunPosition: new THREE.Vector3(10, 15, -6),
      ambientColor: 0xf7f0e6,
      fogDensity: 0.026,
    },
    // 06 SPATIAL DRAWINGS — Draftsman's Floating Planes
    {
      progress: 0.74,
      position: new THREE.Vector3(1.0, 2.6, -16.0),
      target: new THREE.Vector3(-2.5, 1.4, -20.0),
      lightIntensity: 2.0,
      sunPosition: new THREE.Vector3(4, 12, -12),
      ambientColor: 0xe8e2d8,
      fogDensity: 0.028,
    },
    // 07 SERVICES & JOURNAL — Monolith Colonnade
    {
      progress: 0.88,
      position: new THREE.Vector3(-6.0, 3.2, -22.5),
      target: new THREE.Vector3(-1.0, 1.6, -27.0),
      lightIntensity: 1.7,
      sunPosition: new THREE.Vector3(2, 10, -18),
      ambientColor: 0xdfd9ce,
      fogDensity: 0.032,
    },
    // 08 CONTACT — The Nocturne Gallery Space
    {
      progress: 1.0,
      position: new THREE.Vector3(0.0, 2.2, -30.0),
      target: new THREE.Vector3(0.0, 1.0, -35.0),
      lightIntensity: 1.2,
      sunPosition: new THREE.Vector3(0, 8, -25),
      ambientColor: 0x1f1e1c,
      fogDensity: 0.038,
    },
  ];

  public evaluate(
    progress: number,
    outPosition: THREE.Vector3,
    outTarget: THREE.Vector3
  ): { lightIntensity: number; sunPosition: THREE.Vector3; ambientColor: number; fogDensity: number } {
    const clampedP = Math.max(0, Math.min(1, progress));

    // Find bounding keyframes
    let startIndex = 0;
    for (let i = 0; i < this.keyframes.length - 1; i++) {
      if (clampedP >= this.keyframes[i].progress && clampedP <= this.keyframes[i + 1].progress) {
        startIndex = i;
        break;
      }
    }

    const k0 = this.keyframes[startIndex];
    const k1 = this.keyframes[startIndex + 1] || k0;

    const span = k1.progress - k0.progress || 1;
    const rawT = (clampedP - k0.progress) / span;
    // Smooth cubic ease-in-out
    const t = rawT * rawT * (3 - 2 * rawT);

    outPosition.lerpVectors(k0.position, k1.position, t);
    outTarget.lerpVectors(k0.target, k1.target, t);

    const lightIntensity = THREE.MathUtils.lerp(k0.lightIntensity, k1.lightIntensity, t);
    const sunPosition = new THREE.Vector3().lerpVectors(k0.sunPosition, k1.sunPosition, t);
    const fogDensity = THREE.MathUtils.lerp(k0.fogDensity, k1.fogDensity, t);

    return {
      lightIntensity,
      sunPosition,
      ambientColor: k0.ambientColor,
      fogDensity,
    };
  }
}
