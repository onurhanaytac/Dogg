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

	constructor(public elRef: ElementRef, public frame: Frame, public dataSource: OskaTreeDataSourceService) {
	}

	@Input()
	public properties: IProperties;
	@Input()
	private data: ITreeItem[];
	@Output() treeCheckedChange: EventEmitter<ITreeItem> = new EventEmitter();
	public onCheckedChange(treeItem: ITreeItem) {
		this.treeCheckedChange.emit(treeItem);
	}

	private prepareData(_data: any) {
		_data = this.getChildren(_data);
		this.findCurrentBiggestIntId(_data);
		this.giveIdToAllItems(_data);

		this.dataSource.data = _data;
	}

	private getChildren (children: any) {
		let _children: ITreeItem[] = [];
		let _child: ITreeItem;

		_.each(children, child => {
			_child = { id: "string", name: "string"}

			_.each(_.keys(child), key => {
				_child[key] = child[key];
			});

			_child["id"] = child[this.properties.id] ? child[this.properties.id] : "";
			_child["name"] = child[this.properties.name];
			_child["children"] = this.getChildren(child[this.properties.children]);
			_child["checked"] = false;
			_child["collapsed"] = false;

			_children.push(_child);
		});

		return _children;
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

	public selectFirstSmallestChild(data) {
		if (!data) {
			data = this.dataSource.data;
		}

		if (data && data[0] && data[0].children && data[0].children.length) {
			return this.selectFirstSmallestChild(data[0].children)
		}

		data[0].checked = true;
		debugger

	}

	ngOnInit() {
		this.prepareData(this.data);
	}

	ngAfterViewInit() {
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
