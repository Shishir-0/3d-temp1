(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/dev/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PreviewPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Renders the template exactly the way the platform does: content defaults,
 * theme defaults, preview mode, assets served from ../assets. Keep this file
 * free of Tailwind classes — the package build scans src/ only, so a class used
 * only here would work in dev and vanish in production.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/index.tsx [app-client] (ecmascript)");
"use client";
;
;
const { Template, config } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const TemplateComponent = Template;
const content = {};
for (const [id, field] of Object.entries(config.fields ?? {})){
    if (field.default !== undefined) content[id] = field.default;
    else if (field.type === "boolean") content[id] = false;
    else content[id] = "";
}
/**
 * The theme MUST be seeded from the declared defaults, not left empty.
 *
 * <Surface> writes a --cp-* custom property for each token PRESENT in design
 * state. With an empty theme it writes none, so every var(--cp-accent) in your
 * CSS resolves to nothing and the preview renders with invisible text on
 * invisible cards — while the build stays green, because none of that is
 * structural. Seeding the defaults makes dev match what a customer sees before
 * they change anything.
 */ const theme = {};
for (const [id, token] of Object.entries(config.theme ?? {})){
    if (token.default !== undefined) theme[id] = token.default;
}
function PreviewPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-cp-tpl": config.slug,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TemplateComponent, {
            content: content,
            design: {
                theme,
                overrides: {},
                canvas: {}
            },
            mode: "preview",
            assets: (path)=>"/" + String(path).replace(/^\/+/, "")
        }, void 0, false, {
            fileName: "[project]/dev/app/page.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/dev/app/page.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c = PreviewPage;
var _c;
__turbopack_context__.k.register(_c, "PreviewPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/3d/ArchitecturalWorld.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArchitecturalWorld",
    ()=>ArchitecturalWorld
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
class ArchitecturalWorld {
    group;
    materials = [];
    geometries = [];
    activeMaterialMeshes = [];
    constructor(){
        this.group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    }
    build(options = {}) {
        this.dispose();
        this.group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
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
        const concreteMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: concreteColor,
            roughness: 0.88,
            metalness: 0.04
        });
        const travertineMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](accentHex || travertineColor),
            roughness: 0.7,
            metalness: 0.08
        });
        const woodMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: woodColor,
            roughness: 0.78,
            metalness: 0.05
        });
        const steelMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: darkSteelColor,
            roughness: 0.3,
            metalness: 0.85
        });
        const glassMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
            color: glassColor,
            transparent: true,
            opacity: isDark ? 0.4 : 0.3,
            roughness: 0.08,
            metalness: 0.1,
            clearcoat: 1.0,
            transmission: 0.6
        });
        const waterMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
            color: waterColor,
            roughness: 0.04,
            metalness: 0.9,
            reflectivity: 0.96,
            clearcoat: 1.0
        });
        const drawingMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: drawingPlaneColor,
            roughness: 0.6,
            metalness: 0.1
        });
        this.materials.push(concreteMat, travertineMat, woodMat, steelMat, glassMat, waterMat, drawingMat);
        // =========================================================================
        // 01. CONTINUOUS ARCHITECTURAL PAVILION SPINE & GROUND PLINTH
        // =========================================================================
        const spinePlinthGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](16, 0.4, 60);
        const spinePlinth = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](spinePlinthGeo, concreteMat);
        spinePlinth.position.set(0, -1.2, -15);
        spinePlinth.receiveShadow = true;
        spinePlinth.castShadow = true;
        this.group.add(spinePlinth);
        this.geometries.push(spinePlinthGeo);
        // =========================================================================
        // ZONE 01 (Z ~ 0): ARRIVAL PAVILION & WATER BASIN (HERO)
        // =========================================================================
        // Cantilevered Concrete Roof
        const heroRoofGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](8.0, 0.3, 5.5);
        const heroRoof = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](heroRoofGeo, concreteMat);
        heroRoof.position.set(0.5, 2.0, 0.5);
        heroRoof.castShadow = true;
        heroRoof.receiveShadow = true;
        this.group.add(heroRoof);
        this.geometries.push(heroRoofGeo);
        // Travertine Entrance Monolith
        const heroTravertineGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](4.2, 1.8, 3.2);
        const heroTravertine = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](heroTravertineGeo, travertineMat);
        heroTravertine.position.set(-1.8, -0.2, 0.2);
        heroTravertine.castShadow = true;
        heroTravertine.receiveShadow = true;
        this.group.add(heroTravertine);
        this.geometries.push(heroTravertineGeo);
        this.activeMaterialMeshes.push(heroTravertine);
        // Reflecting Pool
        const poolGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](4.5, 0.08, 3.5);
        const poolMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](poolGeo, waterMat);
        poolMesh.position.set(2.2, -1.02, 1.2);
        poolMesh.receiveShadow = true;
        this.group.add(poolMesh);
        this.geometries.push(poolGeo);
        // Structural Blackened Steel Columns
        const colGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.05, 0.05, 3.0, 16);
        this.geometries.push(colGeo);
        const col1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](colGeo, steelMat);
        col1.position.set(3.5, 0.4, 2.2);
        col1.castShadow = true;
        this.group.add(col1);
        const col2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](colGeo, steelMat);
        col2.position.set(3.5, 0.4, -1.2);
        col2.castShadow = true;
        this.group.add(col2);
        // Timber Slats
        const slatGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](0.08, 2.8, 0.1);
        this.geometries.push(slatGeo);
        for(let i = 0; i < 9; i++){
            const slat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](slatGeo, woodMat);
            slat.position.set(-0.8 + i * 0.22, 0.3, -1.8);
            slat.castShadow = true;
            this.group.add(slat);
        }
        // =========================================================================
        // ZONE 02 (Z ~ -6): THE ATRIUM & LIGHT COURT (STUDIO PHILOSOPHY)
        // =========================================================================
        // Double-height Atrium Wall with Light Aperture
        const atriumWallGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](0.4, 4.2, 6.0);
        const atriumWall = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](atriumWallGeo, concreteMat);
        atriumWall.position.set(-3.8, 0.9, -6.5);
        atriumWall.castShadow = true;
        atriumWall.receiveShadow = true;
        this.group.add(atriumWall);
        this.geometries.push(atriumWallGeo);
        // Floating Bridge Slab
        const bridgeGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](4.0, 0.2, 1.6);
        const bridgeMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](bridgeGeo, concreteMat);
        bridgeMesh.position.set(-1.0, 1.4, -6.5);
        bridgeMesh.castShadow = true;
        bridgeMesh.receiveShadow = true;
        this.group.add(bridgeMesh);
        this.geometries.push(bridgeGeo);
        // Glass Screen in Atrium
        const atriumGlassGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](3.6, 2.2, 0.05);
        const atriumGlass = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](atriumGlassGeo, glassMat);
        atriumGlass.position.set(0.8, 0.2, -6.0);
        this.group.add(atriumGlass);
        this.geometries.push(atriumGlassGeo);
        // =========================================================================
        // ZONE 03 (Z ~ -12): PROJECT INSTALLATION PAVILIONS (PORTFOLIO)
        // =========================================================================
        // Project 01 Installation (Casa Mono Plinth & Model Fragment)
        const p1PlinthGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](3.2, 0.6, 3.2);
        const p1Plinth = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](p1PlinthGeo, concreteMat);
        p1Plinth.position.set(-5.5, -0.9, -12.0);
        p1Plinth.castShadow = true;
        p1Plinth.receiveShadow = true;
        this.group.add(p1Plinth);
        this.geometries.push(p1PlinthGeo);
        const p1ModelGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](2.0, 1.1, 1.6);
        const p1Model = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](p1ModelGeo, travertineMat);
        p1Model.position.set(-5.5, 0.0, -12.0);
        p1Model.castShadow = true;
        this.group.add(p1Model);
        this.geometries.push(p1ModelGeo);
        this.activeMaterialMeshes.push(p1Model);
        // Project 02 Installation (Villa No. 07 Cantilever Glass Model)
        const p2PlinthGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](3.2, 0.6, 3.2);
        const p2Plinth = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](p2PlinthGeo, concreteMat);
        p2Plinth.position.set(4.5, -0.9, -13.5);
        p2Plinth.castShadow = true;
        p2Plinth.receiveShadow = true;
        this.group.add(p2Plinth);
        this.geometries.push(p2PlinthGeo);
        const p2ModelGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](2.4, 0.8, 1.8);
        const p2Model = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](p2ModelGeo, glassMat);
        p2Model.position.set(4.5, 0.0, -13.5);
        this.group.add(p2Model);
        this.geometries.push(p2ModelGeo);
        // =========================================================================
        // ZONE 04 (Z ~ -18): MATERIAL ARCHIVE WORKSHOP (MATERIALITY)
        // =========================================================================
        const materialPositions = [
            {
                x: 5.5,
                z: -17.5,
                name: "Travertine",
                color: 0xe4dcd3
            },
            {
                x: 7.2,
                z: -18.2,
                name: "Smoked Oak",
                color: 0x3d3128
            },
            {
                x: 8.8,
                z: -18.8,
                name: "Brushed Brass",
                color: 0xa89264
            },
            {
                x: 6.2,
                z: -19.8,
                name: "Concrete",
                color: 0x9c9790
            },
            {
                x: 7.8,
                z: -20.5,
                name: "Fluted Glass",
                color: 0xd8dfde
            }
        ];
        const slabGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](0.8, 1.4, 0.15);
        this.geometries.push(slabGeo);
        const pedGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.25, 0.25, 0.8, 16);
        this.geometries.push(pedGeo);
        materialPositions.forEach((mat)=>{
            // Pedestal
            const ped = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](pedGeo, steelMat);
            ped.position.set(mat.x, -0.8, mat.z);
            ped.castShadow = true;
            this.group.add(ped);
            // Material Slab
            const slabMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: mat.color,
                roughness: 0.5,
                metalness: mat.name === "Brushed Brass" ? 0.85 : 0.1
            });
            this.materials.push(slabMat);
            const slab = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](slabGeo, slabMat);
            slab.position.set(mat.x, 0.2, mat.z);
            slab.rotation.y = Math.PI * 0.12;
            slab.castShadow = true;
            this.group.add(slab);
        });
        // =========================================================================
        // ZONE 05 (Z ~ -24): DRAFTSMAN'S FLOATING DRAWINGS
        // =========================================================================
        const drawingPlaneGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](3.6, 2.4, 0.04);
        this.geometries.push(drawingPlaneGeo);
        const dwg1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](drawingPlaneGeo, drawingMat);
        dwg1.position.set(-1.8, 1.2, -24.5);
        dwg1.rotation.y = Math.PI * 0.15;
        dwg1.rotation.x = Math.PI * -0.05;
        dwg1.castShadow = true;
        this.group.add(dwg1);
        const dwg2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](drawingPlaneGeo, drawingMat);
        dwg2.position.set(-3.2, 1.8, -26.0);
        dwg2.rotation.y = Math.PI * 0.25;
        dwg2.castShadow = true;
        this.group.add(dwg2);
        // =========================================================================
        // ZONE 06 (Z ~ -30): DISCIPLINE COLONNADE & PORTAL (SERVICES & JOURNAL)
        // =========================================================================
        const grandColGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](0.8, 5.0, 0.8);
        this.geometries.push(grandColGeo);
        for(let i = 0; i < 4; i++){
            const col = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](grandColGeo, concreteMat);
            col.position.set(-4.0 + i * 2.8, 1.3, -31.0);
            col.castShadow = true;
            col.receiveShadow = true;
            this.group.add(col);
        }
        const colonnadeLintelGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](11.0, 0.4, 1.4);
        const lintel = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](colonnadeLintelGeo, concreteMat);
        lintel.position.set(0.2, 4.0, -31.0);
        lintel.castShadow = true;
        this.group.add(lintel);
        this.geometries.push(colonnadeLintelGeo);
        // =========================================================================
        // ZONE 07 (Z ~ -36): THE NOCTURNE GALLERY CHAMBER (COMMISSIONS & CONTACT)
        // =========================================================================
        const nocturneWallGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](14.0, 4.5, 0.5);
        const nocturneWall = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](nocturneWallGeo, steelMat);
        nocturneWall.position.set(0, 1.0, -38.0);
        nocturneWall.castShadow = true;
        nocturneWall.receiveShadow = true;
        this.group.add(nocturneWall);
        this.geometries.push(nocturneWallGeo);
        // Solitary Monolithic Reception Stone
        const receptionStoneGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](3.0, 0.9, 1.2);
        const receptionStone = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](receptionStoneGeo, travertineMat);
        receptionStone.position.set(0, -0.75, -34.5);
        receptionStone.castShadow = true;
        receptionStone.receiveShadow = true;
        this.group.add(receptionStone);
        this.geometries.push(receptionStoneGeo);
        return this.group;
    }
    updateAccentColor(hexColor) {
        this.activeMaterialMeshes.forEach((mesh)=>{
            if (mesh.material && mesh.material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]) {
                mesh.material.color.set(hexColor);
            }
        });
    }
    dispose() {
        this.geometries.forEach((g)=>g.dispose());
        this.materials.forEach((m)=>m.dispose());
        this.geometries = [];
        this.materials = [];
        this.activeMaterialMeshes = [];
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/3d/CameraRail.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CameraRail",
    ()=>CameraRail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
class CameraRail {
    keyframes = [
        // 01 HERO — Entrance Plinth & Monoliths
        {
            progress: 0.0,
            position: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](9.5, 4.2, 11.5),
            target: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0.4, 0),
            lightIntensity: 2.8,
            sunPosition: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](14, 20, 11),
            ambientColor: 0xfffaf2,
            fogDensity: 0.024
        },
        // 02 STUDIO — Interior Light Court & Atrium
        {
            progress: 0.14,
            position: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](2.5, 2.8, 6.5),
            target: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-1.0, 1.2, -1.0),
            lightIntensity: 2.4,
            sunPosition: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](10, 18, 8),
            ambientColor: 0xfff6eb,
            fogDensity: 0.026
        },
        // 03 SELECTED PROJECTS — Project Pavilion 01 & 02
        {
            progress: 0.30,
            position: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-4.5, 2.2, 3.5),
            target: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-6.5, 1.0, -1.5),
            lightIntensity: 2.2,
            sunPosition: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](8, 16, 5),
            ambientColor: 0xf5eedf,
            fogDensity: 0.028
        },
        // 04 FEATURED PROJECT — Flagship Spatial Installation
        {
            progress: 0.45,
            position: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-1.5, 3.5, -4.0),
            target: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](2.0, 1.8, -8.0),
            lightIntensity: 2.0,
            sunPosition: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](6, 14, 2),
            ambientColor: 0xede4d5,
            fogDensity: 0.030
        },
        // 05 MATERIAL ARCHIVE — Workshop Slabs & Pedestals
        {
            progress: 0.60,
            position: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](5.5, 2.0, -9.5),
            target: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](8.0, 0.8, -13.0),
            lightIntensity: 2.3,
            sunPosition: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](10, 15, -6),
            ambientColor: 0xf7f0e6,
            fogDensity: 0.026
        },
        // 06 SPATIAL DRAWINGS — Draftsman's Floating Planes
        {
            progress: 0.74,
            position: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1.0, 2.6, -16.0),
            target: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-2.5, 1.4, -20.0),
            lightIntensity: 2.0,
            sunPosition: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](4, 12, -12),
            ambientColor: 0xe8e2d8,
            fogDensity: 0.028
        },
        // 07 SERVICES & JOURNAL — Monolith Colonnade
        {
            progress: 0.88,
            position: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-6.0, 3.2, -22.5),
            target: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-1.0, 1.6, -27.0),
            lightIntensity: 1.7,
            sunPosition: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](2, 10, -18),
            ambientColor: 0xdfd9ce,
            fogDensity: 0.032
        },
        // 08 CONTACT — The Nocturne Gallery Space
        {
            progress: 1.0,
            position: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0.0, 2.2, -30.0),
            target: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0.0, 1.0, -35.0),
            lightIntensity: 1.2,
            sunPosition: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 8, -25),
            ambientColor: 0x1f1e1c,
            fogDensity: 0.038
        }
    ];
    evaluate(progress, outPosition, outTarget) {
        const clampedP = Math.max(0, Math.min(1, progress));
        // Find bounding keyframes
        let startIndex = 0;
        for(let i = 0; i < this.keyframes.length - 1; i++){
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
        const lightIntensity = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(k0.lightIntensity, k1.lightIntensity, t);
        const sunPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().lerpVectors(k0.sunPosition, k1.sunPosition, t);
        const fogDensity = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(k0.fogDensity, k1.fogDensity, t);
        return {
            lightIntensity,
            sunPosition,
            ambientColor: k0.ambientColor,
            fogDensity
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/3d/ContinuousSpatialCanvas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContinuousSpatialCanvas",
    ()=>ContinuousSpatialCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$ArchitecturalWorld$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/3d/ArchitecturalWorld.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$CameraRail$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/3d/CameraRail.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const ContinuousSpatialCanvas = ({ isDarkMode = false, activeMaterialHex, scrollProgress })=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isHydrated, setIsHydrated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [webglSupported, setWebglSupported] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const worldRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollProgressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(scrollProgress);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContinuousSpatialCanvas.useEffect": ()=>{
            scrollProgressRef.current = scrollProgress;
        }
    }["ContinuousSpatialCanvas.useEffect"], [
        scrollProgress
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContinuousSpatialCanvas.useEffect": ()=>{
            setIsHydrated(true);
            try {
                const testCanvas = document.createElement("canvas");
                const gl = testCanvas.getContext("webgl2") || testCanvas.getContext("webgl");
                if (!gl) {
                    setWebglSupported(false);
                }
            } catch (e) {
                setWebglSupported(false);
            }
        }
    }["ContinuousSpatialCanvas.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContinuousSpatialCanvas.useEffect": ()=>{
            if (!isHydrated || !webglSupported || !containerRef.current || !canvasRef.current) return;
            const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            const isMobile = window.innerWidth < 768;
            const isLowPower = isMobile || navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
            const isHighQuality = !prefersReducedMotion && !isLowPower;
            // --- THREE.JS SCENE SETUP ---
            const width = containerRef.current.clientWidth;
            const height = containerRef.current.clientHeight;
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            const fogColor = isDarkMode ? 0x121110 : 0xfbfaf8;
            scene.fog = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FogExp2"](fogColor, 0.024);
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](36, width / height, 0.1, 120);
            const cameraPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](9.5, 4.2, 11.5);
            const cameraTarget = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0.4, 0);
            camera.position.copy(cameraPos);
            camera.lookAt(cameraTarget);
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                canvas: canvasRef.current,
                alpha: true,
                antialias: isHighQuality,
                powerPreference: "high-performance"
            });
            const maxPixelRatio = isHighQuality ? Math.min(window.devicePixelRatio, 2) : 1.25;
            renderer.setPixelRatio(maxPixelRatio);
            renderer.setSize(width, height);
            renderer.shadowMap.enabled = !prefersReducedMotion;
            renderer.shadowMap.type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PCFSoftShadowMap"];
            // --- LIGHTING ---
            const ambientLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmbientLight"](isDarkMode ? 0x383532 : 0xfdfaf5, isDarkMode ? 1.4 : 1.8);
            scene.add(ambientLight);
            const sunLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"](isDarkMode ? 0xf0e6dc : 0xfffaed, isDarkMode ? 2.0 : 2.8);
            sunLight.position.set(14, 20, 11);
            sunLight.castShadow = !prefersReducedMotion;
            if (sunLight.castShadow) {
                sunLight.shadow.mapSize.width = isHighQuality ? 1024 : 512;
                sunLight.shadow.mapSize.height = isHighQuality ? 1024 : 512;
                sunLight.shadow.camera.near = 2;
                sunLight.shadow.camera.far = 70;
                const d = 16;
                sunLight.shadow.camera.left = -d;
                sunLight.shadow.camera.right = d;
                sunLight.shadow.camera.top = d;
                sunLight.shadow.camera.bottom = -d;
                sunLight.shadow.bias = -0.0003;
            }
            scene.add(sunLight);
            const skyFillLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"](isDarkMode ? 0x1f2830 : 0xbfd3e6, isDarkMode ? 0.6 : 0.85);
            skyFillLight.position.set(-12, -4, -9);
            scene.add(skyFillLight);
            // --- ARCHITECTURAL WORLD MODEL ---
            const world = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$ArchitecturalWorld$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArchitecturalWorld"]();
            worldRef.current = world;
            const worldGroup = world.build({
                isDarkMode,
                activeMaterialHex,
                quality: isHighQuality ? "high" : "medium"
            });
            scene.add(worldGroup);
            const cameraRail = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$CameraRail$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraRail"]();
            // --- MOUSE PARALLAX RIG ---
            let mouseX = 0;
            let mouseY = 0;
            let targetMouseX = 0;
            let targetMouseY = 0;
            let currentPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().copy(cameraPos);
            let currentTarget = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().copy(cameraTarget);
            let targetRailPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
            let targetRailLook = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
            const handleMouseMove = {
                "ContinuousSpatialCanvas.useEffect.handleMouseMove": (e)=>{
                    if (prefersReducedMotion) return;
                    const halfW = window.innerWidth / 2;
                    const halfH = window.innerHeight / 2;
                    targetMouseX = (e.clientX - halfW) / halfW;
                    targetMouseY = (e.clientY - halfH) / halfH;
                }
            }["ContinuousSpatialCanvas.useEffect.handleMouseMove"];
            const handleResize = {
                "ContinuousSpatialCanvas.useEffect.handleResize": ()=>{
                    if (!containerRef.current || !renderer) return;
                    const w = containerRef.current.clientWidth;
                    const h = containerRef.current.clientHeight;
                    camera.aspect = w / h;
                    camera.updateProjectionMatrix();
                    renderer.setSize(w, h);
                }
            }["ContinuousSpatialCanvas.useEffect.handleResize"];
            window.addEventListener("mousemove", handleMouseMove, {
                passive: true
            });
            window.addEventListener("resize", handleResize, {
                passive: true
            });
            // --- RENDER LOOP ---
            let animationFrameId;
            const renderLoop = {
                "ContinuousSpatialCanvas.useEffect.renderLoop": ()=>{
                    // Smooth mouse lerp
                    mouseX += (targetMouseX - mouseX) * 0.04;
                    mouseY += (targetMouseY - mouseY) * 0.04;
                    // Evaluate camera rail at current scroll progress
                    const railState = cameraRail.evaluate(scrollProgressRef.current, targetRailPos, targetRailLook);
                    // Smooth camera position interpolation
                    currentPos.lerp(targetRailPos, 0.06);
                    currentTarget.lerp(targetRailLook, 0.06);
                    // Apply subtle mouse parallax offset to camera position
                    camera.position.x = currentPos.x + mouseX * 0.7;
                    camera.position.y = currentPos.y - mouseY * 0.4;
                    camera.position.z = currentPos.z;
                    camera.lookAt(currentTarget.x, currentTarget.y, currentTarget.z);
                    // Dynamic light intensity transition
                    sunLight.intensity = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(sunLight.intensity, isDarkMode ? railState.lightIntensity * 0.7 : railState.lightIntensity, 0.05);
                    if (scene.fog && scene.fog instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FogExp2"]) {
                        scene.fog.density = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(scene.fog.density, railState.fogDensity, 0.05);
                    }
                    renderer.render(scene, camera);
                    animationFrameId = requestAnimationFrame(renderLoop);
                }
            }["ContinuousSpatialCanvas.useEffect.renderLoop"];
            renderLoop();
            return ({
                "ContinuousSpatialCanvas.useEffect": ()=>{
                    cancelAnimationFrame(animationFrameId);
                    window.removeEventListener("mousemove", handleMouseMove);
                    window.removeEventListener("resize", handleResize);
                    world.dispose();
                    scene.clear();
                    renderer.dispose();
                    worldRef.current = null;
                }
            })["ContinuousSpatialCanvas.useEffect"];
        }
    }["ContinuousSpatialCanvas.useEffect"], [
        isHydrated,
        webglSupported,
        isDarkMode
    ]);
    // Sync active accent color changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContinuousSpatialCanvas.useEffect": ()=>{
            if (activeMaterialHex && worldRef.current) {
                worldRef.current.updateAccentColor(activeMaterialHex);
            }
        }
    }["ContinuousSpatialCanvas.useEffect"], [
        activeMaterialHex
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden",
        style: {
            background: isDarkMode ? "#121110" : "#fbfaf8"
        },
        children: [
            isHydrated && webglSupported ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "absolute inset-0 w-full h-full object-cover"
            }, void 0, false, {
                fileName: "[project]/src/components/3d/ContinuousSpatialCanvas.tsx",
                lineNumber: 206,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /* FALLBACK */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center opacity-60",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-[11px] font-mono tracking-widest uppercase",
                    children: "ARCHITECTURAL SPATIAL ENVIRONMENT — STILL"
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/ContinuousSpatialCanvas.tsx",
                    lineNumber: 213,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/3d/ContinuousSpatialCanvas.tsx",
                lineNumber: 212,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                style: {
                    background: isDarkMode ? "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(18, 17, 16, 0.65) 100%)" : "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(251, 250, 248, 0.55) 100%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/3d/ContinuousSpatialCanvas.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/3d/ContinuousSpatialCanvas.tsx",
        lineNumber: 198,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ContinuousSpatialCanvas, "2rXno3NAbH7UQWSiRekI+iDriPo=");
_c = ContinuousSpatialCanvas;
var _c;
__turbopack_context__.k.register(_c, "ContinuousSpatialCanvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ContactSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactSection",
    ()=>ContactSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const ContactSection = ({ studioName = "STUDIO NAME", headline = "START A PROJECT", email = "inquiries@yourstudio.com", phone = "+1 (555) 019-2834", address = "Studio Address / City, Country", instagram = "@yourstudio.arch" })=>{
    _s();
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        projectType: "Residential Architecture",
        budget: "$500k - $1M",
        message: ""
    });
    const handleSubmit = (e)=>{
        e.preventDefault();
        setSubmitted(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "py-24 sm:py-36 px-6 sm:px-12 max-w-7xl mx-auto border-t border-stone-200/50 dark:border-stone-800/50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-12 gap-16 items-start",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-5 space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-mono tracking-[0.28em] text-stone-400 dark:text-stone-500 uppercase",
                                    children: "06 / COMMISSIONS"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ContactSection.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl sm:text-6xl font-light tracking-tight mt-2",
                                    children: headline
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ContactSection.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ContactSection.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-light leading-relaxed",
                            children: "We collaborate with private clients, developers, and institutions committed to architectural intention and spatial craft."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ContactSection.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6 pt-6 border-t border-stone-200/50 dark:border-stone-800/50 text-xs font-mono",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-[9px] opacity-40 uppercase tracking-widest",
                                            children: "INQUIRIES"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ContactSection.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `mailto:${email}`,
                                            className: "font-semibold underline hover:opacity-75",
                                            children: email
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ContactSection.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ContactSection.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-[9px] opacity-40 uppercase tracking-widest",
                                            children: "TELEPHONE"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ContactSection.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `tel:${phone}`,
                                            className: "font-semibold hover:opacity-75",
                                            children: phone
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ContactSection.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ContactSection.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-[9px] opacity-40 uppercase tracking-widest",
                                            children: "STUDIO LOCATION"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ContactSection.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-stone-700 dark:text-stone-300",
                                            children: address
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ContactSection.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ContactSection.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-[9px] opacity-40 uppercase tracking-widest",
                                            children: "SOCIAL PERSPECTIVE"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ContactSection.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-stone-700 dark:text-stone-300",
                                            children: instagram
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ContactSection.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ContactSection.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ContactSection.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ContactSection.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-7 bg-stone-50 dark:bg-stone-900/30 p-8 sm:p-12 rounded-xs border border-stone-200/50 dark:border-stone-800/50",
                    children: submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-16 text-center space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl",
                                children: "✓"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactSection.tsx",
                                lineNumber: 83,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-light tracking-tight",
                                children: "Inquiry Received"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactSection.tsx",
                                lineNumber: 84,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-stone-500 font-light max-w-sm mx-auto",
                                children: [
                                    "Thank you for reaching out to ",
                                    studioName,
                                    ". Our design team will review your project requirements within 48 hours."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ContactSection.tsx",
                                lineNumber: 85,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ContactSection.tsx",
                        lineNumber: 82,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-[10px] font-mono uppercase tracking-widest mb-2 opacity-60",
                                                children: "YOUR NAME"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ContactSection.tsx",
                                                lineNumber: 93,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                required: true,
                                                value: formData.name,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        name: e.target.value
                                                    }),
                                                placeholder: "e.g. Client Name",
                                                className: "w-full bg-transparent border-b border-stone-300 dark:border-stone-700 py-2.5 text-xs focus:outline-hidden focus:border-stone-900 dark:focus:border-stone-100 transition-colors"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ContactSection.tsx",
                                                lineNumber: 96,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ContactSection.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-[10px] font-mono uppercase tracking-widest mb-2 opacity-60",
                                                children: "EMAIL ADDRESS"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ContactSection.tsx",
                                                lineNumber: 107,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                required: true,
                                                value: formData.email,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        email: e.target.value
                                                    }),
                                                placeholder: "client@example.com",
                                                className: "w-full bg-transparent border-b border-stone-300 dark:border-stone-700 py-2.5 text-xs focus:outline-hidden focus:border-stone-900 dark:focus:border-stone-100 transition-colors"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ContactSection.tsx",
                                                lineNumber: 110,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ContactSection.tsx",
                                        lineNumber: 106,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ContactSection.tsx",
                                lineNumber: 91,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-[10px] font-mono uppercase tracking-widest mb-2 opacity-60",
                                                children: "PROJECT DISCIPLINE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ContactSection.tsx",
                                                lineNumber: 123,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: formData.projectType,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        projectType: e.target.value
                                                    }),
                                                className: "w-full bg-transparent border-b border-stone-300 dark:border-stone-700 py-2.5 text-xs focus:outline-hidden focus:border-stone-900 dark:focus:border-stone-100 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Residential Architecture",
                                                        children: "Residential Architecture"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ContactSection.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Interior Architecture",
                                                        children: "Interior Architecture"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ContactSection.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Hospitality & Cultural",
                                                        children: "Hospitality & Cultural"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ContactSection.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "3D Spatial Visualization",
                                                        children: "3D Spatial Visualization"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ContactSection.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ContactSection.tsx",
                                                lineNumber: 126,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ContactSection.tsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-[10px] font-mono uppercase tracking-widest mb-2 opacity-60",
                                                children: "ESTIMATED BUDGET"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ContactSection.tsx",
                                                lineNumber: 139,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: formData.budget,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        budget: e.target.value
                                                    }),
                                                className: "w-full bg-transparent border-b border-stone-300 dark:border-stone-700 py-2.5 text-xs focus:outline-hidden focus:border-stone-900 dark:focus:border-stone-100 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "$250k - $500k",
                                                        children: "$250,000 - $500,000"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ContactSection.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "$500k - $1M",
                                                        children: "$500,000 - $1,000,000"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ContactSection.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "$1M+",
                                                        children: "$1,000,000+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ContactSection.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ContactSection.tsx",
                                                lineNumber: 142,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ContactSection.tsx",
                                        lineNumber: 138,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ContactSection.tsx",
                                lineNumber: 121,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[10px] font-mono uppercase tracking-widest mb-2 opacity-60",
                                        children: "PROJECT VISION"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ContactSection.tsx",
                                        lineNumber: 155,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        rows: 4,
                                        required: true,
                                        value: formData.message,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                message: e.target.value
                                            }),
                                        placeholder: "Describe location, spatial objectives, and approximate timeline...",
                                        className: "w-full bg-transparent border-b border-stone-300 dark:border-stone-700 py-2.5 text-xs focus:outline-hidden focus:border-stone-900 dark:focus:border-stone-100 transition-colors resize-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ContactSection.tsx",
                                        lineNumber: 158,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ContactSection.tsx",
                                lineNumber: 154,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "w-full py-4 bg-stone-950 text-white dark:bg-stone-100 dark:text-stone-950 font-semibold text-xs tracking-[0.2em] uppercase rounded-xs hover:opacity-90 transition-opacity cursor-pointer shadow-md",
                                children: "Send Commission Inquiry"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactSection.tsx",
                                lineNumber: 168,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ContactSection.tsx",
                        lineNumber: 90,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ContactSection.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ContactSection.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ContactSection.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ContactSection, "RPe5I1hVbUm7AudBX9DbzEWvwzo=");
