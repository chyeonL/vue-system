"use strict";(self["webpackChunkvue_system"]=self["webpackChunkvue_system"]||[]).push([[284],{7428:function(t,e,s){s.r(e),s.d(e,{default:function(){return T}});var o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"showGoods"}},[e("header",[e("el-input",{attrs:{placeholder:"输入关键字进行搜索……"},on:{change:t.goSearch},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),e("el-button",{attrs:{type:"primary",icon:"el-icon-search"}},[t._v(t._s(t.$t("content.search")))]),e("el-button",{attrs:{type:"primary"},on:{click:t.addPage}},[t._v(t._s(t.$t("content.page")))]),e("el-button",{attrs:{type:"primary"},on:{click:t.addDialog}},[t._v(t._s(t.$t("content.dialog")))])],1),e("Dialog"),e("main",[e("el-table",{attrs:{data:t.goodsList,border:"",height:"420",align:"center","header-align":"center"}},[e("el-table-column",{attrs:{type:"selection"}}),e("el-table-column",{attrs:{label:"商品ID",prop:"id",width:"70"}}),e("el-table-column",{attrs:{label:"商品名称",prop:"name"}}),e("el-table-column",{attrs:{label:"商品价格",prop:"price"}}),e("el-table-column",{attrs:{label:"商品数量",prop:"num"}}),e("el-table-column",{attrs:{label:"规格类目",prop:"category",width:"100"}}),e("el-table-column",{attrs:{label:"商品图片",prop:"imgUrl",width:"100"}}),e("el-table-column",{attrs:{label:"商品卖点",prop:"sellPoint",width:"100"}}),e("el-table-column",{attrs:{label:"商品描述",prop:"desc",width:"130"}}),e("el-table-column",{attrs:{label:"商品操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.handleEdit(s.$index,s.row)}}},[t._v(t._s(t.$t("content.edit")))]),e("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(e){return t.handleDelete(s.$index,s.row)}}},[t._v(t._s(t.$t("content.delete")))])]}}])})],1)],1),e("div",{staticClass:"toolbar"},[e("Excel",{attrs:{formTitle:"所有商品",field:t.json_fields,formData:t.allData,name:"商品信息"}}),e("TXT",{attrs:{txtHeadTitle:t.txtHeadTitle,name:"所有商品",txtData:t.allData}}),e("el-button",{attrs:{type:"success"},on:{click:t.pdf}},[t._v("导出为pdf文件")]),e("PDF")],1),e("Pagination",{attrs:{total:t.total,pageSize:t.pageSize,currentPage:t.currentPage},on:{changePageNo:t.changePageNo,changePageSize:t.changePageSize}})],1)},a=[],i=(s(7658),s(8855)),l=function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{title:"add"==t.type?"商品添加":"商品编辑",visible:t.dialogFormVisible,center:"",width:"70%"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[e("el-form",{ref:"goodsForm",attrs:{model:t.goodsForm,rules:t.rules,"label-width":"80px"}},[e("el-form-item",{attrs:{label:"类目选择",prop:"category"}},[e("el-button",{attrs:{type:"primary"},on:{click:function(e){t.innerVisible=!0}}},[t._v("选择类别")]),t._v(" "+t._s(t.goodsForm.category)+" ")],1),e("el-form-item",{attrs:{label:"商品名称",prop:"name"}},[e("el-input",{model:{value:t.goodsForm.name,callback:function(e){t.$set(t.goodsForm,"name",e)},expression:"goodsForm.name"}})],1),e("el-form-item",{attrs:{label:"商品价格",prop:"price"}},[e("el-input",{model:{value:t.goodsForm.price,callback:function(e){t.$set(t.goodsForm,"price",e)},expression:"goodsForm.price"}})],1),e("el-form-item",{attrs:{label:"商品数量",prop:"num"}},[e("el-input",{model:{value:t.goodsForm.num,callback:function(e){t.$set(t.goodsForm,"num",e)},expression:"goodsForm.num"}})],1),e("el-form-item",{attrs:{label:"发布时间"}},[e("el-col",{attrs:{span:11}},[e("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期",prop:"date1"},model:{value:t.goodsForm.date1,callback:function(e){t.$set(t.goodsForm,"date1",e)},expression:"goodsForm.date1"}})],1),e("el-col",{staticClass:"line",staticStyle:{"text-align":"center"},attrs:{span:2}},[t._v("-")]),e("el-col",{attrs:{span:11}},[e("el-time-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择时间",prop:"date2"},model:{value:t.goodsForm.date2,callback:function(e){t.$set(t.goodsForm,"date2",e)},expression:"goodsForm.date2"}})],1)],1),e("el-form-item",{attrs:{label:"商品卖点",prop:"sellPoint"}},[e("el-input",{model:{value:t.goodsForm.sellPoint,callback:function(e){t.$set(t.goodsForm,"sellPoint",e)},expression:"goodsForm.sellPoint"}})],1),e("el-form-item",{staticClass:"imgItem",attrs:{label:"商品图片",prop:"imgUrl"}},[e("el-button",{attrs:{type:"primary"},on:{click:function(e){t.innerIMGVisible=!0}}},[t._v(" 上传图片 "),e("i",{staticClass:"el-icon-upload el-icon--right"})]),e("img",{staticClass:"imgUpload",attrs:{src:t.goodsForm.imgUrl}})],1),e("el-form-item",{attrs:{label:"商品描述",prop:"desc"}},[e("WangEditor",{ref:"desc",attrs:{desc:t.goodsForm.desc}})],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){return t.resetForm()}}},[t._v("重置 ")]),e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm()}}},[t._v("确 定")])],1),e("el-dialog",{attrs:{width:"30%",title:"类目选择",visible:t.innerVisible,"append-to-body":""},on:{"update:visible":function(e){t.innerVisible=e}}},[e("Tree"),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.innerVisible=!1}}},[t._v("取消 ")]),e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.chooseCategory()}}},[t._v("确 定")])],1)],1),e("el-dialog",{attrs:{width:"30%",title:"上传图片",visible:t.innerIMGVisible,"append-to-body":""},on:{"update:visible":function(e){t.innerIMGVisible=e}}},[e("Upload"),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.innerIMGVisible=!1}}},[t._v("取消")]),e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.uploadIMG()}}},[t._v("确 定")])],1)],1)],1)},r=[],n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tree"},[e("el-tree",{attrs:{props:t.props,load:t.loadNode,lazy:"",accordion:""},on:{"node-click":t.getCategory}})],1)},d=[],c={name:"Tree",data(){return{props:{label:"name",children:"zones",isLeaf:"leaf"}}},methods:{async loadNode(t,e){0===t.level&&await this.$api.getItemCategoryById().then((t=>{if(200==t.code)return e(t.data)})).catch((t=>(console.log(t),e([])))),t.level>=1&&await this.$api.getItemCategoryById({id:t.data.cid}).then((t=>{if(200==t.code)return e(t.data)})).catch((t=>(console.log(t),e([])))),t.childNodes.length<1&&(t.loading=!1,t.isLeaf=!0)},getCategory(t,e,s){this.$bus.$emit("getCategory",t)}}},g=c,m=s(1001),p=(0,m.Z)(g,n,d,!1,null,null,null),u=p.exports,h=function(){var t=this,e=t._self._c;return e("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:t.url,"on-remove":t.handleRemove,"on-success":t.handleSuccess,"file-list":t.fileList,"auto-upload":!1}},[e("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("选取文件")]),e("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"},on:{click:t.submitUpload}},[t._v("上传到服务器")]),e("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v(" 只能上传jpg/png文件，且不超过500kb ")])],1)},b=[],f={name:"upload",data(){return{fileList:[],url:"http://localhost:80/api/upload"}},methods:{submitUpload(){this.$refs.upload.submit()},handleSuccess(t,e,s){let o="http://localhost:80/"+t.url.slice(7);this.$message({showClose:!0,message:"图片上传成功",type:"success"}),this.$bus.$emit("getImgURL",o)}}},y=f,F=(0,m.Z)(y,h,b,!1,null,null,null),v=F.exports,$=s(3468),_={name:"Dialog",components:{Tree:u,Upload:v,WangEditor:$.Z},data(){return{dialogFormVisible:!1,innerVisible:!1,innerIMGVisible:!1,TreeData:{},img:"",type:"add",goodsForm:{id:-1,cid:"",name:"",desc:"",price:10,num:10,imgUrl:"",category:"",sellPoint:"",date1:"",date2:""},rules:{name:[{required:!0,message:"请输入商品名称",trigger:"blur"},{min:3,max:15,message:"长度不少于 3 个字符",trigger:"blur"}],price:[{required:!0,message:"请输入商品价格",trigger:"change"}],num:[{required:!0,message:"请输入商品数量",trigger:"change"}]}}},mounted(){this.$bus.$on("openDialog",((t,e={})=>{this.dialogFormVisible=!this.dialogFormVisible,this.type=t,"edit"==this.type&&(this.goodsForm=e)})),this.$bus.$on("getCategory",(t=>{this.TreeData=t})),this.$bus.$on("getImgURL",(t=>{this.img=t}))},methods:{handleClose(t){this.$confirm("确认关闭？").then((()=>{this.resetForm()})).catch((()=>{}))},chooseCategory(){this.innerVisible=!1,this.goodsForm.category=this.TreeData.name,this.goodsForm.cid=this.TreeData.cid},uploadIMG(){this.innerIMGVisible=!1,this.goodsForm.imgUrl=this.img},submitForm(){this.goodsForm.desc=this.$refs.desc.editor.txt.text(),this.$refs["goodsForm"].validate((async t=>{if(!t)return this.$message({showClose:!0,message:"请按要求输入",type:"error"}),!1;console.log(this.goodsForm),"add"==this.type?await this.$api.addGoods(this.goodsForm).then((t=>{console.log(t),t.success&&(this.$message({type:"success",message:"添加商品成功"}),this.dialogFormVisible=!1,this.$parent.getData(),this.resetForm())})):await this.$api.updateGoods({id:this.goodsForm.id,goodsForm:this.goodsForm}).then((t=>{console.log(t),t.success&&(this.$message({type:"success",message:"编辑成功"}),this.dialogFormVisible=!1,this.$parent.getData(),this.resetForm(),this.type="add")}))}))},resetForm(){this.goodsForm={cid:"",name:"",desc:"",price:10,num:10,imgUrl:"",category:"",sellPoint:"",date1:"",date2:""},this.$bus.$emit("clear")}}},k=_,w=(0,m.Z)(k,l,r,!1,null,"7a12c746",null),D=w.exports,P=s(1659),x=s(7758),C=s(6737),I={name:"ShowGoods",components:{Pagination:i.Z,Dialog:D,Excel:P.Z,TXT:x.Z,PDF:C.Z},data(){return{keyword:"",goodsList:[],total:0,pageSize:1,pageNo:1,type:"all",searchList:[],currentPage:1,allData:[],json_fields:{"商品ID":"id","商品名称":"name","商品价格":"price","商品数量":"num","规格类目":"category","商品图片":"imgUrl","商品卖点":"sellPoint","商品描述":"desc"}}},created(){this.getData()},computed:{txtHeadTitle(){return Object.keys(this.json_fields).join(" ")}},methods:{async getData(t=1,e=4){await this.$api.getAllGoods(t,e).then((t=>{this.goodsList=t.data,this.total=t.total,this.pageSize=parseInt(t.pageSize),this.pageNo=parseInt(t.pageNo),this.currentPage=this.pageNo,this.type="all",this.allData=t.allData}))},changePageNo(t,e){this.currentPage=t,"all"==this.type?this.getData(t,e):this.goodsList=this.searchList.slice((t-1)*e,t*e)},changePageSize(t,e){this.currentPage=1,"all"==this.type?this.getData(e,t):this.goodsList=this.searchList.slice((e-1)*t,e*t)},async goSearch(){this.keyword.trim()?await this.$api.searchGoods({searchParams:this.keyword.trim()}).then((t=>{200==t.code?(this.searchList=t.data,this.total=t.total,this.type="search",this.changePageNo(1,4)):(this.type="all",this.total=0,this.pageNo=1,this.goodsList=[])})):this.getData(1,this.pageSize)},addPage(){this.$router.push({name:"addGoodsbyPage"})},addDialog(){this.$bus.$emit("openDialog","add")},handleEdit(t,e){this.$bus.$emit("openDialog","edit",e)},handleDelete(t,e){this.$confirm("确定删除该商品吗?","删除商品",{confirmButtonText:"确定",cancelButtonText:"取消",center:!0}).then((async()=>{let t=await this.$api.deleteGoods(e.id);t.success&&(this.$message({type:"success",message:"删除成功!"}),this.getData())})).catch((()=>{}))},pdf(){this.$bus.$emit("pdf")}}},S=I,V=(0,m.Z)(S,o,a,!1,null,"61a72280",null),T=V.exports}}]);