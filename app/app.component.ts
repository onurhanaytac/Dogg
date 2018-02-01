import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <StackLayout orientation="vertical">
    	<Image src="res://logo_login" stretch="none" horizontalAlignment="center"></Image>

      <TextField hint="Email Address" keyboardType="email" autocorrect="false" autocapitalizationType="none" [(ngModel)]="email"></TextField>
      <TextField hint="Password" secure="true"></TextField>

      <Button text="Sign in" class="submit-button" (tap)="submit()"></Button>
      <Button text="Sign up for Dogg"></Button>
    </StackLayout>
  `,
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})


export class AppComponent {
	email = "canerz@dogg.com";

	submit() {
		console.log(this.email)
	}
}