_c = ContactSection;
var _c;
__turbopack_context__.k.register(_c, "ContactSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CustomCursor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomCursor",
    ()=>CustomCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const CustomCursor = ()=>{
    _s();
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: -100,
        y: -100
    });
    const [targetPos, setTargetPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: -100,
        y: -100
    });
    const [cursorState, setCursorState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("default");
    const [isPointerFine, setIsPointerFine] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            // Only enable on desktop pointer devices
            const fineQuery = window.matchMedia("(pointer: fine)");
            setIsPointerFine(fineQuery.matches);
            const handlePointerMove = {
                "CustomCursor.useEffect.handlePointerMove": (e)=>{
                    setTargetPos({
                        x: e.clientX,
                        y: e.clientY
                    });
                    // Detect hover targets
                    const target = e.target;
                    if (target) {
                        const customState = target.closest("[data-cursor]")?.getAttribute("data-cursor");
                        if (customState === "view" || customState === "drag" || customState === "link") {
                            setCursorState(customState);
                            return;
                        }
                        if (target.closest("button, a, input, select, textarea")) {
                            setCursorState("link");
                            return;
                        }
                    }
                    setCursorState("default");
                }
            }["CustomCursor.useEffect.handlePointerMove"];
            window.addEventListener("mousemove", handlePointerMove, {
                passive: true
            });
            return ({
                "CustomCursor.useEffect": ()=>window.removeEventListener("mousemove", handlePointerMove)
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            if (!isPointerFine) return;
            let animationFrameId;
            const lerp = {
                "CustomCursor.useEffect.lerp": ()=>{
                    setPosition({
                        "CustomCursor.useEffect.lerp": (prev)=>({
                                x: prev.x + (targetPos.x - prev.x) * 0.25,
                                y: prev.y + (targetPos.y - prev.y) * 0.25
                            })
                    }["CustomCursor.useEffect.lerp"]);
                    animationFrameId = requestAnimationFrame(lerp);
                }
            }["CustomCursor.useEffect.lerp"];
            lerp();
            return ({
                "CustomCursor.useEffect": ()=>cancelAnimationFrame(animationFrameId)
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], [
        targetPos,
        isPointerFine
    ]);
    if (!isPointerFine) return null;
    const isExpanded = cursorState !== "default";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-0 left-0 pointer-events-none z-50 transition-opacity duration-300 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border border-stone-800/80 dark:border-stone-200/80 backdrop-blur-[2px]",
        style: {
            transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
            width: isExpanded ? 64 : 12,
            height: isExpanded ? 64 : 12,
            backgroundColor: cursorState === "view" ? "rgba(28, 27, 26, 0.9)" : cursorState === "drag" ? "rgba(115, 112, 107, 0.85)" : cursorState === "link" ? "rgba(255, 255, 255, 0.2)" : "rgba(28, 27, 26, 0.4)",
            transition: "width 0.25s ease-out, height 0.25s ease-out, background-color 0.25s ease-out"
        },
        children: [
            cursorState === "view" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[9px] font-bold tracking-[0.2em] text-white uppercase",
                children: "VIEW"
            }, void 0, false, {
                fileName: "[project]/src/components/CustomCursor.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            cursorState === "drag" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[9px] font-bold tracking-[0.2em] text-white uppercase",
                children: "DRAG"
            }, void 0, false, {
                fileName: "[project]/src/components/CustomCursor.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CustomCursor.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CustomCursor, "F1FrFPx2MWvppDFYndYuBH4KBK0=");
_c = CustomCursor;
var _c;
__turbopack_context__.k.register(_c, "CustomCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FeaturedProject.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeaturedProject",
    ()=>FeaturedProject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const FeaturedProject = ({ project, onSelectProject })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-24 sm:py-36 px-6 sm:px-12 max-w-7xl mx-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative overflow-hidden rounded-xs bg-stone-950 text-white min-h-[580px] sm:min-h-[660px] flex items-end p-8 sm:p-20 group cursor-pointer border border-stone-800/60",
            onClick: ()=>onSelectProject(project),
            "data-cursor": "view",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 z-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: project.imageUrl,
                            alt: project.title,
                            loading: "lazy",
                            decoding: "async",
                            className: "w-full h-full object-cover opacity-60 group-hover:scale-[1.015] transition-transform duration-1000 ease-out"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FeaturedProject.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FeaturedProject.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FeaturedProject.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-8 left-8 sm:top-12 sm:left-12 z-10 flex items-center space-x-3 text-[10px] font-mono tracking-[0.28em] text-stone-300 uppercase",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-2 h-2 rounded-full bg-amber-400/90"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FeaturedProject.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "FEATURED COVER STORY / ISSUE 08"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FeaturedProject.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FeaturedProject.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 max-w-3xl space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs font-mono text-stone-400 uppercase tracking-widest",
                            children: [
                                project.category,
                                " — ",
                                project.location,
                                " (",
                                project.year,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FeaturedProject.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl sm:text-7xl font-light tracking-tight text-white leading-[1.05]",
                            children: project.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/FeaturedProject.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm sm:text-base text-stone-300 font-light leading-relaxed max-w-xl",
                            children: project.description
                        }, void 0, false, {
                            fileName: "[project]/src/components/FeaturedProject.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-4 flex flex-wrap items-center gap-6 text-xs font-mono tracking-[0.2em] uppercase",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "px-7 py-3.5 bg-white text-stone-950 font-semibold hover:bg-stone-200 transition-colors rounded-xs flex items-center space-x-3 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "View Case Study"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FeaturedProject.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "→"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FeaturedProject.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FeaturedProject.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-stone-400 text-[11px]",
                                    children: [
                                        "SCALE: ",
                                        project.area
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FeaturedProject.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FeaturedProject.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FeaturedProject.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FeaturedProject.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/FeaturedProject.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = FeaturedProject;
var _c;
__turbopack_context__.k.register(_c, "FeaturedProject");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Footer = ({ studioName = "STUDIO NAME", studioDescriptor = "ARCHITECTURE & INTERIORS", contactEmail = "inquiries@yourstudio.com", contactPhone = "+1 (555) 019-2834", contactAddress = "Studio Address / City, Country", contactInstagram = "@yourstudio.arch", footerCopyright = "ALL RIGHTS RESERVED.", onNavigate })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-stone-950 text-stone-100 py-24 sm:py-32 px-6 sm:px-12 border-t border-stone-800",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto space-y-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-6 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl sm:text-7xl font-bold tracking-[0.18em] uppercase font-sans",
                                    children: studioName
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-mono text-stone-400 tracking-widest uppercase",
                                    children: studioDescriptor
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs font-mono",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-[9px] text-stone-500 uppercase tracking-widest",
                                            children: "NAVIGATION"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2 text-stone-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onNavigate("projects"),
                                                        className: "hover:text-white cursor-pointer",
                                                        children: "Projects"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 42,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onNavigate("studio"),
                                                        className: "hover:text-white cursor-pointer",
                                                        children: "Studio"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 43,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 43,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onNavigate("materiality"),
                                                        className: "hover:text-white cursor-pointer",
                                                        children: "Materiality"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 44,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onNavigate("services"),
                                                        className: "hover:text-white cursor-pointer",
                                                        children: "Services"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 45,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onNavigate("journal"),
                                                        className: "hover:text-white cursor-pointer",
                                                        children: "Journal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 46,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onNavigate("contact"),
                                                        className: "hover:text-white cursor-pointer",
                                                        children: "Contact"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 47,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 41,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-[9px] text-stone-500 uppercase tracking-widest",
                                            children: "CONTACT"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2 text-stone-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `mailto:${contactEmail}`,
                                                        className: "hover:text-white",
                                                        children: contactEmail
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 54,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `tel:${contactPhone}`,
                                                        className: "hover:text-white",
                                                        children: contactPhone
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "text-stone-400",
                                                    children: contactAddress
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-[9px] text-stone-500 uppercase tracking-widest",
                                            children: "PERSPECTIVE"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2 text-stone-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: contactInstagram
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "text-stone-500",
                                                    children: "Spatial Practice"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "text-stone-500",
                                                    children: "Material Research"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-12 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-stone-500 space-y-4 sm:space-y-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " ",
                                studioName,
                                ". ",
                                footerCopyright
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: "POWERED BY CUTIEPAGE TEMPLATE SDK"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: "CRAFTED FOR ARCHITECTURAL PRACTICES"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Footer.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const Header = ({ studioName = "STUDIO NAME", studioDescriptor = "ARCHITECTURE & INTERIORS", isDarkMode, onToggleDarkMode, activeSection, onNavigate })=>{
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const handleScroll = {
                "Header.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 30);
                }
            }["Header.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "Header.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    const navItems = [
        {
            id: "projects",
            label: "Projects"
        },
        {
            id: "studio",
            label: "Studio"
        },
        {
            id: "materiality",
            label: "Materiality"
        },
        {
            id: "services",
            label: "Services"
        },
        {
            id: "journal",
            label: "Journal"
        },
        {
            id: "contact",
            label: "Contact"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled ? "py-4 bg-white/85 dark:bg-[#121110]/85 backdrop-blur-md border-b border-stone-200/50 dark:border-stone-800/50 shadow-xs" : "py-7 bg-transparent"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onNavigate("hero"),
                        className: "text-left group cursor-pointer focus:outline-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block text-xs sm:text-sm font-bold tracking-[0.24em] uppercase font-sans transition-opacity group-hover:opacity-60",
                                children: studioName
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block text-[9px] tracking-[0.26em] text-stone-400 dark:text-stone-500 uppercase mt-0.5",
                                children: studioDescriptor
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden md:flex items-center space-x-9",
                        children: navItems.map((item)=>{
                            const isActive = activeSection === item.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onNavigate(item.id),
                                className: `text-[11px] font-medium tracking-[0.2em] uppercase transition-all duration-300 relative py-1 cursor-pointer focus:outline-hidden ${isActive ? "text-stone-950 dark:text-stone-100 font-semibold" : "text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"}`,
                                children: [
                                    item.label,
                                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute bottom-0 left-0 right-0 h-[1.5px] bg-stone-950 dark:bg-stone-100 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 78,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, item.id, true, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 67,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onToggleDarkMode,
                                "aria-label": "Toggle dark gallery mode",
                                className: "px-3 py-1.5 rounded-full border border-stone-300/70 dark:border-stone-700/70 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer text-[10px] tracking-widest uppercase font-mono",
                                children: isDarkMode ? "LIGHT" : "DARK"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                                className: "md:hidden p-2 text-stone-800 dark:text-stone-200 focus:outline-hidden",
                                "aria-label": "Toggle navigation menu",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 1.5,
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 1.5,
                                        d: "M4 8h16M4 16h16"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden bg-white/95 dark:bg-[#121110]/95 backdrop-blur-xl border-b border-stone-200 dark:border-stone-800 px-6 py-6 space-y-4 shadow-2xl",
                children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            onNavigate(item.id);
                            setMobileMenuOpen(false);
                        },
                        className: "block w-full text-left text-xs font-medium tracking-[0.22em] uppercase py-2.5 text-stone-800 dark:text-stone-200 border-b border-stone-100 dark:border-stone-900",
                        children: item.label
                    }, item.id, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 130,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 128,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Header, "Tz1YhpjmJIU2IHcimEech/T/LuY=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/JournalSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JournalSection",
    ()=>JournalSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const JournalSection = ({ journal })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "journal",
        className: "py-24 sm:py-36 px-6 sm:px-10 max-w-7xl mx-auto border-t border-stone-200/60 dark:border-stone-800/60",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-stone-200/60 dark:border-stone-800/60",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-mono tracking-[0.25em] text-stone-500 dark:text-stone-400 uppercase",
                                children: "05 / JOURNAL"
                            }, void 0, false, {
                                fileName: "[project]/src/components/JournalSection.tsx",
                                lineNumber: 14,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl sm:text-5xl font-light tracking-tight mt-2",
                                children: "Architectural Essays"
                            }, void 0, false, {
                                fileName: "[project]/src/components/JournalSection.tsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/JournalSection.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs sm:text-sm text-stone-500 dark:text-stone-400 max-w-md mt-4 sm:mt-0 leading-relaxed font-light",
                        children: "Observations on spatial theory, material authenticity, and modern brutalism."
                    }, void 0, false, {
                        fileName: "[project]/src/components/JournalSection.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/JournalSection.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                children: journal.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        "data-cursor": "view",
                        className: "group cursor-pointer space-y-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "aspect-16/10 overflow-hidden rounded-xs bg-stone-200 dark:bg-stone-800",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: item.imageUrl,
                                    alt: item.title,
                                    loading: "lazy",
                                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/JournalSection.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/JournalSection.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-3 text-[9px] font-mono text-stone-400 dark:text-stone-500 uppercase tracking-widest",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: item.category
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/JournalSection.tsx",
                                                lineNumber: 45,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/JournalSection.tsx",
                                                lineNumber: 46,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: item.date
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/JournalSection.tsx",
                                                lineNumber: 47,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/JournalSection.tsx",
                                                lineNumber: 48,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: item.readTime
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/JournalSection.tsx",
                                                lineNumber: 49,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/JournalSection.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-light tracking-tight group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors leading-snug",
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/JournalSection.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/JournalSection.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, idx, true, {
                        fileName: "[project]/src/components/JournalSection.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/JournalSection.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/JournalSection.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = JournalSection;
var _c;
__turbopack_context__.k.register(_c, "JournalSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MaterialLibrary.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MaterialLibrary",
    ()=>MaterialLibrary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const MaterialLibrary = ({ title = "ARCHITECTURAL MATERIAL ARCHIVE", description = "Physicality is our primary language. Every surface is chosen for its tactile warmth, aging patina, and light interaction.", materials, onSelectMaterialHex })=>{
    _s();
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const activeMat = materials[selectedIndex] || materials[0];
    const handleSelect = (index, hex)=>{
        setSelectedIndex(index);
        if (onSelectMaterialHex) {
            onSelectMaterialHex(hex);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "materiality",
        className: "py-28 sm:py-40 px-6 sm:px-12 max-w-7xl mx-auto border-t border-stone-200/50 dark:border-stone-800/50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-2xl space-y-4 mb-16 sm:mb-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-mono tracking-[0.28em] text-stone-400 dark:text-stone-500 uppercase",
                        children: "02 / MATERIALITY"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MaterialLibrary.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl sm:text-5xl font-light tracking-tight",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/MaterialLibrary.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs sm:text-sm text-stone-500 dark:text-stone-400 leading-relaxed font-light",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/MaterialLibrary.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MaterialLibrary.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-5 space-y-2.5",
                        children: materials.map((mat, idx)=>{
                            const isSelected = idx === selectedIndex;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>handleSelect(idx, mat.colorHex),
                                className: `p-5 rounded-xs transition-all duration-300 cursor-pointer flex items-center justify-between border ${isSelected ? "bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-950 border-transparent shadow-sm" : "bg-transparent hover:bg-stone-100/60 dark:hover:bg-stone-900/60 border-stone-200/60 dark:border-stone-800/60"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-4 h-4 rounded-full border border-black/15 dark:border-white/20 shadow-xs",
                                                style: {
                                                    backgroundColor: mat.colorHex
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MaterialLibrary.tsx",
                                                lineNumber: 59,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-medium tracking-wide",
                                                        children: mat.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MaterialLibrary.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-mono opacity-60 uppercase tracking-wider",
                                                        children: mat.origin
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MaterialLibrary.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/MaterialLibrary.tsx",
                                                lineNumber: 63,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MaterialLibrary.tsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-mono opacity-40",
                                        children: [
                                            "0",
                                            idx + 1
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MaterialLibrary.tsx",
                                        lineNumber: 72,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, mat.name, true, {
                                fileName: "[project]/src/components/MaterialLibrary.tsx",
                                lineNumber: 49,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/MaterialLibrary.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    activeMat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-7 bg-stone-50 dark:bg-stone-900/40 p-8 sm:p-14 rounded-xs border border-stone-200/50 dark:border-stone-800/50 space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[9px] font-mono uppercase tracking-[0.2em] text-stone-400 dark:text-stone-500",
                                                children: [
                                                    "SPECIFICATION ARCHIVE / SAMPLE 0",
                                                    selectedIndex + 1
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/MaterialLibrary.tsx",
                                                lineNumber: 83,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl sm:text-4xl font-light tracking-tight mt-2",
                                                children: activeMat.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MaterialLibrary.tsx",
                                                lineNumber: 86,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MaterialLibrary.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 rounded-xs shadow-md border border-black/10 dark:border-white/10",
                                        style: {
                                            backgroundColor: activeMat.colorHex
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MaterialLibrary.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MaterialLibrary.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-6 text-xs font-mono border-t border-b border-stone-200/50 dark:border-stone-800/50 py-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block opacity-45 text-[9px] uppercase tracking-widest mb-1",
                                                children: "GEOLOGICAL ORIGIN"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MaterialLibrary.tsx",
                                                lineNumber: 98,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-stone-800 dark:text-stone-200",
                                                children: activeMat.origin
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MaterialLibrary.tsx",
                                                lineNumber: 101,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MaterialLibrary.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block opacity-45 text-[9px] uppercase tracking-widest mb-1",
                                                children: "TACTILE SURFACE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MaterialLibrary.tsx",
                                                lineNumber: 106,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-stone-800 dark:text-stone-200",
                                                children: activeMat.finish
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MaterialLibrary.tsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MaterialLibrary.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MaterialLibrary.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-light leading-relaxed",
                                children: activeMat.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/MaterialLibrary.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] font-mono text-stone-400 dark:text-stone-500 uppercase tracking-widest flex items-center space-x-2 pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 rounded-full bg-emerald-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MaterialLibrary.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "3D Spatial Model PBR Material Applied"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MaterialLibrary.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MaterialLibrary.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MaterialLibrary.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MaterialLibrary.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MaterialLibrary.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MaterialLibrary, "G8fEPHHi9+P2oI7WxiQDc3s4+J4=");
_c = MaterialLibrary;
var _c;
__turbopack_context__.k.register(_c, "MaterialLibrary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProjectDetailModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectDetailModal",
    ()=>ProjectDetailModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const ProjectDetailModal = ({ project, studioName = "STUDIO NAME", onClose })=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectDetailModal.useEffect": ()=>{
            const handleKeyDown = {
                "ProjectDetailModal.useEffect.handleKeyDown": (e)=>{
                    if (e.key === "Escape") {
                        onClose();
                    }
                }
            }["ProjectDetailModal.useEffect.handleKeyDown"];
            if (project) {
                window.addEventListener("keydown", handleKeyDown);
                document.body.style.overflow = "hidden";
            }
            return ({
                "ProjectDetailModal.useEffect": ()=>{
                    window.removeEventListener("keydown", handleKeyDown);
                    document.body.style.overflow = "auto";
                }
            })["ProjectDetailModal.useEffect"];
        }
    }["ProjectDetailModal.useEffect"], [
        project,
        onClose
    ]);
    if (!project) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 bg-white/95 dark:bg-[#121110]/95 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 z-20 bg-white/85 dark:bg-[#121110]/85 backdrop-blur-md px-6 sm:px-12 py-5 border-b border-stone-200/60 dark:border-stone-800/60 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs font-mono tracking-[0.25em] text-stone-500 uppercase",
                        children: [
                            "PROJECT CASE STUDY / ",
                            project.id
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectDetailModal.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "px-5 py-2 border border-stone-300/80 dark:border-stone-700/80 rounded-full text-xs font-mono tracking-widest uppercase hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer",
                        children: "CLOSE [ESC]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectDetailModal.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProjectDetailModal.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-6 sm:px-12 py-16 space-y-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 max-w-4xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs font-mono text-stone-400 dark:text-stone-500 uppercase tracking-widest",
                                children: [
                                    project.category,
                                    " — ",
                                    project.location,
                                    " (",
                                    project.year,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectDetailModal.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl sm:text-7xl font-light tracking-tight leading-[1.06]",
                                children: project.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectDetailModal.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectDetailModal.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "aspect-16/9 w-full overflow-hidden rounded-xs bg-stone-100 dark:bg-stone-900 shadow-2xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: project.imageUrl,
                            alt: project.title,
                            className: "w-full h-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectDetailModal.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectDetailModal.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-b border-stone-200/60 dark:border-stone-800/60 text-xs font-mono",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block opacity-45 uppercase text-[9px] mb-1.5 tracking-widest",
                                        children: "LOCATION"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectDetailModal.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-stone-900 dark:text-stone-100",
                                        children: project.location
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectDetailModal.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectDetailModal.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block opacity-45 uppercase text-[9px] mb-1.5 tracking-widest",
                                        children: "YEAR OF COMPLETION"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectDetailModal.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-stone-900 dark:text-stone-100",
                                        children: project.year
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectDetailModal.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectDetailModal.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block opacity-45 uppercase text-[9px] mb-1.5 tracking-widest",
                                        children: "BUILT FOOTPRINT"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectDetailModal.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-stone-900 dark:text-stone-100",
                                        children: project.area
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectDetailModal.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectDetailModal.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block opacity-45 uppercase text-[9px] mb-1.5 tracking-widest",
                                        children: "DISCIPLINE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectDetailModal.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-stone-900 dark:text-stone-100",
                                        children: project.category
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectDetailModal.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectDetailModal.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectDetailModal.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-3xl space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-mono tracking-[0.25em] text-stone-400 dark:text-stone-500 uppercase",
                                children: "ARCHITECTURAL CONCEPT"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectDetailModal.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl sm:text-4xl font-light italic font-serif leading-snug text-stone-900 dark:text-stone-100",
                                children: '"Architecture begins with the way light enters a room and lives through the materiality of its craft."'
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectDetailModal.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm sm:text-base text-stone-600 dark:text-stone-300 font-light leading-relaxed",
                                children: project.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectDetailModal.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectDetailModal.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-10 pt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aspect-4/3 overflow-hidden rounded-xs bg-stone-100 dark:bg-stone-900",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200",
                                            alt: "Interior perspective",
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectDetailModal.tsx",
                                            lineNumber: 106,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectDetailModal.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-[10px] font-mono text-stone-400 uppercase tracking-widest",
                                        children: "FIG 01. DAYLIGHT PENETRATION ACROSS NATURAL HONED PLINTH"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectDetailModal.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectDetailModal.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aspect-4/3 overflow-hidden rounded-xs bg-stone-100 dark:bg-stone-900",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&q=80&w=1200",
                                            alt: "Material detail",
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectDetailModal.tsx",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectDetailModal.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-[10px] font-mono text-stone-400 uppercase tracking-widest",
                                        children: "FIG 02. BOARD-FORMED CONCRETE & TIMBER JOINERY INTERSECTION"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectDetailModal.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectDetailModal.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectDetailModal.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-12 border-t border-stone-200/60 dark:border-stone-800/60 flex flex-col sm:flex-row justify-between text-xs font-mono opacity-50 space-y-2 sm:space-y-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "COMMISSION: ",
                                    studioName
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectDetailModal.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "DOCUMENTATION: ARCHITECTURAL PORTFOLIO ARCHIVE"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectDetailModal.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectDetailModal.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProjectDetailModal.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProjectDetailModal.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProjectDetailModal, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ProjectDetailModal;
var _c;
__turbopack_context__.k.register(_c, "ProjectDetailModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProjectGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectGrid",
    ()=>ProjectGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const ProjectGrid = ({ projects, onSelectProject })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        className: "py-28 sm:py-40 px-6 sm:px-12 max-w-7xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row md:items-end justify-between mb-20 sm:mb-28 pb-8 border-b border-stone-200/50 dark:border-stone-800/50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-mono tracking-[0.28em] text-stone-400 dark:text-stone-500 uppercase",
                                children: "01 / PORTFOLIO"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectGrid.tsx",
                                lineNumber: 15,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl sm:text-5xl font-light tracking-tight mt-3",
                                children: "Selected Works"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectGrid.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectGrid.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs sm:text-sm text-stone-500 dark:text-stone-400 max-w-md mt-4 md:mt-0 leading-relaxed font-light",
                        children: "A collection of contemporary residences, cultural interventions, and interior architecture defined by materiality and natural light."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectGrid.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProjectGrid.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-28 sm:space-y-44",
                children: projects.map((project, index)=>{
                    const isEven = index % 2 === 0;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        onClick: ()=>onSelectProject(project),
                        "data-cursor": "view",
                        className: "group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `lg:col-span-8 overflow-hidden rounded-xs relative bg-stone-100 dark:bg-stone-900 ${isEven ? "lg:order-1" : "lg:order-2"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aspect-16/10 sm:aspect-16/10 w-full overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: project.imageUrl,
                                            alt: project.title,
                                            loading: "lazy",
                                            decoding: "async",
                                            className: "w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectGrid.tsx",
                                            lineNumber: 46,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectGrid.tsx",
                                        lineNumber: 45,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-6 left-6 px-3 py-1.5 bg-stone-950/80 text-white backdrop-blur-md rounded-xs text-[10px] font-mono tracking-widest uppercase",
                                        children: [
                                            "PROJECT ",
                                            project.id
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProjectGrid.tsx",
                                        lineNumber: 56,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectGrid.tsx",
                                lineNumber: 40,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `lg:col-span-4 space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-3 text-[10px] font-mono text-stone-400 dark:text-stone-500 uppercase tracking-widest",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: project.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProjectGrid.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "/"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProjectGrid.tsx",
                                                        lineNumber: 70,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: project.location
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProjectGrid.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ProjectGrid.tsx",
                                                lineNumber: 68,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl sm:text-4xl font-light tracking-tight group-hover:translate-x-1.5 transition-transform duration-300",
                                                children: project.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectGrid.tsx",
                                                lineNumber: 73,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProjectGrid.tsx",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs sm:text-sm leading-relaxed text-stone-600 dark:text-stone-300 font-light",
                                        children: project.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectGrid.tsx",
                                        lineNumber: 78,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-4 py-4 border-t border-b border-stone-200/50 dark:border-stone-800/50 text-[11px] font-mono",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block text-[9px] text-stone-400 dark:text-stone-500 uppercase tracking-widest",
                                                        children: "COMPLETION"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProjectGrid.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-stone-800 dark:text-stone-200",
                                                        children: project.year
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProjectGrid.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ProjectGrid.tsx",
                                                lineNumber: 84,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block text-[9px] text-stone-400 dark:text-stone-500 uppercase tracking-widest",
                                                        children: "FOOTPRINT"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProjectGrid.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-stone-800 dark:text-stone-200",
                                                        children: project.area
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProjectGrid.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ProjectGrid.tsx",
                                                lineNumber: 92,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProjectGrid.tsx",
                                        lineNumber: 83,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex items-center text-xs font-semibold tracking-[0.2em] uppercase text-stone-900 dark:text-stone-100 group-hover:underline pt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Explore Case Study"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectGrid.tsx",
                                                lineNumber: 104,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 group-hover:translate-x-1.5 transition-transform duration-300",
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectGrid.tsx",
                                                lineNumber: 105,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProjectGrid.tsx",
                                        lineNumber: 103,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectGrid.tsx",
                                lineNumber: 62,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, project.id, true, {
                        fileName: "[project]/src/components/ProjectGrid.tsx",
                        lineNumber: 33,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectGrid.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProjectGrid.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ProjectGrid;
var _c;
__turbopack_context__.k.register(_c, "ProjectGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SEOHead.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SEOHead",
    ()=>SEOHead
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const SEOHead = ({ studioName = "STUDIO NAME", studioDescriptor = "ARCHITECTURE & INTERIORS", description = "A contemporary architectural and interior design practice shaping spaces through material, light and proportion.", email = "inquiries@yourstudio.com", address = "Global Practice" })=>{
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ArchitectureFirm",
        name: studioName,
        alternateName: studioDescriptor,
        description: description,
        email: email,
        address: {
            "@type": "PostalAddress",
            streetAddress: address
        },
        knowsAbout: [
            "Architecture",
            "Interior Architecture",
            "Spatial Design",
            "Luxury Residential Design",
            "3D Architectural Visualization"
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd)
    }, void 0, false, {
        fileName: "[project]/src/components/SEOHead.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SEOHead;
var _c;
__turbopack_context__.k.register(_c, "SEOHead");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ServicesSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServicesSection",
    ()=>ServicesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const ServicesSection = ({ services })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "services",
        className: "py-24 sm:py-36 px-6 sm:px-10 max-w-7xl mx-auto border-t border-stone-200/60 dark:border-stone-800/60",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-2xl space-y-4 mb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-mono tracking-[0.25em] text-stone-500 dark:text-stone-400 uppercase",
                        children: "04 / DISCIPLINES"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ServicesSection.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl sm:text-5xl font-light tracking-tight",
                        children: "Architectural Services"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ServicesSection.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs sm:text-sm text-stone-500 dark:text-stone-400 leading-relaxed font-light",
                        children: "From master planning to bespoke interior joinery, we offer complete spatial creation."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ServicesSection.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ServicesSection.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                children: services.map((srv)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-8 sm:p-10 bg-stone-50 dark:bg-stone-900/30 rounded-xs border border-stone-200/60 dark:border-stone-800/60 space-y-4 hover:border-stone-400 dark:hover:border-stone-600 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between text-xs font-mono text-stone-400 dark:text-stone-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: srv.number
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServicesSection.tsx",
                                        lineNumber: 32,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "STUDIO PRACTICE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServicesSection.tsx",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ServicesSection.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl sm:text-2xl font-light tracking-tight",
                                children: srv.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ServicesSection.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-light leading-relaxed",
                                children: srv.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/ServicesSection.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, srv.number, true, {
                        fileName: "[project]/src/components/ServicesSection.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/ServicesSection.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ServicesSection.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ServicesSection;
var _c;
__turbopack_context__.k.register(_c, "ServicesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SpatialDrawings.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpatialDrawings",
    ()=>SpatialDrawings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const SpatialDrawings = ()=>{
    _s();
    const [selectedDrawing, setSelectedDrawing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SpatialDrawings.useEffect": ()=>{
            const handleKeyDown = {
                "SpatialDrawings.useEffect.handleKeyDown": (e)=>{
                    if (e.key === "Escape") {
                        setSelectedDrawing(null);
                    }
                }
            }["SpatialDrawings.useEffect.handleKeyDown"];
            if (selectedDrawing) {
                window.addEventListener("keydown", handleKeyDown);
                document.body.style.overflow = "hidden";
            }
            return ({
                "SpatialDrawings.useEffect": ()=>{
                    window.removeEventListener("keydown", handleKeyDown);
                    document.body.style.overflow = "auto";
                }
            })["SpatialDrawings.useEffect"];
        }
    }["SpatialDrawings.useEffect"], [
        selectedDrawing
    ]);
    const drawings = [
        {
            title: "01 — RESIDENCE 01 GROUND FLOOR PLAN",
            type: "Architectural Plan",
            scale: "1:100 @ A1",
            description: "Axial arrangement around a central open-air atrium, integrating subterranean living quarters and thermal buffer zones.",
            svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 440 280",
                className: "w-full h-full stroke-current fill-none stroke-[0.85]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        transform: "translate(400, 40)",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "0",
                                y1: "20",
                                x2: "0",
                                y2: "0",
                                className: "stroke-stone-900 dark:stroke-stone-100 stroke-[1.5]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SpatialDrawings.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                points: "-4,6 0,0 4,6",
                                className: "fill-stone-900 dark:fill-stone-100 stroke-none"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SpatialDrawings.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "-3",
                                y: "-3",
                                className: "text-[8px] font-mono fill-current stroke-none",
                                children: "N"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SpatialDrawings.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SpatialDrawings.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "40",
                        y1: "20",
                        x2: "40",
                        y2: "250",
                        className: "stroke-stone-300 dark:stroke-stone-700 stroke-dasharray-[3,3]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpatialDrawings.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "160",
                        y1: "20",
                        x2: "160",
                        y2: "250",
                        className: "stroke-stone-300 dark:stroke-stone-700 stroke-dasharray-[3,3]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpatialDrawings.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "280",
                        y1: "20",
                        x2: "280",
                        y2: "250",
                        className: "stroke-stone-300 dark:stroke-stone-700 stroke-dasharray-[3,3]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpatialDrawings.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "380",
                        y1: "20",
                        x2: "380",
                        y2: "250",
                        className: "stroke-stone-300 dark:stroke-stone-700 stroke-dasharray-[3,3]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpatialDrawings.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "40",
                        y: "40",
                        width: "340",
                        height: "200",
                        className: "stroke-stone-900 dark:stroke-stone-100 stroke-[1.5]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpatialDrawings.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "160",
                        y: "90",
                        width: "120",
                        height: "100",
                        className: "stroke-stone-500 dark:stroke-stone-400 stroke-dasharray-[4,4]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpatialDrawings.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "40",
                        y1: "120",
                        x2: "160",
                        y2: "120",
                        className: "stroke-stone-800 dark:stroke-stone-200 stroke-[1.8]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpatialDrawings.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "280",
                        y1: "140",
                        x2: "380",
                        y2: "140",
                        className: "stroke-stone-800 dark:stroke-stone-200 stroke-[1.8]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpatialDrawings.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "70",
                        cy: "70",
                        r: "3",
                        className: "fill-current"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpatialDrawings.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "350",
                        cy: "70",
                        r: "3",
                        className: "fill-current"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpatialDrawings.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "70",
                        cy: "210",
                        r: "3",
                        className: "fill-current"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpatialDrawings.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "350",
                        cy: "210",
                        r: "3",
                        className: "fill-current"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpatialDrawings.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "185",
                        y: "145",
                        className: "text-[8px] font-mono fill-current stroke-none tracking-widest",
                        children: "COURTYARD"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpatialDrawings.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "65",
                        y: "160",
                        className: "text-[8px] font-mono fill-current stroke-none tracking-widest",
                        children: "LIVING PAVILION"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpatialDrawings.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "300",
                        y: "180",
                        className: "text-[8px] font-mono fill-current stroke-none tracking-widest",
                        children: "STUDIO"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpatialDrawings.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "190",
                        y: "32",
                        className: "text-[7px] font-mono fill-stone-400 stroke-none",
                        children: "34.00 m"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpatialDrawings.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "22",
                        y: "145",
                        className: "text-[7px] font-mono fill-stone-400 stroke-none transform -rotate-90",
                        children: "20.00 m"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpatialDrawings.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SpatialDrawings.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            title: "02 — VILLA 02 LONGITUDINAL SECTION",
            type: "Building Section",
            scale: "1:50 @ A1",
            description: "Cantilevered structural steel trusses anchoring the upper sleeping volume over topography incline.",
            svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 440 280",
                className: "w-full h-full stroke-current fill-none stroke-[0.85]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        className: "text-[7px] font-mono fill-stone-400 stroke-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "10",
                                y: "80",
                                children: "+ 6.40 m"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SpatialDrawings.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "10",
                                y: "150",
                                children: "+ 3.20 m"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SpatialDrawings.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "10",
                                y: "230",
                                children: "± 0.00 m"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SpatialDrawings.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SpatialDrawings.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 30 240 Q 180 220 410 160",
                        className: "stroke-stone-500 dark:stroke-stone-400 stroke-[1.2]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpatialDrawings.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                        points: "60,235 180,215 180,150 60,150",
                        className: "stroke-stone-800 dark:stroke-stone-200 stroke-[1.6]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpatialDrawings.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                        points: "140,150 390,150 390,80 140,80",
                        className: "stroke-stone-900 dark:stroke-stone-100 stroke-[2]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpatialDrawings.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "180",
                        y1: "215",
                        x2: "180",
                        y2: "150",
                        className: "stroke-stone-700 dark:stroke-stone-300 stroke-[1.8]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpatialDrawings.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "300",
                        y1: "190",
                        x2: "300",
                        y2: "150",
                        className: "stroke-stone-700 dark:stroke-stone-300 stroke-[1.8]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpatialDrawings.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "140",
                        y1: "80",
                        x2: "390",
                        y2: "150",
                        className: "stroke-stone-400 dark:stroke-stone-600 stroke-dasharray-[3,3]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpatialDrawings.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "220",
                        y: "120",
                        className: "text-[8px] font-mono fill-current stroke-none tracking-widest",
                        children: "CANTILEVER VOLUME"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpatialDrawings.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "80",
                        y: "185",
                        className: "text-[8px] font-mono fill-current stroke-none tracking-widest",
                        children: "GROUND ATELIER"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpatialDrawings.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SpatialDrawings.tsx",
                lineNumber: 84,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-28 sm:py-40 px-6 sm:px-12 max-w-7xl mx-auto border-t border-stone-200/50 dark:border-stone-800/50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-2xl space-y-4 mb-16 sm:mb-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-mono tracking-[0.28em] text-stone-400 dark:text-stone-500 uppercase",
                        children: "03 / SPATIAL DRAWINGS"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpatialDrawings.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl sm:text-5xl font-light tracking-tight",
                        children: "Architectural Diagrams"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpatialDrawings.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs sm:text-sm text-stone-500 dark:text-stone-400 leading-relaxed font-light",
                        children: "Vector floor plans, structural sections, and spatial proportion studies."
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpatialDrawings.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SpatialDrawings.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-10",
                children: drawings.map((dwg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>setSelectedDrawing(dwg),
                        "data-cursor": "view",
                        className: "group cursor-pointer bg-stone-50/70 dark:bg-stone-900/30 border border-stone-200/50 dark:border-stone-800/50 rounded-xs p-6 space-y-6 hover:border-stone-400 dark:hover:border-stone-600 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "aspect-16/10 w-full bg-white dark:bg-[#121110] p-6 rounded-xs border border-stone-200/40 dark:border-stone-800/40 flex items-center justify-center text-stone-800 dark:text-stone-200",
                                children: dwg.svg
                            }, void 0, false, {
                                fileName: "[project]/src/components/SpatialDrawings.tsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between text-[9px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: dwg.type
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SpatialDrawings.tsx",
                                                lineNumber: 146,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: dwg.scale
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SpatialDrawings.tsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SpatialDrawings.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-medium tracking-tight group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors",
                                        children: dwg.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SpatialDrawings.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-stone-500 dark:text-stone-400 font-light leading-relaxed",
                                        children: dwg.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SpatialDrawings.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SpatialDrawings.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, dwg.title, true, {
                        fileName: "[project]/src/components/SpatialDrawings.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/SpatialDrawings.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            selectedDrawing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-6 sm:p-12 animate-in fade-in duration-200",
                onClick: ()=>setSelectedDrawing(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative bg-white dark:bg-[#121110] border border-stone-800 p-8 sm:p-12 rounded-xs max-w-5xl w-full text-stone-900 dark:text-stone-100 space-y-6 shadow-2xl",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[9px] font-mono uppercase tracking-widest text-stone-400",
                                            children: [
                                                selectedDrawing.type,
                                                " — ",
                                                selectedDrawing.scale
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SpatialDrawings.tsx",
                                            lineNumber: 172,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl sm:text-2xl font-light mt-0.5",
                                            children: selectedDrawing.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SpatialDrawings.tsx",
                                            lineNumber: 175,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SpatialDrawings.tsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedDrawing(null),
                                    className: "px-4 py-2 text-xs font-mono uppercase tracking-widest border border-stone-300 dark:border-stone-700 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer",
                                    children: "CLOSE [ESC]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SpatialDrawings.tsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SpatialDrawings.tsx",
                            lineNumber: 170,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "aspect-16/10 w-full bg-stone-50 dark:bg-stone-950 p-8 sm:p-12 rounded-xs border border-stone-200 dark:border-stone-800 text-stone-800 dark:text-stone-200",
                            children: selectedDrawing.svg
                        }, void 0, false, {
                            fileName: "[project]/src/components/SpatialDrawings.tsx",
                            lineNumber: 187,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs sm:text-sm text-stone-500 dark:text-stone-400 font-light leading-relaxed max-w-3xl",
                            children: selectedDrawing.description
                        }, void 0, false, {
                            fileName: "[project]/src/components/SpatialDrawings.tsx",
                            lineNumber: 191,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SpatialDrawings.tsx",
                    lineNumber: 166,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/SpatialDrawings.tsx",
                lineNumber: 162,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SpatialDrawings.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SpatialDrawings, "qwpXNtv4TeG1Yvr9Yuzlwlj6ujE=");
_c = SpatialDrawings;
var _c;
__turbopack_context__.k.register(_c, "SpatialDrawings");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SpatialHUD.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpatialHUD",
    ()=>SpatialHUD
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const SpatialHUD = ({ progress, activeSection })=>{
    const getZoneLabel = (p)=>{
        if (p < 0.12) return "01 / ARRIVAL PAVILION & PLINTH";
        if (p < 0.28) return "02 / ATRIUM & LIGHT COURT";
        if (p < 0.44) return "03 / SELECTED WORKS PAVILIONS";
        if (p < 0.58) return "04 / FEATURED INSTALLATION";
        if (p < 0.72) return "05 / MATERIALITY ARCHIVE";
        if (p < 0.84) return "06 / SPATIAL DIAGRAMS";
        if (p < 0.94) return "07 / DISCIPLINES & ESSAYS";
        return "08 / NOCTURNE CHAMBER";
    };
    const getElevation = (p)=>{
        const elev = (4.2 - p * 2.0).toFixed(2);
        return `+${elev}m`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-6 left-6 sm:left-12 right-6 sm:right-12 z-30 pointer-events-none flex items-center justify-between text-[9px] font-mono tracking-[0.24em] text-stone-400 dark:text-stone-500 uppercase",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-3 bg-white/70 dark:bg-[#121110]/70 backdrop-blur-md px-3.5 py-1.5 rounded-xs border border-stone-200/40 dark:border-stone-800/40",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-1.5 h-1.5 rounded-full bg-stone-900 dark:bg-stone-100"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpatialHUD.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: getZoneLabel(progress)
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpatialHUD.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SpatialHUD.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden sm:flex items-center space-x-6 bg-white/70 dark:bg-[#121110]/70 backdrop-blur-md px-3.5 py-1.5 rounded-xs border border-stone-200/40 dark:border-stone-800/40",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "ELEV: ",
                            getElevation(progress)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SpatialHUD.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "•"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpatialHUD.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "RAIL: ",
                            Math.round(progress * 100),
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SpatialHUD.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SpatialHUD.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SpatialHUD.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SpatialHUD;
var _c;
__turbopack_context__.k.register(_c, "SpatialHUD");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@cutiepage/template-sdk/src/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$define$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@cutiepage/template-sdk/src/define.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@cutiepage/template-sdk/src/context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dataParsers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/dataParsers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SEOHead$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SEOHead.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CustomCursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CustomCursor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$ContinuousSpatialCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/3d/ContinuousSpatialCanvas.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SpatialHUD$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SpatialHUD.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProjectGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeaturedProject$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FeaturedProject.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MaterialLibrary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MaterialLibrary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SpatialDrawings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SpatialDrawings.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServicesSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServicesSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$JournalSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/JournalSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ContactSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectDetailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProjectDetailModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// DEFAULT PREVIEW DATASETS (NEUTRAL TEMPLATE PLACEHOLDERS)
const DEFAULT_PROJECTS = [
    {
        id: "01",
        title: "Residence 01",
        category: "Residential Architecture",
        location: "Zurich, Switzerland",
        year: "2026",
        area: "4,800 sq ft",
        imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600",
        description: "A subterranean monolithic residence sculpted from natural travertine and board-formed concrete, prioritizing natural cross-ventilation, rainwater harvesting, and deep shadow play."
    },
    {
        id: "02",
        title: "House 02",
        category: "Contemporary Residence",
        location: "Kyoto, Japan",
        year: "2025",
        area: "6,200 sq ft",
        imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600",
        description: "A minimalist cantilevered glass villa suspended over lake topography, integrating floor-to-ceiling triple glazing, burnt cedar cladding, and geothermal heating."
    },
    {
        id: "03",
        title: "Villa 03",
        category: "Interior Architecture",
        location: "Mumbai, India",
        year: "2025",
        area: "3,500 sq ft",
        imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600",
        description: "A contemplative courtyard residence featuring raw basalt masonry, acoustic screens, and custom hand-rubbed brass joinery."
    },
    {
        id: "04",
        title: "Interior 04",
        category: "Spatial & Gallery Design",
        location: "Copenhagen, Denmark",
        year: "2024",
        area: "5,100 sq ft",
        imageUrl: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1600",
        description: "An adaptive reuse gallery and design laboratory housed in a historic brick warehouse with stainless steel spatial partitions."
    }
];
const DEFAULT_MATERIALS = [
    {
        name: "Travertine Navona",
        origin: "Tivoli, Italy",
        finish: "Honed & Unfilled",
        description: "Warm cream limestone with linear vein patterns, bringing quiet warmth to interior walls and courtyard paving.",
        colorHex: "#e4dcd3"
    },
    {
        name: "Smoked European Oak",
        origin: "Bavaria, Germany",
        finish: "Brushed Matte Wax",
        description: "Deep chocolate-brown grain with tactile texture, specified for custom architectural millwork and floating cabinetry.",
        colorHex: "#3d3128"
    },
    {
        name: "Patinated Brass",
        origin: "Kyoto, Japan",
        finish: "Hand-Rubbed Oil",
        description: "A living metallic finish that develops a rich antique sheen over time, executed on door handles and light fittings.",
        colorHex: "#a89264"
    },
    {
        name: "Board-Formed Concrete",
        origin: "Zurich, Switzerland",
        finish: "Off-Shutter Natural",
        description: "Raw structural concrete capturing grain impressions of rough-sawn cedar formwork for textural exterior facades.",
        colorHex: "#9c9790"
    },
    {
        name: "Fluted Low-Iron Glass",
        origin: "Venice, Italy",
        finish: "Acid-Etched Backing",
        description: "Translucent obscurity glass diffusing sunlight into soft ambient illumination across interior partitions.",
        colorHex: "#d8dfde"
    }
];
const DEFAULT_SERVICES = [
    {
        number: "01",
        title: "Architectural Design",
        description: "Full-scope master planning, conceptual design, construction documentation, and site supervision for private and public commissions."
    },
    {
        number: "02",
        title: "Interior Architecture",
        description: "Spatial layout optimization, bespoke furniture creation, material curation, acoustic design, and detailed joinery specifications."
    },
    {
        number: "03",
        title: "Spatial & Experience Design",
        description: "Luxury hospitality concepts, retail flagship environments, gallery curation, and brand architecture."
    },
    {
        number: "04",
        title: "3D Spatial Visualization",
        description: "Cinematic rendering, architectural walkthroughs, digital twin development, and physical material simulation."
    }
];
const DEFAULT_JOURNAL = [
    {
        date: "AUG 2026",
        category: "ESSAY",
        title: "The Quiet Space: Reducing Visual Noise in Residential Architecture",
        readTime: "5 MIN READ",
        imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1000"
    },
    {
        date: "JUL 2026",
        category: "MATERIALITY",
        title: "Tactile Brutalism: Honest Expressions of Board-Formed Concrete and Travertine",
        readTime: "7 MIN READ",
        imageUrl: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&q=80&w=1000"
    },
    {
        date: "MAY 2026",
        category: "PROCESS",
        title: "Light as a Primary Construction Material",
        readTime: "4 MIN READ",
        imageUrl: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1000"
    }
];
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$define$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineTemplate"])({
    slug: "atelier-3d",
    name: "Atelier 3d",
    description: "A continuous 3D architectural & interior design portfolio template where the entire website exists inside a virtual architectural gallery.",
    category: "portfolio",
    tags: [
        "architecture",
        "interior",
        "3d",
        "spatial",
        "luxury"
    ],
    theme: {
        background: {
            type: "color",
            label: "Light Background",
            default: "#fbfaf8"
        },
        foreground: {
            type: "color",
            label: "Text Color",
            default: "#1c1b1a"
        },
        accent: {
            type: "color",
            label: "Accent Color",
            default: "#73706b"
        },
        stone: {
            type: "color",
            label: "Stone Tint",
            default: "#e6e2dd"
        },
        darkBg: {
            type: "color",
            label: "Dark Gallery Background",
            default: "#121110"
        }
    },
    fieldGroups: {
        hero: {
            label: "Hero & Identity",
            blockType: "hero",
            description: "Studio title, descriptor, and opening statement"
        },
        studio: {
            label: "Studio Philosophy",
            blockType: "story",
            description: "Architectural narrative and metrics"
        },
        projects: {
            label: "Selected Projects",
            blockType: "gallery",
            description: "Portfolio projects list"
        },
        materiality: {
            label: "Material Archive",
            blockType: "details",
            description: "Physical material specifications"
        },
        services: {
            label: "Services & Disciplines",
            blockType: "details",
            description: "Architectural offerings"
        },
        journal: {
            label: "Journal & Essays",
            blockType: "story",
            description: "Editorial articles"
        },
        contact: {
            label: "Contact & Inquiries",
            blockType: "cta",
            description: "Commission inquiry details"
        }
    },
    fields: {
        studioName: {
            type: "text",
            label: "Studio Name",
            group: "hero",
            required: true,
            maxLength: 40,
            default: "STUDIO NAME"
        },
        studioDescriptor: {
            type: "text",
            label: "Studio Descriptor",
            group: "hero",
            maxLength: 60,
            default: "ARCHITECTURE & INTERIORS"
        },
        heroEyebrow: {
            type: "text",
            label: "Hero Eyebrow Label",
            group: "hero",
            maxLength: 80,
            default: "EXHIBITION / STATION 01 — ARCHITECTURE & SPATIAL DESIGN"
        },
        heroHeadline: {
            type: "text",
            label: "Hero Headline",
            group: "hero",
            required: true,
            maxLength: 90,
            default: "Designing spaces shaped by intention, material, and proportion."
        },
        heroDesc: {
            type: "textarea",
            label: "Hero Description",
            group: "hero",
            maxLength: 240,
            default: "A contemporary architecture and interior practice creating quiet, enduring residential and cultural environments worldwide."
        },
        ctaProjects: {
            type: "text",
            label: "CTA Projects Label",
            group: "hero",
            default: "Explore Selected Work"
        },
        ctaContact: {
            type: "text",
            label: "CTA Contact Label",
            group: "hero",
            default: "Start a Project"
        },
        studioStatement: {
            type: "text",
            label: "Studio Philosophy Statement",
            group: "studio",
            maxLength: 160,
            default: "Architecture begins with the way light enters a room and lives through the materiality of its craft."
        },
        studioDesc: {
            type: "textarea",
            label: "Studio Detailed Philosophy",
            group: "studio",
            maxLength: 320,
            default: "Founded on principles of spatial purity and material authenticity, our practice operates at the intersection of architecture, interior design, and structural philosophy."
        },
        stat1Number: {
            type: "text",
            label: "Metric 1 Value",
            group: "studio",
            default: "24+"
        },
        stat1Label: {
            type: "text",
            label: "Metric 1 Label",
            group: "studio",
            default: "Completed Works"
        },
        stat2Number: {
            type: "text",
            label: "Metric 2 Value",
            group: "studio",
            default: "12"
        },
        stat2Label: {
            type: "text",
            label: "Metric 2 Label",
            group: "studio",
            default: "Design Awards"
        },
        stat3Number: {
            type: "text",
            label: "Metric 3 Value",
            group: "studio",
            default: "08"
        },
        stat3Label: {
            type: "text",
            label: "Metric 3 Label",
            group: "studio",
            default: "Global Locations"
        },
        projectsData: {
            type: "textarea",
            label: "Projects List (ID|Title|Category|Location|Year|Area|ImageURL|Description per line)",
            group: "projects"
        },
        materialityTitle: {
            type: "text",
            label: "Material Archive Title",
            group: "materiality",
            default: "ARCHITECTURAL MATERIAL ARCHIVE"
        },
        materialityDesc: {
            type: "text",
            label: "Material Archive Description",
            group: "materiality",
            default: "Physicality is our primary language. Every surface is chosen for its tactile warmth, aging patina, and light interaction."
        },
        materialsData: {
            type: "textarea",
            label: "Materials List (Name|Origin|Finish|Description|ColorHex per line)",
            group: "materiality"
        },
        servicesData: {
            type: "textarea",
            label: "Services List (Number|Title|Description per line)",
            group: "services"
        },
        journalData: {
            type: "textarea",
            label: "Journal List (Date|Category|Title|ReadTime|ImageURL per line)",
            group: "journal"
        },
        contactHeadline: {
            type: "text",
            label: "Contact Section Headline",
            group: "contact",
            default: "START A PROJECT"
        },
        contactEmail: {
            type: "text",
            label: "Contact Email",
            group: "contact",
            default: "inquiries@yourstudio.com"
        },
        contactPhone: {
            type: "text",
            label: "Contact Phone",
            group: "contact",
            default: "+1 (555) 019-2834"
        },
        contactAddress: {
            type: "text",
            label: "Studio Address",
            group: "contact",
            default: "Studio Address / City, Country"
        },
        contactInstagram: {
            type: "text",
            label: "Instagram Handle",
            group: "contact",
            default: "@yourstudio.arch"
        },
        footerCopyright: {
            type: "text",
            label: "Footer Copyright Note",
            group: "contact",
            default: "ALL RIGHTS RESERVED."
        }
    },
    render: _s(()=>{
        _s();
        const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
        const bgVal = theme.background || "#fbfaf8";
        const fgVal = theme.foreground || "#1c1b1a";
        const darkBgVal = theme.darkBg || "#121110";
        const studioName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"])("studioName") || "STUDIO NAME";
        const studioDescriptor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"])("studioDescriptor") || "ARCHITECTURE & INTERIORS";
        const heroEyebrow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"])("heroEyebrow") || "EXHIBITION / STATION 01 — ARCHITECTURE & SPATIAL DESIGN";
        const heroHeadline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"])("heroHeadline") || "Designing spaces shaped by intention, material, and proportion.";
        const heroDesc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"])("heroDesc") || "A contemporary architecture and interior practice creating quiet, enduring residential and cultural environments worldwide.";
        const ctaProjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"])("ctaProjects") || "Explore Selected Work";
        const ctaContact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"])("ctaContact") || "Start a Project";
        const studioStatement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"])("studioStatement") || "Architecture begins with the way light enters a room and lives through the materiality of its craft.";
        const studioDesc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"])("studioDesc") || "Founded on principles of spatial purity and material authenticity, our practice operates at the intersection of architecture, interior design, and structural philosophy.";
        const stat1Number = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"])("stat1Number") || "24+";
        const stat1Label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"])("stat1Label") || "Completed Works";
        const stat2Number = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"])("stat2Number") || "12";
        const stat2Label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"])("stat2Label") || "Design Awards";
        const stat3Number = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"])("stat3Number") || "08";
        const stat3Label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"])("stat3Label") || "Global Locations";
        const rawProjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"])("projectsData");
        const rawMaterials = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"])("materialsData");
        const rawServices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"])("servicesData");
        const rawJournal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"])("journalData");
        const materialityTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"])("materialityTitle") || "ARCHITECTURAL MATERIAL ARCHIVE";
        const materialityDesc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"])("materialityDesc") || "Physicality is our primary language. Every surface is chosen for its tactile warmth, aging patina, and light interaction.";
        const contactHeadline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"])("contactHeadline") || "START A PROJECT";
        const contactEmail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"])("contactEmail") || "inquiries@yourstudio.com";
        const contactPhone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"])("contactPhone") || "+1 (555) 019-2834";
        const contactAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"])("contactAddress") || "Studio Address / City, Country";
        const contactInstagram = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"])("contactInstagram") || "@yourstudio.arch";
        const footerCopyright = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"])("footerCopyright") || "ALL RIGHTS RESERVED.";
        // Parsed datasets
        const projects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dataParsers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseProjects"])(rawProjects, DEFAULT_PROJECTS);
        const materials = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dataParsers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseMaterials"])(rawMaterials, DEFAULT_MATERIALS);
        const services = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dataParsers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseServices"])(rawServices, DEFAULT_SERVICES);
        const journal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dataParsers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseJournal"])(rawJournal, DEFAULT_JOURNAL);
        // States
        const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
        const [activeMaterialHex, setActiveMaterialHex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(materials[0]?.colorHex || "#e4dcd3");
        const [selectedProject, setSelectedProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
        const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("hero");
        const [scrollProgress, setScrollProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
        // Continuous Scroll Progress Calculation
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "useEffect": ()=>{
                const handleScroll = {
                    "useEffect.handleScroll": ()=>{
                        const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
                        const currentProgress = totalScroll > 0 ? window.scrollY / totalScroll : 0;
                        setScrollProgress(Math.min(1, Math.max(0, currentProgress)));
                    }
                }["useEffect.handleScroll"];
                window.addEventListener("scroll", handleScroll, {
                    passive: true
                });
                return ({
                    "useEffect": ()=>window.removeEventListener("scroll", handleScroll)
                })["useEffect"];
            }
        }["useEffect"], []);
        const handleNavigate = (sectionId)=>{
            setActiveSection(sectionId);
            const el = document.getElementById(sectionId);
            if (el) {
                el.scrollIntoView({
                    behavior: "smooth"
                });
            }
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: `min-h-screen font-sans relative transition-colors duration-700 ${isDarkMode ? "dark text-[#fbfaf8]" : "text-[#1c1b1a]"}`,
            style: {
                color: isDarkMode ? "#fbfaf8" : fgVal
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SEOHead$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEOHead"], {
                    studioName: studioName,
                    studioDescriptor: studioDescriptor,
                    description: heroDesc,
                    email: contactEmail,
                    address: contactAddress
                }, void 0, false, {
                    fileName: "[project]/src/index.tsx",
                    lineNumber: 426,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CustomCursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomCursor"], {}, void 0, false, {
                    fileName: "[project]/src/index.tsx",
                    lineNumber: 433,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$ContinuousSpatialCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContinuousSpatialCanvas"], {
                    isDarkMode: isDarkMode,
                    activeMaterialHex: activeMaterialHex,
                    scrollProgress: scrollProgress
                }, void 0, false, {
                    fileName: "[project]/src/index.tsx",
                    lineNumber: 436,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SpatialHUD$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpatialHUD"], {
                    progress: scrollProgress,
                    activeSection: activeSection
                }, void 0, false, {
                    fileName: "[project]/src/index.tsx",
                    lineNumber: 443,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
                    studioName: studioName,
                    studioDescriptor: studioDescriptor,
                    isDarkMode: isDarkMode,
                    onToggleDarkMode: ()=>setIsDarkMode(!isDarkMode),
                    activeSection: activeSection,
                    onNavigate: handleNavigate
                }, void 0, false, {
                    fileName: "[project]/src/index.tsx",
                    lineNumber: 446,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 pointer-events-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "hero",
                            className: "min-h-screen flex flex-col justify-end px-6 sm:px-12 pb-24 sm:pb-32 pt-32 max-w-7xl mx-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-4xl space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex items-center space-x-3 text-[10px] font-mono tracking-[0.3em] uppercase bg-white/70 dark:bg-[#121110]/70 backdrop-blur-md px-4 py-2 rounded-xs border border-stone-200/50 dark:border-stone-800/50 text-stone-600 dark:text-stone-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1.5 h-1.5 rounded-full bg-stone-950 dark:bg-stone-100"
                                            }, void 0, false, {
                                                fileName: "[project]/src/index.tsx",
                                                lineNumber: 464,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: heroEyebrow
                                            }, void 0, false, {
                                                fileName: "[project]/src/index.tsx",
                                                lineNumber: 465,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/index.tsx",
                                        lineNumber: 463,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl sm:text-7xl lg:text-8xl font-light tracking-tight leading-[1.04]",
                                        children: heroHeadline
                                    }, void 0, false, {
                                        fileName: "[project]/src/index.tsx",
                                        lineNumber: 468,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 items-end",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "md:col-span-8 text-sm sm:text-base text-stone-700 dark:text-stone-300 font-light leading-relaxed max-w-xl",
                                                children: heroDesc
                                            }, void 0, false, {
                                                fileName: "[project]/src/index.tsx",
                                                lineNumber: 473,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-4 flex flex-wrap items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleNavigate("projects"),
                                                        className: "px-7 py-3.5 bg-stone-950 text-white dark:bg-stone-100 dark:text-stone-950 text-xs font-semibold tracking-[0.2em] uppercase rounded-xs hover:opacity-85 transition-opacity cursor-pointer flex items-center space-x-2 shadow-lg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: ctaProjects
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/index.tsx",
                                                                lineNumber: 482,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "↓"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/index.tsx",
                                                                lineNumber: 483,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/index.tsx",
                                                        lineNumber: 478,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleNavigate("contact"),
                                                        className: "px-7 py-3.5 bg-white/80 dark:bg-[#121110]/80 backdrop-blur-md border border-stone-300/80 dark:border-stone-700/80 text-xs font-semibold tracking-[0.2em] uppercase rounded-xs hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer",
                                                        children: ctaContact
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/index.tsx",
                                                        lineNumber: 486,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/index.tsx",
                                                lineNumber: 477,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/index.tsx",
                                        lineNumber: 472,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/index.tsx",
                                lineNumber: 462,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/index.tsx",
                            lineNumber: 458,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "studio",
                            className: "min-h-screen flex items-center px-6 sm:px-12 py-32 max-w-7xl mx-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start w-full bg-white/60 dark:bg-[#121110]/60 backdrop-blur-md p-8 sm:p-16 rounded-xs border border-stone-200/40 dark:border-stone-800/40 shadow-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:col-span-7 space-y-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-mono tracking-[0.28em] text-stone-400 dark:text-stone-500 uppercase",
                                                children: "STATION 02 / SPATIAL INTENTION"
                                            }, void 0, false, {
                                                fileName: "[project]/src/index.tsx",
                                                lineNumber: 504,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-snug font-serif italic text-stone-950 dark:text-stone-50",
                                                children: [
                                                    '"',
                                                    studioStatement,
                                                    '"'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/index.tsx",
                                                lineNumber: 508,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm sm:text-base text-stone-700 dark:text-stone-300 font-light leading-relaxed max-w-2xl",
                                                children: studioDesc
                                            }, void 0, false, {
                                                fileName: "[project]/src/index.tsx",
                                                lineNumber: 512,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/index.tsx",
                                        lineNumber: 503,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-8 pt-4 lg:pt-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-l-2 border-stone-950 dark:border-stone-100 pl-6 space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-4xl sm:text-6xl font-light tracking-tight font-mono",
                                                        children: stat1Number
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/index.tsx",
                                                        lineNumber: 520,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block text-[10px] font-mono text-stone-500 dark:text-stone-400 uppercase tracking-widest",
                                                        children: stat1Label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/index.tsx",
                                                        lineNumber: 521,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/index.tsx",
                                                lineNumber: 519,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-l-2 border-stone-950 dark:border-stone-100 pl-6 space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-4xl sm:text-6xl font-light tracking-tight font-mono",
                                                        children: stat2Number
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/index.tsx",
                                                        lineNumber: 524,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block text-[10px] font-mono text-stone-500 dark:text-stone-400 uppercase tracking-widest",
                                                        children: stat2Label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/index.tsx",
                                                        lineNumber: 525,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/index.tsx",
                                                lineNumber: 523,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-l-2 border-stone-950 dark:border-stone-100 pl-6 space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-4xl sm:text-6xl font-light tracking-tight font-mono",
                                                        children: stat3Number
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/index.tsx",
                                                        lineNumber: 528,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block text-[10px] font-mono text-stone-500 dark:text-stone-400 uppercase tracking-widest",
                                                        children: stat3Label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/index.tsx",
                                                        lineNumber: 529,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/index.tsx",
                                                lineNumber: 527,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/index.tsx",
                                        lineNumber: 518,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/index.tsx",
                                lineNumber: 502,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/index.tsx",
                            lineNumber: 498,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/40 dark:bg-[#121110]/40 backdrop-blur-xs py-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectGrid"], {
                                projects: projects,
                                onSelectProject: (proj)=>setSelectedProject(proj)
                            }, void 0, false, {
                                fileName: "[project]/src/index.tsx",
                                lineNumber: 537,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/index.tsx",
                            lineNumber: 536,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        projects[0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeaturedProject$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeaturedProject"], {
                                project: projects[0],
                                onSelectProject: (proj)=>setSelectedProject(proj)
                            }, void 0, false, {
                                fileName: "[project]/src/index.tsx",
                                lineNumber: 546,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/index.tsx",
                            lineNumber: 545,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/50 dark:bg-[#121110]/50 backdrop-blur-xs py-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MaterialLibrary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MaterialLibrary"], {
                                title: materialityTitle,
                                description: materialityDesc,
                                materials: materials,
                                onSelectMaterialHex: (hex)=>setActiveMaterialHex(hex)
                            }, void 0, false, {
                                fileName: "[project]/src/index.tsx",
                                lineNumber: 555,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/index.tsx",
                            lineNumber: 554,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SpatialDrawings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpatialDrawings"], {}, void 0, false, {
                                fileName: "[project]/src/index.tsx",
                                lineNumber: 565,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/index.tsx",
                            lineNumber: 564,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/50 dark:bg-[#121110]/50 backdrop-blur-xs py-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServicesSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServicesSection"], {
                                services: services
                            }, void 0, false, {
                                fileName: "[project]/src/index.tsx",
                                lineNumber: 570,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/index.tsx",
                            lineNumber: 569,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$JournalSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JournalSection"], {
                                journal: journal
                            }, void 0, false, {
                                fileName: "[project]/src/index.tsx",
                                lineNumber: 575,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/index.tsx",
                            lineNumber: 574,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/60 dark:bg-[#121110]/60 backdrop-blur-md py-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactSection"], {
                                studioName: studioName,
                                headline: contactHeadline,
                                email: contactEmail,
                                phone: contactPhone,
                                address: contactAddress,
                                instagram: contactInstagram
                            }, void 0, false, {
                                fileName: "[project]/src/index.tsx",
                                lineNumber: 580,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/index.tsx",
                            lineNumber: 579,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {
                            studioName: studioName,
                            studioDescriptor: studioDescriptor,
                            contactEmail: contactEmail,
                            contactPhone: contactPhone,
                            contactAddress: contactAddress,
                            contactInstagram: contactInstagram,
                            footerCopyright: footerCopyright,
                            onNavigate: handleNavigate
                        }, void 0, false, {
                            fileName: "[project]/src/index.tsx",
                            lineNumber: 591,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/index.tsx",
                    lineNumber: 456,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectDetailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectDetailModal"], {
                    project: selectedProject,
                    studioName: studioName,
                    onClose: ()=>setSelectedProject(null)
                }, void 0, false, {
                    fileName: "[project]/src/index.tsx",
                    lineNumber: 604,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/index.tsx",
            lineNumber: 418,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }, "ZcnZ6jnV9x2ZY4nC0esFlDNQnQw=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cutiepage$2f$template$2d$sdk$2f$src$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"]
        ];
    })
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/dataParsers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseJournal",
    ()=>parseJournal,
    "parseMaterials",
    ()=>parseMaterials,
    "parseProjects",
    ()=>parseProjects,
    "parseServices",
    ()=>parseServices
]);
function parseProjects(raw, defaultProjects) {
    if (!raw || typeof raw !== "string" || !raw.trim()) {
        return defaultProjects;
    }
    const lines = raw.split("\n").map((l)=>l.trim()).filter(Boolean);
    if (lines.length === 0) return defaultProjects;
    return lines.map((line, index)=>{
        const parts = line.split("|").map((p)=>p.trim());
        return {
            id: parts[0] || `0${index + 1}`,
            title: parts[1] || `Project 0${index + 1}`,
            category: parts[2] || "Architecture",
            location: parts[3] || "Global",
            year: parts[4] || "2026",
            area: parts[5] || "4,000 sq ft",
            imageUrl: parts[6] || defaultProjects[index % defaultProjects.length]?.imageUrl || "",
            description: parts[7] || "An architectural exploration of space, light, and material."
        };
    });
}
function parseMaterials(raw, defaultMaterials) {
    if (!raw || typeof raw !== "string" || !raw.trim()) {
        return defaultMaterials;
    }
    const lines = raw.split("\n").map((l)=>l.trim()).filter(Boolean);
    if (lines.length === 0) return defaultMaterials;
    return lines.map((line, index)=>{
        const parts = line.split("|").map((p)=>p.trim());
        return {
            name: parts[0] || `Material 0${index + 1}`,
            origin: parts[1] || "Natural Origin",
            finish: parts[2] || "Natural Finish",
            description: parts[3] || "Selected for tactile warmth and architectural clarity.",
            colorHex: parts[4] || defaultMaterials[index % defaultMaterials.length]?.colorHex || "#dcd7d0"
        };
    });
}
function parseServices(raw, defaultServices) {
    if (!raw || typeof raw !== "string" || !raw.trim()) {
        return defaultServices;
    }
    const lines = raw.split("\n").map((l)=>l.trim()).filter(Boolean);
    if (lines.length === 0) return defaultServices;
    return lines.map((line, index)=>{
        const parts = line.split("|").map((p)=>p.trim());
        return {
            number: parts[0] || `0${index + 1}`,
            title: parts[1] || "Design Service",
            description: parts[2] || "Full spatial design and execution."
        };
    });
}
function parseJournal(raw, defaultJournal) {
    if (!raw || typeof raw !== "string" || !raw.trim()) {
        return defaultJournal;
    }
    const lines = raw.split("\n").map((l)=>l.trim()).filter(Boolean);
    if (lines.length === 0) return defaultJournal;
    return lines.map((line, index)=>{
        const parts = line.split("|").map((p)=>p.trim());
        return {
            date: parts[0] || "AUG 2026",
            category: parts[1] || "ESSAY",
            title: parts[2] || "Architectural Perspective",
            readTime: parts[3] || "5 MIN READ",
            imageUrl: parts[4] || defaultJournal[index % defaultJournal.length]?.imageUrl || ""
        };
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1-clgec._.js.map