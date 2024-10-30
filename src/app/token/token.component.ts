import { Component } from '@angular/core';
import { UserTO } from '../models/user-to';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent {
  token: string = "";
  message: string = "";
  user: UserTO = { userName: "", password: "" };

  constructor(private service: TokenService) {}

  onSubmit() {
    this.service.sendTokenRequest(this.user).subscribe(
      (response: string) => {
        this.token = response;
        
        // Now call sendAuthRequest with the token after it's received
        this.service.sendAuthRequest(this.token).subscribe(
          (authResponse: string) => {
            this.message = authResponse;
          },
          (authError) => {
            console.error('Error fetching auth message', authError);
          }
        );
      },
      (error) => {
        console.error('Error fetching token', error);
      }
    );
  }
}
