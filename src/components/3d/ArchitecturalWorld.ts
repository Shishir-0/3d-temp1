import * as THREE from "three";

export interface ArchitecturalWorldOptions {
  isDarkMode?: boolean;
  activeMaterialHex?: string;
  quality?: "high" | "medium" | "low";
}

export class ArchitecturalWorld {
  public group: THREE.Group;
  private materials: THREE.Material[] = [];
  private geometries: THREE.BufferGeometry[] = [];
  public activeMaterialMeshes: THREE.Mesh[] = [];

  constructor() {
    this.group = new THREE.Group();
  }

  public build(options: ArchitecturalWorldOptions = {}): THREE.Group {
    this.dispose();
    this.group = new THREE.Group();

    const isDark = options.isDarkMode ?? false;
    const accentHex = options.activeMaterialHex || "#e4dcd3";

    // Physically-plausible architectural palette
    const concreteColor = isDark ? 0x22201e : 0xd5cfc7;
    const travertineColor = isDark ? 0x1c1a18 : 0xe8e2d8;
    const woodColor = isDark ? 0x33281e : 0x564334;
    const darkSteelColor = isDark ? 0x2e2b28 : 0x1c1b1a;
    const brassColor = isDark ? 0x8a764d : 0xb09b6e;
    const glassColor = isDark ? 0x2a363d : 0xc6d8e3;
    const waterColor = isDark ? 0x0e151b : 0x485863;
    const drawingPlaneColor = isDark ? 0x262422 : 0xf2eee8;

    // PBR Materials
    const concreteMat = new THREE.MeshStandardMaterial({
      color: concreteColor,
      roughness: 0.9,
      metalness: 0.03,
    });

    const travertineMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(accentHex || travertineColor),
      roughness: 0.68,
      metalness: 0.06,
    });

    const woodMat = new THREE.MeshStandardMaterial({
      color: woodColor,
      roughness: 0.74,
      metalness: 0.04,
    });

    const steelMat = new THREE.MeshStandardMaterial({
      color: darkSteelColor,
      roughness: 0.28,
      metalness: 0.88,
    });

    const brassMat = new THREE.MeshStandardMaterial({
      color: brassColor,
      roughness: 0.36,
      metalness: 0.82,
    });

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: glassColor,
      transparent: true,
      opacity: isDark ? 0.35 : 0.25,
      roughness: 0.06,
      metalness: 0.1,
      clearcoat: 1.0,
      transmission: 0.65,
      ior: 1.5,
    });

    const waterMat = new THREE.MeshPhysicalMaterial({
      color: waterColor,
      roughness: 0.03,
      metalness: 0.94,
      reflectivity: 0.98,
      clearcoat: 1.0,
    });

    const drawingMat = new THREE.MeshStandardMaterial({
      color: drawingPlaneColor,
      roughness: 0.55,
      metalness: 0.08,
    });

    this.materials.push(concreteMat, travertineMat, woodMat, steelMat, brassMat, glassMat, waterMat, drawingMat);

    // =========================================================================
    // 01. CONTINUOUS ARCHITECTURAL GALLERY SPINE & GROUND PLINTHS
    // =========================================================================
    const spineGeo = new THREE.BoxGeometry(18, 0.4, 64);
    const spinePlinth = new THREE.Mesh(spineGeo, concreteMat);
    spinePlinth.position.set(0, -1.2, -16);
    spinePlinth.receiveShadow = true;
    spinePlinth.castShadow = true;
    this.group.add(spinePlinth);
    this.geometries.push(spineGeo);

    // Terraced Step Reveals
    const stepGeo = new THREE.BoxGeometry(18.4, 0.15, 64.4);
    const stepPlinth = new THREE.Mesh(stepGeo, steelMat);
    stepPlinth.position.set(0, -1.45, -16);
    stepPlinth.receiveShadow = true;
    this.group.add(stepPlinth);
    this.geometries.push(stepGeo);

    // =========================================================================
    // STATION 01 (Z ~ 0): ARRIVAL PAVILION & WATER BASIN (HERO)
    // =========================================================================
    // Cantilevered Concrete Roof with Chamfer Reveal
    const heroRoofGeo = new THREE.BoxGeometry(8.4, 0.35, 6.0);
    const heroRoof = new THREE.Mesh(heroRoofGeo, concreteMat);
    heroRoof.position.set(0.6, 2.1, 0.4);
    heroRoof.castShadow = true;
    heroRoof.receiveShadow = true;
    this.group.add(heroRoof);
    this.geometries.push(heroRoofGeo);

    // Travertine Entrance Monolith
    const heroTravertineGeo = new THREE.BoxGeometry(4.4, 2.0, 3.4);
    const heroTravertine = new THREE.Mesh(heroTravertineGeo, travertineMat);
    heroTravertine.position.set(-1.9, -0.1, 0.2);
    heroTravertine.castShadow = true;
    heroTravertine.receiveShadow = true;
    this.group.add(heroTravertine);
    this.geometries.push(heroTravertineGeo);
    this.activeMaterialMeshes.push(heroTravertine);

    // Sunken Reflecting Water Pool
    const poolBasinGeo = new THREE.BoxGeometry(4.8, 0.1, 3.8);
    const poolBasin = new THREE.Mesh(poolBasinGeo, waterMat);
    poolBasin.position.set(2.4, -1.0, 1.3);
    poolBasin.receiveShadow = true;
    this.group.add(poolBasin);
    this.geometries.push(poolBasinGeo);

    // Pool Coping Border
    const copingGeo = new THREE.BoxGeometry(5.0, 0.08, 4.0);
    const copingMesh = new THREE.Mesh(copingGeo, steelMat);
    copingMesh.position.set(2.4, -1.05, 1.3);
    this.group.add(copingMesh);
    this.geometries.push(copingGeo);

    // Slender Blackened Steel Knife Columns
    const colGeo = new THREE.CylinderGeometry(0.045, 0.045, 3.2, 16);
    this.geometries.push(colGeo);
    const col1 = new THREE.Mesh(colGeo, steelMat);
    col1.position.set(3.8, 0.45, 2.4);
    col1.castShadow = true;
    this.group.add(col1);
    const col2 = new THREE.Mesh(colGeo, steelMat);
    col2.position.set(3.8, 0.45, -1.4);
    col2.castShadow = true;
    this.group.add(col2);

    // Vertical Rhythmic Timber Louvers
    const slatGeo = new THREE.BoxGeometry(0.07, 3.0, 0.12);
    this.geometries.push(slatGeo);
    for (let i = 0; i < 11; i++) {
      const slat = new THREE.Mesh(slatGeo, woodMat);
      slat.position.set(-0.9 + i * 0.24, 0.4, -1.9);
      slat.castShadow = true;
      this.group.add(slat);
    }

    // =========================================================================
    // STATION 02 (Z ~ -6): ATRIUM LIGHT COURT (STUDIO PHILOSOPHY)
    // =========================================================================
    // Double-Height Shear Wall with Aperture
    const atriumWallGeo = new THREE.BoxGeometry(0.45, 4.6, 6.4);
    const atriumWall = new THREE.Mesh(atriumWallGeo, concreteMat);
    atriumWall.position.set(-4.0, 1.1, -6.5);
    atriumWall.castShadow = true;
    atriumWall.receiveShadow = true;
    this.group.add(atriumWall);
    this.geometries.push(atriumWallGeo);

    // Floating Bridge Slab
    const bridgeGeo = new THREE.BoxGeometry(4.2, 0.22, 1.8);
    const bridgeMesh = new THREE.Mesh(bridgeGeo, concreteMat);
    bridgeMesh.position.set(-1.0, 1.5, -6.5);
    bridgeMesh.castShadow = true;
    bridgeMesh.receiveShadow = true;
    this.group.add(bridgeMesh);
    this.geometries.push(bridgeGeo);

    // Structural Glass Screen
    const atriumGlassGeo = new THREE.BoxGeometry(3.8, 2.4, 0.06);
    const atriumGlass = new THREE.Mesh(atriumGlassGeo, glassMat);
    atriumGlass.position.set(0.9, 0.3, -6.0);
    this.group.add(atriumGlass);
    this.geometries.push(atriumGlassGeo);

    // Floating Stone Bench
    const benchGeo = new THREE.BoxGeometry(2.4, 0.4, 0.8);
    const benchMesh = new THREE.Mesh(benchGeo, travertineMat);
    benchMesh.position.set(1.2, -0.8, -7.5);
    benchMesh.castShadow = true;
    this.group.add(benchMesh);
    this.geometries.push(benchGeo);

    // =========================================================================
    // STATION 03 (Z ~ -12): PROJECT EXHIBITION PAVILIONS (SELECTED WORKS)
    // =========================================================================
    // Project 01 Installation Plinth
    const p1PlinthGeo = new THREE.BoxGeometry(3.4, 0.6, 3.4);
    const p1Plinth = new THREE.Mesh(p1PlinthGeo, concreteMat);
    p1Plinth.position.set(-5.6, -0.9, -12.0);
    p1Plinth.castShadow = true;
    p1Plinth.receiveShadow = true;
    this.group.add(p1Plinth);
    this.geometries.push(p1PlinthGeo);

    const p1ModelGeo = new THREE.BoxGeometry(2.2, 1.2, 1.8);
    const p1Model = new THREE.Mesh(p1ModelGeo, travertineMat);
    p1Model.position.set(-5.6, 0.05, -12.0);
    p1Model.castShadow = true;
    this.group.add(p1Model);
    this.geometries.push(p1ModelGeo);
    this.activeMaterialMeshes.push(p1Model);

    // Project 02 Installation Plinth
    const p2PlinthGeo = new THREE.BoxGeometry(3.4, 0.6, 3.4);
    const p2Plinth = new THREE.Mesh(p2PlinthGeo, concreteMat);
    p2Plinth.position.set(4.8, -0.9, -13.5);
    p2Plinth.castShadow = true;
    p2Plinth.receiveShadow = true;
    this.group.add(p2Plinth);
    this.geometries.push(p2PlinthGeo);

    const p2ModelGeo = new THREE.BoxGeometry(2.6, 0.9, 2.0);
    const p2Model = new THREE.Mesh(p2ModelGeo, glassMat);
    p2Model.position.set(4.8, 0.05, -13.5);
    this.group.add(p2Model);
    this.geometries.push(p2ModelGeo);

    // =========================================================================
    // STATION 04 (Z ~ -18): MATERIALITY ARCHIVE WORKSHOP
    // =========================================================================
    const materialPositions = [
      { x: 5.4, z: -17.5, name: "Travertine", color: 0xe4dcd3 },
      { x: 7.0, z: -18.2, name: "Smoked Oak", color: 0x3d3128 },
      { x: 8.6, z: -18.8, name: "Brushed Brass", color: 0xb09b6e },
      { x: 6.1, z: -19.8, name: "Concrete", color: 0x9c9790 },
      { x: 7.7, z: -20.5, name: "Fluted Glass", color: 0xd8dfde },
    ];

    const slabGeo = new THREE.BoxGeometry(0.85, 1.5, 0.14);
    this.geometries.push(slabGeo);
    const pedGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.8, 16);
    this.geometries.push(pedGeo);

    materialPositions.forEach((mat) => {
      // Pedestal
      const ped = new THREE.Mesh(pedGeo, steelMat);
      ped.position.set(mat.x, -0.8, mat.z);
      ped.castShadow = true;
      this.group.add(ped);

      // Material Specimen Slab
      const slabMat = new THREE.MeshStandardMaterial({
        color: mat.color,
        roughness: mat.name === "Brushed Brass" ? 0.35 : 0.6,
        metalness: mat.name === "Brushed Brass" ? 0.85 : 0.08,
      });
      this.materials.push(slabMat);
      const slab = new THREE.Mesh(slabGeo, slabMat);
      slab.position.set(mat.x, 0.25, mat.z);
      slab.rotation.y = Math.PI * 0.12;
      slab.castShadow = true;
      this.group.add(slab);
    });

    // =========================================================================
    // STATION 05 (Z ~ -24): DRAFTSMAN'S FLOATING TECHNICAL DRAWINGS
    // =========================================================================
    const drawingPlaneGeo = new THREE.BoxGeometry(3.8, 2.5, 0.04);
    this.geometries.push(drawingPlaneGeo);

    const dwg1 = new THREE.Mesh(drawingPlaneGeo, drawingMat);
    dwg1.position.set(-1.9, 1.3, -24.5);
    dwg1.rotation.y = Math.PI * 0.14;
    dwg1.rotation.x = Math.PI * -0.04;
    dwg1.castShadow = true;
    this.group.add(dwg1);

    const dwg2 = new THREE.Mesh(drawingPlaneGeo, drawingMat);
    dwg2.position.set(-3.4, 1.9, -26.2);
    dwg2.rotation.y = Math.PI * 0.24;
    dwg2.castShadow = true;
    this.group.add(dwg2);

    // =========================================================================
    // STATION 06 (Z ~ -30): DISCIPLINE COLONNADE & PORTALS
    // =========================================================================
    const grandColGeo = new THREE.BoxGeometry(0.85, 5.2, 0.85);
    this.geometries.push(grandColGeo);

    for (let i = 0; i < 4; i++) {
      const col = new THREE.Mesh(grandColGeo, concreteMat);
      col.position.set(-4.2 + i * 2.9, 1.4, -31.0);
      col.castShadow = true;
      col.receiveShadow = true;
      this.group.add(col);
    }

    const colonnadeLintelGeo = new THREE.BoxGeometry(11.4, 0.45, 1.5);
    const lintel = new THREE.Mesh(colonnadeLintelGeo, concreteMat);
    lintel.position.set(0.15, 4.1, -31.0);
    lintel.castShadow = true;
    this.group.add(lintel);
    this.geometries.push(colonnadeLintelGeo);

    // =========================================================================
    // STATION 07 (Z ~ -36): NOCTURNE GALLERY CHAMBER (COMMISSIONS & CONTACT)
    // =========================================================================
    const nocturneWallGeo = new THREE.BoxGeometry(14.5, 4.8, 0.5);
    const nocturneWall = new THREE.Mesh(nocturneWallGeo, steelMat);
    nocturneWall.position.set(0, 1.1, -38.0);
    nocturneWall.castShadow = true;
    nocturneWall.receiveShadow = true;
    this.group.add(nocturneWall);
    this.geometries.push(nocturneWallGeo);

    // Monolithic Reception Stone
    const receptionStoneGeo = new THREE.BoxGeometry(3.2, 0.95, 1.3);
    const receptionStone = new THREE.Mesh(receptionStoneGeo, travertineMat);
    receptionStone.position.set(0, -0.72, -34.5);
    receptionStone.castShadow = true;
    receptionStone.receiveShadow = true;
    this.group.add(receptionStone);
    this.geometries.push(receptionStoneGeo);

    return this.group;
  }

  public updateAccentColor(hexColor: string) {
    this.activeMaterialMeshes.forEach((mesh) => {
      if (mesh.material && mesh.material instanceof THREE.MeshStandardMaterial) {
        mesh.material.color.set(hexColor);
      }
    });
  }

  public dispose() {
    this.geometries.forEach((g) => g.dispose());
    this.materials.forEach((m) => m.dispose());
    this.geometries = [];
    this.materials = [];
    this.activeMaterialMeshes = [];
  }
}
