import { Component, Input, Output, EventEmitter, HostListener, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Data } from "../../../shared/data";
import { _ } from "lodash";
import { Frame, topmost } from "tns-core-modules/ui/frame";

@Component({
	selector: 'OskaTree',
	templateUrl: './pages/shared-components/oska-tree/oska-tree.html',
	styleUrls: ['./pages/shared-components/oska-tree/oska-tree.css']
})

export class OskaTreeComponent implements OnInit {

	private _elementRef: ElementRef;
	private _frame: Frame;
	constructor(elRef: ElementRef, frame: Frame) {
		this._elementRef = elRef;
		this._frame = frame;
	}

	private _treeItems: ITreeItem[];

	@Input()
	public data: any;

	@Input()
	public properties: IProperties;

	@Input()
	private dataSource: ITreeItem[];

	private childProperties: IProperties = {
		id: "id",
		name: "name",
		children: "children"
	}

	@Output() setupItemView: EventEmitter<null> = new EventEmitter();
	public onSetupItemView() {
		this.setupItemView.emit();
	}

	private prepareData(_data: any) {
		this._treeItems = this.getChildren(_data);
		this.findCurrentBiggestIntId(this._treeItems);
		this.giveIdToAllItems(this._treeItems);

		if (!this.dataSource || !this.dataSource.length) {
			this.dataSource = this._treeItems;
		}
		debugger
	}

	private currentBiggestIntId: number = -1;
	private giveIdToAllItems(data) {
		_.each(data, item => {
			if (item.id === "") {
				this.currentBiggestIntId++;
				item.id = this.currentBiggestIntId;
			}

			if (item.children.length) {
				this.giveIdToAllItems(item.children);
			}
		})
	}

	private findCurrentBiggestIntId(data) {
		_.each(data, item => {
			let _id = typeof parseInt(item.id) === "number" ? parseInt(item.id) : -1;
			this.currentBiggestIntId = this.currentBiggestIntId < _id ? _id : this.currentBiggestIntId
			if (item.children.length) {
				this.findCurrentBiggestIntId(item.children)
			}
		});
	}

	private getChildren (children: any) {
		let _children: ITreeItem[] = [];
		let child: ITreeItem;

		_.each(children, child => {
			child = {
				id: child[this.properties.id] ? child[this.properties.id] : "",
				name: child[this.properties.name],
				children: this.getChildren(child[this.properties.children]),
				checked: false
			}

			_children.push(child);
		});

		return _children;
	}

	private onTapCheckbox(e, item) {
		if (item.children && item.children.length) {
			let parentDataItem = _.find(_.clone(this._treeItems), { "id": item.id, "name": item.name });
			_.each(parentDataItem.children, child => {
				let view = this._frame.getViewById("" + child.id);
				if (e.value === !(view as any).checked) {
					(view as any).toggle();
				}
			});
		}
	}

	private onTapLabel(e, item) {
		this._deSelectAll();
		this.selectItem(item)
	}

	private selectItem(item: ITreeItem) {
		let view = this._frame.getViewById("" + item.id);
		if (!(view as any).checked) {
			(view as any).toggle();
		}
	}

	private _deSelectAll(data?: ITreeItem[], skip?: ITreeItem) {
		if (!data) {
			data = _.clone(this.dataSource);
		}

		if (!data.length) {
			return;
		}

		_.each(data, item => {
			let view = this._frame.getViewById("" + item.id);

			if ((view as any).checked) {
				(view as any).toggle();
			}

			if (item.children.length) {
				this._deSelectAll(item.children);
			}
		});
	}

	ngOnInit() {
		this.childProperties["checkbox"] = this.properties["checkbox"];
		this.childProperties["checkChildren"] = this.properties["checkChildren"];
		this.prepareData(this.data);
	}
}

interface ITreeItem {
	id: string;
	name: string;
	children?: ITreeItem[];
	checked?: any;
}

interface IProperties {
	id: string;
	name: string;
	children: string;
	checkbox?: boolean;
	checkChildren?: boolean;
}
