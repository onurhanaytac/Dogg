package com.tns.gen.com.google.android.gms.maps;

public class GoogleMap_OnMapClickListener implements com.google.android.gms.maps.GoogleMap.OnMapClickListener {
	public GoogleMap_OnMapClickListener() {
		com.tns.Runtime.initInstance(this);
	}

	public void onMapClick(com.google.android.gms.maps.model.LatLng param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onMapClick", void.class, args);
	}

}