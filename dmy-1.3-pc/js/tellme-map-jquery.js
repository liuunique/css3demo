// 百度地图API功能
	var map = new BMap.Map("allmap");
	var point = new BMap.Point(113.65082,34.731313);
	map.centerAndZoom(point,16);
	
	var marker = new BMap.Marker(point);  // 创建标注
	map.addOverlay(marker); // 将标注添加到地图中
	var opts = {
	  width : 200,     // 信息窗口宽度
	  height: 80,     // 信息窗口高度
	  title : "多美源网络科技有限公司" , // 信息窗口标题
	  enableMessage:true,//设置允许信息窗发送短息
	}
	var infoWindow = new BMap.InfoWindow("地址：河南省郑州市大学路升龙天玺8号楼1115室", opts);  // 创建信息窗口对象 
        
		map.openInfoWindow(infoWindow,point); //开启信息窗口