import { Component, Input, Output, EventEmitter, HostListener, OnInit, ElementRef, ViewChild } from "@angular/core";
import { _ } from "lodash";
import { Frame, topmost } from "tns-core-modules/ui/frame";
import { Color } from 'color';
import { OskaTreeDataSourceService } from './oska-tree-datasource.service';


@Component({
	selector: 'OskaTree',
	templateUrl: './pages/shared-components/oska-tree/oska-tree.html',
	styleUrls: ['./pages/shared-components/oska-tree/oska-tree.css'],
	providers: [ OskaTreeDataSourceService ]
})

export class OskaTreeComponent implements OnInit {

	private _elementRef: ElementRef;
	private _frame: Frame;
	constructor(elRef: ElementRef, frame: Frame, otds: OskaTreeDataSourceService) {
		this._elementRef = elRef;
		this._frame = frame;
		this.dataSource = otds
	}

	@Input()
	private treeBranch: boolean;

	@Input()
	public data: any;

	@Input()
	public properties: IProperties;

	private _treeItems: ITreeItem[];

	private dataSource: OskaTreeDataSourceService;

	private childProperties: IProperties = {
		id: "id",
		name: "name",
		children: "children"
	}

	@Output() treeCheckedChange: EventEmitter<ITreeItem[]> = new EventEmitter();
	public onCheckedChange(ds: ITreeItem[]) {
		this.treeCheckedChange.emit(this.dataSource.data);
	}

	private prepareData(_data: any) {
		this._treeItems = this.getChildren(_data);
		this.findCurrentBiggestIntId(this._treeItems);
		this.giveIdToAllItems(this._treeItems);

		if (!this.dataSource || !this.dataSource.data || !this.dataSource.data.length) {
			if (!this.treeBranch) {
				this.dataSource.data = this._treeItems;
				debugger
			}
		}
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
				checked: false,
				collapsed: true
			}

			_children.push(child);
		});

		return _children;
	}

	private onTapCheckbox(e, item) {
		let parentDataItem = _.find(this._treeItems, { "id": item.id, "name": item.name });
		parentDataItem.checked = e.value;

		if (item.children && item.children.length) {
			parentDataItem.collapsed = false;
			_.each(parentDataItem.children, child => {
				let view = this._frame.getViewById("" + child.id);
				if (e.value === !(view as any).checked) {
					(view as any).toggle();
					child.checked = (view as any).checked;
					parentDataItem.checked = (view as any).checked;
					this.updateDataSource(child);
				}
			});

		}
		this.updateDataSource(parentDataItem);
		this.onCheckedChange(this.dataSource.data);
	}

	private onTapLabel(e, item) {
		this._deSelectAll();
		this.selectItem(item)
	}

	private onTapButton(e, item) {
		let _item = _.find(this._treeItems, { "id": item.id, "name": item.name });
		_item.collapsed = !_item.collapsed;
	}

	private selectItem(item: ITreeItem) {
		let view = this._frame.getViewById("" + item.id);
		if (!(view as any).checked) {
			(view as any).toggle();
		}
	}

	private _deSelectAll(data?: ITreeItem[], skip?: ITreeItem) {
		if (!data) {
			data = _.clone(this.dataSource.data);
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

	public getDataSource() {
		return this.dataSource.data;
	}

	private _checkedItems: ITreeItem[] = [];
	public getChecked() {
		let data = _.clone(this.dataSource.data);

		debugger
	}

	updateDataSource(item: ITreeItem) {
		this.dataSource.data = this.findAndUpdate(item, this.dataSource.data);
		debugger
	}

	findAndUpdate(item: ITreeItem, _dataSource: ITreeItem[]) {
		let dataItem = _.find(_dataSource, { "id": item.id, "name": item.name });

		if (dataItem) {
			dataItem.checked = item.checked;
			return _dataSource;
		}
		_.each(_dataSource, _item => {
			if (_item.children.length) {
				_item.children = this.findAndUpdate(item, _item.children);
			}
		});

		return _dataSource;
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
	checked?: boolean;
	collapsed?: boolean;
}

interface IProperties {
	id: string;
	name: string;
	children: string;
	checkbox?: boolean;
	checkChildren?: boolean;
}
