"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5136],{312:(A,e,n)=>{n.r(e),n.d(e,{Highlight:()=>l,assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>E,metadata:()=>r,toc:()=>c});var i=n(4848),s=n(8453);const E={title:"Spatial Indexing and AMR Mesh"},t="CAE Fundamentals - Spatial Indexing and AMR Mesh",r={id:"dev-guide/spatial-indexing-and-amr-mesh",title:"Spatial Indexing and AMR Mesh",description:"Background",source:"@site/docs/dev-guide/99-spatial-indexing-and-amr-mesh.mdx",sourceDirName:"dev-guide",slug:"/dev-guide/spatial-indexing-and-amr-mesh",permalink:"/docs/dev-guide/spatial-indexing-and-amr-mesh",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:99,frontMatter:{title:"Spatial Indexing and AMR Mesh"},sidebar:"tutorialSidebar",previous:{title:"Algorithm Library Design",permalink:"/docs/dev-guide/algorithm-libary-design"}},d={},c=[{value:"Background",id:"background",level:2},{value:"Spatial Indexing",id:"spatial-indexing",level:2},{value:"What is Spatial Indexing?",id:"what-is-spatial-indexing",level:3},{value:"How to Define a Good Spatial Indexing Method?",id:"how-to-define-a-good-spatial-indexing-method",level:3},{value:"R-tree",id:"r-tree",level:4},{value:"KD-Tree",id:"kd-tree",level:4},{value:"Oct-tree",id:"oct-tree",level:4},{value:"Space Filling Curve",id:"space-filling-curve",level:4},{value:"AMR (Adaptive Mesh Refinement)",id:"amr-adaptive-mesh-refinement",level:2},{value:"Why CAE community need AMR Mesh?",id:"why-cae-community-need-amr-mesh",level:3},{value:"What AMR architecture should offer?",id:"what-amr-architecture-should-offer",level:3},{value:"Types of AMR Mesh",id:"types-of-amr-mesh",level:3},{value:"Conforming Unstructured AMR",id:"conforming-unstructured-amr",level:4},{value:"Distorted Structured Mesh (Conforming)",id:"distorted-structured-mesh-conforming",level:4},{value:"Octree-based AMR (Non-Conforming)",id:"octree-based-amr-non-conforming",level:4},{value:"Block-structured AMR (Non-Conforming)",id:"block-structured-amr-non-conforming",level:4},{value:"Some Good Open-Source AMR Projects",id:"some-good-open-source-amr-projects",level:3},{value:"AMReX",id:"amrex",level:4},{value:"p4est",id:"p4est",level:4},{value:"PARAMESH",id:"paramesh",level:4},{value:"SAMRAI",id:"samrai",level:4}],l=({children:A,color:e})=>{const n={span:"span",...(0,s.R)()};return(0,i.jsx)(n.span,{style:{backgroundColor:e,borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:A})};function a(A){const e={admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...A.components},{Details:E}=e;return E||function(A,e){throw new Error("Expected "+(e?"component":"object")+" `"+A+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"cae-fundamentals---spatial-indexing-and-amr-mesh",children:"CAE Fundamentals - Spatial Indexing and AMR Mesh"}),"\n",(0,i.jsx)(e.h2,{id:"background",children:"Background"}),"\n",(0,i.jsx)(e.p,{children:"Efficient spatial indexing is important for CAE."}),"\n",(0,i.jsx)(e.admonition,{type:"info",children:(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"CAE computation needs spatial discretization on PDE."}),"\n",(0,i.jsx)(e.li,{children:"Some spatial query operations (neighbour search, distance calculation, etc.) are needed."}),"\n",(0,i.jsx)(e.li,{children:"Efficient spatial indexing and queries are critical for domain decomposition and parallelism."}),"\n"]})}),"\n",(0,i.jsx)(e.p,{children:"AMR is extremely suitable for complicated problems"}),"\n",(0,i.jsx)(e.admonition,{type:"info",children:(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Most complicated problems are of multi-physics and multi-scale (both time and space)."}),"\n",(0,i.jsx)(e.li,{children:"Adaptivity is often need to reduce footprint and computation cost."}),"\n"]})}),"\n",(0,i.jsx)(e.h2,{id:"spatial-indexing",children:"Spatial Indexing"}),"\n",(0,i.jsx)(e.h3,{id:"what-is-spatial-indexing",children:"What is Spatial Indexing?"}),"\n",(0,i.jsxs)(e.p,{children:["Spatial indices are used by ",(0,i.jsx)(e.strong,{children:"spatial databases"})," to optimize ",(0,i.jsx)(e.strong,{children:"spatial queries"}),". ",(0,i.jsx)(e.strong,{children:"Spatial databases"})," are databases which store information related to objects in space."]}),"\n",(0,i.jsx)(e.p,{children:"Suitable Spatial Indexing Methods should handle spatial queries efficiently. The queries should allow for the use of geometry data types (such as points, lines and polygons) and consider the spatial relationship between geometries."}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"spatial-database",src:n(1881).A+"",width:"949",height:"513"})}),"\n",(0,i.jsx)(e.h3,{id:"how-to-define-a-good-spatial-indexing-method",children:"How to Define a Good Spatial Indexing Method?"}),"\n",(0,i.jsx)(e.p,{children:"Suitable Spatial Indexing Methods should handle spatial queries efficiently."}),"\n",(0,i.jsx)(e.p,{children:"The queries should allow for the use of geometry data types (such as points, lines and polygons) and consider the spatial relationship between geometries."}),"\n",(0,i.jsx)(e.p,{children:"Typical queries includes:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Neighbouring Search"}),"\n",(0,i.jsx)(e.li,{children:"Distance Calculation"}),"\n",(0,i.jsx)(e.li,{children:"Overlaps Detection"}),"\n",(0,i.jsx)(e.li,{children:"Area and Length Calculation"}),"\n"]}),"\n",(0,i.jsx)(e.table,{children:(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{style:{textAlign:"center"},children:(0,i.jsx)(e.img,{src:n(53).A+"",width:"256",height:"256"})}),(0,i.jsx)(e.th,{style:{textAlign:"center"},children:(0,i.jsx)(e.img,{src:n(6487).A+"",width:"336",height:"334"})})]})})}),"\n",(0,i.jsx)(e.h4,{id:"r-tree",children:"R-tree"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"First proposed by Guttman in 1984."}),"\n",(0,i.jsx)(e.li,{children:"Data Layout: Minimum Bounding Box based Tree"}),"\n",(0,i.jsx)(e.li,{children:"One box can contains multi-objects."}),"\n",(0,i.jsx)(e.li,{children:"Improvements: R*-tree, ..."}),"\n"]}),"\n",(0,i.jsx)(e.table,{children:(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:(0,i.jsx)(e.img,{src:n(3716).A+"",width:"400",height:"400"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.img,{src:n(6623).A+"",width:"400",height:"343"})})]})})}),"\n",(0,i.jsx)(e.h4,{id:"kd-tree",children:"KD-Tree"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Very suitable for multi-dimensional point clouds."}),"\n",(0,i.jsx)(e.li,{children:"Using binary-cutting to construct the tree."}),"\n"]}),"\n",(0,i.jsx)(e.table,{children:(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:(0,i.jsx)(e.img,{src:n(9636).A+"",width:"220",height:"209"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.img,{src:n(9359).A+"",width:"370",height:"368"})})]})})}),"\n",(0,i.jsx)(e.h4,{id:"oct-tree",children:"Oct-tree"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Level of details in 3D rendering."}),"\n",(0,i.jsx)(e.li,{children:"Local refinement/adaptivity easily and efficiently."}),"\n",(0,i.jsx)(e.li,{children:"Can be implemented without geometric overlap."}),"\n"]}),"\n",(0,i.jsx)(e.table,{children:(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:(0,i.jsx)(e.img,{src:n(8187).A+"",width:"300",height:"150"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.img,{src:n(6710).A+"",width:"400",height:"230"})})]})})}),"\n",(0,i.jsx)(e.h4,{id:"space-filling-curve",children:"Space Filling Curve"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Mapping from multi-dimension to one dimension;"}),"\n",(0,i.jsx)(e.li,{children:"Preserve data locality;"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:n(2037).A+"",width:"1200",height:"858"})}),"\n",(0,i.jsx)(e.h2,{id:"amr-adaptive-mesh-refinement",children:"AMR (Adaptive Mesh Refinement)"}),"\n",(0,i.jsx)(e.h3,{id:"why-cae-community-need-amr-mesh",children:"Why CAE community need AMR Mesh?"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Local refinement for PDE is always needed for complicated problems."})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Multi-scale in many aspects (time, space, gradients, etc.). (",(0,i.jsx)(e.strong,{children:"Complicated"}),")"]}),"\n"]}),"\n",(0,i.jsx)(e.admonition,{title:"Examples",type:"info",children:(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Shocks and interfaces."}),"\n",(0,i.jsx)(e.li,{children:"Self-gravitating flows in astrophysics."}),"\n",(0,i.jsx)(e.li,{children:"Complex engineering geometries."}),"\n",(0,i.jsx)(e.li,{children:"Combustion."}),"\n",(0,i.jsx)(e.li,{children:"Magnetohydrodynamics: space weather, magnetic fusion."}),"\n"]})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["We only have limited resources. (",(0,i.jsx)(e.strong,{children:"Affordable"}),")"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"One adjusts the computational effort locally to maintain a uniform level of accuracy throughout the problem domain."})}),"\n",(0,i.jsx)(e.h3,{id:"what-amr-architecture-should-offer",children:"What AMR architecture should offer?"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Local refinement as desired."}),"\n",(0,i.jsx)(e.li,{children:"Local coarsening as desired."}),"\n",(0,i.jsx)(e.li,{children:"Dynamic adaptivity of mesh architecture."}),"\n",(0,i.jsx)(e.li,{children:"Parallel partition between processes."}),"\n"]}),"\n",(0,i.jsxs)(E,{children:[(0,i.jsx)("summary",{children:"Notes for Parallelism"}),(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Workload balance."}),"\n",(0,i.jsx)(e.li,{children:"Minimize the communication."}),"\n",(0,i.jsx)(e.li,{children:"Minimize the difference from current partion."}),"\n"]})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Fast local neighbour search (both local and remote)."}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:n(823).A+"",width:"765",height:"144"})}),"\n",(0,i.jsx)(e.h3,{id:"types-of-amr-mesh",children:"Types of AMR Mesh"}),"\n","\n",(0,i.jsx)(e.h4,{id:"conforming-unstructured-amr",children:"Conforming Unstructured AMR"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:n(959).A+"",width:"975",height:"753"})}),"\n",(0,i.jsx)(e.h4,{id:"distorted-structured-mesh-conforming",children:"Distorted Structured Mesh (Conforming)"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Mesh quality is still a problem."}),"\n",(0,i.jsx)(e.li,{children:"Unavoidable memory waste in most cases."}),"\n",(0,i.jsx)(e.li,{children:"Still hard to handle complex geometries."}),"\n"]}),"\n",(0,i.jsx)(e.table,{children:(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:(0,i.jsx)(e.img,{src:n(9214).A+"",width:"787",height:"588"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.img,{src:n(6889).A+"",width:"320",height:"320"})})]})})}),"\n",(0,i.jsx)(e.h4,{id:"octree-based-amr-non-conforming",children:"Octree-based AMR (Non-Conforming)"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Non-overlap Mesh (Only leaves are stored in memory)"}),"\n",(0,i.jsx)(e.li,{children:"Fast elementary operations"}),"\n"]}),"\n",(0,i.jsxs)(E,{children:[(0,i.jsx)("summary",{children:"NOTES for Elementary Operations"}),(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Refine or coarsening locally."}),"\n",(0,i.jsx)(e.li,{children:"Bit-operations from index to geometric coordinates."}),"\n",(0,i.jsxs)(e.li,{children:["Fast neighbour (in-processor or off-processor) ",(0,i.jsxs)(l,{color:"#1877F2",children:[" ",(0,i.jsx)(e.strong,{children:"O(log *)"})]})]}),"\n"]})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:n(2219).A+"",width:"1266",height:"443"})}),"\n",(0,i.jsx)(e.h4,{id:"block-structured-amr-non-conforming",children:"Block-structured AMR (Non-Conforming)"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"The domain is composed of a union of rectangular regions."}),"\n",(0,i.jsx)(e.li,{children:"Overlap between levels and only fine levels should be cared."}),"\n",(0,i.jsx)(e.li,{children:"Connectivity is simple and vectorization is easy."}),"\n",(0,i.jsx)(e.li,{children:"Intuitive parallelism and good use of memory cache."}),"\n",(0,i.jsx)(e.li,{children:"Local copy is unavoidable and inefficient to some extent."}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:n(2594).A+"",width:"939",height:"295"})}),"\n",(0,i.jsx)(e.h3,{id:"some-good-open-source-amr-projects",children:"Some Good Open-Source AMR Projects"}),"\n",(0,i.jsx)(e.h4,{id:"amrex",children:"AMReX"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Block-Structured AMR; (formerly known as BoxLib)"}),"\n",(0,i.jsx)(e.li,{children:"Base for many different application codes;"}),"\n",(0,i.jsx)(e.li,{children:"MPI/OPENMP, GPU (both CUDA and HIP), DPC++ parallelization support;"}),"\n",(0,i.jsx)(e.li,{children:"Original base framework in Supreium;"}),"\n"]}),"\n",(0,i.jsx)(e.table,{children:(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:(0,i.jsx)(e.img,{alt:"berkeley-lab",src:n(8884).A+"",width:"469",height:"295"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.img,{alt:"amr-case",src:n(7673).A+"",width:"1335",height:"689"})})]})})}),"\n",(0,i.jsx)(e.h4,{id:"p4est",children:"p4est"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Forests of Octree AMR;"}),"\n",(0,i.jsx)(e.li,{children:"Geometric flexibility;"}),"\n",(0,i.jsx)(e.li,{children:"No need to construct cubic meshes; (Only structured mesh)"}),"\n",(0,i.jsx)(e.li,{children:"Only mesh interface; (deal.ii, a FEM library using p4est)"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:n(9306).A+"",width:"1007",height:"473"})}),"\n",(0,i.jsx)(e.h4,{id:"paramesh",children:"PARAMESH"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Block-structured AMR with tree-based Block;"}),"\n",(0,i.jsx)(e.li,{children:"All written in Fortran;"}),"\n",(0,i.jsx)(e.li,{children:"A subset of AMReX to some extent in capabilities;"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:n(9716).A+"",width:"632",height:"617"})}),"\n",(0,i.jsx)(e.h4,{id:"samrai",children:"SAMRAI"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Block-structured AMR;"}),"\n",(0,i.jsx)(e.li,{children:"Mesh architecture is only a local view;"}),"\n",(0,i.jsx)(e.li,{children:"Some key operations (clustering, partition, etc) are distributed;"}),"\n"]}),"\n",(0,i.jsx)(e.table,{children:(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:(0,i.jsx)(e.img,{src:n(815).A+"",width:"603",height:"228"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.img,{src:n(9188).A+"",width:"762",height:"306"})})]})})})]})}function h(A={}){const{wrapper:e}={...(0,s.R)(),...A.components};return e?(0,i.jsx)(e,{...A,children:(0,i.jsx)(a,{...A})}):a(A)}},6710:(A,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/400px-Octree2-90ad4fcf13818ffecd57d25fbf607d95.png"},823:(A,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/AMRVortexStreetSmall-5924735a8eb5ff472e91a29b82ce2437.png"},7673:(A,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/AMReX-case-381abb3d0baba5feee52d94f55fe31c1.png"},2594:(A,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/Block-structuredAMR-db08766e2946584ef955a0bef618d5aa.png"},2037:(A,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/ComparingSFCurves-MortonHilbert1024-71ce51fa9d852f82c7487680b4b8ae88.png"},959:(A,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/ConformingAMR-f48747e1028347cc51d4c520f2190bc9.png"},2219:(A,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/OctreeAMR-8266b817765a3101a5e6fd96b9568e78.png"},8187:(A,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/Quadtree_compression_of_an_image-7-29ddf8eef85936e43e110a9b9491f446.jpg"},815:(A,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/SAMRAI01-36497eb59dd9d0725faa70df4cfca49c.png"},9188:(A,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/SAMRAI02-85e76ea5d0b56e774ef118c9847ef50d.png"},8884:(A,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/berkeley-lab-cacac51e1e51aa32e6499a47eb2db5a0.png"},9214:(A,e,n)=>{n.d(e,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAxMAAAJMCAYAAACB9fvGAAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAZ25vbWUtc2NyZWVuc2hvdO8Dvz4AABdVSURBVHic7d17jKV1fcfx73N22QvXvXBRq3K/CGI0tokxWiyXtl4oGtumaRpDa5tKTLbWpthqGzEprBVRbGvQwiKIGmurjbFqq6glmlVAVFYQEJGLCAuL3Nkdlp3n6R8HZhehy+xnDvsczrxeyeT8np0nT77znPPs2ffMObNN13VdAQAA7KBB3wMAAADPTAt/+Q+6m2+pWndVH7MAAADj5uCDqjnyiCf91BNj4uJvVLfq1Kd9JgAAYPw1q06pZvVpT/o5L3MCAAAiYgKqqn71JVULn/CDOibZ0qVVL3ph31OM3iEHVa1cMZpjjeq62G3XqhceOffjjJvDDqlavqzvKRgHBzy/ar99+54CeuFfT1BV9d3vVzVN31OwM23aNJnvD/vJT0d3rFFdFw9trLrqR3M/zrj58U/6noBxcdMtfU8AvfGTCQAAIDK7n0wMBjW4c4Tf7YIx0r7mjVWXXVG1ckUNrr2i73HYCbq2rW7fg4YbJ766Bh87p9+BRqR739nVve/sqqpqLvlyNUe9ID5W+9rfrbr0u1Urltfguu/lM01NVffcR38DyBtPqsFHPxQfa5y0/3Bm1dkfrqqqZu3F1Rx2SM8T0Zfu/IuqO/Xvq6qq+ewnqjnmFT1PBHPTvvz4HfrJ6+xiYumSapYuTWeC8TZ49Ad0TeNxPl+0bc38b50LFkzM/d5t8/6GZvHiuX1do7oummbmXDcTdK6bXRZu/bqWeI6cz7pFi2bWzaJFHgs88y1dskO7e5kTAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQWTirvaYervaP/vRpHgV68uOfDG/vf8DjfJ7oum7rxmVXTMz93l1z3cy6fed7qtlrz/xgj10XDzw4p/PTTU9vXa+9dHLO9dXXzKzbU/+umj326HEa+tT99KaZdfveD1Rz/kX9DQOjcNMtO7R70z3uWbWqXXNhdatOHW4ccVjVtT8e2Www1pqm6vGXA+C6AJif9tm7asNdVVXVrDqlBqtPe9Ldtv8yp5tuHvVYAADAuLvn3lnttv2XOU09PLzddWkN1t8w15FgLLUnnFR16eVVK1fU4Kc/7HscdoKubatb9tzhxkmvrcFF5/Y70Ih0q8+qbvVZVVXVrL24mhceGR+r/c3XV33nsqoVy2tw41X5TFNT1e170HDj995QgzUfjo81Ttr3vLfqrH+qqqrmu5dUc9ihPU9EX7rzLqzu7X9bVVXN5z9dzW/8es8Twdy0rzihat3VVVu2zGr/2b1nommqWbBgLnPB+Goeu/U4nzeaprpt1pNyv3dNM7NuBoO5fV2jui4WLJg5180EnetmsPUx1AwWTMzXxY7rBltf5DHn6w7GwTbPJbPhtzkBAAARMQEAAETEBAAAEBETAABAREwAAAARMQEAAETEBAAAEBETAABAREwAAAARMQEAAETEBAAAEBETAABAREwAAAARMQEAAETEBAAAEBETAABAREwAAAARMQEAAETEBAAAEBETAABAREwAAAARMQEAAETEBAAAEBETAABAREwAAAARMQEAAETEBAAAEBETAABAREwAAAARMQEAAETEBAAAEBETAABAREwAAAARMQEAAETEBAAAEBETAABAREwAAAARMQEAAETEBAAAEBETAABAREwAAAARMQEAAETEBAAAEBETAABAREwAAAARMQEAAETEBAAAEBETAABAREwAAAARMQEAAETEBAAAEBETAABAREwAAAARMQEAAETEBAAAEBETAABAREwAAAARMQEAAETEBAAAEBETAABAREwAAAARMQEAAETEBAAAEBETAABAREwAAAARMQEAAETEBAAAEBETAABAREwAAAARMQEAAETEBAAAEBETAABAREwAAAARMQEAAETEBAAAEBETAABAREwAAAARMQEAAETEBAAAEBETAABAREwAAAARMQEAAETEBAAAEBETAABAREwAAAARMQEAAETEBAAAEBETAABAREwAAAARMQEAAETEBAAAEBETAABAREwAAAARMQEAAETEBAAAEBETAABAREwAAAARMQEAAETEBAAAEBETAABAREwAAAARMQEAAETEBAAAEBETAABAREwAAAARMQEAAETEBAAAEBETAABAREwAAAARMQEAAETEBAAAEBETAABAREwAAAARMQEAAETEBAAAEBETAABAREwAAAARMQEAAETEBAAAEBETAABAREwAAAARMQEAAETEBAAAEBETAABAREwAAAARMQEAAETEBAAAEBETAABAREwAAAARMQEAAETEBAAAEBETAABAREwAAAARMQEAAETEBAAAEBETAABAREwAAACRhdv97GBQ1XVVm6Zq+tAX76SRYCe7667h7d33eJzPF123df3fF0/O/f7AAzPL9sTfr9pll/xYj10X99w7t/OzzbnuvvClyTnX998/s2x/6w1Vu2z/6ZQJ9tBDM8v25LdULV7c4zAwAnfdVdU0w4+2fcrdt/+33wtfULXu6uGTwW23j2pEGE9t63E+H01NTeb9vuGu0RxnlNfFpqmqTZN4rjf0PQHj4hd39z0BjM5++1atv+Mpd9t+TKy7eng7GFS9+EWjGAvGz3XXD7+ztHBh1dFH9T0NO0PXVX3/yuF62V5VBx3Y7zyjcvv64UdV1RGHV+26ND/WqK6Ltq36wbrhevmyqgMPyI81Tn5+W9Uddw7XRx5RtWRJv/PQnw13Vf3s1uH6kIOr9tyj33lgrq65rmrTplmFRNVTxcRjli6pBd/8n7mMBWNr+rjXVX3n8qple3mczxNd21a7x7OHG696ZS345Jp+BxqR9vQzqzvj/VVVNbjgnGrmEAHTx59Y9e3Lqvbac07XRTc1Ve3K/auqqjnh2Bp87Jz4WOOkPe2M6s78UFVVDT5xXjWHH9rzRPSlPfeC6t72jqqqGnxwdTXHHtPzRDA30y8/rurKq2a9vzdgAwAAETEBAABExAQAABAREwAAQERMAAAAETEBAABExAQAABAREwAAQERMAAAAETEBAABExAQAABAREwAAQERMAAAAETEBAABExAQAABAREwAAQERMAAAAETEBAABExAQAABAREwAAQERMAAAAETEBAABExAQAABAREwAAQERMAAAAETEBAABExAQAABAREwAAQERMAAAAETEBAABExAQAABAREwAAQERMAAAAETEBAABExAQAABAREwAAQERMAAAAETEBAABExAQAABAREwAAQERMAAAAETEBAABExAQAABAREwAAQERMAAAAETEBAABExAQAABAREwAAQERMAAAAETEBAABExAQAABAREwAAQERMAAAAETEBAABExAQAABAREwAAQERMAAAAETEBAABExAQAABAREwAAQERMAAAAETEBAABExAQAABAREwAAQERMAAAAETEBAABExAQAABAREwAAQERMAAAAETEBAABExAQAABAREwAAQERMAAAAETEBAABExAQAABAREwAAQERMAAAAETEBAABExAQAABAREwAAQERMAAAAETEBAABExAQAABAREwAAQERMAAAAETEBAABExAQAABAREwAAQERMAAAAETEBAABExAQAABAREwAAQERMAAAAETEBAABExAQAABAREwAAQERMAAAAETEBAABExAQAABAREwAAQERMAAAAETEBAABExAQAABAREwAAQERMAAAAETEBAABExAQAABAREwAAQERMAAAAETEBAABExAQAABAREwAAQERMAAAAETEBAABExAQAABAREwAAQERMAAAAETEBAABExAQAABAREwAAQERMAAAAETEBAABExAQAABAREwAAQERMAAAAETEBAABExAQAABAREwAAQERMAAAAETEBAABExAQAABAREwAAQERMAAAAETEBAABExAQAABBZOKu9Nk3V9Kte8zSPAj255trh7b33eZzPF123dX3Jtybnfv/5bTPL9s1vrdp11/xY11w3vL3v/rmdn7adWXYX/+/knOtbfz6zbN/051VLl/Q4DL26c8PMsv2rd1XttWePw8AIXH/DDu2+/Zg4+qiqH149fDK4/Iq5jAXjb8sWj/P56J57J/N+v/qa0RxnlNfF3XcPPybNVVf3PQHj4sfX9z0BjM6z9qtaf8dT7rb9mPjRtVVNM/zYd59RjQbj5Rd3Vz3ySNVgULXP3n1Pw87QdVV33DlcL15ctXxZv/OMyoMPVj340HC9ckXVLrvkxxrVdbHtuV6ypGrZXvmxxskDD1Y99Oi53ntl1cLZ/aCfCbRxY9X9DwzXy5cN/06BZ7Jf3D38RtI2P3Xbnu3/7Tc9PbzddWktuGHdXEeDsTR93OuqvnN51YrlHufzRNe21e7x7OHGq0+oBZ9c0+9AI9KefmZ1Z7y/qqoGX/yPao4+Kj7W9PEnVn37sqrly+Z0XXRTU9Wu3L+qqprfeU0NPnZOfKxx0p52RnVnfqiqqgZf+Xw1hx/a80T0pT33gure9o6qqhp8/F+rOfaYnieCuZl++XFVV171+JcEb4c3YAMAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAABExAQAARMQEAAAQERMAAEBETAAAAJGFs9pry3R1X/3G0zwK9OTe+4a3mzd7nM8TXdtu3bhjw+Tc7z+9aWbZfefyqvV35seauS4emdP56TZv3rpef8fEnOvuxpu3rtdeWnXLrT1OQ6+uuW5m2X3vyqrpdjs7wzPA/Q/s0O5N13Xdtn/QrrmwulWnDjf22btqw10jmw3GWtNUPf5yAFwXAPPTbrtWPbSxqqqaVafUYPVpT7rb9l/mtGiXUY8FAACMuwULZrXb9l/m9PPbh7eLFlVz1ulzHQnGUvfBDw9fHrL7btWc8e6+x2En6Nq26i/eMdx48dHVvPlN/Q40It2XvlL15a8ON/7mL6v5lefkx3rsuthtt2pW59dF98gjVW9/53DjpS+p5uQ/jI81TrovfLnqK18fbrzrr6t51r79DkRvum+urfrMfw433vpn1RxxWL8DwRx1//jBqltvm/XLnWb3noldFtbgTybjyRZ+2fQnPzP8R9OSJR7n80TXttU+FhMH7D8x93t7+x3VPRoTg9efWM3RR8XHmv7Uvz96XSye0/nppqaqfTQmmoMPnJxzfcut1T0aE4M3nlTN4Yf2PBF9aafb6h6NicFvn1DNscf0PBHMzfR5Fw5jYpb8NicAACAiJgAAgIiYAAAAImICAACIiAkAACAiJgAAgIiYAAAAImICAACIiAkAACAiJgAAgIiYAAAAImICAACIiAkAACAiJgAAgIiYAAAAImICAACIiAkAACAiJgAAgIiYAAAAImICAACIiAkAACAiJgAAgMjCWe21eXO17z79aR4FenLLrcPbhzZ6nM8TXddt3fjRtRNzv3drL51Zt+ecV80+e+cHu+Vnw9uNc7suui1btq7XXTU55/qba2fW7T9/pJqVK3qchj51P1g3s24//qlqLvlWj9PACNy+fod2b7rHPatWtWsurG7VqcONA/evuvHmkc0GY61pqh5/OQCuC4D5afnyqnvuqaqqZtUpNVh92pPutv2XOd19z6jHAgAAxt2mjbPabfsvc7rv/uHt0iU1WPu1uY4EY6k9+S1VV/6wavmyGnztv/oeh52ga9vqXvrK4cbxr6rBmRPy0puPrKnuo+dXVVXzbxdWc9gh8bHaPz6l6gfrqpbtVYOvfzGf6eGHq3vZscONV59QgzNOi481Ttp/+WjVmo9XVVXzuU9Vc+D+PU9EX7rPfK661WdVVVVzztnVvOzXep4I5qb9g5Orrru+aurhWe0/u/dMDAZzelKCsbZ0yfB2wQKP8/mibWvmhTu77z4x93u3zev2m/2fN7eva1TXxdTUzLlu9thjYs51s2L51q/rgOdPzNfFjuv223dm3Tz3OR4LPPMtWbxDu/ttTgAAQERMAAAAETEBAABExAQAABAREwAAQERMAAAAETEBAABEZvf/TDy0sdr3fuBpHgV6cuttw9uNHufzRdd1Wzeuu35i7vfuW9+eWbfnX1TNNr//fofNXBeb5nR+ui1btq5/dO3knOu1l86s23MvqGbvlT1OQ5+6735/Zt1++rPVXHZFj9PACFx51Q7t3nSPe1atatdcWN2qU0c6EzwjNE3V4y8HwHUBMO81q06pwerTnvRzXuYEAABExARUVR184PA7sMwfixZV7f+8vqcYvWc/q2r33UdzrFFdF4sXVz1/Es/1s6t2363vKRgH++xTtWyvvqeAXszuPRMw6W64se8J2Nk2b666+Wd9TzF6t68f3bFGdV08/HDVLZN4rm/vewLGxYYNfU8AvXliTOy5Z9UB+/cwCgAAMHZWrvh/P/WEN2ADAADMhvdMAAAAkf8Db7JyOQneFJgAAAAASUVORK5CYII="},6889:(A,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/distorted_mesh_3d-9611fb9c958bcc167bc9f71bacd29927.jpg"},53:(A,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/fem01-14bac18385c20dd89fa3f0a95e54be1f.jpeg"},9359:(A,e,n)=>{n.d(e,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXIAAAFwCAYAAACl7PACAAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH2wgbEgkSPpxgDAAAFWZJREFUeJzt3H9s1fW9x/HXabtKOZWWdpHtYKjihpYKl0yveIDOVRQcMLepl8JKKA5dp4kOWZUwKsq45YfFIsbMCYPIdrkRHUtMppdZfjRFLSTKFKhA3VoBW34JPaUICm2/9w+9J1bLLlt7zuf7bp+PpIHvocn3dWj75PTbbwh4nucJAGBWgusBAICuIeQAYBwhBwDjCDkAGEfIAcA4Qg4AxhFyADCOkAOAcYQcAIwj5ABgHCEHAOMIOQAYR8gBwDhCDgDGEXIAMI6QA4BxhBwAjCPkAGAcIQcA4wg5ABhHyAHAOEIOAMYRcgAwjpADgHGEHACMI+QAYBwhBwDjCDkAGEfIAcA4Qg4AxhFyADDOScgDgUD0rTOe52nOnDnq37+/MjIyNHfuXHmeF+eVAGCDk5B7nvcPw7xy5UpVVVWppqZGe/bsUWVlpVavXh3HhQBghy8vraxdu1alpaUKhUIKhUIqLS3V888/73oWAPhSwHN4zSIQCHT6yjwtLU2HDh1Sv379JEnNzc264oor1NTUFO+JAOB7vgx5YmKizp8/r4SEz75haG9vV3JyslpbWyVJBw8eVHFxcVy3utDS0qJgMBj9e+iJktrbFTh+XOcHDHA9Jaaam5uVlpYW13MO+PhjHQ0G43pOF8/ThV//+te65pprXM+ISnI9oDOpqak6ffp09BV5S0uLLr300uifNzc3a8eOHVq2bJmriXGxYsUK/fCHP1RmZqbrKTGTdvCgriwp0Tu//73rKTG1aNEi3XPPPXE9539MnqyXXnwxrud08Tzjbf78+froo49cz+jIc+hCpw+Hw97mzZujx5s3b/ZGjx4dPd61a5c3bNiwmO9zbcqUKd7Bgwddz4itXbu8+ksvdb0i5saPHx//kzr48nbyPONszJgx3rZt21zP6MCX37NPnz5dJSUlamxsVGNjo0pKSjRjxgzXswDAl5xcWvni/eP/93vvC9fKi4qKVFdXp5ycnOjxzJkz4zvSBwYOHKjk5GTXM2IuKcmXV/i61eWXX+56Qlz0lufpN05/2Pmv2r17twoKCrRr1y7XU9BVu3dLBQUSH8vuFwhI9r68fS83N1eLFy/WmDFjXE+J8uWlFQDAxSPkAGAcIQcA4wg5ABhHyAHAOEIOAMYRcgAwjpADgHGEHACMI+QAYBwhBwDjCDkAGEfIAcA4Qg4AxhFyADCOkAOAcYQcAIwj5ABgHCEHAOMIOQAYR8gBwDhCDgDGEXIAMI6QA4BxhBwAjCPkAGAcIQcA4wg5ABhHyAHAOEIOAMYRcgAwjpADgHGEHACMI+QAYBwhBwDjCDkAGEfIAcA4Qg4AxhFyADCOkAOAcYQcAIwj5ABgHCEHAOMIOQAYR8gBwDhCDgDGEXIAMI6QA4BxhBwAjPNlyGtrazVu3DgFg0EFg0GNGzdOtbW1rmcBgC/5MuT5+fkaNWqUGhoa1NDQoJEjR2rKlCmuZwGALyW5HtCZffv2afv27brkkkskSfPmzdOTTz7peBUA+JMvX5FPmjRJS5cuVXNzsyKRiJYsWaKJEye6ngUAvuTLV+RPPfWURo8erccee0ySlJWVpTfffLPD+xw9elQTJkyIHt933336wQ9+ENedAHq+rVu3qqysLHpcX1/vcE3nfBnyGTNmaPr06Zo9e7Yk6cknn1RhYaEqKiqi7zNgwAC9+uqrriYC6CXy8vKUl5cXPc7NzXW4pnO+DPm2bdv05z//ucM18vT0dMerAMCffHmNfOjQoVq8eLEikYgikYgWLVqka6+91vUsAPAlX4Z83bp1qqqqUigUUigU0htvvKF169a5ngUAvuTLSyvZ2dnasmWL6xkAYIIvX5EDAC4eIQcA4wg5ABhHyAHAOEIOAMYRcgAwjpADgHGEHACMI+QAYBwhBwDjCDkAGEfIAcA4Qg4AxhFyADCOkAOAcYQcAIwj5ABgHCEHAOMIOQAYR8gBwDhCDgDGEXI48+mnn+rRZ57RtEOH9Morr7ieA5hFyOFEW1ubbrvtNpWuWqV1kYimTZum5cuXu54FmETI4cQf/vAHVVVVyfM8SVIkEtHq1asdrwJsIuRw4vjx42pvb+/w2Llz59TW1uZoEWAXIYcThYWF+ta3vtXhsZEjRyoxMdHRIsAuQg4nLrvsMq1fv15jR47U9SkpKioq4tIK8C9Kcj0Avdd3vvMdbVq1SiookH77W9dzALN4RQ4AxhFyADCOkAOAcYQcAIwj5ABgHCEHAOMIOQAYR8gBwDhCDgDGEXIAMI6QA4BxhBwAjCPkAGAcIQcA4wg5ABhHyAHAOEIOAMYRcgAwjpADgHGEHACMI+QAYJxvQ/7uu+9q/PjxSk1N1cCBA7VmzRrXkwDAl3wZ8traWt1+++0qKirSsWPHVF1drddff931LAA+c+rUKZ06dcr1DOd8GfLHH39cjz32mO644w717dtXgwYN4hU5gKjW1lYVFBQoJydHw4YNU2Fhodra2lzPcsaXId+yZYuOHDmiUCikYDCoyZMnq6mpyfUsAD4xb948vfDCC/rwww918OBBrVu3TqWlpa5nOZPkekBnPvroI9XV1WnPnj2SpNmzZ+u+++7TCy+8EH2fxsZGhcPh6PGsWbOUn58f962AX12lv0tXxe98wz59S/dGyvTggPUxP9fhwzvV3t4ePW5ra9PSpdu1dm33n+vMmTMdXkgmJNzX/SfpIl+GPBgMqqysTP3795cklZeXKysrq8P7hEIhVVdXu5gHmFChW6WKv8ftfH3e+kQZZY2qiH3H9cgjl2vDho6P/ehHWVq4MBZn6/v522emTl0v6eFYnOhf5suQDx8+/CuPBQIBB0sAuwarThocxxM2SuojDY7DOVevfkpHjryvHTt2KBAIKBwO67nnypSaGvtzJyefjP1J/km+DPndd9+t4uJiLVu2TNJnl1YmTZrkeBUAv0hLS1NlZaW2bt2qhIQEfe9731NiYqLrWc74MuQ//elPdeDAAQ0ZMkRnzpzRhAkTtHLlStezAPhIUlKSbr31VtczfMGXIZekBQsWaMGCBa5nAIDv+fL2QwDAxSPkAGAcIQcA4wg5ABhHyAHAOEIOAMYRcgAwjpADgHGEHACMI+QAYBwhBwDjCDkAGEfIAcA4Qg4AxhFyADCOkAOAcYQcAIwj5ABgHCEHAOMIOQAYR8gBwDhCDgDGEXIAMI6QA4BxhBwAjCPkAGAcIQcA4wg5ABhHyAHAOEIOAMYRcgAwjpADgHGEHACMI+QAYBwhBwDjCDkAGEfIAcA4Qg4AxhFyADCOkAOAcYQcAIwj5ABgHCEHAOMIOQAYR8gBwDhCDgDGEXIAMI6QA4BxhBwAjPN9yG+66SYFAgHXMwDAt3wd8rVr16q1tdX1DPQwtbW12rt3rzzPcz0F6Ba+DXlTU5Pmz5+vNWvWuJ6CHuLcuXP68Y9/rBtvvFHhcFi33Xabzpw543oW0GW+DfncuXP1wAMP6Oqrr3Y9BT3Eo48+qpdffllNTU1qbm7Wa6+9ptmzZ7ueBXRZkusBndmxY4d2796t3/zmNxd8n/fff1w9/dL5OhXoFU3Uf+snrqfEzDBJ6yQNj8vHco+kjpdTnnvufT33XDzO7YInLh513datW1VWVhY9rq+vd7imc74M+UMPPaQ1a9YoIeHC3zB8+9uPa9euO+K4yoEC6ScTpXU9t+P6LOW74hKcX/3q37Rkyf90uDb+858P0bPPxuHkLgQC+vI/XPjn5eXlKS8vL3qcm5vrcE3nfBny6upqZWdnd3gsEAjwwyl0yYIFC7R//35VVlaqvb1dN954o8rLy13PArrMlyH/crCJOLrD1772NW3YsEF1dXU6f/48P39Bj+HLkAOxNHjwYNcTgG7l27tWvohX4wBwYSZCDgC4MEIOAMYRcgAwjpADgHGEHACMI+QAYBwhBwDjCDkAGEfIAcA4Qg4AxhFyADCOkAOAcYQcAIwj5ABgHCEHAOMIOQAYR8gBwDhCDgDGEXIAMI6QA4BxhBwAjCPkPrV8+XLlbd6sScuWaefOna7nAPCxJNcD8FWlpaVauHChPv30U+noUb13113atGmTBg8e7HoaAB/iFbkPvfzyy59F/HP19fUqKytzuAiAnxFyHwoEAl95LDk52cESABYQch+65557lJaWFj3Ozs7W/PnzHS4C4GdcI/ehe++9VxkZGfqvWbMUzMrSEy++qMzMTNezAPgUIfepO++8U3f+6U/SxIlSKOR6DgAf49IKABhHyAHAOEIOAMYRcgAwjpADgHGEHACMI+QAYBwhBwDjCDkAGEfIAcA4Qg4AxhFyADCOkAOAcYQcAIwj5ABgHCEHAOMIOQAYR8gBwDhCDgDGEXIAMI6QA4Bxvgz5xo0bNXbsWKWkpCgzM1PTpk3TsWPHXM8CAF/yZcjLy8tVXFys48ePa+/evUpLS9PUqVNdzwLMOHDggNZ//it6Pl+G/LXXXtP3v/99paam6rLLLlNZWZneeOMN17MAE55++mmFw2FNkRQOh7V8+XLXkxBjvgz5l1VUVCgcDrueAfheJBLRU089pcOHD0uSDh8+rKefflonT550vAyxlOR6wP/nnXfe0UMPPaSNGzd2eLyxsbFD3GfNmqX8/Px4zwN8pb6+XkePHu3w2JEjR1RXV6eMjAxHq2x79dVXtXDhwuhxfX29wzWd83XIKysrVVhYqJdeeklDhgzp8GehUEjV1dWOlgH+dM011+jKK69UTU1N9LGrrrpKOTk5DlfZNmHCBE2YMCF6nJub63BN53x7aWX9+vUqKCjQhg0bdMMNN7ieA5iQkpKiFStWaMSIEfqGpBEjRmj58uVKSUlxPQ0x5MtX5OXl5VqxYoU2bdqk7Oxs13MAU8aOHaudO3fqaEKCBuzcqUAg4HoSYsyXIf/lL38pSRo6dGiHx1taWpSamupiEmBKIBDQNz77jespiANfhtzzPNcTAMAM314jBwBcHEIOAMYRcgAwjpADgHGEHACMI+QAYBwhBwDjCDkAGEfIAcA4Qg4AxhFyADCOkAOAcYQcAIwj5ABgHCEHAOMIOQAYR8gBwDhCDgDGEXIAMI6QA4BxhBwAjCPkALqsqqpKN//iF/r3d97Rgw8+qNbWVteTepUk1wMA2PbBBx9o+vTpOnDggCTp7Wee0dmzZ7Vq1SrHy3oPXpED6JJnn302GnFJ8jxPb775psNFvQ8hB9Al3/zmNxUIBDo81qdPH0dreidCDqBL7r//fo0aNSp6nJmZqfvvv9/hot6Ha+QAuiQ5OVkVFRX6z6IiHfrLX3TvH/+o3Nxc17N6FUIOoMtSUlJU+rOfSfX1EhGPOy6tAIBxhBwAjCPkAGAcIQcA4wg5ABhHyAHAOEIOAMYRcgAwjpADgHGEHACMI+QAYBwhBwDjCDkAGEfIAcA4Qg4AxhFyADCOkAOAcYQcAIwj5ABgHCEHAOMIOQAY58uQe56nOXPmqH///srIyNDcuXPleZ7rWXG3a9cunTp1yvWMmHvwwQddT4i53vAcJamurs71hF7JlyFfuXKlqqqqVFNToz179qiyslKrV692PSvuWlpadP78edczYq62ttb1hJjrDc9Rks6ePet6Qq/ky5CvXbtWpaWlCoVCCoVCKi0t1fPPP+96FgD4UpLrAZ2pqanR9ddfHz2+7rrrVFNT0+F9zp49q7fffjve0+Lq3LlzOnTokD7o4c/z1KlTPf5j6eI5XifF9Zyp+/ertbW1x38sT58+7XrCVwQ8H158TkxM1Pnz55WQ8Nk3DO3t7UpOTlZra6sk6W9/+5umTJnicmJcZEYiOte3r1qSk11PianTp08rNTXV9YyYcvEccz7+WDXBYNzO17etTf2am3UkIyNu53Tld7/7nUaMGOF6RpQvQ56WlqZDhw6pX79+kqTm5mZdccUVampqcrwMAPzHl9fIc3Jy9NZbb0WP3377beXk5DhcBAD+5cuQT58+XSUlJWpsbFRjY6NKSko0Y8YM17MAwJd8GfKioiKNGTNGOTk5ysnJ0Xe/+13NnDlTUu+5x3zjxo0aO3asUlJSlJmZqWnTpunYsWOuZ8XMTTfdpEAg4HpGzLz77rsaP368UlNTNXDgQK1Zs8b1pG5VW1urcePGKRgMKhgMaty4cT3ilstAIBB964xfeuTLkAcCAT3xxBNqampSU1OTlixZEv2L7C33mJeXl6u4uFjHjx/X3r17lZaWpqlTp7qeFRNr166N/iC7J6qtrdXtt9+uoqIiHTt2TNXV1Xr99dddz+pW+fn5GjVqlBoaGtTQ0KCRI0f2iBsSPM/7h2H2TY88Y8LhsLd58+bo8ebNm73Ro0c7XBQfH3/8sXfJJZe4ntHtTp486Q0aNMjbt2+fZ/DT8aJMnTrVW716tesZMdWnTx/vk08+iR6fPXvWS0lJcbioe13oc9MvPfLlK/J/5GLuMe+JKioqFA6HXc/odnPnztUDDzygq6++2vWUmNmyZYuOHDmiUCikYDCoyZMn97g7sCZNmqSlS5equblZkUhES5Ys0cSJE13Pijnf9Cju/3R0UUJCgtfW1hY9bmtr8xITEx0uir2//vWv3pVXXunt37/f9ZRutX37dm/UqFHRj6fBT8eLkpiY6M2cOdM7ceKEd+LECa+wsNDLz893Patbffjhh15WVpYnyZPkZWVleQ0NDa5ndZsLfW76pUfmvnL69evnNTc3R48jkYiXnp7ucFFsbd261Rs0aJC3Y8cO11O6XTgc9vbu3Rs97qkh79evn3fy5Mno8YkTJ7zU1FSHi7rfLbfc4j366KNeU1OT19TU5JWUlHi33HKL61nd5kKfm37pkblLK73pHvP169eroKBAGzZs0A033OB6Trerrq5WdnZ2h7sCeuKdK8OHD//KYz3teW7btk3z5s1Tenq60tPTNW/ePG3bts31rJjzS4/Mhby33GNeXl6uRx55RJs2bepwDa4n8T6/I8D7wp0BXg+8lfTuu+9WcXFx9C6s2bNna9KkSa5ndauhQ4dq8eLFikQiikQiWrRoka699lrXs2LONz2K+/cAXdTe3u49/PDDXnp6upeenu7NmTPHa29vdz2r2+nza41ffmtpaXE9LWYMfjpetPnz53tf//rXvb59+3p33XVXh0stPcF7773n5eXleSkpKV5KSop38803e/v27XM9q8s6+xr8Ir/0yJf/1woA4OKZu7QCAOiIkAOAcYQcAIwj5ABgHCEHAOMIOQAYR8gBwDhCDgDGEXIAMI6QA4BxhBwAjCPkAGAcIQcA4wg5ABhHyAHAOEIOAMYRcgAwjpADgHGEHACMI+QAYBwhBwDjCDkAGEfIAcC4/wVXGcsOH4dkEAAAAABJRU5ErkJggg=="},9636:(A,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/kdtree_3d-08e292cea4aaca31d50818fe0b9072fa.png"},9306:(A,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/p4est-01-5a0ec9c38cdfc4f4fd74f52d1af93d95.png"},9716:(A,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/paramesh-7d4244418c658f65d705ddf61dbf0a60.png"},6487:(A,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/quadkeys-microsoft-f757aa52599cdcbdc40b047c7cb1ce8c.jpg"},6623:(A,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/r_tree_2d-77348fc4e23a0614b3fc80ef73155467.png"},3716:(A,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/r_tree_3d-9cd35549bf9af56fbb5c2173eb3810f9.png"},1881:(A,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/spatial_database-03450e4ab515f829b2eb7e88715da8bf.png"},8453:(A,e,n)=>{n.d(e,{R:()=>t,x:()=>r});var i=n(6540);const s={},E=i.createContext(s);function t(A){const e=i.useContext(E);return i.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function r(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(s):A.components||s:t(A.components),i.createElement(E.Provider,{value:e},A.children)}}}]);