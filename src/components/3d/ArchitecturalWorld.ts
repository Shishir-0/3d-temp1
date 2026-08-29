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

    // Palette definition
    const concreteColor = isDark ? 0x22201e : 0xd8d4cb;
    const travertineColor = isDark ? 0x1c1a18 : 0xede8e1;
    const woodColor = isDark ? 0x30251c : 0x6e523c;
    const darkSteelColor = isDark ? 0x3a3633 : 0x1f1d1c;
    const glassColor = isDark ? 0x3d4b54 : 0xc2d4de;
    const waterColor = isDark ? 0x0c1217 : 0x687d8c;
    const drawingPlaneColor = isDark ? 0x282624 : 0xf4f1eb;

    // Materials
    const concreteMat = new THREE.MeshStandardMaterial({
      color: concreteColor,
      roughness: 0.88,
      metalness: 0.04,
    });

    const travertineMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(accentHex || travertineColor),
      roughness: 0.7,
      metalness: 0.08,
    });

    const woodMat = new THREE.MeshStandardMaterial({
      color: woodColor,
      roughness: 0.78,
      metalness: 0.05,
    });

    const steelMat = new THREE.MeshStandardMaterial({
      color: darkSteelColor,
      roughness: 0.3,
      metalness: 0.85,
    });

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: glassColor,
      transparent: true,
      opacity: isDark ? 0.4 : 0.3,
      roughness: 0.08,
      metalness: 0.1,
      clearcoat: 1.0,
      transmission: 0.6,
    });

    const waterMat = new THREE.MeshPhysicalMaterial({
      color: waterColor,
      roughness: 0.04,
      metalness: 0.9,
      reflectivity: 0.96,
      clearcoat: 1.0,
    });

    const drawingMat = new THREE.MeshStandardMaterial({
      color: drawingPlaneColor,
      roughness: 0.6,
      metalness: 0.1,
    });

    this.materials.push(concreteMat, travertineMat, woodMat, steelMat, glassMat, waterMat, drawingMat);

    // =========================================================================
    // 01. CONTINUOUS ARCHITECTURAL PAVILION SPINE & GROUND PLINTH
    // =========================================================================
    const spinePlinthGeo = new THREE.BoxGeometry(16, 0.4, 60);
    const spinePlinth = new THREE.Mesh(spinePlinthGeo, concreteMat);
    spinePlinth.position.set(0, -1.2, -15);
    spinePlinth.receiveShadow = true;
    spinePlinth.castShadow = true;
    this.group.add(spinePlinth);
    this.geometries.push(spinePlinthGeo);

    // =========================================================================
    // ZONE 01 (Z ~ 0): ARRIVAL PAVILION & WATER BASIN (HERO)
    // =========================================================================
    // Cantilevered Concrete Roof
    const heroRoofGeo = new THREE.BoxGeometry(8.0, 0.3, 5.5);
    const heroRoof = new THREE.Mesh(heroRoofGeo, concreteMat);
    heroRoof.position.set(0.5, 2.0, 0.5);
    heroRoof.castShadow = true;
    heroRoof.receiveShadow = true;
    this.group.add(heroRoof);
    this.geometries.push(heroRoofGeo);

    // Travertine Entrance Monolith
    const heroTravertineGeo = new THREE.BoxGeometry(4.2, 1.8, 3.2);
    const heroTravertine = new THREE.Mesh(heroTravertineGeo, travertineMat);
    heroTravertine.position.set(-1.8, -0.2, 0.2);
    heroTravertine.castShadow = true;
    heroTravertine.receiveShadow = true;
    this.group.add(heroTravertine);
    this.geometries.push(heroTravertineGeo);
    this.activeMaterialMeshes.push(heroTravertine);

    // Reflecting Pool
    const poolGeo = new THREE.BoxGeometry(4.5, 0.08, 3.5);
    const poolMesh = new THREE.Mesh(poolGeo, waterMat);
    poolMesh.position.set(2.2, -1.02, 1.2);
    poolMesh.receiveShadow = true;
    this.group.add(poolMesh);
    this.geometries.push(poolGeo);

    // Structural Blackened Steel Columns
    const colGeo = new THREE.CylinderGeometry(0.05, 0.05, 3.0, 16);
    this.geometries.push(colGeo);
    const col1 = new THREE.Mesh(colGeo, steelMat);
    col1.position.set(3.5, 0.4, 2.2);
    col1.castShadow = true;
    this.group.add(col1);
    const col2 = new THREE.Mesh(colGeo, steelMat);
    col2.position.set(3.5, 0.4, -1.2);
    col2.castShadow = true;
    this.group.add(col2);

    // Timber Slats
    const slatGeo = new THREE.BoxGeometry(0.08, 2.8, 0.1);
    this.geometries.push(slatGeo);
    for (let i = 0; i < 9; i++) {
      const slat = new THREE.Mesh(slatGeo, woodMat);
      slat.position.set(-0.8 + i * 0.22, 0.3, -1.8);
      slat.castShadow = true;
      this.group.add(slat);
    }

    // =========================================================================
    // ZONE 02 (Z ~ -6): THE ATRIUM & LIGHT COURT (STUDIO PHILOSOPHY)
    // =========================================================================
    // Double-height Atrium Wall with Light Aperture
    const atriumWallGeo = new THREE.BoxGeometry(0.4, 4.2, 6.0);
    const atriumWall = new THREE.Mesh(atriumWallGeo, concreteMat);
    atriumWall.position.set(-3.8, 0.9, -6.5);
    atriumWall.castShadow = true;
    atriumWall.receiveShadow = true;
    this.group.add(atriumWall);
    this.geometries.push(atriumWallGeo);

    // Floating Bridge Slab
    const bridgeGeo = new THREE.BoxGeometry(4.0, 0.2, 1.6);
    const bridgeMesh = new THREE.Mesh(bridgeGeo, concreteMat);
    bridgeMesh.position.set(-1.0, 1.4, -6.5);
    bridgeMesh.castShadow = true;
    bridgeMesh.receiveShadow = true;
    this.group.add(bridgeMesh);
    this.geometries.push(bridgeGeo);

    // Glass Screen in Atrium
    const atriumGlassGeo = new THREE.BoxGeometry(3.6, 2.2, 0.05);
    const atriumGlass = new THREE.Mesh(atriumGlassGeo, glassMat);
    atriumGlass.position.set(0.8, 0.2, -6.0);
    this.group.add(atriumGlass);
    this.geometries.push(atriumGlassGeo);

    // =========================================================================
    // ZONE 03 (Z ~ -12): PROJECT INSTALLATION PAVILIONS (PORTFOLIO)
    // =========================================================================
    // Project 01 Installation (Casa Mono Plinth & Model Fragment)
    const p1PlinthGeo = new THREE.BoxGeometry(3.2, 0.6, 3.2);
    const p1Plinth = new THREE.Mesh(p1PlinthGeo, concreteMat);
    p1Plinth.position.set(-5.5, -0.9, -12.0);
    p1Plinth.castShadow = true;
    p1Plinth.receiveShadow = true;
    this.group.add(p1Plinth);
    this.geometries.push(p1PlinthGeo);

    const p1ModelGeo = new THREE.BoxGeometry(2.0, 1.1, 1.6);
    const p1Model = new THREE.Mesh(p1ModelGeo, travertineMat);
    p1Model.position.set(-5.5, 0.0, -12.0);
    p1Model.castShadow = true;
    this.group.add(p1Model);
    this.geometries.push(p1ModelGeo);
    this.activeMaterialMeshes.push(p1Model);

    // Project 02 Installation (Villa No. 07 Cantilever Glass Model)
    const p2PlinthGeo = new THREE.BoxGeometry(3.2, 0.6, 3.2);
    const p2Plinth = new THREE.Mesh(p2PlinthGeo, concreteMat);
    p2Plinth.position.set(4.5, -0.9, -13.5);
    p2Plinth.castShadow = true;
    p2Plinth.receiveShadow = true;
    this.group.add(p2Plinth);
    this.geometries.push(p2PlinthGeo);

    const p2ModelGeo = new THREE.BoxGeometry(2.4, 0.8, 1.8);
    const p2Model = new THREE.Mesh(p2ModelGeo, glassMat);
    p2Model.position.set(4.5, 0.0, -13.5);
    this.group.add(p2Model);
    this.geometries.push(p2ModelGeo);

    // =========================================================================
    // ZONE 04 (Z ~ -18): MATERIAL ARCHIVE WORKSHOP (MATERIALITY)
    // =========================================================================
    const materialPositions = [
      { x: 5.5, z: -17.5, name: "Travertine", color: 0xe4dcd3 },
      { x: 7.2, z: -18.2, name: "Smoked Oak", color: 0x3d3128 },
      { x: 8.8, z: -18.8, name: "Brushed Brass", color: 0xa89264 },
      { x: 6.2, z: -19.8, name: "Concrete", color: 0x9c9790 },
      { x: 7.8, z: -20.5, name: "Fluted Glass", color: 0xd8dfde },
    ];

    const slabGeo = new THREE.BoxGeometry(0.8, 1.4, 0.15);
    this.geometries.push(slabGeo);
    const pedGeo = new THREE.CylinderGeometry(0.25, 0.25, 0.8, 16);
    this.geometries.push(pedGeo);

    materialPositions.forEach((mat) => {
      // Pedestal
      const ped = new THREE.Mesh(pedGeo, steelMat);
      ped.position.set(mat.x, -0.8, mat.z);
      ped.castShadow = true;
      this.group.add(ped);

      // Material Slab
      const slabMat = new THREE.MeshStandardMaterial({
        color: mat.color,
        roughness: 0.5,
        metalness: mat.name === "Brushed Brass" ? 0.85 : 0.1,
      });
      this.materials.push(slabMat);
      const slab = new THREE.Mesh(slabGeo, slabMat);
      slab.position.set(mat.x, 0.2, mat.z);
      slab.rotation.y = Math.PI * 0.12;
      slab.castShadow = true;
      this.group.add(slab);
    });

    // =========================================================================
    // ZONE 05 (Z ~ -24): DRAFTSMAN'S FLOATING DRAWINGS
    // =========================================================================
    const drawingPlaneGeo = new THREE.BoxGeometry(3.6, 2.4, 0.04);
    this.geometries.push(drawingPlaneGeo);

    const dwg1 = new THREE.Mesh(drawingPlaneGeo, drawingMat);
    dwg1.position.set(-1.8, 1.2, -24.5);
    dwg1.rotation.y = Math.PI * 0.15;
    dwg1.rotation.x = Math.PI * -0.05;
    dwg1.castShadow = true;
    this.group.add(dwg1);

    const dwg2 = new THREE.Mesh(drawingPlaneGeo, drawingMat);
    dwg2.position.set(-3.2, 1.8, -26.0);
    dwg2.rotation.y = Math.PI * 0.25;
    dwg2.castShadow = true;
    this.group.add(dwg2);

    // =========================================================================
    // ZONE 06 (Z ~ -30): DISCIPLINE COLONNADE & PORTAL (SERVICES & JOURNAL)
    // =========================================================================
    const grandColGeo = new THREE.BoxGeometry(0.8, 5.0, 0.8);
    this.geometries.push(grandColGeo);

    for (let i = 0; i < 4; i++) {
      const col = new THREE.Mesh(grandColGeo, concreteMat);
      col.position.set(-4.0 + i * 2.8, 1.3, -31.0);
      col.castShadow = true;
      col.receiveShadow = true;
      this.group.add(col);
    }

    const colonnadeLintelGeo = new THREE.BoxGeometry(11.0, 0.4, 1.4);
    const lintel = new THREE.Mesh(colonnadeLintelGeo, concreteMat);
    lintel.position.set(0.2, 4.0, -31.0);
    lintel.castShadow = true;
    this.group.add(lintel);
    this.geometries.push(colonnadeLintelGeo);

    // =========================================================================
    // ZONE 07 (Z ~ -36): THE NOCTURNE GALLERY CHAMBER (COMMISSIONS & CONTACT)
    // =========================================================================
    const nocturneWallGeo = new THREE.BoxGeometry(14.0, 4.5, 0.5);
    const nocturneWall = new THREE.Mesh(nocturneWallGeo, steelMat);
    nocturneWall.position.set(0, 1.0, -38.0);
    nocturneWall.castShadow = true;
    nocturneWall.receiveShadow = true;
    this.group.add(nocturneWall);
    this.geometries.push(nocturneWallGeo);

    // Solitary Monolithic Reception Stone
    const receptionStoneGeo = new THREE.BoxGeometry(3.0, 0.9, 1.2);
    const receptionStone = new THREE.Mesh(receptionStoneGeo, travertineMat);
    receptionStone.position.set(0, -0.75, -34.5);
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
