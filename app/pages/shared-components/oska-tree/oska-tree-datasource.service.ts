import { Injectable } from "@angular/core";

@Injectable()
export class OskaTreeDataSourceService {
  constructor() {
  }

  private _dataSource: ITreeItem[] = [];

  get data() {
    return this._dataSource
  }

  set data(data) {
    this._dataSource = data;
  }

}

interface ITreeItem {
  id: string;
  name: string;
  children?: ITreeItem[];
  checked?: boolean;
  collapsed?: boolean;
}
