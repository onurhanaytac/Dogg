import * as utils from "utils/utils";
import { isIOS, isAndroid } from "platform";
import * as frame from "ui/frame";

export class DismissSoftKeybaord {
	public static dismiss() {
	 if (isIOS) {
	    frame.topmost().nativeView.endEditing(true);
	 }
	 if (isAndroid) {
	   utils.ad.dismissSoftInput();
	 }
	}
}
