import { Component, Input, Output, EventEmitter, HostListener, OnInit, ElementRef, ViewChild } from "@angular/core";
import { _ } from "lodash";
import { Frame, topmost } from "tns-core-modules/ui/frame";
import { Color } from 'color';
import { OskaTreeDataSourceService } from './oska-tree-datasource.service';

@Component({
	selector: 'Tree',
	templateUrl: './pages/shared-components/oska-tree/tree.html',
	styleUrls: [ './pages/shared-components/oska-tree/oska-tree.css' ]
})

export class TreeComponent implements OnInit {

	constructor(public elRef: ElementRef, public frame: Frame, public dataSource: OskaTreeDataSourceService) {
	}

	@Input()
	private properties: IProperties;
	@Input()
	private data: ITreeItem[];
	@Output() treeCheckedChange: EventEmitter<ITreeItem> = new EventEmitter();
	public onCheckedChange(treeItem: ITreeItem) {
		this.treeCheckedChange.emit(treeItem);
	}

	private checkedChange(e, item) {
		if (item.checked !== e.value) {
			item.checked = e.value;
		}
		if (item.children && item.children.length) {
			item.collapsed = false;
			_.each(item.children, child => {
				child.checked = e.value;
			});
		}

		this.onCheckedChange(item);
	}

	private onTapLabel(e, item) {
		this.selectItem(item);
		this._deSelectAll(null, item);
	}

	private selectItem(item: ITreeItem) {
		item.checked = true;
	}

	private _deSelectAll(data?: ITreeItem[], skip?: ITreeItem) {
		if (!data) {
			data = this.dataSource.data;
		}

		if (!data.length) {
			return;
		}

		_.each(data, item => {
			if (skip && skip.id === item.id) {
				return;
			}

			item.checked = false;
			if (item.children.length) {
				this._deSelectAll(item.children, skip);
			}
		});
	}

	ngOnInit() {
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
