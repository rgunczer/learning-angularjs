import { Component } from '@angular/core';

@Component({
    selector: 'mw-app',
    // template: `
    //     <h1>My Apps</h1>
    //     <p>Keeping track fo the media I want to watch</p>
    // `
    templateUrl: 'app/app.component.html',
    // styles: [`
    //     h1 { color: #fff; }
    //     .description {
    //         font-style: italic;
    //         color: green;
    //     }
    // `]
    styleUrls: ['app/app.component.css']

})
export class AppComponent {

    firstMediaItem = {
        id: 1,
        medium: "Series",
        name: "Firebug",
        category: "Science Fiction",
        year: 2010,
        // watchedOn: 1294166565384,
        watchedOn: null,
        isFavorite: false
    };

    onMediaItemDelete(mediaItem) {
        console.log('onMediaItemDelete...');
    }

}