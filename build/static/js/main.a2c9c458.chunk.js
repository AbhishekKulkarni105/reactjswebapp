(this.webpackJsonpkafene=this.webpackJsonpkafene||[]).push([[0],{18:function(e,t,a){e.exports={Topbar:"Topbar_Topbar__2n-0W",LeftMenu:"Topbar_LeftMenu__1Q1vk",LogoWrapper:"Topbar_LogoWrapper__1a4d0",BrandName:"Topbar_BrandName__2AMQY",MenuItems:"Topbar_MenuItems__1Kl4X",Active:"Topbar_Active__2mgtE"}},20:function(e,t,a){e.exports={MainItem:"Products_MainItem__2WdM5",Items:"Products_Items__U3wzy"}},22:function(e,t,a){e.exports={MainItem:"Order_MainItem__31U6p",Items:"Order_Items__2YLuA"}},23:function(e,t,a){e.exports={MainPage:"LogIn_MainPage__heyK2",Login:"LogIn_Login__2tGh4",InputField:"LogIn_InputField__nus5C",Button:"LogIn_Button__1chEc"}},25:function(e,t,a){e.exports={App:"App_App__3i_fA","App-logo":"App_App-logo__3yDB1","App-logo-spin":"App_App-logo-spin__2SAa_","App-header":"App_App-header__Ohf3-","App-link":"App_App-link__3y-1c"}},30:function(e,t,a){e.exports={MainHeading:"OrderDetail_MainHeading__PBHCP"}},32:function(e,t,a){e.exports={MainHeading:"ProductDetail_MainHeading__3MCWK"}},49:function(e,t,a){},5:function(e,t,a){e.exports={PageWrapper:"OrderListing_PageWrapper__18yt2",MainHeading:"OrderListing_MainHeading__2o9z4",OrdersWrapper:"OrderListing_OrdersWrapper__2nUJw",FilterWrapper:"OrderListing_FilterWrapper__1_aRZ",FilterOptions:"OrderListing_FilterOptions__2Ys5p",FilterCheckbox:"OrderListing_FilterCheckbox__3UhYa",OrderTable:"OrderListing_OrderTable__qU_SR",TableRow:"OrderListing_TableRow__1iYZA",PrimaryText:"OrderListing_PrimaryText__39-_J",SecondaryText:"OrderListing_SecondaryText__2XEbG"}},6:function(e,t,a){e.exports={PageWrapper:"Product_PageWrapper__KEQ4G",MainHeading:"Product_MainHeading__bcfov",OrdersWrapper:"Product_OrdersWrapper__20HIT",FilterWrapper:"Product_FilterWrapper__DqXuV",FilterOptions:"Product_FilterOptions__3texq",FilterCheckbox:"Product_FilterCheckbox__3bxZ5",OrderTable:"Product_OrderTable__H-T66",TableRow:"Product_TableRow__2iOIl",ExpiredRow:"Product_ExpiredRow__2zf2I",PrimaryText:"Product_PrimaryText__7MFPg",SecondaryText:"Product_SecondaryText__7PclW"}},7:function(e,t,a){e.exports={PageWrapper:"User_PageWrapper__2RrWB",MainHeading:"User_MainHeading__3imDi",OrdersWrapper:"User_OrdersWrapper__2QUF9",FilterWrapper:"User_FilterWrapper__1vCcY",FilterOptions:"User_FilterOptions__DivVa",FilterCheckbox:"User_FilterCheckbox__2Gve5",OrderTable:"User_OrderTable__2P9P9",TableRow:"User_TableRow__3cfMZ",PrimaryText:"User_PrimaryText__ZvTSO",SecondaryText:"User_SecondaryText__3yWXB",SearchBox:"User_SearchBox__3eZxR",Button:"User_Button__3ZVUT"}},73:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a(2),s=a.n(c),n=a(42),i=a.n(n),o=(a(49),a(9)),d=a(10),l=a(12),u=a(11),j=a(25),b=a.n(j),h=a(18),O=a.n(h),p=a(3),x=a(19),m={HOME_PAGE:"/",ORDER_LIST:"/orders",ORDER_DETAIL:"/orderdetail",PRODUCT_LIST:"/products",PRODUCT_DETAIL:"/productdetail",USER_LIST:"/users",LOGIN_PAGE:"/login"};Object.freeze(m);var f=function(e){var t=Object(p.g)().pathname;return Object(r.jsxs)("div",{className:O.a.Topbar,children:[Object(r.jsxs)("div",{className:O.a.LeftMenu,children:[Object(r.jsxs)("div",{className:O.a.LogoWrapper,children:[Object(r.jsx)("img",{src:"https://edu-web-fundamentals.web.app/static/media/logo.58169365.png",alt:"Logo"}),Object(r.jsx)("p",{className:O.a.BrandName,children:"Kafene"})]}),Object(r.jsxs)("nav",{children:[Object(r.jsx)(x.b,{className:[O.a.MenuItems,t.includes("orders")?O.a.Active:null].join(" "),to:m.HOME_PAGE,children:"Orders"}),Object(r.jsx)(x.b,{className:[O.a.MenuItems,t.includes("products")?O.a.Active:null].join(" "),to:m.PRODUCT_LIST,children:"Products"}),Object(r.jsx)(x.b,{className:[O.a.MenuItems,t.includes("users")?O.a.Active:null].join(" "),to:m.USER_LIST,children:"Users"})]})]}),e.loginStatus?Object(r.jsx)(x.b,{className:O.a.MenuItems,onClick:e.onUserLoggedOut,children:"Logout"}):null]})},g=a(8),_=a(1),S=a(13),k=a.n(S),w=a(5),y=a.n(w),L=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={orderList:[],filteredList:[],showNew:!0,showPacked:!0,showInTransit:!0,showDelivered:!0},e.renderTableRow=function(e){var t=e.orderDate.split("-")[0],a=e.orderDate.split("-")[1],c=e.orderDate.split("-")[2];return Object(r.jsxs)("tr",{className:y.a.TableRow,children:[Object(r.jsx)("td",{className:y.a.SecondaryText,children:e.id}),Object(r.jsx)("td",{className:y.a.PrimaryText,children:e.customerName}),Object(r.jsxs)("td",{className:y.a.PrimaryText,children:["".concat(t," ").concat(a,", ").concat(c)," ",Object(r.jsx)("br",{}),Object(r.jsx)("span",{className:y.a.SecondaryText,children:e.orderTime})]}),Object(r.jsx)("td",{className:y.a.SecondaryText,children:"$".concat(e.amount)}),Object(r.jsx)("td",{className:y.a.PrimaryText,children:e.orderStatus})]},e.id)},e.getOrdersByStatus=function(t,a){if(!a)return[];switch(t){case"new":return Object(_.a)(e.state.orderList).filter((function(e){return"New"===e.orderStatus}));case"packed":return Object(_.a)(e.state.orderList).filter((function(e){return"Packed"===e.orderStatus}));case"transit":return Object(_.a)(e.state.orderList).filter((function(e){return"InTransit"===e.orderStatus}));case"delivered":return Object(_.a)(e.state.orderList).filter((function(e){return"Delivered"===e.orderStatus}))}},e.onFilterCheckboxClick=function(t,a){switch(t){case"new":if(a){var r=[].concat(Object(_.a)(e.getOrdersByStatus("new",a)),Object(_.a)(e.getOrdersByStatus("packed",e.state.showPacked)),Object(_.a)(e.getOrdersByStatus("transit",e.state.showInTransit)),Object(_.a)(e.getOrdersByStatus("delivered",e.state.showDelivered)));e.setState({showNew:a,filteredList:Object(_.a)(r)})}else{r=Object(_.a)(e.state.filteredList).filter((function(e){return"New"!==e.orderStatus}));e.setState({showNew:a,filteredList:r})}break;case"packed":if(a){r=[].concat(Object(_.a)(e.getOrdersByStatus("new",e.state.showNew)),Object(_.a)(e.getOrdersByStatus("packed",a)),Object(_.a)(e.getOrdersByStatus("transit",e.state.showInTransit)),Object(_.a)(e.getOrdersByStatus("delivered",e.state.showDelivered)));e.setState({showPacked:a,filteredList:Object(_.a)(r)})}else{r=Object(_.a)(e.state.filteredList).filter((function(e){return"Packed"!==e.orderStatus}));e.setState({showPacked:a,filteredList:r})}break;case"transit":if(a){r=[].concat(Object(_.a)(e.getOrdersByStatus("new",e.state.showNew)),Object(_.a)(e.getOrdersByStatus("packed",e.state.showPacked)),Object(_.a)(e.getOrdersByStatus("transit",a)),Object(_.a)(e.getOrdersByStatus("delivered",e.state.showDelivered)));e.setState({showInTransit:a,filteredList:Object(_.a)(r)})}else{r=Object(_.a)(e.state.filteredList).filter((function(e){return"InTransit"!==e.orderStatus}));e.setState({showInTransit:a,filteredList:r})}break;case"delivered":if(a){r=[].concat(Object(_.a)(e.getOrdersByStatus("new",e.state.showNew)),Object(_.a)(e.getOrdersByStatus("packed",e.state.showPacked)),Object(_.a)(e.getOrdersByStatus("transit",e.state.showInTransit)),Object(_.a)(e.getOrdersByStatus("delivered",a)));e.setState({showDelivered:a,filteredList:Object(_.a)(r)})}else{r=Object(_.a)(e.state.filteredList).filter((function(e){return"Delivered"!==e.orderStatus}));e.setState({showDelivered:a,filteredList:r})}}},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;k.a.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders").then((function(t){console.log(t.data),e.setState({orderList:t.data,filteredList:t.data})})).catch()}},{key:"render",value:function(){var e,t,a,c,s=this,n=this.state.filteredList.map((function(e){return s.renderTableRow(e)}));return Object(r.jsxs)("div",{className:y.a.PageWrapper,children:[Object(r.jsx)("h1",{className:y.a.MainHeading,children:"Orders"}),Object(r.jsxs)("div",{className:y.a.OrdersWrapper,children:[Object(r.jsxs)("div",{className:y.a.FilterWrapper,children:[Object(r.jsx)("h3",{children:"Filters"}),Object(r.jsxs)("div",{className:y.a.FilterOptions,children:[Object(r.jsxs)("p",{className:y.a.TotalCount,children:["Count: ",this.state.filteredList.length]}),Object(r.jsxs)("label",{className:y.a.FilterCheckbox,children:[Object(r.jsx)("input",(e={onClick:function(e){return s.onFilterCheckboxClick("new",e.target.checked)},type:"checkbox",checked:this.state.showNew},Object(g.a)(e,"type","checkbox"),Object(g.a)(e,"name","orders-new"),e)),"New"]}),Object(r.jsxs)("label",{className:y.a.FilterCheckbox,children:[Object(r.jsx)("input",(t={onClick:function(e){return s.onFilterCheckboxClick("packed",e.target.checked)},type:"checkbox",checked:this.state.showPacked},Object(g.a)(t,"type","checkbox"),Object(g.a)(t,"name","orders-packed"),t)),"Packed"]}),Object(r.jsxs)("label",{className:y.a.FilterCheckbox,children:[Object(r.jsx)("input",(a={onClick:function(e){return s.onFilterCheckboxClick("transit",e.target.checked)},type:"checkbox",checked:this.state.showInTransit},Object(g.a)(a,"type","checkbox"),Object(g.a)(a,"name","orders-transit"),a)),"InTransit"]}),Object(r.jsxs)("label",{className:y.a.FilterCheckbox,children:[Object(r.jsx)("input",(c={onClick:function(e){return s.onFilterCheckboxClick("delivered",e.target.checked)},type:"checkbox",checked:this.state.showDelivered},Object(g.a)(c,"type","checkbox"),Object(g.a)(c,"name","orders-delivered"),c)),"Delivered"]})]})]}),Object(r.jsx)(x.b,{to:"orderdetail",className:y.a.OrderTable,children:Object(r.jsx)("div",{style:{width:"100%"},children:Object(r.jsxs)("table",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"ID"}),Object(r.jsx)("th",{children:"Customer"}),Object(r.jsx)("th",{children:"Date"}),Object(r.jsx)("th",{children:"Amount"}),Object(r.jsx)("th",{children:"Status"})]}),Object(r.jsx)("tbody",{children:n})]})})})]})]})}}]),a}(s.a.Component),v=a(23),N=a.n(v),T=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).onLoginClick=function(t){t.preventDefault();var a=t.target.username.value,r=t.target.password.value;a!==r?alert("Please Enter Valid Credentials "+a+" "+r):k.a.post("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/login",{username:a,password:r}).then((function(t){alert("Login Successful!"),localStorage.setItem("loginStatus",!0),e.props.onUserLoggedIn()})).catch((function(e){}))},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(r.jsx)("div",{className:N.a.MainPage,children:Object(r.jsxs)("form",{className:N.a.Login,onSubmit:this.onLoginClick,children:[Object(r.jsx)("h1",{children:"Sign In"}),Object(r.jsx)("input",{className:N.a.InputField,type:"text",name:"username",placeholder:"Enter Username"}),Object(r.jsx)("input",{className:N.a.InputField,type:"password",name:"password",placeholder:"Enter Password"}),Object(r.jsx)("input",{className:N.a.Button,type:"submit",value:"Login"})]})})}}]),a}(s.a.Component),P=a(7),I=a.n(P),C=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={productList:[],filteredList:[],showExpired:!0,showLowStock:!0},e.renderTableRow=function(e){var t=e.dob.split("-")[0],a=e.dob.split("-")[1],c=e.dob.split("-")[2];return Object(r.jsxs)("tr",{className:[I.a.TableRow,e.isExpired?I.a.ExpiredRow:null].join(" "),children:[Object(r.jsx)("td",{className:I.a.SecondaryText,children:e.id}),Object(r.jsx)("td",{className:I.a.PrimaryText,children:Object(r.jsx)("img",{className:I.a.ProfilePic,src:e.profilePic,alt:"Profile Pic"})}),Object(r.jsx)("td",{className:I.a.SecondaryText,children:e.fullName}),Object(r.jsx)("td",{className:I.a.PrimaryText,children:"".concat(t," ").concat(a,", ").concat(c)}),Object(r.jsx)("td",{className:I.a.SecondaryText,children:"".concat(e.gender)}),Object(r.jsx)("td",{className:I.a.SecondaryText,children:"".concat(e.currentCity,", ").concat(e.currentCountry)})]},e.id)},e.getOrdersByStatus=function(t,a){if(!a)return[];switch(t){case"expired":return Object(_.a)(e.state.productList).filter((function(e){return e.isExpired}));case"lowStock":return Object(_.a)(e.state.productList).filter((function(e){return e.isLowStock}));case"remaining":var r=Object(_.a)(e.state.productList).filter((function(e){return!e.isLowStock})).filter((function(e){return!e.isExpired}));return r.pop(),r.pop(),r}},e.onFilterCheckboxClick=function(t,a){switch(t){case"expired":if(a){var r=[].concat(Object(_.a)(e.getOrdersByStatus("expired",a)),Object(_.a)(e.getOrdersByStatus("lowStock",e.state.showLowStock)),Object(_.a)(e.getOrdersByStatus("remaining",a)));e.setState({showExpired:a,filteredList:Object(_.a)(r)})}else{r=Object(_.a)(e.state.filteredList).filter((function(e){return!e.isExpired}));e.setState({showExpired:a,filteredList:r})}break;case"lowStock":if(a){r=[].concat(Object(_.a)(e.getOrdersByStatus("expired",e.state.showExpired)),Object(_.a)(e.getOrdersByStatus("lowStock",a)),Object(_.a)(e.getOrdersByStatus("remaining",a)));e.setState({showLowStock:a,filteredList:Object(_.a)(r)})}else{r=Object(_.a)(e.state.filteredList).filter((function(e){return!e.isLowStock}));e.setState({showLowStock:a,filteredList:r})}}},e.onSearch=function(t){13===t.keyCode&&(t.target.value.length<2?(alert("Please enter atleast 2 characters"),e.setState({filteredList:Object(_.a)(e.state.productList)})):k.a.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users?fullName="+t.target.value).then((function(t){console.log(t.data),e.setState({filteredList:t.data})})).catch())},e.onClearClick=function(){k.a.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users").then((function(t){console.log(t.data),e.setState({filteredList:t.data})})).catch()},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;k.a.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users").then((function(t){console.log(t.data),e.setState({productList:t.data,filteredList:t.data})})).catch()}},{key:"render",value:function(){var e=this,t=this.state.filteredList.map((function(t){return e.renderTableRow(t)}));return Object(r.jsxs)("div",{className:I.a.PageWrapper,children:[Object(r.jsx)("h1",{className:I.a.MainHeading,children:"Users"}),Object(r.jsxs)("div",{className:I.a.OrdersWrapper,children:[Object(r.jsxs)("form",{className:I.a.FilterWrapper,onSubmit:function(e){return e.preventDefault()},children:[Object(r.jsx)("input",{onKeyUp:this.onSearch,className:I.a.SearchBox,type:"search",placeholder:"Search by Name"}),Object(r.jsx)("input",{type:"reset",onClick:this.onClearClick,className:I.a.Button,value:"Reset"})]}),Object(r.jsx)("div",{style:{width:"100%"},children:Object(r.jsxs)("table",{className:I.a.OrderTable,children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"ID"}),Object(r.jsx)("th",{children:"User Avatar"}),Object(r.jsx)("th",{children:"Full Name"}),Object(r.jsx)("th",{style:{minWidth:"100px"},children:"DoB"}),Object(r.jsx)("th",{children:"Gender"}),Object(r.jsx)("th",{children:"Current Location"})]}),Object(r.jsx)("tbody",{children:t})]})})]})]})}}]),a}(s.a.Component),D=a(30),B=a.n(D),E=a(22),M=a.n(E),A=function(e){return Object(r.jsxs)("div",{className:M.a.MainItem,children:[Object(r.jsxs)("h3",{className:M.a.Items,children:["OrderID - ",e.id]}),Object(r.jsxs)("h3",{className:M.a.Items,children:["CustomerName - ",e.customerName]}),Object(r.jsxs)("h3",{className:M.a.Items,children:["OrderDate -",e.orderDate]}),Object(r.jsxs)("h3",{className:M.a.Items,children:["Amount -",e.amount]}),Object(r.jsxs)("h3",{className:M.a.Items,children:["OrderStatus -",e.orderStatus]})]})},F=[{id:"714-69-5617",customerName:"Sally Whebell",orderDate:"07-Aug-2020",orderTime:"2:29 AM",amount:634.2,orderStatus:"Delivered"}],R=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={videoList:[]},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("Inside CDM"),k.a.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders/714-69-5617").then((function(t){e.setState({videoList:Object(_.a)(t.data)})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return console.log("Inside render"),Object(r.jsxs)("div",{className:B.a.Main,children:[Object(r.jsx)("h1",{className:B.a.MainHeading,children:"Order Detail"}),F.map((function(e){return Object(r.jsx)(A,{id:e.id,customerName:e.customerName,orderDate:e.orderDate,amount:e.amount,orderStatus:e.orderStatus})}))]})}}]),a}(s.a.Component),U=a(31),W=a(6),H=a.n(W),G=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={productList:[],filteredList:[],showExpired:!0,showLowStock:!0},e.renderTableRow=function(e){var t=e.expiryDate.split("-")[0],a=e.expiryDate.split("-")[1],c=e.expiryDate.split("-")[2];return Object(r.jsxs)("tr",{className:[H.a.TableRow,e.isExpired?H.a.ExpiredRow:null].join(" "),children:[Object(r.jsx)("td",{className:H.a.SecondaryText,children:e.id}),Object(r.jsx)("td",{className:H.a.PrimaryText,children:e.medicineName}),Object(r.jsx)("td",{className:H.a.SecondaryText,children:e.medicineBrand}),Object(r.jsx)("td",{className:H.a.PrimaryText,children:"".concat(t," ").concat(a,", ").concat(c)}),Object(r.jsx)("td",{className:H.a.SecondaryText,children:"$".concat(e.unitPrice)}),Object(r.jsx)("td",{className:H.a.SecondaryText,children:e.stock})]},e.id)},e.getOrdersByStatus=function(t,a){if(!a)return[];switch(t){case"expired":return Object(_.a)(e.state.productList).filter((function(e){return e.isExpired}));case"lowStock":return Object(_.a)(e.state.productList).filter((function(e){return e.isLowStock}));case"remaining":var r=Object(_.a)(e.state.productList).filter((function(e){return!e.isLowStock})).filter((function(e){return!e.isExpired}));return r.pop(),r.pop(),r}},e.onFilterCheckboxClick=function(t,a){switch(t){case"expired":if(a){var r=[].concat(Object(_.a)(e.getOrdersByStatus("expired",a)),Object(_.a)(e.getOrdersByStatus("lowStock",e.state.showLowStock)),Object(_.a)(e.getOrdersByStatus("remaining",a)));e.setState({showExpired:a,filteredList:Object(_.a)(r)})}else{r=Object(_.a)(e.state.filteredList).filter((function(e){return!e.isExpired}));e.setState({showExpired:a,filteredList:[].concat(Object(_.a)(r),Object(_.a)(e.getOrdersByStatus("remaining",a)))})}break;case"lowStock":if(a){r=[].concat(Object(_.a)(e.getOrdersByStatus("expired",e.state.showExpired)),Object(_.a)(e.getOrdersByStatus("lowStock",a)),Object(_.a)(e.getOrdersByStatus("remaining",a)));e.setState({showLowStock:a,filteredList:Object(_.a)(r)})}else{r=Object(_.a)(e.state.filteredList).filter((function(e){return!e.isLowStock}));e.setState({showLowStock:a,filteredList:[].concat(Object(_.a)(r),Object(_.a)(e.getOrdersByStatus("remaining",a)))})}}},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;k.a.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products").then((function(t){console.log(t.data);var a=Object(_.a)(t.data).map((function(e){return Object(U.a)(Object(U.a)({},e),{},{isExpired:new Date(e.expiryDate).getTime()<(new Date).getTime(),isLowStock:e.stock<100})}));e.setState({productList:Object(_.a)(a),filteredList:Object(_.a)(a)})})).catch()}},{key:"render",value:function(){var e,t,a=this,c=this.state.filteredList.map((function(e){return a.renderTableRow(e)}));return Object(r.jsxs)("div",{className:H.a.PageWrapper,children:[Object(r.jsx)("h1",{className:H.a.MainHeading,children:"Products"}),Object(r.jsxs)("div",{className:H.a.OrdersWrapper,children:[Object(r.jsxs)("div",{className:H.a.FilterWrapper,children:[Object(r.jsx)("h3",{children:"Filters"}),Object(r.jsxs)("div",{className:H.a.FilterOptions,children:[Object(r.jsxs)("p",{className:H.a.TotalCount,children:["Count: ",this.state.filteredList.length]}),Object(r.jsxs)("label",{className:H.a.FilterCheckbox,children:[Object(r.jsx)("input",(e={onClick:function(e){return a.onFilterCheckboxClick("expired",e.target.checked)},type:"checkbox",checked:this.state.showExpired},Object(g.a)(e,"type","checkbox"),Object(g.a)(e,"name","product-expired"),e)),"Expired"]}),Object(r.jsxs)("label",{className:H.a.FilterCheckbox,children:[Object(r.jsx)("input",(t={onClick:function(e){return a.onFilterCheckboxClick("lowStock",e.target.checked)},type:"checkbox",checked:this.state.showLowStock},Object(g.a)(t,"type","checkbox"),Object(g.a)(t,"name","product-low-stock"),t)),"Low Stock"]})]})]}),Object(r.jsx)(x.b,{to:"productdetail",className:H.a.OrderTable,children:Object(r.jsx)("div",{style:{width:"100%"},children:Object(r.jsxs)("table",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"ID"}),Object(r.jsx)("th",{children:"Product Name"}),Object(r.jsx)("th",{children:"Product Brand"}),Object(r.jsx)("th",{style:{minWidth:"100px"},children:"Expiry Date"}),Object(r.jsx)("th",{children:"Unit Price"}),Object(r.jsx)("th",{children:"Stock"})]}),Object(r.jsx)("tbody",{children:c})]})})})]})]})}}]),a}(s.a.Component),q=a(32),Z=a.n(q),K=a(20),Y=a.n(K),z=function(e){return Object(r.jsxs)("div",{className:Y.a.MainItem,children:[Object(r.jsxs)("h3",{className:Y.a.Items,children:["ProductID - ",e.id]}),Object(r.jsxs)("h3",{className:Y.a.Items,children:["MedicineName - ",e.medicineName]}),Object(r.jsxs)("h3",{className:Y.a.Items,children:["MedicineBrand -",e.medicineBrand]}),Object(r.jsxs)("h3",{className:Y.a.Items,children:["ExpiryDate -",e.expiryDate]}),Object(r.jsxs)("h3",{className:Y.a.Items,children:["UnitPrice -",e.unitPrice]}),Object(r.jsxs)("h3",{className:Y.a.Items,children:["PrescriptionRequired -",e.prescriptionRequired]}),Object(r.jsxs)("h3",{className:Y.a.Items,children:["Stock -",e.stock]})]})},J=[{id:"56104-020",medicineName:"Miconazole Nitrate",medicineBrand:"Premier Brands of America Inc.",expiryDate:"14-Aug-2012",unitPrice:993.01,prescriptionRequired:!1,stock:725}],Q=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={ProductDeatil:[]},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("Inside CDM"),k.a.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products/56104-020").then((function(t){e.setState({ProductDeatil:Object(_.a)(t.data)})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return console.log("Inside render"),Object(r.jsxs)("div",{className:Z.a.Main,children:[Object(r.jsx)("h1",{className:Z.a.MainHeading,children:"PRODUCT DETAILS"}),J.map((function(e){return Object(r.jsx)(z,{id:e.id,medicineName:e.medicineName,medicineBrand:e.medicineBrand,expiryDate:e.expiryDate,unitPrice:e.unitPrice,prescriptionRequired:e.prescriptionRequired,stock:e.stock})}))]})}}]),a}(s.a.Component),V=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={loginStatus:"true"===localStorage.getItem("loginStatus")},e.onUserLoggedIn=function(){localStorage.setItem("loginStatus",!0),e.setState({loginStatus:!0})},e.onUserLoggedOut=function(){localStorage.setItem("loginStatus",!1),e.setState({loginStatus:!1})},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(r.jsx)(x.a,{children:Object(r.jsxs)("div",{className:b.a.App,children:[Object(r.jsx)(f,{loginStatus:this.state.loginStatus,onUserLoggedOut:this.onUserLoggedOut}),Object(r.jsx)("main",{className:b.a.MainContainer,children:Object(r.jsx)(p.d,{children:this.state.loginStatus?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(p.b,{path:m.ORDER_LIST,component:L}),Object(r.jsx)(p.b,{path:m.ORDER_DETAIL,component:R}),Object(r.jsx)(p.b,{path:m.LOGIN_PAGE,component:function(){return Object(r.jsx)(p.a,{to:e.state.loginStatus?m.ORDER_LIST:m.LOGIN_PAGE})}}),Object(r.jsx)(p.b,{path:m.PRODUCT_LIST,component:G}),Object(r.jsx)(p.b,{path:m.PRODUCT_DETAIL,component:Q}),Object(r.jsx)(p.b,{path:m.USER_LIST,component:C}),Object(r.jsx)(p.b,{exact:!0,path:m.HOME_PAGE,render:function(){return Object(r.jsx)(p.a,{to:e.state.loginStatus?m.ORDER_LIST:m.LOGIN_PAGE})}})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(p.b,{path:m.LOGIN_PAGE,render:function(){return Object(r.jsx)(T,{onUserLoggedIn:e.onUserLoggedIn})}}),Object(r.jsx)(p.b,{render:function(){return Object(r.jsx)(p.a,{to:m.LOGIN_PAGE})}})]})})})]})})}}]),a}(s.a.Component),X=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,74)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,n=t.getTTFB;a(e),r(e),c(e),s(e),n(e)}))};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(V,{})}),document.getElementById("root")),X()}},[[73,1,2]]]);
//# sourceMappingURL=main.a2c9c458.chunk.js.map