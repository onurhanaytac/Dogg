import { Component } from "@angular/core";

@Component({
  selector: "app-cmp",
  template: `
    <GridLayout tkExampleTitle tkToggleNavButton>
	    <RadListView [items]="_dataItems">
        <ng-template tkListItemTemplate let-item="item">
          <StackLayout orientation="vertical">
            <Label class="nameLabel" [text]="item.name"></Label>
            <Label class="descriptionLabel" [text]="item.description"></Label>
          </StackLayout>
        </ng-template>
	    </RadListView>
		</GridLayout>
  `
})
export class AppComponent {
  	private _dataItems: any = [
  		{
  			name: "osman",
  			description: "desgf"
  		},
  		{
  			name: "ali",
  			description: "desgf"
  		}
  	];
    constructor() {
    	console.dir(this._dataItems);
    }


    ngOnInit() {
    	console.dir(this._dataItems);
    }
}
