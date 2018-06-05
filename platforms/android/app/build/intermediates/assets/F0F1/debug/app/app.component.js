"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this._dataItems = [
            {
                name: "osman",
                description: "desgf"
            },
            {
                name: "ali",
                description: "desgf"
            }
        ];
        console.dir(this._dataItems);
    }
    AppComponent.prototype.ngOnInit = function () {
        console.dir(this._dataItems);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "app-cmp",
            template: "\n    <GridLayout tkExampleTitle tkToggleNavButton>\n\t    <RadListView [items]=\"_dataItems\">\n        <ng-template tkListItemTemplate let-item=\"item\">\n          <StackLayout orientation=\"vertical\">\n            <Label class=\"nameLabel\" [text]=\"item.name\"></Label>\n            <Label class=\"descriptionLabel\" [text]=\"item.description\"></Label>\n          </StackLayout>\n        </ng-template>\n\t    </RadListView>\n\t\t</GridLayout>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFpQjFDO0lBV0k7UUFWTyxlQUFVLEdBQVE7WUFDekI7Z0JBQ0MsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsV0FBVyxFQUFFLE9BQU87YUFDcEI7WUFDRDtnQkFDQyxJQUFJLEVBQUUsS0FBSztnQkFDWCxXQUFXLEVBQUUsT0FBTzthQUNwQjtTQUNELENBQUM7UUFFQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBR0QsK0JBQVEsR0FBUjtRQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFsQlEsWUFBWTtRQWZ4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLHdjQVdUO1NBQ0YsQ0FBQzs7T0FDVyxZQUFZLENBbUJ4QjtJQUFELG1CQUFDO0NBQUEsQUFuQkQsSUFtQkM7QUFuQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXBwLWNtcFwiLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxHcmlkTGF5b3V0IHRrRXhhbXBsZVRpdGxlIHRrVG9nZ2xlTmF2QnV0dG9uPlxuXHQgICAgPFJhZExpc3RWaWV3IFtpdGVtc109XCJfZGF0YUl0ZW1zXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSB0a0xpc3RJdGVtVGVtcGxhdGUgbGV0LWl0ZW09XCJpdGVtXCI+XG4gICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIj5cbiAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cIm5hbWVMYWJlbFwiIFt0ZXh0XT1cIml0ZW0ubmFtZVwiPjwvTGFiZWw+XG4gICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJkZXNjcmlwdGlvbkxhYmVsXCIgW3RleHRdPVwiaXRlbS5kZXNjcmlwdGlvblwiPjwvTGFiZWw+XG4gICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cblx0ICAgIDwvUmFkTGlzdFZpZXc+XG5cdFx0PC9HcmlkTGF5b3V0PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIFx0cHJpdmF0ZSBfZGF0YUl0ZW1zOiBhbnkgPSBbXG4gIFx0XHR7XG4gIFx0XHRcdG5hbWU6IFwib3NtYW5cIixcbiAgXHRcdFx0ZGVzY3JpcHRpb246IFwiZGVzZ2ZcIlxuICBcdFx0fSxcbiAgXHRcdHtcbiAgXHRcdFx0bmFtZTogXCJhbGlcIixcbiAgXHRcdFx0ZGVzY3JpcHRpb246IFwiZGVzZ2ZcIlxuICBcdFx0fVxuICBcdF07XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgXHRjb25zb2xlLmRpcih0aGlzLl9kYXRhSXRlbXMpO1xuICAgIH1cblxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgXHRjb25zb2xlLmRpcih0aGlzLl9kYXRhSXRlbXMpO1xuICAgIH1cbn1cbiJdfQ==