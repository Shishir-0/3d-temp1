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
    // 01 HERO — Low-angle monumentality looking past reflecting pool toward monolithic travertine wall
    {
      progress: 0.0,
      position: new THREE.Vector3(8.8, 3.6, 10.8),
      target: new THREE.Vector3(0.4, 0.35, 0.4),
      lightIntensity: 3.0,
      sunPosition: new THREE.Vector3(16, 22, 12),
      ambientColor: 0xfff8eb,
      fogDensity: 0.020,
    },
    // 02 SELECTED WORKS — Glide revealing the project installation pavilions and colonnade perspective
    {
      progress: 0.22,
      position: new THREE.Vector3(-4.8, 2.6, -6.5),
      target: new THREE.Vector3(-4.2, 0.5, -13.0),
      lightIntensity: 2.7,
      sunPosition: new THREE.Vector3(12, 19, 4),
      ambientColor: 0xfbf3e4,
      fogDensity: 0.022,
    },
    // 03 FLAGSHIP CASE STUDY — Rising vantage framing cantilevered roof void and glass light court
    {
      progress: 0.40,
      position: new THREE.Vector3(4.6, 3.2, -9.0),
      target: new THREE.Vector3(3.0, 0.7, -14.5),
      lightIntensity: 2.5,
      sunPosition: new THREE.Vector3(9, 17, -4),
      ambientColor: 0xf5ebd9,
      fogDensity: 0.024,
    },
    // 04 STUDIO PHILOSOPHY — Interior perspective looking through the double-height atrium
    {
      progress: 0.56,
      position: new THREE.Vector3(-2.8, 2.2, -5.0),
      target: new THREE.Vector3(-2.2, 1.2, -8.5),
      lightIntensity: 2.4,
      sunPosition: new THREE.Vector3(8, 16, -8),
      ambientColor: 0xefe5d2,
      fogDensity: 0.025,
    },
    // 05 MATERIAL ARCHIVE — Close-up tactile framing across the stone, brass and timber specimen slabs
    {
      progress: 0.70,
      position: new THREE.Vector3(4.6, 1.8, -14.5),
      target: new THREE.Vector3(7.2, 0.4, -20.0),
      lightIntensity: 2.6,
      sunPosition: new THREE.Vector3(10, 16, -14),
      ambientColor: 0xf7f0e4,
      fogDensity: 0.023,
    },
    // 06 ARCHITECTURAL DRAWINGS — Elevated drafting perspective framing floating architectural plates
    {
      progress: 0.82,
      position: new THREE.Vector3(1.0, 2.6, -21.0),
      target: new THREE.Vector3(-2.4, 1.4, -26.5),
      lightIntensity: 2.2,
      sunPosition: new THREE.Vector3(6, 14, -20),
      ambientColor: 0xeae2d4,
      fogDensity: 0.026,
    },
    // 07 SERVICES & JOURNAL — Passage through the monumental dark concrete colonnade
    {
      progress: 0.92,
      position: new THREE.Vector3(-4.8, 3.0, -26.5),
      target: new THREE.Vector3(0.0, 1.6, -33.0),
      lightIntensity: 1.9,
      sunPosition: new THREE.Vector3(4, 12, -26),
      ambientColor: 0xded5c6,
      fogDensity: 0.028,
    },
    // 08 NOCTURNE GALLERY CHAMBER — Commissions & Inquiries with warm twilight atmosphere
    {
      progress: 1.0,
      position: new THREE.Vector3(0.0, 2.2, -32.0),
      target: new THREE.Vector3(0.0, 0.7, -38.5),
      lightIntensity: 1.4,
      sunPosition: new THREE.Vector3(1, 9, -32),
      ambientColor: 0x1f1e1c,
      fogDensity: 0.034,
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
