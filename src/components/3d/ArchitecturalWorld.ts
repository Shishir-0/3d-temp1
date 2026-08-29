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

    // --- CURATED LUXURY ARCHITECTURAL MATERIAL PALETTE ---
    // Physically authentic values tuned for architectural lighting
    const concreteColor = isDark ? 0x1f1d1b : 0xd8d3cb;
    const darkConcreteColor = isDark ? 0x161514 : 0xb8b2aa;
    const travertineColor = isDark ? 0x1b1917 : 0xeae4db;
    const woodColor = isDark ? 0x2e241c : 0x4a3b2c;
    const steelColor = isDark ? 0x282624 : 0x181716;
    const brassColor = isDark ? 0x948259 : 0xb5a072;
    const glassColor = isDark ? 0x1c242b : 0xd2e0e8;
    const waterColor = isDark ? 0x0c1218 : 0x3d4f5c;
    const drawingPlaneColor = isDark ? 0x201e1d : 0xf4f0ea;

    // Board-Formed Architectural Concrete
    const concreteMat = new THREE.MeshStandardMaterial({
      color: concreteColor,
      roughness: 0.88,
      metalness: 0.02,
    });

    const darkConcreteMat = new THREE.MeshStandardMaterial({
      color: darkConcreteColor,
      roughness: 0.92,
      metalness: 0.02,
    });

    // Honed Travertine Navona (syncs with user material selector)
    const travertineMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(accentHex || travertineColor),
      roughness: 0.62,
      metalness: 0.04,
    });

    // Smoked European Oak
    const woodMat = new THREE.MeshStandardMaterial({
      color: woodColor,
      roughness: 0.72,
      metalness: 0.03,
    });

    // Blackened Architectural Steel
    const steelMat = new THREE.MeshStandardMaterial({
      color: steelColor,
      roughness: 0.32,
      metalness: 0.86,
    });

    // Hand-Rubbed Patinated Brass
    const brassMat = new THREE.MeshStandardMaterial({
      color: brassColor,
      roughness: 0.38,
      metalness: 0.84,
    });

    // Low-Iron Architectural Float Glass
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: glassColor,
      transparent: true,
      opacity: isDark ? 0.38 : 0.28,
      roughness: 0.05,
      metalness: 0.08,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      transmission: 0.7,
      ior: 1.52,
    });

    // Sunken Pool Water
    const waterMat = new THREE.MeshPhysicalMaterial({
      color: waterColor,
      roughness: 0.02,
      metalness: 0.92,
      reflectivity: 0.96,
      clearcoat: 1.0,
      clearcoatRoughness: 0.02,
    });

    // Technical Drafting Plate
    const drawingMat = new THREE.MeshStandardMaterial({
      color: drawingPlaneColor,
      roughness: 0.58,
      metalness: 0.06,
    });

    this.materials.push(
      concreteMat,
      darkConcreteMat,
      travertineMat,
      woodMat,
      steelMat,
      brassMat,
      glassMat,
      waterMat,
      drawingMat
    );

    // =========================================================================
    // 01. CONTINUOUS MONUMENTAL PLINTH & REVEAL JOINTS (SPINE)
    // =========================================================================
    // Main structural podium slab
    const spineGeo = new THREE.BoxGeometry(20, 0.45, 72);
    const spinePlinth = new THREE.Mesh(spineGeo, concreteMat);
    spinePlinth.position.set(0, -1.25, -18);
    spinePlinth.receiveShadow = true;
    spinePlinth.castShadow = true;
    this.group.add(spinePlinth);
    this.geometries.push(spineGeo);

    // Recessed shadow gap reveal sub-plinth
    const revealGeo = new THREE.BoxGeometry(20.4, 0.12, 72.4);
    const revealPlinth = new THREE.Mesh(revealGeo, steelMat);
    revealPlinth.position.set(0, -1.5, -18);
    revealPlinth.receiveShadow = true;
    this.group.add(revealPlinth);
    this.geometries.push(revealGeo);

    // =========================================================================
    // STATION 01 (Z ~ 0): ARRIVAL PAVILION & WATER BASIN (HERO)
    // =========================================================================
    // Cantilevered Upper Concrete Canopy with Beveled Edge
    const heroRoofGeo = new THREE.BoxGeometry(9.2, 0.4, 6.8);
    const heroRoof = new THREE.Mesh(heroRoofGeo, concreteMat);
    heroRoof.position.set(0.8, 2.3, 0.2);
    heroRoof.castShadow = true;
    heroRoof.receiveShadow = true;
    this.group.add(heroRoof);
    this.geometries.push(heroRoofGeo);

    // Monolithic Travertine Anchor Wall
    const heroTravertineGeo = new THREE.BoxGeometry(4.6, 2.3, 3.6);
    const heroTravertine = new THREE.Mesh(heroTravertineGeo, travertineMat);
    heroTravertine.position.set(-2.0, 0.05, 0.1);
    heroTravertine.castShadow = true;
    heroTravertine.receiveShadow = true;
    this.group.add(heroTravertine);
    this.geometries.push(heroTravertineGeo);
    this.activeMaterialMeshes.push(heroTravertine);

    // Sunken Reflecting Water Basin
    const poolBasinGeo = new THREE.BoxGeometry(5.2, 0.12, 4.2);
    const poolBasin = new THREE.Mesh(poolBasinGeo, waterMat);
    poolBasin.position.set(2.6, -1.02, 1.2);
    poolBasin.receiveShadow = true;
    this.group.add(poolBasin);
    this.geometries.push(poolBasinGeo);

    // Steel Coping Reveal Rim
    const copingGeo = new THREE.BoxGeometry(5.4, 0.08, 4.4);
    const copingMesh = new THREE.Mesh(copingGeo, steelMat);
    copingMesh.position.set(2.6, -1.08, 1.2);
    this.group.add(copingMesh);
    this.geometries.push(copingGeo);

    // Precision Knife-Edge Blackened Steel Columns
    const colGeo = new THREE.CylinderGeometry(0.045, 0.045, 3.4, 16);
    this.geometries.push(colGeo);
    const col1 = new THREE.Mesh(colGeo, steelMat);
    col1.position.set(4.2, 0.55, 2.6);
    col1.castShadow = true;
    this.group.add(col1);
    const col2 = new THREE.Mesh(colGeo, steelMat);
    col2.position.set(4.2, 0.55, -1.6);
    col2.castShadow = true;
    this.group.add(col2);

    // Vertical Rhythmic Timber Louver Screen
    const slatGeo = new THREE.BoxGeometry(0.07, 3.2, 0.14);
    this.geometries.push(slatGeo);
    for (let i = 0; i < 13; i++) {
      const slat = new THREE.Mesh(slatGeo, woodMat);
      slat.position.set(-1.1 + i * 0.22, 0.5, -2.1);
      slat.castShadow = true;
      this.group.add(slat);
    }

    // =========================================================================
    // STATION 02 (Z ~ -7): ATRIUM LIGHT COURT & DOUBLE-HEIGHT VOID (STUDIO)
    // =========================================================================
    // Double-Height Shear Wall with Aperture
    const atriumWallGeo = new THREE.BoxGeometry(0.5, 5.0, 7.2);
    const atriumWall = new THREE.Mesh(atriumWallGeo, darkConcreteMat);
    atriumWall.position.set(-4.4, 1.3, -7.0);
    atriumWall.castShadow = true;
    atriumWall.receiveShadow = true;
    this.group.add(atriumWall);
    this.geometries.push(atriumWallGeo);

    // Floating Bridge Cantilever
    const bridgeGeo = new THREE.BoxGeometry(4.6, 0.25, 2.0);
    const bridgeMesh = new THREE.Mesh(bridgeGeo, concreteMat);
    bridgeMesh.position.set(-1.2, 1.7, -7.0);
    bridgeMesh.castShadow = true;
    bridgeMesh.receiveShadow = true;
    this.group.add(bridgeMesh);
    this.geometries.push(bridgeGeo);

    // Floor-to-Ceiling Structural Glass Aperture
    const atriumGlassGeo = new THREE.BoxGeometry(4.2, 2.8, 0.06);
    const atriumGlass = new THREE.Mesh(atriumGlassGeo, glassMat);
    atriumGlass.position.set(0.9, 0.4, -6.5);
    this.group.add(atriumGlass);
    this.geometries.push(atriumGlassGeo);

    // Monolithic Travertine Gallery Bench
    const benchGeo = new THREE.BoxGeometry(2.6, 0.45, 0.85);
    const benchMesh = new THREE.Mesh(benchGeo, travertineMat);
    benchMesh.position.set(1.4, -0.78, -8.0);
    benchMesh.castShadow = true;
    this.group.add(benchMesh);
    this.geometries.push(benchGeo);

    // =========================================================================
    // STATION 03 (Z ~ -13): SELECTED WORKS EXHIBITION PAVILIONS (PORTFOLIO)
    // =========================================================================
    // Project 01 Installation Podium
    const p1PlinthGeo = new THREE.BoxGeometry(3.6, 0.65, 3.6);
    const p1Plinth = new THREE.Mesh(p1PlinthGeo, concreteMat);
    p1Plinth.position.set(-6.0, -0.88, -13.0);
    p1Plinth.castShadow = true;
    p1Plinth.receiveShadow = true;
    this.group.add(p1Plinth);
    this.geometries.push(p1PlinthGeo);

    const p1ModelGeo = new THREE.BoxGeometry(2.4, 1.3, 2.0);
    const p1Model = new THREE.Mesh(p1ModelGeo, travertineMat);
    p1Model.position.set(-6.0, 0.15, -13.0);
    p1Model.castShadow = true;
    this.group.add(p1Model);
    this.geometries.push(p1ModelGeo);
    this.activeMaterialMeshes.push(p1Model);

    // Project 02 Installation Podium
    const p2PlinthGeo = new THREE.BoxGeometry(3.6, 0.65, 3.6);
    const p2Plinth = new THREE.Mesh(p2PlinthGeo, concreteMat);
    p2Plinth.position.set(5.2, -0.88, -14.5);
    p2Plinth.castShadow = true;
    p2Plinth.receiveShadow = true;
    this.group.add(p2Plinth);
    this.geometries.push(p2PlinthGeo);

    const p2ModelGeo = new THREE.BoxGeometry(2.8, 1.0, 2.2);
    const p2Model = new THREE.Mesh(p2ModelGeo, glassMat);
    p2Model.position.set(5.2, 0.15, -14.5);
    this.group.add(p2Model);
    this.geometries.push(p2ModelGeo);

    // =========================================================================
    // STATION 04 (Z ~ -19): MATERIAL ARCHIVE SPECIMEN WORKSHOP
    // =========================================================================
    const materialPositions = [
      { x: 5.6, z: -18.5, color: 0xe4dcd3, name: "Travertine" },
      { x: 7.2, z: -19.2, color: 0x3d3128, name: "Smoked Oak" },
      { x: 8.8, z: -19.9, color: 0xb5a072, name: "Patinated Brass" },
      { x: 6.3, z: -20.9, color: 0x9c9790, name: "Concrete" },
      { x: 7.9, z: -21.6, color: 0xd8dfde, name: "Fluted Glass" },
    ];

    const slabGeo = new THREE.BoxGeometry(0.9, 1.6, 0.14);
    this.geometries.push(slabGeo);
    const pedGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.85, 16);
    this.geometries.push(pedGeo);

    materialPositions.forEach((mat) => {
      // Cylinder Pedestal
      const ped = new THREE.Mesh(pedGeo, steelMat);
      ped.position.set(mat.x, -0.78, mat.z);
      ped.castShadow = true;
      this.group.add(ped);

      // Material Specimen Slab
      const slabMat = new THREE.MeshStandardMaterial({
        color: mat.color,
        roughness: mat.name === "Patinated Brass" ? 0.36 : 0.62,
        metalness: mat.name === "Patinated Brass" ? 0.84 : 0.06,
      });
      this.materials.push(slabMat);
      const slab = new THREE.Mesh(slabGeo, slabMat);
      slab.position.set(mat.x, 0.32, mat.z);
      slab.rotation.y = Math.PI * 0.14;
      slab.castShadow = true;
      this.group.add(slab);
    });

    // =========================================================================
    // STATION 05 (Z ~ -25): DRAFTSMAN'S FLOATING TECHNICAL DRAWING PLATES
    // =========================================================================
    const drawingPlaneGeo = new THREE.BoxGeometry(4.0, 2.6, 0.04);
    this.geometries.push(drawingPlaneGeo);

    const dwg1 = new THREE.Mesh(drawingPlaneGeo, drawingMat);
    dwg1.position.set(-2.0, 1.4, -25.5);
    dwg1.rotation.y = Math.PI * 0.12;
    dwg1.rotation.x = Math.PI * -0.04;
    dwg1.castShadow = true;
    this.group.add(dwg1);

    const dwg2 = new THREE.Mesh(drawingPlaneGeo, drawingMat);
    dwg2.position.set(-3.6, 2.0, -27.2);
    dwg2.rotation.y = Math.PI * 0.22;
    dwg2.castShadow = true;
    this.group.add(dwg2);

    // =========================================================================
    // STATION 06 (Z ~ -32): DISCIPLINE COLONNADE & STRUCTURAL PORTALS
    // =========================================================================
    const grandColGeo = new THREE.BoxGeometry(0.9, 5.6, 0.9);
    this.geometries.push(grandColGeo);

    for (let i = 0; i < 4; i++) {
      const col = new THREE.Mesh(grandColGeo, darkConcreteMat);
      col.position.set(-4.4 + i * 3.0, 1.55, -32.5);
      col.castShadow = true;
      col.receiveShadow = true;
      this.group.add(col);
    }

    const colonnadeLintelGeo = new THREE.BoxGeometry(12.0, 0.45, 1.6);
    const lintel = new THREE.Mesh(colonnadeLintelGeo, concreteMat);
    lintel.position.set(0.1, 4.4, -32.5);
    lintel.castShadow = true;
    this.group.add(lintel);
    this.geometries.push(colonnadeLintelGeo);

    // =========================================================================
    // STATION 07 (Z ~ -39): NOCTURNE GALLERY CHAMBER (COMMISSIONS & CONTACT)
    // =========================================================================
    const nocturneWallGeo = new THREE.BoxGeometry(15.0, 5.2, 0.55);
    const nocturneWall = new THREE.Mesh(nocturneWallGeo, steelMat);
    nocturneWall.position.set(0, 1.2, -40.0);
    nocturneWall.castShadow = true;
    nocturneWall.receiveShadow = true;
    this.group.add(nocturneWall);
    this.geometries.push(nocturneWallGeo);

    // Monolithic Reception Altar Stone
    const receptionStoneGeo = new THREE.BoxGeometry(3.6, 1.0, 1.4);
    const receptionStone = new THREE.Mesh(receptionStoneGeo, travertineMat);
    receptionStone.position.set(0, -0.7, -36.5);
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
