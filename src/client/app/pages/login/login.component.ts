/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5e2456320cfc6233ae9336d8
*
* You will get 10% discount for each one of your friends
* 
*/
import { Observable } from 'rxjs/Rx';
import { AuthenticationService } from '../../security/authentication.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { sha3_512 } from 'js-sha3';

/**
 * Component for manage login
 */
@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {
    username: string = "";
    password: string = "";
    remember: boolean = false;
    showError: boolean = false;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ){ }

    closeError = function(){
        this.showError = null;
    }

    /**
     * Login action
     */
    login() {
        const sha3pass = sha3_512(this.password).toString();
        this.authenticationService.login(this.username, sha3pass, this.remember).subscribe(result => {
            if (result == true) {
                this.router.navigate(['/']);
            } else {
                // show login error
                if (this.showError) {
                    this.closeError();
                    setTimeout(()=>{
                        this.showError = true; 
                }, 100);
                } else {
                    this.showError = true; 
                }
            }
        });
    }
}