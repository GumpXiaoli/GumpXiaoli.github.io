"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73],{7773:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>o});var t=c(4848),i=c(8453);const d={},s="Connected Component Labeling on Device",a={id:"dev-guide/ccl-cuda",title:"Connected Component Labeling on Device",description:"General Idea",source:"@site/docs/dev-guide/ccl-cuda.md",sourceDirName:"dev-guide",slug:"/dev-guide/ccl-cuda",permalink:"/docs/next/dev-guide/ccl-cuda",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Git Guide",permalink:"/docs/next/dev-guide/git-guide"}},l={},o=[{value:"General Idea",id:"general-idea",level:2},{value:"Implementation Details",id:"implementation-details",level:2}];function r(e){const n={a:"a",h1:"h1",h2:"h2",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"connected-component-labeling-on-device",children:"Connected Component Labeling on Device"}),"\n",(0,t.jsx)(n.h2,{id:"general-idea",children:"General Idea"}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u4eec\u63d0\u51fa\u4e86\u4e00\u4e2a\u65b0\u7248\u672c\u7684\u4e24\u904d\u8054\u5408\u67e5\u627e\u7b97\u6cd5\uff0c\u5176\u4e2d\u6240\u6709\u8fed\u4ee3\u90fd\u5728\u5185\u6838\u4e2d\u5b9e\u73b0\u3002\u5bf9\u4e8e\u8f93\u5165\u6570\u636e\u7684\u7ed9\u5b9a\u7ef4\u5ea6\uff0c\u6267\u884c\u7684\u5185\u6838\u7684\u6570\u91cf\u662f\u56fa\u5b9a\u7684\uff0c\u5e76\u4e14\u4e0d\u9700\u8981\u4e3b\u673a\u548c\u8bbe\u5907\u4e4b\u95f4\u7684\u540c\u6b65\u3002\u6211\u4eec\u7684\u65b9\u6cd5\u8fd8\u5229\u7528GPU\u4e0a\u7684\u5171\u4eab\u5185\u5b58\uff0c\u56e0\u4e3a\u6211\u4eec\u5c06\u8f93\u5165\u6570\u636e\u5212\u5206\u4e3a\u66f4\u5c0f\u7684\u533a\u5757\uff0c\u5176\u4e2dCCL\u95ee\u9898\u5728\u672c\u5730\u89e3\u51b3\u3002\u7136\u540e\u4f7f\u7528\u6811\u72b6\u5206\u5c42\u5408\u5e76\u65b9\u6848\u9012\u5f52\u5408\u5e76\u5207\u7247\uff0c\u5982\u56fe5\u6240\u793a\u3002\u5728\u5408\u5e76\u65b9\u6848\u7684\u6bcf\u4e2a\u7ea7\u522b\uff0c\u6211\u4eec\u4f7f\u7528\u76f8\u90bb\u533a\u5757\u7684\u8fb9\u754c\u533a\u57df\u6765\u5408\u5e76\u6765\u81ea\u8f83\u4f4e\u7ea7\u522b\u7684CCL\u95ee\u9898\u7684\u672c\u5730\u89e3\u51b3\u65b9\u6848\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"ccl-cuda-01",src:c(8908).A+"",width:"823",height:"380"})}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u4eec\u7b97\u6cd5\u7684\u6240\u6709\u6b65\u9aa4\u90fd\u5b8c\u5168\u5728GPU\u4e0a\u7684\u56db\u4e2a\u4e0d\u540c\u5185\u6838\u4e2d\u5b9e\u73b0\uff08\u89c1\u56fe6\uff09\u3002\u5185\u68381\u89e3\u51b3\u4e86\u5171\u4eab\u5185\u5b58\u4e2d\u8f93\u5165\u6570\u636e\u7684\u5c0f\u5757\u7684CCL\u95ee\u9898\u3002\u7136\u540e\uff0c\u5c06\u5408\u5e76\u65b9\u6848\u9012\u5f52\u5730\u5e94\u7528\u4e8e\u533a\u5757\u4e4b\u95f4\u7684\u8fb9\u754c\u533a\u57df\u3002\u5408\u5e76\u65b9\u6848\u4f7f\u7528\u4e24\u4e2a\u4e0d\u540c\u7684\u5185\u6838\u3002\u4e00\u4e2a\u5c06\u6765\u81ea\u4e00\u7ec4\u533a\u5757\u7684\u7b49\u4ef7\u6811\u5408\u5e76\u5728\u4e00\u8d77\uff0c\u5e76\u4e14\u7b2c\u4e8c\u4e2a\u5728\u5408\u5e76\u65b9\u6848\u7684\u6bcf\u6b21\u8fed\u4ee3\u4e4b\u524d\u66f4\u65b0\u6570\u636e\u533a\u5757\u7684\u8fb9\u754c\u533a\u57df\u4e0a\u7684\u6807\u7b7e\u3002\u5408\u5e76\u65b9\u6848\u4ec5\u7528\u4e8e\u5408\u5e76\u6765\u81ea\u8fde\u63a5\u533a\u5757\u7684\u7b49\u4ef7\u6811;\u56e0\u6b64\uff0c\u5f53\u5408\u5e76\u6240\u6709\u7ea7\u522b\u4e0a\u7684\u6240\u6709\u533a\u5757\u65f6\uff0c\u6709\u5fc5\u8981\u901a\u8fc7\u66f4\u65b0\u6240\u6709\u6570\u636e\u5143\u7d20\u4e0a\u7684\u6807\u7b7e\u6765\u627e\u5230CCL\u95ee\u9898\u7684\u6700\u7ec8\u89e3\u51b3\u65b9\u6848\u3002\u6b64\u8fc7\u7a0b\u5728\u6700\u540e\u4e00\u4e2a\u5185\u6838\u4e2d\u5b8c\u6210\u3002\u7b2c\u4e00\u4e2a\u5185\u6838\u548c\u6700\u7ec8\u5185\u6838\u90fd\u53ea\u8c03\u7528\u4e00\u6b21\uff0c\u800c\u5408\u5e76\u65b9\u6848\u5185\u6838\u5219\u4e3a\u6bcf\u4e2a\u7ea7\u522b\u7684\u5408\u5e76\u65b9\u6848\u8c03\u7528\u3002\u7ea7\u522b\u6570\u7531\u8f93\u5165\u6570\u636e\u7684\u5927\u5c0f\u51b3\u5b9a;\u56e0\u6b64\uff0c\u5b83\u4e0d\u4f9d\u8d56\u4e8e\u5206\u6790\u6570\u636e\u4e2d\u8fde\u63a5\u7ec4\u4ef6\u7684\u7ed3\u6784\u3002\u8fd9\u662f\u6211\u4eec\u7b97\u6cd5\u7684\u4e00\u5927\u4f18\u52bf\uff0c\u56e0\u4e3a\u5b83\u51cf\u5c11\u4e86\u6267\u884c\u5185\u6838\u7684\u6570\u91cf\uff0c\u5e76\u4e14\u8fd8\u6d88\u9664\u4e86\u4ece\u8bbe\u5907\u5230\u4e3b\u673a\u7684\u6240\u6709\u6570\u636e\u4f20\u8f93\u3002\u5c3d\u7ba1\u5bf9\u4e8e\u7ed9\u5b9a\u7684\u8f93\u5165\u6570\u636e\u7ef4\u5ea6\uff0c\u5185\u6838\u8c03\u7528\u7684\u6570\u91cf\u662f\u56fa\u5b9a\u7684\uff0c\u4f46\u662f\u5373\u4f7f\u5b83\u4eec\u5177\u6709\u76f8\u540c\u7684\u7ef4\u5ea6\uff0c\u4ecd\u7136\u9700\u8981\u6267\u884cCCL\u6c42\u89e3\u5668\u7684\u4e0d\u540c\u8fed\u4ee3\u6b21\u6570\u3002\u4f46\u662f\uff0c\u6240\u6709\u8fd9\u4e9b\u8fed\u4ee3\u90fd\u76f4\u63a5\u5728\u5185\u68381\u548c\u5185\u90e82\u4e2d\u6267\u884c\uff0c\u5e76\u4e14\u5b83\u4eec\u5b9e\u9645\u4e0a\u662f\u4ece\u4e3b\u673a\u9690\u85cf\u7684\u3002\u5185\u6838\u5c06\u5728\u4e0b\u4e00\u8282\u4e2d\u8be6\u7ec6\u4ecb\u7ecd\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"ccl-cuda-02",src:c(3191).A+"",width:"897",height:"316"})}),"\n",(0,t.jsx)(n.h2,{id:"implementation-details",children:"Implementation Details"}),"\n",(0,t.jsx)(n.p,{children:"CCL\u7b97\u6cd5\u662f\u7528CUDA 3.0\u548cC ++\u7f16\u5199\u7684\uff0c\u6240\u6709\u6e90\u4ee3\u7801\u90fd\u53ef\u4ee5\u5728\u9644\u5e26\u7684\u6f14\u793a\u5e94\u7528\u7a0b\u5e8f\u4e2d\u627e\u5230\u3002  CCL\u7b97\u6cd5\u9700\u8981\u5177\u67091.3\u6216\u66f4\u9ad8\u8ba1\u7b97\u80fd\u529b\u7684GPU\uff0c\u56e0\u4e3a\u5185\u6838\u5728\u5168\u5c40\u548c\u5171\u4eab\u5185\u5b58\u4e0a\u90fd\u4f7f\u7528\u539f\u5b50\u64cd\u4f5c\u3002 \u6f14\u793a\u5e94\u7528\u7a0b\u5e8f\u8fd8\u9700\u8981CUDA Toolkit  3.0\uff0c\u56e0\u4e3a\u5b83\u5229\u7528\u4e86\u6b64\u7248\u672c\u4e2d\u5f15\u5165\u7684OpenGL\u4e92\u64cd\u4f5c\u6027\u529f\u80fd\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8fde\u63a5\u6807\u51c6\u5fc5\u987b\u9996\u5148\u7531\u7528\u6237\u660e\u786e\u5b9a\u4e49\uff0c\u5e76\u4e14\u5b83\u662f\u6211\u4eec\u7b97\u6cd5\u7684\u53c2\u6570\u4e4b\u4e00\u3002 \u4f8b\u5982\uff0c\u6211\u4eec\u53ef\u4ee5\u8bf4\u5982\u679cRGB\u56fe\u50cf\u7684\u4e24\u4e2a\u5143\u7d20\u7684\u4eae\u5ea6\u4e4b\u95f4\u7684\u5dee\u5f02\u4f4e\u4e8e\u7ed9\u5b9a\u7684\u9608\u503c\uff0c\u5219\u5b83\u4eec\u4f1a\u88ab\u8fde\u63a5\u8d77\u6765\u3002 \u5b9a\u4e49\u8fde\u901a\u6027\u6807\u51c6\u7684\u53e6\u4e00\u79cd\u65b9\u6cd5\u662f\u5bf9\u8f93\u5165\u6570\u636e\u5e94\u7528\u5206\u6bb5\u3002 \u5728\u5206\u6bb5\u6570\u636e\u4e2d\uff0c\u4e24\u4e2a\u76f8\u90bb\u5143\u7d20\u4ec5\u5728\u5b83\u4eec\u5171\u4eab\u76f8\u540c\u7684\u6bb5\u503c\u65f6\u624d\u8fde\u63a5\uff0c\u8fd9\u4e5f\u662f\u6211\u4eec\u5728\u5b9e\u73b0\u4e2d\u9009\u62e9\u7684\u65b9\u6cd5\u3002  \u8f93\u5165\u6570\u636e\u5b58\u50a8\u57288\u4f4d\u65e0\u7b26\u53f7\u6574\u6570\u7684\u4e8c\u7ef4\u6570\u7ec4\u4e2d\uff0c\u8be5\u6570\u7ec4\u5305\u542b\u6240\u6709\u5143\u7d20\u7684\u6bb5\u503c\uff0c\u4f46\u8868\u793a\u80cc\u666f\u7684\u6bb5\u503c0\u9664\u5916\uff0c\u6211\u4eec\u7684CCL\u7b97\u6cd5\u4f1a\u5ffd\u7565\u5b83\u4eec\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u7136\u540e\u4f7f\u7528\u6765\u81eaMoore\u90bb\u57df\u7684\u5206\u6bb5\u503c\u68c0\u6d4b\u6bcf\u4e2a\u975e\u80cc\u666f\u5143\u7d20\u7684\u8fde\u901a\u5206\u91cf\u3002 \u6240\u6709\u8fde\u63a5\u7684\u7ec4\u4ef6\u90fd\u7531\u6807\u7b7e\u8868\u793a\uff0c\u8fd9\u4e9b\u6807\u7b7e\u5b58\u50a8\u572832\u4f4d\u6574\u65702-D\u6570\u7ec4\u4e2d\uff0c\u8be5\u6570\u7ec4\u4e0e\u8f93\u5165\u6570\u636e\u5177\u6709\u76f8\u540c\u7684\u7ef4\u5ea6\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"ccl-cuda-03",src:c(174).A+"",width:"818",height:"398"})}),"\n",(0,t.jsx)(n.p,{children:"\u5185\u68381\u9996\u5148\u5728GPU\u7684\u5171\u4eab\u5185\u5b58\u4e2d\u627e\u5230\u8f93\u5165\u6570\u636e\u7684\u5c0f\u5757\u7684CCL\u95ee\u9898\u7684\u5c40\u90e8\u89e3\u51b3\u65b9\u6848\uff08\u53c2\u89c1\u56fe8\u4e2d\u7684\u5185\u6838\u7684\u4f2a\u4ee3\u7801\uff09\u3002\u6bcf\u4e2a\u56fe\u5757\u7531\u4e00\u4e2aCUDA\u7ebf\u7a0b\u5757\u89e3\u51b3\uff0c\u5e76\u4e14\u6bcf\u4e2a\u7ebf\u7a0b\u5bf9\u5e94\u4e8e\u7ed9\u5b9a\u56fe\u5757\u4e2d\u7684\u5355\u4e2a\u5143\u7d20\u3002\u672c\u5730\u89e3\u51b3\u65b9\u6848\u662f\u4ece\u56fe3\u4e2d\u63cf\u8ff0\u7684\u53cc\u901aCCL\u6c42\u89e3\u5668\u7684\u4fee\u6539\u7248\u672c\u4e2d\u83b7\u5f97\u7684\u3002\u6bcf\u5f53\u4efb\u4f55\u4e24\u4e2a\u76f8\u90bb\u7684\u8fde\u63a5\u5143\u7d20\u5177\u6709\u4e0d\u540c\u7684\u6807\u7b7e\u65f6\uff0c\u5185\u6838\u5c31\u6267\u884c\u4fee\u6539\u7684CCL\u7b97\u6cd5\u7684\u65b0\u8fed\u4ee3\u3002\u6bcf\u6b21\u8fed\u4ee3\u90fd\u6267\u884c\u7b97\u6cd5\u7684\u4e24\u6b21\u4f20\u9012\uff0c\u4f46\u7b2c\u4e00\u6b21\u4f20\u9012\u5206\u4e3a\u4e24\u4e2a\u5355\u72ec\u7684\u6b65\u9aa4\u3002\u9996\u5148\uff0c\u6bcf\u4e2a\u7ebf\u7a0b\u68c0\u6d4b\u6765\u81ea\u6240\u6709\u76f8\u90bb\u5143\u7d20\u7684\u6700\u4f4e\u6807\u7b7e\u3002\u5982\u679c\u76f8\u90bb\u5143\u7d20\u7684\u6807\u7b7e\u4f4e\u4e8e\u5904\u7406\u5143\u7d20\u7684\u6807\u7b7e\uff08\u4e24\u4e2a\u8fde\u63a5\u5143\u7d20\u5c5e\u4e8e\u4e0d\u540c\u7684\u7b49\u4ef7\u6811\uff09\uff0c\u90a3\u4e48\u6211\u4eec\u4f7f\u7528atomicMin\u51fd\u6570\u5408\u5e76\u8fd9\u4e9b\u7b49\u4ef7\u6811\u3002\u539f\u5b50\u64cd\u4f5c\u662f\u5fc5\u8981\u7684\uff0c\u56e0\u4e3a\u540c\u4e00\u4e2a\u7b49\u4ef7\u6811\u53ef\u4ee5\u540c\u65f6\u7531\u591a\u4e2a\u7ebf\u7a0b\u66f4\u65b0\u3002\u8be5CCL\u7b97\u6cd5\u5728\u56fe7\u4e2d\u7684\u4e00\u4e2a\u7b80\u5355\u793a\u4f8b\u4e2d\u8fdb\u884c\u4e86\u6f14\u793a\u3002\u6700\u7ec8\u6807\u7b7e\u4e0e\u5171\u4eab\u5185\u5b58\u7684\u5730\u5740\u7a7a\u95f4\u76f8\u5173\uff0c\u56e0\u4e3a\u5b83\u4e3a\u5185\u5b58\u8bbf\u95ee\u63d0\u4f9b\u4e86\u66f4\u7b80\u5355\u7684\u5bfb\u5740\u6a21\u5f0f\u3002\u56e0\u6b64\uff0c\u5728\u6240\u6709\u8fed\u4ee3\u5b8c\u6210\u540e\uff0c\u5fc5\u987b\u5c06\u6807\u7b7e\u4f20\u8f93\u5230\u5168\u5c40\u5730\u5740\u7a7a\u95f4\uff0c\u7136\u540e\u5c06\u5b83\u4eec\u5b58\u50a8\u5728\u5168\u5c40\u8bbe\u5907\u5b58\u50a8\u5668\u4e2d\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"ccl-cuda-04",src:c(6289).A+"",width:"681",height:"687"})}),"\n",(0,t.jsx)(n.p,{children:"\u8981\u8ba1\u7b97CCL\u95ee\u9898\u7684\u5168\u5c40\u89e3\u51b3\u65b9\u6848\uff0c\u6709\u5fc5\u8981\u5408\u5e76\u4e0a\u4e00\u6b65\u9aa4\u4e2d\u7684\u672c\u5730\u89e3\u51b3\u65b9\u6848\u3002\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4e24\u4e2a\u56fe\u5757\u7684\u6240\u6709\u8fb9\u754c\u5143\u7d20\u4e4b\u95f4\u7684\u8fde\u63a5\u6765\u5408\u5e76\u76f8\u5e94\u56fe\u5757\u4e2d\u7684\u8fde\u63a5\u7ec4\u4ef6\u7684\u7b49\u4ef7\u6811\u3002\u56e0\u4e3a\u6211\u4eec\u60f3\u8981\u95ee\u9898\u7684\u5e76\u884c\u89e3\u51b3\u65b9\u6848\uff0c\u6240\u4ee5\u901a\u5e38\u9700\u8981\u6267\u884c\u6b64\u5408\u5e76\u64cd\u4f5c\u7684\u591a\u6b21\u8fed\u4ee3\uff0c\u56e0\u4e3a\u6211\u4eec\u65e0\u6cd5\u4fdd\u8bc1\u5728\u5355\u4e2a\u5408\u5e76\u64cd\u4f5c\u4e4b\u540e\u5408\u5e76\u6240\u6709\u7b49\u4ef7\u6811\u3002\u8fd9\u79cd\u8fed\u4ee3\u673a\u5236\u9700\u8981\u5728\u5355\u4e2a\u7ebf\u7a0b\u5757\u7684\u5404\u4e2a\u7ebf\u7a0b\u4e4b\u95f4\u8fdb\u884c\u540c\u6b65\uff0c\u4f46\u4e00\u822c\u6765\u8bf4\uff0c\u5904\u7406\u4e00\u4e2a\u7ebf\u7a0b\u5757\u4e2d\u7684\u6240\u6709\u8fb9\u754c\u5143\u7d20\u662f\u4e0d\u53ef\u884c\u7684\uff0c\u56e0\u4e3a\u65e2\u6ca1\u6709\u8db3\u591f\u7684\u7ebf\u7a0b\uff0c\u4e5f\u6ca1\u6709\u8db3\u591f\u7684\u5171\u4eab\u5185\u5b58\u6765\u5b58\u50a8\u6240\u6709\u9700\u8981\u7684\u6570\u636e\u3002\u6211\u4eec\u5bf9\u6b64\u95ee\u9898\u7684\u89e3\u51b3\u65b9\u6848\u5728\u5185\u68382\u4e2d\u5b9e\u73b0\uff0c\u5982\u56fe9\u6240\u793a\u3002\u7ed9\u5b9a\u7684\u4e00\u7ec4\u56fe\u5757\u5408\u5e76\u5728\u4e00\u4e2a3D\u7ebf\u7a0b\u5757\u4e2d\uff0c\u5176\u4e2d\u5757\u7684x\u548cy\u7ef4\u5ea6\u7528\u4e8e\u7d22\u5f15\u5355\u4e2a\u56fe\u5757\uff0c\u800cz\u7ef4\u5ea6\u5305\u542b\u7528\u4e8e\u6bd4\u8f83\u548c\u5408\u5e76\u7ed9\u5b9a\u56fe\u5757\u8fb9\u754c\u4e0a\u7684\u7b49\u4ef7\u6811\u7684\u5355\u72ec\u7ebf\u7a0b\u4f7f\u7528Union\u529f\u80fd\u3002\u56e0\u4e3a\u4e0e\u6bcf\u4e2a\u56fe\u5757\u76f8\u5173\u8054\u7684\u7ebf\u7a0b\u6570\u91cf\u4e0d\u8db3\u4ee5\u5904\u7406\u7ed9\u5b9a\u56fe\u5757\u7684\u6240\u6709\u8fb9\u754c\u5143\u7d20\uff0c\u6240\u4ee5\u6240\u6709\u7ebf\u7a0b\u5b9e\u9645\u4e0a\u987a\u5e8f\u5730\u5904\u7406\u591a\u4e2a\u8fb9\u754c\u5143\u7d20\u3002\u5728\u7b2c\u4e00\u9636\u6bb5\uff0c\u7ebf\u7a0b\u5904\u7406\u5e95\u90e8\u6c34\u5e73\u8fb9\u754c\u4e24\u4fa7\u7684\u5143\u7d20\uff0c\u800c\u5728\u7b2c\u4e8c\u9636\u6bb5\uff0c\u5b83\u4eec\u5904\u7406\u53f3\u4fa7\u5782\u76f4\u8fb9\u754c\u7684\u4e24\u4fa7\u3002\u5982\u679c\u4e24\u4e2a\u56fe\u5757\u4e4b\u95f4\u7684\u8fb9\u754c\u592a\u957f\uff0c\u5219\u7ebf\u7a0b\u4f1a\u987a\u5e8f\u5904\u7406\u4e00\u4e2a\u8fb9\u754c\uff0c\u7136\u540e\u518d\u7ee7\u7eed\u4e0b\u4e00\u4e2a\u8fb9\u6846\u3002\u6b63\u5982\u6211\u4eec\u5728\u56fe9\u4e2d\u770b\u5230\u7684\uff0c\u56db\u4e2a\u5207\u7247\u4e4b\u95f4\u7684\u89d2\u5143\u7d20\u7531\u591a\u4e2a\u7ebf\u7a0b\u5904\u7406\uff0c\u4f46\u8fd9\u4e9b\u5197\u4f59\u7ebf\u7a0b\u7684\u6570\u91cf\u5f88\u5c11\uff0c\u4e0d\u9700\u8981\u7279\u6b8a\u5904\u7406\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"ccl-cuda-05",src:c(8024).A+"",width:"805",height:"409"})}),"\n",(0,t.jsx)(n.p,{children:"\u5185\u68382\u7684\u4e00\u6b21\u6267\u884c\u53ef\u4ee5\u4ec5\u5c06\u6709\u9650\u6570\u91cf\u7684\u533a\u5757\u5408\u5e76\u5728\u4e00\u8d77\uff0c\u56e0\u6b64\u6709\u5fc5\u8981\u591a\u6b21\u8c03\u7528\u5185\u6838\uff0c\u5176\u4e2d\u5185\u6838\u7684\u6bcf\u6b21\u8fed\u4ee3\u5c06\u6765\u81ea\u5148\u524d\u6b65\u9aa4\u7684\u5408\u5e76\u533a\u5757\u4f5c\u4e3a\u8f93\u5165\u3002\u6bcf\u4e2a\u7ea7\u522b\u5408\u5e76\u7684\u5207\u7247\u6570\u91cf\u53ef\u80fd\u4f1a\u6709\u6240\u4e0d\u540c\u3002\u6211\u4eec\u53d1\u73b0\u5408\u5e764\xd74\u533a\u5757\u4f1a\u4ea7\u751f\u5f88\u597d\u7684\u6548\u679c\u3002\u5982\u679c\u6211\u4eec\u5728\u4e00\u4e2a\u7ea7\u522b\u4e0a\u5408\u5e76\u66f4\u591a\u7684\u56fe\u5757\uff0c\u90a3\u4e48\u4e0e\u6bcf\u4e2a\u56fe\u5757\u76f8\u5173\u8054\u7684\u7ebf\u7a0b\u6570\u91cf\u592a\u5c0f\uff0c\u6574\u4e2a\u8fc7\u7a0b\u53d8\u5f97\u66f4\u52a0\u987a\u5e8f\u3002\u53e6\u4e00\u65b9\u9762\uff0c\u5982\u679c\u6211\u4eec\u5408\u5e76\u8f83\u5c11\u7684\u533a\u5757\uff0c\u5219\u5408\u5e76\u65b9\u6848\u7684\u7ea7\u522b\u6570\u91cf\u589e\u52a0 - \u8fd9\u4e5f\u662f\u4e0d\u53ef\u53d6\u7684\u7ed3\u679c\u3002\u5185\u68382\u7684\u4f2a\u4ee3\u7801\u5982\u56fe10\u6240\u793a\u3002\u4f7f\u7528Union\u51fd\u6570\u5408\u5e76\u6765\u81ea\u76f8\u90bb\u533a\u5757\u7684\u8fde\u63a5\u7ec4\u4ef6\uff08\u7b49\u4ef7\u6811\uff09\u3002  Union\u529f\u80fd\u7684\u5b9e\u73b0\u9075\u5faa\u56fe4\u7684\u63cf\u8ff0\u3002\u4f46\u662f\uff0c\u591a\u4e2a\u7ebf\u7a0b\u53ef\u80fd\u4f1a\u5c1d\u8bd5\u540c\u65f6\u5408\u5e76\u4e24\u4e2a\u7b49\u4ef7\u6811\uff0c\u8fd9\u5c31\u662f\u4f7f\u7528CUDA  atomicMin\u51fd\u6570\u5b9e\u73b0\u5408\u5e76\u64cd\u4f5c\u7684\u539f\u56e0\u3002\u5f53\u4e24\u4e2a\u8fde\u63a5\u5143\u7d20\u4f4d\u4e8e\u4e0d\u540c\u7684\u7b49\u4ef7\u6811\uff08\u5177\u6709\u4e0d\u540c\u6839\u6807\u7b7e\u7684\u6811\uff09\u65f6\uff0c\u6211\u4eec\u5c06\u5171\u4eab\u53d8\u91cfsChanged\u8bbe\u7f6e\u4e3a1\uff0c\u8fd9\u8868\u793a\u8be5\u7b97\u6cd5\u7684\u53e6\u4e00\u6b21\u8fed\u4ee3\u662f\u5fc5\u8981\u7684\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"ccl-cuda-06",src:c(2515).A+"",width:"829",height:"684"})}),"\n",(0,t.jsx)(n.p,{children:"\u503c\u5f97\u4e00\u63d0\u7684\u662f\uff0c\u5185\u68382\u7684\u8f93\u51fa\u5e76\u4e0d\u662f\u7ed9\u5b9a\u533a\u5757\u7684CCL\u95ee\u9898\u7684\u5b8c\u6574\u89e3\u51b3\u65b9\u6848\uff0c\u56e0\u4e3a\u5b83\u53ea\u5c06\u4e0d\u540c\u7684\u7b49\u4ef7\u6811\u5408\u5e76\u5728\u4e00\u8d77\uff0c\u4f46\u975e\u6839\u5143\u7d20\u4e0a\u7684\u6807\u7b7e\u4fdd\u6301\u4e0d\u53d8\u3002\u4f46\u662f\uff0c\u53ef\u4ee5\u4fdd\u8bc1\u5408\u5e76\u533a\u5757\u4e2d\u7684\u6bcf\u4e2a\u7b49\u4ef7\u6811\u4ee3\u8868\u6700\u5927\u53ef\u80fd\u7684\u8fde\u63a5\u7ec4\u4ef6\u3002\u8fd9\u79cd\u65b9\u6cd5\u7684\u4f18\u70b9\u662f\u6807\u7b7e\u4ec5\u5728\u76f8\u5bf9\u8f83\u5c11\u6570\u91cf\u7684\u5143\u7d20\u4e0a\u66f4\u65b0\uff0c\u5e76\u4e14\u5199\u5165\u5168\u5c40\u5b58\u50a8\u5668\u7684\u6570\u636e\u91cf\u901a\u5e38\u5f88\u5c0f\u3002\u7f3a\u70b9\u662f\uff0c\u5f53\u6211\u4eec\u5c06\u8d8a\u6765\u8d8a\u591a\u7684\u56fe\u5757\u5408\u5e76\u5728\u4e00\u8d77\u65f6\uff0c\u5408\u5e76\u56fe\u5757\u7684\u8fb9\u6846\u5143\u7d20\u4e0a\u7684\u7b49\u4ef7\u6811\u7684\u6df1\u5ea6\u53ef\u80fd\u4f1a\u663e\u7740\u589e\u52a0\uff0c\u4ece\u800c\u4f7f\u8054\u5408\u64cd\u4f5c\u53d8\u6162\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u4f7f\u7528\u5185\u68383\u4f7f\u7528FindRoot\u64cd\u4f5c\u5728\u533a\u5757\u4e4b\u95f4\u7684\u8fb9\u6846\u5143\u7d20\u4e0a\u5c55\u5e73\u7b49\u4ef7\u6811\uff08\u53c2\u89c1\u56fe4\uff09\u3002\u5185\u6838\u603b\u662f\u5728\u4e24\u4e2a\u8fde\u7eed\u7684\u5185\u68382\u8c03\u7528\u4e4b\u95f4\u6267\u884c\uff0c\u5982\u56fe6\u6240\u793a\u3002\u867d\u7136\u6211\u4eec\u7684\u65b9\u6cd5\u5373\u4f7f\u6ca1\u6709\u5185\u68383\u4e5f\u53ef\u4ee5\u5de5\u4f5c\uff0c\u4f46\u4f7f\u7528\u5b83\u7684\u89c2\u5bdf\u5230\u7684\u6027\u80fd\u63d0\u5347\u5927\u7ea6\u662f15-20\uff05\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["Source:\n",(0,t.jsx)(n.a,{href:"https://zhuanlan.zhihu.com/p/80177852",children:"https://zhuanlan.zhihu.com/p/80177852"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},8908:(e,n,c)=>{c.d(n,{A:()=>t});const t=c.p+"assets/images/ccl-cuda-01-5a428e28383358d98ca44c02c0164f34.png"},3191:(e,n,c)=>{c.d(n,{A:()=>t});const t=c.p+"assets/images/ccl-cuda-02-60395da541b8c74dbf74eef8bc035f14.png"},174:(e,n,c)=>{c.d(n,{A:()=>t});const t=c.p+"assets/images/ccl-cuda-03-145315a874c9c327c5eb5f45ba971d28.png"},6289:(e,n,c)=>{c.d(n,{A:()=>t});const t=c.p+"assets/images/ccl-cuda-04-e787e82253212cd476df20144a737856.png"},8024:(e,n,c)=>{c.d(n,{A:()=>t});const t=c.p+"assets/images/ccl-cuda-05-cf97d140ce4a50cadf092268df4c8ddd.png"},2515:(e,n,c)=>{c.d(n,{A:()=>t});const t=c.p+"assets/images/ccl-cuda-06-ee63b00785a28992f7a3fcb08a914bb3.png"},8453:(e,n,c)=>{c.d(n,{R:()=>s,x:()=>a});var t=c(6540);const i={},d=t.createContext(i);function s(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);