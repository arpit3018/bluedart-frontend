(this["webpackJsonpdart-front"]=this["webpackJsonpdart-front"]||[]).push([[2],{144:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),o=a(20),s=a.n(o),l=(a(28),a(12)),r=a(13),c=a(15),d=a(14),u=(a(77),a(3)),p=(a(29),a(30),a(31),a(32),a(66)),h=a(10),b=a(68),j=a(11),m=a(43),g=a(44),O=a(24),f=a(6),x=a(0),v=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(x.jsxs)("div",{id:"Form",children:[Object(x.jsx)("h3",{children:"Add a new item to the table:"}),Object(x.jsx)("form",{onSubmit:this.props.handleFormSubmit,children:Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"card",children:Object(x.jsxs)("div",{className:"p-grid p-fluid",children:[Object(x.jsx)("div",{className:"p-col-12 p-md-4",children:Object(x.jsxs)("div",{className:"p-inputgroup",children:[Object(x.jsx)("span",{className:"p-inputgroup-addon",children:Object(x.jsx)("i",{className:"pi pi-user"})}),Object(x.jsx)(h.InputText,{placeholder:"Bill Number",value:this.props.inputBillNo,name:"billno",onChange:this.props.handleInputChange,onBlur:this.props.handleScan})]})}),Object(x.jsx)("div",{className:"p-col-12 p-md-4",children:Object(x.jsxs)("div",{className:"p-inputgroup",children:[Object(x.jsx)("span",{className:"p-inputgroup-addon",children:Object(x.jsx)("i",{className:"pi pi-envelope"})}),Object(x.jsx)(h.InputText,{placeholder:"Category",value:this.props.inputCategory,disabled:!0,name:"category"})]})}),Object(x.jsx)("div",{className:"p-col-12 p-md-4",children:Object(x.jsxs)("div",{className:"p-inputgroup",children:[Object(x.jsx)("span",{className:"p-inputgroup-addon",children:Object(x.jsx)("i",{className:"pi pi-inbox"})}),Object(x.jsx)(h.InputText,{placeholder:"Weight",value:this.props.inputWeight,name:"weight",onChange:this.props.handleInputChange,required:!0})]})}),Object(x.jsx)("div",{className:"p-col-12 p-md-4",children:Object(x.jsxs)("div",{className:"p-inputgroup",children:[Object(x.jsx)("span",{className:"p-inputgroup-addon",children:Object(x.jsx)("i",{className:"pi pi-globe"})}),Object(x.jsx)(h.InputText,{placeholder:"Location",value:this.props.inputLocation,name:"location",onChange:this.props.handleInputChange,required:!0})]})}),Object(x.jsx)("div",{className:"p-col-12 p-md-4",children:Object(x.jsxs)("div",{className:"p-inputgroup",children:[Object(x.jsx)("span",{className:"p-inputgroup-addon",children:"Rs."}),Object(x.jsx)(h.InputText,{placeholder:"Price",value:this.props.inputPrice,name:"price",onChange:this.props.handleInputChange,required:!0})]})}),Object(x.jsx)("div",{className:"p-col-12 p-md-4",children:Object(x.jsxs)("div",{className:"p-inputgroup",children:[Object(x.jsx)("span",{className:"p-inputgroup-addon",children:Object(x.jsx)("i",{className:"pi pi-calendar"})}),Object(x.jsx)(O.Calendar,{dateFormat:"dd/mm/yy",placeholder:"Date",value:this.props.inputDate,onChange:this.props.handleDate})]})})]})}),Object(x.jsx)(f.Button,{label:"Add Item",value:"Submit"})]})})]})}}]),a}(i.a.Component),y=a(25),C=a(39),N=a(26),S=a(4),P=a(22),D=a(36),T=a(27),k=a(37),I=a(40),F=function(e){Object(c.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).emptyProduct={billno:null,category:null,weight:0,location:"",price:0,tdate:""},a.state={products:a.props.items,productDialog:!1,deleteProductDialog:!1,deleteProductsDialog:!1,product:a.emptyProduct,submitted:!1,globalFilter:null},a.cols=[{field:"billno",header:"Bill Number"},{field:"category",header:"Category"},{field:"weight",header:"Weight"},{field:"location",header:"Location"},{field:"price",header:"Price"},{field:"tdate",header:"Date"}],a.exportColumns=a.cols.map((function(e){return{title:e.header,dataKey:e.field}})),a.rightToolbarTemplate=a.rightToolbarTemplate.bind(Object(u.a)(a)),a.priceBodyTemplate=a.priceBodyTemplate.bind(Object(u.a)(a)),a.actionBodyTemplate=a.actionBodyTemplate.bind(Object(u.a)(a)),a.hideDialog=a.hideDialog.bind(Object(u.a)(a)),a.saveProduct=a.saveProduct.bind(Object(u.a)(a)),a.editProduct=a.editProduct.bind(Object(u.a)(a)),a.confirmDeleteProduct=a.confirmDeleteProduct.bind(Object(u.a)(a)),a.deleteProduct=a.deleteProduct.bind(Object(u.a)(a)),a.exportCSV=a.exportCSV.bind(Object(u.a)(a)),a.exportPdf=a.exportPdf.bind(Object(u.a)(a)),a.deleteSelectedProducts=a.deleteSelectedProducts.bind(Object(u.a)(a)),a.onCategoryChange=a.onCategoryChange.bind(Object(u.a)(a)),a.onInputChange=a.onInputChange.bind(Object(u.a)(a)),a.onInputNumberChange=a.onInputNumberChange.bind(Object(u.a)(a)),a.onInputDateChange=a.onInputDateChange.bind(Object(u.a)(a)),a.hideDeleteProductDialog=a.hideDeleteProductDialog.bind(Object(u.a)(a)),a.hideDeleteProductsDialog=a.hideDeleteProductsDialog.bind(Object(u.a)(a)),a}return Object(r.a)(n,[{key:"componentDidUpdate",value:function(e){e.items!==this.props.items&&this.setState({products:this.props.items})}},{key:"printjson",value:function(){var e=this;console.log(this.state.products);var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.state.products)};fetch("https://courier-manager.azurewebsites.net/save_data",t).then((function(e){return console.log(e.json())})).then((function(t){console.log(t),e.messages.show({severity:"success",summary:"Data Saved",detail:String("")}),localStorage.clear()}))}},{key:"formatCurrency",value:function(e){return e.toLocaleString("en-US",{style:"currency",currency:"INR"})}},{key:"hideDialog",value:function(){this.setState({submitted:!1,productDialog:!1})}},{key:"hideDeleteProductDialog",value:function(){this.setState({deleteProductDialog:!1})}},{key:"hideDeleteProductsDialog",value:function(){this.setState({deleteProductsDialog:!1})}},{key:"saveProduct",value:function(){var e={submitted:!0},t=Object(g.a)(this.state.products),a=Object(y.a)({},this.state.product);(console.log(a),this.state.product.billno)&&(t[this.findIndexById(this.state.product.billno)]=a,this.toast.show({severity:"success",summary:"Successful",detail:"Product Updated",life:3e3}),e=Object(y.a)(Object(y.a)({},e),{},{products:t,productDialog:!1,product:this.emptyProduct}),localStorage.setItem("items",JSON.stringify(t)));this.setState(e)}},{key:"editProduct",value:function(e){this.setState({product:Object(y.a)({},e),productDialog:!0})}},{key:"confirmDeleteProduct",value:function(e){this.setState({product:e,deleteProductDialog:!0})}},{key:"deleteProduct",value:function(){var e=this,t=this.state.products.filter((function(t){return t.billno!==e.state.product.billno}));this.setState({products:t,deleteProductDialog:!1,product:this.emptyProduct}),this.toast.show({severity:"success",summary:"Successful",detail:"Product Deleted",life:3e3}),localStorage.setItem("items",JSON.stringify(t))}},{key:"findIndexById",value:function(e){for(var t=-1,a=0;a<this.state.products.length;a++)if(this.state.products[a].billno===e){t=a;break}return t}},{key:"exportPdf",value:function(){var e=this;a.e(0).then(a.bind(null,264)).then((function(t){Promise.all([a.e(0),a.e(1)]).then(a.t.bind(null,522,7)).then((function(){var a=new t.default(0,0);a.autoTable(e.exportColumns,e.state.products),a.save("products.pdf")}))}))}},{key:"exportCSV",value:function(){this.dt.exportCSV()}},{key:"deleteSelectedProducts",value:function(){var e=this,t=this.state.products.filter((function(t){return!e.state.selectedProducts.includes(t)}));this.setState({products:t,deleteProductsDialog:!1,selectedProducts:null}),this.toast.show({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3})}},{key:"onCategoryChange",value:function(e){var t=Object(y.a)({},this.state.product);t.category=e.value,this.setState({product:t})}},{key:"onInputChange",value:function(e,t){console.log(e);var a=e.target&&e.target.value||"",n=Object(y.a)({},this.state.product);n["".concat(t)]=a,this.setState({product:n})}},{key:"onInputNumberChange",value:function(e,t){console.log(e);var a=e.value||0,n=Object(y.a)({},this.state.product);n["".concat(t)]=a,this.setState({product:n})}},{key:"onInputDateChange",value:function(e,t){var a=e.value||0,n=Object(y.a)({},this.state.product);n["".concat(t)]=this.formatDate(new Date(a)),this.setState({product:n})}},{key:"formatDate",value:function(e){return e.getFullYear()+"-"+String(Number(e.getMonth())+1)+"-"+e.getDate()}},{key:"rightToolbarTemplate",value:function(){var e=this;return Object(x.jsxs)(i.a.Fragment,{children:[Object(x.jsx)(P.Toast,{ref:function(t){return e.messages=t}}),Object(x.jsx)(f.Button,{label:"Submit",type:"button",onClick:this.printjson.bind(this),className:"p-button-primary p-mr-2"}),Object(x.jsx)(f.Button,{label:"Export PDF",type:"button",icon:"pi pi-file-pdf",onClick:this.exportPdf,className:"p-button-help p-mr-2","data-pr-tooltip":"PDF"}),Object(x.jsx)(f.Button,{label:"Export Excel",icon:"pi pi-upload",className:"p-button-success p-mr-2",onClick:this.exportCSV,"data-pr-tooltip":"PDF"})]})}},{key:"priceBodyTemplate",value:function(e){return this.formatCurrency(e.price)}},{key:"actionBodyTemplate",value:function(e){var t=this;return Object(x.jsxs)(i.a.Fragment,{children:[Object(x.jsx)(f.Button,{icon:"pi pi-pencil",className:"p-button-rounded p-button-success p-mr-2",onClick:function(){return t.editProduct(e)}}),Object(x.jsx)(f.Button,{icon:"pi pi-trash",className:"p-button-rounded p-button-warning",onClick:function(){return t.confirmDeleteProduct(e)}})]})}},{key:"render",value:function(){var e=this,t=Object(x.jsx)("div",{className:"table-header",children:Object(x.jsxs)("span",{className:"p-input-icon-left",children:[Object(x.jsx)("i",{className:"pi pi-search"}),Object(x.jsx)(h.InputText,{type:"search",onInput:function(t){return e.setState({globalFilter:t.target.value})},placeholder:"Search..."})]})}),a=Object(x.jsxs)(i.a.Fragment,{children:[Object(x.jsx)(f.Button,{label:"Cancel",icon:"pi pi-times",className:"p-button-text",onClick:this.hideDialog}),Object(x.jsx)(f.Button,{label:"Save",icon:"pi pi-check",className:"p-button-text",onClick:this.saveProduct})]}),n=Object(x.jsxs)(i.a.Fragment,{children:[Object(x.jsx)(f.Button,{label:"No",icon:"pi pi-times",className:"p-button-text",onClick:this.hideDeleteProductDialog}),Object(x.jsx)(f.Button,{label:"Yes",icon:"pi pi-check",className:"p-button-text",onClick:this.deleteProduct})]});i.a.Fragment,f.Button,this.hideDeleteProductsDialog,f.Button,this.deleteSelectedProducts;return Object(x.jsxs)("div",{className:"datatable-crud-demo",children:[Object(x.jsx)(P.Toast,{ref:function(t){return e.toast=t}}),Object(x.jsxs)("div",{className:"card",children:[Object(x.jsxs)(N.DataTable,{ref:function(t){return e.dt=t},value:this.state.products,dataKey:"id",paginator:!0,rows:10,rowsPerPageOptions:[5,10,25],paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",globalFilter:this.state.globalFilter,header:t,children:[Object(x.jsx)(S.Column,{field:"billno",header:"Bill Number",sortable:!0}),Object(x.jsx)(S.Column,{field:"category",header:"Category",sortable:!0}),Object(x.jsx)(S.Column,{field:"weight",header:"Weight",sortable:!0}),Object(x.jsx)(S.Column,{field:"location",header:"Location",sortable:!0}),Object(x.jsx)(S.Column,{field:"price",header:"Price",body:this.priceBodyTemplate,sortable:!0}),Object(x.jsx)(S.Column,{field:"tdate",header:"Date",sortable:!0}),Object(x.jsx)(S.Column,{body:this.actionBodyTemplate})]}),Object(x.jsx)(D.Toolbar,{className:"p-mb-4",right:this.rightToolbarTemplate})]}),Object(x.jsxs)(I.Dialog,{visible:this.state.productDialog,style:{width:"450px"},header:"Product Details",modal:!0,className:"p-fluid",footer:a,onHide:this.hideDialog,children:[Object(x.jsxs)("div",{className:"p-field",children:[Object(x.jsx)("label",{htmlFor:"billno",children:"Bill Number"}),Object(x.jsx)(h.InputText,{id:"billno",value:this.state.product.billno,onChange:function(t){return e.onInputChange(t,"billno")},required:!0,autoFocus:!0,className:Object(C.classNames)({"p-invalid":this.state.submitted&&!this.state.product.billno})}),this.state.submitted&&!this.state.product.billno&&Object(x.jsx)("small",{className:"p-error",children:"Bill Number is required."})]}),Object(x.jsxs)("div",{className:"p-field",children:[Object(x.jsx)("label",{className:"p-mb-3",children:"Category"}),Object(x.jsxs)("div",{className:"p-formgrid p-grid",children:[Object(x.jsxs)("div",{className:"p-field-radiobutton p-col-6",children:[Object(x.jsx)(T.RadioButton,{inputId:"category1",name:"category",value:"AS",onChange:this.onCategoryChange,checked:"AS"===this.state.product.category}),Object(x.jsx)("label",{htmlFor:"category1",children:"AS"})]}),Object(x.jsxs)("div",{className:"p-field-radiobutton p-col-6",children:[Object(x.jsx)(T.RadioButton,{inputId:"category2",name:"category",value:"ES",onChange:this.onCategoryChange,checked:"ES"===this.state.product.category}),Object(x.jsx)("label",{htmlFor:"category2",children:"ES"})]}),Object(x.jsxs)("div",{className:"p-field-radiobutton p-col-6",children:[Object(x.jsx)(T.RadioButton,{inputId:"category3",name:"category",value:"DS",onChange:this.onCategoryChange,checked:"DS"===this.state.product.category}),Object(x.jsx)("label",{htmlFor:"category3",children:"DS"})]})]})]}),Object(x.jsxs)("div",{className:"p-formgrid p-grid",children:[Object(x.jsxs)("div",{className:"p-field p-col",children:[Object(x.jsx)("label",{htmlFor:"weight",children:"Weight"}),Object(x.jsx)(k.InputNumber,{id:"weight",value:this.state.product.weight,onValueChange:function(t){return e.onInputNumberChange(t,"weight")}})]}),Object(x.jsxs)("div",{className:"p-field p-col",children:[Object(x.jsx)("label",{htmlFor:"location",children:"Location"}),Object(x.jsx)(h.InputText,{id:"location",value:this.state.product.location,onChange:function(t){return e.onInputChange(t,"location")}})]})]}),Object(x.jsxs)("div",{className:"p-formgrid p-grid",children:[Object(x.jsxs)("div",{className:"p-field p-col",children:[Object(x.jsx)("label",{htmlFor:"price",children:"Price"}),Object(x.jsx)(k.InputNumber,{id:"price",value:this.state.product.price,onValueChange:function(t){return e.onInputNumberChange(t,"price")},mode:"currency",currency:"INR",locale:"en-US"})]}),Object(x.jsxs)("div",{className:"p-field p-col",children:[Object(x.jsx)("label",{htmlFor:"tdate",children:"Date"}),Object(x.jsx)(O.Calendar,{id:"tdate",value:new Date(this.state.product.tdate),onChange:function(t){return e.onInputDateChange(t,"tdate")}})]})]})]}),Object(x.jsx)(I.Dialog,{visible:this.state.deleteProductDialog,style:{width:"450px"},header:"Confirm",modal:!0,footer:n,onHide:this.hideDeleteProductDialog,children:Object(x.jsxs)("div",{className:"confirmation-content",children:[Object(x.jsx)("i",{className:"pi pi-exclamation-triangle p-mr-3",style:{fontSize:"2rem"}}),this.state.product&&Object(x.jsxs)("span",{children:["Are you sure you want to delete entry will Bill Number",Object(x.jsx)("b",{children:this.state.product.billno}),"?"]})]})})]})}}]),n}(n.Component),B=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a),(e=t.call(this)).handleFormSubmit=function(t){t.preventDefault();var a=Object(g.a)(e.state.items);a.push({billno:e.state.billno,category:e.state.category,weight:e.state.weight,location:e.state.location,price:e.state.price,tdate:e.formatDate(new Date(e.state.tdate))}),e.setState({items:a,billno:"",category:"",weight:"",location:"",price:""},(function(){localStorage.setItem("items",JSON.stringify(e.state.items))})),console.log(e.state.items)},e.handleInputChange=function(t){var a=t.target,n=t.target.name,i=a.value;if("billno"==n){var o=i.substring(0,4);"1600"==o?e.setState({category:"DS"}):"5809"==o?e.setState({category:"AS"}):"5072"==o&&e.setState({category:"ES"})}e.setState(Object(m.a)({},n,i))},e.handleDate=function(t){console.log(t),console.log(t.target.value.toISOString());var a=t.target.value;console.log(e.formatDate(a)),e.setState({tdate:e.formatDate(a)})};var n=[];return null!=JSON.parse(localStorage.getItem("items"))&&(n=JSON.parse(localStorage.getItem("items"))),e.state={billno:"",category:"",weight:"",location:"",price:"",tdate:new Date,items:n,headers:[{label:"Bill Number",key:"billno"},{label:"Category",key:"category"},{label:"Weight",key:"weight"},{label:"Location",key:"location"},{label:"Price",key:"price"},{label:"Date",key:"tdate"}]},console.log(JSON.parse(localStorage.getItem("items"))),e.handleScan=e.handleScan.bind(Object(u.a)(e)),e}return Object(r.a)(a,[{key:"formatDate",value:function(e){return e.getFullYear()+"-"+String(Number(e.getMonth())+1)+"-"+e.getDate()}},{key:"handleScan",value:function(e){console.log(e);var t=this.state.billno;console.log(this.state),"1600"==t?this.setState({category:"DS"}):"5809"==t?this.setState({category:"AS"}):"5072"==t&&this.setState({category:"ES"})}},{key:"Greeting",value:function(){return 0==this.state.items.length?JSON.parse(localStorage.getItem("items")):this.state.items}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(v,{handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange,inputBillNo:this.state.billno,inputCategory:this.state.category,inputWeight:this.state.weight,inputLocation:this.state.location,inputPrice:this.state.price,inputDate:this.state.tdate,handleDate:this.handleDate,handleScan:this.handleScan}),Object(x.jsx)("br",{}),Object(x.jsx)(F,{items:this.Greeting()})]})}}]),a}(n.Component),w=a(45),E=a(67),A=(n.Component,a(119),a(122),a(124),function(e){Object(c.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).emptyProduct={billno:null,category:null,weight:0,location:"",price:0,tdate:""},a.state={products:a.props.dataFromParent,productDialog:!1,deleteProductDialog:!1,deleteProductsDialog:!1,product:a.emptyProduct,submitted:!1,globalFilter:null},a.cols=[{field:"CONSIGNMENT_NUMBER",header:"Bill Number"},{field:"CATEGORY",header:"Category"},{field:"PARCEL_WEIGHT",header:"Weight"},{field:"PLACE",header:"Location"},{field:"PARCEL_RATE",header:"Price"},{field:"BOOKING_DATE",header:"Date"}],a.exportColumns=a.cols.map((function(e){return{title:e.header,dataKey:e.field}})),a.rightToolbarTemplate=a.rightToolbarTemplate.bind(Object(u.a)(a)),a.priceBodyTemplate=a.priceBodyTemplate.bind(Object(u.a)(a)),a.exportCSV=a.exportCSV.bind(Object(u.a)(a)),a.exportPdf=a.exportPdf.bind(Object(u.a)(a)),a}return Object(r.a)(n,[{key:"findIndexById",value:function(e){for(var t=-1,a=0;a<this.state.products.length;a++)if(this.state.products[a].billno===e){t=a;break}return t}},{key:"exportPdf",value:function(){var e=this;a.e(0).then(a.bind(null,264)).then((function(t){Promise.all([a.e(0),a.e(1)]).then(a.t.bind(null,522,7)).then((function(){var a=new t.default(0,0);a.autoTable(e.exportColumns,JSON.parse(e.props.dataFromParent)),a.save("products.pdf")}))}))}},{key:"exportCSV",value:function(){this.dt.exportCSV()}},{key:"rightToolbarTemplate",value:function(){return Object(x.jsxs)(i.a.Fragment,{children:[Object(x.jsx)(f.Button,{label:"Export PDF",type:"button",icon:"pi pi-file-pdf",onClick:this.exportPdf,className:"p-button-help p-mr-2","data-pr-tooltip":"PDF"}),Object(x.jsx)(f.Button,{label:"Export Excel",icon:"pi pi-upload",className:"p-button-success p-mr-2",onClick:this.exportCSV,"data-pr-tooltip":"PDF"})]})}},{key:"priceBodyTemplate",value:function(e){return this.formatCurrency(e.price)}},{key:"render",value:function(){var e=this,t=Object(x.jsx)("div",{className:"table-header",children:Object(x.jsxs)("span",{className:"p-input-icon-left",children:[Object(x.jsx)("i",{className:"pi pi-search"}),Object(x.jsx)(h.InputText,{type:"search",onInput:function(t){return e.setState({globalFilter:t.target.value})},placeholder:"Search..."})]})});return Object(x.jsxs)("div",{className:"datatable-crud-demo",children:[Object(x.jsx)(P.Toast,{ref:function(t){return e.toast=t}}),Object(x.jsxs)("div",{className:"card",children:[Object(x.jsxs)(N.DataTable,{ref:function(t){return e.dt=t},value:JSON.parse(this.props.dataFromParent),dataKey:"id",paginator:!0,rows:10,rowsPerPageOptions:[5,10,25],paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",globalFilter:this.state.globalFilter,header:t,children:[Object(x.jsx)(S.Column,{field:"CONSIGNMENT_NUMBER",header:"Bill Number",sortable:!0}),Object(x.jsx)(S.Column,{field:"CATEGORY",header:"Category",sortable:!0}),Object(x.jsx)(S.Column,{field:"PARCEL_WEIGHT",header:"Weight",sortable:!0}),Object(x.jsx)(S.Column,{field:"PLACE",header:"Location",sortable:!0}),Object(x.jsx)(S.Column,{field:"PARCEL_RATE",header:"Price",sortable:!0}),Object(x.jsx)(S.Column,{field:"BOOKING_DATE",header:"Date",sortable:!0})]}),Object(x.jsx)(D.Toolbar,{className:"p-mb-4",right:this.rightToolbarTemplate})]})]})}}]),n}(n.Component)),R=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleMonthSubmit=function(t){t.preventDefault(),e.messages.show({severity:"success",summary:"Request Submitted Successfully For the Month ",detail:String(e.state.monthdate)});var a={month:e.state.monthdate},n={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(a)};fetch("https://courier-manager.azurewebsites.net/get_monthly_data",n).then((function(e){return e.json()})).then((function(t){e.setState({varll:t.data}),console.log(e.state.varll)}))},e.handleDaySubmit=function(t){t.preventDefault(),e.messages.show({severity:"success",summary:"Request Submitted Successfully For Date ",detail:String(e.state.daydate)});var a={month:e.state.daydate},n={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(a)};fetch("https://courier-manager.azurewebsites.net/get_daily_data",n).then((function(e){return e.json()})).then((function(t){e.setState({varll:t.data}),console.log(e.state.varll)}))},e.sendMonth=function(t){var a=t.target.value,n=a.getDate(),i=a.getMonth()+1,o=a.getFullYear()+"-"+i+"-"+n;e.state.monthdate=o},e.sendDay=function(t){var a=t.target.value,n=a.getDate(),i=a.getMonth()+1,o=a.getFullYear()+"-"+i+"-"+n;e.state.daydate=o},e.state={monthdate:"",daydate:"",varll:[],headers:[{label:"Bill Number",key:"CONSIGNMENT_NUMBER"},{label:"Bill Name",key:"CATEGORY"},{label:"Weight",key:"PARCEL_WEIGHT"},{label:"Location",key:"PLACE"},{label:"Price",key:"PARCEL_RATE"},{label:"Date",key:"BOOKING_DATE"}]},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return Object(x.jsx)("div",{children:Object(x.jsxs)("form",{children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{}),Object(x.jsx)("div",{className:"card",children:Object(x.jsxs)("div",{className:"p-grid p-fluid",children:[Object(x.jsx)("div",{className:"p-col-12 p-md-4",children:Object(x.jsxs)("div",{className:"p-inputgroup",children:[Object(x.jsx)("span",{className:"p-inputgroup-addon",children:Object(x.jsx)("i",{className:"pi pi-calendar"})}),Object(x.jsx)(O.Calendar,{value:this.state.daydate,onChange:function(t){return e.sendMonth(t)},view:"month",dateFormat:"MM-yy"})]})}),Object(x.jsx)("div",{className:"p-col-12 p-md-4",children:Object(x.jsx)("div",{className:"p-inputgroup",children:Object(x.jsx)(f.Button,{label:"Get Monthly",value:"Submit",onClick:function(t){e.handleMonthSubmit(t)}})})})]})}),Object(x.jsx)("div",{className:"card",children:Object(x.jsxs)("div",{className:"p-grid p-fluid",children:[Object(x.jsx)("div",{className:"p-col-12 p-md-4",children:Object(x.jsxs)("div",{className:"p-inputgroup",children:[Object(x.jsx)("span",{className:"p-inputgroup-addon",children:Object(x.jsx)("i",{className:"pi pi-calendar"})}),Object(x.jsx)(O.Calendar,{value:this.state.daydate,onChange:function(t){return e.sendDay(t)}})]})}),Object(x.jsx)("div",{className:"p-col-12 p-md-4",children:Object(x.jsx)("div",{className:"p-inputgroup",children:Object(x.jsx)(f.Button,{label:"Get By Date",value:"Submit",onClick:function(t){e.handleDaySubmit(t)}})})})]})})]}),Object(x.jsx)(P.Toast,{ref:function(t){return e.messages=t}}),Object(x.jsx)(A,{dataFromParent:JSON.stringify(this.state.varll)})]})})}}]),a}(n.Component),L=function(e){Object(c.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).emptyProduct={billno:null,category:null,weight:0,location:"",price:0,tdate:""},a.state={products:a.props.dataFromParent,productDialog:!1,deleteProductDialog:!1,deleteProductsDialog:!1,product:a.emptyProduct,submitted:!1,globalFilter:null},a.cols=[{field:"CONSIGNMENT_NUMBER",header:"Bill Number"},{field:"CATEGORY",header:"Category"},{field:"PARCEL_WEIGHT",header:"Weight"},{field:"PLACE",header:"Location"},{field:"PARCEL_RATE",header:"Price"},{field:"BOOKING_DATE",header:"Date"}],a.exportColumns=a.cols.map((function(e){return{title:e.header,dataKey:e.field}})),a.rightToolbarTemplate=a.rightToolbarTemplate.bind(Object(u.a)(a)),a.priceBodyTemplate=a.priceBodyTemplate.bind(Object(u.a)(a)),a.exportCSV=a.exportCSV.bind(Object(u.a)(a)),a.exportPdf=a.exportPdf.bind(Object(u.a)(a)),a}return Object(r.a)(n,[{key:"findIndexById",value:function(e){for(var t=-1,a=0;a<this.state.products.length;a++)if(this.state.products[a].billno===e){t=a;break}return t}},{key:"exportPdf",value:function(){var e=this;a.e(0).then(a.bind(null,264)).then((function(t){Promise.all([a.e(0),a.e(1)]).then(a.t.bind(null,522,7)).then((function(){var a=new t.default(0,0);a.autoTable(e.exportColumns,JSON.parse(e.props.dataFromParent)),a.save("products.pdf")}))}))}},{key:"exportCSV",value:function(){this.dt.exportCSV()}},{key:"rightToolbarTemplate",value:function(){return Object(x.jsxs)(i.a.Fragment,{children:[Object(x.jsx)(f.Button,{label:"Export PDF",type:"button",icon:"pi pi-file-pdf",onClick:this.exportPdf,className:"p-button-help p-mr-2","data-pr-tooltip":"PDF"}),Object(x.jsx)(f.Button,{label:"Export Excel",icon:"pi pi-upload",className:"p-button-success p-mr-2",onClick:this.exportCSV,"data-pr-tooltip":"PDF"})]})}},{key:"priceBodyTemplate",value:function(e){return this.formatCurrency(e.price)}},{key:"render",value:function(){var e=this,t=Object(x.jsx)("div",{className:"table-header",children:Object(x.jsxs)("span",{className:"p-input-icon-left",children:[Object(x.jsx)("i",{className:"pi pi-search"}),Object(x.jsx)(h.InputText,{type:"search",onInput:function(t){return e.setState({globalFilter:t.target.value})},placeholder:"Search..."})]})});return Object(x.jsxs)("div",{className:"datatable-crud-demo",children:[Object(x.jsx)(P.Toast,{ref:function(t){return e.toast=t}}),Object(x.jsxs)("div",{className:"card",children:[Object(x.jsxs)(N.DataTable,{ref:function(t){return e.dt=t},value:JSON.parse(this.props.dataFromParent),dataKey:"id",paginator:!0,rows:10,rowsPerPageOptions:[5,10,25],paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",globalFilter:this.state.globalFilter,header:t,children:[Object(x.jsx)(S.Column,{field:"CAWBNO",header:"Bill Number",sortable:!0}),Object(x.jsx)(S.Column,{field:"CPRODCODE",header:"Category",sortable:!0}),Object(x.jsx)(S.Column,{field:"NACTWGT",header:"Actual Weight",sortable:!0}),Object(x.jsx)(S.Column,{field:"NCHRGWT",header:"Charge Weight",sortable:!0}),Object(x.jsx)(S.Column,{field:"NTOTALAMT",header:"Amount",sortable:!0}),Object(x.jsx)(S.Column,{field:"BOOKING_DATE",header:"MHS Date",sortable:!0}),Object(x.jsx)(S.Column,{field:"PARCEL_RATE",header:"MHS Amount",sortable:!0}),Object(x.jsx)(S.Column,{field:"PLACE",header:"MHS Place",sortable:!0}),Object(x.jsx)(S.Column,{field:"PARCEL_WEIGHT",header:"MHS Weight",sortable:!0}),Object(x.jsx)(S.Column,{field:"Profit",header:"MHS Profit",sortable:!0})]}),Object(x.jsx)(D.Toolbar,{className:"p-mb-4",right:this.rightToolbarTemplate})]})]})}}]),n}(n.Component),M=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).sendMonth=function(e){n.state.date10=e.target.value,console.log(n.state.date10)},n.sendFile=function(e){console.log(e.target.files[0]),n.state.fileNa=e.target.files[0]},n.handleFormSubmit=function(e){e.preventDefault();var t=new FormData;t.append("file",n.state.fileNa),t.append("month",n.state.date10),fetch("https://courier-manager.azurewebsites.net/uploader",{method:"POST",body:t}).then((function(e){return e.json()})).then((function(e){console.log(e),n.setState({varll:e.data}),console.log(n.state.varll)}))},n.state={date10:"",fileNa:"",varll:""},n}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{}),Object(x.jsxs)("div",{className:"p-formgroup-inline",children:[Object(x.jsx)("div",{className:"p-field",children:Object(x.jsx)(h.InputText,{id:"lastname5",type:"file",placeholder:"Final Bill",onChange:function(t){return e.sendFile(t)}})}),Object(x.jsx)(f.Button,{type:"button",label:"Submit",onClick:this.handleFormSubmit})]}),Object(x.jsx)(L,{dataFromParent:JSON.stringify(this.state.varll)})]})}}]),a}(n.Component),G=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleQuery=function(e){var t=e.target.value;n.setState({query:t})},n.state={query:"",result:[],filteredResult:[],productDialog:!1},n.items=[{label:"Home",icon:"pi pi-fw pi-home",command:function(){window.location.hash="/home"}},{label:"Month",icon:"pi pi-fw pi-calendar",command:function(){window.location.hash="/month"}},{label:"Analytics",icon:"pi pi-fw pi-cog",command:function(){window.location.hash="/upload"}}],n.hideDialog=n.hideDialog.bind(Object(u.a)(n)),n.getData=n.getData.bind(Object(u.a)(n)),n}return Object(r.a)(a,[{key:"getData",value:function(){var e=this;console.log(this.state.query);var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.state.query)};fetch("https://courier-manager.azurewebsites.net/search_data",t).then((function(e){return e.json()})).then((function(t){null!=t.data[0]?e.setState({result:t.data[0],productDialog:!0}):e.toast.show({severity:"error",summary:"Not Found",detail:"Product Updated",life:3e3}),console.log(e.state.result)}))}},{key:"hideDialog",value:function(){this.setState({submitted:!1,productDialog:!1})}},{key:"render",value:function(){var e=this;P.Toast;var t=Object(x.jsxs)("div",{children:[Object(x.jsx)(h.InputText,{placeholder:"Search",value:this.state.query,onChange:this.handleQuery,type:"text"}),Object(x.jsx)(f.Button,{icon:"pi pi-search",className:"p-button-primary",onClick:this.getData})]});return Object(x.jsxs)("div",{children:[Object(x.jsx)(P.Toast,{ref:function(t){return e.toast=t}}),Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)(p.Menubar,{model:this.items,end:t}),Object(x.jsx)(b.a,{basename:"/bluedart-frontend",children:Object(x.jsxs)("div",{children:[Object(x.jsx)(j.b,{exact:!0,path:"/",render:function(){return Object(x.jsx)(j.a,{to:"/home"})}}),Object(x.jsx)(j.b,{path:"/home",component:B}),Object(x.jsx)(j.b,{path:"/month",component:R}),Object(x.jsx)(j.b,{path:"/upload",component:M}),Object(x.jsx)(j.b,{path:"/search",component:F})]})})]}),Object(x.jsxs)(I.Dialog,{visible:this.state.productDialog,style:{width:"450px"},header:"Product Details",modal:!0,className:"p-fluid",onHide:this.hideDialog,children:[Object(x.jsxs)("div",{className:"p-field",children:[Object(x.jsx)("label",{htmlFor:"billno",children:"Bill Number"}),Object(x.jsx)(h.InputText,{id:"CONSIGNMENT_NUMBER",disabled:!0,value:this.state.result.CONSIGNMENT_NUMBER,required:!0,autoFocus:!0})]}),Object(x.jsxs)("div",{className:"p-field",children:[Object(x.jsx)("label",{className:"p-mb-3",children:"Category"}),Object(x.jsxs)("div",{className:"p-formgrid p-grid",children:[Object(x.jsxs)("div",{className:"p-field-radiobutton p-col-6",children:[Object(x.jsx)(T.RadioButton,{disabled:!0,inputId:"category1",name:"category",value:"AS",onChange:this.onCategoryChange,checked:"AS"===this.state.result.CATEGORY}),Object(x.jsx)("label",{htmlFor:"category1",children:"AS"})]}),Object(x.jsxs)("div",{className:"p-field-radiobutton p-col-6",children:[Object(x.jsx)(T.RadioButton,{disabled:!0,inputId:"category2",name:"category",value:"ES",onChange:this.onCategoryChange,checked:"ES"===this.state.result.CATEGORY}),Object(x.jsx)("label",{htmlFor:"category2",children:"ES"})]}),Object(x.jsxs)("div",{className:"p-field-radiobutton p-col-6",children:[Object(x.jsx)(T.RadioButton,{disabled:!0,inputId:"category3",name:"category",value:"DS",onChange:this.onCategoryChange,checked:"DS"===this.state.result.CATEGORY}),Object(x.jsx)("label",{htmlFor:"category3",children:"DS"})]})]})]}),Object(x.jsxs)("div",{className:"p-formgrid p-grid",children:[Object(x.jsxs)("div",{className:"p-field p-col",children:[Object(x.jsx)("label",{htmlFor:"weight",children:"Weight"}),Object(x.jsx)(k.InputNumber,{id:"weight",disabled:!0,value:this.state.result.PARCEL_WEIGHT,onValueChange:function(t){return e.onInputNumberChange(t,"weight")}})]}),Object(x.jsxs)("div",{className:"p-field p-col",children:[Object(x.jsx)("label",{htmlFor:"location",children:"Location"}),Object(x.jsx)(h.InputText,{id:"location",disabled:!0,value:this.state.result.PLACE,onChange:function(t){return e.onInputChange(t,"location")}})]})]}),Object(x.jsxs)("div",{className:"p-formgrid p-grid",children:[Object(x.jsxs)("div",{className:"p-field p-col",children:[Object(x.jsx)("label",{htmlFor:"price",children:"Price"}),Object(x.jsx)(k.InputNumber,{id:"price",disabled:!0,value:this.state.result.PARCEL_RATE,onValueChange:function(t){return e.onInputNumberChange(t,"price")},mode:"currency",currency:"INR",locale:"en-US"})]}),Object(x.jsxs)("div",{className:"p-field p-col",children:[Object(x.jsx)("label",{htmlFor:"tdate",children:"Date"}),Object(x.jsx)(O.Calendar,{id:"tdate",disabled:!0,value:new Date(this.state.result.BOOKING_DATE),onValueChange:function(t){return e.onInputNumberChange(t,"tdate")}})]})]})]})]})}}]),a}(n.Component),_=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(x.jsx)(G,{})}}]),a}(n.Component),W=function(e){e&&e instanceof Function&&a.e(8).then(a.bind(null,523)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,o=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),o(e),s(e)}))};s.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(_,{})}),document.getElementById("root")),W()},28:function(e,t,a){},77:function(e,t,a){}},[[144,3,5]]]);
//# sourceMappingURL=main.3c233b5f.chunk.js.map