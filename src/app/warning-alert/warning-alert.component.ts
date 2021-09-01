import { Component } from '@angular/core';

@Component ({
    selector: 'app-warning-alert',
    template: `
        <p>This is warning, you are in danger!</p>    
    `,
    styles: [`
        p {
            padding: 20px;
            background-color: mistyrose;
            border: 4px solid red;
        }
    `]
    // templateUrl: './warning-alert.component.html'
})
export class WarningAlertComponent {

}
