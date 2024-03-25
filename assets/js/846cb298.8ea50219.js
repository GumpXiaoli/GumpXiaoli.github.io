"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2901],{1483:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>o});var s=n(4848),l=n(8453);const r={title:"Algorithm Library Design"},d="Algorithm Library Design",t={id:"dev-guide/algorithm-libary-design",title:"Algorithm Library Design",description:"Why We Need Design Principles",source:"@site/docs/dev-guide/98-algorithm-libary-design.md",sourceDirName:"dev-guide",slug:"/dev-guide/algorithm-libary-design",permalink:"/docs/dev-guide/algorithm-libary-design",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:98,frontMatter:{title:"Algorithm Library Design"},sidebar:"tutorialSidebar",previous:{title:"gprof",permalink:"/docs/dev-guide/gprof"},next:{title:"Spatial Indexing and AMR Mesh",permalink:"/docs/dev-guide/spatial-indexing-and-amr-mesh"}},c={},o=[{value:"Why We Need Design Principles",id:"why-we-need-design-principles",level:2},{value:"Codes Lifespan",id:"codes-lifespan",level:3},{value:"Scale",id:"scale",level:3},{value:"CAE-related Algorithm Characteristics",id:"cae-related-algorithm-characteristics",level:3},{value:"Debug and Error Handling",id:"debug-and-error-handling",level:2},{value:"Build Type Based Macros",id:"build-type-based-macros",level:3},{value:"Exception",id:"exception",level:3},{value:"Signal Handling",id:"signal-handling",level:3},{value:"Backtrace",id:"backtrace",level:3},{value:"Naive (Print Message Directly)",id:"naive-print-message-directly",level:3},{value:"Memory Pool",id:"memory-pool",level:2},{value:"Memory Type",id:"memory-type",level:3},{value:"CPU/Host",id:"cpuhost",level:4},{value:"GPU/Device",id:"gpudevice",level:4},{value:"Pool Type",id:"pool-type",level:3},{value:"Performance Tuning",id:"performance-tuning",level:2},{value:"Profiler Type",id:"profiler-type",level:3},{value:"Run Time",id:"run-time",level:4},{value:"Memory Consumption",id:"memory-consumption",level:4},{value:"Communication",id:"communication",level:4},{value:"Performance Measurement",id:"performance-measurement",level:3},{value:"Sampling",id:"sampling",level:4},{value:"Instrumentation Codes",id:"instrumentation-codes",level:4},{value:"Some Good Tools",id:"some-good-tools",level:4},{value:"Performance Improving",id:"performance-improving",level:3},{value:"Good Data Structure and Algorithm",id:"good-data-structure-and-algorithm",level:4},{value:"Parallel Computing",id:"parallel-computing",level:4},{value:"Some Good Practice",id:"some-good-practice",level:4}];function a(e){const i={admonition:"admonition",code:"code",details:"details",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",summary:"summary",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"algorithm-library-design",children:"Algorithm Library Design"}),"\n",(0,s.jsx)(i.h2,{id:"why-we-need-design-principles",children:"Why We Need Design Principles"}),"\n",(0,s.jsx)(i.h3,{id:"codes-lifespan",children:"Codes Lifespan"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(3724).A+"",width:"965",height:"187"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(243).A+"",width:"950",height:"180"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(8089).A+"",width:"939",height:"192"})}),"\n",(0,s.jsx)(i.h3,{id:"scale",children:"Scale"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Hardware resources (CPU, RAM, Disk, Network)"}),"\n",(0,s.jsx)(i.li,{children:"Software resources (Addresses, Ports)"}),"\n",(0,s.jsx)(i.li,{children:"Human resources"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"cae-related-algorithm-characteristics",children:"CAE-related Algorithm Characteristics"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Little Interaction"}),"\n",(0,s.jsx)(i.li,{children:"Computing Intensive"}),"\n",(0,s.jsx)(i.li,{children:"Performance is critical"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"debug-and-error-handling",children:"Debug and Error Handling"}),"\n",(0,s.jsx)(i.h3,{id:"build-type-based-macros",children:"Build Type Based Macros"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Aseert"}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-c++",metastring:'title="Assert Example"',children:"#ifndef ATHENE_DEBUG\n#define ATHENE_ASSERT_WITH_MESSAGE(EX, MSG) ((void)0)\n#define ATHENE_ASSERT(EX) ((void)0)\n#else\n#define ATHENE_ASSERT_WITH_MESSAGE(EX, MSG) (EX) ? ((void)0) : athene::Assert(#EX, __FILE__, __LINE__, #MSG)\n#define ATHENE_ASSERT(EX) (EX) ? ((void)0) : athene::Assert(#EX, __FILE__, __LINE__)\n#endif\n"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"SIMD"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"exception",children:"Exception"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"No exception if possible"}),"\n",(0,s.jsx)(i.li,{children:"Floating Point Exception (FPE) -> Signal"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"signal-handling",children:"Signal Handling"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Interruption"}),"\n",(0,s.jsx)(i.li,{children:"Segfault"}),"\n",(0,s.jsx)(i.li,{children:"FPE"}),"\n",(0,s.jsx)(i.li,{children:"Termination"}),"\n",(0,s.jsx)(i.li,{children:"Abort"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Customize your own signal handler."}),"\n",(0,s.jsx)(i.h3,{id:"backtrace",children:"Backtrace"}),"\n",(0,s.jsx)(i.p,{children:"Backtrace method can help find problem source fast."}),"\n",(0,s.jsx)(i.p,{children:"We can also use some tools (libunwind)."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(2492).A+"",width:"1515",height:"708"})}),"\n",(0,s.jsx)(i.h3,{id:"naive-print-message-directly",children:"Naive (Print Message Directly)"}),"\n",(0,s.jsx)(i.p,{children:"This helps a lot for MPI programs."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-c++",metastring:'title="Using printing-msg-to-std method"',children:'Print() << "test!\\n";\nstd::cout << "test again!\\n";\n'})}),"\n",(0,s.jsx)(i.h2,{id:"memory-pool",children:"Memory Pool"}),"\n",(0,s.jsx)(i.h3,{id:"memory-type",children:"Memory Type"}),"\n",(0,s.jsx)(i.h4,{id:"cpuhost",children:"CPU/Host"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Memory Hierarchy"}),"\n",(0,s.jsx)(i.li,{children:"Memory Cache"}),"\n"]}),"\n\n\n\n\n\n\n\n",(0,s.jsx)(i.table,{children:(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:(0,s.jsx)(i.img,{src:n(9525).A+"",width:"720",height:"523"})}),(0,s.jsx)(i.th,{children:(0,s.jsx)(i.img,{src:n(9474).A+"",width:"720",height:"412"})})]})})}),"\n",(0,s.jsx)(i.h4,{id:"gpudevice",children:"GPU/Device"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Global"}),"\n",(0,s.jsx)(i.li,{children:"Shared"}),"\n",(0,s.jsx)(i.li,{children:"Const"}),"\n",(0,s.jsx)(i.li,{children:"Texture"}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.img,{src:n(2295).A+"",width:"850",height:"742"}),"\n",(0,s.jsx)(i.img,{src:n(5724).A+"",width:"1000",height:"1155"})]}),"\n",(0,s.jsx)(i.h3,{id:"pool-type",children:"Pool Type"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Block Pool"}),"\n",(0,s.jsx)(i.li,{children:"Coalesce Pool"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"performance-tuning",children:"Performance Tuning"}),"\n",(0,s.jsx)(i.h3,{id:"profiler-type",children:"Profiler Type"}),"\n",(0,s.jsx)(i.h4,{id:"run-time",children:"Run Time"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(8580).A+"",width:"1397",height:"492"})}),"\n",(0,s.jsx)(i.h4,{id:"memory-consumption",children:"Memory Consumption"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(6815).A+"",width:"831",height:"437"})}),"\n",(0,s.jsx)(i.h4,{id:"communication",children:"Communication"}),"\n",(0,s.jsx)(i.h3,{id:"performance-measurement",children:"Performance Measurement"}),"\n",(0,s.jsx)(i.h4,{id:"sampling",children:"Sampling"}),"\n",(0,s.jsx)(i.h4,{id:"instrumentation-codes",children:"Instrumentation Codes"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-c++",metastring:'title="Using Profiler"',children:'ATHENE_PROFILE("FlowBase::fillPatchOnLevel(int, int)");\n'})}),"\n",(0,s.jsx)(i.h4,{id:"some-good-tools",children:"Some Good Tools"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"gprof"}),"\n",(0,s.jsx)(i.li,{children:"gproftools"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"performance-improving",children:"Performance Improving"}),"\n",(0,s.jsx)(i.h4,{id:"good-data-structure-and-algorithm",children:"Good Data Structure and Algorithm"}),"\n",(0,s.jsx)(i.h4,{id:"parallel-computing",children:"Parallel Computing"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"MPI"}),"\n",(0,s.jsx)(i.li,{children:"OpenMP"}),"\n",(0,s.jsx)(i.li,{children:"GPU"}),"\n",(0,s.jsx)(i.li,{children:"SYCL"}),"\n",(0,s.jsx)(i.li,{children:"SIMD"}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"some-good-practice",children:"Some Good Practice"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Space is time."}),"\n",(0,s.jsx)(i.li,{children:"Pay attention to memory cache."}),"\n",(0,s.jsxs)(i.li,{children:["Avoid system call.\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"read"}),"\n",(0,s.jsx)(i.li,{children:"write"}),"\n",(0,s.jsx)(i.li,{children:"open"}),"\n",(0,s.jsx)(i.li,{children:"close"}),"\n",(0,s.jsx)(i.li,{children:"gettimeofday"}),"\n",(0,s.jsx)(i.li,{children:"malloc"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Shift Computing from Run-Time to Compile Time\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Use template."}),"\n",(0,s.jsx)(i.li,{children:"Use lambda."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.admonition,{title:"Example of lambda's benefits",type:"tip",children:(0,s.jsxs)(i.p,{children:["qsort in ",(0,s.jsx)(i.code,{children:"c"})," vs std::sort in ",(0,s.jsx)(i.code,{children:"c++"})]})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Modern compilers are clever, and don't over-optimize."}),"\n"]}),"\n",(0,s.jsxs)(i.details,{children:["\n",(0,s.jsx)(i.summary,{children:"Compile Options that Control Optimization (gcc)"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"-O0"}),"(default): Most optimizations are completely disabled. Reduce compilation time and make debugging produce the expected results."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"-Og"}),": Suppresses many optimization passes."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"-O1"}),"/",(0,s.jsx)(i.code,{children:"-O"}),": The compiler tries to reduce code size and execution time, without performing any optimizations that take a great deal of compilation time."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"-Os"}),": Optimize for size. ",(0,s.jsx)(i.code,{children:"-Os"})," enables all ",(0,s.jsx)(i.code,{children:"-O2"})," optimizations except those that often increase code size: ",(0,s.jsx)(i.code,{children:"-falign-functions"})," ",(0,s.jsx)(i.code,{children:"-falign-jumps"})," ",(0,s.jsx)(i.code,{children:"-falign-labels"})," ",(0,s.jsx)(i.code,{children:"-falign-loops"})," ",(0,s.jsx)(i.code,{children:"-fprefetch-loop-arrays"})," ",(0,s.jsx)(i.code,{children:"-freorder-blocks-algorithm=stc"}),". It also enables ",(0,s.jsx)(i.code,{children:"-finline-functions"}),", causes the compiler to tune for code size rather than execution speed, and performs further optimizations designed to reduce code size."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"-O2"}),": Optimize even more. GCC performs nearly all supported optimizations that do not involve a space-speed tradeoff. As compared to ",(0,s.jsx)(i.code,{children:"-O"}),", this option increases both compilation time and the performance of the generated code."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"-O3"}),": Optimize yet more."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"-Ofast"}),": Disregard strict standards compliance. ",(0,s.jsx)(i.code,{children:"-Ofast"})," enables all ",(0,s.jsx)(i.code,{children:"-O3"})," optimizations. It also enables optimizations that are not valid for all standard-compliant programs. It turns on ",(0,s.jsx)(i.code,{children:"-ffast-math"}),", ",(0,s.jsx)(i.code,{children:"-fallow-store-data-races"})," and the Fortran-specific ",(0,s.jsx)(i.code,{children:"-fstack-arrays"}),", unless ",(0,s.jsx)(i.code,{children:"-fmax-stack-var-size"})," is specified, and ",(0,s.jsx)(i.code,{children:"-fno-protect-parens"}),". It turns off ",(0,s.jsx)(i.code,{children:"-fsemantic-interposition"}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},5724:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/gpu_memory-d1c265a0e3f6af41c962ca5208850034.png"},2295:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/gpu_memory_2-2e80f64dd896dbee70e37e548eac3620.png"},2492:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/libunwind-eae8696db957a32bb989dda1aea0fbde.png"},8089:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/lifespan-largecoprs-7caf9912b1e5222e5ec6532e979e52cc.png"},3724:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/lifespan-novices-72ae03e9c1dc03f355a809aabe691d2d.png"},243:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/lifespan-startups-2eff4e453773606bbd6c45a3e1bc50dc.png"},6815:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/memory-profiler-ad5bc5f770292d0456b8d5ddcad51b27.png"},9474:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/memory_cache-e500f9f78809c89e0deafc43230bc094.png"},9525:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/memory_hierarchy-af3ba2b99d8871b158db05573edd0952.png"},8580:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/time profiler-fd10250eebd6a17f0490b18702af76bb.png"},8453:(e,i,n)=>{n.d(i,{R:()=>d,x:()=>t});var s=n(6540);const l={},r=s.createContext(l);function d(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);