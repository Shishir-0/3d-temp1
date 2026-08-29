import * as THREE from "three";

export interface ArchitecturalModelOptions {
  activeMaterialColor?: string;
  isDarkMode?: boolean;
  quality?: "high" | "medium" | "low";
}

export class ArchitecturalModelBuilder {
  public group: THREE.Group;
  private materials: THREE.Material[] = [];
  private geometries: THREE.BufferGeometry[] = [];
  private activeAccentMesh: THREE.Mesh | null = null;

  constructor() {
    this.group = new THREE.Group();
  }

  public build(options: ArchitecturalModelOptions = {}): THREE.Group {
    this.dispose();
    this.group = new THREE.Group();

    const isDark = options.isDarkMode ?? false;
    const accentHex = options.activeMaterialColor || "#e4dcd3";

    // --- CURATED ARCHITECTURAL PALETTE ---
    const concreteBaseColor = isDark ? 0x242220 : 0xdcd8d1;
    const travertineBaseColor = isDark ? 0x1e1d1b : 0xede8e1;
    const smokedWoodColor = isDark ? 0x33261c : 0x6e533d;
    const glassTintColor = isDark ? 0x3a4852 : 0xc2d3de;
    const darkSteelColor = isDark ? 0x3e3a37 : 0x22201e;
    const waterBaseColor = isDark ? 0x0d1419 : 0x758a99;

    // --- PHYSICALLY BASED MATERIALS ---
    const concreteMaterial = new THREE.MeshStandardMaterial({
      color: concreteBaseColor,
      roughness: 0.88,
      metalness: 0.04,
    });

    const travertineMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(accentHex || travertineBaseColor),
      roughness: 0.72,
      metalness: 0.08,
    });

    const woodMaterial = new THREE.MeshStandardMaterial({
      color: smokedWoodColor,
      roughness: 0.75,
      metalness: 0.05,
    });

    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: glassTintColor,
      transparent: true,
      opacity: isDark ? 0.4 : 0.3,
      roughness: 0.08,
      metalness: 0.12,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      transmission: 0.6,
      ior: 1.52,
    });

    const steelMaterial = new THREE.MeshStandardMaterial({
      color: darkSteelColor,
      roughness: 0.28,
      metalness: 0.85,
    });

    const waterMaterial = new THREE.MeshPhysicalMaterial({
      color: waterBaseColor,
      roughness: 0.03,
      metalness: 0.92,
      reflectivity: 0.98,
      clearcoat: 1.0,
    });

    const interiorGlowMaterial = new THREE.MeshBasicMaterial({
      color: isDark ? 0xffdfa8 : 0xfff2d4,
      transparent: true,
      opacity: isDark ? 0.35 : 0.2,
    });

    this.materials.push(
      concreteMaterial,
      travertineMaterial,
      woodMaterial,
      glassMaterial,
      steelMaterial,
      waterMaterial,
      interiorGlowMaterial
    );

    // --- 01 MONOLITHIC GROUND PLINTH (EARTH ANCHOR) ---
    const mainPlinthGeo = new THREE.BoxGeometry(8.5, 0.35, 6.2);
    const mainPlinthMesh = new THREE.Mesh(mainPlinthGeo, concreteMaterial);
    mainPlinthMesh.position.set(0.2, -1.3, 0);
    mainPlinthMesh.receiveShadow = true;
    mainPlinthMesh.castShadow = true;
    this.group.add(mainPlinthMesh);
    this.geometries.push(mainPlinthGeo);

    // --- 02 SUBTERRANEAN WATER COURT (REFLECTING BASIN) ---
    const waterBasinGeo = new THREE.BoxGeometry(3.6, 0.08, 2.8);
    const waterBasinMesh = new THREE.Mesh(waterBasinGeo, waterMaterial);
    waterBasinMesh.position.set(1.8, -1.13, 1.0);
    waterBasinMesh.receiveShadow = true;
    this.group.add(waterBasinMesh);
    this.geometries.push(waterBasinGeo);

    // --- 03 PRIMARY TRAVERTINE RESIDENTIAL MASS (ACCENT SYNCED) ---
    const travertineBlockGeo = new THREE.BoxGeometry(3.8, 1.45, 2.8);
    const travertineBlockMesh = new THREE.Mesh(travertineBlockGeo, travertineMaterial);
    travertineBlockMesh.position.set(-1.4, -0.4, 0.2);
    travertineBlockMesh.castShadow = true;
    travertineBlockMesh.receiveShadow = true;
    this.group.add(travertineBlockMesh);
    this.geometries.push(travertineBlockGeo);
    this.activeAccentMesh = travertineBlockMesh;

    // Linear Shadow Reveal Grooves on Travertine Facade
    const grooveGeo = new THREE.BoxGeometry(3.82, 0.03, 0.03);
    this.geometries.push(grooveGeo);
    const groove1 = new THREE.Mesh(grooveGeo, steelMaterial);
    groove1.position.set(-1.4, -0.1, 1.61);
    this.group.add(groove1);
    const groove2 = new THREE.Mesh(grooveGeo, steelMaterial);
    groove2.position.set(-1.4, -0.6, 1.61);
    this.group.add(groove2);

    // --- 04 CANTILEVERED CONCRETE ROOF SLAB (MONUMENTAL OVERHANG) ---
    const mainRoofGeo = new THREE.BoxGeometry(6.4, 0.28, 4.4);
    const mainRoofMesh = new THREE.Mesh(mainRoofGeo, concreteMaterial);
    mainRoofMesh.position.set(0.4, 1.25, 0.1);
    mainRoofMesh.castShadow = true;
    mainRoofMesh.receiveShadow = true;
    this.group.add(mainRoofMesh);
    this.geometries.push(mainRoofGeo);

    // --- 05 UPPER FLOATING SKY PAVILION SLAB ---
    const skyPavilionGeo = new THREE.BoxGeometry(4.0, 0.2, 3.0);
    const skyPavilionMesh = new THREE.Mesh(skyPavilionGeo, concreteMaterial);
    skyPavilionMesh.position.set(1.2, 2.05, 0.6);
    skyPavilionMesh.castShadow = true;
    skyPavilionMesh.receiveShadow = true;
    this.group.add(skyPavilionMesh);
    this.geometries.push(skyPavilionGeo);

    // --- 06 RECESSED FLOOR-TO-CEILING GLASS FACADE ---
    const glassFacadeGeo = new THREE.BoxGeometry(3.2, 1.55, 0.06);
    const glassFacadeMesh = new THREE.Mesh(glassFacadeGeo, glassMaterial);
    glassFacadeMesh.position.set(1.4, 0.35, 0.95);
    glassFacadeMesh.castShadow = true;
    this.group.add(glassFacadeMesh);
    this.geometries.push(glassFacadeGeo);

    // Internal Warm Volumetric Ambient Light Volume
    const internalGlowGeo = new THREE.BoxGeometry(2.8, 1.2, 1.6);
    const internalGlowMesh = new THREE.Mesh(internalGlowGeo, interiorGlowMaterial);
    internalGlowMesh.position.set(1.4, 0.35, 0.1);
    this.group.add(internalGlowMesh);
    this.geometries.push(internalGlowGeo);

    // --- 07 TIMBER BRISE-SOLEIL / SLATTED WOOD SCREEN ---
    const screenGroup = new THREE.Group();
    const timberSlatGeo = new THREE.BoxGeometry(0.07, 1.65, 0.12);
    this.geometries.push(timberSlatGeo);
    for (let i = 0; i < 11; i++) {
      const slat = new THREE.Mesh(timberSlatGeo, woodMaterial);
      slat.position.set(-0.9 + i * 0.2, 0.35, -1.35);
      slat.castShadow = true;
      slat.receiveShadow = true;
      screenGroup.add(slat);
    }
    this.group.add(screenGroup);

    // --- 08 BLACKENED STEEL STRUCTURAL COLUMNS ---
    const columnGeo = new THREE.CylinderGeometry(0.045, 0.045, 1.7, 24);
    this.geometries.push(columnGeo);

    const columnCoords = [
      [2.7, 0.35, 1.7],
      [2.7, 0.35, -1.4],
      [-0.1, 0.35, 1.7],
      [-3.0, 0.35, -1.4],
    ];

    columnCoords.forEach(([x, y, z]) => {
      const col = new THREE.Mesh(columnGeo, steelMaterial);
      col.position.set(x, y, z);
      col.castShadow = true;
      this.group.add(col);
    });

    // --- 09 FLOATING TRAVERTINE STEPPING STONES OVER WATER ---
    const stepGeo = new THREE.BoxGeometry(1.6, 0.1, 0.45);
    this.geometries.push(stepGeo);
    for (let i = 0; i < 5; i++) {
      const step = new THREE.Mesh(stepGeo, travertineMaterial);
      step.position.set(2.0 - i * 0.18, -1.05 + i * 0.14, 1.8 + i * 0.18);
      step.castShadow = true;
      step.receiveShadow = true;
      this.group.add(step);
    }

    // Centering the composition
    this.group.position.set(0, -0.2, 0);

    return this.group;
  }

  public updateAccentColor(hexColor: string) {
    if (this.activeAccentMesh && this.activeAccentMesh.material) {
      (this.activeAccentMesh.material as THREE.MeshStandardMaterial).color.set(hexColor);
    }
  }

  public animate(delta: number) {
    // Elegant, slow architectural drift (no artificial fast spins)
    this.group.rotation.y += delta * 0.015;
  }

  public dispose() {
    this.geometries.forEach((g) => g.dispose());
    this.materials.forEach((m) => m.dispose());
    this.geometries = [];
    this.materials = [];
    this.activeAccentMesh = null;
  }
}
